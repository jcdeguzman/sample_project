import React, { Fragment, useState } from 'react';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import DOST_seal from '../assets/dost_seal.png';
import Dynaslope_seal from '../assets/dynaslope_seal.png';
import Province_seal from '../assets/iloilo_province_seal.png';
import banner from '../assets/banner.png'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        window.location.href = '/main';
    }

    return (
        <Fragment>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} sx={{margin: 10}}>
                    <div
                     style={{
                        textAlign: 'center',
                        height: 'auto',
                        width: '100%',
                     }}>
                        <img
                          src={banner}
                          alt='mabangis-na-banner-png'
                          style={{
                            objectFit: 'contain',
                            height: 250,
                            width: 600,
                          }}
                        />
                    </div>
                </Grid>
                <Grid container spacing={2} textAlign="center">
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField id="filled-helperText"
                            placeholder="E.g. JuanDelacruz"
                            inputProps={{min: 0, style: {textAlign: 'center'}}}
                            helperText={
                            <Typography
                                variant="caption"
                                display="block"
                                style={{textAlign: 'center'}}>
                                Username
                            </Typography>
                            }
                            variant="outlined"
                            style={{width: '20%'}}
                            onChange={e => {
                                setUsername(e.target.value)
                              }}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <TextField id="filled-helperText"
                            placeholder="*******"
                            inputProps={{min: 0, style: {textAlign: 'center'}}}
                            type="password"
                            helperText={
                            <Typography
                                variant="caption"
                                display="block"
                                style={{textAlign: 'center'}}>
                                Password
                            </Typography>
                            }
                            variant="outlined"
                            style={{width: '20%'}}
                            onChange={e => {
                                setPassword(e.target.value)
                              }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button
                            variant="contained"
                            onClick={() => {
                            handleLogin()
                            }}>
                            Sign in
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Link
                        component="button" 
                        style={{fontStyle: 'italic', fontSize: 16}}
                        onClick={e => console.log("Usto maggawa ng account ni accla oh")}
                        >
                        No account yet? Register here!
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="subtitle2">
                            This website is for ILOILO PDRRMO use only.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={12} sx={{margin: 10}}>
                    <div
                     style={{
                        textAlign: 'center',
                        height: 'auto',
                        width: '100%',
                     }}>
                        <img
                          src={DOST_seal}
                          alt='dost-seal-png'
                          style={{
                            objectFit:'contain',
                            height: 50,
                            width: 50,
                            marginRight: 25,
                          }}/>
                        <img
                          src={Dynaslope_seal}
                          alt='dynaslope-seal-png'
                          style={{
                            objectFit:'contain',
                            height: 50,
                            width: 50,
                            marginRight: 25,
                          }}/>
                        <img
                        src={Province_seal}
                        alt='ilo-province-seal-png'
                        style={{
                            objectFit:'contain',
                            height: 50,
                            width: 50,
                            marginRight: 25,
                        }}/> 
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Login;