/*
* 将小程序内置的非promise API 转换为promise
* */
const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res)
                },
                fail: (error) => {
                    reject(error)
                }
            });
            func(args)
        })
    }
}
//代理模式
export {
    promisic
}