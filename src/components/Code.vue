<template>
  <div>
    <section>
      <v-ace-editor
        v-model:value="content"
        @init="editorInit"
        :lang="lang"
        theme="solarized_dark"
        :style="code"
        :options="options"
      />
      <div class="out">{{ content }}</div>
    </section>
    <!-- <button>👋 Hello</button> -->
    <select v-model="language" name="select" id="select">
      <option value="javascript">javascript</option>
      <option value="python">python</option>
      <option value="html">html</option>
    </select>
    {{ lang }}
  </div>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";

export default {
  name: "Code",
  data() {
    return {
      lang: "javascript",
      content: "",
      code: {
        flex: 1,
        height: "300px",
        width: "400px",
      },
      options: {
        fontSize: 16,
        highlightActiveLine: true,
        showLineNumbers: true,
        tabSize: 4,
        showPrintMargin: false,
        showGutter: true,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
      },
    };
  },
  components: {
    VAceEditor,
  },
  methods: {
    editorInit() {
      return true;
    },
  },
  computed: {
    language: {
      get() {
        return this.lang;
      },
      set(value) {
        this.lang = value;
      },
    },
  },
};
</script>

<style scoped lang="scss">
button {
  padding: 0.6em 2em;
  border-radius: 10px;
  background: rgb(86, 86, 255);
  font-size: 20px;
  border: none;
  outline: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
section {
  width: 100%;
  display: flex;
  gap: 20px;
}
.out {
  flex: 1;
  background: rgb(2, 0, 32);
  color: yellow;
  padding: 10px;
  text-align: left;
}
</style>
