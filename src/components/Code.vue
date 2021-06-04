<template>
  <div>
    <section>
      <Editor />
      <div class="out">{{ content }}</div>
    </section>
    <button>⚡RUN</button>
    <!-- <select v-model="language" name="select" id="select">
      <option value="javascript">javascript</option>
      <option value="python">python</option>
      <option value="html">html</option>
    </select> -->
  </div>
</template>

<script>
import Editor from './Editor';
export default {
  name: "Code",
  components: {
    Editor,
  },
  data() {
    return {
      
    };
  },
  methods: {
  },
  computed: {
    language: {
      get() {
        return this.lang;
      },
      set(value) {
        this.lang = value;
      }
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
