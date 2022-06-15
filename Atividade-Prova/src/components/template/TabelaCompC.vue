<script>
export default {
  data() {
    return {
      Carros: [
        { id: 1, name: "Carro 1" },
        { id: 2, name: "Carro 2" },
        { id: 3, name: "Carro 3" },
        { id: 4, name: "Carro 4" },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Carros</h2>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Carro" />
      <button>Salvar</button>
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
        <tr v-for="carro in Carros" :key="carro.id">
          <td>{{ carro.id }}</td>
          <td>{{ carro.name }}</td>
          <td>???</td>
          <td>?</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
