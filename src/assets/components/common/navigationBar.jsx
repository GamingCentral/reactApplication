import React from "react";
import MenuButton from "./menuButton";
import MenuGroupButtons from "./buttonGrp";
import '../../css/navbar.css';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { useState } from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import DrawerCustom from "../common/drawerMain";

const MenuButtonStyled = styled(Button)`
    color: blue;
    min-width: 50px;
    padding: 0;
    aspect-ratio: 1;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenuIconStyledOpen = styled(MenuIcon)`
    margin: 0 !important;
`;

function NavBar() {
    const [switchStyle, setSwitchStyle] = useState({
        textAlign: 'left',
        backgroundColor: '#ffcbd1',
        status: 'offline',
        color: 'red',
    });

    function onClickAvatar() {
        setSwitchStyle(prevStyle => ({
            ...prevStyle,
            textAlign: prevStyle.textAlign === 'left' ? 'right' : 'left',
            backgroundColor: prevStyle.backgroundColor === '#ffcbd1' ? '#acdf87' : '#ffcbd1',
            status: prevStyle.status === 'offline' ? 'online' : 'offline',
            color: prevStyle.color === 'red' ? 'green' : 'red',
        }));
    }

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className="navBar">
            <MenuButtonStyled variant="outlined" disableElevation onClick={toggleDrawer}>
                <MenuIconStyledOpen />
            </MenuButtonStyled>
            <a href="#" className="brand"><LogoDevIcon fontSize="large"/></a>   
            <div style={{ marginLeft: 'auto' }}>
                <MenuGroupButtons switchStyle={switchStyle} onClickAvatar={onClickAvatar}/>
            </div>
            <DrawerCustom open={open} onClose={toggleDrawer} />
        </div>
    );
}

export default NavBar;
