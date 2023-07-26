import { Button, Card, CardContent, Divider, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function VolunteerDashboard(){
    const location = useLocation();
    const email = location.state.email;
    const navigate = useNavigate();
    const [eventData, setEventData] = useState({});

    useEffect(() => {
        (async () =>{
        try{
            const response = await axios.post('https://z5xiwa5nre.execute-api.us-east-1.amazonaws.com/dev/getvolunteer', {
            'email': email
        });
            setEventData(response.data.details.EventDetails)
        }
        catch{
            alert("Error While Retrieving Volunteer's Event Data!!")
        }
    })();
    }, [])
    return(
        <div className="centered-container" style={{backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center'}}>
            <Card style={{ width: '800px' , height: '530px', border: '1px solid black'}}>
                <CardContent>
                    <h1>VOLUNTEER DASHBOARD</h1>
                    <Divider style={{ margin: '16px 0', backgroundColor: 'black'}}/>
                    {eventData && eventData['L'] ? (
                        eventData['L'].map((item, index) => {
                        const dateKeys = Object.keys(item['M']); // Extract the date keys from the object
                        if (dateKeys.length === 0) {
                            return <p key={index}>No Event Assigned.</p>;
                        }
                        return dateKeys.map((dateKey) => {
                            const events = item['M'][dateKey]['L']; // Extract the list of events for a specific date
                            return events.map((event, eventIndex) => (     
                                           
                            <div key={`${index}-${eventIndex}`} >
                                <Stack sx={{border: '1px solid black'}}>
                                    <div><p><b>Event Name: </b>{event['M']['name']['S']}</p></div>
                                    <Stack spacing={2} direction="row" marginLeft={20} >
                                        <div><p><b>Event Date: </b>{dateKey}</p></div>
                                        <div><p><b>Event Hours: </b>{event['M']['hours']['S']}</p></div>
                                        <Button onClick={e => navigate('/eventdetail', {state: {'event_id': event['M']['event_id']['S'], 'id': 0}})}>Event Details</Button>
                                    </Stack>
                                </Stack>
                            </div>
                            ));
                        });
                        })
                    ) : (
                        <p>No Event Assigned.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}