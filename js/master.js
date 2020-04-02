const app = new Vue({
    el: '#app',
    data: {
        title: 'Welcome!',
        fruits: [
            {name: 'apple', branch: 'Hello', quantity: 12, onsale: true}, 
            {name: 'peach', branch: 'Kitty', quantity: 24, onsale: false}, 
            {name: 'lemon', branch: 'Lex', quantity: 60, onsale: true}
        ],
        newfruit_name: '',
        newfruit_branch: '',
        newfruit_quantity: 0,
        newfruit_onsale: false,
        newfruit_error: ''
    },
    methods: {
        addfruit () {
            console.log(this.newfruit_name + ' - ' + this.newfruit_quantity + ' - ' + this.newfruit_onsale)
            this.fruits.push({
                name: this.newfruit_name,
                quantity: this.newfruit_quantity,
                onsale: this.newfruit_onsale
            })
        }
    }

}); 


