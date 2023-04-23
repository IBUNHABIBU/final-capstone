import React, { useState } from 'react'

const Form = ({field, onSubmit}) => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }
  return (
    <div></div>
  )
}

export default Form