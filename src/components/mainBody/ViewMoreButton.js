import React from 'react';
import { Button } from "@mui/material";


export default function ViewMoreButton(props) {
    return <div className="viewMore">
        <Button variant="text" onClick={e => {
            props.toggleAllVacations()
        }}>View More {'>>'}</Button>
    </div>;
}
