<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p class="mt-2" style="font-weight: bold;">Thành viên:</p>
      <p>Phạm Thị Phương Uyên - 501220093</p>
      <p>Châu Gia Nghi - 501220821</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  margin: 20px 0 0;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>