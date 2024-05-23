import { Chip, Stack } from "@mui/material";
import React from "react";

function CustomChips({labelDefault,labelSecondary,handleClickChipDefault,handleClickChipSecondary}) {
    return (
        <Stack direction="row" spacing={2}>
            <Chip sx={{px: 2, py: 2.5, borderRadius: 5}} variant={variationPrim} clickable label={labelDefault} onClick={handleClickChipDefault}/>
            <Chip sx={{px: 2, py: 2.5, borderRadius: 5}} variant={variationSec} clickable label={labelSecondary} onClick={handleClickChipSecondary} />
        </Stack>
    );
}

export default CustomChips;