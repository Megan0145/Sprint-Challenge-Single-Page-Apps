import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main>
      <Header />
      <div>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/characters' component={CharacterList} />
          <Route path='/search' component={SearchForm} />
      </div>
    </main>
  );
}
