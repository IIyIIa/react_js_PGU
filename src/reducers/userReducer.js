// reducers/userReducer.js
const initialState = {
    users: [
      { id: 1, name: 'John Doe', login: 'johndoe', password: 'password' }
    ],
    currentUser: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        const { login, password } = action.payload;
        const user = state.users.find(user => user.login === login && user.password === password);
  
        return {
          ...state,
          currentUser: user
        };
  
      case 'REGISTER_USER':
        const newUser = action.payload;
        return {
          ...state,
          users: [...state.users, newUser]
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  