const btn = document.querySelector('#button')
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.
btn.addEventListener('click', () => {
    const word = document.querySelector('#word').textContent
    // .은 ~의를 의미한다. (소유)
    const input = document.querySelector('#input').value
    const lastIndex = word.length - 1
    const lastAlphb = word[lastIndex]
    const initAlphb = input[0]  

    if (lastAlphb === initAlphb) {
        document.querySelector('#word').textContent = input
        document.querySelector('#error').textContent = ''
        document.querySelector('#input').value = ''
        document.querySelector('#input').focus()
    } else {
        document.querySelector('#error').textContent = '땡'
        document.querySelector('#input').value = ''
        document.querySelector('#input').focus()
    }
})