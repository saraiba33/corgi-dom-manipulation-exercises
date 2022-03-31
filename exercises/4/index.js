const list = document.querySelectorAll("li")

for (const li of list) {
    li.classList.add("corgi")
    li.classList.remove("dog")
}