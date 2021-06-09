import React from 'react'
import "./Playlist.css"

// playlist addFaveSong

const myPlaylist = (props) => {
    const {playlist, addFaveSong} = props

    const loaded = () => (
        <div>
            {playlist.map((song) => (
            <div>
                <h3>{song.title}</h3>
                <h3>{song.artist}</h3>
                <h4>{song.time}</h4>
                <button
                    onClick={() => 
                    addFaveSong(song)}
                >
                    &#9825;
                </button>
            </div>
        ))}
        </div>
    );

    const loading = () => (
        <div>
            <h1>Loading...</h1>
        </div>
    )

    return playlist.length > 0 ? loaded() : loading()
}

export default myPlaylist
