//Import Pages
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import OurWork from './Pages/OurWork'
//Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path='/' component={AboutUs} />
        <Route path='/work' component={OurWork} />
        <Route path='/contact' component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
