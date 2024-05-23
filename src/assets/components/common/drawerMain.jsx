import React from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import '../../css/navbar.css'

const MenuButtonStyled = styled(Button)`
    color: blue;
    min-width: 50px;
    padding: 0;
    aspect-ratio: 1;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto; /* Push the button to the right */
`;

const MenuIconClosed = styled(CloseIcon)`
    margin: 0 !important;
`;

const drawerText = ['Dashboard', 'Case Studies', 'Reports', 'Locations']
const drawerIcons = [<DashboardIcon />, <ChecklistIcon />, <AssignmentIcon />, <ShareLocationIcon />]

function DrawerCustom({open, onClose}) {
    const DrawerItems = (
        <Box className="drawerContainer" sx={{ width: { sm: 300, md: 300 } }}>
            <MenuButtonStyled variant="text" style={{display: 'block', }} disableElevation onClick={onClose}>
                <MenuIconClosed />
            </MenuButtonStyled>
            <List>
                {drawerText.map((text, index) => (
                    <ListItem key={text}>
                        <ListItemButton>
                            <ListItemIcon>{drawerIcons[index]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ position: 'absolute', bottom: 30, left: 30 }}>
                <a href="#">logout</a>
            </Box>
        </Box>
    );

    return (
        <Drawer open={open} onClose={onClose} >
            {DrawerItems}
        </Drawer>
    );
}

export default DrawerCustom;
