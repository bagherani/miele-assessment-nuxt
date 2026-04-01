<script lang="ts" setup>
type Props = {
  message: string
}
const props = defineProps<Props>()

</script>

<template>
  hello {{ message }}
</template>