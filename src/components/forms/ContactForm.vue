<template>
    <form id="form-contact" class="form mt-5 pb-3" @submit.prevent="formContactProcess">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <input type="text" id="first-name" class="form-control" placeholder="First Name*" required="true" v-model.trim="formContact.first_name">
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <input type="text" id="last-name" class="form-control" placeholder="Last Name*" required="true" v-model.trim="formContact.last_name">
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <input type="email" id="email" class="form-control" placeholder="Email" v-model="formContact.email">
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <input type="tel" id="phone" class="form-control" placeholder="Phone" v-model="formContact.phone">
                    </div>
                </div>

                <div class="col-12 col-md-6 d-flex justify-content-start pb-3 pl-4">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" name="gender" type="radio" id="genderMale" value="male" v-model="formContact.gender" required>
                        <label class="form-check-label" for="genderMale">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" name="gender" type="radio" id="genderFemale" value="female" v-model="formContact.gender">
                        <label class="form-check-label" for="genderFemale">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" name="gender" type="radio" id="genderOther" value="other"  v-model="formContact.gender">
                        <label class="form-check-label" for="genderOther">Other</label>
                    </div>
                </div>

                <div class="col-12 col-md-6 d-flex justify-content-end pb-3 pr-4">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="wantEmails" value="emails" v-model="formContact.want.emails">
                        <label class="form-check-label" for="wantEmails">Emails</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="wantSMS" value="sms" v-model="formContact.want.sms">
                        <label class="form-check-label" for="wantSMS">SMS</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="wantPhoneCalls" value="calls" v-model="formContact.want.calls">
                        <label class="form-check-label" for="wantPhoneCalls">Phone Calls</label>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <select name="" id="form-controll" class="form-control" v-model="formContact.country">
                            <option value="">- Select Country -</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <input type="text" id="zipcode" class="form-control" placeholder="Zip Code" v-model.number="formContact.zip">
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <textarea name="message" id="message" class="form-control" rows="10" v-model="formContact.message" placeholder="Your Message..." required></textarea>
                    </div>
                </div>

                <div class="col-12">
                    <input type="submit" class="form-control mt-2" :title="submitTitle" :disabled="submitDisabled">
                </div>

                <div class="col-12 mt-3">
                    <!-- <small> {{ JSON.stringify(formContact) }} </small> -->
                </div>

            </div>
        </div>
    </form>
</template>

<script> export default {
    name: 'ContactForm',
    data() {
        return {
            formContact: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                gender: '',
                want: {},
                country: '',
                zip: '',
                message: '',
            }
        }
    },
    methods: {
        formContactProcess: function () {
            // console.log(this.formContact)
            this.formContact = {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                country: '',
                zip: '',
                gender: '',
                want: {},
                message: '',
            }
        },
        fieldsRequiredArentEmpty(){
            if( this.formContact.first_name.trim() !== '' && 
                this.formContact.last_name.trim() !== '' && 
                this.formContact.gender.trim() !== '' ){
                return true;
            }
            return false;
        }
    },
    computed: {
        submitTitle: function(){
            let titleDefault = 'You have to complete the fields.';
            let titleOnTrue = 'The fields are completed.';

            return (this.fieldsRequiredArentEmpty == true) ? titleOnTrue : titleDefault;
        },
        submitDisabled: function(){
            let disabledDefault = true;
            let disabledOnTrue = false;

            return (this.fieldsRequiredArentEmpty == true) ? disabledOnTrue : disabledDefault;
        }
    }
}
</script>

<style lang="scss" scoped>
  
</style>