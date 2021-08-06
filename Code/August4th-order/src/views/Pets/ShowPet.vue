<template>

    <div class="body">
        <div class="show-header">
            <el-card>
                <!--  搜索栏  -->
                <el-row>
                    <el-col :span="4">&emsp;</el-col>
                    <el-col :span="4">
                        <el-button @click="navigatePage('/pet/add')" style="float: right;  margin-right: 24px;"
                                   class="svg-button"
                        >
                            <img class="add_pet_logo" src="static/icons/add.svg" alt="">
                        </el-button>
                    </el-col>
                    <el-col :span="8">
                        <el-input placeholder="Search" v-model="searchKeyWord">
                        </el-input>
                    </el-col>
                    <el-col :span="4">
                        <el-button @click="searchButtonClicked" style="float: left;  margin-left: 24px;"
                                   class="svg-button"
                        >
                            <img class="search_pet_logo" src="static/icons/search.svg" alt="">
                        </el-button>
                        <el-button @click="reset" style="float: left;  margin-left: 24px;"
                                   class="svg-button"
                        >
                            <img class="search_pet_logo" src="static/icons/Tick.svg" alt="">
                        </el-button>
                    </el-col>
                    <el-col :span="4">&emsp;</el-col>
                </el-row>

                <!-- 排序、筛选栏-->
                <el-row>
                    <el-col :span="4">
                       &emsp;
                    </el-col>
                    <el-col :span="4">
                        <el-button @click="navigatePage('/pet/add')" style="float: right;  margin-right: 24px;"
                                   class="svg-button"
                        >
                            <img class="add_pet_logo" src="static/icons/filter.svg" alt="">
                        </el-button>
                    </el-col>
                    <el-col :span="8">
                        <el-input placeholder="Filter String" v-model="filterCategoryString">
                        </el-input>
                    </el-col>
                    <el-col :span="4">
                        <el-button @click="sortByPetId('UP')">
                            升序排序
                        </el-button>

                        <el-button @click="sortByPetId('DOWN')">
                            降序排序
                        </el-button>
                    </el-col>
                    <el-col :span="4">&emsp;</el-col>
                </el-row>
            </el-card>
        </div>

        <el-col class="app">
            <el-row :gutter="24">
                <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="8" v-for="item in showInfoList"
                        :key="item.id"
                >
                    <el-col class="outer-box">
                        <el-row :gutter="24">
                            <el-col :span="4">
                                <img class="pet-photo" src="static/img/login-background.jpg" alt="">
                            </el-col>

                            <el-col :span="16">
                                <el-row :gutter="24">
                                    <el-col :span="24" class="ID-style info-box">
                                        ID: {{ item.id }}
                                    </el-col>
                                    <el-col :span="24" class="ID-style info-box">
                                        name: {{ item.name }}
                                    </el-col>
                                </el-row>
                            </el-col>

                            <el-col :span="4">
                                <!--                                <el-button type="danger">-->
                                <img class="search_pet_logo" src="static/icons/delete.svg" alt="">
                                <!--                                </el-button>-->
                            </el-col>
                        </el-row>

                        <el-row :gutter="24">
                            <el-col :span="4" class="tag-style" v-for="tagName in item.tags" :key="tagName">
                                {{ tagName.name }}
                            </el-col>
                        </el-row>

                    </el-col>
                </el-col>
            </el-row>
        </el-col>
    </div>

</template>

<script>
export default {
    name: 'ShowPet',

    data() {
        return {
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
            filterCategoryString: 'string',
            // 过滤用的tag
            // filterTagString: 'string',
            // filterTagString: 'testtag2',
            filterTagString: 'testtag1',
            // 查找的宠物名字
            queryPetName: 'doogie'
        }
    },

    mounted() {
        this.petInfoList = []
        this.showInfoList = []
        this.getStatusInfo()

    },
    methods: {
        navigatePage(pagePath) {
            this.$router.push({ path: pagePath })
        },
        searchButtonClicked() {
            if (this.searchKeyWord === '') {
                this.$message({
                    message: 'Warning, Please input key word!',
                    type: 'warning'
                })
            } else {
                this.$message({
                    message: 'Your will search pet named ' + this.searchKeyWord,
                    type: 'success'
                })
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
            }
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
        // .通过category筛选宠物
        filterPetByCategory() {
            this.showInfoList = this.petInfoList.filter(
                each => each.category.name === this.filterCategoryString
            )
        },
        // TODO: 2.删除宠物的标签
        deletePetTag() {

        },
        // TODO: 3.给宠物添加一个新的标签
        addNewTag() {

        },
        // TODO: 4.通过id来给宠物排序
        sortByPetId(way) {
            if(way.toUpperCase()==="UP") {
                this.showInfoList.sort((a, b) => {
                    return (a.id - b.id)
                })
            }else{
                this.showInfoList.sort((a, b) => {
                    return (b.id - a.id)
                })
            }
        },
        // 5.通过tag进行宠物筛选
        filterPetByTag() {
            let tempArray = []
            console.log(this.petInfoList.length)
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
        // TODO: 6.模糊查询（正则表达式）
        fuzzyQuery() {

        },
        // 7.通过名字查找宠物
        findPetByName() {
            this.showInfoList = this.petInfoList.filter(
                each => each.name === this.queryPetName
            )
        },
        // Reset 清除过滤或者查询条件，显示原始数据
        reset() {
            this.showInfoList = this.petInfoList
            this.searchKeyWord = ''
            this.$message({
                message: 'Reset',
                type: 'success'
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
    width: 100%;
    height: 10%;
    position: fixed;
    z-index: 2;
}

.app {
    margin-top: 160px;
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
}

.tag-style {
    margin-left: 4%;
    margin-top: 2%;
    font-size: 16px;
    height: 36px;
    width: 72px;
    border-radius: 25px;
    border: 1px solid greenyellow;
    background-color: greenyellow;
    text-align: center;
    line-height: 36px;
    max-width: 100px;
    overflow: hidden;

}


.add_pet_logo {
    height: 38px;

}

.svg-button {
    border: None;
    padding: 2px;
    background-color: transparent;
}


.search_pet_logo {
    height: 38px;
    /*float: left;*/
    /*margin-left: 26px;*/
}


</style>
