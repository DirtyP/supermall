<template>
  <tab-bar>
      <tab-bar-item  path='/home' clickColor='deepPink'>
         <img slot='item-icon' src='@/assets/img/tabbar/home.svg' alt='' >
         <img slot="item-icon-click" src='@/assets/img/tabbar/homeclick.svg' alt=''>
         <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/fenlei' clickColor='rgb(8, 226, 135)'>
        <img slot='item-icon' src='@/assets/img/tabbar/fenlei.svg' alt=''>
        <img slot="item-icon-click" src='@/assets/img/tabbar/fenleiclick.svg' alt=''>
         <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/car'  clickColor='rgb(8, 226, 135)'>
        <img slot='item-icon' src='@/assets/img/tabbar/car.svg' alt=''>
        <img slot="item-icon-click" src='@/assets/img/tabbar/carclick.svg' alt=''>
         <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/mine' clickColor='rgb(8, 226, 135)'>
        <img slot='item-icon' src='@/assets/img/tabbar/mine.svg' alt=''>
        <img slot="item-icon-click" src='@/assets/img/tabbar/mineclick.svg' alt=''>
         <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name:'MainTabBar',
   components: {
    TabBar,
    TabBarItem
  }
}
</script>