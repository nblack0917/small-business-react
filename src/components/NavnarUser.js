import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const logout = () => {
    // e.preventDefault()
    document.cookie = "loggedIn=false;max-age=1"
    window.location.replace("/login")
    
}

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    title: {
    flexGrow: 1,
    textAlign: 'left',
    },
    appBar: {
        background: '#29a366',
        zIndex: 1,
    },
    loginBar: {
        zIndex: 0,
        background: "linear-gradient(0deg, rgba(217,217,217,1) 59%, rgba(166,166,166,1) 100%)",
        height: 25,
    },
    loginType: {
        fontSize: 14,
        color: '#808080',
        position: 'fixed',
        top: 66,
        left: 25,
    }
}));

const linkStyle = {
    color: "#e6fff2",
    fontWeight: 300,
}

const NavBar = (props) => {
    // const [loggedIn, setLoggedIn] =  useState(false);
    console.log("props loggedIn:", props.loggedIn)
    const setLogin = () => {
        // console.log("Logged In: ", loggedIn)
        // setLoggedIn(false)
        props.disableLogin();
        logout();
    }
    
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Austin Small Business
                        </Typography>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Button color="inherit" style={linkStyle}>Listings</Button>
                        </Link>                        
                        <Button color="inherit" style={linkStyle}>Add</Button>
                        <Button color="inherit" style={linkStyle} onClick={setLogin}>LOGOUT</Button>
                    </Toolbar>
                </AppBar>
                <div className={classes.loginBar}>
                    <Toolbar>
                        <Typography className={classes.loginType}>
                            Logged in as: {props.userName}
                        </Typography>
                    </Toolbar>
                </div>
            </div>
        )
}

export default NavBar;
