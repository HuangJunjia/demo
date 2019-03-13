<template>
  <div class="hu-frame">
    <div class="hu-frame-item">
      <iframe :src="src" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HuFrame',
    props: {
      src: {
        type: String,
      }
    }
  }
</script>

<style scoped>
  .hu-frame {
    width: 330px;
    height: 645px;
    background: url("imgs/iphonex.png") no-repeat center 0;
    background-size: 100%;
    position: relative;
  }

  .hu-frame-item {
    position: absolute;
    top: 64px;
    left: 21px;
    right: 23px;
    bottom: 22px;
    overflow: hidden;
    border-radius: 0 0 35px 35px;
    border: 1px solid #edf0f4;
    border-top: none;
    background-color: #fff;
  }

  iframe {
    width: 0;
    max-width: 100%;
    min-width: 100%;
  }
</style>
