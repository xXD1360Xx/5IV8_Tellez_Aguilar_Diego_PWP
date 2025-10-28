/*
Este un ejemplo de una api rest utilizando una llamada con fetch, 
el cual sirve para obtner infomrmación sorbe el tipo de api, en este caso pokemon. 
Y obtener su estructura a partir de crear una funcion callback con una promesa
*/

const pokeApiUrl = 'https://pokeapi.co/api/v2/';

//vamos a crear una funcion para obetener todos los datos de la pokedex, para esto 
//tenemos que imaginar el orden y la obtención de los datos

const pokedex = () => {
    //primero necesitamos obtener todas las estadisticas del pokemon, 
    //asi que necesitamos crear un diccionario para obtener cada uno de los elemtnos del front para depsues vaciar los datos
    const pokemonStatsElementos={
        hp=document.getElementById('pokemonStatHp'),
        attack=document.getElementById('pokemonStatAttack'),
        defense=document.getElementById('pokemonStatDefense'),
        specialAttack=document.getElementById('pokemonStatSpecialAttack'),
        specialDefense=document.getElementById('pokemonStatSpecialDefense'),
        speed=document.getElementById('pokemonStatSpeed')
    };

    //necesitamos un auxiliar que nos permita utilizar la clase del tipo de pokemon
    let curreTypeClass='null';

    //tiene que cambiar los elemmntos de la imagen. vamos a crear un template que se encargue de encadenar los datos
    const imageTemplate="<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay'/>";

    //necesiamo un objeto que se encargue de guardar las rutas d elas imagenes que vamos a camiar depnediend de si es un biusqueda, 
    // si lo encontro o no al pokemon

    const images={
        imgPokemonNotFound:"../img/404.png",
        imgLoading:"../img/loading.gif",
    }

    //necesitamos una variable que guarde todso los contenedores de los pokedex
    const conteiners : document.getElementsByID("pokedisplaycontainter"), 
    pokemonMoves : document.getElementsByID("pokemonMoves"),
    pokemonTypes : document.getElementsByID("pokemonTypes"),
    pokemonIDelement : document.getElementsByID{"pokemonID"},

    ;

    //necsitamos un objeto de tipo array que guarde toso los botrones con su tipo de referencia
    const buttons = {
    all : Array.from(document.getElementsByClassName('btn'));
    search : document.getElementById('btnSearch'),
    next : document.getElementById('btnUp'),
    previus : document.getElementById('btnDown'),
    };

    //para buscar un pokemon dnecseitamos de una variable que gauarde el nombre del pokemon
    const pokemonInput = document.getElementById('pokemonName');

    //la agrupacion de los events en este objeto debe de ser una estructura que nos permita crear funcines mas pequeñas
    //  que sin importar el orden oueda obtener cada uno de los datos solicitados 
    const processPokemonType = {pokemonData} => {
        //primero necesitamos obtener el tipo de pokemon, el nombre y la clase para que se modifique e el html. 
        //Ya que gnamos esto, tendremos qe obtener los statusbar, los movimientos y las habiilidades
        let pokemonTypes = "";
        //utiliza una busqueda de la clase d epokemon, es decir del tipo de pokmeno
        const firstClass = pokemonData.types[0].type.name;
        pokemonData.types.forEach(pokemonTypeData => {
            const typeName = typeInfo.type.name;
            pokemonTypes += `<span class="pokemon-type ${pokemonTypeData.type.name}">${pokemonTypeData.type.name}</span>`;
            //para poder quitar y cambiar el contenedor dependiendo del tipo tengo que saber a cual pertenece, entonces voy a ener dos
            //un antes y un despupes

            if (currentTypeClass) {
                containers.pokemonMovesElement.classList.remove(currentTypeClass);
                containers.pokemonAbilitiesElement.classList.remove(currentTypeClass);

                //ahora tengo que agregar lo nuevo
                containers.pokemonMovesElement.classList.add(firstClass);
                containers.pokemonAbilitiesElement.classList.add(firstClass);

                //debo agregar las etiquetas creadas desntro del fo each
                containers.pokemonTypesConteiner.innerHTML = pokemonTypes;
            }


            //ahora necesitamos obtener las estadistica sdel pokemon

            const processPokemonStats = {pokemonData} => {
                pokemonData.stats?.forEach((statData) => {
                    //vamos a evaluarl si eencuentra el nombe d el aestadistica par acolocalro en su contenedor corresopndiente
                    switch (pokemonstatData.stat.name) {
                        case 'hp':-
                            pokemonStatsElements.hp.innerHTML = statData.base_stat;
                            pokemonStatsElements.hp.style = 'background: linear-gradient (0deg, rgb(0, 118, 255,11) $ {pokemonstatData.base_stat}%, rgb(214, 214, 214, 0.2) ${pokemonstatData.base_stat}%);';
                            break
                    } 
            }
                
        });

        
    }

}