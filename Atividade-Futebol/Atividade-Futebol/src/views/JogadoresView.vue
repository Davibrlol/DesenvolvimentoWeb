<script>
export default {
  data() {
    return {
      jogadores: [
        { id: 1, name: "Rodrigo", timeid: "1" },
        { id: 2, name: "Claudio", timeid: "2" },
        { id: 3, name: "Lucas", timeid: "3" },
        { id: 4, name: "Matheus", timeid: "4" },
        
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento dos jogadores</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="Time" />
      <button>Salvar</button>
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
          <td> {{ jogador.name }}</td>
          <td>{{ jogador.timeid }}</td>
          <td>?</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
