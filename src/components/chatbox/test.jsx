import React, { useState, useEffect, useRef } from 'react';
import './ChatBoxComponent.css'; // Assuming you move the styles into this file

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [fakeIndex, setFakeIndex] = useState(0);
  const messagesEndRef = useRef(null);

  const fakeMessages = [
    'Hi there, I\'m Fabio and you?',
    'Nice to meet you',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    'That\'s awesome',
    'Codepen is a nice place to stay',
    'I think you\'re a nice person',
    'Why do you think that?',
    'Can you explain?',
    'Anyway I\'ve gotta go now',
    'It was a pleasure chat with you',
    'Time to make a new codepen',
    'Bye',
    ':)'
  ];

  useEffect(() => {
    setTimeout(() => {
      addFakeMessage();
    }, 100);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (msg, isPersonal = false) => {
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    setMessages(prevMessages => [
      ...prevMessages,
      { text: msg, time: timeString, isPersonal }
    ]);
  };

  const addFakeMessage = () => {
    if (fakeIndex < fakeMessages.length) {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: fakeMessages[fakeIndex], isPersonal: false }
      ]);
      setFakeIndex(fakeIndex + 1);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, true);
      setInputValue('');
      setTimeout(() => {
        addFakeMessage();
      }, 1000 + Math.random() * 2000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
      e.preventDefault();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{width:"100%", height:"100%"}}>
    <div className="chat">
      <div className="chat-title">
        <h1>Fabio Ottaviani</h1>
        <h2>Supah</h2>
        <figure className="avatar">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" alt="Avatar" />
        </figure>
      </div>
      <div className="messages">
        <div className="messages-content">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.isPersonal ? 'message-personal' : 'new'}`}>
              {!message.isPersonal && <figure className="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" alt="Avatar" /></figure>}
              {message.text}
              <div className="timestamp">{message.time}</div>
            </div>
          ))}
        
        </div>
        <div ref={messagesEndRef}></div>
      </div>
      <div className="message-box">
        <textarea
          className="message-input"
          placeholder="Type message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="message-submit" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    <div className="bg" />

    </div>
  );
};

export default Chat;
