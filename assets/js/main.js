const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Mail list',
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            mails: []
        }
    },


    methods: {


    },

    mounted() {


        for (let i = 0; i < 10; i++) {
            axios.get(this.url)
                .then(result => {
                    const email = result.data.response;
                    console.log(email);

                    this.mails.push(email);
                });
        }

    }

}).mount('#app')