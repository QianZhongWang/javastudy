import {Http} from "../utils/http";

class Banner {
    static locationb = 'b-1'
    static async getHomeLocationB() {
        return await Http.request({
            url: `/banner/name/${Banner.locationb}`
        })
    }
}
export {
    Banner
}
