import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <div className="blur-[500px] w-1/2 h-1/2 z-10 absolute right-1/2 bottom-1/2 sepia bg-white rounded-xl"></div>

    <div className="blur-[1000px]   w-1/2 h-1/2 z-10 absolute mt-20 pt-20 top-[10%] right-[20%] bottom-[90%]  bg-blue-800  rounded-xl"></div>

    <div className="blur-[800px]   w-1/2 h-1/2 z-10 absolute left-[40%] bottom-2/3 sepia bg-slate-400  rounded-xl"></div>

    <div className="blur-[1000px]   w-1/2 h-1/2 z-10 absolute right-[40%] top-2/3  bg-pink-400 rounded-xl"></div>

    <div className="blur-[1000px]   w-1/2 h-1/2 z-10 absolute left-[50%] top-[90%] -bottom-[80%] bg-slate-900  rounded-xl"></div>

    <div className="blur-[1000px]   w-1/2 h-1/2 z-10 absolute mt-20 pt-20 left-[40%] -bottom-[80%]  bg-cyan-500  rounded-xl"></div>
    <div className="blur-[1000px]   w-1/2 h-1/2 z-10 absolute mt-20 pt-20 right-[40%] -bottom-[80%]  bg-red-500  rounded-xl"></div>

    <div className="blur-[1000px]   w-1/2 h-1/2 z-10 absolute mt-20 pt-20 right-[90%] -bottom-[90%]  bg-lime-500  rounded-xl"></div>
    <div className="blur-[1000px]   w-1/2 h-1/2 z-10 absolute mt-20 pt-20 left-[50%] right-[50%] -bottom-[90%]  bg-amber-400  rounded-xl"></div>

    <div className="blur-[1000px]   w-1/2 h-1/2 z-10 absolute mt-20 pt-20 left-[60%] -bottom-[90%]  bg-violet-500  rounded-xl"></div>
  </React.StrictMode>
);
