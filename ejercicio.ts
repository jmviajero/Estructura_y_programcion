console.log(fetch("https://opentdb.com/api.php?amount=10")
    .then((res)=>{
        res.json().then(res=>{
            type jugador={
            nombre:string,
            ganado:number,
            perdido:number;
            }  

            const nu:string | any = prompt("Número de jugadores");
            const numero:number=Number(nu);
            let jugadores:jugador[]= new Array(numero);


            for (let i = 0; i < jugadores.length; i++) {
                let nombre:string | any = prompt("Nombre del jugador");
                jugadores[i] = { nombre: nombre, ganado: 0, perdido: 0 }; // Crear un objeto para cada jugador
            }

            console.log("Los jugadores son ");
            jugadores.forEach(elem=> console.log(elem.nombre));
            let contador:number=0;
            
            res.results
            .forEach((elem: { question: any; incorrect_answers: any; correct_answer: string|null; })=> {
                if(contador>=numero){
                    contador=0;
                }

                console.log("Turno de " + jugadores[contador].nombre);
                console.log(elem.question);
                console.log("cual es la respuesta entre");
                let incor=elem.incorrect_answers;
                let ac=elem.correct_answer
                let a=[ac , ...incor];

                let arrayaleatorio=a.sort(() => Math.random() - 0.5);
                console.log(arrayaleatorio);
               
                let cor=prompt("Respuesta ");
                if(elem.correct_answer===cor) {
                    console.log("has acertado")
                    jugadores[contador].ganado++;
                }
                else{
                    console.log("respuesta incorrecta")
                    jugadores[contador].perdido++;}
                contador++;
            })
            let maximo = -1;
            let ganadores: jugador[] = [];

            jugadores.forEach((jugador) => {
                if (jugador.ganado > maximo) {
                    maximo = jugador.ganado;
                    ganadores = [jugador];
                } else if (jugador.ganado === maximo) {
                    ganadores.push(jugador);
                }
            });

            if (ganadores.length === 1) {
                console.log("El ganador es: " + ganadores[0].nombre);
            } else if (ganadores.length > 1) {
                console.log("Empate entre:");
                ganadores.forEach((ganador) => console.log(ganador.nombre));
            } 
        });
    })
)    




