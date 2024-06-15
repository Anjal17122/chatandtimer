import React, { useState, useEffect, useRef } from 'react';
import './ChatBoxComponent.css'; // Assuming you move the styles into this file
import { getAllMessages, saveMessage } from '../../services/ChatApi';
import profile from "/profile.png";

const Chat = ({refreshMessage, setRefreshMessage}) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
      getAllMessages().then((res)=>{
        setMessages(res.data);
      })
  }, [refreshMessage]);



  const handleSendMessage = () => {
    const messageBody ={message: inputValue.trim()?inputValue:"Trying It Out",type:"personal"}
      saveMessage(messageBody).then(()=>{
        setRefreshMessage(!refreshMessage);
      })
      // addMessage(inputValue, true);
      setInputValue('')
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
      e.preventDefault();
    }
  };


  return (
    <div style={{width:"100%", height:"100%"}}>
    <div className="chat">
      <div className="chat-title">
        <h1>Anjal Sapkota</h1>
        <h2>Chat With Me</h2>
        <figure className="avatar">
          <img src={profile} alt="Avatar" />
        </figure>
      </div>
      <div className="messages">
        <div className="messages-content">
          {messages.map((messagee, index) => (
            <div key={index} className={`message ${messagee.type=="personal" ? 'message-personal' : 'new'}`}>
              {messagee.type=="others" && <figure className="avatar"><img src={profile} alt="Avatar" /></figure>}
              {messagee.message}
              {/* <div className="timestamp">{message.time}</div> */}
            </div>
          ))}
        
        </div>
        {/* <div ref={messagesEndRef}></div> */}
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
