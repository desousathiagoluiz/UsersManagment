alert("Sistema Iniciado.")

// POO - Classes e MVC ... continue
let userController = new UserController("form-user-create", "form-user-update", "table-users");



// Trabalhando com Funções e subRotinas (function).
/*var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

function addLine(dataUser) {

    var tr = document.createElement("tr");

    tr.innerHTML = `
        <tr>
            <td>
                <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
            </td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
    `;

    document.getElementById("table-users").appendChild(tr);

}

document.getElementById("form-user-create").addEventListener("submit", function (event) {

    event.preventDefault();

    fields.forEach(function (field, index) {

        if (field.name == "gender") {

            if (field.checked) {

                user[field.name] = field.value;

            }

        } else {

            user[field.name] = field.value;

        }

    });

    addLine(user);

});*/


// Trabalhando Eventos JS
/*var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

document.getElementById("form-user-create").addEventListener("submit", function (event) {

    event.preventDefault();

    fields.forEach(function (field, index) {

        if (field.name == "gender") {

            if (field.checked) {

                user[field.name] = field.value;

            }

        } else {

            user[field.name] = field.value;

        }

    });

    console.log(user);

});*/


// Trabalhando JSON
/*var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};


fields.forEach(function (field, index) {

    if (field.name == "gender") {

        if (field.checked) {

            user[field.name] = field.value;

        }

    } else {

        user[field.name] = field.value;

    }

});

console.log(user);*/

// forEach
/*var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function (field, index) {

    if (field.name == "gender") {

        if (field.checked) {

            console.log("SIM", field);

        }

    } else {

        console.log("NÃO");

    }

    // console.log forEach
    //console.log(field.id, field.name, field.value, field.checked, index);

});*/


// forEach
/*var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function (field, index) {

    console.log(field.id, field.name, field.value, field.checked, index);

});*/

// Variáveis e Seletores
/*var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");*/


// Manipulando a DOM
/*console.log(nome);
nome.value = "Oi";
nome.style.color = "red";*/