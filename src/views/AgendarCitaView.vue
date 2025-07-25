<template>
  <div class="container">
    <CitaForm />
    <CitaTable />
  </div>
</template>

<script>
import CitaForm from "@/components/CitaForm.vue";
import CitaTable from "@/components/CitaTable.vue";
export default {
  components: {
    CitaForm,
    CitaTable,
  },
};
</script>

<style>
</style>