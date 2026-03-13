import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-5xl font-bold animate-glow-pulse">
        Ocean Tide Drop
      </h1>
      <p className="mt-6 text-xl opacity-80">
        React is rendering correctly. Your site is alive.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-cyan-200 animate-glow-pulse">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
