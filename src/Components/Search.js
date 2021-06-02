import React from 'react'
import {InputBase} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.primary.light, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.primary.light, 0.20),
        },
        padding: 10,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 3, 0),
        paddingLeft: `calc(${theme.spacing(5)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%'
    }
}));

 const Search=(props) =>{
    const classes = useStyles();
    
    return (

        <span className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            
            <InputBase
                onChange={props.searchChange}
                placeholder="Search Post Title…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </span>
        
    )
}

export default Search;