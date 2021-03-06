import React, { Component } from 'react';
import Input from "./input"
import Select from "./select"

class FormInputs extends Component {
    state = {
        data: {}
    }

    handleSubmit = e => {
        e.preventDefault();
        this.doSubmit()
    }

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data }
        data[input.name] = input.value
        this.setState({ data })
    }

    renderButton(label) {
        return <button class="btn btn-primary">{label}</button>
    }

    renderInput(name, label, type = "text") {
        const { data } = this.state
        return (
            <Input
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
            />
        )
    }

    renderSelect(name, label, options) {
        const { data } = this.state
        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
            />)
    }
}
export default FormInputs;