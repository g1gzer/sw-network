


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users:[
        // {id: 1, userName: 'Special Spirit', followStatus: false, status: 'Hi, how are you!', location: {city: "Saint-Petersburg", country: "Russia"}},
        // {id: 2, userName: 'Gordon Freeman', followStatus: true, status: 'Lol it\'s my first post', location: {city: "Moscow", country: "Russia"}},
        // {id: 3, userName: 'Sanya Volkov', followStatus: false, status: 'Hello. What\'s up?', location: {city: "Kiev", country: "Ukraine"}},
    ]
};

const usersReducer = (state = initialState, action) => {
    // Posts

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followStatus: true}
                    }
                    return u;

                })

            }
        case UNFOLLOW:
            return {
                ...state.users,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followStatus: false}
                    }
                    return u;

                })

            }
        case SET_USERS: {
            // console.log({...action.users})
            // return state;
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users });


export default usersReducer;