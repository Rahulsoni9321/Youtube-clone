import { useState } from "react";
import Navbar from "./Navbar";
import Videocard from "./Videocard";
import { Videogrid } from "./Videogrid";
import Sidebar from "./Sidebar";

 export function Dashboard() {
  return (
   
    <div className="bg-zinc-900">
      <Navbar></Navbar>
       <div className="grid grid-cols-12  w-full"> 
        <div className="col-span-1  "><Sidebar></Sidebar></div>
       <div className="col-span-11"><Videogrid ></Videogrid></div>
       </div>
    
    </div>
  );
}