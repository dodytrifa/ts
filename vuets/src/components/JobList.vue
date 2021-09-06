<template>
  <div class="job-list">
    <p>Ordered by {{order}}</p>
    
    <ul>
      
      <li v-for="job in sortedJob" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} rupees</p>
        </div>
        <div class="description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, dolorum?</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">

import { computed, defineComponent, PropType } from 'vue'
import Job from '../types/Job'
import Sort from '../types/Sort'
export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    },
    order: {
      required: true,
      type: String as PropType<Sort>,
    }
  },
  setup(props){
    const sortedJob = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    }) 
    return {sortedJob}
  }
})
</script>

<style scoped>

</style>
