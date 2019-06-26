/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("minimist");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony export (immutable) */ __webpack_exports__["b"] = sendmessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io__);

var ns;
function init(server) {
  console.log("initing socket io");
  var io = __WEBPACK_IMPORTED_MODULE_0_socket_io___default.a.listen(server);
  ns = io.of('/databox');
  ns.on('connection', function (socket) {
    socket.on('join', function (app) {
      console.log("joining client to room ", app);
      socket.join(app);
    });
    socket.on('leave', function (app) {
      console.log("leaving room: " + app);
      socket.leave(app);
    });
    socket.on('disconnect', function () {
      console.log("socket disconnect!");
    });
  });
  console.log("finished initing socket io");
}
function sendmessage(room, event, message) {
  ns.to(room).emit(event, message);
}
;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dockerode__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dockerode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dockerode__);

var docker = new __WEBPACK_IMPORTED_MODULE_0_dockerode___default.a({
  socketPath: '/var/run/docker.sock'
});
/* harmony default export */ __webpack_exports__["a"] = (docker);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = matchLibraries;
/* harmony export (immutable) */ __webpack_exports__["e"] = flatten;
/* harmony export (immutable) */ __webpack_exports__["d"] = dedup;
/* harmony export (immutable) */ __webpack_exports__["b"] = createTarFile;
/* harmony export (immutable) */ __webpack_exports__["a"] = createDockerImage;
/* harmony export (immutable) */ __webpack_exports__["g"] = stopAndRemoveContainer;
/* harmony export (immutable) */ __webpack_exports__["c"] = createTestContainer;
/* unused harmony export writeTempFile */
/* unused harmony export removeTempFile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zlib__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zlib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zlib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tar_stream__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tar_stream___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_tar_stream__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docker__ = __webpack_require__(6);





function matchLibraries(code) {
  var REQUIRE_RE = /require\(['"]([^'"]+)['"](?:, ['"]([^'"]+)['"])?\);?/g;
  var IMPORT_RE = /\bimport\s+(?:.+\s+from\s+)?[\'"]([^"\']+)["\']/g;
  var requires = code.match(REQUIRE_RE);
  var imports = code.match(IMPORT_RE);
  var r1 = [],
      r2 = [];

  if (requires && requires.length > 0) {
    r1 = requires.map(function (pkg) {
      return pkg.replace(/require\w*\(\w*['"]/g, "").replace(/['"]\);*/g, "");
    });
  }

  if (imports && imports.length > 0) {
    r2 = imports.map(function (module) {
      return module.replace(/import\s*/g, "").replace(/\s*(\w|\W|\s)*from\s*/g, "").replace(/['"]/g, "");
    });
  }

  return [].concat(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(r1), __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(r2));
}
function flatten(arr) {
  return arr.reduce(function (acc, row) {
    return row.reduce(function (acc, src) {
      acc.push(src);
      return acc;
    }, acc);
  }, []);
}
function dedup(arr) {
  var seen = {};
  return arr.filter(function (item) {
    if (seen[item]) return false;
    seen[item] = true;
    return true;
  });
}

var _addEntry = function _addEntry(pack, name, file) {
  return new Promise(function (resolve, reject) {
    pack.entry({
      name: name
    }, file, function (err) {
      if (err) {
        console.log("error adding entry!", err);
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

function createTarFile(dockerfile, flowfile, path) {
  console.log("creating tar file", path);
  var tarball = __WEBPACK_IMPORTED_MODULE_2_fs___default.a.createWriteStream(path);
  var gzip = __WEBPACK_IMPORTED_MODULE_1_zlib___default.a.createGzip();
  var pack = __WEBPACK_IMPORTED_MODULE_3_tar_stream___default.a.pack();
  return _addEntry(pack, "Dockerfile", dockerfile).then(function () {
    return _addEntry(pack, "flows.json", flowfile);
  }).then(function () {
    pack.finalize();
    var stream = pack.pipe(gzip).pipe(tarball);
    return new Promise(function (resolve, reject) {
      stream.on('finish', function (err) {
        if (err) {
          console.log("error creating tar file", err);
          reject(err);
        } else {
          console.log("successfully created tar file", path);
          resolve(path);
        }
      });
    });
  });
}
/*return new Promise((resolve, reject)=>{
	var tarball = fs.createWriteStream(path);
	const gzip   = zlib.createGzip();
	const pack   = tar.pack();
	pack.entry({name: 'Dockerfile'}, dockerfile, function(err){
		if (err){
			reject(err);
		}
		
		console.log("am herwe");
		
		pack.entry({name: "flows.json"}, flowfile, function(err){
			if (err){
			
						reject(err);
			}
			console.log("finalising");
			pack.finalize();
		
			const stream = pack.pipe(gzip).pipe(tarball);
	
			stream.on('finish', function (err) {
				resolve(path);
			});	
		});
	});
})
}*/

/*export function createTarFile(dockerfile, path) {

	console.log("OK IN CREATE TAR FILE!!")
	return new Promise((resolve, reject) => {

		var tarball = fs.createWriteStream(path);
		const gzip = zlib.createGzip();
		const pack = tar.pack();

		pack.entry({ name: 'Dockerfile' }, dockerfile, function (err) {
			if (err) {
				reject(err);
			}
			pack.finalize();

			const stream = pack.pipe(gzip).pipe(tarball);

			stream.on('finish', function (err) {
				resolve(path);
			});
		});
	});
}*/

function createDockerImage(tarfile, tag) {
  console.log("creating image for tarfile ".concat(tarfile, " with docker tag ").concat(tag));
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_4__docker__["a" /* default */].buildImage(tarfile, {
      t: tag,
      nocache: true
    }, function (err, output) {
      if (err) {
        console.log("error building image", err);
        console.warn(err);
        reject(err);
        return;
      }

      output.pipe(process.stdout);
      output.on('error', function (err) {
        console.log("ERROR!!!", err);
        reject(err);
        return;
      });
      output.on('end', function () {
        console.log("FINISHED!!!");
        resolve(tag);
      });
    });
  });
}
function stopAndRemoveContainer(name) {
  return new Promise(function (resolve, reject) {
    var container = __WEBPACK_IMPORTED_MODULE_4__docker__["a" /* default */].listContainers({
      all: true
    }, function (err, containers) {
      if (err) {
        reject(err);
      }

      var container = containers.reduce(function (acc, container) {
        console.log("checking", "/".concat(name), " in ", container.Names);

        if (container.Names.indexOf("/".concat(name)) != -1) {
          return container;
        }

        return acc;
      }, null);

      if (!container) {
        console.log("did not find container");
        reject();
        return;
      }

      var containerToStop = __WEBPACK_IMPORTED_MODULE_4__docker__["a" /* default */].getContainer(container.Id);
      containerToStop.stop(function (err, data) {
        console.log("container stopped!"); //if (err){
        //	reject(err);
        //	return;
        //}

        containerToStop.remove(function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        });
      });
    });
  });
}
/*
 note we open port 9123  to open a websocket to receive video from the client when 
 a webcam is used and 8096 is the (docker mapped) port that serves up the webcam page
*/

function createTestContainer(image, name, network) {
  var self = this;
  console.log("creating test container ".concat(image, ", name: ").concat(name)); //#PortBindings: { "9123/tcp": [{ "HostPort": "9123" }] }, 
  //"9123/tcp":{},

  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_4__docker__["a" /* default */].createContainer({
      Image: image,
      PublishAllPorts: true,
      Links: ["mock-datasource:mock-datasource", "databox-test-server:databox-test-server"
      /*, "openface:openface"*/
      ],
      Env: ["TESTING=true", "MOCK_DATA_SOURCE=http://mock-datasource:8080"],
      //HostConfig: {NetworkMode: network},
      Labels: {
        'user': "".concat(name)
      },
      ExposedPorts: {
        "1880/tcp": {},
        "8096/tcp": {}
      },
      Cmd: ["npm", "start", "--", "--userDir", "/data"],
      name: "".concat(name, "-red")
    }, function (err, container) {
      if (err) {
        console.log("error:", err);
        return stopAndRemoveContainer("".concat(name, "-red")).then(function () {
          return createTestContainer(image, name, network);
        }, function (err) {
          reject(err);
          return;
        });
      } else {
        console.log("ok am here");
        container.start({}, function (err, data) {
          if (err) {
            console.log("error starting container", err);
            reject(err);
          } else {
            console.log("started container");
            resolve(container);
          }
        });
      }
    });
  });
}
function writeTempFile(filestr, fileName) {
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_2_fs___default.a.writeFile(fileName, filestr, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(true);
    });
  });
}
function removeTempFile(fileName) {
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_2_fs___default.a.unlink(fileName, function (err) {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }

      resolve(true);
    });
  });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_session__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_memorystore__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_memorystore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_memorystore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__strategies__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_minimist__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_minimist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_minimist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_websocket__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_uibuilder__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_nodered__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routes_samples__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__routes_github__ = __webpack_require__(36);
















 //TODO get rid of dependencies on redis and mongo to slim right down!
