export function Sidevideo({thumbnail,title,channelname,views,timestamp}) {
   
  return (
    <>
      <div className="grid grid-cols-12 h-24 mt-2">
        <div className="col-span-5 h-24">
          <img className=" rounded-lg h-24" src={thumbnail}></img>
        </div>
     
          <div className="col-span-7  ml-2 ">
          
              <div>
                <p className="font-semibold line-clamp-2 text-sm text-base text-white">{title}</p>
              </div>
              <div className="mt-0.5">
              <div className=" text-xs text-stone-500">{channelname}</div>
              <div className=" text-xs text-stone-500 ">
                <div> {views} ·{timestamp}</div>
                </div>
              </div>
            </div>
          </div>
        
      
    </>
  );
}
