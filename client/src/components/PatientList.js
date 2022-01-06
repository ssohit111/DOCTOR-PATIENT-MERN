import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
const PatientList = () => {
    const [dataFromexpress, setdataFromexpress] = useState([{}]);
    useEffect(() => {
        axios.get('/patientlist')
            .then((res) => {
                setdataFromexpress(res.data);
            })
            .catch((err) => console.log("Error in patient list axios get request"))
    }, [])
    return (
        <div className='myclass'>
            <br />
            <h4>The Patient List is as follows :-</h4>
            <br />
            <table border="5"  >
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >Name</th>
                        <th >Email</th>
                        <th >Gender</th>
                        <th >Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataFromexpress.map((ind) => <tr key={parseInt(ind.id)}><td>{ind.id}</td><td>{ind.name}</td><td>{ind.email}</td><td>{ind.gender}</td><td>{ind.age}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PatientList
