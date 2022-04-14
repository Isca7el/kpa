const defaultState = {
    list: []
}

const items = (state = defaultState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return {...state, list: [...state.list, action.payload]}
        case "DELETE_ITEM":
            return {...state, list: [...state.list, action.payload]}
        default:
            return state;
    }
}

export default items;