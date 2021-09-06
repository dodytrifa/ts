    
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

    <div class="title">
      <h1>Sorting Jobs</h1>
    </div>
    <header>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('salary')">order by salary</button>
        <button @click="handleClick('location')">order by location</button>
      </div>
    </header>

    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">


import { defineComponent,reactive, ref, toRefs } from 'vue';
import JobList from './components/JobList.vue'
import Job  from './types/Job'
import Sort from './types/Sort'

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
      {title: 'teacher', location: 'Jakarta', salary: 1200000, id: 4 },
      {title: 'programmer', location: 'Jakarta', salary: 2200000, id: 5 },
    ])

    const order = ref<Sort>('title')
    const handleClick = (term: Sort) => {
      order.value = term
    }

    return { jobs, handleClick, order }
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
