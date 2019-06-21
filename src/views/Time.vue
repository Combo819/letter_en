<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" sm4></v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" sm4>
        <span class="display-1 text-center">Since we met:</span>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-2" xs11 sm5>
        <v-sheet style="border-radius:15px" class="d-flex" color="blue-grey lighten-3" height="100">
          <v-layout align-center justify-center>
            <v-flex >
              <span v-show='false' class="text-center display-3 font-color">{{this.days}}天 {{this.hours}}小时 {{this.minutes}}分钟</span>
              <span class="text-center display-1 font-color">{{this.days}}Days {{this.hours}}Hours {{this.minutes}}Minutes</span>
            </v-flex>
          </v-layout>
        </v-sheet>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" xs10 sm3>
        <img style="border-radius:50%;width:100%" src="../assets/DSC_0154.jpg" alt>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" xs10 sm8 text-xs-center>
        <span class="headline">This is a Vue program</span><br>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" xs10 sm8 text-xs-center>
        <span class="headline">To write a webpage</span><br>
      </v-flex>
    </v-layout>
     <v-layout align-center justify-center>
      <v-flex class="mt-5" xs10 sm8 text-xs-center>
        <span class="headline">Of the story</span><br>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex text-xs-center class="mt-5 mb-5" sm4 >
        <v-btn @click="()=>{this.$router.push('/')}" color="primary" large>home page</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginTime: new Date("2018-12-26T20:20:00")
    };
  },
  components: {},
  computed: {
    days() {
      let totalTime = new Date() - this.beginTime;
      return Math.floor(totalTime / 86400000);
    },
    hours() {
      let totalTime = new Date() - this.beginTime;
      return Math.floor((totalTime * 24) / 86400000) % 24;
    },
    minutes() {
      let totalTime = new Date() - this.beginTime;
      return Math.floor((totalTime * 24 * 60) / 86400000) % 60;
    }
  }
};
</script>

<style scoped>
.text-center {
  display: block;
  text-align: center;
}
.font-color{
color: #212121
}
</style>


