<template>
    <div id='tab-bar'>
      <slot></slot>
     </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {
  }
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow:  0px -3px 5px rgba(50, 200,100, 0.4);

}

</style>
