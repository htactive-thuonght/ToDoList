class ManageStudent {
    constructor() {
        this.Student = JSON.parse(localStorage.getItem('sinhvien')) || [];
        this.Teacher = JSON.parse(localStorage.getItem('giaovien')) || [];
        this.Class = JSON.parse(localStorage.getItem('lop')) || [];
        this.Subject = JSON.parse(localStorage.getItem('monhoc')) || [];
        this.Score = JSON.parse(localStorage.getItem('diem')) || [];
        this.loadStudent()
        
    }

    showStudent = (sv)=>{
        return `
        <tbody>
            <tr>
                <td scope="col">${sv.id}</td>
                <td scope="col">${sv.name}</td>
                <td scope="col">${sv.gender}</td>
                <td scope="col">${sv.idClass}</td>
                <td scope="col"><a href="#"><i class="fa fa-pencil"></i></a>&nbsp&nbsp<a href="#"><i class="fa fa-trash" ></i></a></td>
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
        localStorage.setItem('', JSON.stringify(this.Student));
    }
    
    showTeacher = (gv)=>{
        return `
        <tbody>
            <tr>
                <td scope="col">${gv.id}</td>
                <td scope="col">${gv.name}</td>
                <td scope="col">${gv.gender}</td>
                <td scope="col">${gv.idClass}</td>
                <td scope="col"><a href="#"><i class="fa fa-pencil"></i></a>&nbsp&nbsp<a href="#"><i class="fa fa-trash" ></i></a></td>
            </tr>
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
        localStorage.setItem('', JSON.stringify(this.Teacher));
    }


    showClass = (lh)=>{
        return `
        <tbody>
            <tr>
                <td scope="col">${lh.id}</td>
                <td scope="col">${lh.name}</td>
                <td scope="col">${lh.idTeacher}</td>
                <td scope="col"><a href="#"><i class="fa fa-pencil"></i></a>&nbsp&nbsp<a href="#"><i class="fa fa-trash" ></i></a></td>
            </tr>
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
        localStorage.setItem('', JSON.stringify(this.Class));
    }

    showSubject = (mh)=>{
        return `
        <tbody>
            <tr>
                <td scope="col">${mh.id}</td>
                <td scope="col">${mh.nameSub}</td>
                <td scope="col"><a href="#"><i class="fa fa-pencil"></i></a>&nbsp&nbsp<a href="#"><i class="fa fa-trash" ></i></a></td>
            </tr>
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
        localStorage.setItem('', JSON.stringify(this.Subject));
    }
    showScore = (diem)=>{
        return `
        <tbody>
            <tr>
                <td scope="col">${diem.idSub}</td>
                <td scope="col">${diem.idStudent}</td>
                <td scope="col">${diem.nameSub}</td>
                <td scope="col">${diem.score}</td>
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
        localStorage.setItem('', JSON.stringify(this.Score));
    }



}

let manage = new ManageStudent();

