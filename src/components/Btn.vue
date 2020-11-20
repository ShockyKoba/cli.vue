<template>
    <span>
        <button 
            @click="modifyCount({statement: action, quantity: quantity})" 
            :disabled="button_disabled"
        >
            {{ ButtonText }}
        </button>
    </span>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Btn',
    data () {
        return {
            button_disabled: true
        }
    },
    methods: {
        ...mapActions(['modifyCount']),
    },
    props: {
        action: {
            type: String,
            default: 'none'
        },
        quantity: {
            type: Number,
            default: 1
        }
    },
    computed: {
        ButtonText: function () {
            if( this.action == "add" ){
                this.button_disabled = false;
                return 'Count ++';
            }else if( this.action == "remove"){
                this.button_disabled = false;
                return 'Count --';
            }
            this.button_disabled = true;
            return 'Disabled';
        }
    }
}
</script>

<style scoped>

</style>