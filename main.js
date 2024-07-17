/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: white;
}
body {
  background: linear-gradient(#006200, #171d35 15%);
}

body::-webkit-scrollbar {
  display: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 1.5rem;
}

#search-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
}

#measure {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

#day-container {
  width: 300px;
  height: 200px;
  border: 2px solid rgb(223, 252, 255);
  border-radius: 1rem;
  position: relative;
  transition: height 1s ease-in-out;
  overflow: hidden;
}

#day-container.full-day {
  height: 400px;
}

.top,
.bottom {
  width: 100%;
  height: 200px;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
}
div.bottom {
  display: none;
}
.icon {
  width: 100px;
  height: 100px;
}

.data-para {
  text-align: center;
  max-width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.expand,
.retract {
  position: absolute;
  bottom: 0;
  left: calc(50% - 15px);
  cursor: pointer;
  background: rgba(50, 50, 50, 0.5);
  border-radius: 50%;
}

button {
  background: #373c50;
  border-radius: 0.5rem;
  border: 2px solid #fff;
  cursor: pointer;
}

button:active {
  background: #393f58;
  border: 2px solid #e2e2e2;
}

input,
select {
  background-color: #232d53;
  text-align: center;
  border-radius: 1rem;
  border: 2px solid #fff;
}

/* input[type="text"] {
  
} */

#search-btn {
  padding: 0.3rem 2rem;
  border-radius: 1rem;
}

#forecast-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
}

.fc {
  width: 150px;
  height: 500px;
  border: 2px solid rgb(223, 252, 255);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  transition: width 1s ease-in-out, height ease-in-out 1s;
}

.hour-btn {
  width: 100%;
  height: 20px;
  background: #177d17;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.hour-btn > img {
  cursor: pointer;
}

.front-side {
  width: 100%;
  height: calc(100% - 20px);
}

.table-wrapper {
  width: 100%;
  height: calc(100% - 20px);
  overflow: auto;
  scrollbar-gutter: auto;
  display: none;
}

.table-wrapper::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.table-wrapper::-webkit-scrollbar-track {
  background-color: rgba(250, 250, 250, 0.3);
  border-radius: 5px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: #232d53;
  border-radius: 5px;
}

.table-wrapper::-webkit-scrollbar-corner {
  background: transparent;
}

tr,
th,
td {
  border: 1px solid rgb(223, 252, 255);
}

table {
  border-collapse: collapse;
}

tr {
  height: 20px;
}

td {
  width: 20px;
  height: 20px;
  text-align: end;
}

tr:first-child {
  position: sticky;
  top: 0;
  background: #232d53;
}

th:first-child {
  position: sticky;
  left: 0;
  background: #232d53;
}

.full-view-modal {
  position: fixed;
  max-height: 100%;
  background: #1c202e;
  overflow: auto;
  max-width: 100vw;
  max-height: 100vh;
}

.close-btn {
  position: fixed;
  right: 0;
  top: 0;
  cursor: pointer;
  background: #1c202e;
  z-index: 1;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT;wEACsE;EACtE,eAAe;EACf,YAAY;AACd;AACA;EACE,iDAAiD;AACnD;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;EAClB,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,WAAW;EACX,aAAa;EACb,eAAe;EACf,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,6BAA6B;AAC/B;AACA;EACE,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;EAClB,SAAS;EACT,sBAAsB;EACtB,eAAe;EACf,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;EAEE,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;;GAEG;;AAEH;EACE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,uDAAuD;AACzD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,cAAc;EACd,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,OAAO;EACP,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,MAAM;EACN,eAAe;EACf,mBAAmB;EACnB,UAAU;AACZ","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  color: white;\n}\nbody {\n  background: linear-gradient(#006200, #171d35 15%);\n}\n\nbody::-webkit-scrollbar {\n  display: none;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n\n#search-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  margin: 2rem;\n}\n\n#measure {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n#day-container {\n  width: 300px;\n  height: 200px;\n  border: 2px solid rgb(223, 252, 255);\n  border-radius: 1rem;\n  position: relative;\n  transition: height 1s ease-in-out;\n  overflow: hidden;\n}\n\n#day-container.full-day {\n  height: 400px;\n}\n\n.top,\n.bottom {\n  width: 100%;\n  height: 200px;\n  padding: 10px 0;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\ndiv.bottom {\n  display: none;\n}\n.icon {\n  width: 100px;\n  height: 100px;\n}\n\n.data-para {\n  text-align: center;\n  max-width: 150px;\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.expand,\n.retract {\n  position: absolute;\n  bottom: 0;\n  left: calc(50% - 15px);\n  cursor: pointer;\n  background: rgba(50, 50, 50, 0.5);\n  border-radius: 50%;\n}\n\nbutton {\n  background: #373c50;\n  border-radius: 0.5rem;\n  border: 2px solid #fff;\n  cursor: pointer;\n}\n\nbutton:active {\n  background: #393f58;\n  border: 2px solid #e2e2e2;\n}\n\ninput,\nselect {\n  background-color: #232d53;\n  text-align: center;\n  border-radius: 1rem;\n  border: 2px solid #fff;\n}\n\n/* input[type=\"text\"] {\n  \n} */\n\n#search-btn {\n  padding: 0.3rem 2rem;\n  border-radius: 1rem;\n}\n\n#forecast-container {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  gap: 1rem;\n}\n\n.fc {\n  width: 150px;\n  height: 500px;\n  border: 2px solid rgb(223, 252, 255);\n  border-radius: 1rem;\n  position: relative;\n  overflow: hidden;\n  transition: width 1s ease-in-out, height ease-in-out 1s;\n}\n\n.hour-btn {\n  width: 100%;\n  height: 20px;\n  background: #177d17;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.hour-btn > img {\n  cursor: pointer;\n}\n\n.front-side {\n  width: 100%;\n  height: calc(100% - 20px);\n}\n\n.table-wrapper {\n  width: 100%;\n  height: calc(100% - 20px);\n  overflow: auto;\n  scrollbar-gutter: auto;\n  display: none;\n}\n\n.table-wrapper::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n.table-wrapper::-webkit-scrollbar-track {\n  background-color: rgba(250, 250, 250, 0.3);\n  border-radius: 5px;\n}\n\n.table-wrapper::-webkit-scrollbar-thumb {\n  background: #232d53;\n  border-radius: 5px;\n}\n\n.table-wrapper::-webkit-scrollbar-corner {\n  background: transparent;\n}\n\ntr,\nth,\ntd {\n  border: 1px solid rgb(223, 252, 255);\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntr {\n  height: 20px;\n}\n\ntd {\n  width: 20px;\n  height: 20px;\n  text-align: end;\n}\n\ntr:first-child {\n  position: sticky;\n  top: 0;\n  background: #232d53;\n}\n\nth:first-child {\n  position: sticky;\n  left: 0;\n  background: #232d53;\n}\n\n.full-view-modal {\n  position: fixed;\n  max-height: 100%;\n  background: #1c202e;\n  overflow: auto;\n  max-width: 100vw;\n  max-height: 100vh;\n}\n\n.close-btn {\n  position: fixed;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  background: #1c202e;\n  z-index: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/constructors.js":
/*!*****************************!*\
  !*** ./src/constructors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forecast: () => (/* binding */ forecast),
/* harmony export */   getUsefulData: () => (/* binding */ getUsefulData)
/* harmony export */ });
/* harmony import */ var _weatherapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherapi */ "./src/weatherapi.js");


let forecast;

function get24hTime(string) {
  const l = string.length;
  let temp = string.slice(0, l - 3);

  if (string[l - 2] === "P") {
    const arr = temp.split(":");

    for (let i = 0; i < 2; i++) {
      arr[i] = Number(arr[i]);
    }
    arr[0] += 12;
    //i.e. 19:05
    if (arr[1] < 10) {
      arr[1] = "0" + arr[1];
    }
    if (arr[0] === 24) {
      arr[0] = "00";
    }
    temp = arr.join(":");
  }
  return temp;
}

function getUsefulData() {
  forecast = {
    location: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.location.name}, ${
      _weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.location.region.split(",")[1] || _weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.location.region
    }, ${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.location.country}`, //${apiData.location.name},
    current: {
      iconURL: `https:${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.condition.icon}`,
      localTime: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.last_updated}`,
      condition: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.condition.text}`,
      humidity: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.humidity}%`,
      windDirection: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.wind_dir}`,
      temperature: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.temp_c}°`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.temp_f}F`,
      },
      windSpeed: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.wind_kph}km/h`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.wind_mph}mi/h`,
      },
      pressure: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.pressure_mb}mb`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.pressure_in}in`,
      },
      precipitation: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.precip_mm}mm`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.current.precip_in}in`,
      },
    },
    forecastDay: [],
  };
  for (let i = 0; i < 3; i++) {
    forecast.forecastDay.push({
      date: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].date}`,
      rainChance: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.daily_chance_of_rain}%`,
      snowChance: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.daily_chance_of_snow}%`,
      iconURL: `https:${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.condition.icon}`,
      condition: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.condition.text}`,
      sunrise: `${get24hTime(_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].astro.sunrise)}`,
      sunset: `${get24hTime(_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].astro.sunset)}`,
      avgHumidity: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.avghumidity}%`,
      maxTemp: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.maxtemp_c}°`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.maxtemp_f}F`,
      },
      minTemp: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.mintemp_c}°`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.mintemp_f}F`,
      },
      avgTemp: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.avgtemp_c}°`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.avgtemp_f}F`,
      },
      maxWind: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.maxwind_kph}km/h`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].day.maxwind_mph}mi/h`,
      },
    });
    //sometimes weatherapi does not fill hour array for whatever reason,
    // need to account for that
    if (_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[i].hour.length !== 0) {
      forecast.forecastDay[i].hour = selectHoursData(i);
    } else forecast.forecastDay[i].hour = [];
  }
  // console.log("forecast", forecast);

  return forecast;
}

