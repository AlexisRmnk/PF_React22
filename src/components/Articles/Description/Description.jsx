import { Typography } from "@mui/material";

const Description = ({description}) => {
    return (
        <Typography variant="body1" marginBottom={1}>
            {description} 
        </Typography>
    )
}
export default Description;