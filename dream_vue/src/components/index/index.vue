<template> 
<div>
  <header class="header">
    <div class="back"><i class="iconfont icon-fanhui"></i></div>
    <div class="search"></div>
    <div class="city">城市</div>
  </header>
    <div>
    <swiper :options="swiperOption" ref="mySwiperA">
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
   
  </swiper> 
  </div>
  </div>
 
  
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          pagination : '.swiper-pagination'
        }
      }
    }
  }
</script>

<style scoped>
  .header{
    display: flex;
    background: #05bad5;
    color: #fff;
    position: relative;
  }
  .back{
    width: .64rem;
    line-height: .86rem;
    text-align: center;
  }
  .search{
    flex: 1;
    margin: .14rem .18rem;
    background: #fff;
    border-radius: .1rem;
  }
  .city{
    width: 1.14rem;
    line-height: .86rem;
    text-align: center;
  }
  .city:after{
    content: "";
    display: block;
    height: 0;
    width: 0;
    border: .1rem solid #fff;
    border-color: white transparent transparent transparent;
    position: absolute;
    top: .35rem;
    right: .1rem;
  
  } 
</style>
