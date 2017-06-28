<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button, .button:visited
{
  display: inline-block;
  color: white;
  letter-spacing: 1px;
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
  text-decoration: none;
  padding: 15px 45px;
  border-radius:30px;
  transition: opacity .6s
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #ccc;
  transition: opacity .6s
}
</style>
