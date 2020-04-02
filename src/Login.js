
import React from 'react'
import {Redirect,BrowserRouter,Route,Link} from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import {connect} from 'react-redux'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
                // users:[],
                email:'',
                status:false,
                err:''
                // btnValue:false
        }
    }

    handleEmail = (e) =>{
        this.setState({email:e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
       
    }

    // componentDidMount(){
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then((response)=>{
    //         this.setState({users:response.data})
    //     })
    //     .catch((err)=>{
    //         console.log('err')
    //     })
       
    // }

    handleBtn=()=>{
        let value = this.props.users.find(user=>{
            if(user.email == this.state.email){
                return user
            }
        })
        
        if(value){
            localStorage.setItem('id',value.id)
            this.setState(prevState=>{
                return{
                    status:!prevState.status
                }
            })
        }
        else{
            this.setState({err:this.state.email})
        }

    }

    // handleBtn = () =>{
    //     axios.get(`https://jsonplaceholder.typicode.com/users?email=${this.state.email}`)
    //     .then((response)=>{
    //         if(response.data.length > 0){
    //         this.setState(prevState=>{
    //             return{
    //                 users:response.data,
    //                 btnValue:!prevState.btnValue,
    //                 err:''

    //             }
    //         })
    //     }
    //     else{
    //         this.setState({err:'email not found'})
    //     }
    //     })
    //     .catch((err)=>{
    //         this.setState({err:'error message'})
    //     })
    // }
    render(){
        console.log(this.state.status)
        if(this.state.status === true){
            return <BrowserRouter><Link to="/home"></Link><Route to="/home" component={Home}/></BrowserRouter>
        }
        
        return(
            <BrowserRouter>
            <div align="center">
                <form onSubmit={this.handleSubmit} className="col-6" style={{marginTop:'15%',border:'1px solid black',height:250}} >
                    <div className="form-group" className="col-sm-6">
                <h3>User's Login Form</h3><br/>
                <input type="email" className="form-control" placeholder="enter users email" onChange={this.handleEmail} value={this.state.email}/><br/></div>
                <input type="button" value="submit" class="btn btn-primary" style={{width:120}} onClick={this.handleBtn}/>
                {
                    this.state.err.length > 0 &&  (this.state.err.includes('@') ? <h4>Email not found</h4> : <h4>Email doesn't contain '@' symbol</h4>)
                }
               
                </form>
            </div>
            
            
            </BrowserRouter>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users : state.usersData.users
        // posts : state.usersData.posts
    }
}

export default connect(mapStateToProps)(App)