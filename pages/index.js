import {Box, Button, Container, createTheme, Grid, ThemeProvider, useTheme} from '@material-ui/core';
import { VerticalAlignCenter } from '@material-ui/icons';
import { color } from '@mui/system';
import { Theme } from '@mui/material';
import React from 'react';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';

function login_page() {
    const theme = createTheme({
        palette:{
            primary:{
                main:'#7e41df'
            }
        }
    })
    const bgColor = "#7e41df"
    return (
        <div style={{height: '98vh', alignItems:'center', justifyContent:'center', display:'flex'}}>
            <style>{'body {background-color:'+bgColor+';}'}</style>
            <div>
                <Paper elevation={10} style={{backgroundColor:'#ffffff', height:'35vh', width:'35vh', justifyContent:'center', alignItems:'center', display:'flex', borderRadius:'5px',}}>
                    <Container alignitems='center' justifycontent='center' display='flex' >
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img src="./static/media/flipLogo.png" alt="Flip Logo" height="60"></img>
                        </div>
                        <TextField id="username-field" label="Usuário" variant="filled"   />
                        <TextField id="pass-field" label="Senha" variant="filled" style={{
                            borderColor: '#7e41df'
                        }} />
                        <Button style={{backgroundColor:'#7e41df', color:'#ffffff', justifyContent:'center'}}>
                            ENTRAR
                        </Button>
                    </Container>
                </Paper>
            </div>
        </div>
    )
}

export default login_page;
