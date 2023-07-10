<template>
    <!--此界面用于上传可疑人员照片，使其能被识别出并被实时追踪-->
    <!--此页面应当归属于管理员界面，黑名单人员管理，但是具体逻辑还没确定，只是先做个页面-->

    <!-- <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container> -->
    <div>
        <el-container  style="height: 700px; border: 1px solid #eee"> <!--头部标题栏-->
            <el-header style="font-size:40px; background-color: rgb(238, 241, 246)"> SkyMu天目银行视频监测系统</el-header>
            <el-container>
                <el-aside width="230px" style="border: 1px solid #eee"> <!--侧边栏-->
                    <!--这里侧边栏内容有问题，因为本上传照片页面隶属于管理员界面下的黑名单管理，所以侧边栏不应该是
                    主界面的侧边栏。但是目前页面逻辑还没设计，所以侧边栏先这么写着-->
                    <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>通用界面</template>
                            <el-menu-item index="1-1">实时视频监控</el-menu-item>
                            <el-menu-item index="1-2">报警信息查看</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-message"></i>管理员界面</template>
                            <el-menu-item index="2-1">用户权限管理</el-menu-item>
                            <el-menu-item index="2-2">人员白名单</el-menu-item>
                            <el-menu-item index="2-3">人员黑名单</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-main>  <!--上传黑名单人员照片的主体页面-->
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :before-uploade="beforeAvatarUpload"
                        :show-file-list="true"
                        multiple
                        :limit="1000"  
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">请上传至少3张黑名单人员照片（jpg/png/imag/jpeg文件,且不超过10MB）</div>
                    </el-upload>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
    data() {
        name: "dangerImgIndex"
      return {  //这里根据图片具体地址进行修改
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
         {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前不限制选择文件个数，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg/png';
        const isLt2M = file.size / 1024 / 1024 < 10;

        if (!isJPG) {
          this.$message.error('上传图片格式错误!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 10MB!');
        }
        return isJPG && isLt2M;
    }
  }
}
</script>

<style></style>