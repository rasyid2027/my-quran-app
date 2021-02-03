import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import Home from './Component/Home'
import Surah from './Component/Surah'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/surah' component={Surah} />
      </div>
    </BrowserRouter>
  );
}

export default App;
