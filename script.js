let age = prompt("скок вам лет", 18);

if(age>17){
    alert("true")
}else if(age==12){
    alert("тебе столькоже лет как мне но ты серовно мал для этого сайта")
}else if(age==11){
    alert("если ты андрей то ты пидор")
}else{
    alert('false')
}
alert(`Вам если что ${age} лет`);
function infomin(){
    alert("зайдите в консоль");
}
console.log("https://www.youtube.com/watch?v=b4XpMTUlorc")
function chat(){
    window.open("http://192.168.0.112:8080/")
}
function background(){
    document.body.style.backgroundColor = ("red")
}

function secret(){
    
    let secret1 = prompt("напишы robert polson")
    if(secret1=="robert polson"){
        let musikOrMem = prompt("музыка yea , старый мем no")
    
        if(musikOrMem=="yea"){
            window.open("https://www.youtube.com/watch?v=uFmqAQarRdM")
        }else if(musikOrMem == "no"){
            window.open("https://www.youtube.com/watch?v=A1Qb4zfurA8")
        }else{
            alert("не понимаю")
        }
    }else{
        alert("chel")
    }
}
