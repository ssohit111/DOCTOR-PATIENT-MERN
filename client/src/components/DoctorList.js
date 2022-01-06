import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
const DoctorList = () => {
    const [dataFromExpress, setdataFromExpress] = useState([{}]);
    useEffect(() => {
        axios.get('/doctorlist')
            .then((res) => {
                setdataFromExpress(res.data);
            })
            .catch((err) => console.log("Error in patient list axios get request"))

    }, [])
    return (
        <div className='myclass'>
            <br />
            <h4>The Doctor List is as follows :-</h4>
            <br />
            <table border="5"  >
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >Name</th>
                        <th >Email</th>
                        <th >Cases</th>
                        <th >Specialization</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataFromExpress.map((ind) => <tr key={parseInt(ind.id)}><td>{ind.id}</td><td>{ind.name}</td><td>{ind.email}</td><td>{ind.cases}</td><td>{ind.specialization}</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DoctorList
