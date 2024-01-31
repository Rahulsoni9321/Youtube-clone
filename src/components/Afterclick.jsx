import ReactPlayer from "react-player";
import { Sidevideo } from "./Sidevideo";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Videopath =
  "https://www.youtube.com/watch?v=hJBHSmyqv0Y&list=RDhJBHSmyqv0Y&start_radio=1";

const Videos = [
  {
    title: "Exploring the unexplored area of Greece | Sam Kolder Vlogs",
    thumbnail: "/make-cinematic-youtube-thumbnail.jpg",
    logo: "/download.png",
    channelname: " Kolder creative",
    views: "20M views",
    timestamp: "2 months ago",
  },
  {
    title: "Escape to Iceland",
    thumbnail: "/make-cinematic-youtube-thumbnail (1).jpg",
    logo: "/download.png",
    channelname: " Wanderlust",
    views: "543k views",
    timestamp: "1 year ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (1).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "Batman : The Rise Full trailer | Robert pattinson | Full HD 4k trailer.",
    thumbnail: "/maxresdefault (5).jpg",
    logo: "/download.png",
    channelname: " Warner Bros.",
    views: "98M views",
    timestamp: "8 months ago",
  },
  {
    title: "Oppenheimer Trailer | Cillian Murphy | Christopher Nolan",
    thumbnail: "/maxresdefault (3).jpg",
    logo: "/download.png",
    channelname: "Excel Movies",
    views: "12M views",
    timestamp: "28 days ago",
  },
  {
    title: "Salaar Theatrical release on 29th September | Prabhas | Anirudh",
    thumbnail: "/maxresdefault (4).jpg",
    logo: "/download.png",
    channelname: "Dharma Production",
    views: "52M views",
    timestamp: "3 weeks ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (5).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (3).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (2).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (1).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (1).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (1).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (1).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (1).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (1).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
  {
    title:
      "The Secret of Creating wealth by Founders | Kunal Shah | Nithin kamath",
    thumbnail: "/maxresdefault (1).jpg",
    logo: "/download.png",
    channelname: " Wint Wealth",
    views: "200k views",
    timestamp: "2 days ago",
  },
];

export function Afterclick() {

   
   
        return (
        <div className="bg-zinc-900 ">
        <Navbar></Navbar>
        <div className="grid lg:grid-cols-12 ">
          <div className="col-span-1"></div>
          <div className="col-span-6 rounded-lg">
            <ReactPlayer url={Videopath} controls={true} />
          </div>
          <div className="col-span-4 ml-9">
            
              { Videos.map((video) => {
                  return (
                    <Sidevideo
                      thumbnail={video.thumbnail}
                      title={video.title}
                      channelname={video.channelname}
                      views={video.views}
                      timestamp={video.timestamp}
                    ></Sidevideo>
                  );
                })
            }
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    ) 
    

    
}
