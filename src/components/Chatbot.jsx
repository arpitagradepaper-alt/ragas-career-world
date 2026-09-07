import { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm here to help — are you looking for a job, or hiring talent?",
    },
  ]);

  const sendMessage = (text = message) => {
    const value = text.trim();

    if (!value) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: value,
      },
      {
        type: "bot",
        text: "Sure — I can help with that. Please share a few more details and I'll guide you.",
      },
    ]);

    setMessage("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          className="chatbot-floating-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open RAGAS Assistant"
        >
          <span className="chatbot-icon">✦</span>
          <span>Chat with us</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">

          {/* Header */}
          <div className="chatbot-header">
            <div>
              <strong>RAGAS Assistant</strong>

              <span className="chatbot-status">
                <i></i>
                Online
              </span>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">

            {messages.map((item, index) => (
              <div
                key={index}
                className={`chat-message ${
                  item.type === "user"
                    ? "user-message"
                    : "bot-message"
                }`}
              >
                {item.text}
              </div>
            ))}

            {/* Quick Action */}
            {messages.length === 1 && (
              <button
                className="chatbot-quick-action"
                onClick={() =>
                  sendMessage("I want to check my application status")
                }
              >
                I want to check my application status
              </button>
            )}

          </div>

          {/* Input */}
          <form
            className="chatbot-input-area"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Type your message"
            />

            <button type="submit" aria-label="Send message">
              ↑
            </button>
          </form>

        </div>
      )}
    </>
  );
}

export default Chatbot;