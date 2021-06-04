<template>
  <v-ace-editor
    v-model:value="content"
    @init="editorInit"
    :lang="lang"
    theme="solarized_dark"
    :style="code"
    :options="options"
  />
</template>

<script>
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-emmet";

export default {
  name: "Editor",
  data() {
    return {
      lang: "javascript",
      content: "console.log('hello world)",
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
        enableSnippets: true,
        enableEmmet: true
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