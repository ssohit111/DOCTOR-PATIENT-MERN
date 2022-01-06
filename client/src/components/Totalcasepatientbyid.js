import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const Totalcasepatientbyid = () => {
    const [Id, setId] = useState("");
    const [Datafromexpress, setDatafromexpress] = useState(0);
    const [Flag, setFlag] = useState(false);
    const idHandler = (e) => {
        setId(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`/casebyid/${Id}`)
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
                <label>Enter Id of the patient whose total cases you want to know :</label><br />
                <input type="number" value={Id} onChange={idHandler} required />
                <br /><br /><br />
                <button style={{ backgroundColor: "green", borderRadius: "5px" }}>Click to get info</button>
            </form>
            <br /><br /><br />
            {(Flag === true) ? (<div style={{ textAlign: "center" }}><h4>Hi There !!! </h4><br />Total no of cases of person with entered Id is {Datafromexpress}</div>) : (null)}
        </div>
    )
}

export default Totalcasepatientbyid
