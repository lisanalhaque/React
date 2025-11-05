import React from 'react'
import { useParams } from 'react-router-dom'
import { FaInbox } from "react-icons/fa";

const ProductDetailPage = () => {

    const {id} = useParams();

  return (
    <div>
      <h2> <FaInbox /> product id : {id}</h2>
    </div>
  )
}

export default ProductDetailPage
