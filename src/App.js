
import './App.css';
import { Link,Route} from 'react-router-dom'
import MoviePage from './components/pages/MoviePage'

function App() {
  return (
    <div className="App">
      App comp
      <br/>
      <Link to="movies">Movies</Link>
      <Route path="/movies" component={MoviePage}/>
    </div>
  );
}

export default App;
