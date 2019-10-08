### 根据内容大小动态显示展开收起

> 下面是基于 vue 写的，直接上代码&#10084;

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      .wrapper {
        height: 120px;
        padding: 0 5px;
        color: black;
        overflow: hidden;
        position: relative;
        transition: height 0.5s ease-in-out;
      }
      .wrapper > .content {
        height: 100%;
        width: 100%;
      }
      .wrapper > .arrow-down {
        width: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
        text-align: center;

      }
      .arrow-down-container {
        position: relative;
        background-color: rgba(255, 255, 255, 0.7);
      }
      .arrow-down-container::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 30px;
        left: 0;
        z-index: -1;
        filter: blur(20px);
        /* margin: -30px; */
      }
      img {
        vertical-align: middle;
        transition-duration: 0.3s;
      }
    </style>
  </head>
  <body>
    <div id="app" class="wrapper" ref="wrapper">
      <div class="content" ref="content">
        {{ content }}
      </div>
      <div
        ref="arrowDown"
        class="arrow-down"
        v-if="hiddenDetail"
        @click="lookAllData"
      >
        <div class="arrow-down-container">
          <img
            ref="arrowPng"
            width="20"
            height="20"
            src="arrow-down.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <script>
      new Vue({
        el: '#app',
        data: {
          content: '',
          hiddenDetail: false,
          lookAll: true
        },
        created() {
          this.getData()
        },
        mounted() {},
        methods: {
          getData() {
            setTimeout(() => {
              let r1 =
                'f附件是浪费就是了的解放拉萨解放历史交锋封建势力附件里是基辅罗斯解放了f附件是浪费就是了的解放拉萨解放历史交锋封建势力附件里是基辅罗斯解放了f附件是浪费就是了的解放拉萨解放历史交锋封建势力附件里是基辅罗斯解放了f附件是浪费就是了的解放拉萨解放历史交锋封建势力附件里是基辅罗斯解放了f附件是浪费就是了的解放拉萨解放历史交锋封建势力附件里是基辅罗斯解放了'
              let r2 = '附件是浪费就罗斯福奖励十分激烈'
              this.content = r1
              this.$nextTick(() => {
                const clientHeight =
                  document.documentElement.clientHeight ||
                  document.body.clientHeight
                const wrapper = this.$refs.wrapper
                const content = this.$refs.content
                this.hiddenDetail = content.scrollHeight > wrapper.clientHeight
                console.log(
                  content.clientHeight,
                  content.scrollHeight,
                  wrapper.scrollHeight,
                  wrapper.clientHeight
                )
                if (!this.hiddenDetail) {
                  wrapper.style.height = '100%'
                  wrapper.style.marginBottom = '0'
                }
              })
            }, 1500)
          },
          lookAllData() {
            const wrapperEle = this.$refs.wrapper
            const arrowDownEle = this.$refs.arrowDown
            const arrowPngEle = this.$refs.arrowPng
            if (this.lookAll) {
              const wrapperScrollHeight = wrapperEle.scrollHeight
              wrapperEle.style.height = `${wrapperScrollHeight + 20}px`
              // arrowDownEle.style.position = 'static'
              // arrowDownEle.style.paddingTop = '0'
              arrowPngEle.style.transform = `rotate(180deg)`
              this.lookAll = false
            } else {
              wrapperEle.style.height = '120px'
              arrowDownEle.style.position = 'absolute'
              arrowPngEle.style.transform = `rotate(0deg)`
              this.lookAll = true
            }
          }
        }
      })
    </script>
  </body>
</html>

```
