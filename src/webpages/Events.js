import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Card, CardContent, Divider } from '@mui/material';
import axios from 'axios';

export default function Events(){
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;
    const [eventList, seteventList] = useState({});

    useEffect(() => {
        (async () =>{
        try{
            const response = await axios.get('https://z5xiwa5nre.execute-api.us-east-1.amazonaws.com/dev/geteventlist');
            seteventList(response.data.details)
        }
        catch{
            alert("Error While Retrieving List of Events")
        }
    })();
    }, [])

    const handleLogout = () => {
        navigate('/')
    }

    const handleAddEvent = () => {
        navigate('/addevent')
    }
    
    return(
        <div className="centered-container" style={{backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center'}}>
            <Card style={{ width: '800px' , height: '530px', border: '1px solid black'}}>
                <CardContent>
                    <h1>EVENTS LIST</h1>
                    <Divider style={{ margin: '16px 0', backgroundColor: 'black'}}/>
                    {eventList.length > 0 ? (
                        <>
                        {eventList.map((item) => (
                            <>
                            <p><b>Event Name: </b>{item.event_name} <Button onClick={e => navigate('/eventdetail', {state: {'event_id': item.event_id, 'id': 1}})}>Event Details</Button></p>
                            </>
                        ))}
                        </>
                    ) : (
                        <>
                            <p>Loading...</p>
                        </>
                    )}
                    <br/>
                    <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleAddEvent}>Add Event</Button>
                    <br />
                    <br />
                    <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleLogout}>Logout</Button>
                </CardContent>
            </Card>
        </div>
    );
}