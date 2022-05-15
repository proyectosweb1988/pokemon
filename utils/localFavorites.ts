

const toggleFavorite = ( id: number)=> {
    
    let favoritos :  number[] = JSON.parse(localStorage.getItem('favoritos') || '[]');

    if( favoritos.includes( id ) ){
        favoritos =  favoritos.filter( pokeId => pokeId !== id )
    }else{
        favoritos.push( id )
    }

    localStorage.setItem('favoritos', JSON.stringify( favoritos ))
}

const existInFavorites = ( id: number) : boolean => {

    // if( typeof window === 'undefined') return false;

    let favoritos :  number[] = JSON.parse(localStorage.getItem('favoritos') || '[]');

    return favoritos.includes(id );
}


const pokemon =() : number[]=>{
   return JSON.parse(localStorage.getItem('favoritos') || '[]');
}

export default {
    toggleFavorite,
    existInFavorites,
    pokemon
}