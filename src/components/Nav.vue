<template>
  <nav>
    <ul>
      <li><h1>CHAOS</h1></li>
      <li><button class="button">⚡RUN</button></li>
      <li>
        <select class="button" v-model="language" name="select" id="select">
          <option hidden disabled selected value="">Select a language</option>
          <option value="javascript">javascript</option>
          <option value="python">python</option>
          <option value="html">html</option>
        </select>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    language: {
      get() {
        return this.$store.getters.language;
      },
      set(value) {
        this.$store.dispatch("setLang", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background: #5b4960;
  width: 100%;
  height: 60px;
  padding: 0px 50px;
}
ul {
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-size: 2rem;
}
.button {
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px 25px;
  background: #76c07d;
  font-weight: 600;
  color: #ffffff;
  font-size: 18px;
  width: max-content;
}
</style>