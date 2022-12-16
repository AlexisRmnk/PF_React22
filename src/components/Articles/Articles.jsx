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
            <Grid container className="Art" rowSpacing={1} >
                <Grid item xs={12} sm={8} md={9}>
                        <TitleLinked titlee={art.title} linkToUrl={art.url}/>
                        <Description description={art.description}/>
                        <Date datee={art.publishedAt} />
                        <PlatformName platformName={art.source.name} />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>

                        <Image imageUrl={art.urlToImage} 
                        titlee={art.title}/>

                </Grid>
            </Grid> 
        </Paper>
        
    )
}

const ArticleList = ({news}) => {
    return (
        
        <Stack className="ArtsContainer" spacing={"10px"} component="section"> 
            {news.map((Art, index) => {
                return <Articlee 
                        art={Art} 
                        key={`art_${index}`} />
                
            })}
        </Stack>

    )
}


// const ArticleList = () => {
//     let iterable = [1,2,3,4];
//     return ( <section> { iterable.map(() =>  <Articulo/>  )  } </section> )
    
// }




export default ArticleList;