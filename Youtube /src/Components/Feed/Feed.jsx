import React from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import moment from "moment";
const Feed = ({ vedioCategory }) => {
  const [feedData, setFeedData] = useState([]);
  const [loadingState , setLoadingState] = useState(true) ;

  const fetchFeedData = async () => {
    const KEY = "AIzaSyDg9oI4aLa4sdojg1fQvvxzbQRUSxBY8Yw";
    const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${vedioCategory}&key=${KEY}`;
    const response = await fetch(URL);
    const data = await response.json();
    setFeedData(data.items);
    setLoadingState(false) ;
    
  };

  useEffect(() => {
    fetchFeedData();
  }, [vedioCategory]);
const viewsConverter = (value) =>{
  if( value >= 1000000)
    {
      return Math.floor(value/1000000)+"M" ;
    }
    else if( value >= 1000)
    {
        return Math.floor(value/1000)+"K" ;
    }
    else{
      return value ;
    }
}
  
  return loadingState? <Loader></Loader> :(
    <div className="feed">
        {feedData.map((vedio) => {
          return (
            <Link to={`/vedio/${vedio.snippet.categoryId}/${vedio.id}`} className="card" key={vedio.id} >
              <img src={vedio.snippet.thumbnails.high.url} alt="thumbnail1" className="card-img" />
              <h2>
                {vedio.snippet.title}
              </h2>
              <h3>{vedio.snippet.channelTitle}</h3>
              <p>{ viewsConverter(vedio.statistics.viewCount)   } Views &bull; {moment(vedio.snippet.publishedAt).fromNow()  }</p>
            </Link>
          );
        })}
    </div>
  );
};

export default Feed;
