import React, { useEffect } from 'react'

function Ex2() {
    useEffect(() => { 
        console.log("component mounted");
        

    }, 
        []);
  return <h2>runs only once when mounted</h2>
}

export default Ex2
