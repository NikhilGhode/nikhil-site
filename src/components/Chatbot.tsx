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
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const handleQuickReply = (reply: typeof quickReplies[0]) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: reply.text,
      sender: "user",
      timestamp: new Date(),
    };

    let botResponse = "";
    switch (reply.action) {
      case "projects":
        botResponse =
          "Nikhil's key project is an AI Chatbot for candidate information using Python, n8n, Langraph, and Crewai. He also has game development experience from Day Dreamz Studio and Bornmonkie. Scroll up to the Portfolio section to see more details!";
        break;
      case "skills":
        botResponse =
          "Nikhil specializes in: Python, PyTorch, n8n (workflow automation), Langraph, and Crewai. He has a strong background in agentic AI development and game development. Check the Skills & Tech section above for more!";
        break;
      case "contact":
        botResponse =
          "You can reach Nikhil through the contact form on this page, or connect via LinkedIn and GitHub. He's based in Nagpur, Maharashtra, India and typically responds within 3-5 business days. Scroll down to the Contact section!";
        break;
    }

    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: "Thanks for your message! For specific inquiries, please use the contact form on this page, and Nikhil will get back to you personally.",
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue("");
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

          {/* Quick Reply Buttons - Show only after initial message */}
          {messages.length === 1 && (
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
