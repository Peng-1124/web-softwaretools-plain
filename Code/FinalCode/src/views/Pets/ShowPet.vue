<template>

    <el-container>
        <el-header>
            <el-row :gutter="10">
                <el-col :span="6">
                    <img src="static/img/logo.png" class="logo-style">
                </el-col>

                <el-col :span="2">
                    <el-select v-model="value" @change="selectChangeClicked(value)" style="margin-right: 24px;">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="6">
                    <el-input placeholder="Search a pet here" prefix-icon="el-icon-search" v-model="searchKeyWord">
                    </el-input>
                </el-col>

                <el-col :span="2">
                    <el-button class="search-button" @click="searchButtonClicked" icon="el-icon-search">Search
                    </el-button>
                </el-col>

                <el-col :span="6">
                    <el-row>
                        <el-button v-show="ShowFlag" type="primary" icon="el-icon-plus" circle
                                   @click="navigatePage('/pet/add')"
                        ></el-button>
                        <el-button type="success" icon="el-icon-refresh" circle @click="reset"></el-button>
                        <el-button type="info" icon="el-icon-shopping-cart-2" circle @click="navigatePage('/store')"
                        ></el-button>
                    </el-row>
                </el-col>

                <el-col :span="2">
                    <home-user class="user"/>
                </el-col>
            </el-row>
        </el-header>

        <el-main>
            <div class="body">
                <el-col class="app">
                    <el-row :gutter="24">
                        <el-col :span="12" class="information">
                            Here are the existing pets:
                        </el-col>
                        <el-col :span="6">
                            <el-input placeholder="Input tag here" v-model="filterTagString">
                            </el-input>
                        </el-col>
                        <el-col :span="2">
                            <el-button icon="el-icon-sort" @click="filterButtonClicked"></el-button>
                        </el-col>
                        <el-col :span="3" style="float: left;line-height: 40px;">
                            <el-row>
                                <el-button-group>
                                    <el-button type="success" round size="mini" icon="el-icon-bottom"
                                               @click="sortByPetId('DOWN')"
                                    ></el-button>
                                    <el-button type="primary" round size="mini" icon="el-icon-top"
                                               @click="sortByPetId('UP')"
                                    ></el-button>
                                </el-button-group>
                            </el-row>
                        </el-col>
                    </el-row>

                    <div style="margin-bottom: 24px;"></div>


                    <el-row :gutter="48">
                        <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="8"
                                v-for="item in showInfoList"
                                :key="item.id"
                        >
                            <el-card :body-style="{ padding: '0px',  border: 'none' }"
                                     style="border-radius: 25px; box-shadow: 0 10px 30px 0 rgba(248, 71, 86, 0.1); margin-bottom: 24px;"
                                     class="el-card-hover"
                            >
                                <img src="static/img/login-back.png" class="image">
                                <!-- <img :src="item.photoUrls[0]" class="image" alt=""> -->
                                <div style="padding: 14px;">
                                    <el-row :gutter="1">
                                        <el-col :span="18">
                                            <div class="ID-style">Name: {{ item.name }}</div>
                                            <div class="ID-style id-style2">Id: {{ item.id }}</div>
                                        </el-col>

                                        <el-col :span="6">

                                            <el-button v-show="ShowFlag"
                                                       size="mini" type="danger" class="pain-button"
                                                       icon="el-icon-delete"
                                                       @click="deleteButtonEnter(item)"
                                            >
                                            </el-button>
                                        </el-col>

                                    </el-row>

                                    <el-row :gutter="24">
                                        <el-col :span="4" class="tag-style" v-for="tagName in item.tags" :key="tagName">
                                            {{ tagName.name }}
                                        </el-col>
                                        <el-col :span="4" class="tag-style" v-show="ShowFlag">
                                            <el-button class="add-button" @click="addTagButtonEnter(item)">
                                                +
                                            </el-button>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>

                <el-dialog title="Delete" :visible.sync="deleteDialogVisible">
                    Do you want to delete this pet id = [{{ this.deleteItemId }}]?
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="deleteDialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="deleteButtonClicked">Yes</el-button>
                    </div>
                </el-dialog>

                <el-dialog title="Add Tag" :visible.sync="addTagDialogVisible">

                    <h2>Do you want to add this pet id = [{{ this.addTagItemId }}]?</h2>
                    <h2>Please input the tag.</h2>
                    <div style="margin-top: 20px;"></div>
                    <el-input label="tag" v-model="inputTag"></el-input>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="addTagDialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="addButtonClicked">Yes</el-button>
                    </div>
                </el-dialog>
            </div>

        </el-main>
    </el-container>


