import React from 'react'

const InputField = ({input}) => {

    const handleOnBlur = (e) => {
        document.getElementById(e.target.name).classList.remove('active')
    }
    const handleOnFocus = (e) => { 
        document.getElementById(e.target.name).classList.add('active')
    }

    return (
        <div className="group-input m-bl pos-r">
            <div className="input-float" onBlur={handleOnBlur.bind(this)} onFocus={handleOnFocus.bind(this)}>
                <label id={input.name} htmlFor={`for_${input.name}`} className="custom-label">
                    {input.label}
                </label>
                <input id={`for_${input.name}`} className="input-field p-lm" type={input.type} name={input.name} placeholder={input.placeholder}/>
            </div>
        </div>
    )
}

export default InputField