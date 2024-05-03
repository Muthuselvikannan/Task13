import React from 'react';
import './index.css';
import LeftCard from './Components/Leftcard.jsx';
import MiddleCard from './Components/Middlecard.jsx';
import RightCard from './Components/Rightcard.jsx';


export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <LeftCard />
          </div>
          <div className="col-lg-4">
            <MiddleCard />
          </div>
          <div className="col-lg-4">
            <RightCard />
          </div>
        </div>
      </div>
    </>
  );
}