</template>

<script>
import HomeBread from '../layout/components/bread'
import HomeUser from '../layout/components/user'
import global from '../../utils/Global'

export default {
    name: 'ShowPet',
    components: {
        // HomeAside,
        HomeBread,
        HomeUser
    },
    data() {
        return {
            ShowFlag: false,
            counter: 0,
            options: [{
                value: '1',
                label: 'Id'
            }, {
                value: '2',
                label: 'Name'
            }, {
                value: '3',
                label: 'Fuzzy'
            }],
            value: '2',
            deleteDialogVisible: false,
            addTagDialogVisible: false,
            inputTag: '',
            // 宠物列表信息 -> 从服务器获取(会进行一次id的过滤处理)
            petInfoList: [
                {
                    'id': 9223372000001028000,
                    'category': {
                        'id': 0,
                        'name': 'string'
                    },
                    'name': 'doggie',
                    'photoUrls': [
                        'string'
                    ],
                    'tags': [
                        {
                            'id': 0,
                            'name': 'string'
                        }
                    ],
                    'status': 'available'
                }
            ],
            // 展示在页面上的宠物信息，通过tag、category、name或者某些过滤条件获取的信息
            showInfoList: [{
                'id': 9223372000001028000,
                'category': {
                    'id': 0,
                    'name': 'string'
                },
                'name': 'doggie',
                'photoUrls': [
                    'string'
                ],
                'tags': [
                    {
                        'id': 0,
                        'name': 'string'
                    }
                ],
                'status': 'available'
            }],
            // 在获取服务器数据的时候设置为true，表示正在获取数据
            fullscreenLoading: false,
            // 搜索的关键词
            searchKeyWord: '',
            // 过滤用的category
            filterCategoryString: '',
            // 过滤用的tag
            // filterTagString: 'string',
            // filterTagString: 'testtag2',
            filterTagString: '',
            // 查找的宠物名字
            queryPetName: '',

            addPetInfo: {},
            deleteItemId: 0,
            addTagItemId: 0

        }
    },

    mounted() {
        this.petInfoList = []
        this.showInfoList = []
        this.getStatusInfo()
        let userName = sessionStorage.getItem('userName');
        this.ShowFlag = userName.toLowerCase() === 'admin'
    },
    methods: {
        navigatePage(pagePath) {
            this.$router.push({ path: pagePath })
        },
        selectChangeClicked(e) {
            this.value = e
        },
        searchButtonClicked() {
            this.counter += 1
            if (this.searchKeyWord === '') {
                this.$message({
                    message: 'Warning, Please input key word!',
                    type: 'warning'
                })
            } else {
                // this.$message({
                //     message: 'You will search pet named ' + this.searchKeyWord,
                //     type: 'success'
                // })
                console.log(this.value)
                if (this.value === '2') {
                    this.queryPetName = this.searchKeyWord
                    this.findPetByName()
                    if (this.showInfoList.length === 0) {
                        this.$message({
                            message: 'But here are no pet named ' + this.searchKeyWord,
                            offset: 60
                        })
                    } else {
                        this.$message({
                            message: 'Here are some pets named ' + this.searchKeyWord,
                            offset: 60
                        })
                    }
                } else if (this.value === '1') {
                    this.queryPetName = parseInt(this.searchKeyWord)
                    console.log(this.queryPetName)
                    this.findPetById()
                    if (this.showInfoList.length === 0) {
                        this.$message({
                            message: 'But here are no pet Id ' + this.searchKeyWord,
                            offset: 60
                        })
                    } else {
                        this.$message({
                            message: 'Here are some pets Id ' + this.searchKeyWord,
                            offset: 60
                        })
                    }
                } else {
                    this.queryPetName = this.searchKeyWord
                    // console.log(this.queryPetName)
                    this.fuzzyQuery()
                    if (this.showInfoList.length === 0) {
                        this.$message({
                            message: 'Sorry, not found!',
                            offset: 60
                        })
                    } else {
                        this.$message({
                            message: 'Here are some pets name contains ' + this.searchKeyWord,
                            offset: 60
                        })
                    }
                }
            }
        },
        filterButtonClicked() {
            if (this.filterTagString === '') {
                this.$message({
                    message: 'Warning, Please input filter tag!',
                    type: 'warning'
                })
            } else {
                this.$message({
                    message: 'Filter pet tag is ' + this.filterTagString,
                    type: 'success'
                })
                this.filterPetByTag()
                if (this.showInfoList.length === 0) {
                    this.$message({
                        message: 'Sorry, no pets have this tag -> ' + this.filterTagString,
                        offset: 60
                    })
                } else {
                    this.$message({
                        message: 'These pets have this tag -> ' + this.filterTagString,
                        offset: 60
                    })
                }
            }
        },
        deleteButtonClicked() {
            this.deletePetTag()
            this.deleteDialogVisible = false
            // this.$router.go(0)
        },
        addTagButtonEnter(e) {
            this.addPetInfo = this.petInfoList.find(each => each.id === e.id)
            this.addTagItemId = this.addPetInfo.id
            this.inputTag = ''
            this.addTagDialogVisible = true
        },
        addButtonClicked() {

            this.addPetInfo.tags.push({
                id: this.addPetInfo.tags.length,
                name: this.inputTag
            })
            this.addNewTag(this.addPetInfo)
            this.addTagDialogVisible = false
        },
        // 获取available的宠物信息
        getStatusInfo() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            })
            this.$axios.get(
                '/pet/findByStatus?status=available'
            ).then((res) => {
                loading.close()
                this.petInfoList = res.data
                this.petInfoList = this.unique(this.petInfoList)
                this.showInfoList = this.petInfoList

                // this.filterPetByCategory()
                // this.filterPetByTag()
                // this.sortByPetId()

            }).catch(

            )
        },
        // 通过category筛选宠物
        filterPetByCategory() {
            this.showInfoList = this.petInfoList.filter(
                each => each.category.name === this.filterCategoryString
            )
        },

        // 删除宠物的标签
        deletePetTag() {
            this.showInfoList = this.showInfoList.filter(
                (item) => item.id !== this.deleteItemId
            )
            this.$axios.delete('/pet/' + this.deleteItemId, {
                'Content-Type': 'application/json',
                'api_key': 'root'
            }).then((res) => {
                console.log(res.data)
                this.showInfoList = this.showInfoList.filter(
                    (item) => item.id !== this.deleteItemId
                )
                // console.log(newArr)
                // this.showInfoList = newArr
            }).catch(

            )
        },
        // 给宠物添加一个新的标签
        addNewTag(newInfo) {
            console.log('start')
            this.$axios.put(
                '/pet',
                newInfo,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((res) => {
                // maybe I don't need this response...
                console.log(res.data)
            }).catch(

            )
        },
        // 通过id来给宠物排序
        sortByPetId(way) {
            if (way.toUpperCase() === 'UP') {
                this.showInfoList.sort((a, b) => {
                    return (a.id - b.id)
                })
            } else {
                this.showInfoList.sort((a, b) => {
                    return (b.id - a.id)
                })
            }
        },
        // 通过tag进行宠物筛选
        filterPetByTag() {
            let tempArray = []
            for (let i = 0; i < this.petInfoList.length; i++) {
                if (this.petInfoList[i].hasOwnProperty('tags')) {
                    if (this.petInfoList[i].tags.length >= 1) {
                        for (let j = 0; j < this.petInfoList[i].tags.length; j++) {
                            if (this.petInfoList[i].tags[j].name === this.filterTagString) {
                                tempArray.push(this.petInfoList[i])
                            }
                        }
                    }
                }
            }
            this.showInfoList = tempArray
        },
        // 模糊查询
        fuzzyQuery() {
            this.showInfoList = this.petInfoList.filter(
                item => (item.name.toLowerCase()).indexOf(this.queryPetName.toLowerCase()) > -1
            )
        },
        // 通过名字查找宠物
        findPetByName() {
            this.showInfoList = this.petInfoList.filter(
                each => each.name === this.queryPetName
            )
        },
        // 通过名字查找宠物
        findPetById() {
            this.showInfoList = this.petInfoList.filter(
                each => each.id === this.queryPetName
            )
        },
        // Reset 清除过滤或者查询条件，显示原始数据
        reset() {
            this.showInfoList = this.petInfoList
            this.searchKeyWord = ''
            this.filterTagString = ''
            this.$message({
                message: 'Reset',
                type: 'success'
            })
        },

        deleteButtonEnter(item) {
            this.deleteItemId = item.id
            this.deleteDialogVisible = true
        },

        inputNewTag() {
            this.$prompt('Please input tag', 'Info', {
                confirmButtonText: 'Yes',
                cancelButtonText: 'Cancel',
                // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                // inputErrorMessage: 'ERROR'
                beforeClose: true,
                callback: (action, instance) => {
                    let length = this.addPetInfo.tags
                    this.addPetInfo.tags.push({
                        'id': length,
                        'name': instance.inputValue
                    })
                    if (action === 'confirm') {
                        console.log('confirm')
                        console.log(this.addPetInfo)
                        this.addNewTag(this.addPetInfo)
                    }
                }

            }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: 'Your input is : ' + value
                })

            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Cancel'
                })
            })

        },

        unique(remoteInfo) {
            if (!Array.isArray(remoteInfo)) {
                console.log('type error!')
                return
            }
            let flag = true
            let result = []
            for (let i = 0; i < remoteInfo.length; i++) {
                for (let j = 0; j < result.length; j++) {
                    // console.log('hello')
                    if (result[j].id === remoteInfo[i].id) {
                        flag = false
                        // console.log('error' + j + '->' + remoteInfo[i].id)
                        break
                    }
                }
                if (flag) {
                    result.push(remoteInfo[i])
                    // console.log(i + '->' + remoteInfo[i].id)
                }
                flag = true
            }
            return result
        },

        defaultImg() {
            return 'this.src="static/img/cat01.jpg"'
        }

    }
}
</script>

