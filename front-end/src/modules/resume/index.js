import { Navbar } from "../router/components";
import React, { useState } from 'react';

export const Resume = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Navbar toggle={toggle} noMenu='true'/>
            <h1>Resume Goes Here</h1>
            <h1>Resume Goes Here</h1>
            <h1>Resume Goes Here</h1>
            <h1>Resume Goes Here</h1>
            <h1>Resume Goes Here</h1>
        </>
    );
}