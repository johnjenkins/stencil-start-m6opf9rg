const express = require('express');
const app = express();
const hydrate = require('./hydrate');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const port = 3111;

app.engine('.html', function (filePath, opts, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err);

    const htmlString = ejs.render(
      content.toString(),
      { buglist: opts.buglist, title: opts.title },
      {
        views: [path.join(__dirname, 'views')],
      }
    );

    // {
    //       default: 'declarative-shadow-dom',
    //       scoped: ['cmp-child']
    //     }

    return hydrate
      .renderToString(htmlString, {
        serializeShadowRoot: 'scoped',
        language: 'en-US',
        direction: 'ltr',
        runtimeLogging: true,
        fullDocument: true,
        prettyHtml: true,
      })
      .then((resp) => {
        // console.log('incoming html', htmlString);
        console.log('generated html', resp.html);
        return callback(null, resp.html);
      });
  });
});

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

const buglist = ['slot-forwarding'];

buglist.forEach((bug) => {
  app.get('/' + bug, (req, res) => {
    res.render(bug, { buglist, title: bug });
  });
});

app.get('/', (req, res) => {
  res.render(buglist[0], { buglist, title: buglist[0] });
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
