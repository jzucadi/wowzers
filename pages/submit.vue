<template>
  <section class="container">
    <div>
      
      <h1 class="title">
        
      </h1>
      <h2 class="subtitle">
       Great! One last step...
      </h2>
      <button class="submit"><span>Submit</span></button>
       <nuxt-link class="navi" to="/">
            back ->
          </nuxt-link>

    </div>
  </section>
</template>
<style>
.submit {
  width: 380px;
  height: 120px;
  background: #fff;
  padding: 10px 45px;
  border: 4px solid #19CC95;
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  -webkit-transition: all 250ms;
  transition: all 250ms;
}
.submit > span {
  color: #19CC95;
  letter-spacing: 2px;
  font-size: 31px;
  font-weight: bold;
  font-family: "Noto Sans", sans-serif;
  -webkit-transition: all 250ms;
  transition: all 250ms;
}
.submit:disabled {
  cursor: not-allowed;
}
.submit:hover {
  background: #19CC95;
}
.submit:hover > span {
  color: #fff;
  font-size: 33px;
}
.submit:active > span {
  font-size: 31px;
  -webkit-transition: none;
  transition: none;
}

.submit.loader {
  background: #fff;
  border: 7px solid #BBBBBB;
  width: 125px;
  padding: 0;
  color: #fff;
  font-size: 0;
}
.submit.loader > span {
  opacity: 0;
  font-size: 0;
}

.submit.loading {
  cursor: wait;
  position: relative;
}
.submit.loading:before {
  content: "";
  position: absolute;
  top: -7px;
  left: -7px;
  height: 100%;
  width: 100%;
  border: 7px solid #19CC95;
  border-radius: 60px;
}

.submit.success {
  background: #19CC95;
}
.submit.success > span {
  display: inline-block;
  width: 50px;
  height: 50px;
  opacity: 0;
  font-size: 0;
  overflow: hidden;
  line-height: 150px;
  -webkit-animation: showSuccess 400ms 100ms forwards ease-in;
          animation: showSuccess 400ms 100ms forwards ease-in;
}
@-webkit-keyframes showSuccess {
  from {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes showSuccess {
  from {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
    opacity: 0;
  }
  to {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
.submit.success > span:before, .submit.success > span:after {
  content: "";
  display: block;
  position: absolute;
  background: #fff;
}
.submit.success > span:before {
  width: 25px;
  height: 8px;
  bottom: 9px;
  left: 0;
  -webkit-transform: rotate(38deg);
          transform: rotate(38deg);
  border-radius: 10px 0 15px 10px;
}
.submit.success > span:after {
  width: 45px;
  height: 8px;
  top: 19px;
  right: -7px;
  -webkit-transform: rotate(129deg);
          transform: rotate(129deg);
  border-radius: 10px 0 0 10px;
}

.submit.loading[data-percent="0"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 50% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 50% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="1"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 54.16667% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 54.16667% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="2"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 58.33333% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 58.33333% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="3"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 62.5% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 62.5% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="4"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 66.66667% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 66.66667% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="5"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 70.83333% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 70.83333% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="6"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 75% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 75% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="7"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 79.16667% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 79.16667% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="8"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 83.33333% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 83.33333% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="9"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 87.5% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 87.5% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="10"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 91.66667% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 91.66667% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="11"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 95.83333% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 95.83333% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="12"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="13"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 0%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="14"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 4.16667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 4.16667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="15"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 8.33333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 8.33333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="16"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 12.5%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 12.5%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="17"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 16.66667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 16.66667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="18"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 20.83333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 20.83333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="19"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 25%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="20"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 29.16667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 29.16667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="21"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 33.33333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 33.33333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="22"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 37.5%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 37.5%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="23"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 41.66667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 41.66667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="24"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 45.83333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 45.83333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="25"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="26"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="27"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 54.16667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 54.16667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="28"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 58.33333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 58.33333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="29"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 62.5%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 62.5%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="30"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 66.66667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 66.66667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="31"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 70.83333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 70.83333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="32"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 75%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 75%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="33"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 79.16667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 79.16667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="34"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 83.33333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 83.33333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="35"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 87.5%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 87.5%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="36"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 91.66667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 91.66667%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="37"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 95.83333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 95.83333%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="38"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="39"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 100% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 100% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="40"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 95.83333% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 95.83333% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="41"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 91.66667% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 91.66667% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="42"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 87.5% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 87.5% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="43"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 83.33333% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 83.33333% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="44"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 79.16667% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 79.16667% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="45"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 75% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 75% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="46"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 70.83333% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 70.83333% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="47"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 66.66667% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 66.66667% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="48"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 62.5% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 62.5% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="49"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 58.33333% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 58.33333% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="50"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 54.16667% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 54.16667% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="51"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 50% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 50% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="52"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 50% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 50% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="53"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 45.83333% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 45.83333% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="54"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 41.66667% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 41.66667% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="55"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 37.5% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 37.5% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="56"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 33.33333% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 33.33333% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="57"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 29.16667% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 29.16667% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="58"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 25% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 25% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="59"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 20.83333% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 20.83333% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="60"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 16.66667% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 16.66667% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="61"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 12.5% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 12.5% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="62"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 8.33333% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 8.33333% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="63"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 4.16667% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 4.16667% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="64"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 50% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 50% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="65"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 100%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 100%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="66"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 95.83333%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 95.83333%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="67"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 91.66667%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 91.66667%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="68"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 87.5%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 87.5%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="69"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 83.33333%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 83.33333%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="70"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 79.16667%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 79.16667%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="71"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 75%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 75%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="72"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 70.83333%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 70.83333%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="73"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 66.66667%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 66.66667%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="74"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 62.5%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 62.5%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="75"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 58.33333%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 58.33333%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="76"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 54.16667%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 54.16667%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="77"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 50% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 50% 50%, 50% 50%);
}

.submit.loading[data-percent="78"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 50%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 50%, 50% 50%);
}

.submit.loading[data-percent="79"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 45.83333%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 45.83333%, 50% 50%);
}

.submit.loading[data-percent="80"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 41.66667%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 41.66667%, 50% 50%);
}

