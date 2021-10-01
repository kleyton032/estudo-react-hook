import * as types from './type';

export const reducer = (state, action) => {
    switch (action.type) {
        case types.POSTS_SUCCESS: {
            console.log(action.payload);
            return { ...state, posts: action.payload }
        }
    }

    console.log('não encontrei a action', action.type)
    return { ...state };
};