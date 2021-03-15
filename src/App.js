import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Collections from './components/Cards/CollectionsOfCards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleCard from './components/SingleCard/SingleCard';

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
              <Collections />
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
