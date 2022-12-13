import Date from "./Date/Date"
import Description from "./Description/Description"
import Image from "./Image/Image"
import PlatformName from "./PlatformName/PlatformName"
import TitleLinked from "./TitleLinked/TitleLinked"

const Articlee = ({art}) => {
    
    return (
        <article>
            <p> Article.jsx {art} </p>
            
            <PlatformName/>
            <TitleLinked/>
            <Description/>
            <Date/>
            <Image/>
        </article>
    )
}

const ArticleList = () => {
    return (
        <section>
            {[1, 2, 3, 4].map((Art, index) => {
                return (
                    <Articlee 
                        article={Art} 
                        key={`art_${index}`} />
                )
            })}
        </section>
    )
}


// const ArticleList = () => {
//     let iterable = [1,2,3,4];
//     return ( <section> { iterable.map(() =>  <Articulo/>  )  } </section> )
    
// }




export default ArticleList;