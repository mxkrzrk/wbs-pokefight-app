import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Collections from './components/Cards/CollectionsOfCards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Fights from './components/Fight/Fights';
import SingleCard from './components/SingleCard/SingleCard';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <main className="main">
          <Switch>
            <Route path="/" exact>
              <Searchbar />
              <Collections />
            </Route>
            <Route path="/pokemon/fights/:name">
              <Fights />
            </Route>
            <Route path="/pokemon/:id">
              <SingleCard />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Row>
    </Container>
  );
}

export default App;