//get the git stuff working with a form (..if not done?)

var MemoryStore = __WEBPACK_IMPORTED_MODULE_6_memorystore___default()(__WEBPACK_IMPORTED_MODULE_5_express_session___default.a);
var argv = __WEBPACK_IMPORTED_MODULE_10_minimist___default()(process.argv.slice(2));
var PORT = argv.port || 8086;
var dev = argv.dev || false;
console.log("set port to", PORT);
console.log("dev mode ", dev);
Object(__WEBPACK_IMPORTED_MODULE_8__config__["a" /* fetch */])({
  dev: dev
}).then(function (config) {
  start(config);
}, function (err) {
  console.log("error reading config!", err);
});

function checkcredentials(config) {
  var _config$github = config.github,
      CLIENT_ID = _config$github.CLIENT_ID,
      CLIENT_SECRET = _config$github.CLIENT_SECRET,
      CALLBACK = _config$github.CALLBACK;
  return CLIENT_ID.trim() != "" && CLIENT_SECRET.trim() != "" && CALLBACK.trim() != "";
}

function addroutes(app, auth) {
  console.log("adding routes");
  app.use('/auth', __WEBPACK_IMPORTED_MODULE_13__routes_auth__["a" /* default */]);
  app.use('/github', auth, __WEBPACK_IMPORTED_MODULE_16__routes_github__["a" /* default */]);
  app.use('/nodered', auth, __WEBPACK_IMPORTED_MODULE_14__routes_nodered__["a" /* default */]);
  app.use('/samples', auth, __WEBPACK_IMPORTED_MODULE_15__routes_samples__["a" /* default */]);
  app.use('/uibuilder', auth, __WEBPACK_IMPORTED_MODULE_12__routes_uibuilder__["a" /* default */]);
  console.log("successfully added routes");
}

function start(config) {
  var app = __WEBPACK_IMPORTED_MODULE_4_express___default()(); //to support posts!

  app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.urlencoded({
    extended: false,
    limit: '5mb'
  }));
  app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.json({
    limit: '5mb'
  }));
  app.use(__WEBPACK_IMPORTED_MODULE_5_express_session___default()({
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h

    }),
    key: 'express.sid',
    resave: false,
    rolling: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000 //2 days

    },
    secret: config.secret
  }));
  app.set('view engine', 'html');
  app.engine('html', __webpack_require__(37).renderFile);
  var server = __WEBPACK_IMPORTED_MODULE_3_http___default.a.createServer(app);
  console.log("created server!");

  var auth = function auth(req, res, next) {
    if (req.isAuthenticated()) {
      req.config = config;
      return next(null);
    }

    res.redirect("/login");
  };

  if (checkcredentials(config)) {
    Object(__WEBPACK_IMPORTED_MODULE_9__strategies__["a" /* default */])(app, config);
    addroutes(app, auth);
  }

  console.log("calling init");
  Object(__WEBPACK_IMPORTED_MODULE_11__utils_websocket__["a" /* default */])(server);
  console.log("done!");
  app.get('/login', function (req, res) {
    res.render('login');
  });
  /*app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });*/

  app.use('/', __WEBPACK_IMPORTED_MODULE_4_express___default.a["static"]("static"));
  app.get('/', function (req, res) {
    if (!checkcredentials(config)) {
      console.log("credentials are empty, so redirecting to settings");
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
      res.render('settings', {
        title: "Nearly there - you just need set your github settings",
        config: config.github
      });
    }
  });
  app.get('/settings/testurl', function (req, res) {
    res.send({
      testurl: config.testserver.URL
    });
  });
  app.post('/config/update',
  /*#__PURE__*/
  function () {
    var _ref = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_asyncToGenerator___default()(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
      var settings;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_8__config__["a" /* fetch */])({
                dev: dev
              });

            case 2:
              settings = _context.sent;
              _context.next = 5;
              return Object(__WEBPACK_IMPORTED_MODULE_8__config__["b" /* write */])(JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, settings, {
                github: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, settings.github, req.body)
              }), null, 4));

            case 5:
              res.send({
                testurl: config.testserver.URL
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  console.log("listening on port ".concat(PORT));
  server.listen(PORT);
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("memorystore");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetch;
/* harmony export (immutable) */ __webpack_exports__["b"] = write;
/* unused harmony export defaultdevsettings */
/* unused harmony export defaultsettings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fs__);

function fetch() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  console.log("fecthing confoig settings!");
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_0_fs___default.a.readFile("./conf/settings.json", 'utf8', function (err, data) {
      console.log("read in config!");

      if (err) {
        return write(JSON.stringify(options.dev ? defaultdevsettings() : defaultsettings(), null, 4)).then(function (settings) {
          resolve(settings);
          return;
        });
      }

      try {
        var settings = JSON.parse(data);
        resolve(settings);
        return;
      } catch (err) {
        console.log("error reading settings file!", err);
        reject(defaultsettings());
      }

      ;
    });
  });
}
function write(file) {
  return new Promise(function (resolve, reject) {
    try {
      __WEBPACK_IMPORTED_MODULE_0_fs___default.a.mkdir("./conf", function () {
        __WEBPACK_IMPORTED_MODULE_0_fs___default.a.writeFile("./conf/settings.json", file, function (err) {
          if (err) {
            console.log("hmmm error writing conf/settings.json");
            reject(JSON.parse(file));
            return;
          }

          console.log("successfully created directory");
          resolve(JSON.parse(file));
        });
      });
    } catch (err) {
      console.log("error writing conf file", err);
      reject(JSON.parse(file));
      return;
    }
  });
}
function defaultdevsettings() {
  return {
    "secret": "asdaksgdsahgdhsagd ahjsgdjhsg",
    "github": {
      "CLIENT_ID": "",
      "CLIENT_SECRET": "",
      "CALLBACK": "http://localhost:8086/auth/github/callback",
      "API": "https://api.github.com",
      "RAW_URL": "https://raw.githubusercontent.com",
      "URL": "https://github.com"
    },
    "appstore": {
      "URL": "http://localhost:8091"
    },
    "registry": {
      "URL": ""
    },
    "mongo": {
      "URL": "mongodb://localhost:27017"
    },
    "redis": {
      "host": "localhost",
      "port": 6379
    },
    "testserver": {
      "URL": "http://localhost:9090"
    }
  };
}
function defaultsettings() {
  return {
    "secret": "asjhgdsajhd6sa7d78as6s87adsakgdsadgaskdgsagdk",
    "github": {
      "CLIENT_ID": "",
      "CLIENT_SECRET": "",
      "CALLBACK": "http://localhost:8086/auth/github/callback",
      "API": "https://api.github.com",
      "RAW_URL": "https://raw.githubusercontent.com",
      "URL": "https://github.com"
    },
    "appstore": {
      "URL": ""
    },
    "registry": {
      "URL": ""
    },
    "mongo": {
      "URL": "mongodb://mongo:27017"
    },
    "redis": {
      "host": "redis",
      "port": 6379
    },
    "testserver": {
      "URL": "http://localhost:9090"
    }
  };
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initPassport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_github__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_github___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_github__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_shimuser__ = __webpack_require__(21);



var GitHubStrategy = __WEBPACK_IMPORTED_MODULE_1_passport_github___default.a.Strategy;
function initPassport(app, config) {
  var _config$github = config.github,
      _config$github$CLIENT = _config$github.CLIENT_ID,
      CLIENT_ID = _config$github$CLIENT === void 0 ? "" : _config$github$CLIENT,
      _config$github$CLIENT2 = _config$github.CLIENT_SECRET,
      CLIENT_SECRET = _config$github$CLIENT2 === void 0 ? "" : _config$github$CLIENT2,
      _config$github$CALLBA = _config$github.CALLBACK,
      CALLBACK = _config$github$CALLBA === void 0 ? "" : _config$github$CALLBA;

  if (CLIENT_ID.trim() == "" || CLIENT_SECRET.trim() == "" || CALLBACK.trim() == "") {
    return;
  }

  var User = new __WEBPACK_IMPORTED_MODULE_2__models_shimuser__["a" /* default */]();
  console.log("have user", User);
  app.use(__WEBPACK_IMPORTED_MODULE_0_passport___default.a.initialize());
  app.use(__WEBPACK_IMPORTED_MODULE_0_passport___default.a.session());
  __WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new GitHubStrategy({
    clientID: config.github.CLIENT_ID,
    clientSecret: config.github.CLIENT_SECRET,
    callbackURL: config.github.CALLBACK
  }, function (accessToken, refreshToken, profile, cb) {
    var user = User.findOne("githubId", profile.id);

    if (user == null) {
      console.log("creating new user");
      var newuser = User.save({
        githubId: profile.id,
        username: profile.username,
        accessToken: accessToken,
        email: profile.email
      });
      return cb(null, newuser);
    } else {
      //MUST update here - incase the token has changed
      var updateduser = User.update("githubId", profile.id, "accessToken", accessToken);
      return cb(null, updateduser);
    }
  }));
  __WEBPACK_IMPORTED_MODULE_0_passport___default.a.serializeUser(function (user, done) {
    done(null, user._id);
  });
  __WEBPACK_IMPORTED_MODULE_0_passport___default.a.deserializeUser(function (id, done) {
    var user = User.findById(id);
    done(null, user);
  });
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("passport-github");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread__);





