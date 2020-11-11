//Router
import { Switch, Route } from 'react-router-dom';

//Import Components
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

//Import Pages
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import OurWork from './Pages/OurWork'
import MovieDetails from './Pages/MovieDetails';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/' component={AboutUs} />
        <Route exact path='/work' component={OurWork} />
        <Route path='/work/:id' component={MovieDetails} />
        <Route path='/contact' component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
