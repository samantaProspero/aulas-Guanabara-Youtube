function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo= document.getElementById('txtp')
    let res = document.getElementById('res')
    if(inicio.value.length==0 || fim.value.length == 0 || passo.value.length == 0) {
       res.innerHTML='Impossível contar!'
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Será considerado passo=1')
            p=1
        }
        if(i<f){
        for(let cont = i; cont <= f; cont += p){
            res.innerHTML += ` ${cont} \u{1F449}`
        } }else {
        for(let cont=i; cont >=f; cont-=p){
            res.innerHTML += `${cont} \u{1F449}`}
        }
        res.innerHTML+= `\u{1F3C1}`
    }
}