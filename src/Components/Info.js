import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

export default function Info(props) {
    let location = useLocation();
    return (
        <Card className="text-center">
            <Card.Header>React Redux Practise - Assignment 2</Card.Header>
            <Card.Body>
                <Card.Title><strong>Picture Album Viewer</strong></Card.Title>
                {location.pathname === "/" ? 
                <p>Currently Displaying Album List, Select an Album to View the Images</p>
                : <Link to={"/"}>
                    <Button variant="primary">Back to Album List</Button>
                </Link> }
            </Card.Body>
        </Card>
    )
}