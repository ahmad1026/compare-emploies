const initState = {
    status: 'idle',
    emploies: [],
    ides: []
}


export const compareReducer = (state = initState, action) => {

    switch (action.type) {

        case "compare/addEmploy":
            return {
                ...state,
                emploies: [...state.emploies, action.payload].sort((a, b) => a.salary - b.salary),
                status: 'idle',
                
                ides: [...state.ides, action.payload.id]
            }
        case "compare/pending":
            return {
                ...state,
                status: "pending"
            }
        case "compare/rejected":
            return {
                ...state,
                status: "error"
            }

        case 'compare/removeItem':



            console.log(action.payload);
            return {
                ...state,
                emploies: action.payload.newEmploies,
                ides: [...state.ides].filter(id => id !== action.payload.id)
            }
        default:
            return state
    }

}