import React, { useState, useEffect } from 'react';
import julesService from '../services/julesService';

/**
 * Jules Integration Example Component
 * 
 * This component demonstrates how to integrate Jules API into your React application.
 * It shows:
 * - Initializing the Jules service
 * - Sending text queries
 * - Processing voice input
 * - Handling WebSocket connections
 * - Displaying responses
 */
const JulesIntegrationExample = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);

  // Initialize Jules service on component mount
  useEffect(() => {
    const initJules = async () => {
      try {
        const result = await julesService.initialize();
        if (result.success) {
          setIsConnected(true);
          console.log('Jules connected successfully');
          
          // Connect WebSocket for real-time updates
          julesService.connectWebSocket((data) => {
            console.log('WebSocket message:', data);
            setMessages(prev => [...prev, data]);
          });
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    initJules();

    // Cleanup on unmount
    return () => {
      julesService.disconnect();
    };
  }, []);

  // Handle text query submission
  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await julesService.sendQuery(query);
      setResponse(result);
      setQuery('');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle voice input (placeholder - implement your audio capture logic)
  const handleVoiceInput = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Implement audio capture logic
      // For now, this is a placeholder
      const audioData = 'base64_encoded_audio_data';
      const result = await julesService.processVoiceInput(audioData);
      setResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="jules-integration-example p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Jules Integration Example</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm">Status:</span>
          <span className={`px-2 py-1 rounded text-xs ${
            isConnected 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Query Input Form */}
      <div className="mb-6">
        <form onSubmit={handleSubmitQuery} className="space-y-4">
          <div>
            <label htmlFor="query" className="block text-sm font-medium mb-2">
              Send Query to Jules
            </label>
            <div className="flex gap-2">
              <input
                id="query"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your question here..."
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isConnected || isLoading}
              />
              <button
                type="submit"
                disabled={!isConnected || isLoading || !query.trim()}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </form>

        {/* Voice Input Button */}
        <div className="mt-4">
          <button
            onClick={handleVoiceInput}
            disabled={!isConnected || isLoading}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
            Process Voice Input
          </button>
        </div>
      </div>

      {/* Response Display */}
      {response && (
        <div className="mb-6 p-4 bg-gray-50 border rounded">
          <h3 className="font-semibold mb-2">Response:</h3>
          <pre className="text-sm whitespace-pre-wrap">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}

      {/* Real-time Messages */}
      {messages.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Real-time Messages:</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded text-sm">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(msg, null, 2)}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h3 className="font-semibold mb-2">📝 Usage Instructions:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Make sure you've configured your <code className="bg-gray-200 px-1 rounded">.env</code> file with Jules API credentials</li>
          <li>The service will auto-initialize on component mount</li>
          <li>Use the text input to send queries to Jules</li>
          <li>Click the voice button to process audio input (requires implementation)</li>
          <li>Real-time messages from Jules WebSocket will appear below</li>
        </ol>
      </div>
    </div>
  );
};

export default JulesIntegrationExample;
