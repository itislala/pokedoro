let tasks = []
function addTask() 
{   
    const inputTask = document.getElementById("inputTask")
    let task = inputTask.value.trim()

    if (task == "")
        {
            alert("You need to type the task")
        }
    else
        {
            const message = document.getElementById("message")
            let msgTaskAdded = "Task added successfully";
            message.textContent = msgTaskAdded;
            tasks.push(task)
            renderTask()    
        }
    inputTask.value = ""
        
}
function renderTask()
{
    const taskList = document.getElementById("taskList")
    taskList.innerHTML =""
    let i = 0
    for(let i = 0; i<tasks.length; i++)
        {
            let newTask = document.createElement("li")
            newTask.textContent = tasks[i]

            //Botão de editar
            let btEdit = document.createElement("button")
            btEdit.className = "edit"
            btEdit.textContent = "Edit"
            btEdit.onclick = () => editTask(i)

            //Botão de remover
            let btRemove = document.createElement("button")
            btRemove.className = "remove"
            btRemove.textContent = "X"
            btRemove.onclick = () => removeTask(i)
            
            newTask.appendChild(btRemove)
            newTask.appendChild(btEdit)
            taskList.appendChild(newTask)
        }
}
function removeTask(i)
{
    tasks.splice(i, 1)
    renderTask()
}
function editTask(i)
{
    let edditedTask = prompt("Edit your task here")
    if (edditedTask.trim !== "")
        {
            tasks[i] = edditedTask
            renderTask()
        }
    
}