import './App.css'
import React, { Component } from 'react';
import {ProfilePhoto} from './component/Profile/Profile Photo.js';
import {Full} from './component/Profile/FullName.js';
import {Add} from './component/Profile/Address.js';

class App extends Component{ 
  render() {
    return (
      <div className="App">
      
        <ProfilePhoto />
        <Full />
        <Add />
        <footer>Think you Copyright (C) Microsoft Corporation. Tous droits réservés.</footer> 
      </div>
  );
}
}

export default App ;
