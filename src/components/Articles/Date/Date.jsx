import { Typography } from "@mui/material";

const Date = ({datee}) => {
    return (
        <Typography variant="body2">
            Publicado el: {datee}
        </Typography>
    )
}

export default Date;