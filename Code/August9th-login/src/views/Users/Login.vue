<template>
    <div id="poster">
        <el-form class="login-container" label-position="left" label-width="40px">

            <h3 class="login-title">Pet-Store</h3>

            <div class="empty"></div>

            <div class="login-form">

                <el-form-item class="user-input">
                    <el-input auto-complete="off" placeholder="Account" prefix-icon="el-icon-user"
                              type="text"
                              v-model="loginForm.username"
                    ></el-input>
                </el-form-item>

                <el-form-item class="password-input">
                    <el-input auto-complete="off" placeholder="Password" prefix-icon="el-icon-lock"
                              type="password"
                              v-model="loginForm.password"
                    ></el-input>
                </el-form-item>

                <el-form-item>
                    <el-row type="flex" justify="space-around">
                        <el-col>
                            <el-button round v-on:click="login" type="primary">
                                Sign in
                            </el-button>
                        </el-col>

                        <el-col>
                            <!--                            <el-button round v-on:click="login" class="login-button" type="primary">-->
                            <el-button round v-on:click="login" type="primary">
                                Register
                            </el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </div>

        </el-form>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            dialogTableVisible: false,
            dialogFormVisible: false,
            responseResult: []
        }
    },
    methods: {
        login() {
            this.$axios.get('/user/login?' +
                'username=' + this.loginForm.username + '&' +
                'password=' + this.loginForm.password,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                console.log(res.data)
                this.getUserLoginRes = res.data
                if (this.getUserLoginRes.code === 200) {
                    this.$router.push('/pet/add')
                    // this.$username = this.loginForm.username
                    // console.log(this.$username)
                } else {
                    this.$message({
                        message: 'Reset',
                        type: 'success'
                    })
                }
            }).catch(
            )
        }

    }
}
</script>

<style scoped>

* {
    font-size: 16px;
    margin: 0;
    padding: 0;
}

#poster {
    background: url("/static/img/login-background.jpg") no-repeat;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
}


a {
    text-decoration: none;
    color: #ffffff;
}

.login-title {
    width: 100%;
    height: 70px;
    font: 26px/1.4 "microsoft yahei";
    text-align: center;
    text-indent: 0;
    letter-spacing: 3px;
    color: rgba(244, 255, 253, 0.88);
    line-height: 70px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.login-container {
    background: rgba(246, 220, 206, 0.30);
    border-radius: 15px;
    background-clip: padding-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 350px;
    height: 230px;
    padding-bottom: 40px;
}

.input-content /deep/ .el-input__inner {
    border: none;
    background: rgba(223, 225, 246, 0.3);
    color: black;
}

.empty {
    margin-bottom: 20px;
}

.form input {
    width: 370px;
    height: 40px;
    border-radius: 10px;
    /* float: right; */
    border: 1px solid #333333;
    outline: none;
}

.login-button {
    width: 50%;
    background-color: #0D1329;
    color: white;
    margin-left: 50px;
    border: none;
}

.user-input {
    margin-bottom: 20px;
    width: 90%;
}

.password-input {
    margin-bottom: 20px;
    width: 90%;
}

.form span {
    display: block;
    float: right;
}
</style>
