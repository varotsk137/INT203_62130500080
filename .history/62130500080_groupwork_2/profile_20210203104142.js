const app = {
    data() {
        return {
                bg: "./images/bg.png"
            ,   me: "./images/me.jpg"
            
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