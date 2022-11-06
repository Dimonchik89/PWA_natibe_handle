const root = document.querySelector(".root");
const url = "https://jsonplaceholder.typicode.com/users";

window.addEventListener("load", async () => {
    if("serviceWorker" in navigator) {
        try {
            await navigator.serviceWorker.register("/sw.js")
            console.log("SW register success");
        } catch(e) {
            console.log("SW register fail");
        }
    }

    await fetchData()
})

const fetchData = async () => {
    try {
        const data = await fetch(url);
        const users = await data.json();
        
        root.innerHTML = users.map(user => createUserItem(user)).join('\n')

    } catch(e) {
        console.log(`Error: ${e.message}`);
    }
}

const createUserItem = (user) => {
    return `<div class="root__item">
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <span>Phone: ${user.phone}</span>
                </div>`
}