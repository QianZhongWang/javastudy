import {Http} from "../utils/http";

class Category {
    static async getGridCategory() {
        return await Http.request({
            url:"/category/all"
        })
    }

}
export {
    Category
}