import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const Patienthistorybyid = () => {
    const [Id, setId] = useState("");
    const [Datafromexpress, setDatafromexpress] = useState([{}]);
    const [Flag, setFlag] = useState(false);
    const idHandler = (e) => {
        setId(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`/historybyid/${Id}`)
            .then((val) => {
                setDatafromexpress(val.data);
                setFlag(true);
                // console.log(val);
            })
            .catch(err => console.log("Error in caselog list axios get request"))
    }
    return (
        <div className='myclass'>
            <form onSubmit={submitHandler} style={{ paddingLeft: "40px", paddingTop: "10px" }}>
                <br /><br />
                <label>Enter Id of the patient whose history you want to know :</label><br />
                <input type="number" value={Id} onChange={idHandler} required />
                <br /><br /><br />
                <button style={{ backgroundColor: "green", borderRadius: "5px" }}>Click to get info</button>
            </form>
            <br /><br /><br />
            {(Flag === true) ? (<div style={{ paddingLeft: "40px" }}><h4>Hi There !!! </h4><br /><h6>Here is the History of the cases of person with entered ID :- </h6><br /><br />
                <table border="5"  >
                    <thead>
                        <tr>
                            <th >Customer_ID</th>
                            <th >Doctor_ID</th>
                            <th >Symptoms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Datafromexpress.map((ind, idx) => <tr key={parseInt(idx)}><td>{ind.customerId}</td><td>{ind.doctorId}</td><td>{ind.symptoms}</td></tr>)
                        }
                    </tbody>
                </table>
            </div>) : (null)}
        </div>
    )
}

export default Patienthistorybyid

