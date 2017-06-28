<template>
  <section class="container">
    <div>
      
      <h1 class="title">
        
      </h1>
      <h2 class="subtitle">
       What is your credit rating?
      </h2>
      <div class='btns'>
      <label>
        <input checked='' name='button-group' type='radio' value='item'>
          <span class='btn first'>620</span>
        </input>
      </label>
      <label>
        <input name='button-group' type='radio' value='other-item'>
          <span class='btn'>650</span>
        </input>
      </label>
      <label>
        <input name='button-group' type='radio' value='other-item'>
          <span class='btn'>675</span>
        </input>
      </label>
      <label>
        <input name='button-group' type='radio' value='third'>
          <span class='btn'>700</span>
        </input>
      </label>
      <label>
        <input name='button-group' type='radio' value='third'>
          <span class='btn last'>750 +</span>
        </input>
      </label>
    </div>
      
      <nuxt-link class="button btn" to="/submit">
            Continue
          </nuxt-link>

    </div>
  </section>
</template>
<style scoped>
.button-link {
  text-decoration: none;
}

.btns {
  
  background-image: -webkit-linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  background-image: -webkit-linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  background-image:linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  z-index: 0;
  height: 80px;
  float: none;
  margin: 100px auto;
  width: 900px;
  max-width: 100%;
  border-radius: 40px;
  display: block;
  box-shadow: 0 2px 4px -1px rgba(25, 25, 25, 0.2);
}
.btns input {
  display: none;
}
.btns label {
  display: table;
  float: left;
  padding: 0;
  width: 20%;
  height: 100%;
  margin: 0;
  text-align: center;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
}
.btns label:first-child {
  border-left: none;
  border-radius: 40px 0 0 40px;
}
.btns label:last-child {
  border-radius: 0 40px 40px 0;
}
.btns .btn {
  font-size: 22px;
  cursor: pointer;
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  color: #FFF;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  
  -webkit-transition: color 250ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition: color 250ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.btns .btn:hover {
  box-shadow: inset 0 30px 30px -20px rgba(50, 50, 50, 0.02);
  -webkit-transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
.btns .btn:after {
  content: '\2714';
  margin-left: -10px;
  display: inline-block;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms, -webkit-transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms, -webkit-transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms, transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transition: margin 250ms cubic-bezier(0.6, -0.28, 0.735, 0.045) 100ms, transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22), -webkit-transform 250ms cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.btns .first {
  border-radius: 40px 0 0 40px;
}
.btns .last {
  border-radius: 0 40px 40px 0;
}
.btns input:checked + .btn {
  color: #607D8B;
  text-shadow: none;
  
  box-shadow: inset 0 10px 50px rgba(25, 25, 25, 0.08);
  -webkit-transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 150ms;
  transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 150ms;
}
.btns input:checked + .btn:after {
  margin-left: 12px;
  -webkit-transform: scale(1.25);
  transform: scale(1.25);
  -webkit-transition: -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms, margin 500ms;
  -webkit-transition: margin 500ms, -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;
  transition: margin 500ms, -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms, margin 500ms;
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms, margin 500ms, -webkit-transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;
}
</style>
