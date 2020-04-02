
import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Login from './Login'
import Home from './Home'

function App(){
    return(
        <BrowserRouter>
        <div>
             <Link to="/"></Link>

             <Route link="/" component={Login} exact={true}/>
             {/* <Route link="/home" component={Home}/> */}
        </div>
        </BrowserRouter>
    )
}

export default App

//enter the mail id of jsonplaceholders email id
//https://jsonplaceholder.typicode.com/users