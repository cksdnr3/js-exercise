btn = document.querySelector('#button')

btn.addEventListener('click', () => {
    const jesier = document.querySelector('#word').textContent
    const input = document.querySelector('#input').value

    const lastIndex = jesier.length - 1
    const initalph = input[0]
    const lastalph = jesier[lastIndex]

    if (lastalph === initalph) {
        document.querySelector('#word').textContent = input
        document.querySelector('#error').textContent = ''
        document.querySelector('#input').value = ''
    } else {
        document.querySelector('#error').textContent = '패배'
        document.querySelector('#input').value = ''
    }
})