<script setup>
import { inject, computed } from 'vue'

// Получаем инъектированные значения
const water = inject('water')
const TargetWater = inject('TargetWater')
const maxWeight = '400px'

const WaitPercentage = computed(() => {
  return Math.round((water.value / TargetWater.value) * 100)
})
</script>

<template>
  <div class="progress-container" :style="{ 'max-width': maxWeight }">
    <div class="progress">
      <div class="progress-bar" :style="{ width: `${WaitPercentage}%` }"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Стили для прогресс-бара */
.progress {
  height: 10px;
  border-radius: 4px;
  background: rgb(60, 60, 214);

  &-container {
    margin-bottom: 0;
    overflow: hidden;
  }

  &-bar {
    background: #000;
    height: 100%;
    border-radius: 4px;
    background: #93c5fd;
    transition: 0.5s;
  }

  &-percent {
    display: block;
    text-align: center;
    color: rgb(63, 63, 133);
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 10px;
  }
}
</style>
