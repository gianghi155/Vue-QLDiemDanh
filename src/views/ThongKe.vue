<template>
  <div class="app">
    <nav class="navbar navbar-expand navbar-light" style="background-color:#8424b4; height:70px">
      <div class="nav navbar-nav mt-2 "  style="margin-left:550px;">
        <a class="nav-item nav-link active text-white" href="#"><h3 style="font-weight: bold;">Thống kê</h3></a>
      </div>
    </nav>

    <div class="container mt-3">
      <h2 style="color:royalblue;font-weight:bold;">Thống kê điểm danh</h2>
      <!-- Bảng thống kê -->
      <table class="table table-bordered mt-3">
        <thead>
          <tr class="table-dark">
            <th scope="col">Tên học phần</th>
            <th scope="col">Số sinh viên có mặt</th>
            <th scope="col">Số sinh viên có phép</th>
            <th scope="col">Số sinh viên vắng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hocphan, index) in thongKeHocPhan" :key="index">
            <td>{{ hocphan.ten }}</td>
            <td>{{ hocphan.sinhVienCoMat }}</td>
            <td>{{ hocphan.sinhVienCoPhep }}</td>
            <td>{{ hocphan.sinhVienVang }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-success">
            <th scope="row">Tổng</th>
            <td>{{ tongSinhVienCoMat }}</td>
            <td>{{ tongSinhVienCoPhep }}</td>
            <td>{{ tongSinhVienVang }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import {  computed } from "vue";
import { useLoadUsers } from "@/firebase";

export default {
  name: "ThongKe",
  setup() {
    const users = useLoadUsers();

    // Tính toán thống kê cho từng học phần
    const thongKeHocPhan = computed(() => {
      const thongKe = {};

      users.value.forEach((user) => {
        const hocPhan = user.mahp;

        if (!thongKe[hocPhan]) {
          thongKe[hocPhan] = {
            ten: hocPhan,
            sinhVienCoMat: 0,
            sinhVienCoPhep: 0,
            sinhVienVang: 0,
          };
        }

        if (user.tinhtrang.toLowerCase() === "có mặt") {
          thongKe[hocPhan].sinhVienCoMat++;
        } else if (user.tinhtrang.toLowerCase() === "có phép") {
          thongKe[hocPhan].sinhVienCoPhep++;
        } else if (user.tinhtrang.toLowerCase() === "vắng") {
          thongKe[hocPhan].sinhVienVang++;
        }
      });

      return Object.values(thongKe);
    });

    // Tính tổng số sinh viên có mặt, có phép và vắng
    const tongSinhVienCoMat = computed(() => {
      return users.value.filter(user => user.tinhtrang.toLowerCase() === 'có mặt').length;
    });

    const tongSinhVienCoPhep = computed(() => {
      return users.value.filter(user => user.tinhtrang.toLowerCase() === 'có phép').length;
    });

    const tongSinhVienVang = computed(() => {
      return users.value.filter(user => user.tinhtrang.toLowerCase() === 'vắng').length;
    });

    return {
      thongKeHocPhan,
      tongSinhVienCoMat,
      tongSinhVienCoPhep,
      tongSinhVienVang,
    };
  },
};
</script>

<style scoped>
</style>
