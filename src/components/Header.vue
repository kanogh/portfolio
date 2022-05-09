<template>
  <div id='home' class='background py-5' :style="clientheight">
    <v-app-bar class='headerbar' :height="height" :style='barbackground' flat app>
      <v-tabs v-model="model" dark centered color="teal lighten-5" :fixed-tabs="$vuetify.breakpoint.smAndDown ? true : false">
        <v-tab v-for="link in links" @click="$vuetify.goTo(link.to, options)" :href="`#${link.title}`" :key="link.title" :style="$vuetify.breakpoint.smAndDown ? '' : 'min-width:200px'">
          {{ link.title }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-row id='headertitle' class='headerrow mx-0' align="center" justify="center">
      <v-col class='headercol' align="center" justify="center">
        <v-card class="headercard pt-15 mb-10" color="transparent" flat>
          <v-card-title>
            <p class='headertitle'>Naoki's</p>
            <p class="headertitle headertitlebottom">Portfolio</p>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col>
        <v-btn class="ma-3" depressed elevation="10" fab @click="moveLink(`https://github.com/BRlackiver`)">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn class="ma-3" depressed elevation="10" fab>
          <v-icon color="#00acee">mdi-twitter</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  export default {
    data: () => ({
      model:'Home',
      duration: 500,
      offset: -23,
      easing: 'easeInOutCubic',
      links: [
        {title:'ホーム',to:'#home'},
        {title:'プロフィール',icon:'mdi-account-box',to:'#main'},
        {title:'お問い合わせ',icon:'mdi-email',to:'#footer'},
      ],
      height:'80px',
      barbackground: {
        'background-color': 'rgba(0, 0, 0, 0.7)'
      },
      scriptcolor:{
        'display':'none',
        'color':'transparent'
      },
      clientheight:{'height':`${window.innerHeight+5}px`}
    }),
    computed: {
      options () {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing,
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    },
    methods: {
      moveLink (url) {
        window.open(url, '_blank')
      },
      handleScroll() {
        setTimeout(() => {
          if(window.scrollY <= 64){
            this.offset = -23
            this.height = '80px'
            this.barbackground = {'background-color': 'transparent'}
          } else {
            this.offset = 0
            this.height = '60px'
            this.barbackground = {'background-color': 'rgba(0, 0, 0, 0.7)'}
          }
          
          if(document.getElementById('main').getBoundingClientRect().top <= 200 && document.getElementById('footer').getBoundingClientRect().top >= 300){
            this.model = 'プロフィール'
          } else if(document.getElementById('footer').getBoundingClientRect().top <= 200){
            this.model = 'お問い合わせ'
          } else {
            this.model = 'ホーム'
          }
        },450)
      }
    }
  }
  
</script>

<style scoped>
  .headerbar {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    transition:0.15s;
  }

  .headerrow {
    height: calc(100% - 100px);
    width: calc(100%);
    margin-bottom: -80px;
  }

  .background{
    /*
    background: linear-gradient(122deg, rgba(89,64,126,1) 0%, rgba(21,100,129,1) 33%, rgba(16,148,157,1) 64%, rgba(6,255,200,1) 100%);
    */
    background: radial-gradient(ellipse at bottom, #5091DD 0%, #030617 100%);
    
    /*background-image: url(./../assets/home.png);
    background-size: auto;*/
    text-align:center;
    color:#fff;
    font-size:60px;
    width: 100%;
  }

  .headertitle{
    letter-spacing:7px;
    font-size: clamp(10px, 15vw, 90px);
    color:rgb(233, 233, 233);
    text-align:center;
    width:100%;
    line-height: clamp(30px,15vw,100px);
    text-shadow: 2px 2px 10px #3a3a3a;
  }

</style>
