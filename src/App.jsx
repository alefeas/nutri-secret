import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./appRoutes/AppRoutes.jsx";
import './styles/styles.scss'
import { DietContextProvider } from "./context/DietContext.jsx";
import { NavBar } from "./components/navBar/NavBar.jsx";
import { Footer } from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <DietContextProvider>
        <NavBar/>
        <BrowserRouter>
          <AppRoutes/>      
        </BrowserRouter>
        <Footer/>
      </DietContextProvider>
    </div>
  )
};

export default App;