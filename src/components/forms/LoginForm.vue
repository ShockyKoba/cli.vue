<template>
  <form id="form-register" class="mt-0 mb-2" @submit.prevent="submit()">

    <div class="container">
      <div class="row">
        <div class="col-12" v-if="message.trim() !== ''">
          <h5>
            <span class="red">
              {{ message }}
            </span>
          </h5>
        </div>
        <div class="col-12">
          <div class="form-group">
            <input type="email" name="email" v-model="form.email" class="form-control" placeholder="Email" required>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <input type="password" name="password" v-model="form.pass" class="form-control" placeholder="Password" required>
          </div>
        </div>
        <div class="col-12">
          <input type="submit" name="submit" value="Login" class="form-control btn btn-danger" :disabled="submitDisabled">
        </div>
        <div class="col-12 text-center mt-4">
          You don't have an account? <router-link to="/register" class="text-danger">Sign In</router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      form: {
        email: '',
        pass: '',
      },
      message: ''
    }
  },
  computed: {
    submitDisabled: function(){
      return !this.validForm();
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    submit: function () {
      if(this.validForm()){
        console.log('Submitted!');
        this.loginUser(this.form);

        this.clearForm();
        return true;
      }
      console.log('Some error!');
      return false;
    },
    validEmail: function (email) {
      var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regexp.test(email);
    },
    validForm: function () {
      if(this.form.email !== '' && this.form.pass !== ''){
        
        if(!this.validEmail(this.form.email)){

          this.message = 'Invalid Email.';
          return false;
        }

        this.message = '';
        return true;
      }
      return false;
    },
    clearForm: function(){
      this.form = {
        email: '',
        pass: '',
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.red{
  color: red;
}
</style>