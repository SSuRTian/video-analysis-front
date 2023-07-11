<!--这个页面是用于视频回放，没有报错不知道为什么输入网页路径‘/videoPlay’的时候不显示-->
<template>
    <div>
        <!--组件使用-->
        <d-player ref="player" :options="dplayerOptions"></d-player>
    </div>
</template>

<script>
// 引入<d-player>组件
    import DPlayer from 'dplayer'
//import { VideoPlayer } from 'vue-video-player';
export default {
  components: {
    'd-player': DPlayer
  },
  name: 'VideoPlayer.Index',
  data() {
    return {
      dplayerOptions: { 
        theme: '#b7daff',  // 风格颜色，例如播放条，音量条的颜色
        loop: false,  // 是否自动循环
        lang: 'zh-cn',  // 语言，'en', 'zh-cn', 'zh-tw'
        screenshot: true,  // 是否允许截图（按钮），点击可以自动将截图下载到本地
        hotkey: true,  // 是否支持热键，调节音量，播放，暂停等
        preload: 'auto',  // 自动预加载
        volume: 0.7,  // 初始化音量
        logo: require('@/assets/background/registerbg.jpg'),  // 在视频左脚上打一个logo
        video: {
          url: "http://rxh8bkp1a.hd-bkt.clouddn.com/video7.mp4?e=1688964653&token=8O1Cf39AS9FKQjhWkMi2sFH2pkSXgF8O38XREvzH:vSLOgJLXO7LWOVdOmTa5PHdur_Q=", // 播放视频的路径
          quality: [  // 设置多个质量的视频
            {
              name: 'HD',
              url: 'http://47.105.206.28/videos/wangkun.mp4',
              type: 'auto',  // 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或 其他自定义类型
            },
            {
              name: 'SD',
              url: 'http://47.105.206.28/videos/wangkun.mp4',
              type: 'auto',
            }
          ],
          defaultQuality: 0,  // 默认是HD
          pic: "https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png",  // 视频封面图片
          thumbnails: <DPlayerWithThumbnails />  // 进度条上的缩略图,需要通过dplayer-thumbnails来生成
        },
        subtitle: {
          url: 'http://www.baidu.com',
          fontSize: '20px',
          bottom: '50%',
        },
        danmaku: {   // 弹幕
          id: '9E2E3368B56CDBB4',
          api: 'https://api.prprpr.me/dplayer/',
          token: 'tokendemo',
          maximum: 1000,
          addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
          user: 'DIYgod',
          bottom: '15%',
          unlimited: true
        },
        contextmenu: [  // 右键菜单
          {
            text: 'custom1',
            link: 'https://www.bilibili.com'
          },
          {
            text: 'custom2',
            click: (player) => {
              console.log(player);
            }
          }
        ],
        highlight: [  // 进度条时间点高亮
          {
            text: '10M',
            time: 600,
          },
          {
            text: '20M',
            time: 1200,
          },
        ],
    }
  }
}
}
</script>

