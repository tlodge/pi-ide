import http from 'http';
import express from 'express';
import expressSession from 'express-session';
import memorystore from 'memorystore';
import bodyparser from 'body-parser';
import { fetch, write } from './config';
import initPassport from './strategies';
import minimist from 'minimist';
import init from './utils/websocket';
import uibuilder from './routes/uibuilder';
import authroute from './routes/auth';
import nodered from './routes/nodered';
import samples from './routes/samples';
import github from './routes/github';

//TODO get rid of dependencies on redis and mongo to slim right down!
//get the git stuff working with a form (..if not done?)

const MemoryStore = memorystore(expressSession);

const argv = minimist(process.argv.slice(2));

const PORT = argv.port || 8086;
const dev = argv.dev || false;
console.log("set port to", PORT);
console.log("dev mode ", dev);

fetch({ dev: dev }).then((config) => {
  start(config);
}, (err) => {
  console.log("error reading config!", err);
});

function checkcredentials(config) {
  const { CLIENT_ID, CLIENT_SECRET, CALLBACK } = config.github;
  return (CLIENT_ID.trim() != "" && CLIENT_SECRET.trim() != "" && CALLBACK.trim() != "");
}

function addroutes(app, auth) {
  console.log("adding routes");
  app.use('/auth', authroute);
  app.use('/github', auth, github);
  app.use('/nodered', auth, nodered);
  app.use('/samples', auth, samples);
  app.use('/uibuilder', auth, uibuilder);
  console.log("successfully added routes");
}

function start(config) {

  const app = express();

  //to support posts!
  app.use(bodyparser.urlencoded({ extended: false, limit: '5mb' }));
  app.use(bodyparser.json({ limit: '5mb' }));

  app.use(expressSession(
    {
      store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
      }),
      key: 'express.sid',
      resave: false,
      rolling: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 2 * 24 * 60 * 60 * 1000, //2 days
      },
      secret: config.secret,
    }
  ));

  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);

  const server = http.createServer(app);
  console.log("created server!");

  const auth = (req, res, next) => {

    if (req.isAuthenticated()) {
      req.config = config;
      return next(null);
    }

    res.redirect("/login");
  };


  if (checkcredentials(config)) {
    initPassport(app, config);
    addroutes(app, auth);
  }

  console.log("calling init");
  init(server);
  console.log("done!");

  app.get('/login', function (req, res) {
    res.render('login');
  });

  /*app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });*/

  app.use('/', express.static("static"));

  app.get('/', function (req, res) {

    if (!checkcredentials(config)) {
      console.log("credentials are empty, so redirecting to settings")
      res.redirect('/settings');
      return;
    }

    if (!req.isAuthenticated()) {
      res.redirect("/login");
      return;
    }

    res.render('index');

  });

  app.get('/settings', function (req, res) {
    if (checkcredentials(config)) {
      res.redirect("/login");
    } else {
      res.render('settings', { title: "Nearly there - you just need set your github settings", config: config.github });
    }
  });

  app.get('/settings/testurl', function (req, res) {
    res.send({ testurl: config.testserver.URL })
  });

  app.post('/config/update', async (req, res) => {
    const settings = await fetch({ dev });
    await write(JSON.stringify({ ...settings, github: { ...settings.github, ...req.body } }, null, 4));
    res.send({ testurl: config.testserver.URL })
  });

  console.log(`listening on port ${PORT}`)
  server.listen(PORT);

}



