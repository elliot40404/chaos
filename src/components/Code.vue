<template>
  <div class="container">
    <Editor class="edit" />
    <div ref="panel" class="output">
      <textarea readonly class="terminal">{{output}}</textarea>
    </div>
  </div>
</template>

<script>
import Editor from "./Editor";
export default {
  name: "Code",
  components: {
    Editor,
  },
  computed: {
    output() {
      return this.$store.getters.output
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  height: calc(100vh - 60px);
}
.output {
  position: absolute;
  top: 60px;
  right: 0;
  background: #0000003b;
  height: calc(100vh - 60px);
  width: 50vw;
  // resize: horizontal;
  // cursor: ew-resize;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.terminal {
  height: 80%;
  width: 95%;
  background: #000;
  padding: 20px;
  text-align: left;
  white-space: pre-wrap;
  overflow: auto;
  color: white;
  resize: none;
}
</style>
