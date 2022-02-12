import React from 'react'
import MemeForm from './MemeForm.js'
import Meme from './Meme'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const memes = useSelector(store => store.memes)
  const dispatch = useDispatch()

  const addMeme = (newMeme) => {
    dispatch({ type: 'NEW_MEME', meme: newMeme })
  }

  const deleteMeme = (id) => {
    dispatch({ type: 'DELETE_MEME', id})
  }

  const memeStructure = memes.map(m => (
    <Meme
      key={m.id}
      topText={m.topText}
      botText={m.botText}
      url={m.url}
      deleteMeme={() => deleteMeme(m.id)}
    />
  ))

  return (
    <div className="App">
      <MemeForm addMeme={addMeme} />
      {memeStructure}
    </div>
  );
}

export default App;
