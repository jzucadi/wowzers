<template>
  <section class="container">
    <div>
      
      <h1 class="title">
        
      </h1>
      <h2 class="subtitle">
       How will this property be used?
      </h2>
      <div class="wrap">
        <div class="types">
          <div class="grid__col grid__col--1-of-3">
          <input type="radio" name="rb" id="rb1" />
          <label for="rb1">Primary</label></div>
          <div class="grid__col grid__col--1-of-3">
          <input type="radio" name="rb" id="rb2" />
          <label for="rb2">Secondary</label></div>
          <div class="grid__col grid__col--1-of-3">
          <input type="radio" name="rb" id="rb3" />
          <label for="rb3">Rental</label></div>
        
          
        </div>
      </div>
      <nuxt-link class="button btn" to="/location">
            Continue
          </nuxt-link>

    </div>
  </section>
</template>
<style scoped>
.types {
  position: absolute;
  left: 52%;
  transform: translate(-50%,-50%);
}
input[type="checkbox"],
input[type="radio"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
label {
  position: relative;
  display: inline-block;
  margin-right: 25px;
  margin-bottom: 10px;
  padding-left: 35px;
  padding-right: 35px;
  line-height: 36px;
  cursor: pointer;
  font-size: 1.4em;
  color: #54d1c3;
}
label::before {
  
  content: " ";
  position: absolute;
  top: 6px;
  left: 0;
  display: block;
  width: 24px;
  height: 24px;
  border: 2px solid #54d1c3;
  border-radius: 4px;
  z-index: -1;
}
input[type="radio"] + label::before {
  border-radius: 18px;
}
/* Checked */
input[type="checkbox"]:checked + label,
input[type="radio"]:checked + label {
  padding-left: 30px;
  color: #fff;
}
input[type="checkbox"]:checked + label::before,
input[type="radio"]:checked + label::before {
  top: 0;
  width: 100%;
  height: 100%;
  background: #54d1c3;
}
/* Transition */
label,
label::before {
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
</style>
