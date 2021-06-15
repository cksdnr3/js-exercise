
document.querySelector('button').addEventListener('click', () => {
    
    var dayOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    

    if (document.querySelector('#dow').textContent === dayOfWeek[1]) {
        document.querySelector('#subject').textContent = '생활영어, 대학영어'
    }
})
