// import library
var socket = io();
const Name=prompt("What's your name: ")
const form=document.querySelector(".form_nhap")
const input=document.querySelector(".input_text")
const chat_text=document.querySelector(".chat_text")
// send data
// 
form.addEventListener('submit', function (e) {
   e.preventDefault()
   if (input.value) {
            var str = input.value
            var str2 = str.trim()
            if (str2.length != 0) {
                socket.emit('Chat',[input.value,socket.id])
                input.value="";}}
})
// get and show data
socket.on('Chat',function([data,id]){
                    const p=document.createElement('p')
                    p.textContent=`${data}`
                    if (socket.id!=id){
                        p.style="float: left; background-image: linear-gradient(0,rgb(255, 0, 187,0.5),rgb(200, 255, 0,0.5)); "
                        // p.style="background-image: linear-gradient(0,rgb(255, 0, 187,0.5),rgb(200, 255, 0,0.5));"
                        p.textContent=`${Name}: ${data}`
                    }
                    chat_text.appendChild(p)
                    chat_box.scrollTop = chat_box.scrollHeight
})


