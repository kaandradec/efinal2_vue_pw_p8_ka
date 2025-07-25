import axios from "axios";

const URL_BASE = "http://localhost:8081/api/consultorio/v1/doctores/"

const guardarDoctor = async (body) => {
    axios.post(URL_BASE, body).then(res => res.data);
}

export const guardarDoctorFachada = async (body) => {
    guardarDoctor(body);
}