var _id = function _id() {
  return (1 + Math.random() * 12946127295).toString(16).replace(".", "");
};

var _findindex = function _findindex(key, value, users) {
  return users.reduce(function (acc, user, idx) {
    if (user[key] === value) {
      return idx;
    }

    return acc;
  }, -1);
};

var _finduser = function _finduser(key, value, users) {
  var index = _findindex(key, value, users);

  if (index != -1) {
    return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default()({}, users[index]);
  }

  return null;
};

var User =
/*#__PURE__*/
function () {
  function User() {
    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, User);

    this._users = [];
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(User, [{
    key: "findOne",
    value: function findOne(key, value) {
      return _finduser(key, value, this._users);
    }
  }, {
    key: "save",
    value: function save(user) {
      var _user = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default()({
        _id: _id()
      }, user);

      this._users.push(_user);

      return _user;
    }
  }, {
    key: "findById",
    value: function findById(_id) {
      return _finduser("_id", _id, this._users);
    }
  }, {
    key: "update",
    value: function update(key, value, setkey, setvalue) {
      var index = _findindex(key, value, this._users);

      if (index != -1) {
        this.users[index] = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default()({}, this.users[index], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_defineProperty___default()({}, setkey, setvalue));
        return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_objectSpread___default()({}, this.users[index]);
      }
    }
  }]);

  return User;
}();



/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_minimist__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_minimist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_minimist__);





var Promise = __webpack_require__(28);

Promise.promisifyAll(__WEBPACK_IMPORTED_MODULE_1_fs___default.a);
var argv = __WEBPACK_IMPORTED_MODULE_3_minimist___default()(process.argv.slice(2));
var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
var ROOTDIR = argv.dev ? __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(__dirname, "../static/uibuilder/") : __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(__dirname, "/static/uibuilder/");
router.post('/scene/add', function (req, res) {
  var DIRECTORY = __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(ROOTDIR, '/scenes/');
  var _req$body = req.body,
      name = _req$body.name,
      scene = _req$body.scene;
  var ts = Date.now();
  var filename = __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(DIRECTORY, "".concat(ts, "_").concat(name, ".scene"));
  __WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileAsync(filename, scene).then(function () {
    res.send({
      success: true
    });
  }, function (err) {
    res.send({
      success: false
    });
  });
});
router.get('/scenes/:name', function (req, res) {
  res.sendFile(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(ROOTDIR, '/scenes/' + req.params.name));
});
router.get('/scenes/', function (req, res) {
  __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readdir(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(ROOTDIR, '/scenes/'), function (err, files) {
    files = files || [];
    var scenes = files.filter(function (fileName) {
      return fileName.indexOf(".scene") != -1;
    });
    /*const scenes = images.map((fileName)=>{
       
         const f = path.join(__dirname, `./src/client/assets/images/${fileName}`);
       
        var contents = fs.readFileSync(f, 'utf8');
        
        return {
            image: fileName,
            body: contents,
        }
    });*/

    res.send(scenes);
  });
}); //just dev, so blocking read of images dir

router.get('/images/', function (req, res) {
  console.log("reading images from ", __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(ROOTDIR, '/images/'));
  __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readdir(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(ROOTDIR, '/images/'), function (err, files) {
    if (!files || err) {
      console.log(err);
      res.send([]);
      return;
    }

    var images = files.filter(function (fileName) {
      return fileName.indexOf(".svg") != -1;
    });
    var data = images.map(function (fileName) {
      var f = __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(ROOTDIR, "/images/".concat(fileName));
      var contents = __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFileSync(f, 'utf8');
      return {
        image: fileName,
        body: contents
      };
    });
    console.log("sending data", data);
    res.send(data);
  });
});
router.get('/images/:name', function (req, res) {
  res.sendFile(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(ROOTDIR, '/images/' + req.params.name));
});
router.post('/image/add', function (req, res) {
  var DIRECTORY = __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(ROOTDIR, '/images/');
  var _req$body2 = req.body,
      name = _req$body2.name,
      image = _req$body2.image; //var data = image.replace(/^data:image\/\w+;base64,/, "");
  //var buf = new Buffer(data, 'base64');

  var filename = __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(DIRECTORY, name);
  __WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileAsync(filename, image).then(function () {
    res.send({
      success: true
    });
  }, function (err) {
    console.log(err);
    res.send({
      success: false
    });
  });
});
/* harmony default export */ __webpack_exports__["a"] = (router); //module.exports = router;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport__);


var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router(); //need to explicity log this user out 

router.get('/logout', function (req, res) {
  //var User = require('../models/user')(req.config.mongo.URL);
  //if (req.user){
  //	User.findOne({ username: req.user.username}).remove().exec();
  //}
  console.log("logging out!");
  req.logout();
  res.redirect('/');
});
router.get('/loggedin', function (req, res) {
  res.send({
    status: req.isAuthenticated() ? "ok" : "fail"
  });
});
router.get('/github', __WEBPACK_IMPORTED_MODULE_1_passport___default.a.authenticate('github', {
  scope: 'public_repo'
}));
router.get('/github/callback', __WEBPACK_IMPORTED_MODULE_1_passport___default.a.authenticate('github', {
  failureRedirect: '/auth/github'
}), function (req, res) {
  console.log("callback success");
  res.redirect('/');
});
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_docker_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_stream__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_stream___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_stream__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_websocket__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_utils_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_minimist__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_minimist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_minimist__);





 //import net from 'net';
//import JsonSocket from 'json-socket';




var router = __WEBPACK_IMPORTED_MODULE_2_express___default.a.Router();
var argv = __WEBPACK_IMPORTED_MODULE_8_minimist___default()(process.argv.slice(2));
var DEVMODE = argv.dev || false;
var network = "bridge";
var streams = {};

