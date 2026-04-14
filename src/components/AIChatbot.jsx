import React, { useState, useRef, useEffect } from 'react';

const AIChatbot = () => {
    const [messages, setMessages] = useState([
        { id: 1, role: 'ai', text: 'こんにちは！AIのRyoです。何でも聞いてください！' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTo({
                top: messagesContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isTyping) return;

        const newUserMessage = {
            id: Date.now(),
            role: 'user',
            text: inputValue.trim()
        };

        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setInputValue('');
        setIsTyping(true);

        try {
            // Map our chat history to Ollama's messages format
            const apiMessages = updatedMessages.map(msg => ({
                role: msg.role === 'ai' ? 'assistant' : 'user',
                content: msg.text
            }));

            const workerUrl = import.meta.env.VITE_AI_PROXY_URL;
            if (!workerUrl) {
                throw new Error("VITE_AI_PROXY_URL is not configured in .env file.");
            }

            const response = await fetch(workerUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: import.meta.env.VITE_AI_MODEL || "llama3",
                    messages: apiMessages,
                    stream: false
                })
            });

            if (!response.ok) {
                throw new Error(`API responded with status: ${response.status}`);
            }

            const data = await response.json();

            // Extract the generated message content
            const contentString = data.message?.content || data.response || "応答を生成できませんでした。";

            const newAiMessage = {
                id: Date.now() + 1,
                role: 'ai',
                text: contentString
            };
            setMessages(prev => [...prev, newAiMessage]);

        } catch (error) {
            console.error("Failed to fetch AI response:", error);
            const errorAiMessage = {
                id: Date.now() + 1,
                role: 'ai',
                text: "エラーが発生しました。現在AIに接続できません。しばらく時間をおいて再度お試しください。"
            };
            setMessages(prev => [...prev, errorAiMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="home__openwebui-container">
            <div className="ai-chatbot">
                <div className="ai-chatbot__header">
                    <div className="ai-chatbot__avatar">
                        <img src="/images/night.jpg" alt="AI Ryo" />
                    </div>
                    <div className="ai-chatbot__status">
                        <h4>AI Ryo</h4>
                        <span>{isTyping ? 'Typing...' : 'Online'}</span>
                    </div>
                </div>

                <div className="ai-chatbot__messages" ref={messagesContainerRef}>
                    {messages.map(msg => (
                        <div key={msg.id} className={`ai-chatbot__message ai-chatbot__message--${msg.role}`}>
                            <div className="ai-chatbot__bubble">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="ai-chatbot__message ai-chatbot__message--ai">
                            <div className="ai-chatbot__bubble ai-chatbot__typing">
                                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                            </div>
                        </div>
                    )}
                </div>

                <form className="ai-chatbot__input-area" onSubmit={handleSend}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="AIと会話する..."
                        autoComplete="off"
                    />
                    <button type="submit" disabled={!inputValue.trim() || isTyping}>
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
                <div style={{ fontSize: '11px', textAlign: 'center', color: '#94a3b8', padding: '0 8px 12px', backgroundColor: '#fff' }}>
                    ※プライバシー保護のため、会話履歴はページを更新するとリセットされます
                </div>
            </div>
        </div>
    );
};

export default AIChatbot;
