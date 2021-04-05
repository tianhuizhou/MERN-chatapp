import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
function App() {
  return (
    <div className="App">
      <h1>let build a chat app</h1>

        <Sidebar />
        <Chat />
    </div>
  );
}

export default App;
