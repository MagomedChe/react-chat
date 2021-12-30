import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import ButtonsSend from './ButtonsSend'

export default function BasicTextFields() {
    const [write, setWrite] = useState('');

    return (
        <div className="write">
            <Box
                component="form"
                sx={{
                    "& > :not(style)": {  width: "100%"},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="Write messages"
                    placeholder="Введите сообщение"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {setWrite(e.target.value)}}
                    value={write}
                />
            </Box>
             <ButtonsSend write={write} setWrite={setWrite}/>

        </div>

    );
}
