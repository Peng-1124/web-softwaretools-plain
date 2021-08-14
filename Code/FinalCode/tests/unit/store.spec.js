import axios from 'axios'

describe('Store test', () => {
    it('store inventory test', async(done) => {
        axios.get(
            'https://petstore.swagger.io/v2/store/inventory'
        ).then((res) => {
            done()
            // console.log(res.data)
            expect(res.data).not.toBeNull()
        }).catch(res => {
                done()
            }
        )
    })

})
