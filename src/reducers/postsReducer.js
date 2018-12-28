export default (state = [], action) => {
    // if you dont return a value (primitive values except undefined) you will get an error because of the rules of reducers.
    // Not allowed to return UNDEFINED!!
    
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload;
    // }

    // return state; Syntax we've been using but now were going to use a switch statement like for our project trail-hunter.

    switch (action.type) {  //if the action.type
        case 'FETCH_POSTS': //equals to case 'FETCH_POSTS'
            return action.payload;//than it will return the action.payload for this case.
        default://If nothing matches the cases then it will return a default state.
            return state;
    }
};