const Doctor = require('./models/doctorModel');
const mydata = [
    {
        id: 1,
        name: "Dr. William A. Abdu",
        email: "williamabdu@gmail.com",
        cases: 0,
        specialization: "Orthopedics"
    },
    {
        id: 2,
        name: "Dr. Myles. B. Abbott",
        email: "mylesabbott@gmail.com",
        cases: 0,
        specialization: "Pediatricians"
    },
    {
        id: 3,
        name: "Dr. Fouad. M. Abbas",
        email: "fouadabbas@gmail.com",
        cases: 0,
        specialization: "Oncology"
    },
    {
        id: 4,
        name: "Dr. Khalid Abbed",
        email: "khalidabbed@gmail.com",
        cases: 0,
        specialization: "Neurosurgery"
    },
    {
        id: 5,
        name: "Dr. Naresh Trehan",
        email: "nareshtrehan@gmail.com",
        cases: 0,
        specialization: "Cardiovascular surgery"
    },
    {
        id: 6,
        name: "Dr. Arthur Reese Abright",
        email: "arthurabright@gmail.com",
        cases: 0,
        specialization: "Psychiatry"
    },
    {
        id: 7,
        name: "Dr. Corrie T.M Anderson",
        email: "corrieanderson@gmail.com",
        cases: 0,
        specialization: "Anesthesiology"
    },
    {
        id: 8,
        name: "Dr. Mark. F. Aaron",
        email: "markaaron@gmail.com",
        cases: 0,
        specialization: "Cardiology"
    },
    {
        id: 9,
        name: "Dr. Sudhansu Bhattacharyya",
        email: "sbhattacharyya@gmail.com",
        cases: 0,
        specialization: "Cardiovascular Surgery"
    },
    {
        id: 10,
        name: "Dr. Mona. M. Abaza",
        email: "monaabaza@gmail.com",
        cases: 0,
        specialization: "Otolaryngology"
    },
    {
        id: 11,
        name: "Dr. H. S. Chhabra",
        email: "hschhabra@gmail.com",
        cases: 0,
        specialization: "Spine surgery"
    },
    {
        id: 12,
        name: "Dr IPS Oberoi",
        email: "ipsoberoi@gmail.com",
        cases: 0,
        specialization: "Orthopaedic and Joint Replacement Surgery"
    },
    {
        id: 13,
        name: "Dr. Ashok Seth",
        email: "ashokseth@gmail.com",
        cases: 0,
        specialization: "Cardiology"
    },
    {
        id: 14,
        name: "Prof. Dr. Mohamed Rela",
        email: "mohamedrela@gmail.com",
        cases: 0,
        specialization: "Liver Transplant Surgery"
    },
    {
        id: 15,
        name: "Dr Subhash Chandra",
        email: "subhashchandra@gmail.com",
        cases: 0,
        specialization: "Cardiology"
    }
];
// const fillDoctor = () => {
//     for (let i = 0; i < mydata.length; i++) {
//         const val = mydata[i];
//         const newDoctor = new Doctor(val);
//         newDoctor.save((err) => {
//             if (err) console.log(err);
//             else console.log("Success");
//         })

//     }
// }
module.exports = fillDoctor;