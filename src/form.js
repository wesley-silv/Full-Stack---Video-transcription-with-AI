import { startLoading, stopLoading, loadingMessage } from './loading'
import { loadVideo } from './youtube-api'

const form = document.querySelector('#form')

form.addEventListener('submit', e => {
  /* This e represent the event passed as argument of function */
  e.preventDefault()

  try {
    loadingMessage('Iniciando a aplicação!')
    startLoading()

    const formData = new FormData(form)
    const url = formData.get('url')
    loadVideo(url)

  } catch (error) {
    console.log('[SUBMIT_ERROR]', error)
  } finally {
    stopLoading()
  }
})
