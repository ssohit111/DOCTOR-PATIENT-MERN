const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//env file work
const dotenv = require('dotenv');
dotenv.config();

const CreateUserRoute = require("./Routes/CreateUserRoute");
// const fillDoctor = require('./fillDoctor');
const PatientListRoute = require('./Routes/PatientListRoute');
const DoctorListRoute = require('./Routes/DoctorListRoute');
const TotalCasePatientRoute = require('./Routes/TotalCasePatientRoute');
const PatientHistoryByIdRoute = require('./Routes/PatientHistoryByIdRoute');

const connectDB = require('./config/db');
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Home Page");
})
// fillDoctor();
app.use(CreateUserRoute);
app.use(PatientListRoute);
app.use(DoctorListRoute);
app.use(TotalCasePatientRoute);
app.use(PatientHistoryByIdRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})