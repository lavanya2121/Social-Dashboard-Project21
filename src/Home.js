
import React from 'react'
import Login from './Login'
import {Redirect,BrowserRouter,Route,Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

class UserHome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            status:false,
            // user:{},
            // posts:[]
        }
    }

    handleLogout=()=>{
        localStorage.clear('id')
        this.setState(prevState=>{
            return{
                status:!prevState.status
            }
        })
    }

    // componentDidMount(){
    //     const id = localStorage.getItem('id')
    //     console.log(id)
    //     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then((response)=>{
    //         this.setState({user:response.data})
    //     })
    //     .catch((err)=>{
    //         console.log('err')
    //     })
    //     axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    //     .then((response)=>{
    //         this.setState({posts:response.data})
    //     })
    //     .catch((err)=>{
    //         console.log('err')
    //     })

    // }

    render(){
        console.log(this.state.user)
        if(this.state.status === true){
            return <BrowserRouter><Link to="/"></Link><Route to="/" component={Login}/></BrowserRouter>
        }
        return(
            <BrowserRouter>
            <div align="center">
            <div className="col-10">
                <div className="row"> 
                    <div className="col"><h4 align="left">user's blog</h4></div>
                
               <div className="col" align="right"><Link onClick={this.handleLogout}  align="right"><h4>Logout</h4></Link></div>
                </div> <hr/>
                     {this.props.posts.length > 0 ?(<div align="left"><h2>users information</h2><h6 className="display-4">NAME-{this.props.user.name}</h6><h6 className="display-4">Contact no - {this.props.user.phone}</h6><hr/>
                     <ul className="list-group">
                    {
                        this.props.posts.map((post,i)=>{
                        return <li key={i} className="list-group-item"><h4><small>{post.title}</small></h4></li>
                        })
                    }</ul></div>) : <h4>Loading.......</h4>}
                
            </div>
            </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.usersData.users.find(user=>user.id==localStorage.getItem('id')),
        posts:state.usersData.posts.filter(post=>post.userId==localStorage.getItem('id'))
    }
}

export default connect(mapStateToProps)(UserHome)