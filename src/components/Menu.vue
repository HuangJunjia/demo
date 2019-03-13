<template>
  <div class="menu">
    <ul>
      <li v-for="item of menu">
        <div class="li-item">
          <p @click="changeSrc(item.path)"><a href="#">{{item.name}}</a></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Menu from '../../static/data/default-data'

  export default {
    name: 'HuMenu',
    data () {
      return {
        menu: Menu.result.menu,//菜单
      }
    },
    methods: {
      changeSrc (path) {
        this.$emit("change", path)
      },
    }
  }
</script>

<style scoped>
  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
  }
</style>
