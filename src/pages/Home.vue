<template>
  <div class="default">
    <div class="header">
      <div class="github-btn" @click="toUrl(0)">
        <img class="github-img" src="https://github.com/fluidicon.png">
        <span>GitHub</span>
      </div>
      <div class="github-btn" @click="toUrl(1)">
        <img class="github-img" src="https://github.com/fluidicon.png">
        <span>Blog</span>
      </div>
    </div>
    <div class="main">
      <hu-menu @change="changeSrc"></hu-menu>
      <hu-frame :src="pageSrc"></hu-frame>
    </div>
  </div>
</template>

<script>

  import HuMenu from '../components/Menu'
  import HuFrame from '../components/HuFrame/HuFrame'
  export default {
    name: 'Home',
    components: {HuFrame, HuMenu},
    data () {
      return {
        pageSrc: ""
      }
    },
    methods: {
      toUrl (index) {
        switch (index) {
          case 0:
            window.open('https://github.com/HuangJunjia')
            break;
          case 1:
            window.open("http://huangjunjia.github.io")
            break;
        }
      },
      changeSrc(src) {
        this.pageSrc = src
      }
    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
  }

  .header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
  }

  .github-btn {
    height: 24px;
    width: 85px;
    overflow: hidden;
    display: flex;
    align-items: center;
    transition: margin-bottom .5s;
  }

  .github-btn:hover {
    cursor: pointer;
    margin-bottom: 5px;
  }

  .github-img {
    width: 24px;
    height: 24px;
  }

  .show-item {
    width: 500px;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  iframe {
    width: 375px;
    height: 667px;
    border: 1px solid #ddd;
  }
</style>
