import axios from 'axios'

describe('Pet test', () => {
    it('Find available pet test', (done) => {
        axios.get(
            'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
        ).then((res) => {
            done()
            expect(res.data.length).toBeGreaterThan(0)
        }).catch(
            done()
        )
    })

    it('Filter name & id Test', (done) => {
        let petInfoList = []

        axios.get(
            'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
        ).then((res) => {
            done()
            petInfoList = res.data
            expect(res.data.length).toBeGreaterThan(0)
        }).catch(
            done()
        )

        let filterTest = petInfoList.filter(each => each.id === 1234)
        expect(filterTest.length <= petInfoList.length).toBeTruthy()

        filterTest = petInfoList.filter(each => each.name === 'doggie')
        expect(filterTest.length <= petInfoList.length).toBeTruthy()

    })

    it('Filter tag test',  (done) => {
        let petInfoList = []

        axios.get(
            'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
        ).then((res) => {
            done()
            petInfoList = res.data
            expect(res.data.length).toBeGreaterThan(0)
        }).catch(
            done()
        )

        let tempArray = []
        for (let i = 0; i < petInfoList.length; i++) {
            if (petInfoList[i].hasOwnProperty('tags')) {
                if (petInfoList[i].tags.length >= 1) {
                    for (let j = 0; j < petInfoList[i].tags.length; j++) {
                        if (petInfoList[i].tags[j].name === 'string') {
                            tempArray.push(petInfoList[i])
                        }
                    }
                }
            }
        }
        expect(tempArray.length <= petInfoList.length).toBeTruthy()

    })

    it('Add & Delete pet test', async(done) => {
        let id = Math.ceil((Math.random() * 10000000))
        let addPetInfo = {
            'id': id,
            'category': {
                'id': 0,
                'name': 'string'
            },
            'name': 'test-unit-pet',
            'photoUrls': [
                'string'
            ],
            'tags': [
                {
                    'id': 0,
                    'name': 'tag1'
                }
            ],
            'status': 'available'
        }

        axios.post(
            'https://petstore.swagger.io/v2/pet',
            addPetInfo,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(res => {
                done()
                // console.log(res.data)
                expect(res.data.id).toEqual(id)
            }
        ).catch(res=>{

        })

        axios.delete('https://petstore.swagger.io/v2/pet/' + id, {
            'Content-Type': 'application/json',
            'api_key': 'root'
        }).then(res=>{
            done()
            expect(res.data.code).toEqual(200)
        }).catch(res=>{

        })
    })

    it('',()=>{

    })
})


