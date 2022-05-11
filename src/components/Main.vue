<template>
  <div id='main'>
    <template>
      <div class='detail pa-5' :style='mainbackground'>
        <v-card>
          <v-img class='pa-0 view-target' height='300px' src="@/assets/profile_card.png" @load="load">
            <template v-slot:placeholder>
              <v-skeleton-loader
                type="image"
                :loading="profile_loading"             
              >
              </v-skeleton-loader>
              
            </template>
            <div :style='saturate' :hidden="profile_loading2">
              <v-avatar size='150' class='mt-10 mb-5'>
                <v-img src="./../assets/profile_avatar.png" alt="bear"></v-img>
              </v-avatar>
              <div class='profile_namediv'>
                <p class='profile_name'>Kanogh</p>
              </div>
            </div>
          </v-img>
          <v-card-text>
            <v-row>
              <v-col md='6' sm='12' cols='12' class='px-5 py-0' align='center'>
                <div>
                  <p class='text-h5 detail_h5 my-10'>自己紹介</p>
                  <p align='left' class='px-5 subtitle-1'>
                  実務経験2年のエンジニア。<br>
                  座右の銘は”一寸の光陰軽んずべからず”。<br>
                  初めはSQLしか書けなかったが、本での学習やシステム開発を通しながら、Vue.js,Node.js,pug,css,GAS等の言語を習得。<br>
                  また、PC関連の単純作業はPythonやPowerAutomate等を使用して効率的に実施。<br>
                  現在はReactについて学習中。
                  </p>
                </div>
              </v-col>
              <v-col md='6' sm='12' cols='12' class='px-5 py-0' align='center'>
                <p class='text-h5 detail_h5 my-10'>タイムライン</p>
                <v-timeline class='timeline' dense>
                  <v-timeline-item
                    v-for="(year, i) in years"
                    :key="i"
                    :color="year.color"
                    small
                  >
                    <v-row class="pt-1">
                      <v-col cols="4" align="left">
                        <strong>{{year.year}}</strong>
                      </v-col>
                      <v-col align="left">
                        <strong>{{year.text}}</strong>
                        <div>{{year.detail}}</div>
                      </v-col>
                    </v-row>
                      
                  </v-timeline-item>
                </v-timeline>
              </v-col>
              <v-col md='12' sm='12' cols='12' class='px-5 py-0 pb-5' align='center'>
                <div>
                  <p class='text-h5 detail_h5 my-10'>スキル</p>
                  <v-row>
                    <v-col class='ma-0 pa-3' lg='3' md='4' sm='6'	cols='12' v-for='(skill,i) in skills' :key='i'>
                      <v-card class='px-2 pb-2'>
                        <v-card-text class='py-2' style='font-size:18px'>{{skill.skill}}</v-card-text>
                        <v-progress-linear rounded :value='skill.per' height="18">
                          <strong>{{skill.per}}%</strong>
                        </v-progress-linear>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    data: () => ({
      mainbackground:{'background-color': 'rgba(255, 255, 255, 0.2)'},
      blur:{'filter':'blur(3px)'},
      saturate:{'backdrop-filter': 'saturate(50%)'},
      years: [
        {
          color: 'cyan',
          year: '2002年3月',
          text: '誕生',
          detail: '2002年3月9日に誕生'
        },
        {
          color: 'green',
          year: '2020年4月',
          text: 'VC工業株式会社入社',
          detail: 'html,css,Javascriptについての勉強を開始'
        },
        {
          color: 'pink',
          year: '2020年9月',
          text: '社内Webシステム開発開始',
          detail: '利用技術：AWS, Node.js, Vue.js, javascript, MySQL'
        },
        {
          color: '#FFF176',
          year: '2021年12月',
          text: '社内Webシステム開発完了',
          detail: '主な機能：ワークフロー, スケジュール管理, 在庫管理, 見積管理等'
        }
      ],
      skills:[
        {skill:'MySQL',per:80},
        {skill:'HTML(Pug)',per:80},
        {skill:'Node.js',per:70},
        {skill:'Javascript',per:70},
        {skill:'Vue.js',per:60},
        {skill:'CSS',per:50},
        {skill:'Python',per:30},
        {skill:'GAS',per:30},
        {skill:'AWS',per:20},
        {skill:'React',per:10},
        
      ],
      profile_loading:true,
      profile_loading2:true
    }),
    methods: {
      load() {
        this.profile_loading = false
        setTimeout(() => {
          this.profile_loading2 = false
        },100)
      }
    }
  }
  
</script>

<style scoped>
  #main{
    height: auto;
    /*
    background: linear-gradient(122deg, rgba(89,64,126,1) 0%, rgba(21,100,129,1) 33%, rgba(16,148,157,1) 64%, rgba(6,255,200,1) 100%);
    */
    background-image: url(./../assets/profile.png);
    background-repeat: repeat-y;
    text-align:center;
    width: 100%;
    font-size:18px;
  }
  .detail{
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
    font-family:Arial, Helvetica, sans-serif;
    letter-spacing: 1.2px;
  }
  .profile_name{
    color:rgb(255, 255, 255);
    text-shadow: 5px 5px 5px #3a3a3a;
    font-size:38px;
    line-height:40px;
    margin:auto;
  }
  .detail_h5 {
    position: relative;
    display: inline-block;
    margin-bottom: 1em;
  }
  .detail_h5:before {
    content: '';
    position: absolute;
    bottom: -10px;
    display: inline-block;
    width: 60px;
    height: 4px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: #666666;
    border-radius: 10px;
  }
  .profile_namediv{
    max-width:200px;
    margin:auto;
    background:rgb(0,0,0,0.1);
    box-shadow: 5px 5px 25px #3a3a3a;
  }
</style>