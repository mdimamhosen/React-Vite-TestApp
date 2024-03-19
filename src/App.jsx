import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-center">App</h1>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <button
          className="p-3 my-3 border "
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
