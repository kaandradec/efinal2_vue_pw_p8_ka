<template>
  <div class="cita-form-container">
    <p type="Cédula Doctor"><input type="text" v-model="cedula" /></p>
    <p type="Cédula Paciente"><input type="text" v-model="nombre" /></p>
    <p type="Fecha Cita"><input type="date" v-model="apellido" /></p>
    <button @click="agendarCita(this.doctor)">Agendar</button>
    <span v-if="this.mensaje">{{ this.mensaje }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cita: {
        cedulaDoctor: null,
        cedulaPaciente: null,
        fechaCita: null,
      },
      mensaje: null,
    };
  },
  methods: {
    async agendarCita(doctor) {},
  },
};
</script>

<style>
.cita-form-container {
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