export const initialState = {
    data: [],
}

function reducer(state,action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                data: [...state.data, action.item],
            }

        case 'EMPTY_DATA':
            return {
                ...state,
                data: [],
            }

        default:
            return state;
    }
}

export default reducer;