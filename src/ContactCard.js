import React, { useState } from 'react'

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false)
    const [showGender, setShowGender] = useState(false)
    const [ showEmail, setShowEmail] = useState(false)
  return (
    <div className='contact-card'>
        <img src={props.avatarUrl} alt="" />
        <div className="users-detail">
            <p>Nama : {props.nama}</p>
            <button onClick={() => setShowGender(!showGender)}>Phone</button>
            { showGender ? <p>{props.jenisKelamin}</p> : null}
            
            <button onClick={ () => setShowAge(!showAge)}>Age</button>
            { showAge ? <p>{props.umur}</p> : null }

            <button onClick={ () => setShowEmail(!showEmail)}>Email</button>
            { showEmail ? <p>{props.email}</p> : null }
        </div>

    </div>
  )
}

export default ContactCard