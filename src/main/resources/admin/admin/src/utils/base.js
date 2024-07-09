const base = {
    get() {
        return {
            url : "http://localhost:8080/xiangqinwangzhan/",
            name: "xiangqinwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiangqinwangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "相亲网站"
        } 
    }
}
export default base