var _postFlows = function _postFlows(ip, port, data, username) {
  var attempts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  console.log("connecting to ".concat(ip, ":").concat(port, "/flows"));
  username = username.toLowerCase(); //add in channelIDs here

  console.log("adding output types");
  var flows = data.map(function (node) {
    var outputtypes = ["app", "debugger", "bulbsout", "plugout"];
    var modifier = outputtypes.indexOf(node.type) != -1 ? {
      appId: username
    } : {}; //inject the appID

    return __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, node, modifier);
  });
  return new Promise(function (resolve, reject) {
    if (attempts > 5) {
      reject("sorry couldn't connect to the container!");
      return;
    }

    __WEBPACK_IMPORTED_MODULE_3_superagent___default.a.post("".concat(ip, ":").concat(port, "/flows")).send(flows).set('Accept', 'application/json').type('json').end(function (err, result) {
      if (err) {
        console.log("error posting new flows", err);
        setTimeout(function () {
          attempts += 1;
          console.log("retrying ", attempts);

          _postFlows(ip, port, data, username, attempts);
        }, 1000);
      } else {
        console.log("successfully installed new flows");
        resolve(true);
      }
    });
  });
};
/*  after a container has started it'll take a bit of time initing, after which we need to send it a flow file
    the only way I can think of to be sure it is ready to receive this is to monitor the container stdout and
    look for "Started Flows", and send the flow file a second after this */


var _waitForStart = function _waitForStart(container, username) {
  var showonconsole = true;
  username = username.toLowerCase();
  return new Promise(function (resolve, reject) {
    container.attach({
      stream: true,
      stdout: true,
      stderr: true
    }, function (err, stream) {
      stream.on('data', function (line) {
        var str = line.toString("utf-8", 8, line.length);
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
          msg: str
        });

        if (showonconsole) {
          console.log("".concat(str));
        }

        if (str.indexOf("Started flows") != -1) {
          //console.log("container ready for flows");
          showonconsole = false;
          setTimeout(function () {
            console.log("posting flows");
            resolve(true);
          }, 1000);
        }
      });
    });
  });
};

var _pullContainer = function _pullContainer(name, username) {
  console.log("pulling container", name);
  username = username.toLowerCase();
  return __WEBPACK_IMPORTED_MODULE_4__utils_docker_js__["a" /* default */].pull(name).then(function (stream, err) {
    return new Promise(function (resolve, reject) {
      if (err) {
        console.log("error pulling container!", err);
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
          msg: err.json.message
        });
        reject(err);
        return;
      }

      var pulled = function pulled() {
        console.log("successfully pulled container");
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
          msg: "successfully pulled container"
        });
        resolve("complete!");
      };

      var pulling = function pulling(event) {
        console.log("[pulling]: ".concat(event.toString()));
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
          msg: "[pulling]: ".concat(JSON.stringify(event))
        });
      };

      return __WEBPACK_IMPORTED_MODULE_4__utils_docker_js__["a" /* default */].modem.followProgress(stream, pulled, pulling);
    });
  });
};

var _fetchAddr = function _fetchAddr(cdata) {
  if (DEVMODE) {
    return {
      ip: "127.0.0.1",
      port: cdata['NetworkSettings']['Ports']['1880/tcp'][0]['HostPort']
    };
  }

  return {
    ip: cdata.NetworkSettings.Networks[network].IPAddress,
    port: 1880
  };
};

var _fetchRunningAddr = function _fetchRunningAddr(c) {
  console.log("FETCHING RUNNING ADDR");

  if (DEVMODE) {
    console.log("in dev mode!");
    return {
      ip: "127.0.0.1",
      port: c.Ports.reduce(function (acc, obj) {
        if (obj.PrivatePort == 1880) acc = obj.PublicPort;
        return acc;
      }, 0)
    };
  }

  console.log("ok getting ip, port from", c);
  return {
    ip: c.NetworkSettings.Networks[network].IPAddress,
    port: 1880 //c.Ports[0].PrivatePort,

  };
};

var _inspect = function _inspect(container) {
  return new Promise(function (resolve, reject) {
    container.inspect(function (err, cdata) {
      if (err) {
        reject(err);
      } else {
        resolve(cdata);
      }
    });
  });
};

var _startContainer = function _startContainer(container, flows, username) {
  username = username.toLowerCase();
  return _waitForStart(container, username).then(function () {
    return _inspect(container);
  }).then(function (cdata) {
    var _fetchAddr2 = _fetchAddr(cdata),
        ip = _fetchAddr2.ip,
        port = _fetchAddr2.port;

    return _postFlows(ip, port, flows, username);
  }, function (err) {
    console.log(err);
    Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
      msg: err.json.message
    });
    throw err;
  });
};

var _createNewImageAndContainer = function _createNewImageAndContainer() {
  var libraries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var username = arguments.length > 1 ? arguments[1] : undefined;
  var flows = arguments.length > 2 ? arguments[2] : undefined;
  var container = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "tlodge/databox-tester";
  //need to create a new Image!
  console.log("found external libraries/facedetect, so creating new image!");
  Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
    msg: "found external libraries, so creating new image!"
  });
  var libcommands = libraries.map(function (library) {
    return "RUN cd /data/nodes/databox && npm install --save ".concat(library);
  });
  var dcommands = ["FROM ".concat(container), "ADD flows.json /data/flows.json"].concat(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(libcommands));
  var dockerfile = dcommands.join("\n");
  console.log(dockerfile);
  var path = "tmp-".concat(username.toLowerCase(), ".tar.gz");
  return _pullContainer("".concat(container, ":latest"), username).then(function () {
    return Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils_js__["g" /* stopAndRemoveContainer */])("".concat(username.toLowerCase(), "-red"));
  }).then(function () {
    return Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils_js__["b" /* createTarFile */])(dockerfile, JSON.stringify(flows), path);
  }).then(function (tarfile) {
    console.log("created tar file ".concat(tarfile));
    return Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils_js__["a" /* createDockerImage */])(tarfile, "".concat(username.toLowerCase(), "-testimage"));
  }).then(function (image) {
    console.log("creating test container!");
    return Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils_js__["c" /* createTestContainer */])(image, username.toLowerCase(), network);
  }, function (err) {
    console.log("error creating test container!!");
    Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
      msg: err.json.message
    });
  }).then(function (container) {
    console.log("successfully created container");
    return _startContainer(container, flows, username);
  }, function (err) {
    Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
      msg: err.json.message
    });
  });
};

var _listContainers = function _listContainers() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_4__utils_docker_js__["a" /* default */].listContainers(options, function (err, containers) {
      if (err) {
        reject(containers);
      } else {
        resolve(containers);
      }
    });
  });
};

var _restart = function _restart(container) {
  return new Promise(function (resolve, reject) {
    container.restart({}, function (err, data) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

var _startNewContainer = function _startNewContainer(username, flows) {
  username = username.toLowerCase();
  return _pullContainer("tlodge/databox-tester:latest", username).then(function () {
    return Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils_js__["c" /* createTestContainer */])('tlodge/databox-tester', username, network);
  }, function (err) {
    Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
      msg: err.json.message
    });
  }).then(function (container) {
    return _startContainer(container, flows, username);
  }, function (err) {
    Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
      msg: err.json.message
    });
  });
}; //stop and remove image regardless of whether it is running already or not.  This will deal with teh problem where
//the test web app responds to the client webpage before it has been given the details of the new app.


var _createContainerFromStandardImage = function _createContainerFromStandardImage(username, flows) {
  //username = `${username}${Math.round(Math.random()*50)}`;
  username = username.toLowerCase();
  var opts = {
    filters: {
      label: ["user=".concat(username)],
      status: ['running', "exited"]
    }
  };
  return _listContainers(opts).then(function (containers) {
    return containers;
  }, function (err) {
    return err;
  }).then(function (containers) {
    console.log("Containers labeled user=".concat(username, " ").concat(containers.length)); //create a new container and start it, if it doesn't exist

    if (containers.length <= 0) {
      console.log("creating test container");
      Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
        msg: "creating test container"
      });
      return _startNewContainer(username, flows);
    } else {
      var c = containers[0]; //restart the container if it exists but is stopped

      if (c.State === 'exited') {
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
          msg: "restarting container"
        });
        var container = __WEBPACK_IMPORTED_MODULE_4__utils_docker_js__["a" /* default */].getContainer(c.Id);
        return _restart(container).then(function (cdata) {
          return _startContainer(container, flows, username);
        }, function (err) {
          Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
            msg: err.json.message
          });
          return err;
        });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_websocket__["b" /* sendmessage */])(username, "debug", {
          msg: "container already running, so removing"
        });
        return Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils_js__["g" /* stopAndRemoveContainer */])("".concat(username.toLowerCase(), "-red")).then(function () {
          _startNewContainer(username, flows);
        });
      }
    }
  });
};

