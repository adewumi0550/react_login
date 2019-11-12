import React, { Component } from 'react'
// import './about.scss'
export default class About extends Component {
  render() {
    return (
      <div className="about container mt-4">
        <div className="row">
          <div className="col-12">
            <h3 className="about-header"> ABOUT </h3>
          </div>
          <div >
          
          </div>
          <div className="col-12 about-header-container">
            <h3 className="about-header"> MEET THE TEAM </h3>
          </div>
        </div>
        <div className="row mt-3 about-team-container">
            <div className="col-12 team-card">
              <img src= "https://res.cloudinary.com/xrole/image/upload/v1572434017/BlueFlameIndoors/test2.jpg" />
              <div className="team-info">
                <p className="text">CEO</p>
              </div>
              <p className="mt-1"> <strong>Uzodinma Ezeifedikwa</strong></p>
            </div>
            <div className="col-12 team-card">
              <img src= "https://res.cloudinary.com/xrole/image/upload/v1572433813/BlueFlameIndoors/test1.jpg" />
              <div className="team-info">
                <p className="text">Manager </p>
              </div>
              <p className="mt-1"> <strong>Belinda Benjamin Umoh</strong></p>
            </div>
            <div className="col-12 team-card">
              <img src= "https://res.cloudinary.com/xrole/image/upload/v1572434249/BlueFlameIndoors/test3.jpg" />
              <div className="team-info">
                <p className="text">CTO </p>
              </div>
                <p className="mt-1"> <strong>Xrole Diamond</strong></p>
            </div>
          </div>
      </div>
    )
  }
}