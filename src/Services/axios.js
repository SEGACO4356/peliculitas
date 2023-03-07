import axios from 'axios';

    export const getMovies = {

 getPopular : async () =>{
    const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a6f5e5862b0302f6a6f5f1bf82c782b8&language=en-US&page=1")
    console.log(data);
    return new Promise( (res, rej) => {
        res(data);
    });
},

 getNow : async () =>{
    const data = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a6f5e5862b0302f6a6f5f1bf82c782b8&language=en-US&page=1")
    console.log(data);
    return(
        data
    );
}
}