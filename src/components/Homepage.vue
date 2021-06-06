<template>
  <div class="container">
    <nav>
      <ul>
        <li><h2>Chaos.</h2></li>
        <li class="sub">
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
        <h3>A brand new way to test code on the fly.</h3>
        <router-link to="/editor" class="cta">Get Started</router-link>
      </div>
      <div class="right">
        <div class="messages">
          <div class="box"><span>console.log</span>('Bonjour')</div>
          <div class="box-r"><span>print</span>('Hi)</div>
          <div class="box"><span>System.out.print</span>('Hello')</div>
          <div class="box-r"><span>printf</span>('Ciao')</div>
          <div class="box"><span>fmt.print</span>('Hola')</div>
          <div class="box-r"><span>echo</span> "Hey"</div>
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
$primary: #ddfd99;
$transparent: rgba(151, 151, 151, 0.40);
$opacity: 0.35;
$neutral-100: #ffffff;
$line: #5c5c5c;
.container {
  height: 100vh;
  width: 100%;
  padding: 0 0 0 60px;
  position: relative;
}
.container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 60px;
  background: $line;
  height: 100vh;
  width: 1px;
}
nav {
  width: 100%;
  height: 60px;
  color: $primary;
  position: absolute;
  top: 0;
  ul {
    padding: 0 20px;
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      cursor: pointer;
    }
  }
  h2 {
    font-size: 36px;
  }
  .sub {
    width: 50%;
    padding: 0px 250px;
    font-size: 20px;
    li {
      position: relative;
      &:hover::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 1px;
        background: $primary;
        animation: slide-in 300ms ease;
      }
      @keyframes slide-in {
        from {
          background: transparent;
          transform: translateX(-50px);
        }
        to {
          transform: translateX(0);
        }
      }
    }
  }
}
main {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .right,
  .left {
    flex: 1;
    height: 100%;
    width: 100%;
  }
  .left {
    padding: 120px 0 0 60px;
    text-align: left;
    h1 {
      font-size: 6rem;
      color: $primary;
    }
    h3 {
      padding: 20px 0;
      font-size: 24px;
    }
    .cta {
      font-size: 36px;
      width: 300px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid $primary;
      border-radius: 10px;
      padding: 10px;
      color: $primary;
      margin: 20px 0;
    }
  }
  .right {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-image: url('./../assets/bg.jpg');
      background-size: cover;
      background-position: center;
      opacity: 0.3;
      height: 100%;
      width: 100%;
    }
    .messages {
      width: 80%;
      height: 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 5;
    }
    .box,
    .box-r {
      width: max-content;
      background: $transparent;
      padding: 20px 25px;
      border-radius: 10px;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 2px;
      span {
        color: $primary;
      }
    }
    .box-r {
      align-self: flex-end;
    }
  }
}
</style>
