<template>
  <div>
    <p><span v-if="$store.state.another.name">Hey, <strong>{{ $store.state.another.name }}</strong>.</span> I am a child of the Dashboard.vue component. <strong>Bootstrap 4's CSS</strong> is pre-installed with this template.</p>

    <p class="count reset-spacing">{{ $store.state.dashboard.count }}</p>

    <div class="row center">
      <div class="col reset-spacing">
        <button class="btn btn-block" @click="decrease">Decrease</button>
      </div>
      <div class="col reset-spacing">
        <button class="btn btn-block" @click="increase">Increase</button>
      </div>
    </div>

    <button class="btn btn-link" @click="resetCount">(Reset Counter)</button>
    <p>The state is <em>persistent</em> across sessions and refreshes. The counter will not default to zero when refreshing the browser window. Go ahead, increase the counter and refresh the browser.</p>
  </div>
</template>

<script>
export default {
  name: 'DashboardChild',
  methods: {
    increase: function () {
      this.$store.dispatch('dashboard/increment');
    },
    decrease: function () {
      this.$store.dispatch('dashboard/decrease');
    },
    resetCount: function () {
      this.$store.dispatch('dashboard/resetCount');
    }
  }
}
</script>

<style lang="scss" scoped>
  .reset-spacing {
    margin: 0;
    padding: 0;
  }

  .center {
    margin: 0 auto;
  }

  div {
    background: #ccc;
    padding: 15px;
    margin: 15px auto;
    border-radius: 2px;
    width: 75%;

    .count {
      font-size: 4rem;
      font-weight: 900;
      margin: 0;
    }
  }

  em {
    font-weight: 900;
  }

  button {
    margin: 0 0 0 15px;
    text-decoration: none;
  }
</style>
