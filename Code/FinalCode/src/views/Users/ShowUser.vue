<template>
    <el-container>
        <el-header class="header_ui">
            <el-row :gutter="10">
                <el-col :span="22">
                    <img class="logo_style" src="static/img/logo.png" alt="">
                </el-col>

                <el-col :span="2">
                    <home-user class="user"/>
                </el-col>
            </el-row>

        </el-header>
        <div class="store-app">
            <el-card style="margin-top: 20px;">
                <el-row>

                    <el-col :span="24">

                        <div class="user-info">
                            <el-tag>ID</el-tag>
                            {{ this.getUserNameRes.id }}
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <div class="user-info">
                            <el-tag>Name</el-tag>
                            {{ this.getUserNameRes.username }}
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <div class="user-info">
                            <el-tag>First name</el-tag>
                            {{ this.getUserNameRes.firstName }}
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <div class="user-info">
                            <el-tag>Last name</el-tag>
                            {{ this.getUserNameRes.lastName }}
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <div class="user-info">
                            <el-tag>Password</el-tag>
                            {{ this.getUserNameRes.password }}
                        </div>
                    </el-col>

                    <el-col :span="24">
                        <div class="user-info">
                            <el-tag>Email</el-tag>
                            {{ this.getUserNameRes.email }}
                        </div>
                    </el-col>

                    <el-col :span="24">
                       <el-button type="danger" @click="navigatePage('/pet/show')">Back</el-button>
                    </el-col>

                </el-row>
            </el-card>
        </div>


    </el-container>

</template>

<script>
import global from '../../utils/Global'
import HomeUser from '../layout/components/user'

export default {
    name: 'ShowUser',
    components: {
        HomeUser
    },
    data() {
        return {
            postUserLists:
                [
                    {
                        'id': 0,
                        'username': 'string',
                        'firstName': 'string',
                        'lastName': 'string',
                        'email': 'string',
                        'password': 'string',
                        'phone': 'string',
                        'userStatus': 0
                    },
                    {
                        'id': 1,
                        'username': 'string',
                        'firstName': 'string',
                        'lastName': 'string',
                        'email': 'string',
                        'password': 'string',
                        'phone': 'string',
                        'userStatus': 0
                    }
                ]
            ,
            postUserListRes: {},

            getUserNameRes: {},

            putUserInfo: {
                'id': 1,
                'username': Math.random() * 1000000,
                'firstName': Math.random() * 1000000,
                'lastName': Math.random() * 1000000,
                'email': Math.random() * 1000000 + '@qq.com',
                'password': 'string',
                'phone': 'string',
                'userStatus': 0
            },
            putUserInfoRes: {},

            getUserLoginRes: {},

            getUserLogoutRes: {},

            postUserArrayRes: {},

            newUserInfo: {
                'id': 1,
                'username': Math.random() * 1000000,
                'firstName': Math.random() * 1000000,
                'lastName': Math.random() * 1000000,
                'email': Math.random() * 1000000 + '@qq.com',
                'password': 'string',
                'phone': 'string',
                'userStatus': 0
            },
            newUserInfoRes: {}

        }
    },

    mounted() {
        // Why I must request this api twice?
        this.getUserName()
        this.getUserName()
    },
    methods: {
        navigatePage(pagePath) {
            this.$router.push({ path: pagePath })
        },
        postUserList() {
            this.$axios.post(
                '/user/createWithList',
                this.postUserLists,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                console.log(res)
                this.postUserListRes = res.data
            }).catch(

            )
        },
        getUserName() {
            let userName = sessionStorage.getItem("userName")
            this.$axios.get(
                '/user/' + userName,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                console.log(res.data)
                this.getUserNameRes = res.data
            }).catch(
            )
        },
        putUserName() {
            this.$axios.put(
                '/user/string',
                this.putUserInfo,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                console.log(res)
                this.putUserInfoRes = res.data
            }).catch(

            )
        },
        getUserLogin() {
            this.$axios.get(
                'user/login?' +
                'username=' + 'string' + '&' +
                'password=' + 'string',
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                console.log(res.data)
                this.getUserLoginRes = res.data
            }).catch(
            )
        },
        getUserLogOut() {
            this.$axios.get(
                '/user/logout',
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                console.log(res.data)
                this.getUserLogoutRes = res.data
            }).catch(
            )

        },
        postUserArray() {
            this.$axios.post(
                '/user/createWithArray',
                this.postUserLists,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                console.log(res)
                this.postUserArrayRes = res.data
            }).catch(

            )

        },
        postNewUser() {
            this.$axios.post(
                '/user',
                this.newUserInfo,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                console.log(res)
                this.newUserInfoRes = res.data
            }).catch(

            )
        }

    }
}
</script>

<style scoped>
.store-app {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 80px;
}

.user{
    float: right;
}

.card-style {
    margin-top: 20px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    max-height: 300px;
    overflow: auto
}

.user-info {
    font-size: 18px;
    margin-bottom: 20px;
}
</style>
