function cuadros(){
   return Math.round(Math.random() *10);
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