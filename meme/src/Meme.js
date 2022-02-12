import React from 'react'
import PropTypes from 'prop-types'
import './Meme.css'

function Meme({deleteMeme, topText, botText, url, id}){
    function handleDeleteMeme() {
        deleteMeme(id)
    }

    return (
        <div className="Meme">
            <div className="container">
                <span className="top-text">{topText}</span>
                <img src={url} alt="meme" />
                <span className="bot-text">{botText}</span>
                <button id="del-meme" onClick={handleDeleteMeme}>Delete</button>
            </div>
        </div>
    )
}

Meme.propTypes = {
    topText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    botText: PropTypes.string.isRequired
}

export default Meme