router.post('/flows', function (req, res) {
  var flows = req.body;
  var libraries = Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils_js__["d" /* dedup */])(Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils_js__["e" /* flatten */])(req.body.reduce(function (acc, node) {
    if (node.type === "dbfunction") {
      acc = [].concat(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toConsumableArray___default()(acc), [Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils_js__["f" /* matchLibraries */])(node.func)]);
    }

    return acc;
  }, [])));
  var flowstr = JSON.stringify(flows);
  console.log("have flowstr!!", flowstr);

  if (flowstr.indexOf("facedetect") != -1) {
    console.log("creating face detect image!");
    return _createNewImageAndContainer(libraries, req.user.username.toLowerCase(), flows, "tlodge/databox-facetester").then(function (result) {
      res.send({
        success: true
      });
    }, function (err) {
      res.status(500).send({
        error: err
      });
    });
  } else if (libraries.length > 0) {
    return _createNewImageAndContainer(libraries, req.user.username.toLowerCase(), flows).then(function (result) {
      res.send({
        success: true
      });
    }, function (err) {
      res.status(500).send({
        error: err
      });
    });
  } else {
    return _createContainerFromStandardImage(req.user.username.toLowerCase(), flows).then(function (result) {
      res.send({
        success: true
      });
    }, function (err) {
      res.status(500).send({
        error: err
      });
    });
  }
});
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("dockerode");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("tar-stream");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);


var router = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();
router.get('/:sensor', function (req, res) {
  var sensor = req.params.sensor;

  if (!sensor) {
    res.send({
      success: false,
      error: "no sensor provided"
    });
    return;
  }

  var valid = /^[a-zA-Z]+$/.test(sensor);

  if (!valid) {
    console.log("invalid sensor requested!");
    res.send({
      success: false,
      error: "invalid sensor type"
    });
    return;
  }

  __WEBPACK_IMPORTED_MODULE_1_fs___default.a.readFile("./static/samples/".concat(sensor, ".json"), 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      res.send({
        success: false,
        error: err
      });
      return;
    }

    try {
      res.send({
        success: true,
        data: JSON.parse(data)
      });
      return;
    } catch (err) {
      console.log(err);
      res.send({
        success: false,
        error: "failed to read sensor data"
      });
      return;
    }
  });
});
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_superagent__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_docker__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_utils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_websocket__ = __webpack_require__(4);








var router = __WEBPACK_IMPORTED_MODULE_4_express___default.a.Router();
var networks = ["databox_default", "bridge"];
 //TODO: check if container is tagged instead, as this is a less ambiguous way of retrieving the required container

var _fetchDockerIP = function _fetchDockerIP(containerName) {
  console.log("retrieving docker ip for container ".concat(containerName));
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_6__utils_docker__["a" /* default */].listContainers({}, function (err, containers) {
      if (err) {
        console.log("error listing containers!!");
        reject(containers);
      } else {
        var ip = containers.reduce(function (acc, c) {
          if (_name(c).indexOf(containerName) !== -1) {
            //console.log("found container!!!");
            return _addr(c);
          }

          return acc;
        }, "127.0.0.1");
        console.log("RETURNING IP", ip);
        resolve(ip);
      }
    });
  });
};

var _name = function _name(container) {
  try {
    if (container["Names"]) {
      return container["Names"][0].split("\/").slice(-1)[0];
    } else {
      return "";
    }
  } catch (err) {
    console.log("error getting name for container", container);
    return "";
  }
};

var _addr = function _addr(container) {
  //console.log("GETTING THE ADDRESS OF THE CONTAINER", JSON.stringify(container,null,4));
  //databox_databox-cm-app-server-net
  //ingress
  console.log("retrieving addr for", container);

  if (container.NetworkSettings && container.NetworkSettings.Networks) {
    var net = networks.find(function (network) {
      return container.NetworkSettings.Networks[network];
    });
    console.log("found ip addr for network", net);

    if (net) {
      return container.NetworkSettings.Networks[net].IPAddress || "127.0.0.1";
    }
  }

  return "127.0.0.1";
};

var _createCommit = function _createCommit(config, user, repo, sha, filename, content, message, accessToken) {
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_5_superagent___default.a.put("".concat(config.github.API, "/repos/").concat(user.username, "/").concat(repo, "/contents/").concat(filename)).send({
      "message": message,
      "committer": {
        "name": user.username,
        "email": user.email || "".concat(user.username, "@me-box.com")
      },
      "content": content,
      "sha": sha
    }).set('Authorization', 'token ' + accessToken).set('Accept', 'application/json').end(function (err, data) {
      if (err) {
        console.log("******** ERROR ********", err);
        reject(err);
      } else {
        //have found that it can still take time before this registers as the latest commit.
        resolve(data);
      }
    });
  });
};

var _generateGithubRepo = function _generateGithubRepo(_ref) {
  var config = _ref.config,
      name = _ref.name,
      description = _ref.description,
      accessToken = _ref.accessToken;
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_5_superagent___default.a.post("".concat(config.github.API, "/user/repos")).send({
      "name": name,
      "description": description,
      "private": false,
      "has_issues": false,
      "has_wiki": false,
      "has_downloads": false,
      "topic": "databox"
    }).set('Authorization', "token ".concat(accessToken)).set('Accept', 'application/json').end(function (err, data) {
      if (err) {
        console.log("--> failed to create repo!");
        reject(err);
      } else {
        var result = data.body; //give github time it needs to set up repo

        setTimeout(function () {
          resolve({
            name: result.name,
            updated: result.updated_at,
            icon: result.owner.avatar_url,
            url: result.url
          });
        }, 2000);
      }
    });
  });
};

