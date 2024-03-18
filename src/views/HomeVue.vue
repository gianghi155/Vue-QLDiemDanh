<template>
  <div class="home">
    <nav class="navbar navbar-expand navbar-light" style="background-color:#8424b4; height:70px">
        <div class="nav navbar-nav mt-2" style="margin-left:430px;" >
            <a class="nav-item nav-link active text-white" href="#"><h3 style="font-weight: bold;">Đề tài: Quản lý điểm danh</h3></a>
        </div>
    </nav>
    <div>
      <img class="mt-2" style="width:30%" alt="Vue logo" src="../assets/smile3.png" />
      <HelloWorld msg="Chào mừng tới Project của nhóm 2" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeVue',
  components: {
    HelloWorld
  }
}
</script>