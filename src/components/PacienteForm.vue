<template>
  <div class="paciente-form-container">
    <p type="Cedula"><input type="text" v-model="cedula" /></p>
    <p type="Nombre"><input type="text" v-model="nombre" /></p>
    <p type="Apellido"><input type="text" v-model="apellido" /></p>
    <p type="Fecha Nacimiento">
      <input type="date" v-model="fechaNacimiento" />
    </p>
    <button @click="guardarpaciente(this.paciente)">Guardar</button>
    <span v-if="this.mensaje">{{ this.mensaje }}</span>
  </div>
</template>

<script>
import { guardarPacienteFachada } from "@/clients/PacienteClient";
export default {
  data() {
    return {
      paciente: {
        cedula: null,
        nombre: null,
        apellido: null,
        fechaNacimiento: null,
      },
      mensaje: null,
    };
  },
  methods: {
    async guardarpaciente(paciente) {
      try {
        await guardarPacienteFachada(paciente);
        this.mensaje = "Guardado exitosamente";

        setInterval(() => {
          this.mensaje = null;
        }, 10000);
      } catch (e) {
        console.log(e);
        this.mensaje = "Error al intentar guardar";
      }
    },

    validar(paciente) {
      if (
        paciente.cedula === "" ||
        paciente.nombre === "" ||
        paciente.apellido === "" ||
        paciente.fechaNacimiento === ""
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
.paciente-form-container {
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