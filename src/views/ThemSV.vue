<template>
  <nav class="navbar navbar-expand navbar-light" style="background-color:#8424b4; height:70px">
    <div class="nav navbar-nav mt-2 "  style="margin-left:450px;">
      <a class="nav-item nav-link active text-white" href="#"><h3 style="font-weight: bold;">Thêm sinh viên</h3></a>
    </div>
  </nav>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header btn text-white" style="background-color:red;font-weight:bold;">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="onSubmit">
              <div class="row mt-2">
                <div class="col-md-6 mb-3">
                  <div class="d-flex flex-column align-items-start">
                    <label for="masv">Mã số sinh viên</label>
                    <input id="masv" v-model="form.masv" class="form-control" required />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex flex-column align-items-start">
                    <label for="ten">Tên sinh viên</label>
                    <input id="ten" v-model="form.ten" class="form-control" type="text" required />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex flex-column align-items-start">
                    <label for="ngaysinh">Ngày sinh</label>
                    <input id="ngaysinh" v-model="form.ngaysinh" class="form-control" type="date" required />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex flex-column align-items-start">
                    <label for="lop">Lớp</label>
                    <input id="lop" v-model="form.lop" class="form-control" type="text" required />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex flex-column align-items-start">
                    <label for="gv">Giảng viên</label>
                    <input id="gv" v-model="form.gv" class="form-control" type="text" required />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex flex-column align-items-start">
                    <label for="tinhtrang">Tình trạng</label>
                    <input id="tinhtrang" v-model="form.tinhtrang" class="form-control" type="text" required />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex flex-column align-items-start">
                    <label for="mahp">Mã học phần</label>
                    <input id="mahp" v-model="form.mahp" class="form-control" type="text" required />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="d-flex flex-column align-items-start">
                    <label for="ngay">Ngày kết thúc môn</label>
                    <input id="ngay" v-model="form.ngay" class="form-control" type="date" required />
                  </div>
                </div>
                <div class="col-md-12 mb-3">
                  <div class="d-flex flex-column align-items-start">
                    <label for="hocphan">Học phần</label>
                    <input id="hocphan" v-model="form.hocphan" class="form-control" type="text" required />
                  </div>
                </div>
              </div>
              <button type="submit" class="btn mt-3 mb-3 text-white" style="background-color:rgb(49, 79, 19);">
                Thêm sinh viên mới
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ masv: '', ten: '', ngaysinh: '', lop: '', gv: '', tinhtrang: '', mahp: '', ngay: '', hocphan: '' })

    const onSubmit = async () => {
      await createUser({ ...form })
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
    }

    return { form, onSubmit }
  },
}
</script>
