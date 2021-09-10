
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import AquaPark from './components/AquaPark';
import Beach from './components/beach/Beach';
import Sanatorium from './components/Sanatorium';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SimpleHeader from './components/header/SimpleHeader';
import CardItem from './components/beach/CardItem';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Header /><Main /></Route>
        <Route path="/beach"><SimpleHeader /><Beach /></Route>
        <Route path="/aqua"><SimpleHeader /><AquaPark /></Route>
        <Route path="/sanatorium"><SimpleHeader /><Sanatorium /></Route>
        <Route path="/beach_item/:id"><SimpleHeader /><CardItem /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
