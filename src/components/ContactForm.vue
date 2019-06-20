<template>
       <div id="_form">
       <h3 id="list_title">LET'S TALK</h3>
       <!--------------------------------------        Netlify Validation        -------------------------->
       <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          action=""
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact-form"
        >
    <input type="hidden" name="form-name" value="contact-form" />
    <v-text-field
      v-model="name"
      :counter="30"
      :rules="nameRules"
      label="Name"
      name="name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      name="email"
      required
    ></v-text-field>
    <v-textarea 
      label="Message"
      v-model="text"
      :rules='textRules'
      name="message"
    >
    </v-textarea>
    <!--------------------------------------        Validation BTN and Reset        -------------------------->
    <v-btn
      type="submit"
      :disabled="!valid"
      color="#1c90ee"
      @click="validate"
    >
      SEND
    </v-btn>
    <p class="hidden">
      <label><input name="bot-field"></label>
    </p>
  </v-form>
  <!--------------------------------------        Social Media Icons        -------------------------->
  <div id="contact">
        <ul class="icons">
            <li>
               <a href="https://github.com/zeketx"><font-awesome-icon :icon="['fab', 'github']" class="icon alt"/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/ezekiel-mauricio-655b70127/"><font-awesome-icon :icon="['fab', 'linkedin']" class="icon alt"/></a>
            </li>
            <li>
                <a href="mailto:zekemauricio@icloud.com"><font-awesome-icon :icon="['fa', 'envelope']" class="icon alt"/></a>
            </li>
            <li>
                <a href="https://plus.google.com/115603273133751670681"><font-awesome-icon :icon="['fab', 'google-plus-square']" class="icon alt"/></a>
            </li>
            <li>
                <a href="https://plus.google.com/115603273133751670681"><font-awesome-icon :icon="['fab', 'free-code-camp']" class="icon alt"/></a>
            </li>
        </ul>
    </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            valid: true,
            name: '',
            //////////////////////////////////////////////
            // form Validation 
            //////////////////////////////////////////////
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 30) || 'Name must be less than 30 characters'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
                text: '',
                textRules: [
                    v => !!v || 'text is required',
                    v => (v && v.length >= 30) || 'Message must be more than 30 characters'
            ],
            //////////////////////////////////////////////
            // Validation 
            //////////////////////////////////////////////
            methods: {
                    validate () {
                    if (this.$refs.form.validate()) {
                        this.snackbar = true
                    }
                    },
                    reset () {
                    this.$refs.form.reset()
                    },
                    resetValidation () {
                    this.$refs.form.resetValidation()
                }
            }
        }
    }
}
</script>
<style scoped>
     #list_title {
        font-weight: 200;
        font-size: 15px;
        text-align: center;
       
      }
      ul li {
        list-style-type: none;
        font-weight: 200;
        font-size: 25px;
        display: inline;
        padding: 20px;
      }
      li a {
        text-decoration: none;
        color: grey;
        font-weight: 200;
      }
      li a:hover {
        color: #4cae50;
      }
      .theme--light.v-btn {
          color: #fff;
      }
</style>