import axios from 'axios'
import React, { Component } from 'react'

export default class AxiosWithUpdate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         status:true,
         count:1,
         productsData:null
      }
    }

    async componentDidMount(){
        const url = 'https://fakestoreapi.com/products/'+this.state.count
        const response = await axios(url);
        const productData= await response.data
        this.setState({
            status:false,
            productsData: productData
        })
    }

    changeProduct = () =>{
        this.setState({
            count: this.state.count+1
        })
    }

   //display only 5 product
//    shouldComponentUpdate(nextProps,nextState){
//        if(nextState.count>5){
//            this.setState({
//                count:1
//            }
//            )
//            return false
//        }
//            return true
//    }

    //update life cycle method
   async componentDidUpdate(prevProps, prevState){
        if(this.state.status===false && this.state.count!==prevState.count){
            const url = 'https://fakestoreapi.com/products/'+this.state.count
            const response = await axios(url);
            const productData= await response.data
            this.setState({
                status:false,
                productsData: productData
            })  
        }
    }
  render() {
    return (
      <div className='container m-5'>
          {this.state.status?<div>Fetch Product.... Try to connect your internet</div>:
          <div>
          <div>ID : {this.state.productsData.id}</div>
          <div>Product Description : {this.state.productsData.title}</div>
          <div>Price : Rs. {this.state.productsData.price}₹</div>
          <div><img alt='ProductImage' width='150px' height='150px' src={this.state.productsData.image}/></div>
      </div>}
        <br />
        <button className='btn btn-primary' onClick={this.changeProduct}>Next Product</button>
      </div>
    )
  }
}
