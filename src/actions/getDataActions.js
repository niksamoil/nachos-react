export const GET_DATA = 'GET_DATA';

export const getData = (url, page, requestOptions) => {
   
    const request = fetch(`${url}?page=${page}`, requestOptions)

    return (dispatch) => {
        request.then((response) => response.json())
        .then( (data) => dispatch({
            type: GET_DATA,
            payload: data.checks
        }))
    };

} 




	