function selectHoursData(day) {
  let arr = [];
  for (let j = 0; j < 24; j++) {
    const obj = {
      time: getHours(_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].time),
      iconURL: `https:${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].condition.icon}`,
      temp: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].temp_c}°`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].temp_f}F`,
      },
      windSpeed: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].wind_kph}km/h`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].wind_mph}mi/h`,
      },
      windDirection: _weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].wind_dir,
      pressure: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].pressure_mb}mb`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].pressure_in}in`,
      },
      precipitation: {
        m: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].precip_mm}mm`,
        wtf: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].pressure_in}in`,
      },
      humidity: `${_weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].humidity}%`,
      rainChance: _weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].chance_of_rain,
      snowChance: _weatherapi__WEBPACK_IMPORTED_MODULE_0__.apiData.forecast.forecastday[day].hour[j].chance_of_snow,
    };
    arr.push(obj);
  }
  // console.log("arr", arr);
  return arr;
}

function getHours(string) {
  let t = string.slice(string.length - 5);
  return t;
}


/***/ }),

/***/ "./src/localApi.js":
/*!*************************!*\
  !*** ./src/localApi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCity: () => (/* binding */ changeCity),
/* harmony export */   changeUoM: () => (/* binding */ changeUoM),
/* harmony export */   onLoadBehavior: () => (/* binding */ onLoadBehavior)
/* harmony export */ });
/* harmony import */ var _renderStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderStuff */ "./src/renderStuff.js");
/* harmony import */ var _weatherapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherapi */ "./src/weatherapi.js");
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructors */ "./src/constructors.js");
// import { forecast } from ".";





// export let forecast;

function onLoadBehavior() {
  (0,_weatherapi__WEBPACK_IMPORTED_MODULE_1__.getCityOnLoad)()
    .then((l) => (0,_weatherapi__WEBPACK_IMPORTED_MODULE_1__.fetchForecast)(l))
    .then(() => (0,_constructors__WEBPACK_IMPORTED_MODULE_2__.getUsefulData)())
    .then(() => {
      (0,_renderStuff__WEBPACK_IMPORTED_MODULE_0__.renderTodayWeather)();
      (0,_renderStuff__WEBPACK_IMPORTED_MODULE_0__.renderForecast)();
    })
    .catch((e) => {
      console.error(e);
    });
}

function changeUoM() {
  (0,_renderStuff__WEBPACK_IMPORTED_MODULE_0__.renderTodayWeather)();
  (0,_renderStuff__WEBPACK_IMPORTED_MODULE_0__.renderForecast)();
}

async function changeCity() {
  try {
    const data = await (0,_weatherapi__WEBPACK_IMPORTED_MODULE_1__.fetchForecast)(_renderStuff__WEBPACK_IMPORTED_MODULE_0__.cityInput.value);
    (0,_constructors__WEBPACK_IMPORTED_MODULE_2__.getUsefulData)();
    (0,_renderStuff__WEBPACK_IMPORTED_MODULE_0__.renderTodayWeather)();
    (0,_renderStuff__WEBPACK_IMPORTED_MODULE_0__.renderForecast)();
  } catch (error) {
    console.log({ error });
  }
}


/***/ }),

/***/ "./src/renderStuff.js":
/*!****************************!*\
  !*** ./src/renderStuff.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UoM: () => (/* binding */ UoM),
/* harmony export */   cityChangeBtn: () => (/* binding */ cityChangeBtn),
/* harmony export */   cityInput: () => (/* binding */ cityInput),
/* harmony export */   renderForecast: () => (/* binding */ renderForecast),
/* harmony export */   renderTodayWeather: () => (/* binding */ renderTodayWeather)
/* harmony export */ });
/* harmony import */ var _weatherapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherapi */ "./src/weatherapi.js");
/* harmony import */ var _localApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localApi */ "./src/localApi.js");
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructors */ "./src/constructors.js");
/* harmony import */ var _images_keyboard_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/keyboard_arrow_down.svg */ "./src/images/keyboard_arrow_down.svg");
/* harmony import */ var _images_keyboard_arrow_up_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/keyboard_arrow_up.svg */ "./src/images/keyboard_arrow_up.svg");
/* harmony import */ var _images_hours_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/hours.svg */ "./src/images/hours.svg");
/* harmony import */ var _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/calendar_today.svg */ "./src/images/calendar_today.svg");
/* harmony import */ var _images_open_in_full_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/open_in_full.svg */ "./src/images/open_in_full.svg");
/* harmony import */ var _images_cancel_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/cancel.svg */ "./src/images/cancel.svg");











const dayContainer = document.getElementById("day-container");
// const hoursContainer = document.getElementById("hours-container");
// const forecastContainer = document.getElementById("forecast-container");
const cityInput = document.getElementById("search");
const cityChangeBtn = document.getElementById("search-btn");
const UoM = document.getElementById("UOM");
const fullForecast = document.getElementById("forecast-container");
// const fCont0 = document.getElementById("cont0");
// const fCont1 = document.getElementById("cont1");
// const fCont2 = document.getElementById("cont2");

function renderTodayWeather() {
  Array.from(dayContainer.children).forEach((el) => {
    el.remove();
  });
  dayContainer.className = "";
  const tags = generateDayTags();
  const val = UoM.value;

  //TOP
  //first
  const weatherIcon = tags.icon;
  const location = genP();
  //second
  const localTime = genP();
  const condition = genP();
  const currentTemp = genP();
  const humidity = genP();
  //BOTTOM
  const maxTemp = genP();
  const minTemp = genP();
  const sunrise = genP();
  const sunset = genP();
  const precipitation = genP();
  const pressure = genP();
  const windDir = genP();
  const windSpeed = genP();
  const rainProb = genP();
  const snowProb = genP();

  //TOP
  weatherIcon.src = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.current.iconURL;
  location.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.location;
  localTime.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.current.localTime;
  condition.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.current.condition;
  currentTemp.textContent = `Temperature: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.current.temperature[val]}`;
  humidity.textContent = `Humidity: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.current.humidity}`;
  //BOTTOM
  maxTemp.textContent = `MaxTemp: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[0].maxTemp[val]}`;
  minTemp.textContent = `MinTemp: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[0].minTemp[val]}`;
  sunrise.textContent = `Sunrise: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[0].sunrise}`;
  sunset.textContent = `Sunset: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[0].sunset}`;
  precipitation.textContent = `Precipitation: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.current.precipitation[val]}`;
  pressure.textContent = `Pressure: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.current.pressure[val]}`;
  windDir.textContent = `Wind direction: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.current.windDirection}`;
  windSpeed.textContent = `Wind speed: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.current.windSpeed[val]}`;
  rainProb.textContent = `Rain chance: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[0].rainChance}`;
  snowProb.textContent = `Snow chance: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[0].snowChance}`;

  //TOP
  tags.topSection.appendChild(weatherIcon);
  tags.topSection.appendChild(location);
  tags.topSection.appendChild(localTime);
  tags.topSection.appendChild(condition);
  tags.topSection.appendChild(currentTemp);
  tags.topSection.appendChild(humidity);
  //BOTTOM
  tags.bottomSection.appendChild(maxTemp);
  tags.bottomSection.appendChild(minTemp);
  tags.bottomSection.appendChild(sunrise);
  tags.bottomSection.appendChild(sunset);
  tags.bottomSection.appendChild(precipitation);
  tags.bottomSection.appendChild(pressure);
  tags.bottomSection.appendChild(windDir);
  tags.bottomSection.appendChild(windSpeed);
  tags.bottomSection.appendChild(rainProb);
  tags.bottomSection.appendChild(snowProb);

  dayContainer.appendChild(tags.topSection);
  dayContainer.appendChild(tags.bottomSection);
  dayContainer.appendChild(tags.expandIcon);

  tags.expandIcon.addEventListener("click", expandContainer);
}

function renderForecast() {
  const val = UoM.value;
  let arr = Array.from(fullForecast.children);
  arr.forEach((el) => {
    if (el.style.width) {
      el.style = "";
    }
    const subArr = Array.from(el.children);
    subArr.forEach((e) => {
      e.remove();
    });
  });

  const names = [
    "icon",
    "location",
    "date",
    "condition",
    "avgHumidity",
    "maxTemp",
    "minTemp",
    "avgTemp",
    "sunrise",
    "sunset",
    "maxWind",
    "rainChance",
    "snowChance",
  ];

  for (let i = 0; i < 3; i++) {
    const dynamicVars = {};
    for (let j = 0; j < names.length; j++) {
      dynamicVars[names[j]] = genP();
    }

    const btn = document.createElement("div");
    const hourIcon = new Image(20, 20);
    const front = document.createElement("div");
    const icon = new Image();

    btn.className = "hour-btn";
    hourIcon.src = _images_hours_svg__WEBPACK_IMPORTED_MODULE_5__;
    hourIcon.id = `hour-btn-${i}`;
    front.className = "front-side";
    icon.src = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].iconURL;

    dynamicVars.location.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.location;
    dynamicVars.date.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].date;
    dynamicVars.condition.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].condition;
    dynamicVars.avgHumidity.textContent = `AVG humidity: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].avgHumidity}`;
    dynamicVars.maxTemp.textContent = `Max temp: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].maxTemp[val]}`;
    dynamicVars.minTemp.textContent = `Min temp: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].minTemp[val]}`;
    dynamicVars.avgTemp.textContent = `AVG temp: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].avgTemp[val]}`;
    dynamicVars.sunrise.textContent = `Sunrise: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].sunrise}`;
    dynamicVars.sunset.textContent = `Sunset: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].sunset}`;
    dynamicVars.maxWind.textContent = `Max wind: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].maxWind[val]}`;
    dynamicVars.rainChance.textContent = `Rain chance: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].rainChance}`;
    dynamicVars.snowChance.textContent = `Snow chance: ${_constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[i].snowChance}`;

    front.appendChild(icon);
    front.appendChild(dynamicVars.location);
    front.appendChild(dynamicVars.date);
    front.appendChild(dynamicVars.condition);
    front.appendChild(dynamicVars.avgHumidity);
    front.appendChild(dynamicVars.maxTemp);
    front.appendChild(dynamicVars.minTemp);
    front.appendChild(dynamicVars.avgTemp);
    front.appendChild(dynamicVars.sunrise);
    front.appendChild(dynamicVars.sunset);
    front.appendChild(dynamicVars.maxWind);
    front.appendChild(dynamicVars.rainChance);
    front.appendChild(dynamicVars.snowChance);

    btn.appendChild(hourIcon);
    arr[i].appendChild(btn);
    arr[i].appendChild(front);
    generateHourTable(i, arr[i]);

    hourIcon.addEventListener("click", showHours);
  }
}

