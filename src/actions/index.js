import jsonPlaceholder from '../apis/jsonPlaceholder';


//Bad Approach!! Error actions must be plain objects. Use custom middleware for async action.
//1st issue is the async & await keywords which gets transpiled to es5 syntax. calls a switch statement which returns a request obj instead of a plain obj.
//2nd issue if you take out the async & await functions. It wont return any data because the request happens super fast. 
// export const fetchPosts = async() => {
//     const response = await jsonPlaceholder.get('/posts')

//     return {
//         type: 'FETCH_POST',
//         payload: response
//     };
// };

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POST',
        payload: response
    };
};