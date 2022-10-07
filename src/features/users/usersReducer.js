const initState = {
    users:[],
    compareList: [],
    fetchState: 'idel'
}

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'users/fetchUsers':
            return {
                ...state,
                users: action.payload,
                fetchState: 'idel'
            }
        case 'users/pending':
            return {
                ...state,
                fetchState: 'pending'
            }
        case 'users/rejected':
            return {
                ...state,
                fetchState: 'error'
            }

        default:
            return state
    }

}