let turn="x"
let title=document.getElementById("title") 
 let tab=[]
function game(id){
    let element=document.getElementById(id)

    if(turn=="x" && element.innerHTML==""){
        element.innerHTML="x"
        turn="o"
        title.innerHTML="o"
        winner()

    }
   else if(turn=="o" && element.innerHTML==""){
    element.innerHTML="o"
        turn="x"
        title.innerHTML="x"
        winner()
   } 
}
function end(v1,v2,v3){
    title.style.backgroundColor="red";
    title.innerHTML=tab[v1] +" winner"
    document.getElementById("item"+v1).style.backgroundColor="orange"
    document.getElementById("item"+v2).style.backgroundColor="orange"
    document.getElementById("item"+v3).style.backgroundColor="orange"
    setInterval(() => {title.innerHTML+="."
        
    }, 1000);
    setTimeout(() => {location.reload()
        
    }, 3000);

}
   function winner(){
   
    for(let i=0;i<9;i++){
        tab[i]=document.getElementById("item"+i).innerHTML
    }
   
    if(tab[0]===tab[1]&&tab[1]===tab[2] && tab[0]!=""){
        title.style.backgroundColor="red"
end(0,1,2)
    }
    else if(tab[3]==tab[4]&&tab[4]==tab[5] && tab[4]!=""){
end(3,4,5)

    }
    else if(tab[6]==tab[7]&&tab[7]==tab[8] && tab[8]!=""){
end(6,7,8)
    }
    else if(tab[0]==tab[3]&&tab[3]==tab[6] && tab[6]!=""){
        end(0,3,6)
    }

    else if(tab[1]==tab[4]&&tab[4]==tab[7] && tab[7]!=""){
        end(1,4,7)
   }
   else if(tab[2]==tab[5]&&tab[5]==tab[8] && tab[8]!=""){
    end(2,5,8)
   }
   else if(tab[0]==tab[4]&&tab[4]==tab[8] && tab[8]!=""){end(0,4,8)}

    else if(tab[2]==tab[4]&&tab[4]==tab[6] && tab[6]!=""){end(2,4,6)}
    else if(tab[0]!=""&&tab[1]!=""&&tab[2]!=""&&tab[3]!=""&&tab[4]!=""&&tab[5]!=""&&tab[6]!=""&&tab[7]!=""&&tab[8]!=""){
        title.innerHTML="NO WINNER"
        setInterval(() => {title.innerHTML+="."
        
    }, 1000);
    setTimeout(() => {location.reload()
        
    }, 3000);
    }
   }
  