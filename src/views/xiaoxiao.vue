<template>
  <v-layout align-center justify-center>
    <v-flex sm8>
      <v-card>
        <v-img
          @mouseover="mouseOverImage()"
          @mouseleave="mouseOutImage()"
          :src="require('../assets/DSC_0286_4.jpg')"
        >
          <div
            @mouseout="mouseOutImage()"
            v-if="hover"
            class="d-flex image-mask darken-2 v-card--reveal text-xs-center"
            style="height: 100%;"
          >
            <v-icon
              @mouseout="(e)=>{e.stopPropagation()}"
              style="width:20%,height:50%"
              v-show="playIcon"
              @click="playMusic()"
              class="play-icon"
              dark
              size="80"
            >play_arrow</v-icon>
            <v-layout
              @mouseout="(e)=>{e.stopPropagation()}"
              @click="pauseMusic()"
              style="width=100%;height=100%;"
              v-show="!playIcon"
              justify-center
              align-center
            >
              <v-flex>
                <img
                  src="../assets/baseline-pause-24px.svg"
                  alt="triangle with all three sides equal"
                  width="10%"
                >
              </v-flex>
            </v-layout>
          </div>
        </v-img>
        <v-container grid-list-md text-xs-center>
          <v-layout class="mt-5 mb-5" align-center justify-center>
            <v-flex>
              <transition name="fade">
                <h1 v-show="titleShow" class="display-2 font-weight-medium">Apirl 13 2019</h1>
              </transition>
            </v-flex>
          </v-layout>
          <Narratage v-if="renderList[0]" :narratage="{text:'Harbor Park Toronto' }"/>
          <Narratage v-if="renderList[1]" :narratage="{image:'DSC_0286_4.jpg' }"/>

          <Dialog v-if="renderList[2]" :dialog="{ position:'left',text:'I want to be here every day' }"/>
          <Dialog v-if="renderList[3]" :dialog="{ position:'right',text:'I am a bit cold' }"/>
          <Dialog v-if="renderList[4]" :dialog="{ position:'left',text:'Let\'s get there' }"/>
          <Narratage v-if="renderList[5]" :narratage="{text:'... ...' }"/>
          <Narratage v-if="renderList[6]" :narratage="{image:'DSC_0302.jpg' }"/>
          <Dialog v-if="renderList[7]" :dialog="{ position:'left',text:'I think we should have a picture' }"/>
          <Dialog v-if="renderList[8]" :dialog="{ position:'right',text:'why?' }"/>
          <Dialog v-if="renderList[9]" :dialog="{ position:'left',text:'Stand under the sunset' }"/>

          <Narratage v-if="renderList[10]" :narratage="{image:'DSC_0307.jpg' }"/>
          <Dialog v-if="renderList[11]" :dialog="{ position:'left',text:'Awesome!' }"/>
          <Narratage v-if="renderList[12]" :narratage="{image:'DSC_0319.jpg' }"/>
          <Dialog v-if="renderList[13]" :dialog="{ position:'left',text:'Let\'s go to the dock' }"/>
          <Dialog v-if="renderList[14]" :dialog="{ position:'right',text:'Look! There are some ducks on the water.' }"/>
          <Narratage v-if="renderList[15]" :narratage="{text:'... ...' }"/>
          <Dialog v-if="renderList[16]" :dialog="{ position:'right',text:'Amazing,The door is open' }"/>
          <Dialog v-if="renderList[17]" :dialog="{ position:'left',text:'There are two strong and interesting guys' }"/>
          <Dialog v-if="renderList[18]" :dialog="{ position:'right',text:'Do you want to join♂them' }"/>
          <Dialog v-if="renderList[19]" :dialog="{ position:'left',text:'That\'s bad' }"/>
          <Narratage v-if="renderList[20]" :narratage="{image:'DSC_0329.jpg' }"/>
          <Dialog v-if="renderList[21]" :dialog="{ position:'left',text:'Brilliant sunset' }"/>
          <Dialog v-if="renderList[22]" :dialog="{ position:'left',text:'stand there, and I will shoot your outline' }"/>
          <Dialog v-if="renderList[23]" :dialog="{ position:'left',text:'Best side face' }"/>
          <Narratage v-if="renderList[24]" :narratage="{text:'8:19 pm' }"/>
          <Narratage v-if="renderList[25]" :narratage="{image:'DSC_0342_1.jpg' }"/>
          <Dialog v-if="renderList[26]" :dialog="{ position:'right',text:'Let\'s go home. Its so cold here' }"/>
          <Dialog v-if="renderList[27]" :dialog="{ position:'left',text:'Why not just enjoy the sunset' }"/>
          <Narratage v-if="renderList[28]" :narratage="{text:'Turn Back' }"/>
          <Dialog v-if="renderList[29]" :dialog="{ position:'left',text:' Have a cup of hot coffee?' }"/>
          <Dialog v-if="renderList[30]" :dialog="{ position:'right',text:'Why' }"/>
          <Dialog v-if="renderList[31]" :dialog="{ position:'right',text:'why drinking coffee this time' }"/>
          <Narratage v-if="renderList[32]" :narratage="{text:'Inside Building' }"/>
          <Dialog v-if="renderList[33]" :dialog="{ position:'left',text:'Come on. Tim Hortons is there' }"/>
          <Dialog v-if="renderList[34]" :dialog="{ position:'right',text:'It\'s quite cold' }"/>
          <Dialog v-if="renderList[35]" :dialog="{ position:'right',text:'OK let\'s have coffee' }"/>
          <Narratage v-if="renderList[36]" :narratage="{text:'Store' }"/>
          <Dialog v-if="renderList[37]" :dialog="{ position:'right',text:'Wait a minute' }"/>
          <Dialog v-if="renderList[38]" :dialog="{ position:'left',text:'You like that uh?' }"/>
          <Narratage v-if="renderList[39]" :narratage="{text:'... ...' }"/>
          <Dialog v-if="renderList[40]" :dialog="{ position:'right',text:'Good drinking' }"/>
          <Dialog v-if="renderList[41]" :dialog="{ position:'left',text:'Uh that\'s good' }"/>
          <Narratage v-if="egg[0]" :narratage="{text:'Afterward' }"/>
          <Dialog v-if="egg[1]" :dialog="{ position:'left',text:'What a nice day' }"/>
          <Dialog v-if="egg[2]" :dialog="{ position:'left',text:'Want to enjoy the sunset here every day' }"/>
        </v-container>
        <transition name="fade">
          <v-btn v-if="expendShow" @click="expendDialog()" large block>
            <v-icon x-large>expand_more</v-icon>
          </v-btn>
        </transition>
        <transition name="fade">
          <v-btn color="primary" v-if="!expendShow&&nextBtnShow" @click="nextPage()" large block>
            Next Page
            <v-icon x-large>chevron_right</v-icon>
          </v-btn>
        </transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Dialog from "../components/Dialog.vue";
