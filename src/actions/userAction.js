
import axios from 'axios'

export const startSetAll = () => {
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const posts = response.data
                dispatch(setData({users,posts}))
            })
        })
    }
}

export const setData = (obj) =>{
    return {type:'SET_DATA',payload:obj}
}