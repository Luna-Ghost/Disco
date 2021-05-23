function cuadros(){
return Math.round(Math.random() * 3) + 1;
} 
let secuencia = [];
for(i=1; i<6; i++)
{
    let sacar_sec = cuadros();
    if(sacar_sec<=4 && sacar_sec>=1)
    {
    console.log("cuadro"+sacar_sec);
    secuencia.push("cuadro"+sacar_sec);
    }else if(sacar_sec>4)
    {
        let util = Math.round
        sacar_sec = 4;
        console.log("cuadro"+sacar_sec);
        secuencia.push("cuadro"+sacar_sec);
    }else if(sacar_sec<1)
    {
        sacar_sec = 1;
        console.log("cuadro"+sacar_sec);
        secuencia.push("cuadro"+sacar_sec);
    }
}
console.log(secuencia);

window.addEventListener('load',()=>{
    let sec_usuario = [];
    let ganar = 0;

    let cuadro1 = document.getElementById("cuadro1");
    let cuadro2 = document.getElementById("cuadro2");
    let cuadro3 = document.getElementById("cuadro3");
    let cuadro4 = document.getElementById("cuadro4");

    cuadro1.addEventListener('click', ()=>{
        let cuadro1 = document.getElementById("cuadro1");
        let cuadro2 = document.getElementById("cuadro2");
        let cuadro3 = document.getElementById("cuadro3");
        let cuadro4 = document.getElementById("cuadro4");
        cuadro1.style.backgroundColor = "#FF3A96";
        cuadro2.style.backgroundColor = "#319FFF";
        cuadro3.style.backgroundColor = "#FA9A00";
        cuadro4.style.backgroundColor = "#3EFF00";
        sec_usuario.push("cuadro1");
        let longitud = sec_usuario.length;
        ganadora(longitud, sec_usuario, ganar);
    })
    cuadro2.addEventListener('click', ()=>{
        cuadro1.style.backgroundColor = "#FF38E1";
        cuadro2.style.backgroundColor = "#3f31ff";
        cuadro3.style.backgroundColor = "#FA9A00";
        cuadro4.style.backgroundColor = "#3EFF00";
        sec_usuario.push("cuadro2");
        let longitud = sec_usuario.length;
        ganadora(longitud, sec_usuario, ganar);

    })
    cuadro3.addEventListener('click', ()=>{
        cuadro1.style.backgroundColor = "#FF38E1";
        cuadro2.style.backgroundColor = "#319FFF";
        cuadro3.style.backgroundColor = "#fa7900";
        cuadro4.style.backgroundColor = "#3EFF00";
        sec_usuario.push("cuadro3");
        let longitud = sec_usuario.length;
        ganadora(longitud, sec_usuario, ganar);

    })
    cuadro4.addEventListener('click', ()=>{
        cuadro1.style.backgroundColor = "#FF38E1";
        cuadro2.style.backgroundColor = "#319FFF";
        cuadro3.style.backgroundColor = "#FA9A00";
        cuadro4.style.backgroundColor = "#0f9103";
        sec_usuario.push("cuadro4");
        let longitud = sec_usuario.length;
        ganadora(longitud, sec_usuario, ganar);

    })
})

function ganadora(longitud, sec_usuario, ganar)
{
    if(longitud===5)
    {
        console.log(sec_usuario); 
        for(let x=1; x<=5; x++)
        {
            if(secuencia[x]===sec_usuario[x])
            {
                ganar+=1;
            }
        }
        
        let eliminar = document.getElementsByClassName("eliminados");
        console.log(eliminar)
        document.body.innerHTML = "";
        if(ganar===5)
        {
            document.body.innerHTML = ("<h1>Disco de Yoohoo :D</h1><br><br><br><br><br><br><br><br><br><br><br><h1>Ganaste</h1><br><br><br><br><br><br><br><br><br><br><br><br><br><h3>Hecho por Luna e Irandy</h3>");
            console.log("Ganaste");
        }
        else{
            document.body.innerHTML = ("<h1>Disco de Yoohoo :D</h1><br><br><br><br><br><br><br><br><br><br><br><h1>Perdiste</h1><br><br><br><br><br><br><br><br><br><br><br><br><br><h3>Hecho por Luna e Irandy</h3>");
            console.log("Perdiste con "+ganar+" buenas de 5");
        }
    }
}



    /*function aleatorio() {
        return Math.round(Math.random() * 3) + 1;
    } 

    window.addEventListener('load', ()=>{

        const inicio = document.getElementById('ini');
        const c1 = document.getElementById('caudro1');
        const c2 = document.getElementById('cuadro2');
        const c3 = document.getElementById('cuadro3');
        const c4 = document.getElementById('cuadro4');

        new Promise((resolve,reject)=> {
            inicio.addEventListener("click", ()=>{
                console.log("hola");
                resolve();
            })
        }).then(()=>{
            return new Promise(
                (resolve)=>
                {
                    setTimeout(()=>{
                        let p1=aleatorio();
                        console.log(p1);
                        resolve(p1)
                    }, 600)
                }
            )
        })
    })*/