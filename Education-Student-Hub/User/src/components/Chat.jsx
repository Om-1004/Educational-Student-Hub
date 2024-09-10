import React, { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <div className="w-[66%] p-5 items-center bg-gray-100 bg-opacity-50 border flex flex-col justify-between">
        <h1 className="text-2xl font-semibold mb-4">Chat</h1>
      </div>  
        <div className="flex-grow overflow-y-auto mb-4 bg-white p-4 rounded-lg shadow-inner">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}>
              <span className="inline-block px-4 py-2 bg-blue-200 rounded-full">{message.text}</span>
            </div>
          ))}
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow p-2 border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
        </div>
      
    </div>
  );
}
