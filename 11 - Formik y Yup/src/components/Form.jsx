import { useState } from "react"

let Form = ({children, initialState, onSubmit}) =>{

    let [values, setValues] = useState(initialState)

    let handleOnChange = (e) =>{

        let {name, value, checked, type } = e.target

        setValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    let handleSubmit = (e) =>{
        e.preventDefault()
        onSubmit(values);
    }

    return children({values, handleOnChange, handleSubmit})
}

export default Form