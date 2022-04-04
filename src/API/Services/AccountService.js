




export const addToWatchList = () => {
    return async (dispatch) => {
        const response = await API
            .post(`/authentication/token/validate_with_login?api_key=${ApiKey}`, {
                "username": username,
                "password": password,
                "request_token": request_token
            })
            .then(response => {
                dispatch(setConfirmedTokenAction(response.data.request_token))
                // console.log(response)
            })
            .then(response => {
                dispatch(setUsernameAction(username))
                localStorage.setItem('username', JSON.stringify(username))
            })
            .catch((err) => {
                console.log("Error ", err);
            });
    }
}