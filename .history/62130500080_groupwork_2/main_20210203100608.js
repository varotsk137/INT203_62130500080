const app = {
    data() {
        return {
            msg: 'Hello, Vue3'
        }
    }
    create() {
        console.log("message is: "+msg)
    }

}


var mountedApp = Vue.createApp(app).mount('#app');