import "./App.css";
import { useState, useEffect } from "react";
import Favorite from './Favorite'
import Form from './Form'
import Playlist from './Playlist'

function App() {

  const url = 'https://687og57fe0.execute-api.us-east-2.amazonaws.com/dev/tunr/'

  const [playlist, setPlaylist] = useState([]);

  const emptySong = {
    title: '',
    artist: '',
    time: ''
  }

  const [faveSong, setFaveSong] = useState([])

  const getSongs = () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log("getsong", data)
      setPlaylist(data.body)
    })
  }

  useEffect(() => getSongs(), [])

  const addFaveSong = (song) => {
    setFaveSong([...faveSong, song])
  }

  const handleSubmit = (newSong) => {
    console.log('New song consolelog ', newSong)
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSong)
    })
    .then(() => getSongs())
  }

  const handleDelete = (song) => {
    fetch(url + song.tunrId, {
      method: 'delete'
    })
    .then(()  => getSongs())
  }

  return (
    <div className="App">
      <h1>TUNR.</h1>
      <br></br>
      <h3>FOR ALL YOU PLAYLIST NEEDS</h3>
      <hr className="red-line"></hr>
      <Playlist playlist={playlist}  addFaveSong={addFaveSong} handleDelete={handleDelete} />
      <Favorite faveSong={faveSong}/>
      <Form song={emptySong} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
