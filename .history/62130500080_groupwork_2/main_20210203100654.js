const app = {
    data() {
        return {
            msg: 'Hello, Vue3'
        }
    }
    created() {
        console.log("message is: "+this.msg)
    }

}


var mountedApp = Vue.createApp(app).mount('#app');