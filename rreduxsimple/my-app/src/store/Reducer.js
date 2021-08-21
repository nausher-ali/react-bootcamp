const initialState = {
    message: 'subscribe to simplileaern'
}
const reducer = (state= initialState, action) => {
    const newState = {...state};

    if(action.type === 'message change'){
        newState.message = "thanks for subscribing"
    }
    return newState;
}

export default reducer;