import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <main className='w-[640px] border mx-auto'>
      <Outlet />
    </main>
  );
}

export default App;
