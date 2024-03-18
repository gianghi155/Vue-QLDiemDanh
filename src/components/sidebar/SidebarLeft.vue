<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-bars" />
    </span>
    <h2 style="margin-top:80px;">
      <span v-if="collapsed">
        <div>
          <!-- <img src="assets/meo.jpg" alt="Ad" class="user-img"> -->
        </div>
        
      </span>
      <span v-else>
        Admin
        <!-- <img src="assets/meo.jpg" alt="Ad" class="user-img"> -->
      </span>
    </h2>

    <SidebarLink to="/" icon="fas fa-home">Trang chủ</SidebarLink>
    <SidebarLink to="/themsv" icon="fas fa-user">Thêm sinh viên</SidebarLink>
    <SidebarLink to="/ddloptheohocphan" icon="fas fa-clipboard">Điểm danh lớp theo học phần</SidebarLink>
    <SidebarLink to="/ddtoanthesv" icon="fas fa-columns">Điểm danh toàn thể sinh viên</SidebarLink>
    <SidebarLink to="/thongke" icon="fas fa-chart-bar">Thống kê</SidebarLink>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #12171e;
  --sidebar-item-hover: #c988e9;
  --sidebar-item-active: #8424b4;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 1em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

/* .user-img{
  width:50px;
  border-radius:100%;
  border: 1px solid #eee;
  

} */
.sidebar h1 {
  height: 2em;
}

.collapse-icon {
  width: 25px;
  position: absolute;
  top: 0;
  right:0;
  padding: 0.75em;
  margin-right: 15px;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>