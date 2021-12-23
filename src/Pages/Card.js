import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { NavLink } from 'react-router-dom';
import {  ListItemButton, Grid, ListItemIcon, ListItemText, List, } from '@mui/material';

const Card = (props) => {

    const data = props.data;

    console.log(data)

    return (
        <Grid item xs={4}>
            <NavLink to={`/universities/${data.name}`} style={{color: 'black', textDecoration: 'none'}}>
                <List>
                    <ListItemButton>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary={data.name} />
                    </ListItemButton>
                </List>
            </NavLink>
        </Grid> 
    );
};

export default Card;