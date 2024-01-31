import { useNavigate } from "react-router-dom"

export default function Videocard({ title, thumbnail, logo, channelname, views, timestamp }){
   const navigate=useNavigate();
    return (
        
        <div className='w-full bg-zinc-900 cursor-pointer p-3'>
          <button onClick={()=>{
          navigate("/video")
        }}>
        <div >
          <img className='w-full h-full rounded-lg' src={thumbnail}/>
        </div>
        </button>
        <div className='grid grid-cols-12 w-full'>
          <div className="mt-3 col-span-2"> 
          <img className=" w-9 h-9 rounded-full" src={logo}></img>
          </div>
            
          <a className="col-span-10 p-0" href={"/video"}>
          {/* <div className="col-span-10"> */}
          <div>
            <p className='font-bold mt-3 text-base text-white'>{title}</p>
            </div>
        <div className=' text-sm text-stone-500'>
         {channelname}
        </div>
        <div className=' text-sm text-stone-500 '>
          <div>{views} · {timestamp}</div> 
          </div>
        {/* </div> */}
        </a>
        </div>
        <br></br>
        <br></br>
      </div>
      
    
    )
}