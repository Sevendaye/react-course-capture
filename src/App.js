//Router
import { Switch, Route, useLocation } from "react-router-dom";

//Import Components
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

//Import Pages
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import MovieDetails from "./Pages/MovieDetails";

//Animations pages
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutUs} />
          <Route exact path="/work" component={OurWork} />
          <Route path="/work/:id" component={MovieDetails} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
