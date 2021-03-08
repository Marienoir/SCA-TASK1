
/*function warnthesheep(queue){
    let sheepNumber =0;
    for(let i=queue.length-1;i>=0;i--){
        if(queue[i]==="wolf"){
            if(i===queue.length-1){
                return("please go away");
            }else{
            return(`sheep ${sheepNumber} is about to die`);    
        }
    }
    sheepNumber++;
}
}
console.log(warnthesheep(["sheep","sheep","sheep","wolf","sheep","sheep","sheep"]));*/

let count =0;
const bodyBg=document.querySelector("body");
let colors=["Aqua","red","blue","yellow","purple"];
function changeColor(color){
    bodyBg.style.background = colors[count];
    if(count<colors.length-1){
        count++;
    }else{
        count=0;
    }

}

/*const button=document.querySelector('.bodyChange');
button.addEventListener('click',event =>{
    button.style.backgroundColor="blue";
})*/