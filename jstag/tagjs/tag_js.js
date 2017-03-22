// 创建第一个div
var div_editor = document.createElement('div')
div_editor.className = 'editor'
// 创建div内部标签
var input = document.createElement('input')
input.type = 'text'
input.id = 'txt'
var button = document.createElement('button')
button.innerText = '按钮'

button.onclick = function(){
    var inputValue = input.value.trim()
    var h5 = document.createElement('h5')
    if(inputValue !=''){
        h5.innerText = inputValue
        div_content.appendChild(h5)
    }
    else{
        alert('内容不能为空，请重新输入')
    }
}
div_editor.appendChild(input)
div_editor.appendChild(button)
// 创建第二个div
var div_content = document.createElement('div')
div_content.className = 'container'
document.body.appendChild(div_editor)
document.body.appendChild(div_content)



