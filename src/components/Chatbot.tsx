import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi! I'm Nikhil's assistant. Want to know about his work, skills, or projects?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Flask backend URL - update this with your actual backend URL
  const FLASK_BACKEND_URL = "https://gemini-api-flask.onrender.com";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    { id: 1, text: "Show me Nikhil's projects", action: "projects" },
    { id: 2, text: "What skills does he have?", action: "skills" },
    { id: 3, text: "How to contact him?", action: "contact" },
  ];

  const sendMessageToBackend = async (
    userMessage: string,
    conversationHistory: Message[]
  ) => {
    try {
      const response = await fetch(`${FLASK_BACKEND_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: conversationHistory.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const data = await response.json();
      return (
        data.reply ||
        data.response ||
        "Sorry, I couldn't get a response from the backend."
      );
    } catch (error) {
      console.error("Error calling Flask backend:", error);
      return "Sorry, I'm having trouble connecting to the backend. Please make sure your Flask server is running and accessible.";
    }
  };

  const handleQuickReply = async (reply: (typeof quickReplies)[0]) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: reply.text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setIsLoading(true);

    const botResponseText = await sendMessageToBackend(reply.text, [
      ...messages,
      userMessage,
    ]);

    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponseText,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    const messageText = inputValue;
    setInputValue("");
    setIsLoading(true);

    const botResponseText = await sendMessageToBackend(messageText, [
      ...messages,
      userMessage,
    ]);

    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponseText,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--primary))] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbot Panel */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[90%] max-w-[340px] h-[80vh] max-h-[500px] sm:w-[300px] md:w-[340px] sm:h-[500px] bg-background rounded-2xl shadow-2xl border border-border transition-all duration-300 flex flex-col ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-gradient-to-r from-[hsl(var(--accent)/0.1)] to-transparent rounded-t-2xl">
          <h3 className="text-lg font-semibold text-foreground">Ask Nikhil</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--primary))] text-white"
                    : "bg-muted text-foreground"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 rounded-full bg-foreground/60 animate-bounce"></div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Reply Buttons - Show only after initial message */}
          {messages.length === 1 && !isLoading && (
            <div className="space-y-2 pt-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  onClick={() => handleQuickReply(reply)}
                  className="w-full text-left px-4 py-3 rounded-xl bg-background border border-border hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent)/0.05)] transition-all duration-200 text-sm text-foreground"
                >
                  {reply.text}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="px-4 py-4 border-t border-border bg-background rounded-b-2xl">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border focus:border-[hsl(var(--accent))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent)/0.2)] text-sm text-foreground placeholder:text-muted-foreground transition-all"
            />
            <button
              onClick={handleSendMessage}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--primary))] text-white hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
