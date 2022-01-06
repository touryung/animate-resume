<template>
  <div
    class="resumeEditor"
    ref="resumeEditor"
    resumeEditor
    :class="{ htmlMode: isMdFinish }"
  >
    <div v-if="isMdFinish" v-html="renderResult"></div>
    <pre v-else v-text="renderResult"></pre>
  </div>
</template>

<script setup>
import { computed, defineProps, defineExpose, ref } from "vue";
import { marked } from "marked";

const props = defineProps(["mdCode", "isMdFinish"]);
const renderResult = computed(() =>
  props.isMdFinish ? marked(props.mdCode) : props.mdCode
);

const resumeEditor = ref(null);
const goBottom = () => (resumeEditor.value.scrollTop = 99999);

defineExpose({ goBottom });
</script>

<style scoped>
.htmlMode {
  animation: flip 2s;
}
@keyframes flip {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
