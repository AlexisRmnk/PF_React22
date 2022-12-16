import { Typography } from "@mui/material";
import { DateTime } from "luxon";

const formatDate = (datee) => {
    return (DateTime.fromISO(datee).setLocale().toFormat("dd-LL-y 'a las' HH:mm 'hs.'"));
}

const Date = ({datee}) => {
    return (
        <Typography variant="body2">
            Publicado el: {formatDate(datee)}
            {/* Publicado el: 28-06-2022 a las 03:00 hs */}
        </Typography>
    )
}

export default Date;