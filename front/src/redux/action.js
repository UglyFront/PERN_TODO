export const actions = {
    GET_ALL: "GET_ALL",
    VIEW: "VIEW"
}

export function getAll() {
    return dispatch => {
        fetch("http://localhost:1112/api/getAll")
        .then(response => response.json())
        .then(data => dispatch({
            type: actions.GET_ALL,
            payload: data
        }))
    }
}