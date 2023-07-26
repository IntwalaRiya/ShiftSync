import React, { useState } from "react";
import { Button, Card, CardContent, Divider, FormControl, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function VolunteerRegistration(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [mon, setMon] = useState('');
    const [tues, setTues] = useState('');
    const [wed, setWed] = useState('');
    const [thurs, setThurs] = useState('');
    const [fri, setFri] = useState('');
    const [sat, setSat] = useState('');
    const [sun, setSun] = useState('');
    const [error, setError] = useState('');

    const handleAdminRegister = () => {
        navigate('/adminregister')
    }

    const handleAdminLogin = () => {
        navigate('/adminlogin')
    }

    const handleVolLogin = () => {
        navigate('/')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email === ''){
            setError('Invalid Email')
        }
        else if (password === ''){
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
            setError('Invalid Phone')
        }
        else if (location === ''){
            setError('Invalid Location')
        }
        else if (mon === ''){
            setError('Invalid Monday Availability')
        }
        else if (tues === ''){
            setError('Invalid Tuesday Availability')
        }
        else if (wed === ''){
            setError('Invalid Wednesday Availability')
        }
        else if (thurs === ''){
            setError('Invalid Thursday Availability')
        }
        else if (fri === ''){
            setError('Invalid Friday Availability')
        }
        else if (sat === ''){
            setError('Invalid Saturday Availability')
        }
        else if (sun === ''){
            setError('Invalid Sunday Availability')
        }
        else{
            const body = {
                'email': email,
                'password': password,
                'name': name,
                'age': age,
                'address': address,
                'location': location,
                'contact': contact,
                'mon': mon,
                'tues': tues,
                'wed': wed,
                'thurs': thurs,
                'fri': fri,
                'sat': sat,
                'sun': sun
            }
            try{
                const response = await axios.post('https://z5xiwa5nre.execute-api.us-east-1.amazonaws.com/dev/addvolunteer', body);
                alert("Successfully Created Volunteer's Account!")
                navigate('/')
            }
            catch{
                alert("Error While Creating Account!!")
            }
        }
    }

    return(
        <div className="centered-container" style={{backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150vh', textAlign: 'center'}}>
            <Card style={{ width: '1000px' , height: '750px', border: '1px solid black'}}>
                <CardContent>
                    <h1>VOLUNTEER REGISTRATION</h1>
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
                            <TextField id="contact" label="Contact" type="tel" variant="outlined" fullWidth required onChange={e => setPhone(e.target.value)}  />
                            <TextField id="location" label="Location" variant="outlined" fullWidth required onChange={e => setLocation(e.target.value)}  />
                        </Stack>

                        <Typography variant="h5" component="h2" gutterBottom>Availability</Typography>

                        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <TextField id="mon" label="Monday" type="number" variant="outlined" fullWidth required onChange={e => setMon(e.target.value)}  />
                            <TextField id="tues" label="Tuesday" type="number" variant="outlined" fullWidth required onChange={e => setTues(e.target.value)}  />
                            <TextField id="wed" label="Wednesday" type="number" variant="outlined" fullWidth required onChange={e => setWed(e.target.value)}  />
                            <TextField id="thurs" label="Thursday" type="number" variant="outlined" fullWidth required onChange={e => setThurs(e.target.value)}  />
                            <TextField id="fri" label="Friday" type="number" variant="outlined" fullWidth required onChange={e => setFri(e.target.value)}  />
                            <TextField id="sat" label="Saturday" type="number" variant="outlined" fullWidth required onChange={e => setSat(e.target.value)}  />
                            <TextField id="sun" label="Sunday" type="number" variant="outlined" fullWidth required onChange={e => setSun(e.target.value)}  />
                        </Stack>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleSubmit}>Register</Button>
                        <br />
                        {error && <div style={{color: 'red'}}>{error}</div>}
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleVolLogin}>Volunteer Login</Button>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleAdminRegister}>Admin Registration</Button>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleAdminLogin}>Admin Login</Button>
                    </FormControl>
                </CardContent>
            </Card>
        </div>
    );
}