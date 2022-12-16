import { Typography } from "@mui/material";


const checkResultNum = (currentPageNewsNumber, totalResNum, searchTerm) => {
   return ((totalResNum > 0) ? (`Usted esta viendo ${currentPageNewsNumber} noticias de un total de ${totalResNum}  resultados.`) : (`No se han encontrado noticias para "${searchTerm}".`))
 
}

const InfoText = ({currentPageNewsNumber, totalResNum, searchTerm}) => {
    return (
        <Typography variant="body1">
            { checkResultNum(currentPageNewsNumber, totalResNum, searchTerm) }
        </Typography>
    )
       
}

export default InfoText;
// currentPageNewsNumber = totalResults - ( (currentPage - 1) * PAGE_SIZE ) 
// searchTerm = searchParams.get("query")
// totalResNum = totalResults
