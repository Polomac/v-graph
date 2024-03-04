<template>
   <div
    v-loading="loading" style="width: 100%; height: 100vh;"
    element-loading-text="Loading..."/>
</template>

<script setup lang="ts">
defineProps({
  loading: Boolean,
})
</script> 