


var text = document.getElementById("ta")

function bold(){
    if(text.style.fontWeight=="bold") {
    
        text.style.fontWeight="normal"}
        else {
            text.style.fontWeight="bold";
        }
    }
    


    function italic(){
        if(text.style.fontStyle=="italic") 
        
        {  text.style.fontStyle="normal"}
                        else {


                            text.style.fontStyle="italic"; 
                        }            
    }
        





function underline(){
if(text.style.textDecoration=="underline") {

    text.style.textDecoration="none"}
    else {
        text.style.textDecoration="underline";
    }
}


function handlesize(){
text.style.fontSize=document.getElementById("size").value


}


function handltext(){
    text.style.fontFamily=document.getElementById("text").value
    
    
    }




