import React, { Component } from 'react'
// import './about.scss'
export default class Login extends Component {
  render() {
    return (
      <div className="about container mt-4">
        <div className="row">
          <div className="col-12">
            
          </div>
                <form action="index.js">
                    <label>Username</label>
                        <input className="" name="username"/><br />
                    <label>Password</label>
                        <input className="" name="name" type="password"/><br />
                        
                        <input type="submit" name="submit" value="Login"/>
                        </form>
                </div> 
              
               
         
           
      </div>
      
    )
  }
}