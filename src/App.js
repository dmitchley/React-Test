import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";

import Cards from "./components/Cards";
import CurrencyConverter from "./CurrencyConverter.js";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <div className="text-center mb-4">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Make Your Selection
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/cards">Cards</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/converter">Currency Converter</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <Switch>
              <Route path="/cards">
                <Cards />
              </Route>
              <Route path="/converter">
                <CurrencyConverter />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