var _generateTopic = function _generateTopic(_ref2) {
  var config = _ref2.config,
      user = _ref2.user,
      accessToken = _ref2.accessToken,
      repo = _ref2.repo;
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_5_superagent___default.a.put("".concat(config.github.API, "/repos/").concat(user.username, "/").concat(repo.name, "/topics")).send({
      names: ["databox"]
    }).set('Authorization', "token ".concat(accessToken)).set('Accept', 'application/vnd.github.mercy-preview+json').end(function (err, data) {
      if (err) {
        console.log("failed to create repo", err);
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};

var _createRepo =
/*#__PURE__*/
function () {
  var _ref3 = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_asyncToGenerator___default()(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee(config, user, name, description, flows, dockerfile, manifestfile, commitmessage, accessToken) {
    var repo, _flows, _dockerfile, _manifestfile;

    return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _generateGithubRepo({
              config: config,
              name: name,
              description: description,
              accessToken: accessToken
            })["catch"](function (err) {
              console.log("error creating repo!!");
              throw err;
            });

          case 2:
            repo = _context.sent;
            _context.next = 5;
            return _generateTopic({
              config: config,
              user: user,
              accessToken: accessToken,
              repo: repo
            });

          case 5:
            _context.next = 7;
            return _addFile({
              config: config,
              username: user.username,
              repo: repo.name,
              filename: 'flows.json',
              email: user.email || "".concat(user.username, "@me-box.com"),
              message: commitmessage,
              content: new Buffer(JSON.stringify(flows, null, 4)).toString('base64'),
              accessToken: accessToken
            });

          case 7:
            _flows = _context.sent;
            _context.next = 10;
            return _addFile({
              config: config,
              username: user.username,
              repo: repo.name,
              filename: 'Dockerfile',
              email: user.email || "".concat(user.username, "@me-box.com"),
              message: commitmessage,
              content: new Buffer(dockerfile).toString('base64'),
              accessToken: accessToken
            });

          case 10:
            _dockerfile = _context.sent;
            _context.next = 13;
            return _addFile({
              config: config,
              username: user.username,
              repo: repo.name,
              filename: 'databox-manifest.json',
              email: user.email || "".concat(user.username, "@me-box.com"),
              message: commitmessage,
              content: new Buffer(manifestfile).toString('base64'),
              accessToken: accessToken
            });

          case 13:
            _manifestfile = _context.sent;
            return _context.abrupt("return", [_flows, _dockerfile, _manifestfile]);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function _createRepo(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

var _addFile = function _addFile(options) {
  var config = options.config,
      username = options.username,
      repo = options.repo,
      filename = options.filename,
      message = options.message,
      email = options.email,
      content = options.content,
      accessToken = options.accessToken;
  console.log("adding a file!!");
  console.log("".concat(config.github.API, "/repos/").concat(username, "/").concat(repo, "/contents/").concat(filename));
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_5_superagent___default.a.put("".concat(config.github.API, "/repos/").concat(username, "/").concat(repo, "/contents/").concat(filename)).send({
      "message": message,
      "committer": {
        "name": username,
        "email": email
      },
      "content": content
    }).set('Authorization', "token ".concat(accessToken)).set('Accept', 'application/json').end(function (err, res) {
      if (err) {
        console.log("error adding file", err);
        reject(err);
      } else {
        resolve(Object.assign({}, res.body, {
          repo: repo
        }));
      }
    });
  });
};

var _fetchFile = function _fetchFile(config, username, repoowner, accessToken, repo, filename) {
  console.log("{fetching file: ".concat(filename));
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_5_superagent___default.a.get("".concat(config.github.API, "/repos/").concat(repoowner, "/").concat(repo, "/contents/").concat(filename)).set('Accept', 'application/json').set('Authorization', "token ".concat(accessToken)).end(function (err, data) {
      if (err || !data.ok) {
        reject(err);
      } else {
        //only send back sha (used for future updates) if user that requested this repo is the owner
        var str = new Buffer(data.body.content, 'base64').toString('ascii');

        try {
          if (username === repoowner) {
            resolve({
              content: str,
              sha: data.body.sha
            });
          } else {
            resolve({
              content: str
            });
          }
        } catch (error) {
          resolve({
            content: {}
          });
        }
      }
    });
  });
};

var _saveToAppStore = function _saveToAppStore(config, manifest, username) {
  console.log("in save to app store with manifest", manifest); //if no appstore url specified, assume a dockerised one running and retrieve docker ip

  if (!config.appstore || (config.appstore.URL || "").trim() === "") {
    console.log("fetching docker ip for databox_app-server");
    return _fetchDockerIP("databox_app-server").then(function (ip) {
      console.log("url to post to:", ip);
      return _postToAppStore("".concat(ip, ":8181"), manifest, username);
    });
  } else {
    return _postToAppStore(config.appstore.URL, manifest, username);
  }
}; //this should now post to github manifest repo!


var _postToAppStore = function _postToAppStore(storeurl, manifest, username) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

var _generateDockerfile = function _generateDockerfile(libraries, config, name) {
  var libcommands = libraries.map(function (library) {
    return "RUN cd /data/nodes/databox && npm install --save ".concat(library);
  }); //add a echo statement to force it not to cache (nocache option in build doesn't seem to work

  var dcommands = ["FROM databox/red-arm64:latest", "ADD flows.json /home/databox/data/flows.json", 'LABEL databox.type="app"', "LABEL databox.manifestURL=\"".concat(config.appstore.URL, "/").concat(name.toLowerCase(), "/databox-manifest.json\"")];
  var startcommands = ["EXPOSE 8080", "CMD /home/databox/start.sh"];
  return [].concat(dcommands, __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(libcommands), startcommands).join("\n");
};

var _generateManifest = function _generateManifest(config, user, reponame, app, packages, allowed) {
  console.log("generating manifest!");
  var appname = app.name.startsWith(user.username) ? app.name : "".concat(user.username, "-").concat(app.name);
  return {
    'manifest-version': 1,
    name: appname.toLowerCase(),
    version: "0.1.0",
    description: app.description,
    author: user.username,
    licence: "MIT",
    "databox-type": "app",
    tags: app.tags ? app.tags.split(",") : "",
    homepage: "".concat(config.github.URL, "/").concat(user.username, "/").concat(reponame),
    repository: {
      type: 'git',
      url: "git+".concat(config.github.URL, "/").concat(user.username, "/").concat(reponame, ".git")
    },
    packages: packages.map(function (pkg) {
      return {
        id: pkg.id,
        name: pkg.name,
        purpose: pkg.purpose,
        required: pkg.install === "compulsory",
        datastores: Array.from(new Set(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(pkg.datastores.map(function (d) {
          return d.id;
        })))),
        risk: pkg.risk,
        benefits: pkg.benefits
      };
    }),
    'allowed-combinations': allowed,
    datasources: Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["e" /* flatten */])(packages.map(function (pkg) {
      return pkg.datastores.map(function (d) {
        return {
          type: d.type,
          required: true,
          name: d.name || d.type,
          clientid: d.id,
          granularities: []
        };
      });
    })),
    "network-permissions": [],
    "resource-requirements": {},
    volumes: []
  };
};

var _pull = function _pull(repo) {
  return new Promise(function (resolve, reject) {
    console.log("pulling repo", repo);
    resolve("pulled repo");
  });
  /*return new Promise((resolve, reject) => {
  	docker.pull(repo, (err, stream) => {
  		docker.modem.followProgress(stream, onFinished, onProgress);
  			function onFinished(err, output) {
  			if (err) {
  				reject(err);
  			} else {
  				resolve(output);
  			}
  		}
  		function onProgress(event) {
  			console.log(event);
  		}
  		});
  })*/
};

var _stripscheme = function _stripscheme(url) {
  return url.replace("http://", "").replace("https://", "");
};

var _uploadImageToRegistry = function _uploadImageToRegistry(tag, registry, username) {
  console.log("uploading image to registry", tag, registry, username);
  return new Promise(function (resolve, reject) {
    if (registry && registry.trim() !== "") {
      var image = __WEBPACK_IMPORTED_MODULE_6__utils_docker__["a" /* default */].getImage(tag);
      console.log("ok have image to upload", tag);
      console.log(image);
      image.push({
        registry: registry
      }, function (err, stream) {
        __WEBPACK_IMPORTED_MODULE_6__utils_docker__["a" /* default */].modem.followProgress(stream, onFinished, onProgress);

        function onFinished(err, output) {
          console.log("FINISHED PUSHING IMAGE!");

          if (err) {
            console.log(err);
            Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(username, "debug", {
              msg: "error pushing image!"
            });
            reject(err);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(username, "debug", {
              msg: "successfully pushed image!"
            });
            resolve(output);
          }
        }

        function onProgress(event) {
          Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(username, "debug", {
            msg: "[pushing]: ".concat(JSON.stringify(event))
          });
        }
      });
    } else {
      resolve();
    }
  });
};

var _formatmanifest = function _formatmanifest(manifest, config, user) {
  console.log("formatting manifest", JSON.stringify(manifest, null, 4)); //if empty object return

  if (Object.keys(manifest).length === 0 && manifest.constructor === Object) {
    return manifest;
  }

  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, manifest, {
    name: manifest.name.toLowerCase(),
    homepage: manifest.homepage.toLowerCase(),
    "docker-image": manifest.name.toLowerCase(),
    "docker-registry": _stripscheme(config.registry.URL) || user.username,
    "docker-image-tag": "latest",
    repository: __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, manifest.repository, {
      url: manifest.repository.url.toLowerCase()
    })
  });
};

