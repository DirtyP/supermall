<template>
<div class='tab-bar-item'  @click="itemClick">
  <div v-if="!isClick" ><a href="#"><slot name='item-icon'></slot></a></div>
  <div v-else  ><a href="#"><slot name='item-icon-click' ></slot></a></div>
 <div ><a href="#" :style="clickStyle"><slot  name='item-text'></slot></a></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props: {
    path:String,
    clickColor:{
      type:String,
      default:'green'
    }
  },
  data(){
    return{
      
    }
  },
  computed: {
    isClick(){
      return this.$route.path.indexOf(this.path)!==-1;
    },
    clickStyle(){
      return this.isClick? {color:this.clickColor}:{}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path).catch(()=>{});
    }
  },
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size:14px;
}
.tab-bar-item a{
  text-decoration: none;
}
.tab-bar-item img{
  width:24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.click{
  color:rgb(8, 226, 135);
}
</style>