import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import './App.css';

import ParentWithHeader from './components/ParentWithHeader/ParentWithHeader'
import BooksBrowser from './containers/BooksBrowser/BooksBrowser'
import BookDetails from './containers/BookDetails/BookDetails'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <ParentWithHeader>
          <BrowserRouter>
            <Route path="/" exact component={BooksBrowser}></Route>
            <Route path="/books/:id" component={BookDetails}></Route>
          </BrowserRouter>
        </ParentWithHeader>
      </div>
    </div>
  );
}

export default App;