var _buildImage =
/*#__PURE__*/
function () {
  var _ref4 = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_asyncToGenerator___default()(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee2(config, user, manifest, flows, dockerfile) {
    var path, tarfile, _appname, _tag, tag;

    return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(user.username, "debug", {
              msg: "pulling latest base container"
            });
            _context2.next = 3;
            return _pull("databox/red-arm64:latest")["catch"](function (err) {
              console.log("failed to pull latest base image!");
              Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(user.username, "debug", {
                msg: "could not pull latest image",
                err: err
              });
              throw err;
            });

          case 3:
            Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(user.username, "debug", {
              msg: "finshed pulling latest base container"
            });
            path = "".concat(user.username, "-tmp.tar.gz");
            _context2.next = 7;
            return Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["b" /* createTarFile */])(dockerfile, flows, path)["catch"](function (err) {
              console.log("failed to create tar file for building docker image!", err);
              Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(user.username, "debug", {
                msg: "could not create tar file!"
              });
              throw err;
            });

          case 7:
            tarfile = _context2.sent;
            Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(user.username, "debug", {
              msg: "successfully created tar file, creating docker image"
            });
            _appname = manifest.name.toLowerCase(); //.replace(`${user.username}-`, "");

            _tag = config.registry.URL && config.registry.URL.trim() != "" ? "".concat(_stripscheme(config.registry.URL)) : "".concat(user.username.toLowerCase());
            _context2.next = 13;
            return Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["a" /* createDockerImage */])(tarfile, "".concat(_tag, "/").concat(_appname, "-arm64:").concat(config.version || "latest"))["catch"](function (err) {
              console.log("failed to create docker image", err);
              Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(user.username, "debug", {
                msg: err
              });
              throw err;
            });

          case 13:
            tag = _context2.sent;
            Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(user.username, "debug", {
              msg: "uploading to registry with tag ".concat(tag)
            });
            /*await _uploadImageToRegistry(tag, `${config.registry.URL}`, user.username.toLowerCase()).catch((err) => {
            	sendmessage(user.username, "debug", { msg: err });
            	console.log("failed to upload image to registry!", err);
            	throw (err);
            });*/

            Object(__WEBPACK_IMPORTED_MODULE_8__utils_websocket__["b" /* sendmessage */])(user.username, "debug", {
              msg: "successfully published"
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function _buildImage(_x10, _x11, _x12, _x13, _x14) {
    return _ref4.apply(this, arguments);
  };
}(); //list all apps owned by this user


router.get('/repos/:user', function (req, res) {
  var user = req.user;
  var username = req.params.user; //set to this user if passed in empty string or no user

  if (!username || username.trim() === "") {
    username = req.user.username;
  }

  var query = {
    user: username,
    topic: "databox"
  };
  __WEBPACK_IMPORTED_MODULE_5_superagent___default.a //.get(`${req.config.github.API}/users/${username}/repos`)
  .get("".concat(req.config.github.API, "/search/repositories")).query({
    q: "user:".concat(user.username, " topic:databox")
  }).set('Accept', 'application/json').set('Authorization', "token ".concat(req.user.accessToken)).query(query).end(function (err, data) {
    if (err) {
      console.log(err); //res.status(500).send({ error: 'could not retrieve repos' });

      res.send({
        username: username,
        repos: []
      });
    } else {
      var repos = data.body.items.map(function (repo) {
        return {
          name: repo.name,
          description: repo.description,
          updated: repo.updated_at,
          icon: repo.owner.avatar_url,
          url: repo.url
        };
      });
      res.send({
        username: username,
        repos: repos
      });
    }
  });
}); //list all apps owned by this user

router.get('/repos', function (req, res) {
  console.log("getting repos with accessToken", req.user.accessToken);
  var user = req.user;
  __WEBPACK_IMPORTED_MODULE_5_superagent___default.a //.get(`${req.config.github.API}/users/${user.username}/repos`)
  .get("".concat(req.config.github.API, "/search/repositories")).query({
    q: "user:".concat(user.username, " topic:databox")
  }).set('Accept', 'application/json').set('Authorization', "token ".concat(req.user.accessToken)).end(function (err, data) {
    if (err) {
      console.log(err); //req.logout();
      //res.status(500).send({ error: 'could not retrieve repos' });

      res.send({
        username: req.user.username,
        repos: []
      });
    } else {
      var repos = data.body.items.map(function (repo) {
        return {
          name: repo.name,
          description: repo.description,
          updated: repo.updated_at,
          icon: repo.owner.avatar_url,
          url: repo.url
        };
      });
      res.send({
        username: req.user.username,
        repos: repos
      });
    }
  });
}); //load up an app from a repo

router.get('/flow', function (req, res) {
  var user = req.user;
  var repo = req.query.repo;
  var owner = req.query.username || user.username; //console.log("would fetch", `${repo}-manifest.json`);

  return Promise.all([_fetchFile(req.config, user.username, owner, user.accessToken, repo, 'flows.json'), //_fetchFile(req.config, user.username, owner, user.accessToken, "databox-manifest-store", `${repo}-manifest.json`),
  _fetchFile(req.config, user.username, owner, user.accessToken, repo, 'databox-manifest.json'), _fetchFile(req.config, user.username, owner, user.accessToken, repo, 'Dockerfile')]).then(function (values) {
    var flows = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, values[0], {
      content: JSON.parse(values[0].content)
    });

    var manifest = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, values[1], {
      content: JSON.parse(values[1].content)
    });

    res.send({
      result: 'success',
      flows: flows,
      manifest: manifest,
      Dockerfile: values[2]
    });
  }, function (err) {
    console.log(err);
    res.status(500).send({
      error: 'could not retrieve flows, manifest and Dockerfile'
    });
  });
}); //create a new 'app' (i.e a github repo prefixed with 'databox.').  Will also create a new  flows.json / manifest.json file.

router.post('/repo/new',
/*#__PURE__*/
function () {
  var _ref5 = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_asyncToGenerator___default()(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee3(req, res) {
    var user, name, description, flows, manifest, dockerfile, commitmessage, manifestfile, values, reponame;
    return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("CREATING A NEW REPO FOR USER", req.user.username);
            user = req.user;
            name = req.body.name.toLowerCase();
            description = req.body.description || "";
            flows = req.body.flows || [];
            manifest = req.body.manifest || {};
            console.log("manifest is", JSON.stringify(manifest, null, 4));
            dockerfile = "# ".concat(name, " Dockerfile");
            commitmessage = req.body.message || "first commit";
            manifestfile = JSON.stringify(_formatmanifest(manifest, req.config, user), null, 4);
            _context3.next = 12;
            return _createRepo(req.config, user, name, description, flows, dockerfile, manifestfile, commitmessage, req.user.accessToken)["catch"](function (err) {
              res.status(500).send({
                error: 'could not create files'
              });
              return;
            });

          case 12:
            values = _context3.sent;
            reponame = manifest.name.toLowerCase();

            if (values.length >= 3) {
              console.log("sending successfully created new repo!!", {
                result: 'success',
                repo: name,
                sha: {
                  flows: values[0].content.sha,
                  manifest: values[2].content.sha,
                  Dockerfile: values[1].content.sha
                }
              });
              res.send({
                result: 'success',
                repo: name,
                sha: {
                  flows: values[0].content.sha,
                  manifest: values[2].content.sha,
                  Dockerfile: values[1].content.sha
                }
              });
            } else {
              res.status(500).send({
                error: 'could not create files'
              });
            }

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x15, _x16) {
    return _ref5.apply(this, arguments);
  };
}());
router.post('/repo/update', function (req, res) {
  console.log("updating manifest", JSON.stringify(req.body.manifest, null, 4));
  var user = req.user;
  var repo = req.body.repo;
  var sha = req.body.sha;
  var message = req.body.message || "checkpoint commit";
  var libraries = Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["d" /* dedup */])(Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["e" /* flatten */])(req.body.flows.reduce(function (acc, node) {
    if (node.type === "dbfunction") {
      acc = [].concat(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(acc), [Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["f" /* matchLibraries */])(node.func)]);
    }

    return acc;
  }, [])));

  var dockerfile = _generateDockerfile(libraries, req.config, req.body.manifest.name);

  var flowscontent = new Buffer(JSON.stringify(req.body.flows, null, 4)).toString('base64');
  var manifestcontent = new Buffer(JSON.stringify(_formatmanifest(req.body.manifest, req.config, user), null, 4)).toString('base64');
  var dockerfilecontent = new Buffer(dockerfile).toString('base64');
  return _createCommit(req.config, user, repo, sha.flows, 'flows.json', flowscontent, message, user.accessToken).then(function (data) {
    return Promise.all([Promise.resolve(data.body.content.sha), _createCommit(req.config, user, repo, sha.manifest, 'databox-manifest.json', manifestcontent, message, user.accessToken)]);
  }, function (err) {
    res.status(500).send({
      error: err
    });
  }).then(function (values) {
    return Promise.all([Promise.resolve(values[0]), Promise.resolve(values[1].body.content.sha), _createCommit(req.config, user, repo, sha.Dockerfile, 'Dockerfile', dockerfilecontent, message, user.accessToken)]);
  }).then(function (values) {
    res.send({
      result: 'success',
      repo: repo,
      sha: {
        flows: values[0],
        manifest: values[1],
        Dockerfile: values[2].body.content.sha
      }
    });
  }, function (err) {
    console.log(err);
    res.status(500).send({
      error: 'could not update the repo'
    });
  });
});

