import { initialize } from './init/init'
import { detectLanguage } from './language'
import './style.css'

window.onload = function() {
  detectLanguage()
  initialize()
}