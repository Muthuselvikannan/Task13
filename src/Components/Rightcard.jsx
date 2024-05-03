import React from 'react';
import './Card.css';
import { TiTick } from "react-icons/ti";

export default function RightCard() {
  return (
    <div className="card  ">
      <div className="card-body">
        <h6 className="card-title header__category text-muted">
          PRO 
        </h6>
        <h2 className="card-subtitle">$49/Month</h2>
        <hr />
        
        
        <div>
          <div className="mergeIcons">
          <TiTick size="25px" color="green"/>
            <p className="first__condition">Single User</p>
          </div>
          <div className="mergeIcons">
          <TiTick size="25px" color="green"/>
            <p className="first__condition">50GB Storage </p>
          </div>
          <div className="mergeIcons">
          <TiTick size="25px" color="green"/>
            <p className="first__condition">Unlimited Public Projects</p>
          </div>
          <div className="mergeIcons">
          <TiTick size="25px" color="green"/>
            <p className="first__condition">Community Access</p>
          </div>
          <div className="mergeIcons">
          <TiTick size="25px" color="green"/>
            <p className="first__condition ">Unlimited Private Projects</p>
          </div>
          <div className="mergeIcons">
          <TiTick size="25px" color="green"/>
          <p className="first__condition ">Dedicated Phone Support</p>
          </div>
          <div className="mergeIcons">
          <TiTick size="25px" color="green"/>          
            <p className="first__condition ">Free Subdomain</p>
          </div>
          <div className="mergeIcons">
          <TiTick size="25px" color="green"/> 
            <p className="first__condition ">Monthly Status Reports</p>
          </div>
          <div className="text-center">
          <div className="btn btn-primary button__width">
            Button
          </div>
          </div>
              
        </div>
      </div>
    </div>
  );
}
