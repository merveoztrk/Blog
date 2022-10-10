//action'ın gönderildiği yer 
import _ from 'lodash';
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    _.chain(getState().posts) //chain verileri manipüle etmeyi sağlıyor (loadash library'sinden)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
};


export const fetchPosts = () => async dispatch => {

    const response = await jsonPlaceHolder.get('/posts'); //async-await kullanmayıp normal bir js objesi döndürür dispatch ve setState par ile arkaplanda çalıştığında thunk old anlaşılır 

    dispatch({ type: 'FETCH_POSTS', payload: response.data })

};



export const fetchUser = id => async dispatch => {

    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/user/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });