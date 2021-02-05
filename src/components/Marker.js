import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > span': {
        margin: theme.spacing(2),
        },
    },
}));

export default function Icons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        
        <LocationOnIcon fontSize='large' color="primary" />

        </div>
    );
}