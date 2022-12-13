import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SearchPage from './pages/SearchPage';
import ErrorPage from './errors/ErrorPage';

const router = createBrowserRouter(
  [ 
    {
      path: "/",
      element: <SearchPage/> ,
      errorElement: <ErrorPage/>
    },
  ]
)


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
