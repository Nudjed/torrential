<template>
<transition name="modal">
        <div style="position: fixed; z-index: 9998; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0,.5); display: table; transition: opacity .3s ease;">
            <div class="table-cell display: align-middle ">

                <div class="bg-grey-lightest rounded mx-auto p-4 w-70 relative" style="box-shadow: 0 2px 8px rgba(0,0, 0, .33); transition: all .3s ease;">

                    <a class="absolute pin-t pin-l mt-2 ml-2" href="#" @click.prevent="$parent.showModal = false">
                        <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs></defs>
                            <g id="Landing-Page" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Welcome-modal" transform="translate(-14.000000, -15.000000)" fill="#B4C3FF">
                                    <g id="icon/cancel" transform="translate(10.000000, 11.000000)">
                                        <path d="M12.7604167,9.81413841 L17.3639764,5.21057864 C18.1775687,4.39698636 19.4966624,4.39698636 20.3102547,5.21057864 C21.123847,6.02417091 21.123847,7.34326462 20.3102547,8.15685689 L15.7066949,12.7604167 L20.3102547,17.3639764 C21.123847,18.1775687 21.123847,19.4966624 20.3102547,20.3102547 C19.4966624,21.123847 18.1775687,21.123847 17.3639764,20.3102547 L12.7604167,15.7066949 L8.15685689,20.3102547 C7.34326462,21.123847 6.02417091,21.123847 5.21057864,20.3102547 C4.39698636,19.4966624 4.39698636,18.1775687 5.21057864,17.3639764 L9.81413841,12.7604167 L5.21057864,8.15685689 C4.39698636,7.34326462 4.39698636,6.02417091 5.21057864,5.21057864 C6.02417091,4.39698636 7.34326462,4.39698636 8.15685689,5.21057864 L12.7604167,9.81413841 Z" id="Combined-Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <div class="modal-header">
                        <slot name="header ">
                            <h3 class="text-indigo-darker text-center mt-4">Thanks for your interest!</h3>
                        </slot>
                    </div>

                    <div class="modal-body" style="margin: 20px 0;">
                        <slot name="body">
                            <p class="leading-normal text-center">We’re not quite ready for paying users, but we will be very soon.</p>
                            <p class="leading-normal text-center mt-3">To join the Torrential waiting list, add your email below.</p>

                            <form name="interest" method="POST" @submit.prevent="handleSubmit()" netlify netlify-honeypot="bot-field">
                                <p class="hidden">
                                    <label>Don’t fill this out if you're human:
                                        <input name="bot-field" />
                                    </label>
                                </p>
                                <input type="hidden" name="form-name" value="interest" />

                            <div class="py-4" v-if="!submitted">
                                <label class="block uppercase tracking-wide text-grey text-xs mb-2" for="email">
                                    Your Email
                                </label>

                                <input v-model="email" id="email" type="email" name="email" class="text-lg appearance-none bg-white rounded w-full mb-1 p-3 border  border-indigo-lighter  border-8 hover:border-blue-lighter"
                                    placeholder="hello@you.tld" value="" required="">

                                <div class="text-black mt-4">
                                    <input class="mr-4 border border-indigo-lighter p-2" type="checkbox" id="consent" name="consent" value="consent" required>
                                    <label for="consent" class="mb-6 text-sm">
                                        I consent to the
                                        <a class="text-indigo hover:text-indigo-dark" href="https://torrential.app/privacy" target="_blank">privacy policy</a> and
                                        <a class="text-indigo hover:text-indigo-dark" href="https://torrential.app/terms" target="_blank">terms &amp; conditions</a>
                                    </label>
                                    <p class="text-red text-lg mt-3 italic  hidden ">You must consent to our privacy policy and terms &amp; conditions to use Torrential.</p>
                                </div>
                            </div>

                            <div class="py-2" v-if="!submitted">
                                <button type="submit" class="block w-full text-lg bg-indigo-dark mt-4 hover:bg-blue-dark text-white py-3 px-8 rounded">Sign Up</button>
                            </div>

                            <div v-if="submitted" class="py-4 lg:mt-1 lg:flex-1">
                                <p class="text-3xl text-green text-center">Thank you for signing up to our newsletter.</p>
                            </div>
                        </form>

                        </slot>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                submitted: false,
            }
        },
         methods: {
            encode(data) {
                return Object.keys(data)
                    .map(
                        key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                    )
                    .join('&');
            },
            handleSubmit() {

                fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: this.encode({ 'form-name': 'interest', 'email': this.email }),
                })
                .then(() => { this.email = ''; this.submitted = true})
                .catch(error => alert(error));
            },
        },

        mounted() {
            // console.log('Component mounted.')
        }
    }
</script>
