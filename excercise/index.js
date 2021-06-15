
document.querySelector('#button').addEventListener('click', () => {
    const firstword = document.querySelector('#word').textContent
    const answer = document.querySelector('#input').value
    
    const initalphabet = answer[0]
    const lastalphabet = firstword[firstword.length - 1]

    if (lastalphabet === initalphabet) {
        document.querySelector('#word').textContent = answer
        document.querySelector('#input').value = ""
        document.querySelector('#error').textContent = ""
    } else {
        document.querySelector('#error').textContent = "패배"
        document.querySelector('#input').value = ''
    }
})