<style scoped>
.body {
    height: 100%;
}

.show-header {
    margin-bottom: 20px;
    width: calc(100% - 230px);
    height: 10%;
    position: fixed;
    z-index: 2;
}

.app {
    margin-top: 80px;
    width: 100%;
    height: 30%;
    /*margin-left: 10%;*/
    /*margin-right: 10%;*/
    padding-right: 10%;
    padding-left: 10%;
    overflow-y: auto;
    overflow-x: hidden;
}

.outer-box {
    border-radius: 25px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    height: 200px;
    border: 2px black;
    background: #ffffff;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 12px 12px 2px 1px rgba(56, 56, 86, 0.2);
    transition: all 0.6s;
}

.outer-box:hover {
    transform: scale(1.2);
}

.info-box {
    margin-top: 9px;
    margin-left: 24px;
}

.information {
    font-size: 28px;
    margin-left: 1%;
}

.pet-photo {

    margin-left: 6px;
    height: 72px;
    width: 72px;
    border-radius: 50%;
    border: 2px solid black;
}

.ID-style {
    font-size: 18px;
    /*max-width: 100px;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tag-style {
    margin-left: 4%;
    margin-top: 2%;
    font-size: 16px;
    height: 36px;
    width: 72px;
    border-radius: 25px;
    border: 1px solid #565EFF;
    background-color: #565EFF;
    text-align: center;
    line-height: 36px;
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #ffffff;
}

.id-style2 {
    font-size: 15px;
    color: #999;
    margin-top: 4px;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.add_pet_logo {
    height: 38px;

}

.svg-button {
    border: None;
    padding: 2px;
    background-color: transparent;
}

.add-button {
    border: None;
    padding: 2px;
    background-color: transparent;
    font-size: 18px;
    color: #ffffff;
}

.delete-button {
    border: None;
    padding: 2px;
    background-color: transparent;
    font-size: 18px;
    color: #931919;
}


.search_pet_logo {
    height: 38px;
    /*float: left;*/
    /*margin-left: 26px;*/
}

.delete-button-svg {
    height: 38px;
}

.pain-button {
    float: right;
    margin-top: 2px;
    margin-right: 2px;
}

.el-card-hover {
    transition: all 0.6s;
}

.el-card-hover:hover {
    transform: scale(1.2);
}

.logo-style {
    /*float: left;*/
    line-height: 50px;
}

.user {
    float: right;

}

</style>
