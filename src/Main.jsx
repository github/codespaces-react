"use client";

function MainComponent() {
  const [content, setContent] = React.useState("");
  const [translatedContent, setTranslatedContent] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [showTranslated, setShowTranslated] = React.useState(false);
  const fetchGPTExample = () => {
    setLoading(true);
    fetch("/integrations/chat-gpt/conversationgpt4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: "system", content: "Generate a README.md example" }],
        system_prompt:
          "Please provide an example of a README.md file for a project.",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data.result);
        setLoading(false);
      });
  };
  const translateToHebrew = () => {
    setLoading(true);
    fetch("/integrations/google-translate/language/translate/v2", {
      method: "POST",
      body: new URLSearchParams({
        q: content,
        target: "he",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTranslatedContent(data.data.translations[0].translatedText);
        setShowTranslated(true);
        setLoading(false);
      });
  };
  const toggleTranslatedView = () => {
    setShowTranslated(!showTranslated);
  };
  const updateContent = (e) => {
    setContent(e.target.value);
  };
  const editor = (
    <textarea
      name="editor"
      className="w-full h-full p-4 font-mono text-sm bg-[#f6f8fa] border-none outline-none"
      value={content}
      onChange={updateContent}
    />
  );
  const preview = (
    <div
      className="prose w-full h-auto p-4 overflow-auto font-roboto"
      dangerouslySetInnerHTML={{
        __html: marked(showTranslated ? translatedContent : content),
      }}
    />
  );
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="flex-none w-full md:w-1/2 h-full overflow-auto">
          {editor}
        </div>
        <div className="flex-none w-full md:w-1/2 h-full overflow-auto bg-[#fafafa]">
          {preview}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gray-900 text-white flex justify-between md:relative md:p-2">
        <button
          onClick={fetchGPTExample}
          className="px-2 py-1 bg-[#10b981] font-roboto rounded-md text-xs md:text-sm text-white focus:outline-none"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get README Example"}
        </button>
        <div>
          <button
            onClick={translateToHebrew}
            className="px-2 py-1 mr-2 bg-[#3b82f6] font-roboto rounded-md text-xs md:text-sm text-white focus:outline-none"
            disabled={loading}
          >
            {loading ? "Loading..." : "Translate to Hebrew"}
          </button>
          <button
            onClick={toggleTranslatedView}
            className="px-2 py-1 bg-[#f59e0b] font-roboto rounded-md text-xs md:text-sm text-white focus:outline-none"
            disabled={loading || !translatedContent}
          >
            {showTranslated ? "Show Original" : "Show Translated"}
          </button>
        </div>
      </div>
      <style jsx global>{`
        @media (min-width: 768px) {
          .prose {
            padding-left: 0;
          }
        }
      `}</style>
    </>
  );
}

export default MainComponent;
