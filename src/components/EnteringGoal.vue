<script setup>
import { ref, provide } from 'vue'
import Gender from './Gender.vue'
import Weight from './Weight.vue'
import Height from './Height.vue'
import Age from './Age.vue'
import Activity from './Activity.vue'
import Goal from './Goal.vue'

// Инициализация состояний
const OpenGender = ref(true)
const OpenWeight = ref(false)
const OpenHeight = ref(false)
const OpenAge = ref(false)
const OpenActivity = ref(false)
const OpenGoal = ref(false)
const GenderValue = ref('88.34')
const WeightValue = ref('0')
const HeightValue = ref('0')
const AgeValue = ref('0')
const ActivityValue = ref('1.2')
const GoalValue = ref('1')

provide('OpenGender', OpenGender)
provide('OpenWeight', OpenWeight)
provide('OpenHeight', OpenHeight)
provide('OpenAge', OpenAge)
provide('OpenActivity', OpenActivity)
provide('OpenGoal', OpenGoal)
provide('GenderValue', GenderValue)
provide('WeightValue', WeightValue)
provide('HeightValue', HeightValue)
provide('AgeValue', AgeValue)
provide('ActivityValue', ActivityValue)
provide('GoalValue', GoalValue)
</script>
<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black opacity-70 z-10"></div>
  <div class="fixed z-20 top-0 left-0 h-full w-full flex items-center justify-center">
    <div class="flex flex-col bg-white rounded-2xl h-2/8 w-2/3 p-5">
      <div class="flex flex-col gap-3">
        <Gender v-if="OpenGender" />
        <Weight v-if="OpenWeight" />
        <Height v-if="OpenHeight" />
        <Age v-if="OpenAge" />
        <Activity v-if="OpenActivity" />
        <Goal v-if="OpenGoal" />
      </div>
    </div>
  </div>
</template>
