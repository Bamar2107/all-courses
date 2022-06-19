import React, { Component } from 'react'

export default class RandomUserFetch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         status:true,
         userdetails:null
      }
    }
   async componentDidMount(){
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            status:false,
            userdetails:data.results[0]
        })
    }
  render() {
    return (
      <div>
            {this.state.status?<div>Loading....</div>:(
                <div>
                    <div>Name : {this.state.userdetails.name.first} {this.state.userdetails.name.last} </div>
                    <div>Email : {this.state.userdetails.email}</div>
                    
                </div>
            )}
      </div>
    )
  }
}
