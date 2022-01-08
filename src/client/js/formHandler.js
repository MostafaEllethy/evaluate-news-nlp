let formDisabled = false

function handleSubmit(event) {
    event.preventDefault()

    let url = document.getElementById('url').value

    if (!Client.checkURL(url)) {
        alert("The url is not valid!")
        return
    }

    if (formDisabled) return

    formDisabled = true

    console.log("::: Form Submitted :::")

    const spinner = document.getElementById('Spinner')
    const results = document.getElementById('Results')

    document.getElementById('Body').style.display = 'flex'
    results.style.display = 'none'
    spinner.style.display = 'block'

    fetch(`${API}?url=${url}`)
        .then(res => res.json())
        .then(function (res) {
            spinner.style.display = 'none'
            results.style.display = 'block'
            document.querySelector('dd.agreement').innerHTML = res.agreement
            document.querySelector('dd.confidence').innerHTML = res.confidence
            document.querySelector('dd.irony').innerHTML = res.irony
            document.querySelector('dd.model').innerHTML = res.model
            document.querySelector('dd.score_tag').innerHTML = res.score_tag
            document.querySelector('dd.subjectivity').innerHTML = res.subjectivity
        }).catch(() => alert("Error while fetching api!")).then(() => formDisabled = false)
}

export { handleSubmit }
