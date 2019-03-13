<template>
  <div class="scratch">
    <canvas :id="getId" :width="getWidth" :height="getHeight"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'HuScratch',
    props: {
      width: {
        default: 300
      },
      height: {
        default: 185
      }
    },
    data() {
      return {
        id: new Date().getTime(),//获取唯一时间戳
      }
    },
    methods: {
      draw() {
        //获取我们canvas元素
        let canvas = document.getElementById(this.getId);
        //设置一个上下文为"2d"的画布
        let ctx = canvas.getContext("2d");

        //开始绘制一个涂满灰色的矩形，其中宽高为canvas的宽高
        ctx.save();
        ctx.fillStyle = "#666";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        let device = /android|iphone|ipad|ipod|webos|iemobile|opear mini|linux/i.test(navigator.userAgent.toLowerCase());  //判断是否是移动设备
        let startEvtName = device ? "touchstart" : "mousedown";
        let moveEvtName = device ? "touchmove" : "mousemove";
        let endEvtName = device ? "touchend" : "mouseup";

        function clear(event) {
          //获取鼠标或者手指距离屏幕的x坐标
          let x = device ? event.targetTouches[0].clientX : event.clientX;
          //获取鼠标或者手指距离屏幕的y坐标
          let y = device ? event.targetTouches[0].clientY : event.clientY;
          //获取canvas元素相对于视窗的位置
          let bbox = canvas.getBoundingClientRect();
          //开始绘制涂抹动作的canvas
          ctx.beginPath();
          //canvas的globalCompositeOperation属性指的是canvas中的合成操作
          //将该属性设置为"destination-out"会将在与canvas源不重叠的区域上保留目标，其他部分都变成透明
          ctx.globalCompositeOperation = "destination-out";
          //因为要模拟手机涂抹过程，所以涂抹的图形选择圆形，在这里绘制一个原型，半径为20px
          ctx.arc(x - bbox.left, y - bbox.top, 20, 0, Math.PI * 2, false);
          ctx.fill();
          ctx.closePath();
        }

        //监听开始即鼠标按下或者手指触摸时的事件
        canvas.addEventListener(startEvtName, (e) => {
          //禁止会引起屏幕滚动的事件
          e.preventDefault();
          canvas.addEventListener(moveEvtName, clear, false);
        }, false);

        //监听鼠标弹起或者手指离开屏幕的事件
        canvas.addEventListener(endEvtName, () => {
          //获取canvas全部的像素点，这里需要用到getImageData方法
          //getImageData(int x,int y,int width,int height)：该方法获取canvas上从(x,y)点开始，宽为width、高为height的图片区域的数据，该方法返回的是一个CanvasPixelArray对象，该对象具有width、height、data等属性。data属性为一个数组，该数组每4个元素对应一个像素点。
          let imageDate = ctx.getImageData(0, 0, canvas.width, canvas.height);
          //记录整个canvas所有像素点
          let allPX = imageDate.width * imageDate.height;
          //记录刮开的像素点个数
          let iNum = 0;
          //通过for循环判断刮开了多少个像素点
          for (let i = 0; i < allPX; i++) {
            if (imageDate.data[i * 4 + 3] == 0) {
              iNum++;
            }
          }
          //当刮开的像素点数量大于等于总像素点数量的40%时隐藏canvas
          if (iNum >= allPX / 2.5) {
            canvas.style.display = "none";

          }

        }, false);
      }
    },
    mounted() {
      this.draw();
    },
    computed: {
      getId() {
        return `canvas-${this.id}`
      },
      getWidth() {
        return Number(this.width)
      },
      getHeight() {
        return Number(this.height)
      }
    }
  }
</script>

<style scoped>

</style>
