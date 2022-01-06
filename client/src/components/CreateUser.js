import React from 'react'
import { useState } from 'react'
import axios from 'axios';
const CreateUser = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [symptom, setSymptom] = useState("");
    const idHandler = (e) => {
        setId(e.target.value);
    }
    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const genderHandler = (e) => {
        setGender(e.target.value);
    }
    const ageHandler = (e) => {
        setAge(e.target.value);
    }
    const symptomHandler = (e) => {
        setSymptom(e.target.value);
    }
    const submitHandler = (e) => {
        // e.preventDefault();
        console.log(`My name is ${name} and my age is ${age} and my gender is ${gender}`);
        const mydata = { id, name, email, gender, age, symptom };
        axios.post('/createuser', mydata)
            .then(() => console.log("User created sucessfully"))
            .catch((err) => console.log("Error in Create User axios post request"))
    }

    return (
        <div className='myclass'>
            <form onSubmit={submitHandler} style={{ paddingLeft: "100px", paddingTop: "10px" }}>
                <br />
                <br />
                <label>Enter Id :</label><br />
                <input type="number" value={id} onChange={idHandler} required />
                <br />
                <label>Enter Name :</label><br />
                <input type="text" value={name} onChange={nameHandler} required />
                <br />
                <label>Enter Email :</label><br />
                <input type="email" value={email} onChange={emailHandler} required />
                <br />
                <label>Choose Gender :</label><br />
                <div >
                    <input type="radio" value="Male" checked={gender === "Male"} onChange={genderHandler} /> MALE
                    <input type="radio" value="Female" checked={gender === "Female"} onChange={genderHandler} /> FEMALE
                    <input type="radio" value="Others" checked={gender === "Others"} onChange={genderHandler} /> OTHERS
                </div>
                <br />
                <label>Enter Age :</label><br />
                <input type="number" value={age} onChange={ageHandler} required />
                <br />
                <label>Enter Symptom :</label><br />
                <input type="text" value={symptom} onChange={symptomHandler} required />
                <br /><br /><br />
                <button style={{ backgroundColor: "green", borderRadius: "5px" }}>Submit</button>
            </form>
        </div>
    )
}

export default CreateUser
