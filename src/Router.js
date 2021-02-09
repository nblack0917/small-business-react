import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './containers/Home'
import UserHome from './containers/UserHome'
import Login from './containers/Login'
import BusinessDetail from './containers/BusinessDetail'
import AddBusiness from './containers/AddBusiness'
import Navigation from './containers/Navbar'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    // console.log(cookies)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => checkAuth()
                ? <Component {...props } />
                : <Redirect to='/login' />
            }
        />
    )
}

const Router = () => {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
                <ProtectedRoute exact path="/home" component={UserHome} />
                <Route path="/detail/:id" component={BusinessDetail} />
                <Route path="/add" component={AddBusiness} />
            </Switch>
        </div>
    )
}


export default Router