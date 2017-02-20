const fs = require('fs')
const path = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const RootDir = path.resolve(__dirname, '../')
const pageTitle = 'CSS in React'

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

  var lessonEntryPath = path.join(basePath, currpage, './lessons/entry.js')
  var lessonJsonPath = path.join(basePath, currpage, '/lessons/package.json')
  if ( fs.existsSync(lessonEntryPath) && fs.existsSync(lessonJsonPath)) {
    var lessonJSON = JSON.parse(fs.readFileSync(lessonJsonPath, 'utf8'))
    var lessonDesc = lessonJSON.description
    allpages.push({
      type: 'lesson',
      url: '/' + currpage.substr(3) + '/lessons/',
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
      React.createElement('link', { rel: 'stylesheet', href: '/css/base.css' })
    ),
    React.createElement('body', { id: 'index' },

      React.createElement('h1', {}, pageTitle),

      React.createElement('ul', {},
        projectPages.map(function (page) {
          return React.createElement('li', { key: page.url },
            React.createElement('span', {}, page.type + ' - '),
            React.createElement('a', { href: page.url }, page.title)
          )
        }),
        
        React.createElement('li', { key: 'sxburritos' },
          React.createElement('span', {}, 'static - '),
          React.createElement('a', { href: '/sxburritos/' }, 'SXBURRITOS - Project Design')
        )

      )
    )
  )
)

const publicDir = path.join(RootDir, 'public')
fs.writeFileSync(path.join(publicDir, 'index.html'), markup)
