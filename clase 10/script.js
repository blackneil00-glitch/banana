let avatar = document.getElementById("avatar");
let names = document.getElementById("name");
let description = document.getElementById("description");
let togglebtn = document.getElementById("toggle-btn");

togglebtn.addEventListener("click", function () {
    let isHero = document.body.classList.contains("hero");

    if(isHero){
        document.body.classList.replace("hero", "villain")
        names.textContent = "Shadow Villain";
        description.textContent= "Mode : Villain";
        avatar.src= "https://api.dicebear.com/9.x/adventurer/svg?seed=Shadow";
    }

    else{
        document.body.classList.replace("villain", "hero");
        names.textContent = "Hero";
        description.textContent= "Mode : Felix";
        avatar.src= "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix";
    }   

     
});