function showHours(e) {
  const container = e.target.parentNode.parentNode;
  const btnCont = container.children[0];
  const front = container.children[1];
  const table = container.children[2];

  const dayIcon = new Image(20, 20);
  const fullViewIcon = new Image(20, 20);

  dayIcon.src = _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_6__;
  fullViewIcon.src = _images_open_in_full_svg__WEBPACK_IMPORTED_MODULE_7__;

  front.style.display = "none";
  table.style.display = "block";

  e.target.remove();

  btnCont.appendChild(dayIcon);
  btnCont.appendChild(fullViewIcon);

  dayIcon.addEventListener("click", showDay);
  fullViewIcon.addEventListener("click", showFullView);
}

//need to fix view and cancel btn
function showFullView(e) {
  const cancelBtn = new Image(20, 20);
  const date = document.createElement("p");

  const container = e.target.parentNode.parentNode;
  const btnCont = container.children[0];
  const table = container.children[2];
  const tableConWidth = table.scrollWidth;
  const tableConHeight = table.scrollHeight;

  date.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[container.id[4]].date;

  if (tableConHeight + 20 < document.body.clientHeight) {
    container.style.height = `${tableConHeight + 25}px`;
  } else {
    container.style.height = `${document.body.clientHeight - 20}px`;
  }
  if (tableConWidth < document.body.clientWidth) {
    container.style.width = `${tableConWidth + 5}px`;
  } else {
    container.style.width = `${document.body.clientWidth}px`;
  }

  cancelBtn.src = _images_cancel_svg__WEBPACK_IMPORTED_MODULE_8__;

  btnCont.children[1].remove();
  btnCont.children[0].remove();

  btnCont.appendChild(date);
  btnCont.appendChild(cancelBtn);

  cancelBtn.addEventListener("click", showPartialView);
}

function showPartialView(e) {
  const container = e.target.parentNode.parentNode;
  const btnCont = container.children[0];

  const dayIcon = new Image(20, 20);
  const fullViewIcon = new Image(20, 20);

  dayIcon.src = _images_calendar_today_svg__WEBPACK_IMPORTED_MODULE_6__;
  fullViewIcon.src = _images_open_in_full_svg__WEBPACK_IMPORTED_MODULE_7__;

  container.style = "";

  btnCont.children[0].remove();
  e.target.remove();

  btnCont.appendChild(dayIcon);
  btnCont.appendChild(fullViewIcon);

  dayIcon.addEventListener("click", showDay);
  fullViewIcon.addEventListener("click", showFullView);
}

function showDay(e) {
  const container = e.target.parentNode.parentNode;
  const btnCont = container.children[0];
  const front = container.children[1];
  const table = container.children[2];

  const arr = Array.from(btnCont.children);

  const hourIcon = new Image(20, 20);

  hourIcon.src = _images_hours_svg__WEBPACK_IMPORTED_MODULE_5__;

  front.style.display = "block";
  table.style.display = "none";

  arr.forEach((el) => {
    el.remove();
  });

  btnCont.appendChild(hourIcon);

  hourIcon.addEventListener("click", showHours);
}

function generateHourTable(day, arr) {
  const val = UoM.value;
  const wrapper = document.createElement("div");
  const table = document.createElement("table");

  const infoLine = document.createElement("tr");
  const empty = document.createElement("th");
  const infoCond = document.createElement("th");
  const infoTemp = document.createElement("th");
  const infoWindSpeed = document.createElement("th");
  const infoWindDir = document.createElement("th");
  const infoPressure = document.createElement("th");
  const infoPrecipitation = document.createElement("th");
  const infoHumidity = document.createElement("th");
  const infoRainChance = document.createElement("th");
  const infoSnowChance = document.createElement("th");

  wrapper.className = "table-wrapper";
  wrapper.id = `wrapper${day}`;
  table.className = "hour-table";

  infoCond.textContent = "C";
  infoTemp.textContent = "T";
  infoWindSpeed.textContent = "Ws";
  infoWindDir.textContent = "Wd";
  infoPressure.textContent = "Prs";
  infoPrecipitation.textContent = "Prc";
  infoHumidity.textContent = "H";
  infoRainChance.textContent = "R%";
  infoSnowChance.textContent = "S%";

  infoLine.appendChild(empty);
  infoLine.appendChild(infoCond);
  infoLine.appendChild(infoTemp);
  infoLine.appendChild(infoWindSpeed);
  infoLine.appendChild(infoWindDir);
  infoLine.appendChild(infoPressure);
  infoLine.appendChild(infoPrecipitation);
  infoLine.appendChild(infoHumidity);
  infoLine.appendChild(infoRainChance);
  infoLine.appendChild(infoSnowChance);

  table.appendChild(infoLine);

  for (let j = 0; j < 24; j++) {
    const line = document.createElement("tr");
    const time = document.createElement("th");
    const condition = document.createElement("td");
    const icon = new Image(20, 20);
    const temperature = document.createElement("td");
    const windSpeed = document.createElement("td");
    const windDir = document.createElement("td");
    const pressure = document.createElement("td");
    const precipitation = document.createElement("td");
    const humidity = document.createElement("td");
    const rainChance = document.createElement("td");
    const snowChance = document.createElement("td");

    time.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].time;
    icon.src = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].iconURL;
    condition.appendChild(icon);
    temperature.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].temp[val];
    windSpeed.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].windSpeed[val];
    windDir.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].windDirection;
    pressure.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].pressure[val];
    precipitation.textContent =
      _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].precipitation[val];
    humidity.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].humidity;
    rainChance.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].rainChance;
    snowChance.textContent = _constructors__WEBPACK_IMPORTED_MODULE_2__.forecast.forecastDay[day].hour[j].snowChance;

    line.appendChild(time);
    line.appendChild(condition);
    line.appendChild(temperature);
    line.appendChild(windSpeed);
    line.appendChild(windDir);
    line.appendChild(pressure);
    line.appendChild(precipitation);
    line.appendChild(humidity);
    line.appendChild(rainChance);
    line.appendChild(snowChance);

    table.appendChild(line);
  }

  wrapper.appendChild(table);
  arr.appendChild(wrapper);
}

function genP() {
  const p = document.createElement("p");
  p.className = "data-para";
  return p;
}

function generateDayTags() {
  const topSection = document.createElement("div");
  const bottomSection = document.createElement("div");
  const expandIcon = new Image();

  const icon = new Image();

  topSection.className = "top";
  bottomSection.className = "bottom";
  icon.className = "icon";

  expandIcon.className = "expand";

  expandIcon.src = _images_keyboard_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__;

  return {
    topSection,
    bottomSection,
    expandIcon,
    icon,
  };
}

function retractContainer(e) {
  const expandIcon = new Image();

  Array.from(e.target.parentNode.children).forEach((element) => {
    if (element.className === "bottom") {
      element.style.display = "none";
    }
  });
  e.target.remove();

  expandIcon.src = _images_keyboard_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__;
  expandIcon.className = "expand";

  dayContainer.className = "";

  dayContainer.appendChild(expandIcon);

  expandIcon.addEventListener("click", expandContainer);
}

function expandContainer(e) {
  const container = e.target.parentNode;
  const retractIcon = new Image();

  retractIcon.src = _images_keyboard_arrow_up_svg__WEBPACK_IMPORTED_MODULE_4__;
  retractIcon.className = "retract";

  dayContainer.className = "full-day";

  setTimeout(() => {
    Array.from(container.children).forEach((element) => {
      if (element.className === "bottom") {
        element.style.display = "flex";
      }
    });
  }, 1000);

  e.target.remove();
  dayContainer.appendChild(retractIcon);

  retractIcon.addEventListener("click", retractContainer);
}


/***/ }),

/***/ "./src/weatherapi.js":
/*!***************************!*\
  !*** ./src/weatherapi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiData: () => (/* binding */ apiData),
/* harmony export */   fetchForecast: () => (/* binding */ fetchForecast),
/* harmony export */   getCityOnLoad: () => (/* binding */ getCityOnLoad)
/* harmony export */ });
/* harmony import */ var _localApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localApi */ "./src/localApi.js");


const weatherApiFreeKey = "b8fc2bbe178d4373adb153039240907";

let apiData;

async function getCityOnLoad() {
  // const t1 = new Date();
  const ip = await getIp();
  // const t2 = new Date();
  // console.log("getIp", t2 - t1);
  // console.log("ip", ip);
  const responseLoc = await fetch(
    `https://api.weatherapi.com/v1/ip.json?key=${weatherApiFreeKey}&q=${ip}`
  );
  const ipData = await responseLoc.json();
  // const t4 = new Date();
  // console.log("getCity", t4 - t2);
  // console.log("ip+city", t4 - t1);
  // console.log("city", ipData);
  return ipData.city;
}

