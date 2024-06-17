import React, { useState , useEffect} from 'react'
import "./Recomended.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import { NavLink } from 'react-router-dom';

const Recomended = ({categoryId}) => {

  const [ recommendedVedioList , setRecommendedVedioList ] = useState([]);

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

  const fetchRecomendedVedioList= async()=>{
    const API_KEY = `AIzaSyDg9oI4aLa4sdojg1fQvvxzbQRUSxBY8Yw`
             const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
 
             const response = await fetch(URL);
             const data = await response.json() ;
           
             setRecommendedVedioList(data.items);
            
  }
  useEffect(()=>{
     fetchRecomendedVedioList() ;
  },[categoryId]) ;
console.log(recommendedVedioList,"list") ;
  return (
    <div className="recomended">
      {
        recommendedVedioList ? recommendedVedioList?.map((vedio,index)=>( 
          <NavLink to={`/vedio/${vedio.snippet.categoryId}/${vedio.id}`} className="side-vedio-list" key={vedio.id}>
        <img src={vedio.snippet.thumbnails.high.url} alt="" />
        <div className="video-info">
            <h4>{vedio.snippet.title.trim() + vedio.snippet.description.trim().slice(0,20)}</h4>
            <p>{vedio.snippet.channelTitle}</p>
            <p>{viewsConverter(vedio.statistics.viewCount)} Views</p>
        </div>
      </NavLink>  

        )
         
       ):""
      }
      
  
    </div>
  )
}

export default Recomended