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
        newfruit_display_error: [] 
    },
    methods: {
        AddFruit: function () {
            if(this.newfruit_name.length && this.newfruit_branch.length){
                this.fruits.push({
                    name: this.newfruit_name,
                    branch: this.newfruit_branch,
                    quantity: this.newfruit_quantity,
                    onsale: this.newfruit_onsale
                })
                this.newfruit_name = '';
                this.newfruit_branch = '';
                this.newfruit_quantity = 0;  
                this.newfruit_onsale = false;
                console.log('Name: ' + this.newfruit_name + ', Branch: ' + this.newfruit_branch + ', Quantity: ' + this.newfruit_quantity + ', Onsale: ' + this.newfruit_onsale)
            }else{
                this.newfruit_display_error = [];
                this.newfruit_display_error.push(
                    {error_name: 'New Fruit Fields Error', error_message: 'One or more fiels have an error.', error_code: "120001"}
                );
            }
        }
    }

}); 


