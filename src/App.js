import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import AquaPark from './components/aqua/AquaPark';
import Beach from './components/beach/Beach';
import Sanatorium from './components/sanatorium/Sanatorium';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SimpleHeader from './components/header/SimpleHeader';
import BeachItem from './components/beach/BeachItem';
import AquaParkItem from './components/aqua/AquaParkItem';
import SanatoriumItem from './components/sanatorium/SanatoriumItem';
import AddBlog from './components/addBlog/AddBlog';
import BeachMobile from './components/mobile/BeachMobile';
import AquaMobile from './components/mobile/AquaMobile';
import SanatoriumMobile from './components/mobile/SanatoriumMobile';
import MobileHeader from './components/mobile/MobileHeader';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Header /><Main /></Route>
        <Route path="/beach"><SimpleHeader /><Beach /></Route>
        <Route path="/aqua"><SimpleHeader /><AquaPark /></Route>
        <Route path="/sanatorium"><SimpleHeader /><Sanatorium /></Route>
        <Route path="/beach_item/:id"><SimpleHeader /><BeachItem /></Route>
        <Route path="/aqua_item/:id"><SimpleHeader /><AquaParkItem /></Route>
        <Route path="/sanatorium_item/:id"><SimpleHeader /><SanatoriumItem /></Route>
        <Route path="/addBlog"><SimpleHeader /><AddBlog /></Route>
        <Route path="/beach_mobile"><BeachMobile /></Route>
        <Route path="/aqua_mobile"><AquaMobile /></Route>
        <Route path="/sanatorium_mobile"><SanatoriumMobile /></Route>
        <Route path="/sanatorium_mobile_item/:id"><MobileHeader /><SanatoriumItem /></Route>
        <Route path="/aqua_mobile_item/:id"><MobileHeader /><AquaParkItem /></Route>
        <Route path="/beach_mobile_item/:id"><MobileHeader /><SanatoriumItem /></Route>
        <Route path="/addBlog_mobile"><MobileHeader /><AddBlog /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
