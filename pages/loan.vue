<template>
  <section class="container">
    <div>
      
      <h1 class="title">
        
      </h1>
      <h2 class="subtitle">
       What type of property are you refinancing?
      </h2>
      <div class="types">
        <input type="radio" name="rb" id="rb1" />
        <label for="rb1">Single Home</label>
        <input type="radio" name="rb" id="rb2" />
        <label for="rb2">Townhome</label>
        <input type="radio" name="rb" id="rb3" />
        <label for="rb3">Condominium</label>
       
        
      </div>

      
     


      <nuxt-link class="navi" to="/loandetail">
            next ->
          </nuxt-link>
          

    </div>
  </section>
</template>
<style>
.types {
  position: absolute;
  top: 50%;
  left: 50%;
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
  margin-right: 10px;
  margin-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  line-height: 36px;
  cursor: pointer;
  font-size: 1.4em;
}
label::before {
  content: " ";
  position: absolute;
  top: 6px;
  left: 0;
  display: block;
  width: 24px;
  height: 24px;
  border: 2px solid #2196F3;
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
  background: #2196F3;
}
/* Transition */
label,
label::before {
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
</style>
