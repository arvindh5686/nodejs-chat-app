// Node-style (commonjs) require in the browser!
let $ = require('jquery')
// $('body').html('Hello world!')

let io = require('socket.io-client')
let socket = io('http://127.0.0.1:8000')
let $template = $('#template')

// ESNext in the browser!!!
socket.on('connect', () => console.log('connected'))

// Enable the form now that our code has loaded
$('#send').removeAttr('disabled')

// Emit a starter message and log it when the server echoes back
socket.on('im', obj => {
	let $li = $template.clone().show()
    $li.children('span').text(obj.msg)
    //$li.children('i').text(obj.username+': ')
    $('#messages').append($li)
})

$('form').submit(() => {
    socket.emit('im', $('#m').val())
    $('#m').val('')
    return false
})