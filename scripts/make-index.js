const fs = require('fs')
const path = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const RootDir = path.resolve(__dirname, '../')

const pageTitle = 'CSS in React'

const BUTTON_TITLE = 'Buttons'
const BUTTON_PREFIX = 'Button -'

const WORKSHOP_TITLE = 'Workshops'
const WORKSHOP_PREFIX = 'Store Workshop -'

const SOLUTION_TITLE = 'Workshop Solutions'
const SOLUTION_PREFIX = 'Store Solution -'

const RESOURCES_TITLE = 'Resources'

function isDirectory (dir) {
  return fs.lstatSync(dir).isDirectory()
}
const basePath = path.join(__dirname, '../')
const projectPaths = fs.readdirSync(basePath).filter((projdDir) =>{
  if(projdDir.startsWith('0') && projdDir.indexOf('-') === 2) {
    return isDirectory(path.join(basePath, projdDir))
  }
})

const projectPages = projectPaths.reduce((allpages, currpage) => {

  var lessonEntryPath = path.join(basePath, currpage, './button/entry.js')
  var lessonJsonPath = path.join(basePath, currpage, '/button/package.json')
  if ( fs.existsSync(lessonEntryPath) && fs.existsSync(lessonJsonPath)) {
    var lessonJSON = JSON.parse(fs.readFileSync(lessonJsonPath, 'utf8'))
    var lessonDesc = lessonJSON.description
    allpages.push({
      type: 'lesson',
      url: '/' + currpage.substr(3) + '/button/',
      title: lessonDesc
    })
  }

  var workshopEntryPath = path.join(basePath, currpage, './workshop/entry.js')
  var workshopJsonPath = path.join(basePath, currpage, '/workshop/package.json')
  if ( fs.existsSync(workshopEntryPath) && fs.existsSync(workshopJsonPath)) {
    var workshopJSON = JSON.parse(fs.readFileSync(workshopJsonPath, 'utf8'))
    var workshopDesc = workshopJSON.description
    allpages.push({
      type: 'workshop',
      url: '/' + currpage.substr(3) + '/workshop/',
      title: workshopDesc
    })
  }

  var solutionEntryPath = path.join(basePath, currpage, './solution/entry.js')
  var solutionJsonPath = path.join(basePath, currpage, '/solution/package.json')
  if ( fs.existsSync(solutionEntryPath) && fs.existsSync(solutionJsonPath)) {
    var solutionJSON = JSON.parse(fs.readFileSync(solutionJsonPath, 'utf8'))
    var solutionDesc = solutionJSON.description
    allpages.push({
      type: 'solution',
      url: '/' + currpage.substr(3) + '/solution/',
      title: solutionDesc
    })
  }
  return allpages
}, [])

const markup = ReactDOMServer.renderToStaticMarkup(
  React.createElement('html', {},
    React.createElement('head', {},
      React.createElement('title', {}, pageTitle),
      React.createElement('link', { rel: 'stylesheet', href: '/css/server.css' })
    ),
    React.createElement('body', { id: 'index' },

      React.createElement('h1', {}, pageTitle),

      React.createElement('main', { className: 'main' },

        React.createElement('ul', { className: 'col' },
          React.createElement('li', { key: BUTTON_TITLE, className: 'title' },
            React.createElement('span', {}, BUTTON_TITLE)
          ),
          projectPages.filter(function (page) {
            return page.type === 'lesson'
          }).map(function (page) {
            return React.createElement('li', { key: page.url },
              React.createElement('a', { href: page.url }, page.title.substr(page.title.indexOf(BUTTON_PREFIX)+BUTTON_PREFIX.length+1))
            )
          })
        ),

        React.createElement('ul', { className: 'col' },
          React.createElement('li', { key: WORKSHOP_TITLE, className: 'title' },
            React.createElement('span', {}, WORKSHOP_TITLE)
          ),
          projectPages.filter(function (page) {
            return page.type === 'workshop'
          }).map(function (page) {
            return React.createElement('li', { key: page.url },
              React.createElement('a', { href: page.url }, page.title.substr(page.title.indexOf(WORKSHOP_PREFIX)+WORKSHOP_PREFIX.length+1))
            )
          })
        ),

        React.createElement('ul', { className: 'col' },
          React.createElement('li', { key: SOLUTION_TITLE, className: 'title' },
            React.createElement('span', {}, SOLUTION_TITLE)
          ),
          projectPages.filter(function (page) {
            return page.type === 'solution'
          }).map(function (page) {
            return React.createElement('li', { key: page.url },
              React.createElement('a', { href: page.url }, page.title.substr(page.title.indexOf(SOLUTION_PREFIX)+SOLUTION_PREFIX.length+1))
            )
          }),
          React.createElement('ul', {},
            React.createElement('li', { key: 'festivalstore-title', className: 'title' },
              React.createElement('span', {}, RESOURCES_TITLE)
            ),
            React.createElement('li', { key: 'festivalstore-link' },
              React.createElement('a', { href: '/workshop.html' }, 'Workshop in CSS & HTML')
            ),
            React.createElement('li', { key: 'github-link' },
              React.createElement('a', { href: 'https://github.com/joeshub/css-in-react' }, 'CSS in React on Github')
            ),
            React.createElement('li', { key: 'twitter-link' },
              React.createElement('a', { href: 'https://twitter.com/joeseifi' }, '@JoeSeifi on Twitter')
            )
            
          )
        )
      )
    )
  )
)

const publicDir = path.join(RootDir, 'public')
fs.writeFileSync(path.join(publicDir, 'index.html'), markup)
