import React, { useState } from 'react'
import { Plus, Minus, MessageSquare, X } from 'lucide-react'

const chatButtonClasses = 'fixed bottom-4 right-4 bg-[#34598c] text-white p-4 rounded-full shadow-lg -mb-3 hover:opacity-70'
const chatPopupClasses = 'fixed bottom-16 right-4 bg-white border border-[#34598c] rounded-lg shadow-lg w-[220px] p-4 lg:w-[500px]'

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex justify-between items-center py-3 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-primary">{title}</span>
        <div className="relative flex items-center">
          <div
            className={`transform transition-transform duration-300 ${
              isOpen ? 'rotate-0 opacity-0' : 'rotate-0 opacity-100'
            }`}
          >
            <Plus />
          </div>
          <div
            className={`absolute transform transition-transform duration-300 ${
              isOpen ? 'rotate-0 opacity-100' : 'rotate-0 opacity-0'
            }`}
          >
            <Minus />
          </div>
        </div>
      </button>
      {isOpen && <div className="pb-3 text-muted-foreground">{content}</div>}
    </div>
  );
};

const FAQs = () => {
  const faqItems = [
    { title: "Question 1", content: "Answer to question 1." },
    { title: "Question 2", content: "Answer to question 2." },
    { title: "Question 3", content: "Answer to question 3." },
  ];

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default function Help() {
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const toggleChatPopup = () => {
    setIsChatPopupOpen(!isChatPopupOpen);
  }

  const handleSubmit = () => {
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, message]);
      setMessage('');
    }
  }

  return (
    <div className="bg-background p-6">
      <div className="mt-5 mb-60">
        <h1 className="text-[#34598c] text-3xl">Educational Hub's FAQs</h1>
        <h4 className="mt-2 opacity-80">Answers to our most frequently asked questions</h4>
      </div>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">FAQs</h1>
      </header>

      <FAQs />

      <button id="chat-button" className={chatButtonClasses} onClick={toggleChatPopup}>
        {isChatPopupOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {isChatPopupOpen && (
        <div id="chat-popup" className={chatPopupClasses}>
          <h2 className="text-lg font-semibold mb-2">Educational Student Hub</h2>
          <p className="text-sm text-gray-700 mb-4">We typically reply in a few hours</p>
          <div className="bg-gray-100 p-2 rounded-lg mb-4">
            <p className="text-gray-800 text-sm">Welcome to Educational Student Hub, how can we help with your needs?</p>
          </div>
          <div className="chat-messages space-y-2 mb-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className="bg-[#34598c] text-white p-2 rounded-lg"> {/* User's messages have a blue background */}
                <p className="text-sm">{msg}</p>
              </div>
            ))}
          </div>
          <textarea
            className="w-full p-2 border mt-[120px] lg:mt-[200px] border-gray-300 rounded-lg mb-4"
            rows="2"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button onClick={handleSubmit} className="bg-[#34598c] text-white p-2 rounded-lg">Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
