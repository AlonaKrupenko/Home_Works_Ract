import React from "react";
import MarkdownEditor from "./components/MarkdownEditor";

function App() {
  const alertData = () => {
    console.log(123);
  };

  return (
    <div className="App">
      <MarkdownEditor onContentChange={alertData} />
    </div>
  );
}

export default App;
