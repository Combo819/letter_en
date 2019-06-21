<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout class="mt-5" align-center justify-center>
        <v-flex>
          <div class="display-2">Letter</div>
        </v-flex>
      </v-layout>

      <v-layout class="mt-5" align-center justify-center row fill-height wrap>
        <data-selector  :route='"/xiaoxiao"'    :name='"Hannah"'></data-selector>
        <v-flex xs12 sm12 md2>

        </v-flex>
        <data-selector :boy='true' :route='"/combo"'  :name='"Combo"'></data-selector>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DateSelector from '../components/DateSelector.vue'
export default {
  components: {'data-selector':DateSelector},
  data() {
    return {};
  },
  methods: {
    toAbout: function() {
      console.log("toAbout Clicked");
      this.$router.push("/about");
    },
    toXiaoxiao:function(){
    console.log('to xiaoxiao');

  },

    
  }
};
</script>

<style scoped>
.text-center{
  text-align: center; 
  display: inline-block;
}
.card-motion :hover{
  cursor: pointer;
  box-shadow: 2px 3px 15px gray
}
.card-child :hover{
  cursor: pointer;
  box-shadow: 0px 0px 0px gray
}

</style>
