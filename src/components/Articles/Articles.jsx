import Date from "./Date/Date"
import Description from "./Description/Description"
import Image from "./Image/Image"
import PlatformName from "./PlatformName/PlatformName"
import TitleLinked from "./TitleLinked/TitleLinked"
import Grid from '@mui/material/Grid'
import {Paper, Stack } from "@mui/material"

const Articlee = ({art}) => {
    return (
        <Paper elevation={3}
        component="article"
        className="Articlee"
        sx={{
            padding:"10px",
            backgroundColor: "rgba(255, 255, 255, 0.65)",
            ":hover":{backgroundColor: "rgba(255, 255, 255, 1)", 
                        transition: "1s" },
             }} > 
            <Grid container rowSpacing={1} columnSpacing={1} >
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
        <Stack className="ArticlesContainer" spacing={"10px"} component="section"> 
            {news.map((Art, index) => {
                return <Articlee 
                        art={Art} 
                        key={`art_${index}`} />
            })}
        </Stack>
    )
}
export default ArticleList;