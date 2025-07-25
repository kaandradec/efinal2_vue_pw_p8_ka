<template>
  <div class="doctor-form-container">
    <p type="Cedula"><input type="text" v-model="cedula" /></p>
    <p type="Nombre"><input type="text" v-model="nombre" /></p>
    <p type="Apellido"><input type="text" v-model="apellido" /></p>
    <p type="Genero"><input type="text" v-model="genero" /></p>
    <button @click="guardarDoctor(this.doctor)">Guardar</button>
    <span v-if="this.mensaje">{{ this.mensaje }}</span>
  </div>
</template>

<script>
import { guardarDoctorFachada } from "@/clients/DoctorClient";
export default {
  data() {
    return {
      doctor: {
        cedula: null,
        nombre: null,
        apellido: null,
        genero: null,
      },
      mensaje: null,
    };
  },
  methods: {
    async guardarDoctor(doctor) {
      try {
        await guardarDoctorFachada(doctor);
        this.mensaje = "Guardado exitosamente";

        setInterval(() => {
          this.mensaje = null;
        }, 10000);
      } catch (e) {
        console.log(e);
        this.mensaje = "Error al intentar guardar";
      }
    },

    validar(doctor) {
      if (doctor.genero !== "Hombre" || doctor.genero !== "Mujer") {
        this.mensaje = "El género solo debe ser 'Hombre' o 'Mujer'";
        return false;
      } else if (
        doctor.cedula === "" ||
        doctor.nombre === "" ||
        doctor.apellido === "" ||
        doctor.genero === ""
      ) {
        this.mensaje = "Debe llenar todos los campos";
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
.doctor-form-container {
  padding: 20px;
  background-color: #cfcfcf;
  border-radius: 16px;
  max-width: 250px;
  margin: 0 auto;

}
p::before {
  content: attr(type);
  display: block;
  text-align: start;
}

input {
  width: 100%;
}
</style>