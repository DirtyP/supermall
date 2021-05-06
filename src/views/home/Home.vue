<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>
    <!-- <Banner :cImgList="banner" /> -->
   <home-swiper :banner="banner"/>
   <home-recommend :recommends="recommend"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeRecommend from "./childComps/HomeRecommend"
import HomeSwiper from "./childComps/HomeSwiper"
import Banner from "components/common/ber/Banner"
import {getHomeMultidata} from 'network/home'
export default {
  name:'Home',
  data(){
    return{
      banner:[],
      recommend:[],
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Banner,
    HomeRecommend
  },
  created () {
    getHomeMultidata().then(res=>{//res 是整个网络请求的地址  
      this.banner=res.data.banner.list;
      this.recommend=res.data.recommend.list;
    });
  },
}
</script>

<style scoped>
.home-nav{
  /* background-color:rgb(228, 0, 68); */
  background-color: var(  --color-tint);
  color:#fff;
}
</style>