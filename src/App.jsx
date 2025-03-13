import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState("");

  // Load saved text from localStorage when the component mounts
  useEffect(() => {
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // Function to save text to localStorage
  const saveText = () => {
    localStorage.setItem("savedText", text);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Local Storage Demo</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={saveText} style={{ marginTop: "10px", padding: "10px" }}>
        Save Text
      </button>
      <h2></h2>
    </div>
  );
}

export default App;

