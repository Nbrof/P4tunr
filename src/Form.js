import React, {useState} from 'react'

const Form = (props) => {

  // create a state to hold form data
  const [formData, setFormData] = useState(props.song)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.title !== "" && formData.artist !== "" && formData.time !== "") {
      props.handleSubmit(formData)
    }
    setFormData({
      title: "",
      artist: "",
      time: ""
    })
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData({...formData, [name]: value})
  }

  return (
    <div className='add-song'>
      <h2>ADD A NEW SONG</h2>
      <form onSubmit={handleSubmit}>
        <h4>TITLE</h4>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
        <h4>ARTIST</h4>
        <input
          type='text'
          name='artist'
          value={formData.artist}
          onChange={handleChange}
        />
        <h4>TIME</h4>
        <input
          type='text'
          name='time'
          value={formData.time}
          onChange={handleChange}
        />
        <br/>
        <input 
          type='submit'
          value='ADD NEW SONG'
        />
      </form>
    </div>
  )
}

export default Form