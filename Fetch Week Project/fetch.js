console.log("ciao")

let url = "http://localhost:3000/users"

let posts = []
fetch(url).then(res => res.json()).then((res) => {
    posts = res
}).then(() => {
    function getVisibleItems(){
        document.querySelector("._card").innerHTML = "";
        posts.forEach((e)=>{
            let nome = document.createElement ("h5");
            nome.classList.add("nome");
            nome.innerHTML = e.name;
            let indirizzo_email = document.createElement ("p")
            indirizzo_email.classList.add("email");
            indirizzo_email.innerHTML = e.email;
            let btn = document.createElement("button")
            btn.classList.add("btn", "btn-primary");
            btn.innerHTML = "Elimina";
            btn.addEventListener("click", ()=>{
                posts = posts.filter((p)=>{
                    return e.id != p.id
                })
                getVisibleItems()
            })

            document.querySelector("._card").append(nome, indirizzo_email, btn);
        })
    }
    getVisibleItems();
})
console.log("benvenuto");