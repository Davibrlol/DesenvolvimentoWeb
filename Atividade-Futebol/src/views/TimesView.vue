<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_time: "",
      times: [
        { id: "fedad17d-b464-4f8c-8421-818abb80528d", name: "Time 1" },
        { id: "b8df53e6-3d81-4ebe-86fb-834228fec176", name: "Time 2" },
        { id: "fe1c31a9-e9b9-418e-a72e-106352b0f787", name: "Time 3" },
        { id: "05d81eff-9be4-4a8d-9371-d5b9e0dcbf2a", name: "Time 4" },
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.times.push({
        id,
        name: this.novo_time,
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de times</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Time" v-model="novo_time" />
      <button @click="salvar">Salvar</button>
    </div>
  </div>
  <div class="list-itens">
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Nome</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in times" :key="time.id">
          <td>{{ time.id }}</td>
          <td>{{ time.name }}</td>
          <td>???</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
