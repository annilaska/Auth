import React from "react";
import { Typography, Link } from '@mui/material';
import './ProfileContainer.scss';

type propsType = {
    contactTitle: string 
    contactValue: string | null
}

export const Contact: React.FC<propsType> = ({ contactTitle, contactValue }) => {
    return (
        <Typography>
            <span className='contactTitle'>{contactTitle}:</span>
            <Link color="inherit" href="#">{contactValue || " --- "}</Link>
        </Typography>
    )
};