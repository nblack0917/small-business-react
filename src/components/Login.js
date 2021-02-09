import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import {
    TextField,
    Button,
    Container
} from '@material-ui/core'

const Login = (props) => {
    const history = useHistory();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [hasName, setHasName] = useState(false)
    const [hasPass, setHasPass] = useState(false)

    console.log(props.loggedIn)

    const login = (e) => {
        e.preventDefault()
        document.cookie = "loggedIn=true"
        props.enableLogin();
        // window.location.replace("/home")
        // console.log(props.loggedIn)
        history.push('/home')
    }

    const handleUserChange = (e) => {
        setUserName(e.target.value)
        if(hasName) {
            setHasName(!hasName)
        }
    }
    
    const handlePassChange = (e) => {
        setPassword(e.target.value)
        if(hasPass) {
            setHasPass(!hasPass)
        }
    }

    const checkLogin = () => {
        if(!userName || ! password) {
            if(!userName) {
                setHasName(!hasName)
            }
            if(!password) {
                setHasPass(!hasPass)
            }
        }else if(userName && password) {  
            props.updateUserName(userName);
        }
    }

    return (
    <div className="App">
        <Container maxWidth="sm">
        <form className="login-form"
        onSubmit={login}
        >
            <TextField
                required
                error={hasName}
                id="userName"
                value={userName}
                onChange={handleUserChange}
                name="username"
                label="Username"
                type="text" />
            <TextField
                required
                error={hasPass}
                id="password"
                value={password}
                onChange={handlePassChange}
                name="password"
                label="Password"
                type="password" />
            <Button
                type="submit"
                className="login-button"
                variant="contained"
                color="default"
                onClick={checkLogin}>
            Login
            </Button>
        </form>
        </Container>
    </div>
    );
}

export default Login;
