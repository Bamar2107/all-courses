import React, { Component } from 'react'

export default class FormHanding extends Component {
    constructor(){
        super();
        this.state ={
          userName:'',
          userNameError:false,
          userAddress:'',
          userAddressError:false,
          comment:'',
          userCommentError:false,
        }
    }

    userNameChange = event => {
        this.setState({
            userName : event.target.value
        })
    }
    userChangeAddress = (event) =>{
        this.setState({
            userAddress: event.target.value
        })   
    }
    changeComment = (event) =>{
          this.setState({
              comment: event.target.value
          })
    }

    validateInputs = () =>{
        let error = true;
        if(this.state.userName ===''){
             error = false;
             this.setState({
                 userNameError:'Username is Empty please fill'
             })
        }else{
            this.setState({
                userNameError:''
            })
        }
        if(this.state.userAddress ==='')
        {
            error = false;
            this.setState({
                userAddressError:'Adress is empty, please fill'
            })
        }else{
            this.setState({
                userAddressError:''
            })
        }
        if(this.state.comment==='')
        {
            error=false;
            this.setState({
                userCommentError :'Comment is empty, please fill'
            })
        }
        else{
            this.setState({
                userCommentError:''
            })
        }
        return error;
    }

    submitInputs = (event) =>{
        if(this.validateInputs()){
            alert(`${this.state.userName}, ${this.state.userAddress}, ${this.state.comment}`);
          } 
          event.preventDefault();  
    }
  render() {
    return (
      <div className="container mt-5">
          <form onSubmit={this.submitInputs}>
          <div>
          <label>UserName/Phone Number : </label>
              <input type="text" value={this.state.userName} onChange={this.userNameChange} />
              <div className='text-danger'>{this.state.userNameError}</div>
          </div>
          <div className='mt-3'>
          <label>User Address : </label>
              <input type="text" value={this.state.userAddress} onChange={this.userChangeAddress} />
              <div className='text-danger'>{this.state.userAddressError}</div>
          </div>
          <div className='mt-3'>
          <label>Comments :</label>
              <textarea id="" cols="50" rows="2" value={this.state.comment} onChange={this.changeComment}></textarea>
              <div className='text-danger'>{this.state.userCommentError}</div>
          </div>
           <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
      </div>
    )
  }
}
