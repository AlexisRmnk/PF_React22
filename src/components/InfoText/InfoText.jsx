import { Typography } from "@mui/material";


const checkResultNum = (currentPageNewsNumber, totalResNum, searchTerm) => {
    console.log("2) currentPageNewsNumber :", currentPageNewsNumber, ". totalResNum: " , totalResNum, ". searchTerm: ", searchTerm);
   return ((totalResNum > 0) ? (`Usted esta viendo ${currentPageNewsNumber} noticias de un total de ${totalResNum}  resultados.`) : (`No se han encontrado noticias para "${searchTerm}".`))
 
}

const InfoText = ({currentPageNewsNumber, totalResNum, searchTerm}) => {
    console.log("1) currentPageNewsNumber :", currentPageNewsNumber, ". totalResNum: " , totalResNum, ". searchTerm: ", searchTerm);
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
