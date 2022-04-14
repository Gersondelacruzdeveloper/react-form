import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name:'',
          category: 'website',
          comment:''
      }
    }

    handleNameChange = (event) =>{
      console.log('name', event.target.value)
        this.setState({
            name: event.target.value,
        })
    }

    handleCommentChange = (event) =>{
      console.log('comment', event.target.value)
      this.setState({
        comment: event.target.value,
      })
  }

  handleCategoryChange = (event) =>{
    console.log('category', event.target.value)
    this.setState({
        category: event.target.value,
    })
}

handleSumit = (event) =>{
  console.log(this.state)
  event.preventDefault();
}


  render() {
    return (
      <div>
          <h2>Please fill out the form bellow</h2>
          <form onSubmit={this.handleSumit}>
              <label htmlFor="id-name">Your Name:</label>
              <input 
              value={this.state.name} 
              type="text" 
              id="id-name" 
              name="name"
              onChange={this.handleNameChange}
              />
               <label htmlFor="id-category">Query Category:</label>
               <select 
               id="id-category" 
               name="category" 
               value={this.state.category}
               onChange={this.handleCategoryChange}
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
               value={this.state.comment}
               onChange={this.handleCommentChange}
               />
               </div>
              <input type="submit" value="submit"/>
          </form>
      </div>
    )
  }
}

export default ControlledForm