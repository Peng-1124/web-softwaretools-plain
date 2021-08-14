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
        <el-main>
            <div class="app">
                <strong class="Add-info-style">This is add pet page</strong>

                <el-row :gutter="36">
                    <el-col :lg="4" class="add-pic-style">
                        Add Picture:
                        <div style="margin-bottom: 20px;"></div>
                    </el-col>
                    <el-col :lg="20">
                        <el-upload
                            list-type="picture-card"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove"
                        >
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        <div style="margin-bottom: 20px;"></div>
                    </el-col>

                    <el-col :lg="4" class="pet-name-style">
                        Pet name:
                        <div style="margin-bottom: 20px;"></div>
                    </el-col>

                    <el-col :lg="20">
                        <el-input v-model="inputName"></el-input>
                        <div style="margin-bottom: 20px;"></div>
                    </el-col>

                    <el-col :lg="4" class="pet-name-style">
                        Add label:
                        <div style="margin-bottom: 20px;"></div>
                    </el-col>

                    <el-col :lg="20">
                        <el-tag
                            :key="tag"
                            v-for="tag in dynamicTags"
                            closable
                            :disable-transitions="false"
                            @close="handleClose(tag)"
                        >
                            {{ tag }}
                        </el-tag>
                        <el-input
                            class="input-new-tag"
                            v-if="inputVisible"
                            v-model="inputValue"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleInputConfirm"
                            @blur="handleInputConfirm"
                        >
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                        <div style="margin-bottom: 20px;"></div>
                    </el-col>

                    <el-col :lg="4">
                        <el-button @click="okButtonClicked" type="primary">Ok</el-button>
                        <el-button @click="navigatePage('/pet/show')" type="danger">Back</el-button>
                    </el-col>


                </el-row>


            </div>

        </el-main>
    </el-container>


</template>

<script>
import HomeUser from '../layout/components/user'

export default {
    name: 'AddPet',
    components: {
        HomeUser
    },
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            dynamicTags: [],
            inputVisible: false,
            inputValue: '',
            inputName: ''
        }
    },
    mounted() {
        // this.addPet()
    },
    methods: {
        navigatePage(pagePath) {
            this.$router.push({ path: pagePath })
        },
        okButtonClicked() {
            this.addPet()
        },
        handleRemove(file, fileList) {
            console.log(file, fileList)
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        },
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
        },

        showInput() {
            this.inputVisible = true
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus()
            })
        },

        handleInputConfirm() {
            let inputValue = this.inputValue
            if (inputValue) {
                this.dynamicTags.push(inputValue)
            }
            this.inputVisible = false
            this.inputValue = ''
        },

        addPet() {
            if (this.inputName === '') {
                this.$notify({
                        title: 'Error',
                        message: 'You must input pet name'
                    }
                )
                return
            }

            let addPetInfo = {
                'id': Math.ceil((Math.random() * 10000000)).toString(),
                'category': {
                    'id': 0,
                    'name': 'string'
                },
                'name': this.inputName,
                'photoUrls': [
                    'string'
                ],
                'tags': [],
                'status': 'available'
            }
            for (let i = 0; i < this.dynamicTags.length; i++) {
                addPetInfo.tags.push({
                    'id': addPetInfo.tags.length, 'name': this.dynamicTags[addPetInfo.tags.length]
                })
            }
            console.log(addPetInfo)
            this.$axios.post(
                '/pet',
                addPetInfo,
                { headers: { 'Content-Type': 'application/json' } }
            ).then(res => {
                    this.$notify({
                            title: 'Success',
                            message: 'You add pet named ' + this.inputName
                        }
                    )
                }
            )
        }

    }

}
</script>

<style scoped>
.app {
    margin-top: 80px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
}

.Add-info-style {
    color: darkred;
    font-size: 24px;
}

.add-pic-style {
    line-height: 146px;
    font-size: 18px;
}

.pet-name-style {
    line-height: 40px;
    font-size: 18px;
}

.el-tag + .el-tag {
    margin-left: 10px;
}

.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
}

.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
}

.user {
    float: right;

}
</style>
