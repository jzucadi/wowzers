<template>
  <section class="container">
    <div>
      
      <h1 class="title">
        
      </h1>
      <h2 class="subtitle">
       Hello, what is your name?
      </h2>
      
      <div class="group">      
      <input type="text" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Name</label>
      </div>
      <div class="wrap">
       <nuxt-link class="button btn" to="/email">
            Continue
          </nuxt-link>
       </div>





    
    </div>
  </section>
</template>

<script>

</script>
<style scoped>

input {
    font-size: 18px;
    padding: 0.625em 0.625em 0.625em 0.3125em;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1.5px solid #54d1c3;
}

input:focus {
    outline: none;
}


/* LABEL ======================================= */

label {
    
    color: rgba(82, 100, 136, 0.71);
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0.3125em;
    top: 0.625em;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}


/* active state */

input:focus~label,
input:valid~label {
    top: -20px;
    left: -2px;
    font-size: 18px;
    color: #54d1c3;
}


/* BOTTOM BARS ================================= */

.bar {
    position: relative;
    display: block;
}

.bar:before,
.bar:after {
    content: '';
    height: 2.5px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #54d1c3;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
}

.bar:before {
    left: 50%;
}

.bar:after {
    right: 50%;
}


/* active state */

input:focus~.bar:before,
input:focus~.bar:after {
    width: 50%;
}


</style>
