import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';

export default function BasicTextFields() {
    const [write, setWrite] = useState('');
    console.log(write)
    return (
        <div>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": {  width: "100%", },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="Write messages"
                    label="Введите сообщение"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {setWrite(e.target.value)}}
                    value={write}
                />
            </Box>
            <AttachFileIcon/>
            <KeyboardVoiceIcon/>
            <SendIcon/>
        </div>

    );
}
