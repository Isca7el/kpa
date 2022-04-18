const defaultState ={ 
    fetch: [456]
}

export const SET_FETCH = "SET_FETCH";
export const FETCH_REQUEST = "FETCH_REQUEST";

export default function sagaReducer(state = defaultState, action) {
    switch(action.type){
        case "SET_FETCH":
            return {...state, fetch: action.payload}
    }
    return state
}

export const setFetch = payload => ({type: SET_FETCH, payload})
export const fetchRequest = () => ({type: FETCH_REQUEST})