.submit.loading[data-percent="81"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 37.5%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 37.5%, 50% 50%);
}

.submit.loading[data-percent="82"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 33.33333%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 33.33333%, 50% 50%);
}

.submit.loading[data-percent="83"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 29.16667%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 29.16667%, 50% 50%);
}

.submit.loading[data-percent="84"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 25%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 25%, 50% 50%);
}

.submit.loading[data-percent="85"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 20.83333%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 20.83333%, 50% 50%);
}

.submit.loading[data-percent="86"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 16.66667%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 16.66667%, 50% 50%);
}

.submit.loading[data-percent="87"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 12.5%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 12.5%, 50% 50%);
}

.submit.loading[data-percent="88"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 8.33333%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 8.33333%, 50% 50%);
}

.submit.loading[data-percent="89"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 4.16667%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 4.16667%, 50% 50%);
}

.submit.loading[data-percent="90"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 50% 50%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 50% 50%);
}

.submit.loading[data-percent="91"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 0% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 0% 0%);
}

.submit.loading[data-percent="92"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 5.55556% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 5.55556% 0%);
}

.submit.loading[data-percent="93"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 11.11111% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 11.11111% 0%);
}

.submit.loading[data-percent="94"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 16.66667% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 16.66667% 0%);
}

.submit.loading[data-percent="95"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 22.22222% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 22.22222% 0%);
}

.submit.loading[data-percent="96"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 27.77778% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 27.77778% 0%);
}

.submit.loading[data-percent="97"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 33.33333% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 33.33333% 0%);
}

.submit.loading[data-percent="98"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 38.88889% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 38.88889% 0%);
}

.submit.loading[data-percent="99"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 44.44444% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 44.44444% 0%);
}

.submit.loading[data-percent="100"]:before {
  -webkit-clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 50% 0%);
          clip-path: polygon(50% 50%, 50% 0, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 50% 0%);
}
</style>
