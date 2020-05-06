import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submitted: []
  }

  // handleNameChange = event {
  //   this.setState({
  //     ...this.state,

  //   })
  // }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let arry = this.state.submitted.concat(formData)
    this.setState({submitted: arry})
  }

  listOfSubmissions = () => {
    return this.state.submitted.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={ event => {this.handleSubmit(event)}}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type="submit"/>
      </form>
      {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;