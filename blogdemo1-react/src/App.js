import React from 'react';
import FaceDisplay from './components/FaceDisplay.js'
import RaceDisplay from './components/RaceDisplay.js'
import PlaceDisplay from './components/PlaceDisplay.js'

function App() {
  return (
    <div className='container'>
    
    <div className='row py-4 mt-4'><div className='col-12'>
      <h1>LWBJ Blog Demo 1</h1>
      <p className='mt-4'>A simple blog with Django backend and React frontend. Additional styles added with Bootstrap. The backend stores data on 3 different types of data, 'Faces', 'Races' and 'Places'. Data is added from the admin page of the backend. The backend also has support for pagination, ordering and filtering. The front end queries the backend and displays the results. The filter form and paginator buttons modifies the queries to return only specific results.</p>
    </div></div>
    
    <div className='row'><div className='col-12'>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="faces-tab" data-toggle="tab" href="#faces" role="tab" aria-controls="faces" aria-selected="true">Faces</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="races-tab" data-toggle="tab" href="#races" role="tab" aria-controls="races" aria-selected="false">Races</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="places-tab" data-toggle="tab" href="#places" role="tab" aria-controls="places" aria-selected="false">Places</a>
        </li>
      </ul>
    
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="faces" role="tabpanel" aria-labelledby="faces-tab">
          <FaceDisplay />
        </div>
        
        <div className="tab-pane fade" id="races" role="tabpanel" aria-labelledby="races-tab">
          <RaceDisplay />
        </div>
        
        <div className="tab-pane fade" id="places" role="tabpanel" aria-labelledby="places-tab">
          <PlaceDisplay />
        </div>
      </div>
    </div></div>
    
    </div>
  );
}

export default App;
