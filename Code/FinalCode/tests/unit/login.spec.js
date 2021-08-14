import axios from 'axios'

// 测试登录注册的函数
describe('Login page test', () => {
    it('Login api test', async (done) => {

        let username = 'admin'
        let password = 'admin'

        axios.get('https://petstore.swagger.io/v2/user/login?' +
            'username=' + username + '&' +
            'password=' + password,
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            done()
            expect(res.data.code).toEqual(200)
        })
    })

    it('Register & delete user', async (done) => {
        let formData = {
            'id': Math.ceil((Math.random() * 10000000)).toString(),
            'username': 'test-test',
            'firstName': 'test-test',
            'lastName': 'test-test',
            'email': 'test-test@gmail.com',
            'password': 'test-test',
            'phone': 'test-test',
            'userStatus': '0'
        }

        axios.post('https://petstore.swagger.io/v2/user',
            formData,
            { headers: { 'Content-Type': 'application/json' } }
        ).then((res) => {
            done()
            expect(res.data.code === 200).toBeTruthy()

        }).catch(
            done()
        )

        // 删除一下测试的数据
        axios.delete(
            'https://petstore.swagger.io/v2/user/' + formData.username,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(
            done()
        ).catch(
            done()
        )

    })
})
