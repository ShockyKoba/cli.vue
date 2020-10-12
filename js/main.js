'use strict'

let intro = 'Welcome message... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate lobortis nisl, eget molestie ex consectetur non. Nulla facilisi. Integer hendrerit lectus nec nisi blandit pharetra. Quisque nec quam placerat, blandit quam sed, vestibulum mauris. Quisque volutpat blandit tellus nec facilisis. Ut pulvinar egestas luctus. Donec tincidunt erat arcu, egestas commodo leo venenatis at. Nullam sodales, neque nec venenatis pulvinar, lorem dui elementum nunc, et rutrum tellus elit vitae nulla. Quisque a aliquet nibh. Nunc libero diam, dictum in viverra maximus, dignissim in purus. Nulla ultrices ex vitae purus fringilla, eget feugiat massa consectetur. Nunc nec libero justo. Nullam bibendum magna nec fermentum sagittis. Etiam malesuada eros felis. Praesent pellentesque est quis tellus mattis vulputate. In euismod mollis dolor eget tincidunt.'



// CUSTOM FUNCTIONS
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}


// const fetchData = async() => {
//     try{
//         const fetchPokemons = await fetch('https://pokeapi.co/api/v2/pokemon/');
//         const data = await fetchPokemons.json();

//         let pokemons = data.results.map(pkmon => pkmon.name )

//         return pokemons;
        
//     } catch (e) {
//         return 'Error: ' + e;
//     }
// }
// fetchData().then(response => {
//     console.log(response);
// });

const app = Vue.createApp({
    el: '#app',
    data () {
        return{
            home: {
                title: {
                    content: 'Pokemon!',
                    class: 'title pokemon-title'
                },
                welcome: {
                    message: intro,
                    class: 'welcome-message'
                }
                
            }
        }
    },
    
});
