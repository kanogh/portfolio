<template>
  <div id='footer' class='background py-5'>
    <v-row class='footerdetail'>
      <v-col align='center'>
        <v-card :loading="loading" class='pa-0 ma-15 mx-5' :style='inputwidth'>
          <v-form class="pa-10" ref="loginform" v-model="invalid">
            <v-row>
              <v-col class='ma-0 my-5 mb-15 pa-0 text-h5' cols='12' align='center'>お問い合わせ
              </v-col>
              <v-col class='ma-0 pa-0' cols='12' align='center'>
                  <v-text-field :style='inputwidth' :rules="[rules.required]" class="ma-3 mt-0" v-model="name" prepend-inner-icon="mdi-account" label="お名前（必須）" autocomplete="off" outlined></v-text-field>
              </v-col>
              <v-col class='ma-0 pa-0' cols='12' align='center'>
                  <v-text-field :style='inputwidth' class="ma-3 mt-0" v-model="email" :rules="[rules.required, rules.email]" prepend-inner-icon="mdi-email" label="メールアドレス（必須）" autocomplete="off" outlined></v-text-field>
              </v-col>
              <v-col class='ma-0 pa-0' cols='12' align='center'>
                  <v-text-field :style='inputwidth' class="ma-3 mt-0" v-model="title" prepend-inner-icon="mdi-format-title" label="件名" autocomplete="off" outlined></v-text-field>
              </v-col>
              <v-col class='ma-0 pa-0' cols='12' align='center'>
                  <v-textarea class='pa-0 mx-3' prepend-inner-icon="mdi-text" auto-grow outlined label="本文" :style='inputwidth' v-model='text'></v-textarea>
              </v-col>
              <v-col class='ma-0 pa-0' cols='12' align='center'>
                  <v-btn color='primary' large @click="loginsubmit" :disabled="!invalid">送信</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  export default {
    data: () => ({
      email:'',
      name:'',
      title:'',
      text:'',
      rules: {
        required: value => !!value || "必ず入力してください",

        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'メールアドレスを入力してください'

        }
      },
      inputwidth:{'max-width':'500px'},
      invalid:false,
      loading:false
    }),
    methods: {
      loginsubmit :function(){
        if (this.$refs.loginform.validate()) {
          this.loading = !this.loading
          setTimeout(() => {
          this.loading = !this.loading
          },1000)
        }
      }
    },
  }
  
</script>

<style scoped>
  #footer{
    background: linear-gradient(122deg, rgba(89,64,126,1) 0%, rgba(21,100,129,1) 33%, rgba(16,148,157,1) 64%, rgba(6,255,200,1) 100%);
    background-color:rgba(255, 255, 255, 0.2);
    height:auto;
  }
  .footerdetail{
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    
  }
</style>
