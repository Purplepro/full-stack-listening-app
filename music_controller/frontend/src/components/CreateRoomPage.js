import React from 'react';
import { 
    Button,
    Grid, 
    Typography, 
    TextField, 
    FormHelperText, 
    FormControl, 
    Radio, 
    RadioGroup 
} from '@material-ui/core';

import Link from 'react-router-dom';


function CreateRoomPage() {
    defaultVotes = 2;


    return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component='h4' variant='h4'>
                        Create A Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component='fieldset'>
                        <FormHelperText>
                            <div align='center'>
                                Guest Control of Playback States
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
    )
}

export default CreateRoomPage;
