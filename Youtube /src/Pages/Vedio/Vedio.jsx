import React from 'react'
import "./Vedio.css"
import PlayVedio from '../../Components/PlayVedio/PlayVedio'
import Recomended from '../../Components/Recomended/Recomended'
import { useParams } from 'react-router-dom'
const Vedio = () => {
  const {categoryId , vedioId}  = useParams() ;
  return (
    <div className="play-container">
      <PlayVedio  vedioId={vedioId} ></PlayVedio>
      <Recomended categoryId={categoryId}></Recomended>
    </div>
  )
}

export default Vedio