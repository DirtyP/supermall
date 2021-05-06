<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
name:"HomeRecommend",
props:{
  recommends:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 12px;
  border-bottom:rgba(233, 2, 118, 0.1) 8px solid ;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 72px;
  height: 72px;
  margin-bottom: 10px;
}
</style>