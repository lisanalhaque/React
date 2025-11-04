import React, { useEffect, useState } from 'react'

const Unmount = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {

        console.log("Timer started...");

        const timerID = setInterval(() => {

            setTime(new Date().toLocaleTimeString());

        }, 1000);    // Cleanup 

        return () => {

            clearInterval(timerID);
            console.log("Timer stopped!");

        };
    }, []);  // run once 

    return <h2>Time: {time}</h2>;
}

export default Unmount