<template>
  <div>
    <h2>AnotherComponent.vue</h2>
    <div class="well">
      <p>I'm another component in the Vue app.</p>
      <p class="count">{{ $store.state.dashboard.count }}</p>
      <form>
        <input type="text" name="name" :placeholder="placeholder" @blur="changeName(name)" v-model="name">
        <button class="btn btn-link" @click="clearName">(Clear name)</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AnotherComponent',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions('another', ['changeName', 'clearName'])
  },
  computed: {
    placeholder () {
      if (this.$store.state.another.name) {
        return 'Go by another name, ' + this.$store.state.another.name + '?';
      } else {
        return 'What\'s your name? Just curious.';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .well {
    background: #ccc;
    padding: 15px;
    width: 75%;
    margin: 15px auto;
    border-radius: 2px;


    .count {
      font-size: 4rem;
      font-weight: 900;
    }
  }

  input {
    width: 100%;
    padding: 15px;
    background: none;
    border: 0;
    border-bottom: 2px solid lighten(#2c3e50, 25%);
    color: #2c3e50;
    font-weight: 900;
    transition: all .25s ease;

    &:focus {
      outline: none;
      box-shadow: none;
      border-bottom: 2px solid #2c3e50;
      transition: all .25s ease;
    }
  }
</style>
