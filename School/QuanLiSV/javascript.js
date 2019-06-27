class ManageStudent {
    constructor() {
        this.Student = JSON.parse(localStorage.getItem('sinhvien')) || [];
        this.Teacher = JSON.parse(localStorage.getItem('giaovien')) || [];
        this.Class = JSON.parse(localStorage.getItem('lop')) || [];
        this.Subject = JSON.parse(localStorage.getItem('monhoc')) || [];
        this.Score = JSON.parse(localStorage.getItem('diem')) || [];
        this.loadStudent();
        this.tam;

    }
    showStudent = (sv) => {
        return `
        <tbody>
            <tr>
                <td scope="col"><input id="${sv.id}-id" readonly class="form-control form-b" type="text"  style="border:none;" value="${sv.id}"></td>
                <td scope="col"><input id="${sv.id}-name" readonly class="form-control form-b" type="text"  style="border:none;" value="${sv.name}"></td>
                <td scope="col"><input id="${sv.id}-gender" readonly class="form-control form-b" type="text"  style="border:none;" value="${sv.gender}"></td>
                <td scope="col"><input id="${sv.id}-class" readonly class="form-control form-b" type="text"  style="border:none;" value="${sv.class}"></td>
                <td scope="col"><a  class="icon" id="delete" href="#" onClick="manage.deleteStudent(event, '${sv.id}')"><i class="fa fa-trash" style="color:red"></i></a>
                 &nbsp&nbsp <a class="icon"  href="#" id="update-${sv.id}" onClick="manage.updateStudent(event,'${sv.id}')" ><i class="fa fa-pencil" ></i></a> 
                 &nbsp&nbsp <a hidden class="icon"  href="" id="save-${sv.id}"  onClick="manage.saveStudent(event,'${sv.id}')" ><i class="fa fa-check" ></i></a></td>
            </tr>
        </tbody>
        `;
    }
    loadStudent = () => {
        let html = `
            <thead>
                <tr>
                    ${Object.keys(this.Student[0]).map(key => `<th scope="col">${key}</th>`).join('')}
                    <th scope="col">Action</th>
                </tr>
            </thead>
        `
        html += this.Student.reduce((html, sv, id) => html += this.showStudent(sv, id), '');
        document.getElementById('table').innerHTML = html;
        localStorage.setItem('sinhvien', JSON.stringify(this.Student));
    }

    showTeacher = (gv) => {
        return `
        <tbody>
            <tr>
                <td scope="col">${gv.id}</td>
                <td scope="col">${gv.name}</td>
                <td scope="col">${gv.gender}</td>
                <td scope="col">${gv.idClass}</td>
                <td scope="col"><a href="#"><i class="fa fa-pencil"></i></a>&nbsp&nbsp<a href="#"><i class="fa fa-trash" ></i></a></td>            </tr>
            </tbody>
        `;
    }
    loadTeacher = () => {
        let html = `
            <thead>
                <tr>
                    ${Object.keys(this.Teacher[0]).map(key => `<th scope="col">${key}</th>`).join('')}
                    <th scope="col">Action</th>
                </tr>
            </thead>
        `
        html += this.Teacher.reduce((html, gv, id) => html += this.showTeacher(gv, id), '');
        document.getElementById('table').innerHTML = html;
        localStorage.setItem('giaovien', JSON.stringify(this.Teacher));
    }

    showClass = (lh) => {
        return `
        <tbody>
            <tr>
                <td scope="col">${lh.id}</td>
                <td scope="col">${lh.name}</td>
                <td scope="col">${lh.idTeacher}</td>
                <td scope="col"><a href="#"><i class="fa fa-pencil"></i></a>&nbsp&nbsp<a href="#"><i class="fa fa-trash" ></i></a></td>            </tr>
        </tbody>
        `;
    }


    loadClass = () => {
        let html = `
            <thead>
                <tr>
                    ${Object.keys(this.Class[0]).map(key => `<th scope="col">${key}</th>`).join('')}
                    <th scope="col">Action</th>
                </tr>
            </thead>
        `
        html += this.Class.reduce((html, lh, id) => html += this.showClass(lh, id), '');
        document.getElementById('table').innerHTML = html;
        localStorage.setItem('lop', JSON.stringify(this.Class));
    }

    showSubject = (mh) => {
        return `
        <tbody>
            <tr>
                <td scope="col">${mh.id}</td>
                <td scope="col">${mh.nameSub}</td>
                <td scope="col"><a href="#"><i class="fa fa-pencil"></i></a>&nbsp&nbsp<a href="#"><i class="fa fa-trash" ></i></a></td>            </tr>
            </tbody>
        `;
    }


    loadSubject = () => {
        let html = `
            <thead>
                <tr>
                    ${Object.keys(this.Subject[0]).map(key => `<th scope="col">${key}</th>`).join('')}
                    <th scope="col">Action</th>
                </tr>
            </thead>
        `
        html += this.Subject.reduce((html, mh, id) => html += this.showSubject(mh, id), '');
        document.getElementById('table').innerHTML = html;
        localStorage.setItem('monhoc', JSON.stringify(this.Subject));
    }
    showScore = (diem) => {
        return `
        <tbody>
            <tr>
                <td scope="col">${diem.idSub}</td>
                <td scope="col">${diem.idStudent}</td>
                <td scope="col">${diem.nameSub}</td>
                <a ><td scope="col">${diem.score}</td>
                <td scope="col"><a href="#"><i class="fa fa-pencil"></i></a>&nbsp&nbsp<a href="#"><i class="fa fa-trash" ></i></a></td>
            </tr>
            </tbody>
        `;
    }


    loadScore = () => {
        let html = `
            <thead>
                <tr>
                    ${Object.keys(this.Score[0]).map(key => `<th scope="col">${key}</th>`).join('')}
                    <th scope="col">Action</th>
                </tr>
            </thead>
        `
        html += this.Score.reduce((html, diem, id) => html += this.showScore(diem, id), '');
        document.getElementById('table').innerHTML = html;
        localStorage.setItem('diem', JSON.stringify(this.Score));
    }



    displayFormAdsStudent() {
        var a = document.getElementById('formAddStudent');
        a.removeAttribute('hidden');
        let add = document.getElementById("buttonAddSt");
        add.hidden = true;
        let submit = document.getElementById("btnsubmitSt");
        submit.hidden = false;

    }
    displayFormAddTeacher() {
        var ab = document.getElementById('formAddStudent');
        ab.hidden=false;
        var a = document.getElementById('formAddTeacher');
        a.removeAttribute('hidden');
        let addTc = document.getElementById("buttonAddSt");
        addTc.hidden = false;
        let add = document.getElementById("buttonAddTc");
        add.hidden = true;
        let submit = document.getElementById("btnsubmitTc");
        submit.hidden = false;

    }


    addStudentClick = (student) => {
        let txtName = document.getElementById('nameStudent').value;
        let txtGender = document.getElementById('genderStudent').value;
        let txtClass = document.getElementById('classStudent').value;
        let newStudent = {
            id: manage.generateId(10),
            name: txtName,
            gender: txtGender,
            class: txtClass
        }
        if (student === '') {
            alert('You must write something!')
        } else {
            this.Student.push(newStudent);
            console.log(newStudent);
            this.loadStudent()
            console.log(this.Student);
        }
    }

    updateStudent(event, id) {
        event.preventDefault();
        var check = document.getElementById("save-" + id);
        var pen = document.getElementById("update-" + id);
        pen.setAttribute("hidden", false);
        check.removeAttribute("hidden");
        let btn_id = document.getElementById(id + "-id");
        let btn_name = document.getElementById(id + "-name");
        let btn_gender = document.getElementById(id + "-gender");
        let btn_class = document.getElementById(id + "-class");
        btn_id.removeAttribute("readonly")
        btn_name.removeAttribute("readonly")
        btn_gender.removeAttribute("readonly")
        btn_class.removeAttribute("readonly")
        btn_id.focus();
    }


    saveStudent = (event, id) => {
        
        event.preventDefault();
        let index = this.Student.findIndex(t => t.id == id)
        let vlID = document.getElementById(id + "-id").value;
        let vlName = document.getElementById(id + "-name").value;
        let vlGender = document.getElementById(id + "-gender").value;
        let vlClass = document.getElementById(id + "-class").value;
        this.Student[index].id = vlID;
        this.Student[index].name = vlName;
        this.Student[index].gender = vlGender;
        this.Student[index].class = vlClass;
        console.log(this.Student);

        this.loadStudent();
    };
    deleteStudent = (event, id) => {
        event.preventDefault();
        let index = this.Student.findIndex(t => t.id == id)
        this.tam = this.Student.splice(index, 1);
        this.loadStudent();
        document.getElementById("undo").style.visibility = "visible";
        this.loadStudent();
        setTimeout(function () {
            document.getElementById("undo").style.visibility = "hidden";
        }, 5000);
    }

    unDo = () => {
        this.Student.push(this.tam[0]);
        document.getElementById("undo").style.visibility = "hidden";
        this.loadStudent();
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


}

let manage = new ManageStudent();

