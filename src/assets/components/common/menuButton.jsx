import React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

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

const MenuIconClosed = styled(CloseIcon)`
    margin: 0 !important;
`;

const menuButtonOpen = (
    <MenuButtonStyled variant="outlined" disableElevation>
        <MenuIconStyledOpen />
    </MenuButtonStyled>
);

const menuButtonClose = (
    <MenuButtonStyled variant="outlined" disableElevation>
        <MenuIconClosed />
    </MenuButtonStyled>
);

function MenuButton({ bool }) {
    return <div style={{display: "inline-block"}}>{bool ? menuButtonOpen : menuButtonClose}</div>;
}


export default MenuButton;
