export const configSelector = ({ConfigsDuck}) => ConfigsDuck


export function createAction(type) {
    return (payload) => ({ type, payload });
}