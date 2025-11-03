import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=> {

        const interval = setInterval(()=>{
            setSeconds((s) => s + 1);
        },1000)
        //setInterval creates a timer that runs every 1000 millisecond(1 second)

        //cleanup function (unmount)
        return () => clearInterval(interval)

    },[]) //empty dependancy - runs ones on mount


  return (
    <div>
      <p>timer: {seconds}</p>
    </div>
  )
}

export default Timer