import { useState } from 'react';
import './App.css';
import { LC, SC, UC, NC } from './data/PassChar';
function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordlen, setPasswordlen] = useState(10);
  let [fpass, setFpass] = useState('');
  let createPassword = () => {
    let finalPass = '';
    let charSet = '';
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NC;
      if (symbols) charSet += SC;
      for (let i = 0; i < passwordlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFpass(finalPass);
    } else {
      alert('please select checkbox');
    }
  };
  let copyPass = () => {
    navigator.clipboard.writeText(fpass);
  };
  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxin">
          <input type="text" value={fpass} readonly />
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passLength">
          <label>Password Length</label>
          <input
            type="number"
            max={20}
            min={10}
            value={passwordlen}
            onChange={(event) => setPasswordlen(event.target.value)}
          />
        </div>
        <div className="passLength">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="passLength">
          <label>Include Lowecase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passLength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>
        <div className="passLength">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
