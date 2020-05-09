import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submissions: []
  }

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
    event.preventDefault();
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    let dataArray = this.state.submissions.concat(formData)
    this.setState({submissions: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submissions.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form
        onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          <input type="submit" />
        </form>
        {(this.state.submissions.length > 0 ? this.listOfSubmissions() : null)}
      </div>
    )
  }
}

export default Form;