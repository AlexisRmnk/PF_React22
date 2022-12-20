import { Typography } from "@mui/material";
import { DateTime } from "luxon";

const formatDate = (datee) => {
    return (DateTime.fromISO(datee).setLocale().toFormat("dd-LL-y 'a las' HH:mm 'hs.'"));
}

const Date = ({datee}) => {
    return (
        <Typography variant="body2">
            Publicado el: {formatDate(datee)}
        </Typography>
    )
}

export default Date;