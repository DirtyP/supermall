<template>
  <div class="banner">
        <div class='imgsDiv'> 
            <div id='navDiv' :style=""> <a class='as' v-for="(v,i) in cImgs" href="#" :class="cIndex==i ? 'class1':''"  @mouseenter="clearGo();goThis(i)" @mouseleave="go()"></a></div>
            <img class='imgs'  v-for="(item,index) in cImgs" :src="item.image" v-show="cIndex==index" @mouseenter="clearGo()" @mouseleave="go()">
              <!-- <div v-for="(item,index) in cImgs"">
              <a :href="item.link">
              <img class='imgs'  v-show="cIndex==index" :src="item.image" alt=""  @mouseenter="clearGo()" @mouseleave="go()>
             </a>
              </div> -->
        </div>
         <button @mouseenter="sss">sss</button>
  </div>
</template>
<script>
export default {
  name:"Banner",
  props:{
    cImgList:{
      type:Array,
       default(){
        return []
      }
    },
  },
  data(){
    return{
      timer:null,
      cIndex:0
    }
  },
  computed: {
    cImgs(){
      return this.cImgList
    }
  },
  mounted () {
    this.go();
  },
  methods: {
    go(){
     this.timer=setInterval(()=>{
       this.cIndex++;
        // this.$emit("indexAdd")
        if(this.cIndex==this.cImgs.length){
          this.cIndex=0;
        //  this.$emit("toZero")
        }
      },1000)
    },
    clearGo(){
       clearInterval(this.timer)
    },
    goThis(i){
      this.cIndex=i;
      // this.$emit("changeIndex",i)
    },
    sss(){
      console.log('sss')
    }
}
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.banner{
  margin: 0 auto;
}
.banner .imgsDiv{
  width: 360px;
  height: 188px;
  background-color: green;
  margin:0 auto;
  position: relative;
}
.banner .imgsDiv .imgs{
   width: 360px;
  height: 188px;
  position: absolute;
}
.banner  .as{
  display: block;
width: 10px;
height: 10px;
background-color:yellowgreen;
float: left;
list-style: none;
margin-left: 10px;
}
.banner .imgsDiv .class1{
  background-color:pink;
}
#navDiv{
  position: absolute;
  z-index: 1;
  opacity: 0.7;
  bottom: 30px;
  left: 130px;
}
</style>