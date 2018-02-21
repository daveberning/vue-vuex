<template>
  <div>
    <h2>Dashboard.vue</h2>
    <p>{{ msg }}</p>
    <DashboardChild />
  </div>
</template>

<script>
import Header from '@/components/Header';
import DashboardChild from '@/components/Dashboard/DashboardChild';

export default {
  name: 'Dashboard',
  components: {
    Header,
    DashboardChild
  },
  data () {
    return {
      msg: 'A template for Vue applications with Vuex state management.'
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
