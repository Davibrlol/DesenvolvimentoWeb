<script>
import MenuLateral from "@/components/MenuLateral.vue";
import BlocoPrincipal from "@/components/BlocoPrincipal.vue";
import BlocoRodape from "@/components/BlocoRodape.vue";
import BlocoCabecalho from "@/components/BlocoCabecalho.vue";
export default {
  components: { MenuLateral, BlocoPrincipal, BlocoRodape, BlocoCabecalho },
};
</script>
<template>
  <BlocoCabecalho />
  <BlocoRodape />
  <MenuLateral />
  <BlocoPrincipal />
</template>
