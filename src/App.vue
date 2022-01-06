<template>
  <div>
    <StyleEditor ref="styleEditor" :styleCode="currentShowedStyle" />
    <ResumeEditor ref="mdEditor" :mdCode="currentMd" :isMdFinish="isMdFinish" />
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";

import ResumeEditor from "./components/ResumeEditor.vue";
import StyleEditor from "./components/StyleEditor.vue";
import fullStyle from "./data/style";
import fullMarkDown from "./data/md";

const interval = ref(10);

const totalStyle = ref("");
const currentShowedStyle = ref("");
const styleEditor = ref(null);

const processivelyShowStyle = (currentStyle) => {
  return new Promise((resolve) => {
    const showStyle = async () => {
      const prevLength = totalStyle.value.length;

      if (currentShowedStyle.value.length < prevLength + currentStyle.length) {
        const nextIndex = currentShowedStyle.value.length - prevLength;
        const nextChar = currentStyle[nextIndex];
        currentShowedStyle.value += nextChar;

        if (currentShowedStyle.value.at(-2) === "\n") {
          await nextTick();
          styleEditor.value.goBottom();
        }

        setTimeout(showStyle, interval.value);
      } else {
        resolve();
      }
    };

    showStyle();
  });
};

const currentMd = ref("");
const mdEditor = ref(null);

const processivelyShowMd = (fullMarkDown) => {
  return new Promise((resolve) => {
    const showMd = async () => {
      if (currentMd.value.length < fullMarkDown.length) {
        const nextIndex = currentMd.value.length;
        const nextChar = fullMarkDown[nextIndex];
        currentMd.value += nextChar;

        if (currentMd.value.at(-2) === "\n") {
          await nextTick();
          mdEditor.value.goBottom();
        }

        setTimeout(showMd, interval.value);
      } else {
        resolve();
      }
    };

    showMd();
  });
};

const isMdFinish = ref(false);

const makeResume = async () => {
  // 布局
  await processivelyShowStyle(fullStyle.firstStyle);
  totalStyle.value += fullStyle.firstStyle;

  // 写 md
  await processivelyShowMd(fullMarkDown.md);

  // 翻译提醒
  await processivelyShowStyle(fullStyle.secondStyle);
  totalStyle.value += fullStyle.secondStyle;

  isMdFinish.value = true;

  // html 样式调整
  await processivelyShowStyle(fullStyle.thirdStyle);
  totalStyle.value += fullStyle.thirdStyle;
};

onMounted(() => makeResume());
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
