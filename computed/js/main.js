var app = new Vue({
    el: '#app',
    data: {
        title: 'Computed',
        message: 'lorem impsum dolor siamet asdn neder',
        count: 0
    },
    methods: {
        addCount () {
            this.count++
        },
        removeCount () {
            if(!this.count == 0){
                this.count--
            }
        }
    },
    computed: {
        inverted () {
            return this.message.split('').reverse().join('');
        },
        color () {
            return {
                'bg-danger' : this.count <= 33,
                'bg-primary' : this.count > 33 && this.count < 66,
                'bg-success' : this.count >= 66  
            }
                      
        }
    }
});