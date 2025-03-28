import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
  - make popup
  - make popup look good with css
  - add deletion number

*/

function App() {
  const [running, setRunning] = useState(false);
  
  function runDelete(e) {
    e.preventDefault();
    chrome.runtime.sendMessage({action: "run"});
    setRunning(!running)
  };

  function runConnect(e) {
    e.preventDefault();
    chrome.runtime.sendMessage({action: "connect"});
  };
  
  return (
    <div>
      <h1>LinkedOut</h1>
      <form onSubmit={runConnect}>
          <button class="add">Add Connections</button>
        </form><br/>
        <form onSubmit={runDelete}>
          <button class="del">Delete Connections</button>
        </form>
        
        
    </div>
  );
}



export default App
