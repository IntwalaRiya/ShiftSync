import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Divider, FormControl, Stack, TextField } from '@mui/material';
import axios from "axios";

export default function AddEvent(){
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [numVol, setNumVol] = useState('');
    const [hours, setHours] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const handleAllEvent = () => {
        navigate('/allevents')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name === ''){
            setError('Invalid Name')
        }
        else if (date === ''){
            setError('Invalid Date')
        }
        else if (time === ''){
            setError('Invalid Time')
        }
        else if (category === ''){
            setError('Invalid Category')
        }
        else if (numVol === ''){
            setError('Invalid Volunteers Required Field')
        }
        else if (location === ''){
            setError('Invalid Location')
        }
        else{
            const body = {
                'name': name,
                'date': date,
                'time': time,
                'category': category,
                'location': location,
                'hours': hours,
                "total": numVol
            }
            try{
                const response = await axios.post('https://z5xiwa5nre.execute-api.us-east-1.amazonaws.com/dev/addevent', body);
                console.log("Successfully Created New Event!")
            }
            catch{
                alert("Error While Creating Event")
            }
            navigate('/allevents', {state: {'id': 1}})
        }
    }

    return(
        <div className="centered-container" style={{backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center'}}>
            <Card style={{ width: '1000px' , height: '600px', border: '1px solid black'}}>
                <CardContent>
                    <h1>ADD EVENT</h1>
                    <Divider style={{ margin: '16px 0', backgroundColor: 'black'}}/>
                    <br />
                    <br />
                    <FormControl>
                        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <TextField id="email" label="Name" variant="outlined" fullWidth required onChange={e => setName(e.target.value)}  />
                            <TextField id="password" type="date" variant="outlined" fullWidth required onChange={e => setDate(e.target.value)}  />
                            <TextField id="time" type="time" variant="outlined" fullWidth required onChange={e => setTime(e.target.value)}  />
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                            <TextField id="hours" label="Hours" type="name" variant="outlined" fullWidth required onChange={e => setHours(e.target.value)}  />
                            <TextField id="address" label="Categories" variant="outlined" fullWidth required onChange={e => setCategory(e.target.value)}  />
                            <TextField id="volunteers" label="Volunteers Required" type="number" variant="outlined" fullWidth required onChange={e => setNumVol(e.target.value)}  />
                            <TextField id="position" label="Location" variant="outlined" fullWidth required onChange={e => setLocation(e.target.value)}  />
                        </Stack>
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleSubmit}>ADD</Button>
                        <br />
                        {error && <div style={{color: 'red'}}>{error}</div>}
                        <br />
                        <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleAllEvent}>Back to Events List</Button>
                    </FormControl>
                </CardContent>
            </Card>
        </div>
    );
}