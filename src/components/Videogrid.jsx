import { useState } from "react"
import Videocard from "./Videocard"
import {useNavigate } from "react"

const Videos=[
    {
        title:"Exploring the unexplored area of Greece | Sam Kolder Vlogs",
        thumbnail:'/make-cinematic-youtube-thumbnail.jpg',
        logo:"/download.png",
        channelname:" Kolder creative",
        views:"20M views",
        timestamp:"2 months ago"

    },
    {
        title:"Escape to Iceland",
        thumbnail:'/make-cinematic-youtube-thumbnail (1).jpg',
        logo:"/download.png",
        channelname:" Wanderlust",
        views:"543k views",
        timestamp:"1 year ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (1).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"Batman : The Rise Full trailer | Robert pattinson | Full HD 4k trailer.",
        thumbnail:'/maxresdefault (5).jpg',
        logo:"/download.png",
        channelname:" Warner Bros.",
        views:"98M views",
        timestamp:"8 months ago"

    },
    {
        title:"Oppenheimer Trailer | Cillian Murphy | Christopher Nolan",
        thumbnail:'/maxresdefault (3).jpg',
        logo:"/download.png",
        channelname:"Excel Movies",
        views:"12M views",
        timestamp:"28 days ago"

    },
    {
        title:"Salaar Theatrical release on 29th September | Prabhas | Anirudh",
        thumbnail:'/maxresdefault (4).jpg',
        logo:"/download.png",
        channelname:"Dharma Production",
        views:"52M views",
        timestamp:"3 weeks ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (5).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (3).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (2).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (1).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (1).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (1).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (1).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (1).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (1).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
    {
        title:"The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
        thumbnail:'/maxresdefault (1).jpg',
        logo:"/download.png",
        channelname:" Wint Wealth",
        views:"200k views",
        timestamp:"2 days ago"

    },
]

export const Videogrid=()=>{
  
      return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Videos.map((video) => {
         return    <Videocard title={video.title}
            thumbnail={video.thumbnail}
            logo={video.logo}
            channelname={video.channelname}
            views={video.views}
            timestamp={video.timestamp}
            ></Videocard>
        })}
      </div>
}