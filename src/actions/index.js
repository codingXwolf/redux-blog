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

//unlimited power throuout the redux application.
//You can pass actions to the dispatch function. Those actions will be sent through all of the apps
// different middlewares and eventually forwarding it off to apps reducers.
//getState function can be called on a redux store and will return all of the data or all of the state inside.

//Main take away of redux thunk is when the action gets passed to thunk it will check if its a function or an object.
// - If it a function it will call the dispatch and getState funcions, invoke function with dispatch,
// - wait for our request to finish, once request is complete it will dispatch function manually,
// - You will have a new action which will be passed again to redux thunk and will check if its an object or function.
// - this time it will be an object and pass the object to the reducers. Thats it!!

//original version
// export const fetchPosts = () => {
//     return async function(dispatch, getState){
//         const response = await jsonPlaceholder.get('/posts')

//         dispatch({ type: 'FETCH_POSTS', payload: response }) //dispatch passes in an object
//     };
// };

//refactored version/less syntax, probaly more commonly seen.
export const fetchPosts = () =>  async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response }); //dispatch passes in an object
};


//Totally fine to do.
// export const selectPost = () => {
//     return {
//         type:'SELECT_POST'
//     }
// };