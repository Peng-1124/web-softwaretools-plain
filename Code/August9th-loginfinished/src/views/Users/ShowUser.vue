<template>
    <div class="store-app">
        <el-row>
            <el-col :span="12">
                <el-card class="card-style" header="POST /user/createWithList">
                    <el-button @click="this.postUserList">POST USER LISTS</el-button>
                    <h1>{{ this.postUserListRes }}</h1>
                </el-card>
            </el-col>

            <el-col :span="12">
                <el-card class="card-style" header="GET /user/{username}">
                    <el-button @click="this.getUserName">获取string用户名</el-button>
                    <h1>{{ this.getUserNameRes }}</h1>
                </el-card>
            </el-col>

            <el-col :span="12">
                <el-card class="card-style" header="PUT /user/{username}">
                    <el-button @click="this.putUserName">PUT SOME FORM DATA</el-button>
                    <h1>{{ this.putUserInfoRes }}</h1>
                </el-card>
            </el-col>

            <el-col :span="12">
                <el-card class="card-style" header="GET /user/login?{username}={#}&{password}={#}">
                    <el-button @click="this.getUserLogin">LOGIN IN [USERNAME=string&PASSWORD=string]</el-button>
                    <h1>{{ this.getUserLoginRes }}</h1>
                </el-card>
            </el-col>

            <el-col :span="12">
                <el-card class="card-style" header="GET /user/logout">
                    <el-button @click="this.getUserLogOut">LOGIN OUT</el-button>
                    <h1>{{ this.getUserLogoutRes }}</h1>
                </el-card>
            </el-col>

            <el-col :span="12">
                <el-card class="card-style" header="POST /user/createWithArray">
                    <el-button @click="this.postUserArray">POST ARRAY</el-button>
                    <h1>{{ this.postUserArrayRes }}</h1>
                </el-card>
            </el-col>

            <el-col :span="12">
                <el-card class="card-style" header="POST /user">
                    <el-button @click="this.postNewUser">Create New User</el-button>
                    <h1>{{ this.newUserInfoRes }}</h1>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
    name: 'ShowUser',
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

    },
    methods: {
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
            this.$axios.get(
                '/user/' + "string",
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
    margin: auto;
}

.card-style {
    margin-top: 20px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    max-height: 300px;
    overflow: auto
}
</style>