async function fetchForecast(location) {
  try {
    // const t1 = new Date();
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiFreeKey}&q=${location}&days=3`
    );
    const forecastData = await response.json();
    apiData = forecastData;
    // console.log("apiData", forecastData);
    // const t2 = new Date();
    // console.log("forecast", t2 - t1);
    return forecastData;
  } catch (error) {
    console.log(error.status);
  }
}

//SO FUCKING SLOW(range from 150 to 250 ms with my connection & no throttle
//while all the rest of fetch requests(getCity&fetchForecast) combined are 30 to 90 ms),
//but i'm too lazy to spend hours finding more optimized solution, since it is
//only needed once
async function getIp() {
  const response = await fetch("https://api.ipify.org?format=json");
  const ipObj = await response.json();
  const ip = ipObj.ip;
  return ip;
}


/***/ }),

/***/ "./src/images/calendar_today.svg":
/*!***************************************!*\
  !*** ./src/images/calendar_today.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e876857e6ccf255a531.svg";

/***/ }),

/***/ "./src/images/cancel.svg":
/*!*******************************!*\
  !*** ./src/images/cancel.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f807a111dc20b0fefeb.svg";

/***/ }),

/***/ "./src/images/hours.svg":
/*!******************************!*\
  !*** ./src/images/hours.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1081b68f3c55b3c7d107.svg";

/***/ }),

/***/ "./src/images/keyboard_arrow_down.svg":
/*!********************************************!*\
  !*** ./src/images/keyboard_arrow_down.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08a6eca347e5badb745d.svg";

/***/ }),

/***/ "./src/images/keyboard_arrow_up.svg":
/*!******************************************!*\
  !*** ./src/images/keyboard_arrow_up.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a6c43fd3383168f7045.svg";

/***/ }),

/***/ "./src/images/open_in_full.svg":
/*!*************************************!*\
  !*** ./src/images/open_in_full.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f5a292cffbe12bf326f.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _localApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localApi */ "./src/localApi.js");
/* harmony import */ var _renderStuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderStuff */ "./src/renderStuff.js");





(0,_localApi__WEBPACK_IMPORTED_MODULE_1__.onLoadBehavior)();

_renderStuff__WEBPACK_IMPORTED_MODULE_2__.UoM.addEventListener("change", _localApi__WEBPACK_IMPORTED_MODULE_1__.changeUoM);
_renderStuff__WEBPACK_IMPORTED_MODULE_2__.cityChangeBtn.addEventListener("click", _localApi__WEBPACK_IMPORTED_MODULE_1__.changeCity);
_renderStuff__WEBPACK_IMPORTED_MODULE_2__.cityInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    (0,_localApi__WEBPACK_IMPORTED_MODULE_1__.changeCity)();
  }
});

//TO DO:
// hide apiKey;VV
// finish styling;VV
// gitHub upload;

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLEtBQUssT0FBTyxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRThDO0FBQ0w7O0FBRTlELHlEQUFjOztBQUVkLDZDQUFHLDRCQUE0QixnREFBUztBQUN4Qyx1REFBYSwyQkFBMkIsaURBQVU7QUFDbEQsbURBQVM7QUFDVDtBQUNBLElBQUkscURBQVU7QUFDZDtBQUNBLENBQUM7O0FBRUQ7QUFDQSxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9jb25zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vc3JjL2xvY2FsQXBpLmpzIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXJTdHVmZi5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlcmFwaS5qcyIsIndlYnBhY2s6Ly90b3Atd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5ib2R5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDYyMDAsICMxNzFkMzUgMTUlKTtcbn1cblxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuI3NlYXJjaC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbjogMnJlbTtcbn1cblxuI21lYXN1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuI2RheS1jb250YWluZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMjMsIDI1MiwgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNkYXktY29udGFpbmVyLmZ1bGwtZGF5IHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLnRvcCxcbi5ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuZGl2LmJvdHRvbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaWNvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmRhdGEtcGFyYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4cGFuZCxcbi5yZXRyYWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTVweCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzNzNjNTA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzM5M2Y1ODtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyZTJlMjtcbn1cblxuaW5wdXQsXG5zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyZDUzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG5cbi8qIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgXG59ICovXG5cbiNzZWFyY2gtYnRuIHtcbiAgcGFkZGluZzogMC4zcmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbiNmb3JlY2FzdC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uZmMge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMjMsIDI1MiwgMjU1KTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dCwgaGVpZ2h0IGVhc2UtaW4tb3V0IDFzO1xufVxuXG4uaG91ci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTc3ZDE3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uaG91ci1idG4gPiBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mcm9udC1zaWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGxiYXItZ3V0dGVyOiBhdXRvO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFibGUtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbn1cblxuLnRhYmxlLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YWJsZS13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICMyMzJkNTM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRhYmxlLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG50cixcbnRoLFxudGQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyNTIsIDI1NSk7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudHIge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbnRkIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG50cjpmaXJzdC1jaGlsZCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogIzIzMmQ1Mztcbn1cblxudGg6Zmlyc3QtY2hpbGQge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMjMyZDUzO1xufVxuXG4uZnVsbC12aWV3LW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMWMyMDJlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzFjMjAyZTtcbiAgei1pbmRleDogMTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Q7d0VBQ3NFO0VBQ3RFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJB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IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDYyMDAsICMxNzFkMzUgMTUlKTtcXG59XFxuXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuI3NlYXJjaC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4jbWVhc3VyZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jZGF5LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyMywgMjUyLCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlLWluLW91dDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNkYXktY29udGFpbmVyLmZ1bGwtZGF5IHtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi50b3AsXFxuLmJvdHRvbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5kaXYuYm90dG9tIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5pY29uIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5kYXRhLXBhcmEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5leHBhbmQsXFxuLnJldHJhY3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MCwgMC41KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICMzNzNjNTA7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICMzOTNmNTg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZTJlMmUyO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMmQ1MztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4vKiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgXFxufSAqL1xcblxcbiNzZWFyY2gtYnRuIHtcXG4gIHBhZGRpbmc6IDAuM3JlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuI2ZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmZjIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjIzLCAyNTIsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzIGVhc2UtaW4tb3V0LCBoZWlnaHQgZWFzZS1pbi1vdXQgMXM7XFxufVxcblxcbi5ob3VyLWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6ICMxNzdkMTc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaG91ci1idG4gPiBpbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZnJvbnQtc2lkZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcblxcbi50YWJsZS13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgc2Nyb2xsYmFyLWd1dHRlcjogYXV0bztcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YWJsZS13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxufVxcblxcbi50YWJsZS13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YWJsZS13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjMjMyZDUzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFibGUtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG50cixcXG50aCxcXG50ZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyNTIsIDI1NSk7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRyIHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxudGQge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbnRyOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMjMyZDUzO1xcbn1cXG5cXG50aDpmaXJzdC1jaGlsZCB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICMyMzJkNTM7XFxufVxcblxcbi5mdWxsLXZpZXctbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMxYzIwMmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxYzIwMmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFwaURhdGEgfSBmcm9tIFwiLi93ZWF0aGVyYXBpXCI7XG5cbmV4cG9ydCBsZXQgZm9yZWNhc3Q7XG5cbmZ1bmN0aW9uIGdldDI0aFRpbWUoc3RyaW5nKSB7XG4gIGNvbnN0IGwgPSBzdHJpbmcubGVuZ3RoO1xuICBsZXQgdGVtcCA9IHN0cmluZy5zbGljZSgwLCBsIC0gMyk7XG5cbiAgaWYgKHN0cmluZ1tsIC0gMl0gPT09IFwiUFwiKSB7XG4gICAgY29uc3QgYXJyID0gdGVtcC5zcGxpdChcIjpcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgYXJyW2ldID0gTnVtYmVyKGFycltpXSk7XG4gICAgfVxuICAgIGFyclswXSArPSAxMjtcbiAgICAvL2kuZS4gMTk6MDVcbiAgICBpZiAoYXJyWzFdIDwgMTApIHtcbiAgICAgIGFyclsxXSA9IFwiMFwiICsgYXJyWzFdO1xuICAgIH1cbiAgICBpZiAoYXJyWzBdID09PSAyNCkge1xuICAgICAgYXJyWzBdID0gXCIwMFwiO1xuICAgIH1cbiAgICB0ZW1wID0gYXJyLmpvaW4oXCI6XCIpO1xuICB9XG4gIHJldHVybiB0ZW1wO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlZnVsRGF0YSgpIHtcbiAgZm9yZWNhc3QgPSB7XG4gICAgbG9jYXRpb246IGAke2FwaURhdGEubG9jYXRpb24ubmFtZX0sICR7XG4gICAgICBhcGlEYXRhLmxvY2F0aW9uLnJlZ2lvbi5zcGxpdChcIixcIilbMV0gfHwgYXBpRGF0YS5sb2NhdGlvbi5yZWdpb25cbiAgICB9LCAke2FwaURhdGEubG9jYXRpb24uY291bnRyeX1gLCAvLyR7YXBpRGF0YS5sb2NhdGlvbi5uYW1lfSxcbiAgICBjdXJyZW50OiB7XG4gICAgICBpY29uVVJMOiBgaHR0cHM6JHthcGlEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb259YCxcbiAgICAgIGxvY2FsVGltZTogYCR7YXBpRGF0YS5jdXJyZW50Lmxhc3RfdXBkYXRlZH1gLFxuICAgICAgY29uZGl0aW9uOiBgJHthcGlEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHR9YCxcbiAgICAgIGh1bWlkaXR5OiBgJHthcGlEYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWAsXG4gICAgICB3aW5kRGlyZWN0aW9uOiBgJHthcGlEYXRhLmN1cnJlbnQud2luZF9kaXJ9YCxcbiAgICAgIHRlbXBlcmF0dXJlOiB7XG4gICAgICAgIG06IGAke2FwaURhdGEuY3VycmVudC50ZW1wX2N9wrBgLFxuICAgICAgICB3dGY6IGAke2FwaURhdGEuY3VycmVudC50ZW1wX2Z9RmAsXG4gICAgICB9LFxuICAgICAgd2luZFNwZWVkOiB7XG4gICAgICAgIG06IGAke2FwaURhdGEuY3VycmVudC53aW5kX2twaH1rbS9oYCxcbiAgICAgICAgd3RmOiBgJHthcGlEYXRhLmN1cnJlbnQud2luZF9tcGh9bWkvaGAsXG4gICAgICB9LFxuICAgICAgcHJlc3N1cmU6IHtcbiAgICAgICAgbTogYCR7YXBpRGF0YS5jdXJyZW50LnByZXNzdXJlX21ifW1iYCxcbiAgICAgICAgd3RmOiBgJHthcGlEYXRhLmN1cnJlbnQucHJlc3N1cmVfaW59aW5gLFxuICAgICAgfSxcbiAgICAgIHByZWNpcGl0YXRpb246IHtcbiAgICAgICAgbTogYCR7YXBpRGF0YS5jdXJyZW50LnByZWNpcF9tbX1tbWAsXG4gICAgICAgIHd0ZjogYCR7YXBpRGF0YS5jdXJyZW50LnByZWNpcF9pbn1pbmAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9yZWNhc3REYXk6IFtdLFxuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGZvcmVjYXN0LmZvcmVjYXN0RGF5LnB1c2goe1xuICAgICAgZGF0ZTogYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlfWAsXG4gICAgICByYWluQ2hhbmNlOiBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYCxcbiAgICAgIHNub3dDaGFuY2U6IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93fSVgLFxuICAgICAgaWNvblVSTDogYGh0dHBzOiR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLmljb259YCxcbiAgICAgIGNvbmRpdGlvbjogYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHR9YCxcbiAgICAgIHN1bnJpc2U6IGAke2dldDI0aFRpbWUoYXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5hc3Ryby5zdW5yaXNlKX1gLFxuICAgICAgc3Vuc2V0OiBgJHtnZXQyNGhUaW1lKGFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uYXN0cm8uc3Vuc2V0KX1gLFxuICAgICAgYXZnSHVtaWRpdHk6IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z2h1bWlkaXR5fSVgLFxuICAgICAgbWF4VGVtcDoge1xuICAgICAgICBtOiBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2N9wrBgLFxuICAgICAgICB3dGY6IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZn1GYCxcbiAgICAgIH0sXG4gICAgICBtaW5UZW1wOiB7XG4gICAgICAgIG06IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfY33CsGAsXG4gICAgICAgIHd0ZjogYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mfUZgLFxuICAgICAgfSxcbiAgICAgIGF2Z1RlbXA6IHtcbiAgICAgICAgbTogYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jfcKwYCxcbiAgICAgICAgd3RmOiBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2Z9RmAsXG4gICAgICB9LFxuICAgICAgbWF4V2luZDoge1xuICAgICAgICBtOiBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh3aW5kX2twaH1rbS9oYCxcbiAgICAgICAgd3RmOiBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh3aW5kX21waH1taS9oYCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy9zb21ldGltZXMgd2VhdGhlcmFwaSBkb2VzIG5vdCBmaWxsIGhvdXIgYXJyYXkgZm9yIHdoYXRldmVyIHJlYXNvbixcbiAgICAvLyBuZWVkIHRvIGFjY291bnQgZm9yIHRoYXRcbiAgICBpZiAoYXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5ob3VyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZm9yZWNhc3QuZm9yZWNhc3REYXlbaV0uaG91ciA9IHNlbGVjdEhvdXJzRGF0YShpKTtcbiAgICB9IGVsc2UgZm9yZWNhc3QuZm9yZWNhc3REYXlbaV0uaG91ciA9IFtdO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKFwiZm9yZWNhc3RcIiwgZm9yZWNhc3QpO1xuXG4gIHJldHVybiBmb3JlY2FzdDtcbn1cblxuZnVuY3Rpb24gc2VsZWN0SG91cnNEYXRhKGRheSkge1xuICBsZXQgYXJyID0gW107XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMjQ7IGorKykge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHRpbWU6IGdldEhvdXJzKGFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2pdLnRpbWUpLFxuICAgICAgaWNvblVSTDogYGh0dHBzOiR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXJbal0uY29uZGl0aW9uLmljb259YCxcbiAgICAgIHRlbXA6IHtcbiAgICAgICAgbTogYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXJbal0udGVtcF9jfcKwYCxcbiAgICAgICAgd3RmOiBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uaG91cltqXS50ZW1wX2Z9RmAsXG4gICAgICB9LFxuICAgICAgd2luZFNwZWVkOiB7XG4gICAgICAgIG06IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2pdLndpbmRfa3BofWttL2hgLFxuICAgICAgICB3dGY6IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2pdLndpbmRfbXBofW1pL2hgLFxuICAgICAgfSxcbiAgICAgIHdpbmREaXJlY3Rpb246IGFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2pdLndpbmRfZGlyLFxuICAgICAgcHJlc3N1cmU6IHtcbiAgICAgICAgbTogYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXJbal0ucHJlc3N1cmVfbWJ9bWJgLFxuICAgICAgICB3dGY6IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2pdLnByZXNzdXJlX2lufWluYCxcbiAgICAgIH0sXG4gICAgICBwcmVjaXBpdGF0aW9uOiB7XG4gICAgICAgIG06IGAke2FwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2pdLnByZWNpcF9tbX1tbWAsXG4gICAgICAgIHd0ZjogYCR7YXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXJbal0ucHJlc3N1cmVfaW59aW5gLFxuICAgICAgfSxcbiAgICAgIGh1bWlkaXR5OiBgJHthcGlEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uaG91cltqXS5odW1pZGl0eX0lYCxcbiAgICAgIHJhaW5DaGFuY2U6IGFwaURhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2pdLmNoYW5jZV9vZl9yYWluLFxuICAgICAgc25vd0NoYW5jZTogYXBpRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXJbal0uY2hhbmNlX29mX3Nub3csXG4gICAgfTtcbiAgICBhcnIucHVzaChvYmopO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKFwiYXJyXCIsIGFycik7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJzKHN0cmluZykge1xuICBsZXQgdCA9IHN0cmluZy5zbGljZShzdHJpbmcubGVuZ3RoIC0gNSk7XG4gIHJldHVybiB0O1xufVxuIiwiLy8gaW1wb3J0IHsgZm9yZWNhc3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgVW9NIH0gZnJvbSBcIi4vcmVuZGVyU3R1ZmZcIjtcbmltcG9ydCB7IGdldENpdHlPbkxvYWQsIGZldGNoRm9yZWNhc3QgfSBmcm9tIFwiLi93ZWF0aGVyYXBpXCI7XG5pbXBvcnQgeyByZW5kZXJUb2RheVdlYXRoZXIsIHJlbmRlckZvcmVjYXN0LCBjaXR5SW5wdXQgfSBmcm9tIFwiLi9yZW5kZXJTdHVmZlwiO1xuaW1wb3J0IHsgZ2V0VXNlZnVsRGF0YSwgZm9yZWNhc3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3RvcnNcIjtcblxuLy8gZXhwb3J0IGxldCBmb3JlY2FzdDtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZEJlaGF2aW9yKCkge1xuICBnZXRDaXR5T25Mb2FkKClcbiAgICAudGhlbigobCkgPT4gZmV0Y2hGb3JlY2FzdChsKSlcbiAgICAudGhlbigoKSA9PiBnZXRVc2VmdWxEYXRhKCkpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcmVuZGVyVG9kYXlXZWF0aGVyKCk7XG4gICAgICByZW5kZXJGb3JlY2FzdCgpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVW9NKCkge1xuICByZW5kZXJUb2RheVdlYXRoZXIoKTtcbiAgcmVuZGVyRm9yZWNhc3QoKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoYW5nZUNpdHkoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRm9yZWNhc3QoY2l0eUlucHV0LnZhbHVlKTtcbiAgICBnZXRVc2VmdWxEYXRhKCk7XG4gICAgcmVuZGVyVG9kYXlXZWF0aGVyKCk7XG4gICAgcmVuZGVyRm9yZWNhc3QoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyh7IGVycm9yIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmZXRjaEZvcmVjYXN0LCBnZXRDaXR5T25Mb2FkLCBhcGlEYXRhIH0gZnJvbSBcIi4vd2VhdGhlcmFwaVwiO1xuaW1wb3J0IHsgZ2V0VXNlZnVsRGF0YSB9IGZyb20gXCIuL2xvY2FsQXBpXCI7XG5pbXBvcnQgeyBmb3JlY2FzdCB9IGZyb20gXCIuL2NvbnN0cnVjdG9yc1wiO1xuXG5pbXBvcnQgZXhwYW5kU1ZHIGZyb20gXCIuL2ltYWdlcy9rZXlib2FyZF9hcnJvd19kb3duLnN2Z1wiO1xuaW1wb3J0IHJldHJhY3RTVkcgZnJvbSBcIi4vaW1hZ2VzL2tleWJvYXJkX2Fycm93X3VwLnN2Z1wiO1xuaW1wb3J0IGhvdXJzU1ZHIGZyb20gXCIuL2ltYWdlcy9ob3Vycy5zdmdcIjtcbmltcG9ydCB0b2RheVNWRyBmcm9tIFwiLi9pbWFnZXMvY2FsZW5kYXJfdG9kYXkuc3ZnXCI7XG5pbXBvcnQgb3BlbkZ1bGxTVkcgZnJvbSBcIi4vaW1hZ2VzL29wZW5faW5fZnVsbC5zdmdcIjtcbmltcG9ydCBjbG9zZVNWRyBmcm9tIFwiLi9pbWFnZXMvY2FuY2VsLnN2Z1wiO1xuXG5jb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheS1jb250YWluZXJcIik7XG4vLyBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG91cnMtY29udGFpbmVyXCIpO1xuLy8gY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0LWNvbnRhaW5lclwiKTtcbmV4cG9ydCBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbmV4cG9ydCBjb25zdCBjaXR5Q2hhbmdlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnRuXCIpO1xuZXhwb3J0IGNvbnN0IFVvTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVU9NXCIpO1xuY29uc3QgZnVsbEZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdC1jb250YWluZXJcIik7XG4vLyBjb25zdCBmQ29udDAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnQwXCIpO1xuLy8gY29uc3QgZkNvbnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250MVwiKTtcbi8vIGNvbnN0IGZDb250MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udDJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2RheVdlYXRoZXIoKSB7XG4gIEFycmF5LmZyb20oZGF5Q29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLnJlbW92ZSgpO1xuICB9KTtcbiAgZGF5Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiXCI7XG4gIGNvbnN0IHRhZ3MgPSBnZW5lcmF0ZURheVRhZ3MoKTtcbiAgY29uc3QgdmFsID0gVW9NLnZhbHVlO1xuXG4gIC8vVE9QXG4gIC8vZmlyc3RcbiAgY29uc3Qgd2VhdGhlckljb24gPSB0YWdzLmljb247XG4gIGNvbnN0IGxvY2F0aW9uID0gZ2VuUCgpO1xuICAvL3NlY29uZFxuICBjb25zdCBsb2NhbFRpbWUgPSBnZW5QKCk7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGdlblAoKTtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBnZW5QKCk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZ2VuUCgpO1xuICAvL0JPVFRPTVxuICBjb25zdCBtYXhUZW1wID0gZ2VuUCgpO1xuICBjb25zdCBtaW5UZW1wID0gZ2VuUCgpO1xuICBjb25zdCBzdW5yaXNlID0gZ2VuUCgpO1xuICBjb25zdCBzdW5zZXQgPSBnZW5QKCk7XG4gIGNvbnN0IHByZWNpcGl0YXRpb24gPSBnZW5QKCk7XG4gIGNvbnN0IHByZXNzdXJlID0gZ2VuUCgpO1xuICBjb25zdCB3aW5kRGlyID0gZ2VuUCgpO1xuICBjb25zdCB3aW5kU3BlZWQgPSBnZW5QKCk7XG4gIGNvbnN0IHJhaW5Qcm9iID0gZ2VuUCgpO1xuICBjb25zdCBzbm93UHJvYiA9IGdlblAoKTtcblxuICAvL1RPUFxuICB3ZWF0aGVySWNvbi5zcmMgPSBmb3JlY2FzdC5jdXJyZW50Lmljb25VUkw7XG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gZm9yZWNhc3QubG9jYXRpb247XG4gIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmN1cnJlbnQubG9jYWxUaW1lO1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbjtcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7Zm9yZWNhc3QuY3VycmVudC50ZW1wZXJhdHVyZVt2YWxdfWA7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2ZvcmVjYXN0LmN1cnJlbnQuaHVtaWRpdHl9YDtcbiAgLy9CT1RUT01cbiAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGBNYXhUZW1wOiAke2ZvcmVjYXN0LmZvcmVjYXN0RGF5WzBdLm1heFRlbXBbdmFsXX1gO1xuICBtaW5UZW1wLnRleHRDb250ZW50ID0gYE1pblRlbXA6ICR7Zm9yZWNhc3QuZm9yZWNhc3REYXlbMF0ubWluVGVtcFt2YWxdfWA7XG4gIHN1bnJpc2UudGV4dENvbnRlbnQgPSBgU3VucmlzZTogJHtmb3JlY2FzdC5mb3JlY2FzdERheVswXS5zdW5yaXNlfWA7XG4gIHN1bnNldC50ZXh0Q29udGVudCA9IGBTdW5zZXQ6ICR7Zm9yZWNhc3QuZm9yZWNhc3REYXlbMF0uc3Vuc2V0fWA7XG4gIHByZWNpcGl0YXRpb24udGV4dENvbnRlbnQgPSBgUHJlY2lwaXRhdGlvbjogJHtmb3JlY2FzdC5jdXJyZW50LnByZWNpcGl0YXRpb25bdmFsXX1gO1xuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtmb3JlY2FzdC5jdXJyZW50LnByZXNzdXJlW3ZhbF19YDtcbiAgd2luZERpci50ZXh0Q29udGVudCA9IGBXaW5kIGRpcmVjdGlvbjogJHtmb3JlY2FzdC5jdXJyZW50LndpbmREaXJlY3Rpb259YDtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWQ6ICR7Zm9yZWNhc3QuY3VycmVudC53aW5kU3BlZWRbdmFsXX1gO1xuICByYWluUHJvYi50ZXh0Q29udGVudCA9IGBSYWluIGNoYW5jZTogJHtmb3JlY2FzdC5mb3JlY2FzdERheVswXS5yYWluQ2hhbmNlfWA7XG4gIHNub3dQcm9iLnRleHRDb250ZW50ID0gYFNub3cgY2hhbmNlOiAke2ZvcmVjYXN0LmZvcmVjYXN0RGF5WzBdLnNub3dDaGFuY2V9YDtcblxuICAvL1RPUFxuICB0YWdzLnRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuICB0YWdzLnRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICB0YWdzLnRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQobG9jYWxUaW1lKTtcbiAgdGFncy50b3BTZWN0aW9uLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG4gIHRhZ3MudG9wU2VjdGlvbi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG4gIHRhZ3MudG9wU2VjdGlvbi5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIC8vQk9UVE9NXG4gIHRhZ3MuYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChtYXhUZW1wKTtcbiAgdGFncy5ib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKG1pblRlbXApO1xuICB0YWdzLmJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3VucmlzZSk7XG4gIHRhZ3MuYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChzdW5zZXQpO1xuICB0YWdzLmJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbik7XG4gIHRhZ3MuYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChwcmVzc3VyZSk7XG4gIHRhZ3MuYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZCh3aW5kRGlyKTtcbiAgdGFncy5ib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gIHRhZ3MuYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChyYWluUHJvYik7XG4gIHRhZ3MuYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZChzbm93UHJvYik7XG5cbiAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhZ3MudG9wU2VjdGlvbik7XG4gIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWdzLmJvdHRvbVNlY3Rpb24pO1xuICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodGFncy5leHBhbmRJY29uKTtcblxuICB0YWdzLmV4cGFuZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4cGFuZENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb3JlY2FzdCgpIHtcbiAgY29uc3QgdmFsID0gVW9NLnZhbHVlO1xuICBsZXQgYXJyID0gQXJyYXkuZnJvbShmdWxsRm9yZWNhc3QuY2hpbGRyZW4pO1xuICBhcnIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZWwuc3R5bGUud2lkdGgpIHtcbiAgICAgIGVsLnN0eWxlID0gXCJcIjtcbiAgICB9XG4gICAgY29uc3Qgc3ViQXJyID0gQXJyYXkuZnJvbShlbC5jaGlsZHJlbik7XG4gICAgc3ViQXJyLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IG5hbWVzID0gW1xuICAgIFwiaWNvblwiLFxuICAgIFwibG9jYXRpb25cIixcbiAgICBcImRhdGVcIixcbiAgICBcImNvbmRpdGlvblwiLFxuICAgIFwiYXZnSHVtaWRpdHlcIixcbiAgICBcIm1heFRlbXBcIixcbiAgICBcIm1pblRlbXBcIixcbiAgICBcImF2Z1RlbXBcIixcbiAgICBcInN1bnJpc2VcIixcbiAgICBcInN1bnNldFwiLFxuICAgIFwibWF4V2luZFwiLFxuICAgIFwicmFpbkNoYW5jZVwiLFxuICAgIFwic25vd0NoYW5jZVwiLFxuICBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgZHluYW1pY1ZhcnMgPSB7fTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5hbWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBkeW5hbWljVmFyc1tuYW1lc1tqXV0gPSBnZW5QKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob3VySWNvbiA9IG5ldyBJbWFnZSgyMCwgMjApO1xuICAgIGNvbnN0IGZyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG5cbiAgICBidG4uY2xhc3NOYW1lID0gXCJob3VyLWJ0blwiO1xuICAgIGhvdXJJY29uLnNyYyA9IGhvdXJzU1ZHO1xuICAgIGhvdXJJY29uLmlkID0gYGhvdXItYnRuLSR7aX1gO1xuICAgIGZyb250LmNsYXNzTmFtZSA9IFwiZnJvbnQtc2lkZVwiO1xuICAgIGljb24uc3JjID0gZm9yZWNhc3QuZm9yZWNhc3REYXlbaV0uaWNvblVSTDtcblxuICAgIGR5bmFtaWNWYXJzLmxvY2F0aW9uLnRleHRDb250ZW50ID0gZm9yZWNhc3QubG9jYXRpb247XG4gICAgZHluYW1pY1ZhcnMuZGF0ZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmZvcmVjYXN0RGF5W2ldLmRhdGU7XG4gICAgZHluYW1pY1ZhcnMuY29uZGl0aW9uLnRleHRDb250ZW50ID0gZm9yZWNhc3QuZm9yZWNhc3REYXlbaV0uY29uZGl0aW9uO1xuICAgIGR5bmFtaWNWYXJzLmF2Z0h1bWlkaXR5LnRleHRDb250ZW50ID0gYEFWRyBodW1pZGl0eTogJHtmb3JlY2FzdC5mb3JlY2FzdERheVtpXS5hdmdIdW1pZGl0eX1gO1xuICAgIGR5bmFtaWNWYXJzLm1heFRlbXAudGV4dENvbnRlbnQgPSBgTWF4IHRlbXA6ICR7Zm9yZWNhc3QuZm9yZWNhc3REYXlbaV0ubWF4VGVtcFt2YWxdfWA7XG4gICAgZHluYW1pY1ZhcnMubWluVGVtcC50ZXh0Q29udGVudCA9IGBNaW4gdGVtcDogJHtmb3JlY2FzdC5mb3JlY2FzdERheVtpXS5taW5UZW1wW3ZhbF19YDtcbiAgICBkeW5hbWljVmFycy5hdmdUZW1wLnRleHRDb250ZW50ID0gYEFWRyB0ZW1wOiAke2ZvcmVjYXN0LmZvcmVjYXN0RGF5W2ldLmF2Z1RlbXBbdmFsXX1gO1xuICAgIGR5bmFtaWNWYXJzLnN1bnJpc2UudGV4dENvbnRlbnQgPSBgU3VucmlzZTogJHtmb3JlY2FzdC5mb3JlY2FzdERheVtpXS5zdW5yaXNlfWA7XG4gICAgZHluYW1pY1ZhcnMuc3Vuc2V0LnRleHRDb250ZW50ID0gYFN1bnNldDogJHtmb3JlY2FzdC5mb3JlY2FzdERheVtpXS5zdW5zZXR9YDtcbiAgICBkeW5hbWljVmFycy5tYXhXaW5kLnRleHRDb250ZW50ID0gYE1heCB3aW5kOiAke2ZvcmVjYXN0LmZvcmVjYXN0RGF5W2ldLm1heFdpbmRbdmFsXX1gO1xuICAgIGR5bmFtaWNWYXJzLnJhaW5DaGFuY2UudGV4dENvbnRlbnQgPSBgUmFpbiBjaGFuY2U6ICR7Zm9yZWNhc3QuZm9yZWNhc3REYXlbaV0ucmFpbkNoYW5jZX1gO1xuICAgIGR5bmFtaWNWYXJzLnNub3dDaGFuY2UudGV4dENvbnRlbnQgPSBgU25vdyBjaGFuY2U6ICR7Zm9yZWNhc3QuZm9yZWNhc3REYXlbaV0uc25vd0NoYW5jZX1gO1xuXG4gICAgZnJvbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgZnJvbnQuYXBwZW5kQ2hpbGQoZHluYW1pY1ZhcnMubG9jYXRpb24pO1xuICAgIGZyb250LmFwcGVuZENoaWxkKGR5bmFtaWNWYXJzLmRhdGUpO1xuICAgIGZyb250LmFwcGVuZENoaWxkKGR5bmFtaWNWYXJzLmNvbmRpdGlvbik7XG4gICAgZnJvbnQuYXBwZW5kQ2hpbGQoZHluYW1pY1ZhcnMuYXZnSHVtaWRpdHkpO1xuICAgIGZyb250LmFwcGVuZENoaWxkKGR5bmFtaWNWYXJzLm1heFRlbXApO1xuICAgIGZyb250LmFwcGVuZENoaWxkKGR5bmFtaWNWYXJzLm1pblRlbXApO1xuICAgIGZyb250LmFwcGVuZENoaWxkKGR5bmFtaWNWYXJzLmF2Z1RlbXApO1xuICAgIGZyb250LmFwcGVuZENoaWxkKGR5bmFtaWNWYXJzLnN1bnJpc2UpO1xuICAgIGZyb250LmFwcGVuZENoaWxkKGR5bmFtaWNWYXJzLnN1bnNldCk7XG4gICAgZnJvbnQuYXBwZW5kQ2hpbGQoZHluYW1pY1ZhcnMubWF4V2luZCk7XG4gICAgZnJvbnQuYXBwZW5kQ2hpbGQoZHluYW1pY1ZhcnMucmFpbkNoYW5jZSk7XG4gICAgZnJvbnQuYXBwZW5kQ2hpbGQoZHluYW1pY1ZhcnMuc25vd0NoYW5jZSk7XG5cbiAgICBidG4uYXBwZW5kQ2hpbGQoaG91ckljb24pO1xuICAgIGFycltpXS5hcHBlbmRDaGlsZChidG4pO1xuICAgIGFycltpXS5hcHBlbmRDaGlsZChmcm9udCk7XG4gICAgZ2VuZXJhdGVIb3VyVGFibGUoaSwgYXJyW2ldKTtcblxuICAgIGhvdXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SG91cnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dIb3VycyhlKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgYnRuQ29udCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgY29uc3QgZnJvbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMV07XG4gIGNvbnN0IHRhYmxlID0gY29udGFpbmVyLmNoaWxkcmVuWzJdO1xuXG4gIGNvbnN0IGRheUljb24gPSBuZXcgSW1hZ2UoMjAsIDIwKTtcbiAgY29uc3QgZnVsbFZpZXdJY29uID0gbmV3IEltYWdlKDIwLCAyMCk7XG5cbiAgZGF5SWNvbi5zcmMgPSB0b2RheVNWRztcbiAgZnVsbFZpZXdJY29uLnNyYyA9IG9wZW5GdWxsU1ZHO1xuXG4gIGZyb250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGFibGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBlLnRhcmdldC5yZW1vdmUoKTtcblxuICBidG5Db250LmFwcGVuZENoaWxkKGRheUljb24pO1xuICBidG5Db250LmFwcGVuZENoaWxkKGZ1bGxWaWV3SWNvbik7XG5cbiAgZGF5SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0RheSk7XG4gIGZ1bGxWaWV3SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Z1bGxWaWV3KTtcbn1cblxuLy9uZWVkIHRvIGZpeCB2aWV3IGFuZCBjYW5jZWwgYnRuXG5mdW5jdGlvbiBzaG93RnVsbFZpZXcoZSkge1xuICBjb25zdCBjYW5jZWxCdG4gPSBuZXcgSW1hZ2UoMjAsIDIwKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgYnRuQ29udCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgY29uc3QgdGFibGUgPSBjb250YWluZXIuY2hpbGRyZW5bMl07XG4gIGNvbnN0IHRhYmxlQ29uV2lkdGggPSB0YWJsZS5zY3JvbGxXaWR0aDtcbiAgY29uc3QgdGFibGVDb25IZWlnaHQgPSB0YWJsZS5zY3JvbGxIZWlnaHQ7XG5cbiAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmZvcmVjYXN0RGF5W2NvbnRhaW5lci5pZFs0XV0uZGF0ZTtcblxuICBpZiAodGFibGVDb25IZWlnaHQgKyAyMCA8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke3RhYmxlQ29uSGVpZ2h0ICsgMjV9cHhgO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHtkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIDIwfXB4YDtcbiAgfVxuICBpZiAodGFibGVDb25XaWR0aCA8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpIHtcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBgJHt0YWJsZUNvbldpZHRoICsgNX1weGA7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYCR7ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aH1weGA7XG4gIH1cblxuICBjYW5jZWxCdG4uc3JjID0gY2xvc2VTVkc7XG5cbiAgYnRuQ29udC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcbiAgYnRuQ29udC5jaGlsZHJlblswXS5yZW1vdmUoKTtcblxuICBidG5Db250LmFwcGVuZENoaWxkKGRhdGUpO1xuICBidG5Db250LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UGFydGlhbFZpZXcpO1xufVxuXG5mdW5jdGlvbiBzaG93UGFydGlhbFZpZXcoZSkge1xuICBjb25zdCBjb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IGJ0bkNvbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG5cbiAgY29uc3QgZGF5SWNvbiA9IG5ldyBJbWFnZSgyMCwgMjApO1xuICBjb25zdCBmdWxsVmlld0ljb24gPSBuZXcgSW1hZ2UoMjAsIDIwKTtcblxuICBkYXlJY29uLnNyYyA9IHRvZGF5U1ZHO1xuICBmdWxsVmlld0ljb24uc3JjID0gb3BlbkZ1bGxTVkc7XG5cbiAgY29udGFpbmVyLnN0eWxlID0gXCJcIjtcblxuICBidG5Db250LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xuICBlLnRhcmdldC5yZW1vdmUoKTtcblxuICBidG5Db250LmFwcGVuZENoaWxkKGRheUljb24pO1xuICBidG5Db250LmFwcGVuZENoaWxkKGZ1bGxWaWV3SWNvbik7XG5cbiAgZGF5SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0RheSk7XG4gIGZ1bGxWaWV3SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Z1bGxWaWV3KTtcbn1cblxuZnVuY3Rpb24gc2hvd0RheShlKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgYnRuQ29udCA9IGNvbnRhaW5lci5jaGlsZHJlblswXTtcbiAgY29uc3QgZnJvbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMV07XG4gIGNvbnN0IHRhYmxlID0gY29udGFpbmVyLmNoaWxkcmVuWzJdO1xuXG4gIGNvbnN0IGFyciA9IEFycmF5LmZyb20oYnRuQ29udC5jaGlsZHJlbik7XG5cbiAgY29uc3QgaG91ckljb24gPSBuZXcgSW1hZ2UoMjAsIDIwKTtcblxuICBob3VySWNvbi5zcmMgPSBob3Vyc1NWRztcblxuICBmcm9udC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB0YWJsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgYXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGJ0bkNvbnQuYXBwZW5kQ2hpbGQoaG91ckljb24pO1xuXG4gIGhvdXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SG91cnMpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhvdXJUYWJsZShkYXksIGFycikge1xuICBjb25zdCB2YWwgPSBVb00udmFsdWU7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcblxuICBjb25zdCBpbmZvTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIGNvbnN0IGluZm9Db25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICBjb25zdCBpbmZvVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgY29uc3QgaW5mb1dpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgY29uc3QgaW5mb1dpbmREaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIGNvbnN0IGluZm9QcmVzc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgY29uc3QgaW5mb1ByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIGNvbnN0IGluZm9IdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgY29uc3QgaW5mb1JhaW5DaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIGNvbnN0IGluZm9Tbm93Q2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuXG4gIHdyYXBwZXIuY2xhc3NOYW1lID0gXCJ0YWJsZS13cmFwcGVyXCI7XG4gIHdyYXBwZXIuaWQgPSBgd3JhcHBlciR7ZGF5fWA7XG4gIHRhYmxlLmNsYXNzTmFtZSA9IFwiaG91ci10YWJsZVwiO1xuXG4gIGluZm9Db25kLnRleHRDb250ZW50ID0gXCJDXCI7XG4gIGluZm9UZW1wLnRleHRDb250ZW50ID0gXCJUXCI7XG4gIGluZm9XaW5kU3BlZWQudGV4dENvbnRlbnQgPSBcIldzXCI7XG4gIGluZm9XaW5kRGlyLnRleHRDb250ZW50ID0gXCJXZFwiO1xuICBpbmZvUHJlc3N1cmUudGV4dENvbnRlbnQgPSBcIlByc1wiO1xuICBpbmZvUHJlY2lwaXRhdGlvbi50ZXh0Q29udGVudCA9IFwiUHJjXCI7XG4gIGluZm9IdW1pZGl0eS50ZXh0Q29udGVudCA9IFwiSFwiO1xuICBpbmZvUmFpbkNoYW5jZS50ZXh0Q29udGVudCA9IFwiUiVcIjtcbiAgaW5mb1Nub3dDaGFuY2UudGV4dENvbnRlbnQgPSBcIlMlXCI7XG5cbiAgaW5mb0xpbmUuYXBwZW5kQ2hpbGQoZW1wdHkpO1xuICBpbmZvTGluZS5hcHBlbmRDaGlsZChpbmZvQ29uZCk7XG4gIGluZm9MaW5lLmFwcGVuZENoaWxkKGluZm9UZW1wKTtcbiAgaW5mb0xpbmUuYXBwZW5kQ2hpbGQoaW5mb1dpbmRTcGVlZCk7XG4gIGluZm9MaW5lLmFwcGVuZENoaWxkKGluZm9XaW5kRGlyKTtcbiAgaW5mb0xpbmUuYXBwZW5kQ2hpbGQoaW5mb1ByZXNzdXJlKTtcbiAgaW5mb0xpbmUuYXBwZW5kQ2hpbGQoaW5mb1ByZWNpcGl0YXRpb24pO1xuICBpbmZvTGluZS5hcHBlbmRDaGlsZChpbmZvSHVtaWRpdHkpO1xuICBpbmZvTGluZS5hcHBlbmRDaGlsZChpbmZvUmFpbkNoYW5jZSk7XG4gIGluZm9MaW5lLmFwcGVuZENoaWxkKGluZm9Tbm93Q2hhbmNlKTtcblxuICB0YWJsZS5hcHBlbmRDaGlsZChpbmZvTGluZSk7XG5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCAyNDsgaisrKSB7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKDIwLCAyMCk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGNvbnN0IHdpbmREaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICBjb25zdCByYWluQ2hhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIGNvbnN0IHNub3dDaGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICB0aW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3QuZm9yZWNhc3REYXlbZGF5XS5ob3VyW2pdLnRpbWU7XG4gICAgaWNvbi5zcmMgPSBmb3JlY2FzdC5mb3JlY2FzdERheVtkYXldLmhvdXJbal0uaWNvblVSTDtcbiAgICBjb25kaXRpb24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5mb3JlY2FzdERheVtkYXldLmhvdXJbal0udGVtcFt2YWxdO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmZvcmVjYXN0RGF5W2RheV0uaG91cltqXS53aW5kU3BlZWRbdmFsXTtcbiAgICB3aW5kRGlyLnRleHRDb250ZW50ID0gZm9yZWNhc3QuZm9yZWNhc3REYXlbZGF5XS5ob3VyW2pdLndpbmREaXJlY3Rpb247XG4gICAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5mb3JlY2FzdERheVtkYXldLmhvdXJbal0ucHJlc3N1cmVbdmFsXTtcbiAgICBwcmVjaXBpdGF0aW9uLnRleHRDb250ZW50ID1cbiAgICAgIGZvcmVjYXN0LmZvcmVjYXN0RGF5W2RheV0uaG91cltqXS5wcmVjaXBpdGF0aW9uW3ZhbF07XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5mb3JlY2FzdERheVtkYXldLmhvdXJbal0uaHVtaWRpdHk7XG4gICAgcmFpbkNoYW5jZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmZvcmVjYXN0RGF5W2RheV0uaG91cltqXS5yYWluQ2hhbmNlO1xuICAgIHNub3dDaGFuY2UudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5mb3JlY2FzdERheVtkYXldLmhvdXJbal0uc25vd0NoYW5jZTtcblxuICAgIGxpbmUuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgbGluZS5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuICAgIGxpbmUuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmUpO1xuICAgIGxpbmUuYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgICBsaW5lLmFwcGVuZENoaWxkKHdpbmREaXIpO1xuICAgIGxpbmUuYXBwZW5kQ2hpbGQocHJlc3N1cmUpO1xuICAgIGxpbmUuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbik7XG4gICAgbGluZS5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gICAgbGluZS5hcHBlbmRDaGlsZChyYWluQ2hhbmNlKTtcbiAgICBsaW5lLmFwcGVuZENoaWxkKHNub3dDaGFuY2UpO1xuXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgYXJyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBnZW5QKCkge1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAuY2xhc3NOYW1lID0gXCJkYXRhLXBhcmFcIjtcbiAgcmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRGF5VGFncygpIHtcbiAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBleHBhbmRJY29uID0gbmV3IEltYWdlKCk7XG5cbiAgY29uc3QgaWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gIHRvcFNlY3Rpb24uY2xhc3NOYW1lID0gXCJ0b3BcIjtcbiAgYm90dG9tU2VjdGlvbi5jbGFzc05hbWUgPSBcImJvdHRvbVwiO1xuICBpY29uLmNsYXNzTmFtZSA9IFwiaWNvblwiO1xuXG4gIGV4cGFuZEljb24uY2xhc3NOYW1lID0gXCJleHBhbmRcIjtcblxuICBleHBhbmRJY29uLnNyYyA9IGV4cGFuZFNWRztcblxuICByZXR1cm4ge1xuICAgIHRvcFNlY3Rpb24sXG4gICAgYm90dG9tU2VjdGlvbixcbiAgICBleHBhbmRJY29uLFxuICAgIGljb24sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJldHJhY3RDb250YWluZXIoZSkge1xuICBjb25zdCBleHBhbmRJY29uID0gbmV3IEltYWdlKCk7XG5cbiAgQXJyYXkuZnJvbShlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lID09PSBcImJvdHRvbVwiKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xuICBlLnRhcmdldC5yZW1vdmUoKTtcblxuICBleHBhbmRJY29uLnNyYyA9IGV4cGFuZFNWRztcbiAgZXhwYW5kSWNvbi5jbGFzc05hbWUgPSBcImV4cGFuZFwiO1xuXG4gIGRheUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIlwiO1xuXG4gIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChleHBhbmRJY29uKTtcblxuICBleHBhbmRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHBhbmRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBleHBhbmRDb250YWluZXIoZSkge1xuICBjb25zdCBjb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICBjb25zdCByZXRyYWN0SWNvbiA9IG5ldyBJbWFnZSgpO1xuXG4gIHJldHJhY3RJY29uLnNyYyA9IHJldHJhY3RTVkc7XG4gIHJldHJhY3RJY29uLmNsYXNzTmFtZSA9IFwicmV0cmFjdFwiO1xuXG4gIGRheUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZ1bGwtZGF5XCI7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgQXJyYXkuZnJvbShjb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZSA9PT0gXCJib3R0b21cIikge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgMTAwMCk7XG5cbiAgZS50YXJnZXQucmVtb3ZlKCk7XG4gIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXRyYWN0SWNvbik7XG5cbiAgcmV0cmFjdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJldHJhY3RDb250YWluZXIpO1xufVxuIiwiaW1wb3J0IHsgZm9yZWNhc3QgfSBmcm9tIFwiLi9sb2NhbEFwaVwiO1xuXG5jb25zdCB3ZWF0aGVyQXBpRnJlZUtleSA9IHByb2Nlc3MuZW52LldFQVRIRVJfQVBJX0tFWTtcblxuZXhwb3J0IGxldCBhcGlEYXRhO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eU9uTG9hZCgpIHtcbiAgLy8gY29uc3QgdDEgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBpcCA9IGF3YWl0IGdldElwKCk7XG4gIC8vIGNvbnN0IHQyID0gbmV3IERhdGUoKTtcbiAgLy8gY29uc29sZS5sb2coXCJnZXRJcFwiLCB0MiAtIHQxKTtcbiAgLy8gY29uc29sZS5sb2coXCJpcFwiLCBpcCk7XG4gIGNvbnN0IHJlc3BvbnNlTG9jID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2lwLmpzb24/a2V5PSR7d2VhdGhlckFwaUZyZWVLZXl9JnE9JHtpcH1gXG4gICk7XG4gIGNvbnN0IGlwRGF0YSA9IGF3YWl0IHJlc3BvbnNlTG9jLmpzb24oKTtcbiAgLy8gY29uc3QgdDQgPSBuZXcgRGF0ZSgpO1xuICAvLyBjb25zb2xlLmxvZyhcImdldENpdHlcIiwgdDQgLSB0Mik7XG4gIC8vIGNvbnNvbGUubG9nKFwiaXArY2l0eVwiLCB0NCAtIHQxKTtcbiAgLy8gY29uc29sZS5sb2coXCJjaXR5XCIsIGlwRGF0YSk7XG4gIHJldHVybiBpcERhdGEuY2l0eTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRm9yZWNhc3QobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCB0MSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke3dlYXRoZXJBcGlGcmVlS2V5fSZxPSR7bG9jYXRpb259JmRheXM9M2BcbiAgICApO1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBhcGlEYXRhID0gZm9yZWNhc3REYXRhO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiYXBpRGF0YVwiLCBmb3JlY2FzdERhdGEpO1xuICAgIC8vIGNvbnN0IHQyID0gbmV3IERhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImZvcmVjYXN0XCIsIHQyIC0gdDEpO1xuICAgIHJldHVybiBmb3JlY2FzdERhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3Iuc3RhdHVzKTtcbiAgfVxufVxuXG4vL1NPIEZVQ0tJTkcgU0xPVyhyYW5nZSBmcm9tIDE1MCB0byAyNTAgbXMgd2l0aCBteSBjb25uZWN0aW9uICYgbm8gdGhyb3R0bGVcbi8vd2hpbGUgYWxsIHRoZSByZXN0IG9mIGZldGNoIHJlcXVlc3RzKGdldENpdHkmZmV0Y2hGb3JlY2FzdCkgY29tYmluZWQgYXJlIDMwIHRvIDkwIG1zKSxcbi8vYnV0IGknbSB0b28gbGF6eSB0byBzcGVuZCBob3VycyBmaW5kaW5nIG1vcmUgb3B0aW1pemVkIHNvbHV0aW9uLCBzaW5jZSBpdCBpc1xuLy9vbmx5IG5lZWRlZCBvbmNlXG5hc3luYyBmdW5jdGlvbiBnZXRJcCgpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmlwaWZ5Lm9yZz9mb3JtYXQ9anNvblwiKTtcbiAgY29uc3QgaXBPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGlwID0gaXBPYmouaXA7XG4gIHJldHVybiBpcDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBvbkxvYWRCZWhhdmlvciwgY2hhbmdlVW9NLCBjaGFuZ2VDaXR5IH0gZnJvbSBcIi4vbG9jYWxBcGlcIjtcbmltcG9ydCB7IFVvTSwgY2l0eUNoYW5nZUJ0biwgY2l0eUlucHV0IH0gZnJvbSBcIi4vcmVuZGVyU3R1ZmZcIjtcblxub25Mb2FkQmVoYXZpb3IoKTtcblxuVW9NLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2hhbmdlVW9NKTtcbmNpdHlDaGFuZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNpdHkpO1xuY2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGNoYW5nZUNpdHkoKTtcbiAgfVxufSk7XG5cbi8vVE8gRE86XG4vLyBoaWRlIGFwaUtleTtWVlxuLy8gZmluaXNoIHN0eWxpbmc7VlZcbi8vIGdpdEh1YiB1cGxvYWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=