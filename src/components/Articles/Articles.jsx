import Date from "./Date/Date"
import Description from "./Description/Description"
import Image from "./Image/Image"
import PlatformName from "./PlatformName/PlatformName"
import TitleLinked from "./TitleLinked/TitleLinked"
import "./Articles.css"

import Grid from '@mui/material/Grid'
import { Box, Paper, Stack } from "@mui/material"

const Articlee = ({art}) => {
    
    return (
        <Paper elevation={3}
        component="article"
        sx={{
            padding:"10px",
             }} > 
            <Grid container className="Art"  >
                <Grid item xs={9}>
                        <TitleLinked/>
                        <Description/>
                        <Date/>
                        <PlatformName url={"https://w3collective.com/get-domain-name-url-javascript/"}/>
                </Grid>
                <Grid item xs={3}>

                        <Image/>

                </Grid>
            </Grid> 
        </Paper>
        
    )
}

const ArticleList = () => {
    return (
        
        <Stack className="ArtsContainer" spacing={"10px"} component="section"> 
            {[1, 2, 3, 4].map((Art, index) => {
                return (
                    <Articlee 
                        article={Art} 
                        key={`art_${index}`} />
                )
            })}
        </Stack>

    )
}


// const ArticleList = () => {
//     let iterable = [1,2,3,4];
//     return ( <section> { iterable.map(() =>  <Articulo/>  )  } </section> )
    
// }




export default ArticleList;