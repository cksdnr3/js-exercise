document.querySelector('#click').addEventListener('click', () => {
    const fv = document.querySelector('#first').value
    const sv = document.querySelector('#second').value
    const r  = document.querySelector('#result')

    if (fv) {

        if (sv) {
            const fsv = fv * sv
            r.textContent = fsv
        } else {
            r.textContent = '두 번째 값을 입력 해주세요'
        }
    } else {
        r.textContent = '첫 번째 값을 입력해 주세요'
    }
})


