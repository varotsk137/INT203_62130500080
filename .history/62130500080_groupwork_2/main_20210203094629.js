const app = {
    data() {
        return {
            msg: 'Hello, Vue3'
        }
    }

}


var mountedApp = Vue.createApp(app).mount('#app');