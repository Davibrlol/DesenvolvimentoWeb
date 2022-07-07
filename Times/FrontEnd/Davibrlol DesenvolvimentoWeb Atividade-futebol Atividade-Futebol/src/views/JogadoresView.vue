<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      novo_time: "",
      novo_jogador: "",
      jogadores: [
        {
          id: "7ff23504-8b41-480e-97a8-1a3e5283fe73",
          name: "Rodrigo",
          timeid: "1",
          valor: "?",
        },
        {
          id: "f1be47f4-9a4d-42a4-b7be-20a575e08634",
          name: "Claudio",
          timeid: "2",
          valor: "?",
        },
        {
          id: "c829b3ab-01e3-40dc-b7e1-588ed0e23439",
          name: "Lucas",
          timeid: "3",
          valor: "?",
        },
        {
          id: "05d81eff-9be4-4a8d-9371-d5b9e0dcbf2a",
          name: "Matheus",
          timeid: "4",
          valor: "?",
        },
      ],
    };
  },
  methods: {
    salvar() {
      const id = uuid();
      this.jogadores.push({
        id,
        name: this.novo_jogador,
        timeid: this.novo_time,
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento dos jogadores</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" v-model="novo_jogador" />
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
          <td>Time</td>
          <td>Valor</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="jogador in jogadores" :key="jogador.id">
          <td>{{ jogador.id }}</td>
          <td>{{ jogador.name }}</td>
          <td>{{ jogador.timeid }}</td>
          <td>{{ jogador.valor }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
