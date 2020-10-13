app.component('get-pokemons', {
    props: {
        quantity: {
            type: Number,
            default: 150
        }
    },
    template: /* html */`


        <section class="pokemons">
            <div class="pokemons-wrapper">
            

                <div class="pokemon" v-for="(pokemon, index) in pokemons" :title="pokemon.name + ' - ' + index">
                    <a :href=" '/pokemon?id=' + pokemon.name">
                        <div class="pokemon-wrapper">
                            <div class="image">
                                <figure>
                                    <img :src="pokemon.image" :alt="pokemon.name">
                                </figure>
                                <span class="count">
                                    {{index + 1}}
                                </span>
                            </div>
                            <div class="title">
                                <h4> {{pokemon.name}} </h4>
                            </div>
                        </div>
                    </a>
                </div>


            </div>
        </section>


    `,
    data () {
        return {
            info: null,
            pokemons: []
        }
    },
    mounted () {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?limit=' + this.quantity)
            .then( response => {
                this.info = response.data.results
            })
            .then( response => {

                this.info.forEach(element => {
                    axios
                    .get('https://pokeapi.co/api/v2/pokemon/' + element.name)
                    .then( response => {
                        let pokemonData = response.data;
                        let pokemonObject = {
                            name: pokemonData.name,
                            image: pokemonData.sprites.front_default
                        }
                        this.pokemons.push(pokemonObject);

                        // console.log(this.pokemons);
                    })
                });

            })
    }
});