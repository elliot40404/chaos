<template>
  <div class="container">
    <nav>
      <ul>
        <li><h2>Chaos.</h2></li>
        <li>
          <ul>
            <li>ABOUT</li>
            <li>API</li>
          </ul>
        </li>
      </ul>
    </nav>
    <main>
      <div class="left">
        <h1>CODE</h1>
        <h1>EXECUTE</h1>
        <h1>PERFORM</h1>
        <h3>a brand new to test code on the fly.</h3>
        <router-link to="/editor" class="cta">Get Started</router-link>
      </div>
      <div class="right">
        <div class="messages">
          <div class="box">console.log('Bonjour')</div>
          <div class="box-r">print('Hi)</div>
          <div class="box">System.out.print('Hello')</div>
          <div class="box-r">printf('Ciao')</div>
          <div class="box">fmt.print('Hola')</div>
          <div class="box-r">echo "Hey"</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>

<style lang="scss" scoped>
$primary: #DDFD99;
$transparent: #979797;
$opacity: 0.35;
$neutral-100: #ffffff;
$line: #5c5c5c;
.container {
    height: 100vh;
    width: 100%;
    padding: 0 60px;
    position: relative;
}
.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 60px;
    background: $line;
    height: 100vh;
    width: 1px;
}
nav {
    width: 100%;
}

</style>