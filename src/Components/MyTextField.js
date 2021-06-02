import React from 'react'
import {TextField} from "@material-ui/core";

export default function MyTextField(props) {
    
    return (
        <TextField
            label={props.label} 
            variant="outlined"
            color="primary"
            required
            margin="normal"
            error={props.err? true: false}
            helperText={props.err && "This field is required"}
            fullWidth
            multiline={props.multi? true: false}
            rows="3"
            value={props.value}
            onChange={props.onChange}
        />
    )
}
