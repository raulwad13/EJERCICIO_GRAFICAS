// // 1- Crear una gráfica con los titulos y sus fechas de estreno:

fetch('https://swapi.dev/api/films/')
            .then(res=>res.json())
            .then(json=>{

              const peliculas = json.results;
              let titulos =[];
              let years=[];

              let data = {
                // A labels array that can contain any sort of values
                labels: titulos,
                // Our series array that contains series objects or in this case series data arrays
                series: [years]
                 
                
              };
              
              peliculas.forEach(pelicula => {


                titulos.push(pelicula.title);
                years.push(pelicula.release_date.slice(0,4));
                
              })
              console.log(data);
              
            // Create a new line chart object where as first parameter we pass in a selector
            // that is resolving to our chart container element. The Second parameter
            // is the actual data object.


            new Chartist.Line('.ct-chart', data)
            })
            
            // 2- Crear una gráfica de barras con los nombres de los personajes:

            fetch('https://swapi.dev/api/people/')
            .then(res=>res.json())
            .then(json=>{

              const personajes = json.results;
              let nombre=[];
              let apariciones=[];

              let data = {
                // A labels array that can contain any sort of values
                labels: nombre,
                // Our series array that contains series objects or in this case series data arrays
                series: [apariciones]
                 
                
              };
              
              personajes.forEach(personaje => {


                nombre.push(personaje.name.slice(0,6));
                apariciones.push(personaje.films.length);
                
              })
              console.log(data);
              
            // Create a new line chart object where as first parameter we pass in a selector
            // that is resolving to our chart container element. The Second parameter
            // is the actual data object.


            new Chartist.Bar('.ct-chart', data)
            })
            