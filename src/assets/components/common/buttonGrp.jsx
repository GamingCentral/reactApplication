import React from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import '../../css/navbar.css'
import OnlineAvatar from '../common/onlineAvatar';
import Badge from "@mui/material/Badge";


function MenuGroupButtons({switchStyle,onClickAvatar}) {
    return (
        <div className="menuGroupContainer">
            <ButtonGroup disableRipple variant="text" aria-label="Small button group" className="flexItem">
                <Button  sx={{ mx: 2 }}>
                    <Badge variant="dot" color="secondary" overlap="circular"> <NotificationsIcon/> </Badge> 
                </Button>
                <Button  sx={{ mx: 2 }}>
                    <SettingsIcon />
                </Button>
            </ButtonGroup>
            <div className="flexItem avatarContainer">
                <OnlineAvatar switchStyle={switchStyle} onClickAvatar={onClickAvatar} />
            </div>
        </div>
    );
}

export default MenuGroupButtons;

/* to create styles of components: 

    [from @mui/materials/styles;]
        const customNameOfComponent = styled(componentNameActual) (
            //styles
        );
    
    [from @mui/system;]
        const customNameOfComponent = styled(componentNameActual) `
            //styles --> generally css styles
        `;

    the props can be sent as:
        const customNameOfComponent = styled(componentNameActual)(props) => {
            const theme = props.theme;
            return { //properties }; //returns theme object
        }
        or to shorten it:
        const customNameOfComponent = styled(componentNameActual)({theme}) => (
            {
                //properties
            }
        )
*/