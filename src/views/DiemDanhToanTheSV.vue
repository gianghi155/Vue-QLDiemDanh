<template>
    <nav class="navbar navbar-expand navbar-light" style="background-color:#8424b4; height:70px">
        <div class="nav navbar-nav mt-2 "  style="margin-left:450px;">
            <a class="nav-item nav-link active text-white" href="#"><h3 style="font-weight: bold;">Điểm danh toàn thể sinh viên</h3></a>
        </div>
    </nav>
   
  <div class="card text-center">
    <div class="container">
       <h2 class="mt-3" style="font-weight:bold;color:darkred;">Danh sách toàn thể sinh viên</h2>
      <table style="font-size:0.8rem" class="table m-0 table-bordered mt-3">
      <thead class="table-dark">
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Mã Số Sinh Viên</th>
          <th scope="col">Tên Sinh Viên</th>
          <th scope="col">Ngày sinh</th>
          <th scope="col">Lớp</th>
          <th scope="col">Giảng Viên</th>
          <th scope="col">Tình Trạng</th>
          <th scope="col">Mã học phần</th>
          <th scope="col">Ngày kết thúc môn</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody class="table-warning">
        <tr v-for="(user, index) in users" :key="index">
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ user.masv }}</td>
          <td>{{ user.ten }}</td>
          <td>{{ user.ngaysinh }}</td>
          <td>{{ user.lop }}</td>
          <td>{{ user.gv }}</td>
          <!-- Sử dụng input để nhập nội dung mới cho cột Tình Trạng -->
          <td>
            <input
              type="text"
              v-model="user.tinhtrang"
              :disabled="!user.editing"
            />
          </td>
          <td>{{ user.mahp }}</td>
          <!-- Sử dụng hàm formatDate để hiển thị ngày -->
          <td>{{ user.ngay }}</td>
          <td>
            <button
              class="btn btn-primary btn-sm me-2"
              @click="toggleEditing(user)"
            >
              Edit
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">
              Delete
            </button>
          </td>
        </tr>
        <tr class="table-warning">
          <td colspan="9"></td>
          <td > <button class="btn mt-2 mb-2 text-white" style="background-color:rgb(49, 79, 19);" @click="updateUsers">Cập nhật</button> </td>
        </tr>
      </tbody>
    </table>
    </div>
   
  </div>
  <div v-if="successMessage" class="alert alert-success">
    {{ successMessage }}
  </div>
</template>

<script>
import { ref } from "vue";
import { useLoadUsers, deleteUser, updateUser } from "@/firebase";
import { useRouter } from "vue-router";
export default {
  setup() {
    const users = useLoadUsers();
    const router = useRouter();
    const successMessage = ref("");
    const toggleEditing = (user) => {
      user.editing = !user.editing;
    };
    const updateUsers = () => {
      users.value.forEach((user) => {
        updateUser(user.id, { tinhtrang: user.tinhtrang }).then(() => {
          successMessage.value = `Cập nhật thành công cho sinh viên`;
          router.push("/ddtoanthesv");
        });
      });
    };
    return { users, toggleEditing, deleteUser, updateUsers, successMessage };
  },
};
</script>
