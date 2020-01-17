import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import InputField from '../../utils/InputField'
import axios from 'axios'

const Home = ( {...props} ) => {
    console.log('HOME' , {props})
    const [formValue, setFormValue] = useState({ email_signup: null, password_signup: null })
    const [formError, setFormError] = useState([])

    const handleFormChange = (e) => {
        setFormValue(Object.assign({ ...formValue }, { [`${e.target.name}`]: e.target.value }))
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (formValue.email_signup && formValue.password_signup) {
            let {data} = await axios.post('http://localhost:3333/api/', { data: formValue } )
            console.log({data})
            if (data) {
                let url = data.url
                let getUrlSfdc = await axios.get(url)
                console.log('URL SFDC IS ', getUrlSfdc)
                return;
                
            }

        }
        handleError()
    }

    const handleError = () => {
        console.log('error')
        let errorArray = []
        if(!formValue.email_signup){
            console.log('EMAIL ', formValue.email_signup)
            errorArray.push('Vous devez renseigner un email')
        }
        if (!formValue.password_signup){
            console.log('PASSWORD ', formValue.password_signup)
            errorArray.push('Vous devez renseigner un password valide')
        }
        setFormError(errorArray)
    }

    return (
        <div className="p-m m-tl rounded dark-light" style={{ width: '375px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="m-bl">
                <span className="text-b">{'Connexion'}</span>
            </div>
            <form className="form-group m-bs" onChange={handleFormChange.bind(this)} onSubmit={handleSubmitForm.bind(this)}>
                { formError.length > 0 ? formError.map( v => { return ( <span key={v}>{v}</span> ) }) : null }
                <InputField input={{ type: 'email', label: 'E-mail', name: 'email_signup', placeholder: 'E-mail' }} />
                <InputField input={{ type: 'password', label: 'Password', name: 'password_signup', placeholder: "Password" }} />
                <button type="submit" className="ui button rounded-btn blue-light">{'Submit'}</button>
            </form>
        </div>
    )
}

export default Home