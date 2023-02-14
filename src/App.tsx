import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import DevLinks from "./DevLinks";

function App() {
  return (
    <>
      <DevLinks />
      <main className='max-w-screen-sm h-screen border-gray shadow-md mx-auto'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
