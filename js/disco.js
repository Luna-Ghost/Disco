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

let sec_usuario = [];
let ganar = 0;

$(document).ready(function(){
    $("#cuadro1").on("click",()=>
    {
        $("#cuadro1").css("background-color","#ff3a96")
        $("#cuadro2").css("background-color","#319FFF")
        $("#cuadro3").css("background-color","#FA9A00")
        $("#cuadro4").css("background-color","#3EFF00")
        sec_usuario.push("cuadro1");
        let longitud = sec_usuario.length;
        ganadora(longitud);
    });
    $("#cuadro2").on("click",()=>
    {
        $("#cuadro2").css("background-color","#3f31ff")
        $("#cuadro1").css("background-color","#FF38E1")
        $("#cuadro3").css("background-color","#FA9A00")
        $("#cuadro4").css("background-color","#3EFF00")
        sec_usuario.push("cuadro2");
        let longitud = sec_usuario.length;
        ganadora(longitud);
    });
    $("#cuadro3").on("click",()=>
    {
        $("#cuadro3").css("background-color","#fa7900")
        $("#cuadro1").css("background-color","#FF38E1")
        $("#cuadro2").css("background-color","#319FFF")
        $("#cuadro4").css("background-color","#3EFF00")
        sec_usuario.push("cuadro3");
        let longitud = sec_usuario.length;
        ganadora(longitud);
    });
    $("#cuadro4").on("click",()=>
    {
        $("#cuadro4").css("background-color","#0f9103")
        $("#cuadro1").css("background-color","#FF38E1")
        $("#cuadro2").css("background-color","#319FFF")
        $("#cuadro3").css("background-color","#FA9A00")
        sec_usuario.push("cuadro4");
        let longitud = sec_usuario.length;
        ganadora(longitud);
    });
});
function ganadora(longitud)
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
        if(ganar===5)
        {
            $("body").empty();
            $("body").html("<h1>Disco de Yoohoo :D</h1><br><br><br><br><br><br><br><br><br><br><br><h1>Ganaste</h1><br><br><br><br><br><br><br><br><br><br><br><br><br><h3>Hecho por Luna e Irandy</h3>");
            console.log("Ganaste");
        }
        else{
            $("body").empty();
            $("body").html("<h1>Disco de Yoohoo :D</h1><br><br><br><br><br><br><br><br><br><br><br><h1>Perdiste</h1><br><br><br><br><br><br><br><br><br><br><br><br><br><h3>Hecho por Luna e Irandy</h3>");
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