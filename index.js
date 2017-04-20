const { send } = require('micro')
const cors = require('micro-cors')()
const { get } = require('axios')

const fetchSite = () => {
  get('https://jackhanford.com/writing')
  console.log('fetched writing')
  get('https://jackhanford.com/projects')
  console.log('fetched projects')
}

fetchSite()

setInterval(fetchSite, 60 * 60 * 1000)

module.exports = cors((req, res) => send(res, 200, 'working!'))
