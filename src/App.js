import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
              <div>All preview cards</div>
            </Route>
            <Route path="/pokemon/:id" exact>
              <div>Single info card</div>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Row>
    </Container>
  );
}

export default App;
