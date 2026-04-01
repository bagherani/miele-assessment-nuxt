<script lang="ts" setup>
type Props = {
  message: string
}
const props = defineProps<Props>()
</script>

<template>
  <div data-testid="hello-world">
    {{ message }}
  </div>
</template>