export const configSelector = (state) => state.ConfigsDuck

export const createAction = (type) => {
    return (payload) => ({type, payload})  
}