    
<template>
  <div class="app">
    <!-- <p>{{name}} - {{age}}</p>
    <button @click="changeName()">
      change name
    </button>
    <button @click="changeAge()">
      change age
    </button> -->

    <!-- <p>{{jobs}}</p> -->

    <JobList :jobs="jobs"/>
  </div>
</template>

<script lang="ts">


import { defineComponent,reactive, ref, toRefs } from 'vue';
import JobList from './components/JobList.vue'
import Job  from './types/Job'

export default defineComponent({
  name: 'App',
  components: {
    JobList
  },
  setup(){
    //* bentuk awal
    /*
    const state = reactive({
      name: 'Dari State',
      age: 17 as number | string //* type association 
    })

    state.name = "changed from state"

    return {...toRefs(state)}
    */
    
    //* bentuk ref
    /*
    const name = ref("from State")
    const age = ref<number | string>(25) //* generic type

    return { name, age }
    */

    const jobs = ref<Job[]>([
      {title: 'farmer', location: 'lembang', salary: 50000, id: 1 },
      {title: 'fishermen', location: 'Marunda', salary: 100000, id: 2 },
      {title: 'planter', location: 'Sukabumi', salary: 200000, id: 3 },
    ])
    return { jobs }
  },
  //*bentuk awal menggunakan typescript di methods
  /*
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
  */

});
</script>

<style>
</style>
