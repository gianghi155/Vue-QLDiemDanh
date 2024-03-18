import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/HomeVue.vue'

const routes = [
  {
    path: '/',
    name: 'Trang chủ',
    component: HomeVue
  },
  {
    path: '/themsv',
    name: 'Thêm sinh viên',
    component: ()=>import('../views/ThemSV.vue')
  },
  {
    path: '/ddtoanthesv',
    name: 'Điểm Danh Toàn Thể Sinh Viên',
    component: ()=>import('../views/DiemDanhToanTheSV.vue')
  },
  {
    path: '/ddloptheohocphan',
    name: 'Điểm Danh Lớp Theo Học Phần',
    component: ()=>import('../views/DiemDanhLopTheoHocPhan.vue')
  },
  {
    path: '/thongke',
    name: 'Thống Kê',
    component: ()=>import('../views/ThongKe.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router