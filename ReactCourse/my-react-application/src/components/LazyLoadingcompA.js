import React, { Component } from 'react'

export default class LazyLoadingcompA extends Component {
  componentDidMount(){
    for(let i=0; i<10000000000;i++){}
  }
  render() {
    return (
      <div>LazyLoading Component A</div>
    )
  }
}
