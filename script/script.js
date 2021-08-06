const Form = document.querySelector('#form')
const sendMail = document.querySelector('#email-hidden')


Form.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    //console.log(form.get('message'))
    sendMail.setAttribute('href', `mailto:ihanalytics@yopmail.com?subject=nombre ${form.get('name')}
    correo ${form.get('email')}&body=${form.get('message')}`)
    sendMail.click()
}