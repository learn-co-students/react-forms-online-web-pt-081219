import React from 'react'

export default class DisplayData extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.formData.firstName}</h1>
                <h1>{this.props.formData.lastName}</h1>
            </div>
        )
    }
}