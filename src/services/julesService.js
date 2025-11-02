/**
 * Jules API Service
 * 
 * This service provides integration with the Jules API for voice and AI capabilities.
 * Make sure to configure your .env file with proper Jules API credentials.
 */

const JULES_CONFIG = {
  apiUrl: import.meta.env.VITE_JULES_API_URL,
  apiKey: import.meta.env.VITE_JULES_API_KEY,
  wsUrl: import.meta.env.VITE_JULES_WS_URL,
  environment: import.meta.env.VITE_JULES_ENV || 'development',
  debug: import.meta.env.VITE_JULES_DEBUG === 'true'
};

/**
 * Jules Service Class
 * Handles all communication with Jules API
 */
class JulesService {
  constructor() {
    this.isConnected = false;
    this.websocket = null;
    this.listeners = new Map();
  }

  /**
   * Initialize connection to Jules API
   */
  async initialize() {
    try {
      if (!JULES_CONFIG.apiKey) {
        throw new Error('Jules API key not configured. Please check your .env file.');
      }

      // Test API connection
      const response = await this.makeRequest('/health');
      
      if (JULES_CONFIG.debug) {
        console.log('Jules API connected:', response);
      }

      this.isConnected = true;
      return { success: true, message: 'Connected to Jules API' };
    } catch (error) {
      console.error('Failed to initialize Jules:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Make HTTP request to Jules API
   */
  async makeRequest(endpoint, options = {}) {
    const url = `${JULES_CONFIG.apiUrl}${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${JULES_CONFIG.apiKey}`,
      'Content-Type': 'application/json',
      ...options.headers
    };

    const response = await fetch(url, {
      ...options,
      headers
    });

    if (!response.ok) {
      throw new Error(`Jules API error: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Connect to Jules WebSocket for real-time features
   */
  connectWebSocket(onMessage) {
    if (!JULES_CONFIG.wsUrl) {
      console.warn('Jules WebSocket URL not configured');
      return;
    }

    this.websocket = new WebSocket(`${JULES_CONFIG.wsUrl}?token=${JULES_CONFIG.apiKey}`);

    this.websocket.onopen = () => {
      if (JULES_CONFIG.debug) {
        console.log('Jules WebSocket connected');
      }
    };

    this.websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (onMessage) {
        onMessage(data);
      }
      this.notifyListeners(data);
    };

    this.websocket.onerror = (error) => {
      console.error('Jules WebSocket error:', error);
    };

    this.websocket.onclose = () => {
      if (JULES_CONFIG.debug) {
        console.log('Jules WebSocket disconnected');
      }
    };
  }

  /**
   * Subscribe to Jules events
   */
  subscribe(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  /**
   * Unsubscribe from Jules events
   */
  unsubscribe(event, callback) {
    if (this.listeners.has(event)) {
      const callbacks = this.listeners.get(event);
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  /**
   * Notify all listeners of an event
   */
  notifyListeners(data) {
    const { event, payload } = data;
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => callback(payload));
    }
  }

  /**
   * Send voice input to Jules for processing
   */
  async processVoiceInput(audioData) {
    try {
      const response = await this.makeRequest('/voice/process', {
        method: 'POST',
        body: JSON.stringify({ audio: audioData })
      });
      return response;
    } catch (error) {
      console.error('Voice processing error:', error);
      throw error;
    }
  }

  /**
   * Send text query to Jules
   */
  async sendQuery(query) {
    try {
      const response = await this.makeRequest('/query', {
        method: 'POST',
        body: JSON.stringify({ query })
      });
      return response;
    } catch (error) {
      console.error('Query error:', error);
      throw error;
    }
  }

  /**
   * Get Jules conversation history
   */
  async getHistory(limit = 50) {
    try {
      const response = await this.makeRequest(`/history?limit=${limit}`);
      return response;
    } catch (error) {
      console.error('History fetch error:', error);
      throw error;
    }
  }

  /**
   * Disconnect from Jules services
   */
  disconnect() {
    if (this.websocket) {
      this.websocket.close();
      this.websocket = null;
    }
    this.isConnected = false;
    this.listeners.clear();
  }
}

// Export singleton instance
export default new JulesService();
