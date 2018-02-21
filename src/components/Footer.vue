<template>
  <footer>
    <p>Copyright &copy; {{ year }}. All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year: function () {
      const date = new Date();
      return date.getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
  footer {
    margin-top: 60px;
  }
  
  p {
    padding: 15px;
    border-top: 1px solid #ccc;
  }
</style>
