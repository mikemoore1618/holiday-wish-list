import React, { Component } from 'react'

class Form extends Component {

  handleFormSubmit = (evt) => {
    evt.preventDefault()
    const giftName = this.refs.name.value
    const newGift = { name: giftName }
    this.props.onFormSubmit(newGift)
    this.refs.name.value = ""
  }
  
 render() {
  return (
   <form className="Form" onSubmit={this.handleFormSubmit}>
    <input type="text" placeholder="Gift Name" ref="name" />
    <button>Add Item</button>
   </form>
  )
 }
}

export default Form