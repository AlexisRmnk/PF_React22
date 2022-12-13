import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>¡Error!</h1>
      <p>Perdon, ocurrio un error inesperado.</p>
      <h2>Detalle:</h2>
      <ul>
        { 
          error.error.message && (
            <li>
              Mensaje de error: <i> {error.error.message} </i>
            </li>
          )
        }
        {
          error.status && (
            <li>
              Codigo de estado: <i> {error.status}</i>
            </li>
          )
        }
        {
          error.statusText && (
            <li>
              Descripcion de codigo de estado: <i> {error.statusText} </i>
            </li>
          )
        }
        
      </ul>
    </div>
  )
}