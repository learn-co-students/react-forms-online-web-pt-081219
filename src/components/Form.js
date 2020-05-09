import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({ submittedData: dataArray })
  }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleNameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.handleNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleNameChange(event)} value={this.state.lastName} />
          <input type="submit" />
        </form>
        { this.listOfSubmissions() }
      </div>
    )
  }
}

export default Form;