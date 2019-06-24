class ToDoClass {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('')) || [];
        this.loadTasks();

        this.addEventListener();
        this.tam;
    }

    addEventListener = () => {
        document.getElementById('addTask').addEventListener('keypress', event => {
            if (event.keyCode === 13) {
                this.addTask(event.target.value);
                event.target.value = "";
            }
        });
        // document.getElementById('save').addEventListener('keypress',event=>{
        //     if(event.keyCode===13){
        //         this.saveEdit(event.valueEdit.value);
        //         event.valueEdit.value ="";
        //     }
        // })
    }

    completeTodo(id) {
        let index = this.tasks.findIndex(t => t.id == id)
        console.log(index);
        this.tasks[index].isComplete = !this.tasks[index].isComplete;
        this.loadTasks()
        console.log(this.tasks);

    }



    deleteTodo = (event, id) => {
        event.preventDefault();
        let index = this.tasks.findIndex(t => t.id == id)
        this.tam = this.tasks.splice(index, 1);
        this.loadTasks();
        document.getElementById("undo").style.visibility = "visible";
        this.loadTasks();
        setTimeout(function () {
            document.getElementById("undo").style.visibility = "hidden";
        }, 5000);
    }

    unDo = () => {
        this.tasks.push(this.tam[0]);
        document.getElementById("undo").style.visibility = "hidden";
        this.loadTasks();
    }


    generateId = (length) => {
        var result = '';
        var characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            var random = Math.floor(Math.random() * charactersLength); //floor để làm tròn
            result += characters.charAt(random);// charAt để trả về kí tự of chuỗi
        }
        return result;
    }


    addTask = (task) => {
        let newTask = { id: toDo.generateId(10), task: task, isComplete: false }
        if (task === '') {
            alert('You must write something!')
        } else {
            this.tasks.push(newTask);
            this.loadTasks()
        }

    }
    addTaskClick = () => {
        let target = document.getElementById('addTask');
        this.addTask(target.value);
        target.value = "";
    }
    calculate = () => {
        let sum = this.tasks.length;
        let resultCompleted = this.tasks.filter(element => element.isComplete === true);
        let percent = (resultCompleted.length / sum) * 100;
        let a = document.getElementById("progress")
        if (percent < 30) {
            a.className = "progress-bar bg-danger"
            document.getElementById("progress").style.width = percent + "%"
        }
        else if (percent > 30 && percent < 70) {
            a.className = "progress-bar bg-warning"
            document.getElementById("progress").style.width = percent + "%"
        }
        else {
            a.className = "progress-bar bg-success"
            document.getElementById("progress").style.width = percent + "%"
        }

    }

    updateToDo = (event, id) => {
        event.preventDefault();
        let index = this.tasks.findIndex(t => t.id == id)
        var displaybtn = document.getElementById(id);
        this.tasks[index].isComplete = false;
        console.log(displaybtn);
        displaybtn.disabled = false;
        displaybtn.focus();
        let update = document.getElementById("update-" + id);
        update.hidden = true;
        let save = document.getElementById("save-" + id);
        save.hidden = false;
    }


    saveEdit = (event, id) => {
        event.preventDefault();
        let index = this.tasks.findIndex(t => t.id == id)
        let valueEdit = document.getElementById(id).value;
        this.tasks[index].task = valueEdit;
        this.tasks[index].isComplete = false;
        this.loadTasks();
    }



    removeComplete = () => {
        let a = this.tasks = this.tasks.filter(t => !t.isComplete)
        this.loadTasks();
    }

    selectCompleted = () => {
        let resultFiter = this.tasks.filter(element => element.isComplete === true);
        if (resultFiter.length > 0) {
            let taskHtml = resultFiter.reduce((html, task, id) => html += this.generateTaskHtml(task, id), '');
            document.getElementById('taskList').innerHTML = taskHtml;
        } else {
            alert("Khong co ket qua")
        }

    }
    selecActive = () => {
        let resultActive = this.tasks.filter(element => element.isComplete === false);
        if (resultActive.length > 0) {
            let taskHtml = resultActive.reduce((html, task, id) => html += this.generateTaskHtml(task, id), '');
            document.getElementById('taskList').innerHTML = taskHtml;
        } else {
            alert("Khong co ket qua")
        }
    }

    generateTaskHtml = (task, id) => {
        return `
        <li class="list-group-item checkbox">
        <div class="row">
            <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label><input id="toggleTaskStatus" type="checkbox" onchange="toDo.completeTodo('${task.id}')" value="" class="" ${task.isComplete ? 'checked' : ''}></label>
            </div>
            <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text  ${task.isComplete ? 'complete' : ''}">
            <input type="text" class="form-control" id=${task.id} disabled style="border:none;" value="${task.task}">
            </div>
            <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <div class="icon">
            <div class="row">
            <a class="icon"  href="" id="update-${task.id}"  onClick="toDo.updateToDo(event,'${task.id}')" ><i class="fa fa-pencil" ></i></i></a>&nbsp&nbsp
            <a  class="icon" id="delete" href=""   onClick="toDo.deleteTodo(event, '${task.id}')"><i class="fa fa-trash" style="color:red"></i></i></a>&nbsp&nbsp
            <a hidden class="icon" id="save-${task.id}" href=""  onClick="toDo.saveEdit(event, '${task.id}')"><i class="fa fa-check" style="color:green" ></i></i></a>
            </div>
            </div>
            </div>
        </div>
        </li>
    `;
    }

    loadTasks = () => {
        let taskHtml = this.tasks.reduce((html, task, id) => html += this.generateTaskHtml(task, id), '');
        document.getElementById('taskList').innerHTML = taskHtml;
        localStorage.setItem('', JSON.stringify(this.tasks));
        this.calculate()

    }
}

let toDo;
window.addEventListener("load", () => {
    toDo = new ToDoClass();
});