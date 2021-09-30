<template>   
    <div class="bg-blue-200 py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div class="flex bg-gray-100 rounded-lg overflow-hidden">

                <!-- Content Start Here -->
                <div class="bg-white py-6 sm:py-8 lg:py-12 cc-container">
                    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                        <!-- text - start -->
                        <div class="mb-10 md:mb-16">
                            <h2 class="text-gray-800 text-2xl lg:text-2xl font-bold text-left mb-4 md:mb-6"><font-awesome-icon icon="fa-brands fa-accusoft" /> Stages</h2>
                        </div>
                        <h2 class="text-gray-800 text-2xl lg:text-2xl font-bold text-left mb-4 md:mb-6">Sign up</h2>
                        <!-- text - end -->

                        <!-- form - start -->
                        <form @submit.prevent="submitForm" class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
                            <div>
                                <input v-model="fname" name="first-name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" placeholder="First name*"/>
                            </div>

                            <div>
                                <input v-model="lname" name="last-name" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" placeholder="Last name*"/>
                            </div>

                            <div class="sm:col-span-2">
                                <input v-model="email" name="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" placeholder="Email*"/>
                            </div>

                            <div class="sm:col-span-2">
                                <input v-model="password" name="password" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" placeholder="Create password*"/>
                            </div>

                            <div class="text-left">
                                <p>Password must be atleast 8 characters long</p>
                            </div>

                            <div class="sm:col-span-2 flex justify-between items-center">
                                <a href="#" class="w-full bg-blue-700 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</a>
                            </div>

                            <p class="text-black text-xs text-left">
                                Already a member? <a href="#" class="hover:text-indigo-500 active:bg-blue-700 underline transition duration-100">Sign In</a>.
                            </p>
                        </form>
                        <!-- form - end -->
                    </div>
                </div>
                <!-- Content End Here -->

                <!-- image - start -->
                <div class="sm:w-1/3 lg:w-1/2 hidden sm:block bg-blue-700 relative cc-container text-white">
                    <div class="text-left">
                        <h1 class="text-5xl py-5">Explore your cretivity</h1>
                        <p>Discover new skills, meet passionates teachers and become a part of the most helpful community of creatives in the world.</p>
                    </div>
                </div>
            <!-- image - end -->
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                fname: '',
                lname: '',
                email: '',
                password: '',
            }
        },
        methods: {
            submitForm() {
                this.$axios.post('/api/users', {
                    fname: this.fname,
                    lname: this.lname,
                    email: this.email,
                    password: this.password
                })
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>


<!-- Styles -->
<style>

    .cc-container{
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        padding: 10%;
    }

</style>