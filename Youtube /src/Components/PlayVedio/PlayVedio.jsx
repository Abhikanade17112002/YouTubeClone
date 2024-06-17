import React, { useEffect, useState } from 'react'
import "./PlayVedio.css"
import vedio1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import userprofile from "../../assets/user_profile.jpg"
import Loader from '../Loader/Loader'
import moment from 'moment'


const PlayVedio = ({vedioId}) => {

      const [ vedioData , setVedioData ] = useState([]) ;
      const [ channelData , setChannelData] = useState(null) ;
      const [ vedioComments , setVedioComments] = useState(null) ;
      const [ loading , setLoading ] = useState(true) ;
      
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

        
      const fetchVedioData = async () =>{
            const API_KEY = `AIzaSyDg9oI4aLa4sdojg1fQvvxzbQRUSxBY8Yw`
            const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vedioId}&key=${API_KEY}`



            const response = await fetch(URL);
            const data = await response.json() ;
            setVedioData(data.items[0]) ;
            setLoading(false) ;
           
      };

      const fetchChanneldata = async(channelId)=>{
           console.log(channelId?.snippet?.channelId);
            const API_KEY = `AIzaSyDg9oI4aLa4sdojg1fQvvxzbQRUSxBY8Yw`
            const URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId.snippet.channelId}&key=${API_KEY}`

            const response = await fetch(URL);
            const data = await response.json() ;
          
            setChannelData(data.items[0])
            setLoading(false) ;
      } 
      const fetchVedioComments = async()=>{
   
             const API_KEY = `AIzaSyDg9oI4aLa4sdojg1fQvvxzbQRUSxBY8Yw`
             const URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=60&videoId=${vedioId}&key=${API_KEY}`
 
             const response = await fetch(URL);
             const data = await response.json() ;
           
             setVedioComments(data.items)
             setLoading(false) ;
       } 
  

      useEffect(()=>{
       

            fetchVedioData() ;
            fetchVedioComments();
            
      },[vedioId]);
      useEffect(()=>{
       

            fetchChanneldata(vedioData) ;
            
      },[vedioData]);


     

  return loading? <Loader></Loader> : (
    <div className='play-vedio'>

       <iframe  src={`https://www.youtube.com/embed/${vedioId}?autoplay=1`} title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <h3>{vedioData.title} </h3>
       <div className="play-video-info">
            <p>{viewsConverter(vedioData.statistics.viewCount)}Views &bull; {moment(vedioData.snippet.
publishedAt).fromNow()}</p>
            <div>
                  <span><img src={like} alt="" />{viewsConverter(vedioData.statistics.likeCount)}</span>
                  <span><img src={dislike} alt="" />3</span>
                  <span><img src={share} alt="" />Share</span>
                  <span><img src={save} alt="" />Save</span>
            </div>
       </div>
       <hr />
       <div className="publisher">
            <img src={channelData? channelData?.snippet?.thumbnails?.high.url : jack} alt="" />
            <div>
                  <p>{vedioData?vedioData.snippet.channelTitle:""}</p>
                  <span>{viewsConverter(channelData?channelData?.statistics?.subscriberCount:"")}Subscribers</span>

            </div>
            <button>
                  SubScribe
            </button>
       </div>
       <div className="vedio-description">
            <p>{vedioData.snippet.localized.title} </p>
            <p>{vedioData.snippet.localized.description.slice(0,300)}</p>
            <hr />
            <h4>{viewsConverter(vedioData.statistics.commentCount)} Comments</h4>

            {
                  vedioComments ? vedioComments.map((comment,index)=>(
                        // comment.snippet.topLevelComment.snippet.authorProfileImageUrl? comment.snippet.topLevelComment.snippet.authorProfileImageUrl:jack
                        <div className="comment">
                  <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                  <div>
                        <h3>
                        {comment.snippet.topLevelComment.snippet.authorDisplayName}<span>2 Days ago</span>
                        </h3>
                        <p> {comment.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-actions">
                              <img src={like} alt="" /> <span>{viewsConverter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                              <img src={dislike} alt="" />
                        </div>
                  </div>
            </div>
  )) : ""
            }
            
          
       </div>
    </div>
  )
}

export default PlayVedio




