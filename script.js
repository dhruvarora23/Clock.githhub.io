

let element = document.getElementById('time')

setInterval(() => {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    let time = `${hours}:${minutes}:${seconds}`

    element.innerHTML = time

    
}, 1000);




console.log(time)






