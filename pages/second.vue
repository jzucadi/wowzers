<template>
  <section class="container">
    <div>
      
      <h1 class="title">
        
      </h1>
      <h2 class="subtitle">
       Do you have a second mortgage?
      </h2>
        <div class="helper">
          <form action="">
          <input type="radio" name="rdo" id="yes" checked />
          <input type="radio" name="rdo" id="no"/>
          <div class="switch">
            <label for="yes">Yes</label>
            <label for="no">No</label>
            <span></span>
          </div>
          </form>
        </div>
      
      <div class="wrap">
        <nuxt-link class="button btn" to="/credit">
            Continue
          </nuxt-link>
      </div>
    </div>
    
  </section>
</template>
<style scoped>
.btn {
  transform: translate(-0%,225%);
}
.switch {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 70px;
  text-align: center;
  margin: -175px 0 0 -128px;
  font-size: 1.4em;
  background: #2EE59D;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border-radius: 50px;
}
.switch span {
  position: absolute;
  width: 20px;
  height: 4px;
  top: 50%;
  left: 50%;
  margin: -2px 0px 0px -4px;
  background: #fff;
  display: block;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  -ms-transition: all 0.6s ease;
  transition: all 0.6s ease;
  border-radius: 2px;
}
.switch span:after {
  content: "";
  display: block;
  position: absolute;
  width: 4px;
  height: 12px;
  margin-top: -8px;
  background: #fff;
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  -ms-transition: all 0.6s ease;
  transition: all 0.6s ease;
  border-radius: 2px;
}
input[type=radio] {
  display: none;
}
.switch label {
  cursor: pointer;
  color: rgba(0,0,0,0.2);
  width: 110px;
  line-height: 70px;
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  -ms-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
label[for=yes] {
  position: absolute;
  left: 0px;
  height: 20px;
}
label[for=no] {
  position: absolute;
  right: 0px;
}
#no:checked ~ .switch {
  background: #ff3b30;
}
#no:checked ~ .switch span {
  background: #fff;
  margin-left: -8px;
}
#no:checked ~ .switch span:after {
  background: #fff;
  height: 20px;
  margin-top: -8px;
  margin-left: 8px;
}
#yes:checked ~ .switch label[for=yes] {
  color: #fff;
}
#no:checked ~ .switch label[for=no] {
  color: #fff;
}
@media (max-width: 500px) {
    .switch {
margin: -114px 0 0 -125px;
    }
}
</style>
