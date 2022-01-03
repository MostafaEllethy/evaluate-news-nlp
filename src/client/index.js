import './styles/resets.scss'
import './styles/base.scss'
import './styles/main.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'

import { checkURL } from './js/urlChecker.js'
import { handleSubmit } from './js/formHandler.js'
import { checkForName } from './js/nameChecker.js'

export {
    checkURL,
    handleSubmit,
    checkForName
}
