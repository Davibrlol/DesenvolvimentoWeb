<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      nova_moto: "",
      carros: [
        { id: "fedad17d-b464-4f8c-8421-818abb80528d", name: "Moto 1" },
        { id: "b8df53e6-3d81-4ebe-86fb-834228fec176", name: "Moto 2" },
        { id: "fe1c31a9-e9b9-418e-a72e-106352b0f787", name: "Moto 3" },
        { id: "05d81eff-9be4-4a8d-9371-d5b9e0dcbf2a", name: "Moto 4" },
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.motos.push({
        id,
        name: this.nova_moto,
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Motos</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Timesss" v-model="nova_moto" />
      <button @click="salvar">Salvar</button>
    </div>
  </div>
  <div class="list-itens">
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Marca</td>
          <td>Valor</td>
          <td>Ano</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="moto in motos" :key="moto.id">
          <td>{{ moto.id }}</td>
          <td>{{ moto.name }}</td>
          <td>???</td>
          <td>???</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
