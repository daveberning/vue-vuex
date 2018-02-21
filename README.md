# Vue/Vuex Template

Vue template with Vuex state management. This template has persistent state that stores the store in local storage so all state's will not default after sessions and browser refreshes. The template has comes pre-configured for SCSS support.

This template includes:
- [Vuex Store](https://vuex.vuejs.org/en/) (State Management)
- [Bootstrap 4](https://getbootstrap.com/) (CSS Only)
- [vue-router](https://router.vuejs.org/en/)
- [vuex-persist](https://www.npmjs.com/package/vuex-persist)
- [CSS Commons](https://bitbucket.org/dreeshomes/css-commons)

## Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Project Architecture
The bulk of the project is in the `src` folder. This contains all of the components, Vuex store, actions, assets, and more. For the most part, scripts and styles should be global _unless_ used for a specific component. The global styles and scripts are used for the overall rendering of the page. Component styles should _always_ be scoped.

When importing components, use the `@` to import it via an absolute path. The `@` refers to the `src` directory.

__Basic Component__
```html
<template>
  <div>
    <Header />
    <!-- HTML for component -->
  </div>
</template>

<script>
  import Header from '@/components/Header';
  
  export default {
    name: 'ComponentName',
    components: {
      Header
    }
    ...
  }
</script>

<style lang="scss" scoped>
  /* Styles should always be SCSS and scoped */
</style>
```

## Component Naming Conventions and Architecture
Every component as a whole has it's own directory. The directory contains the parent (container) component as well as individual child components. Any global components like a Header or Footer can live directly in the `components` directory and referenced within each component when needed.

```
|__components/
   |__Component/
      |__actions.js
      |__Component.vue
      |__ComponentChild.vue
      |__ComponentOtherChild.vue
   |__Header.vue (global)
   |__Footer.vue (global)
```

Each root component also has an `actions.js` file which refers to the state management actions for that specific component. This is done to no clutter up the Vuex store and to "scope" the actions to the component itself.