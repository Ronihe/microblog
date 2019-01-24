import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actions.js';

const INITIAL_STATE = {
  blogs: {
    // id1: {
    //   title: '',
    //   id: '',
    //   description: '',
    //   body: '',
    //   comments: [{ id: '', comment: '' }]
    // }
  }
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        blogs: { ...state.blogs, [action.payload.id]: action.payload }
      };
    }
    case EDIT_POST: {
      return {
        ...state,
        blogs: { ...state.blogs, [action.payload.id]: action.payload }
      };
    }
    case DELETE_POST: {
      let newState = { ...state, blogs: { ...state.blogs } };
      delete newState.blogs[action.payload];
      return newState;
    }
    case ADD_COMMENT: {
      let newState = { ...state, blogs: { ...state.blogs } };
      let blog = newState.blogs[action.payload.blogId];
      blog.comments = [...blog.comments, action.payload.commentObj];

      return newState;
    }
    case DELETE_COMMENT: {
      let newState = { ...state, blogs: { ...state.blogs } };
      let blog = newState.blogs[action.payload.blogId];
      blog.comments = blog.comments.filter(
        c => action.payload.commentId !== c.id
      );
      return newState;
    }
    default:
      return state;
  }
}

export default rootReducer;
