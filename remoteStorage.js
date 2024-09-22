async function onloadFunc() {
    let userResponse = await getAllUsers("namen");

    let UserKeysArray = Object.keys(userResponse)

    for (let index = 0; index < UserKeysArray.length; index++) {
        users.push(
            {
                id: UserKeysArray[index],
                user: userResponse[UserKeysArray[index]],
            }
        )
        
    }
    await addEditSingleUser(users[2].id, users[2].user)
    console.log(users);
}

async function addEditSingleUser(id=44, user={name: 'Petermann'}) {
    putData(`namen/${id}`, user);
}


const BASE_URL = "https://remotestorage-725a1-default-rtdb.europe-west1.firebasedatabase.app/"

async function loadData(path="") {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json();   
}

async function postData(path="", data={}) {
    let response = await fetch(BASE_URL + path + ".json", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}

async function deleteData(path="") {
    let response = await fetch(BASE_URL + path + ".json", {
        method: "DELETE",
    });
    return responseToJson = await response.json();
}

async function putData(path="", data={}) {
    let response = await fetch(BASE_URL + path + ".json", {
        method: "PUT",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    return responseToJson = await response.json();
}

async function getAllUsers(path) {
    let response = await fetch(BASE_URL + path + ".json");
    return responseToJson = await response.json();
}
