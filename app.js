(function(){

    const button= document.querySelectorAll('.btn');
    let counter=0;

    button.forEach(function(button){

        button.addEventListener('click',function(){
            if(button.classList.contains('pre')){
                    counter--;
            }
            else if(button.classList.contains('nxt')){
                counter++;
        }
        else if(button.classList.contains('reset')){
            counter=0;
    }
           
        console.log(counter)
        const count= document.querySelector('.count');
        count.textContent= counter;

        if(counter<0){
            count.style.color='red'
        }
        else if(counter>0){
            count.style.color='green'
        }
        else{
            count.style.color="black";
        }

        

    })
    
    

    })





})()