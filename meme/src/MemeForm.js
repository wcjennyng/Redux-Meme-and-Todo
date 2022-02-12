import React, {useState} from 'react'
import { v4 as uuid } from 'uuid'
import './MemeForm.css'

const INITIAL_FORM = {
    topText: "",
    url: "",
    botText: ""
}

function MemeForm({ addMeme }) {
    const [form, setForm] = useState(INITIAL_FORM)

    function handleSubmit(e) {
        e.preventDefault()
        addMeme({...form, id: uuid()})
        setForm(INITIAL_FORM)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setForm(f => ({...f, [name]: value}))
    }

    return (
        <div>
            <h1>Meme Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="topText">Top Text</label>
                <input
                type='text'
                name='topText'
                id='form_topText'
                onChange={handleChange}
                value={form.topText}
                />
                <label htmlFor="url">Image URL</label>
                <input
                type='text'
                name='url'
                id='form_url'
                onChange={handleChange}
                value={form.url}
                />
                <label htmlFor="botText">Bottom Text</label>
                <input
                type='text'
                name='botText'
                id='form_botText'
                onChange={handleChange}
                value={form.botText}
                />
                <button type="submit" id="form_submit">
                    Go!
                </button>

            </form>

        </div>
    )
}

export default MemeForm