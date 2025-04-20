let text = document.getElementById('text');
let add = document.getElementById('add');
let output = document.getElementById('output');
let del =  document.getElementById('del');
let text1 = document.getElementById('text1')



let texts = [] ; 



add.addEventListener('click' , function(){
   let textvalue = text.value ;
    texts.push(textvalue) ;
    console.log(texts);
   output.innerHTML = texts ;    
   text.value = ''
     
})

del.addEventListener('click' , function()
{
   texts = [] ;
  output.innerHTML = '' ;
})

setInterval(function(){
    let dat = document.getElementById('date')
    let date = new Date();
    dateformat = date.toLocaleTimeString()
    dat.innerHTML = dateformat

}, 1000)

let send = document.getElementById('Send')

send.addEventListener('click' , function(){
     let message = encodeURIComponent(texts)

    let url =  `https://wa.me/?text=${message}`
    window.open(url , '_blank')
})

let search = document.getElementById('dis')

search.addEventListener('click' , function(){
   
    async function similarWord(){

        let mean = document.getElementById('mean')
        let word = text1.value.trim();
         let response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
       
           let res = await response.json()
           const data = res[0].meanings[0].definitions[0].definition
           mean.innerHTML = data 
            
          
       }
       similarWord() ;



})
function bar(){
document.getElementById("out").scrollIntoView({ behavior: "smooth" });
}