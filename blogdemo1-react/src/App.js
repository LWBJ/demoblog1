import React from 'react';
import FaceDisplay from './components/FaceDisplay.js'

function App() {
  return (
    <div className='container'><div className='row'><div className='col'>
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
          <p>Races</p>
        </div>
        
        <div className="tab-pane fade" id="places" role="tabpanel" aria-labelledby="places-tab">
          <p>Places</p>
        </div>
      </div>
    </div></div></div>
  );
}

export default App;
