<template>
    <el-container style="overflow-x: hidden;overflow-y: hidden">
        <el-header class="header_ui">
            <img class="logo_style" src="static/img/logo.png" alt="">
        </el-header>

        <el-main class="main_ui">
            <el-row :gutter="20" type="flex" justify="space-around">

                <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" style="text-align:center">
                    <div style="margin-bottom: 300px;"></div>
                    <img class="img_style" src="static/img/login-back.png" alt="">
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div style="margin-bottom: 300px;"></div>
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
                                        <el-button round v-on:click="signInButtonClicked" type="primary">
                                            Sign in
                                        </el-button>
                                    </el-col>

                                    <el-col>
                                        <el-button round @click="dialogFormVisible = true" type="info">
                                            Register
                                        </el-button>
                                    </el-col>
                                </el-row>
                            </el-form-item>
                        </div>

                    </el-form>
                </el-col>
            </el-row>


        </el-main>
        <el-dialog title="Register" :visible.sync="dialogFormVisible" width="30%">
            <el-form label-position="left" :model="registerFormData" :rules="rules" ref="registerFormData"
                     class="demo-ruleForm"
            >
                <el-form-item label="User name" :label-width="formLabelWidth" prop="username" class="register-col">
                    <el-input v-model="registerFormData.username"></el-input>
                </el-form-item>

                <el-form-item label="First name" :label-width="formLabelWidth" prop="firstName" class="register-col">
                    <el-input v-model="registerFormData.firstName" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="Last name" :label-width="formLabelWidth" prop="lastName" class="register-col">
                    <el-input v-model="registerFormData.lastName"></el-input>
                </el-form-item>

                <el-form-item label="Email" :label-width="formLabelWidth" prop="email" class="register-col">
                    <el-input v-model="registerFormData.email" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="Password" prop="password" :label-width="formLabelWidth" class="register-col">
                    <el-input type="password" v-model="registerFormData.password"></el-input>
                </el-form-item>

                <el-form-item label="Check password" prop="checkPassword" :label-width="formLabelWidth"
                              class="register-col"
                >
                    <el-input type="password" v-model="registerFormData.checkPassword"></el-input>
                </el-form-item>

                <el-form-item label="Phone" :label-width="formLabelWidth" prop="phone" class="register-col">
                    <el-input v-model="registerFormData.phone" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button type="success" @click="registerButtonClicked">Ok</el-button>
                <el-button type="danger" @click="dialogFormVisible = false">Cancel</el-button>
            </div>
        </el-dialog>

        <!--        <div id="poster">-->


    </el-container>
</template>

<script>
import global from '../../utils/Global'

const fs = require('fs')

export default {
    name: 'Login',
    data() {

        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password'))
            } else {
                if (this.registerFormData.checkPassword !== '') {
                    this.$refs.registerFormData.validateField('checkPassword')
                }
                callback()
            }
        }
        let validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password again!'))
            } else if (value !== this.registerFormData.password) {
                callback(new Error('The two passwords are inconsistent!'))
            } else {
                callback()
            }
        }

        return {
            loginForm: {
                username: '',
                password: ''
            },
            responseResult: [],

            dialogFormVisible: false,
            registerFormData: {
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                checkPassword: '',
                phone: ''
            },

            rules: {
                username: [
                    { required: true, message: 'Please input the user name', trigger: 'blur' }
                ],
                firstName: [
                    { required: true, message: 'Please input the first name', trigger: 'blur' }
                ],
                lastName: [
                    { required: true, message: 'Please input the last name', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: 'Please input the email address', trigger: 'blur' },
                    { type: 'email', message: 'Please input the correct email address', trigger: ['blur', 'change'] }
                ],
                password: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                checkPassword: [
                    { required: true, validator: validatePass2, trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: 'Please input the phone number', trigger: 'blur' }
                ]

            },
            formLabelWidth: '130px'
        }
    },
    methods: {
        signInButtonClicked() {
            this.$axios.get('/user/login?' +
                'username=' + this.loginForm.username + '&' +
                'password=' + this.loginForm.password,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                console.log(res.data)
                this.getUserLoginRes = res.data

                if (this.getUserLoginRes.code === 200) {
                    global.userName = this.loginForm.username
                    sessionStorage.setItem('userName', this.loginForm.username);
                    this.$router.push('/pet/show')
                } else {
                    this.$message({
                        message: 'Reset',
                        type: 'success'
                    })
                }
            }).catch(
            )
        },
        registerButtonClicked() {
            let formData = {
                'id': Math.ceil((Math.random() * 10000000)).toString(),
                'username': this.registerFormData.username,
                'firstName': this.registerFormData.firstName,
                'lastName': this.registerFormData.lastName,
                'email': this.registerFormData.email,
                'password': this.registerFormData.password,
                'phone': this.registerFormData.phone,
                'userStatus': '0'
            }

            this.$axios.post('/user',
                formData,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                if (res.data.code === 200) {
                    this.$message(
                        'Register success!'
                    )
                }

            }).catch(

            )
            this.dialogFormVisible = false
            this.registerFormData.username = ''
            this.registerFormData.firstName = ''
            this.registerFormData.lastName = ''
            this.registerFormData.email = ''
            this.registerFormData.password = ''
            this.registerFormData.checkPassword = ''
            this.registerFormData.phone = ''
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
    /*background: url("/static/img/login-background.jpg") no-repeat;*/
    background: white;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
}

.main_ui {
    background-color: white;
    overflow-x: hidden;
    overflow-y: hidden;
}

.header_ui {
    background-color: white;
    border: none;
    /*border: #606060 solid 1px;*/
    box-shadow: 2px 2px 2px 2px rgba(83, 83, 215, 0.2);
    z-index: 2;
}

.logo_style {
    height: 46px;
    margin-left: 270px;
}

.img_style {
    display: inline-block;
    /*margin-top: 10%;*/
    /*margin-left: 20%;*/
    height: 324px;
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*margin: auto;*/
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
    color: rgba(32, 91, 80, 0.88);
    line-height: 70px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.login-container {
    background: white;
    border-radius: 15px;
    background-clip: padding-box;
    width: 350px;
    height: 230px;
    padding-bottom: 40px;
    box-shadow: 0 0 20px #e1c8c8;
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

.register-col {
    margin-bottom: 24px;
}
</style>
