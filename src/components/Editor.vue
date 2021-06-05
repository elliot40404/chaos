<template>
  <v-ace-editor
    v-model:value="content"
    @init="editorInit"
    :lang="language"
    :key="language"
    theme="solarized_dark"
    :style="code"
    :options="options"
  />
</template>

<script>
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/mode-javascript";

export default {
  name: "Editor",
  data() {
    return {
      content: "console.log('hello world)",
      code: {
        flex: 1,
        height: "100%",
        width: "100%",
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
        enableEmmet: true,
      },
    };
  },
  created() {
    require("ace-builds/src-noconflict/ext-language_tools");
    require("ace-builds/src-noconflict/ext-searchbox");
    require("ace-builds/src-noconflict/mode-python");
    require("ace-builds/src-noconflict/mode-r");
    require("ace-builds/src-noconflict/mode-typescript");
    require("ace-builds/src-noconflict/mode-java");
    require("ace-builds/src-noconflict/mode-html");
    require("ace-builds/src-noconflict/ext-emmet");
    require("ace-builds/src-noconflict/mode-rust");
    require("ace-builds/src-noconflict/mode-csharp");
    require("ace-builds/src-noconflict/mode-c_cpp");
    require("ace-builds/src-noconflict/mode-perl");
    require("ace-builds/src-noconflict/mode-yaml");
    require("ace-builds/src-noconflict/mode-sql");
    require("ace-builds/src-noconflict/mode-ruby");
    require("ace-builds/src-noconflict/mode-php");
    require("ace-builds/src-noconflict/mode-kotlin");
    require("ace-builds/src-noconflict/mode-golang");
    require("ace-builds/src-noconflict/mode-elixir");
    require("ace-builds/src-noconflict/mode-dart");
    require("ace-builds/src-noconflict/mode-scala");
    require("ace-builds/src-noconflict/mode-sh");
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
    language() {
      return this.$store.getters.language;
    },
  },
};
</script>