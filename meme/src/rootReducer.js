const INITIAL_STATE = {
    memes: []
}

const rootReducer = (state=INITIAL_STATE, action) => {
    if (action.type === 'NEW_MEME') {
        return {
            ...state, memes: [...state.memes, {...action.meme}]
        }
    } else {
        if (action.type === 'DELETE_MEME') {
            return { 
            ...state, memes: state.memes.filter(m => m.id !== action.id)}
        }
    }

    return state
}

export default rootReducer