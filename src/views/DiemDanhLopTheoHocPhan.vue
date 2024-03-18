<template>
    <nav class="navbar navbar-expand navbar-light" style="background-color:#8424b4; height:70px">
        <div class="nav navbar-nav mt-2 "  style="margin-left:450px;">
            <a class="nav-item nav-link active text-white" href="#"><h3 style="font-weight: bold;">Điểm danh lớp theo học phần</h3></a>
        </div>
    </nav>
  <div class="card ">
    <div class="container mt-3">
      <div class="form-group">
      <label for="hocphan" style="font-weight:bold;">Chọn học phần:</label>
      <div class="input-group mt-2"  style="width:300px; margin-left:450px">
        <select class="form-select" v-model="selectedCourse">
          <option value="Lập trình giao diện web2">
            Lập trình giao diện web 2
          </option>
          <option value="Lập trình PHP 2">Lập trình PHP 2</option>
          <option value="laravel">Web framework - Laravel</option>
          <option value="vue">Ứng dụng Web - Vue</option>
        </select>
      </div>
    </div>
    <h2 class="mt-3" style="color:orangered;font-weight:bold;">Danh sách lớp theo học phần</h2>
    <table style="font-size:0.8rem" class="table m-0 table-bordered mt-3">
      <!-- Bảng danh sách sinh viên được lọc theo học phần đã chọn -->
      <thead>
        <tr class="table-dark">
          <th scope="col">STT</th>
          <th scope="col">Mã Số Sinh Viên</th>
          <th scope="col">Tên Sinh Viên</th>
          <th scope="col">Ngày sinh</th>
          <th scope="col">Lớp</th>
          <th scope="col">Giảng Viên</th>
          <th scope="col">Tình Trạng</th>
          <th scope="col">Mã học phần</th>
          <th scope="col">Ngày kết thúc môn</th>
          <!-- <th scope="col">Action</th> -->
        </tr>
      </thead>
      <tbody >
        <tr class="table-primary" v-for="(user, index) in filteredUsers" :key="index">
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ user.masv }}</td>
          <td>{{ user.ten }}</td>
          <td>{{ user.ngaysinh }}</td>
          <td>{{ user.lop }}</td>
          <td>{{ user.gv }}</td>
          <td><input type="text" v-model="user.newStatus" /></td>
          <td>{{ user.mahp }}</td>
          <td>{{ user.ngay }}</td>
        </tr>
        <tr class="table-primary">
          <td colspan="8"></td>
          <td > <button class="btn mt-2 mb-2 text-white" style="background-color:rgb(49, 79, 19);" @click="updateUsers">Cập nhật</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="successMessage" class="alert alert-success">
    {{ successMessage }}
  </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useLoadUsers, updateUser } from "@/firebase";
import { useRouter } from "vue-router";
export default {
  setup() {
    const users = useLoadUsers();
    const selectedCourse = ref("");
    const router = useRouter();
    const successMessage = ref("");
    const errorMessage = ref("");
    const filteredUsers = computed(() => {
      return users.value.filter(
        (user) => user.hocphan === selectedCourse.value
      );
    });

    const updateUsers = () => {
      filteredUsers.value.forEach((user) => {
        updateUser(user.id, { tinhtrang: user.newStatus })
          .then(() => {
            successMessage.value = `Cập nhật thành công cho sinh viên`;
            router.push("/ddloptheohocphan");
          })
          .catch(() => {
            errorMessage.value = `Lỗi khi cập nhật cho sinh viên`;
          });
      });
    };

    return {
      users,
      updateUsers,
      selectedCourse,
      filteredUsers,
      successMessage,
      errorMessage,
    };
  },
};
</script>
<style scoped>

</style>
