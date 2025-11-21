import { useState } from 'react'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchBar from './components/SearchBar';
import Actions from './components/Actions';
export default function App() {
  return (
   <>
   <header className="w-full">
    <div className="flex items-center justify-between px-10 bg-white">
   <SearchBar />
   <Actions />
    </div>
   </header>
   </>
  );
}