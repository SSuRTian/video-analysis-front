<!--该文件为视频添加缩略图-->
<template>
    <div>
      <div id="dplayer-container"></div>
    </div>
  </template>

<script>
import DPlayer from 'dplayer';
import 'dplayer/dist/DPlayer.min.css';
import 'dplayer/dist/DPlayer.min.js';

export default {
  mounted() {
    const dp = new DPlayer({
      container: document.getElementById('dplayer-container'),
      video: {
        url: "http://rxh8bkp1a.hd-bkt.clouddn.com/video7.mp4?e=1688964653&token=8O1Cf39AS9FKQjhWkMi2sFH2pkSXgF8O38XREvzH:vSLOgJLXO7LWOVdOmTa5PHdur_Q=",
        // other video options...
      },
      thumbnails: {
        enabled: true,
        container: '#dplayer-container',
        type: 'webp',
        url: 'path_to_thumbnails_file.thumbnails',
      },
    });
  }
}
</script>