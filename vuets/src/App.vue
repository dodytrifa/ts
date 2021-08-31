<template>
  <div class="app"><p>{{name}} - {{age}}</p>
    <button @click="changeName()">
      change name
    </button>
    <button @click="changeAge()">
      change age
    </button>
  </div>
</template>

<script lang="ts">


import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  },
  data() {
    return {
      name: 'Link', //* initiate string type
      age: 25 as number | string //* union type
    }
  },
  methods: {
    changeName(name: string) {
      this.name = name
      return name
    },
    changeAge(age: number){ //*bisa salah satu refer dari union type
      this.age = age
      return age
    }
  }
});
</script>

<style>
</style>
