<template>
  <div class="styleEditor" ref="styleEditor">
    <div class="styleCode" v-html="styledCode"></div>
    <pre v-html="highlightedStyleCode"></pre>
  </div>
</template>

<script setup>
import { defineProps, computed, defineExpose, ref } from "vue";
import Prism from "prismjs";

// 将代码包上 style 标签注入 html 和代码高亮
const props = defineProps(["styleCode"]);
const styledCode = computed(() => `<style>${props.styleCode}</style>`);
const highlightedStyleCode = computed(() =>
  Prism.highlight(props.styleCode, Prism.languages.css)
);

const styleEditor = ref(null);
const goBottom = () => (styleEditor.value.scrollTop = 99999);

defineExpose({ goBottom });
</script>

<style scoped>
.styleCode {
  display: none;
}
</style>
