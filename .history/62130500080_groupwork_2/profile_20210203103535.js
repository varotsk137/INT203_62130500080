const app = {
    data() {
        return {
            msg: 'Hello, Vue3'
        }
    }
    ,created() {
        console.log("message is: "+this.msg)
    }
    , updated (){
        console.log("message change to: "+this.msg)
    }
    

}


var mountedApp = Vue.createApp(app).mount('#app');