import Date from "./Date/Date"
import Description from "./Description/Description"
import Image from "./Image/Image"
import PlatformName from "./PlatformName/PlatformName"
import TitleLinked from "./TitleLinked/TitleLinked"
import "./Articles.css"

import Grid from '@mui/material/Unstable_Grid2';

const Articlee = ({art}) => {
    
    return (
        <Grid className="Art" xs={12} > 
            <PlatformName/>
            <TitleLinked/>
            <Description/>
            <Date/>
            <Image/>
        </Grid>

        
    )
}

const ArticleList = () => {
    return (
        <Grid className="ArtContainer" container spacing={5}>
            {[1, 2, 3, 4].map((Art, index) => {
                return (
                    <Articlee 
                        article={Art} 
                        key={`art_${index}`} />
                )
            })}
        </Grid>

    )
}


// const ArticleList = () => {
//     let iterable = [1,2,3,4];
//     return ( <section> { iterable.map(() =>  <Articulo/>  )  } </section> )
    
// }




export default ArticleList;