import Narratage from "../components/Narratage.vue";
export default {
  components: {
    Dialog,
    Narratage
  },
  data() {
    return {
      titleShow: false,
      renderList: new Array(42).fill(false),
      renderIndex: 2,
      hover: false,

      bgm: this.$store.state.bgm,
      egg: [false, false],
      nextBtnShow: true
    };
  },
  mounted() {
    window.setTimeout(() => {
      this.titleShow = true;
      const bgmPro = this.bgm.play();
      console.log(bgmPro);

      if (bgmPro !== undefined) {
        bgmPro
          .then(_ => {
            this.$store.commit("playMusic", "play");
          })
          .catch(error => {
            console.log(error);
          });
      }
    }, 300);
  },
  methods: {
    expendDialog() {
      this.$set(this.renderList, this.renderIndex, true);
      this.renderIndex++;
    },
    nextPage() {
      this.nextBtnShow = false;
      window.setTimeout(() => {
        this.$set(this.egg, 0, true);
      }, 3000);
      window.setTimeout(() => {
        this.$set(this.egg, 1, true);
      }, 6000);
      window.setTimeout(() => {
        this.$set(this.egg, 2, true);
      }, 9000);
      window.setTimeout(() => {
        this.$router.push("/time");
      }, 13000);
    },
    mouseOverImage() {
      this.hover = true;
    },
    mouseOutImage() {
      this.hover = false;
    },
    playMusic() {
      this.bgm.play();
      this.$store.commit("playMusic", "play");
    },
    pauseMusic() {
      this.bgm.pause();
      this.$store.commit("playMusic", "pause");
    }
  },
  computed: {
    expendShow() {
      return this.renderIndex >= this.renderList.length ? false : true;
    },
    playIcon() {
      return this.$store.state.playIcon;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.image-mask {
  background-color: rgba(0, 0, 0, 0.5);
}
.play-icon {
  cursor: pointer;
  user-select: none;
}
.text-center {
  display: block;
  text-align: center;
}
.pausePositon {
  text-align: center;
  line-height: 100%;
  /* display: inline-block; */
  /* padding-top: 24%; */
  /* padding-right: 42%; */
}
</style>
