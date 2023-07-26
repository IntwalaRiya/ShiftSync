import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Card, CardContent, Divider, Stack } from '@mui/material';

export default function EventDetails(){
    const location = useLocation();
    const event_id = location.state.event_id;
    const navigate = useNavigate();
    const [eventDetails, seteventDetails] = useState([]);
    const id = location.state.id;

    useEffect(() => {
        (async () =>{
        try{
            const response = await axios.post('https://z5xiwa5nre.execute-api.us-east-1.amazonaws.com/dev/getevent', {
            'id': event_id
        });
            seteventDetails(response.data['details'])
        }
        catch{
            alert("Error While Retrieving Event Details")
        }
    })();
    })
    
    const handleAssignVolunteer = async () => {
        try{
            const response = await axios.post('https://z5xiwa5nre.execute-api.us-east-1.amazonaws.com/dev/assignvolunteers', {
            'id': event_id
        });
        alert("Volunteers Assigned Successfully!!")
        }
        catch{
            alert("Error While Assigning Volunteers")
        }
    }

    const handleLogout = () => {
        navigate('/')
    }
    return(
        <div className="centered-container" style={{backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center'}}>
            <Card style={{ width: '800px' , height: '650px', border: '1px solid black'}}>
                <CardContent>
                    <h1>EVENT DETAILS</h1>
                    <Divider style={{ margin: '16px 0', backgroundColor: 'black'}}/>
                    {Object.keys(eventDetails).length> 0 ? (
                    <div style={{border: '1px solid black'}}>
                        <p><b>Event Name: </b>{eventDetails.EventName.S}</p>
                        <Stack spacing={2} direction="row" marginLeft={13}>
                            <div>
                                <p><b>Event Category: </b></p>   
                                {eventDetails.EventCategory.S}
                            </div>
                            <div>
                                <p><b>Location: </b></p>   
                                {eventDetails.Location.S}
                            </div>
                            <div>
                                <p><b>Event Date: </b></p>   
                                {eventDetails.EventDate.S}
                            </div>
                            <div>
                                <p><b>Event Time: </b></p>   
                                {eventDetails.EventTime.S}
                            </div>
                            <div>
                                <p><b>Event Hours: </b></p>   
                                {eventDetails.EventHours.S}
                            </div>
                        </Stack>
                        <div>
                            {id ? (
                                <>
                                    <hr />
                                    <Stack spacing={2} direction="row" marginLeft={24}>
                                        <div><p><b>Total Volunteers: </b>{eventDetails.TotalVolunteers.S}</p></div>
                                        <div><p><b>Remaining Volunteers: </b>{eventDetails.RemainingVolunteers.S}</p></div>
                                    </Stack>
                                    <p><b><u>Assigned Volunteers: </u></b></p>
                                    {eventDetails.AssignedVolunteers.M && typeof eventDetails.AssignedVolunteers.M === 'object' && Object.keys(eventDetails.AssignedVolunteers.M).length > 0 ? 
                                        (Object.keys(eventDetails.AssignedVolunteers.M).map((email) => {
                                        const volunteer = eventDetails.AssignedVolunteers.M[email].M;
                                        const name = volunteer.name.S;

                                        return (
                                            <>
                                            <Stack spacing={2} direction="row" marginLeft={26}>
                                                <div>
                                                    <p><b>Email: </b>{email} <b>Name: </b>{name}</p>
                                                </div>
                                            </Stack>
                                            </>
                                        );
                                    })
                                    ) : (
                                        <p>No assigned volunteers</p>
                                    )}
                                    
                                    <br />
                                    <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleAssignVolunteer}>AssignedVolunteers</Button>
                                    <br />
                                    <br />
                                </>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </div>
                    ) : (
                        <>
                            <p>Loading...</p>
                        </>
                    )}
                    <br />
                    <Button variant="contained" style={{backgroundColor: '#CCCCFF', color: 'black', border: '1px solid black'}} fullWidth type="submit" onClick={handleLogout}>Logout</Button>
                </CardContent>
            </Card>
        </div>
    );
}