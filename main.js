let box  = document.querySelector(".box");
let buttons = document.querySelectorAll(".button button");
let me  = document.querySelector(".me span");
let pc  = document.querySelector(".pc span");
let reslut = document.querySelector(".reslut")
let create_button = document.createElement("button");
let create_reslu_text = document.createElement("h2");
create_reslus();

// create_reslus();



let my_chosie;
let pc_chosie;
let chosice_list = ["Mustafa","Salah","Alden","Apple","Ali","Banana","Book","School","Javascript","Computer","Good","Sudan","Boom","Love","Kill","choicemy"]
let myoption = [];
let win = "You Win!";
let lose = "You lose!";
bulid_random_chosie(chosice_list);

create_button.onclick = () =>{
    myoption =[];
    bulid_random_chosie(chosice_list);
    buttons.forEach((ele,index) => {
        ele.style.display = "block";
        ele.innerHTML = myoption[index];
        ele.value = myoption[index];
        me.innerHTML ="";
        pc.innerHTML = "";
        reslut.innerHTML = "";
        create_reslu_text.innerHTML = "";
    });
}
buttons.forEach((ele,index) => {
    ele.innerHTML = myoption[index];
    ele.value = myoption[index];
    ele.onclick = ()=>{
        my_chosie = ele.value;
        me.innerHTML = my_chosie;
        pc.innerHTML = pc_chosie;
        if(my_chosie === pc_chosie){
            document.documentElement.style.setProperty("--main-color","#4aff6f");
            document.documentElement.style.setProperty("--alt-color","#659364");
            buttons.forEach((elem) =>{
                elem.style.display = "none";
            });
            create_reslu_text.appendChild(document.createTextNode(win));
            reslut.appendChild(create_reslu_text);
            reslut.appendChild(create_button);
        }else if (my_chosie != pc_chosie){
            document.documentElement.style.setProperty("--main-color","#730808");
            document.documentElement.style.setProperty("--alt-color","#936464");
            buttons.forEach((elem) =>{
                elem.style.display = "none";
            });
            create_reslu_text.appendChild(document.createTextNode(lose));
            reslut.appendChild(create_reslu_text);
            reslut.appendChild(create_button);
        }
    }
});
function bulid_random_chosie(array){
    let num1,num2,num3,num4;
    num1 = Math.floor(Math.random() * array.length);
    num2 = Math.floor(Math.random() * array.length);
    num3 = Math.floor(Math.random() * array.length);
    while(num1 == num2 || num1 == num3 || num3 == num2){
        num1 = Math.floor(Math.random() * array.length);
        num2 = Math.floor(Math.random() * array.length);
        num3 = Math.floor(Math.random() * array.length);
    }
    num1 = array[num1];
    num2 = array[num2];
    num3 = array[num3];
    myoption.push(num1);
    myoption.push(num2);
    myoption.push(num3);
    num4 = Math.floor(Math.random() * myoption.length);
    pc_chosie = myoption[num4];
}
function create_reslus(){
    create_button.appendChild(document.createTextNode("Play Agin"));
    create_button.className = "agin";
}






console.log("pc_chosie : " + pc_chosie)