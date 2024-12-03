const boy = document.getElementById('select')
const girl = document.getElementById('sub')
const list = document.getElementById('list')

girl.addEventListener("click", () => {
  const ulitem = document.createElement('li')
  ulitem.innerHTML = boy.value
  list.append(ulitem)
  input.value = ''
})
