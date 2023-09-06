const form = document.querySelector("#form");
const updatedata = document.querySelector("#updatedata");
const showmessageboxContainer = document.querySelector('.show-message-box-container');
const inputdata = document.querySelector('#todolist');
const inputupdatedata = document.querySelector('#update');
const date = document.querySelector('.date-show');
setInterval(() => {
    date.innerHTML = new Date().toLocaleString()

}, 1000)

const loading = () => {
    const loadings = document.querySelector('.loading');
    loadings.style.display = "none"
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputdata.value === '') {
        window.alert('Pleased fill the work')
    }
    else {
        const work = inputdata.value;
        const workobj = {
            works: work,
        }
        const saveData = (key, data) => {
            const existingData = localStorage.getItem(key);
            let newData = [];
            if (existingData) {
                newData = JSON.parse(existingData);
            }
            newData.push(data);
            localStorage.setItem(key, JSON.stringify(newData));
        }
        saveData("works", workobj);
                inputdata.value=""
        showdata()


    }
})

const showdata = () => {
    const getdata = JSON.parse(localStorage.getItem("works"))
    if (getdata) {
        let div = '';
        getdata.forEach((element, index) => {
            div += `<div class="show-message">
                             <div class="message-show-box-container">
                                 <p>${element.works}</p>
                             </div>
                             <div class="edit-box-container">

                                 <span class="material-symbols-outlined edit " onClick="editdata(${index})">
                                     edit
                                 </span>
                             </div>
                             <div class="delete-box-container">
                                 <span class="material-symbols-outlined delete " onClick="deletedata(${index})">
                                     delete
                                 </span>
                             </div>
                    </div>`
        })
        showmessageboxContainer.innerHTML = div;

    }
}
const deletedata = (index) => {
    const conformation = window.confirm("Are you sure delete data")
    if (conformation) {
        const getdatas = JSON.parse(localStorage.getItem("works"))
        getdatas.splice(index, 1)
        localStorage.setItem("works", JSON.stringify(getdatas));
        showdata()
    }
}
showdata()
const popup_con = document.querySelector('.popup-container');
const closedarrow = document.querySelector('.closed');
closedarrow.addEventListener('click', () => {
    popup_con.style.display = "none"
})

const editdata = (index) => {
    // popup_con.style.display = "block"
    // updatedata.addEventListener('submit', (event) => {
    //     event.preventDefault();
    //     const updateddata = inputupdatedata.value;
    //     const getdatas = JSON.stringify(localStorage.getItem("works"))
    //     const workobj = {
    //         works: updateddata,
    //     }
    //     getdatas.replace(index, workobj);

    //     console.log(updateddata);
    // })


    window.alert('This time no allow to edit data');
}
