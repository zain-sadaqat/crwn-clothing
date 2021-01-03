import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/shop/' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
