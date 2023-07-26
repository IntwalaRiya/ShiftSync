import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Divider, FormControl, Stack, TextField } from '@mui/material';
import axios from "axios";
export default function AdminRegistration(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [position, setPosition] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');

    const handleAdminLogin = () => {
        navigate('/adminlogin')
    }

    const handleVolLogin = () => {
        navigate('/')
    }

    const handleVolRegister = () => {
        navigate('/volregister')
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email === ''){
            setError('Invalid Email')
        }
        else if(password === ''){
            setError('Invalid Password')
        }
        else if (name === ''){
            setError('Invalid Name')
        }
        else if (age === ''){
            setError('Invalid Age')
        }
        else if (address === ''){
            setError('Invalid Address')
        }
        else if (contact === ''){
            setError('Invalid Contact Details')
        }
        else if (position === ''){
            setError('Invalid Position')
        }
        else{
            const body = {
                'email': email,
                'password': password,
                'name': name,
                'age': age,
                'address': address,
                'position': position,
                'contact': contact
            }
            try{
                const response = await axios.post('https://z5xiwa5nre.execute-api.us-east-1.amazonaws.com/dev/addadmin', body);
                alert("Successfully Created Admin Account!")
                navigate('/adminlogin')
            }
            catch{
                alert("Error While Creating Account!!")
            }
        }
    }

    return(
        <div className="centered-container" style={{backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150vh', textAlign: 'center'}}>
            <Card style={{ width: '1000px' , height: '630px', border: '1px solid black'}}>
                <CardContent>
                    <h1>ADMIN REGISTRATION</h1>
                    <Divider style={{ margin: '16px 0', backgroundColor: 'black'}}/>
                    <br />
                    <br />
                    <FormControl>
                        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <TextField id="email" label="Email" variant="outlined" fullWidth required onChange={e => setEmail(e.target.value)}  />
                            <TextField id="password" label="Password" type="password" variant="outlined" fullWidth required onChange={e => setPassword(e.target.value)}  />
                            <TextField id="name" label="Name" variant="outlined" fullWidth required onChange={e => setName(e.target.value)}  />
                            <TextField id="age" label="Age" type="number" variant="outlined" fullWidth required onChange={e => setAge(e.target.value)}  />
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <TextField id="address" label="Address" variant="outlined" fullWidth required onChange={e => setAddress(e.target.value)}  />
                            <TextField id="contact" label="Contact" type="tel" variant="outlined" fullWidth required onChange={e => setContact(e.target.value)}  />
                            <TextField id="position" label="Position" variant="outlined" fullWidth required onChange={e => setPosition(e.target.value)}  />
                        </Stack>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleSubmit}>Register</Button>
                        <br />
                        {error && <div style={{color: 'red'}}>{error}</div>}
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleVolLogin}>Volunteer Login</Button>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleVolRegister}>Volunteer Registration</Button>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleAdminLogin}>Admin Login</Button>
                    </FormControl>
                </CardContent>
            </Card>
        </div>
    );
}