<template>
  <nav>
    <ul>
      <li><h1>CHAOS</h1></li>
      <li><button @click="run" class="button">⚡RUN</button></li>
      <li>
        <button @click="$refs.file.click()" class="button">Upload</button>
        <a v-if="(content !== '')" :href="dataUri" download="code" class="button">Save</a>
        <input @change="file" type="file" id="file" ref="file" name="file" />
      </li>
      <li>
        <select class="button" v-model="language" name="select" id="select">
          <option hidden disabled selected value="">Select a language</option>
          <option
            v-for="(lang, index) in languages"
            :key="index"
            :value="lang.language"
          >
            {{ lang.language }}
          </option>
        </select>
      </li>
    </ul>
  </nav>
</template>

<script>
import stripAnsi from "strip-ansi";
export default {
  name: "Nav",
  data() {
    return {
      dataUri: ""
    };
  },
  mounted() {
    fetch("https://emkc.org/api/v2/piston/runtimes")
      .then((res) => res.json())
      .then((data) => {
        // this.languages = data
        this.$store.dispatch("setLangs", data);
      })
      .catch(console.log);
  },
  computed: {
    languages() {
      return this.$store.getters.languages;
    },
    language: {
      get() {
        return this.$store.getters.language;
      },
      set(value) {
        this.$store.dispatch("setLang", value);
      },
    },
    content() {
      return this.$store.getters.code;
    },
    code() {
      return {
        language: this.$store.getters.language,
        version: this.$store.getters.version,
        files: [
          {
            content: this.$store.getters.code,
          },
        ],
      };
    },
    mime() {
      return this.$store.getters.mime
    }
  },
  watch: {
    content() {
      const uri = new Blob([this.content], {type: this.mime});
      this.dataUri = URL.createObjectURL(uri)
    },
  },
  methods: {
    async run() {
      console.log(this.code);
      await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.code),
      })
        .then((res) => res.json())
        .then((data) => {
          // this.result = stripAnsi(data.run?.output);
          this.$store.dispatch("setOutput", stripAnsi(data.run?.output));
        })
        .catch(console.log);
    },
    file(e) {
      {
        this.$store.dispatch("setMime", e.target.files[0].type);
        const fr = new FileReader();
        fr.onload = () => {
          const data = fr.result;
          this.$store.dispatch("setCode", data);
        };
        fr.readAsText(e.target.files[0]);
      }
    }
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
  cursor: pointer;
}
li {
  input {
    display: none;
  }
  button {
    margin: 0 20px;
  }
  a {
    text-decoration: none
  }
}
</style>