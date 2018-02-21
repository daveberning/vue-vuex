<template>
  <header>
    <h1>Header</h1>
    <nav>
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="another-component">Another Component</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  nav {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
    margin: 15px 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    display: inline;
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
</style>
