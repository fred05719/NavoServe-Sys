<!-- Modal -->
<div class="modal fade" id="modal_new_admin" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Add New Admin</h1>
      <button type="button" class="btn-close" id="close_modal_new_admin"></button>
    </div>
    <div class="modal-body">
      <div class="row d-flex mt-4">
        <div class="col-12">
          <p class="err-message fw-bold text-success fs-5"></p>
        </div>
        <form id="new_admin_form">
          <div class="col-12">
            <div class="form">
              <input type="text" name="first_name" class="form-control text-box" id="first_name" placeholder=" " tabindex="1" required>
              <label for="first_name" class="input_label"><span class="label_span">First Name</span></label>
              <div class="icon_label"><i class="bx bxs-user"></i></div>
              <button type="button" class="input_option clear_input"><i class="bi bi-x"></i></button>
            </div>
          </div>
          <div class="col-12">
            <div class="form">
              <input type="text" name="last_name" class="form-control text-box" id="last_name" placeholder=" " tabindex="1" required>
              <label for="last_name" class="input_label"><span class="label_span">Last Name</span></label>
              <div class="icon_label"><i class="bx bxs-user"></i></i></div>
              <button type="button" class="input_option clear_input"><i class="bi bi-x"></i></button>
            </div>
          </div>
          <div class="col-12">
            <div class="form">
              <input type="email" name="email" class="form-control text-box" id="email" placeholder=" " tabindex="1" required>
              <label for="email" class="input_label"><span class="label_span">Email</span></label>
              <div class="icon_label"><i class="bx bxs-envelope"></i></i></div>
              <button type="button" class="input_option clear_input"><i class="bi bi-x"></i></button>
            </div>
          </div>
          <div class="col-12">
            <div class="form">
              <input type="password" name="password" class="form-control text-box" id="password" placeholder=" " tabindex="2" required>
              <label for="password" class="input_label"><span class="label_span">Password</span></label>
              <div class="icon_label"><i class="bx bxs-key"></i></div>
              <button type="button" class="input_option show_password"><i class="bi bi-eye-slash-fill"></i></button>
            </div>
          </div>
          <div class="col-12">
            <div class="form">
              <input type="password" name="cpassword" class="form-control text-box" id="cpassword" placeholder=" " tabindex="2" required>
              <label for="cpassword" class="input_label"><span class="label_span">Confirm Password</span></label>
              <div class="icon_label"><i class="bx bxs-key"></i></div>
              <button type="button" class="input_option show_password"><i class="bi bi-eye-slash-fill"></i></button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" id="add_user_btn" class="btn btn-success">
          <span>Add Admin</span>
      </button>
      <button type="button" id="reset_btn" class="btn btn-secondary">
        <span class="link_name">Reset</span>
      </button>
    </div>
  </div>
</div>
</div>
<script src="components/js/add_user_validator.js"></script>
