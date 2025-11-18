import React, { useRef, useState } from 'react'

const Player = () => {
    var playerRef = useRef();

    const [player, setPlayer] = useState("");

    function handleButtononClick() {
        setPlayer(playerRef.current.value)
        playerRef.current.value=""
    }

    return (
        <section id='player'>
            <h2>Welcome to {player ?? "user"}</h2>
            <p>
                <input type="text" ref={playerRef} />
                <button onClick={handleButtononClick}>set Name</button>
            </p>
        </section>

    )
}

export default Player
