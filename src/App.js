import React from 'react';
import Header from "./components/Header"
import {Switch,Route} from "react-router-dom"
import Home from "./pages/Home"
import Collections from "./pages/Collections"
import CardDetail from "./pages/CardDetail"
import CartPage from "./pages/cartPage"

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/collections">
            <Collections />
          </Route>
          <Route exact path="/collections/:cardId">
            <CardDetail />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
