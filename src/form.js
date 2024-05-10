import { startLoading, stopLoading, loadingMessage } from "./loading"

const form = document.querySelector('#form')

form.addEventListener(
  'submit',
  (e /* This e represent the event passed as argument of funciton */) => {
    e.preventDefault()

    try {
      loadingMessage('Iniciando a aplicação!')
      startLoading()
    } catch (error) {
      console.log('[SUBMIT_ERROR]', error)
    } finally {
      stopLoading()
    }
  }
)
