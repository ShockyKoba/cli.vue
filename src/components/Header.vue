
<!-- ++++++++++++++++++++| TEMPLATE |++++++++++++++++++++ -->
<template>

  <div class="title main">
    <h1>{{ header.title }}</h1>
  </div>

  

  <div v-if="title_options == 'true'" class="title actions">
		<CRUDTitle 
			button-action="create" 
			@method="createTitle"
		/>

		<CRUDTitle 
			button-action="update" 
			@method="updateTitle"
		/>

		<CRUDTitle 
			button-action="delete" 
			@method="deleteTitle"
		/>
  </div>


</template>
<!-- ++++++++++++++++++| END TEMPLATE |++++++++++++++++++ -->





<!-- ++++++++++++++++++++| SCRIPTS |++++++++++++++++++++ -->
<script>

// ~~~~~~| CONFIG |~~~~~~
import CRUDTitle from './CRUDTitle'

export default {
    name: 'Header',
    components: {
        CRUDTitle
    },
    data () {
        return {
            header: {
                title: this.title_content
            }
        }
    },
    props: {
        title_content: {
					type: String,
					default: 'VueJS Title'
				},
				title_options: {
					type: String,
					default: false
				}
    },
    methods: {
        deleteTitle(){
            console.log('Delete Title Start');
            this.header.title = '';
            console.log('Delete Title Ends');
        },
        createTitle(){
            console.log('Create Title Start');
            this.header.title = this.title_content;
            console.log('Create Title Ends');
        },
        updateTitle(){
						console.log('Update Title Start');

						let newTitle = null;
						do{
							newTitle = prompt('Enter the new title: ');
							console.log(newTitle);
							if( newTitle == null ){
								break;
							}
						}while(newTitle.trim() == '');

						if( newTitle != null ){
							this.header.title = newTitle;
						}

						
						
            console.log('Update Title Ends');
        }
    }
}

</script>
<!-- ++++++++++++++++++| END SCRIPTS |++++++++++++++++++ -->





<!-- ++++++++++++++++++++| STYLES |++++++++++++++++++++ -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



.title{
    margin: 40px 0 0;
    text-align: center;
    font-weight: bold;
}

.title.main{
    color: #42b983;
}

.title.actions{
  display: flex;
  flex-direction: row;
	justify-content: center;
}




</style>
<!-- ++++++++++++++++++| END STYLES |++++++++++++++++++ -->