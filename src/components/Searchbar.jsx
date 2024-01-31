export const Searchbar=()=>{
    return (
      <>
   
       <div className="flex  w-[32rem] border border-gray-500  pl-2 rounded-3xl text-sm">
        

        <input type="search" id="default-search" className=" w-10/12 rounded-3xl pl-2 text-sm bg-zinc-900 text-white border-none  outline-none " placeholder="Search" required />


        <button type="submit" className="text-white border border-l-1 border-gray-500  bg-zinc-800 rounded-r-3xl     text-gray-400 font-bold  font-medium  text-sm px-9 py-2  ">
             <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg></button>
    </div>

    </>
        
    )
}