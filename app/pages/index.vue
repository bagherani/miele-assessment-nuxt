<script lang="ts" setup>
const { data } = useFetch('/api')
</script>

<template>
  <HelloWorld v-if="data" :message="data.message" />
</template>