const app = {
    data() {
        return {
            msg: 'Hello, Vue3'
        }
    }

}
Vue.createApp(app).mount('#app')

let body = document.getElementById("body");
let i = Math.floor(Math.random() * 8 + 1);

function changeImage() {
    i++;
    if(i==9) i=1;
    let attr = "background-image: url(images/bg_imgs/" + i + ".jpg);";
    body.setAttribute("style", attr);
    setTimeout(changeImage, 7000);
}

changeImage();