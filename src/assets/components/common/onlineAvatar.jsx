import React from "react";
import '../../css/navbar.css';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { Person } from "@mui/icons-material";

function OnlineAvatar({ switchStyle, onClickAvatar }) {
    return (
        <div className="switchContainer" style={{ display: 'flex', alignItems: 'center', ...switchStyle }}>
            {switchStyle.status === 'offline' && (
                <>
                    <button className="avatarButton" style={{borderColor: 'red'}} onClick={onClickAvatar}><PersonAddDisabledIcon style={{ fontSize: 20, color: 'red' }}/></button>
                    <span style={{ marginLeft: '2px', fontWeight: 500, fontFamily: 'sans-serif' }}>{switchStyle.status}</span>
                </>
            )}
            {switchStyle.status === 'online' && (
                <>
                    <span style={{ marginRight: '2px', marginLeft: '7px', fontWeight: 500, fontFamily: 'sans-serif' }}>{switchStyle.status}</span>
                    <button className="avatarButton" style={{borderColor: 'green'}} onClick={onClickAvatar}><PersonAdd style={{ fontSize: 20, color: 'green' }} /></button>
                </>
            )}
        </div>
    );
}

export default OnlineAvatar;
