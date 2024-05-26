import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TldrawWrapper from "./components/TldrawWrapper";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <TldrawWrapper />
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