var _manifestStoreExists = function _manifestStoreExists(API, user) {
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_5_superagent___default.a.get("".concat(API, "/repos/").concat(user.username, "/databox-manifest-store")).set('Accept', 'application/json').set('Authorization', "token ".concat(user.accessToken)).end(function (err, data) {
      if (data.body && data.body.message && data.body.message === "Not Found") {
        resolve(null);
        return;
      } else if (err) {
        resolve(null);
        return;
      }

      resolve(true);
    });
  });
};

var _createNewRepo = function _createNewRepo(options) {
  var config = options.config,
      user = options.user,
      repo = options.repo,
      description = options.description,
      message = options.message,
      data = options.data;
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_5_superagent___default.a.post("".concat(config.github.API, "/user/repos")).send({
      "name": repo,
      "description": description,
      "private": false,
      "has_issues": false,
      "has_wiki": false,
      "has_downloads": false
    }).set('Authorization', "token ".concat(user.accessToken)).set('Accept', 'application/json').end(function (err, data) {
      if (err) {
        console.log("--> failed to create repo!");
        console.log(err);
        reject(err);
      } else {
        var result = data.body; //give github time it needs to set up repo

        setTimeout(function () {
          resolve({
            name: result.name,
            updated: result.updated_at,
            icon: result.owner.avatar_url,
            url: result.url
          });
        }, 2000);
      }
    });
  }).then(function (repo) {
    return _addFile({
      config: config,
      username: user.username,
      repo: repo.name,
      filename: data.name,
      email: user.email || "".concat(user.username, "@me-box.com"),
      message: message,
      content: data.value,
      accessToken: user.accessToken
    });
  });
};

var _fileExists =
/*#__PURE__*/
function () {
  var _ref6 = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_asyncToGenerator___default()(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee4(config, user, filename) {
    return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _fetchFile(config, user.username, user.username, user.accessToken, "databox-manifest-store", filename)["catch"](function (err) {
              return false;
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function _fileExists(_x17, _x18, _x19) {
    return _ref6.apply(this, arguments);
  };
}();

var _saveManifestToStore =
/*#__PURE__*/
function () {
  var _ref7 = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_asyncToGenerator___default()(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee5(config, user, content, filename) {
    var repo, file;
    return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _manifestStoreExists(config.github.API, user);

          case 2:
            repo = _context5.sent;

            if (repo) {
              _context5.next = 9;
              break;
            }

            _context5.next = 6;
            return _createNewRepo({
              config: config,
              user: user,
              repo: "databox-manifest-store",
              description: "databox manifest store",
              message: "first commit",
              data: {
                name: filename,
                value: content
              }
            });

          case 6:
            return _context5.abrupt("return", _context5.sent);

          case 9:
            _context5.next = 11;
            return _fileExists(config, user, filename);

          case 11:
            file = _context5.sent;

            if (!file) {
              _context5.next = 18;
              break;
            }

            _context5.next = 15;
            return _createCommit(config, user, "databox-manifest-store", file.sha, filename, content, "update commit", user.accessToken);

          case 15:
            return _context5.abrupt("return", _context5.sent);

          case 18:
            _context5.next = 20;
            return _addFile({
              config: config,
              username: user.username,
              repo: "databox-manifest-store",
              filename: filename,
              email: user.email || "".concat(user.username, "@me-box.com"),
              message: "first commit",
              content: content,
              accessToken: user.accessToken
            });

          case 20:
            return _context5.abrupt("return", _context5.sent);

          case 21:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function _saveManifestToStore(_x20, _x21, _x22, _x23) {
    return _ref7.apply(this, arguments);
  };
}();

router.post('/publish',
/*#__PURE__*/
function () {
  var _ref8 = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_asyncToGenerator___default()(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee6(req, res) {
    var user, manifest, flows, libraries, dockerfile;
    return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            user = req.user;
            manifest = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, req.body.manifest, {
              datasources: __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(req.body.manifest.datasources)
            });
            flows = req.body.flows;
            libraries = Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["d" /* dedup */])(Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["e" /* flatten */])(flows.reduce(function (acc, node) {
              if (node.type === "dbfunction") {
                acc = [].concat(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(acc), [Object(__WEBPACK_IMPORTED_MODULE_7__utils_utils__["f" /* matchLibraries */])(node.func)]);
              }

              return acc;
            }, [])));
            dockerfile = _generateDockerfile(libraries, req.config, manifest.name);
            _context6.next = 7;
            return _buildImage(req.config, user, manifest, JSON.stringify(flows), dockerfile);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x24, _x25) {
    return _ref8.apply(this, arguments);
  };
}());
/*router.post('/publish', async (req, res) => {
	const user = req.user;
	const repo = req.body.repo;
	const manifest = {
		...req.body.manifest,
		datasources: [...req.body.manifest.datasources,
		{
			type: "personalLoggerActuator",
			required: false,
			name: "personalLoggerActuator",
			clientid: "personalLoggerActuator",
			granularites: [],
		}]
	}
	const flows = req.body.flows;
	const commitmessage = 'publish commit';
	sendmessage(user.username, "debug", { msg: `publishing manifest, ${JSON.stringify(manifest, null, 4)}` });

	//first save the manifest and flows file - either create new repo or commit changes	
	const libraries = dedup(flatten(flows.reduce((acc, node) => {
		if (node.type === "dbfunction") {
			acc = [...acc, matchLibraries(node.func)];
		}
		return acc;
	}, [])));

	//generate docker file
	const dockerfile = _generateDockerfile(libraries, req.config, manifest.name);

	//generate manifest file
	const manifestfile = JSON.stringify(_formatmanifest(manifest, req.config, user), null, 4);

	sendmessage(user.username, "debug", { msg: `dockerfile, ${dockerfile}` });

	if (repo && repo.sha && repo.sha.flows && repo.sha.Dockerfile) { //commit

		sendmessage(user.username, "debug", { msg: `commiting changes` });
		const flowcontent = new Buffer(JSON.stringify(flows, null, 4)).toString('base64');
		const manifestcontent = new Buffer(manifestfile).toString('base64');
		const dockerfilecontent = new Buffer(dockerfile).toString('base64');
		const message = commitmessage;

		const flowcommit = await _createCommit(req.config, user, repo.name, repo.sha.flows, 'flows.json', flowcontent, message, req.user.accessToken);
		const dockercommit = await _createCommit(req.config, user, repo.name, repo.sha.Dockerfile, 'Dockerfile', dockerfilecontent, message, req.user.accessToken);
		const manifestcommit = await _createCommit(req.config, user, repo.name, repo.sha.manifest, 'databox-manifest.json', manifestcontent, message, req.user.accessToken)

		//now add manifest to manifest store!
		const storecommit = await _saveManifestToStore(req.config, user, manifestcontent, `${repo.name}-manifest.json`);
		await _buildImage(req.config, user, manifest, JSON.stringify(flows), dockerfile);

		console.log("---flowcommit---", flowcommit.body.content.sha);

		console.log("full", flowcommit.body.content.sha);

		res.send({
			result: 'success',
			repo: repo.name,
			sha: {
				flows: flowcommit.body.content.sha,
				Dockerfile: dockercommit.body.content.sha,
				manifest: manifestcommit.body.content.sha,
			}
		});

	} else {
		const reponame = manifest.name.toLowerCase();
		const manifestcontent = new Buffer(JSON.stringify(_formatmanifest(manifest, req.config, user), null, 4)).toString('base64');
		const values = await _createRepo(req.config, user, reponame, manifest.description, flows, dockerfile, manifestfile, commitmessage, req.user.accessToken);

		console.log("ok values are", values);
		await _saveManifestToStore(req.config, req.user, manifestcontent, `${reponame}-manifest.json`);
		await _buildImage(req.config, user, manifest, JSON.stringify(flows), dockerfile);
		res.send({
			result: 'success',
			repo: reponame,
			sha: {
				flows: values[0].content.sha,
				Dockerfile: values[1].content.sha,
				manifest: values[2].content.sha,
			}
		});
	}
});*/

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ })
/******/ ]);