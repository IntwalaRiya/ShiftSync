import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Divider, FormControl, Stack, TextField } from '@mui/material';
import axios from 'axios';

export default function AdminLogin(){
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleVolRegister = (event) => {
        navigate('/volregister')
    }

    const handleAdminRegister = (event) => {
        navigate('/adminregister')
    }

    const handleVolLogin = (event) => {
        navigate('/')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.post('https://z5xiwa5nre.execute-api.us-east-1.amazonaws.com/dev/validadmin', {
                'email': email,
                'password': password
            });
            console.log(response)
            if (response.status === 200){
                navigate('/allevents', {state : {'id': 1}});
            }
            else{
                setError("Credential Doesn't Match!!");
            }
        }
        catch(error){
            console.log('Error:', error);
        }
    }
    return(
        <div className="centered-container" style={{backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center'}}>
            <Card style={{ width: '800px' , height: '530px', border: '1px solid black'}}>
                <CardContent>
                    <h1>ADMIN LOGIN</h1>
                    <Divider style={{ margin: '16px 0', backgroundColor: 'black'}}/>
                    <br />
                    <br />
                    <FormControl>
                        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <TextField id="email" label="Email" variant="outlined" fullWidth required onChange={e => setEmail(e.target.value)}  />
                            <TextField id="password" label="Password" type="password" variant="outlined" fullWidth required onChange={e => setPassword(e.target.value)}  />
                        </Stack>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleSubmit}>Admin Login</Button>
                        <br />
                        {error && <div style={{color: 'red'}}>{error}</div>}
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleAdminRegister}>Admin Registration</Button>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleVolRegister}>Volunteer Registration</Button>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleVolLogin}>Volunteer Login</Button>
                    </FormControl>
                </CardContent>
            </Card>
        </div>
    );
}