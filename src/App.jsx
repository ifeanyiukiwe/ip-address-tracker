import React from "react";
import { MainProvider } from "./context/MainContext";
import "./App.css";
import Search from "./components/Search";
import IPData from "./components/IpData";
import MapView from "./components/MapView";

function App() {
  return (
    <MainProvider>
      <div className="relative w-screen h-screen flex flex-col">
        <div className="z-10">
          <Search />
        </div>

        <IPData />

        {/* Map fills remaining screen */}
        <div className="flex-grow z-0">
          <MapView />
        </div>
      </div>
    </MainProvider>
  );
}

export default App;
