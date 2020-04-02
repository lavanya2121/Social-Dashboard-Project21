// const initialData={users:[],posts:[]}

// const usersDataReducers=(state=initialData,action)=>{
//     switch(action.type){
//         case 'SET_DATA':{
//             return{
//                 users:[...action.payload.users],
//                 posts:[...action.payload.posts]
//             }
//         }
//         default:{
//             return {...state}
//         }

//     }
// }

// export default usersDataReducers
const intialData = {users:[],posts:[]}

const usersDataReducers = (state=intialData,action) => {
    switch(action.type){
        case 'SET_DATA' : {
            return {
                users : [...action.payload.users],
                posts : [...action.payload.posts]
            }
        }
        default : {
            return {...state}
        }
    }
}

export default usersDataReducers