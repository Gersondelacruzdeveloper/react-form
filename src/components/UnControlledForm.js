import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.category = React.createRef();
      this.comments = React.createRef();
    }

    handleSumit = (event) =>{
    event.preventDefault();
    console.log(this.inputName.current.value)
    console.log(this.category.current.value)
    console.log(this.comments.current.value)
    }


  render() {
    return (
      <div>
          <h2>Please fill out the form bellow</h2>
          <form onSubmit={this.handleSumit}>
              <label htmlFor="id-name">Your Name:</label>
              <input 
              type="text" 
              id="id-name" 
              name="name"
              ref={this.inputName}
              />
               <label htmlFor="id-category">Query Category:</label>
               <select 
               id="id-category" 
               name="category"
               ref={this.category} 
               >
                   <option value="website">Website issue</option>
                   <option value="order"> Order issue</option>
                   <option value="general"> General enquiery</option>
               </select>
               <div>
               <label htmlFor="id-comments">Comments:</label>
               <textarea 
               id="id-comments"  
               name="comments"
               ref={this.comments}
               />
               </div>
              <input type="submit" value="submit"/>
          </form>
      </div>
    )
  }
}

export default ControlledForm