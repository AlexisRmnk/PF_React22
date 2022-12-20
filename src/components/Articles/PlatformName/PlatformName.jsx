import { Typography } from "@mui/material";

const PlatformName = ({
    platformName
}) => {
    return (
        <Typography variant="body2">
            Fuente: { platformName }
        </Typography>
    )
}
export default PlatformName;