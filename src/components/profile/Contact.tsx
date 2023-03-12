import React from "react";
import { Typography, Link } from '@mui/material';
import s from './ProfileContainer.module.css';

type propsType = {
    contactTitle: string 
    contactValue: string | null
}

export const Contact: React.FC<propsType> = ({ contactTitle, contactValue }) => {
    return (
        <Typography>
            <span className={s.contactTitle}>{contactTitle}:</span>
            <Link color="inherit" href="#">{contactValue || " --- "}</Link>
        </Typography>
    )
};