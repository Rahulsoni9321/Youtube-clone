import { Searchbar } from "./Searchbar";

export default function Navbar(){
    return (
        <>
        <div className="flex justify-between items-center h-16 pl-6 mb-6 pt-4 ">
          <div className="flex items-center">
            <img  className="w-8 h-8 mr-1" src="/1384060.png"></img>
            <h1 className=" text-xl text-white font-bold font-sans">YouTube</h1>
            </div>  
       <div>
         <Searchbar/>
         </div>
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-7 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>

            <img className="h-8 w-8 rounded-full ml-6 mr-10" src="/unnamed.jpg"></img>
        </div>
        </div>
        
        </>
    )
}