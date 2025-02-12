import React, { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="bg-slate-600 h-screen w-screen">
      <div className="flex justify-center items-center h-full">
        <h1 className="text-4xl text-slate-200 font-bold">Hello</h1>
      </div>
    </main>
  );
}

export default App;
