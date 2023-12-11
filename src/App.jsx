import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import NavigationBar from "./containers/navbar/Navigationbar.jsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <NavigationBar />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default App
