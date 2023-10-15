import React, { useState, useEffect } from 'react';
import firebase from '../../firebase/firebase';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = firebase.database().ref('messages');

    const handleData = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageArray = Object.values(data);
        setMessages(messageArray);
      }
    };

    // Configurar ouvinte em tempo real para as mensagens do Firebase
    messagesRef.on('value', handleData);

    // Limpar o ouvinte quando o componente é desmontado
    return () => {
      messagesRef.off('value', handleData);
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const messageRef = firebase.database().ref('messages');
      messageRef.push({
        text: newMessage,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
      });
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Chat em Tempo Real</h1>
      <div>
        {messages.map((message) => (
          <div key={message.timestamp}>{message.text}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default ChatPage;


