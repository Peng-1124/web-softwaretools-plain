<template>
    <div class="store-app">
        <el-row>
            <el-col :span="12">
                <el-card class="card-style" header="GET /store/inventory">
                    <el-button @click="this.getStoreInventory">获取库存</el-button>
                    <h1>{{ this.statusCodes }}</h1>
                </el-card>
            </el-col>

            <el-col :span="12">
                <el-card class="card-style" header="GET /store/order/2">
                    <el-button @click="this.getStoreOrder">获取Order 这个有的时候有404 不知道为什么</el-button>
                    <h1>{{ this.purcaseOrder }}</h1>
                </el-card>
            </el-col>

            <el-col :span="12">
                <el-card class="card-style" header="POST /store/order">
                    <el-button @click="this.postStoreOrder">POST ORDER</el-button>
                    <h1>{{ this.res }}</h1>
                </el-card>
            </el-col>

<!--            <el-col :span="12">-->
<!--                <el-card class="card-style" header="GET /store/order/2">-->
<!--                    <el-button @click="this.getStoreOrder">获取Order</el-button>-->
<!--                    <h1>{{ this.purcaseOrder }}</h1>-->
<!--                </el-card>-->
<!--            </el-col>-->
        </el-row>


    </div>
</template>

<script>
export default {
    name: 'ShowStore',
    data() {
        return {
            statusCodes: {},
            purcaseOrder: {},
            searchContext: '',
            pestsId: '1',
            res:{},
            testFormData: {
                'id': 0,
                'petId': 0,
                'quantity': 0,
                'shipDate': '2021-07-30T09:16:32.098Z',
                'status': 'placed',
                'complete': true
            }
        }
    },

    mounted() {

    },
    methods: {
        goAddPetPage() {
            this.$router.push({ path: '/pet/add' })
        },
        getStoreInventory() {
            this.$axios.get(
                '/store/inventory'
            ).then((res) => {
                console.log(res.data)
                this.statusCodes = res.data
            }).catch(

            )
        },
        getStoreOrder() {
            this.$axios.get(
                '/store/order/2',
                {headers: {'Content-Type': 'application/json'}}
            ).then((res) => {
                console.log(res.data)
                this.purcaseOrder = res.data
            }).catch(
                this.purcaseOrder = { 'code': '404' }
            )
        },
        postStoreOrder() {
            let postData = new FormData()
            for (let key in this.testFormData) {
                postData.append(key, this.testFormData[key])
            }
            this.$axios.post(
                '/store/order',
                this.testFormData,
                {headers: {'Content-Type': 'application/json'}}
            ).then((res)=> {
                console.log(res)
                this.res = res.data
            })
            .catch()
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
