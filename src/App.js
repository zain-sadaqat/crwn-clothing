import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
