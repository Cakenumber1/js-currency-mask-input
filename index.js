var phoneInput = document.getElementById('phone');
var myForm = document.forms.myForm;
var button = document.getElementById('submit');

const wrapCur = val => {
    let newVal = val

    if (val.length > 3) {
        newVal = val.slice(-3)
        let k = 1

        for (let i = val.length - 3; i >= 0; i -= 3) {
            newVal = val.slice(-3 * (k + 1), -3 * k) + ' ' + newVal
            k++
        }
    }

    return newVal
}

phoneInput.addEventListener('input', function (e) {
    if (e.target.value === '0') {
        e.target.value = ''
    }

    let real = e.target.value.replace(/\D/g, '')

    if (real.length === 4 && real[0] === '0') {
        real = real.slice(1)
    }

    let d = real.slice(0, -2)
    let t = wrapCur(d ? d : 0)

    e.target.value = e.target.value ? t + ',' + real.slice(-2) : ''
});

button.addEventListener('click', function(e) {
    window.alert('pure number: ' + phoneInput.value.replace(/\D/g, ''))
});
