// Add your code here
function git(){
    submitData()
}

document.addEventListener("DOMContentLoaded", git)


function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        const objectId = data.id 

        const bodyTag = document.querySelector('body')
        const newElement = document.createElement('div')
        newElement.innerHTML = objectId
        bodyTag.appendChild(newElement)
    })
    .catch(function(error){
        const errorMessage = error.message

        const bodyTag = document.querySelector('body')
        const newElement = document.createElement('div')
        newElement.innerHTML = errorMessage
        bodyTag.appendChild(newElement)
    })
}
