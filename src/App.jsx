import './App.css';
import React from 'react';
import NavBar from './components/navBar';
import AlbumContainer from './components/albumContainer';

function App() {
    return ( <div className = "App" >
        <NavBar/>
        <AlbumContainer/>
        </div>
    );
}

export default App;