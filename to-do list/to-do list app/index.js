const TaskList = document.querySelector("#TaskList ul")
TaskList.addEventListener('click', (e)=>{
    let className = e.target.className
    if(Object.is(className, "delete")){
        console.log(e)
        let li = e.target.parentElement
        TaskList.removeChild(li)
    }
})


const addTask = document.forms["addTask"]
addTask.addEventListener("submit", (e)=>{
    e.preventDefault()
    const value = addTask.querySelector("input").value.trim()
    if(value){
        const liTag = document.createElement("li")
        const pTag = document.createElement("p")
        const button = document.createElement("button")
        const input = document.createElement("input")

        input.type = "checkbox";
        input.classList.add("task")

        pTag.textContent = value
        pTag.appendChild(input)
        button.classList = "delete"

        button.textContent = "delete"

        liTag.appendChild(pTag)
        liTag.appendChild(button)

        TaskList.appendChild(liTag)
    }


})