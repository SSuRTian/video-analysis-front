<template>
    <!--此页面是【用户信息管理页面】-->
    <div>
        <!-- <el-container  style="height: 700px; border: 1px solid #eee"> 头部标题栏
            <el-header style="font-size:40px; background-color: rgb(238, 241, 246)"> SkyMu天目银行视频监测系统</el-header>
            <el-container>
                <el-aside width="230px" style="border: 1px solid #eee"> 侧边栏
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
                </el-aside> -->


        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>此处是选中用户名</span> <!--这里根据实际选中的用户名进行自动调整-->
        </el-header>

        <el-main>
            <!-- 主要部分表格 -->
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column label="序号" type="index" width="100">
                </el-table-column>
                <el-table-column prop="name" label="用户名" width="300"></el-table-column>
                <el-table-column prop="nickname" label="昵称" width="180">
                    <!-- <template slot-scope="scope">
                        <img :src="scope.row.image" width="100px" height="70px">
                    </template> -->
                </el-table-column>
                <el-table-column prop="email" label="邮箱" width="140">
                    <!-- <template slot-scope="scope">
                        {{ scope.row.gender == 1 ? '男' : '女' }}
                    </template> -->
                </el-table-column>
                <!-- <el-table-column prop="job" label="职位" width="140"></el-table-column> -->
                <el-table-column prop="right" label="权限"></el-table-column>
                <!-- <el-table-column prop="updatetime" label="最后操作时间" width="230"></el-table-column> -->
                <!-- <el-table-column label="操作">
                    <el-button type="primary" size="mini">编辑</el-button>
                    <el-button type="danger" size="mini">删除</el-button>
                </el-table-column> -->
            </el-table>

            <br>

            <!-- 分页条 -->
            <!-- Pagination 分页 -->
            <!-- <el-pagination background layout="total,sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" :total="1000"></el-pagination> -->

            <!--
            @size-change，pageSize 改变时会触发
            @current-change ， currentPage 改变时会触发
            :current-page 当前页码
            :page-sizes  选择每页显示个数
            :page-size  默认每页显示条目个数，支持 .sync 修饰符
            layout 组件布局，
            :total 总条目数
            -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
                :page-sizes="[5, 10, 15, 20]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>

        </el-main>
        <!-- </el-container>
    </el-container> -->
    </div>
</template>

<script>
//杨dh part
export default {
    name: 'UserManageIndex',
    data() {


        return {
            tableData: [{
                name: '',
                nickname: '',
                email: '',
                right: ''
            }], // table中的data


            newsData: [], //存放接收后端的数据
            queryItem:[],
            pageNum: 1, // 当前页 默认设值1
            pageSize: 5, // 每页显示条目 默认设置5
            total: '',// 条目总数
        }
    },
    methods: {
        queryTable() {
            this.$store.dispatch('user/index', )
                .then(response => {
                    list = response.data.list;
                    page = response.data.page;


                })
                .catch(function (error) {
                    this.$message({ message: "获取失败" + error, type: "error" });
                });
        }
    },
    mounted() {
        queryTable;
    }
}
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>