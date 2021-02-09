import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Component/Navbar'
// import Header from './Component/Header'
import Home from './Component/Home'
import Surah from './Component/Surah'
import Ayat from './Component/Ayat'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/surah' component={Surah} />
          <Route path='/:path_id' component={Ayat} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
