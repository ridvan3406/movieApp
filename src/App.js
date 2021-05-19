
import './App.css';
import {Route } from 'react-router-dom'
import MoviePage from './components/pages/MoviePage'
import {Container} from 'semantic-ui-react'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  return (
    <div>
     <Header/>
      <Container text>
        <div className="App">
          App comp
          <br />
          <Route path="/movies" component={MoviePage}/>
        </div>
      </Container>
      <Footer/>
    </div>

  );
}

export default App;