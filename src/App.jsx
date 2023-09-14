import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./appRoutes/AppRoutes.jsx";
import './styles/styles.scss'
import { DietContextProvider } from "./context/DietContext.jsx";

const App = () => {
  return (
    <div className="App">
      <DietContextProvider>
        <BrowserRouter>
          <AppRoutes/>      
        </BrowserRouter>
      </DietContextProvider>
    </div>
  )
};

export default App;