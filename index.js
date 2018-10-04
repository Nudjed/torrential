import styles from './src/styles.css'
import Modal from './src/components/Modal.vue'
import Slider from './src/components/Slider.vue'

Vue.component('modal', Modal);
Vue.component('slider', Slider);

new Vue({
    el: '#app',
    data: {
        showModal: false,
        signup: '',
        signupSubmitted: false,
    },
    methods: {
        show() {
            this.showModal = true
            var client = new KeenAsync({
                projectId: '5b7fbd45c9e77c00017839ea',
                writeKey: '011F77F1C01BE9B23CAA51C0F55DB1309B7ED9CF9BAC37E18A44D2A32E33B21809D14B106FF873BD057355F5A627926CF2686B57BE6B81BB87AFE3AB7B7BBED80DDC7E3138FD3442161C361092FE21BB502BA978A1466C521570A4B2E76829CD'
            });

            client.recordEvent('model', { title: document.title});
        },
        encode(data) {
            return Object.keys(data)
                .map(
                    key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                )
                .join('&');
        },
        handleNewsletterSubmit () {

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({ 'form-name': 'newsletter', 'email': this.signup }),
            })
                .then(() => { this.signup = ''; this.signupSubmitted = true})
                .catch(error => alert(error));
        },
    }
})

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-120854931-2');
