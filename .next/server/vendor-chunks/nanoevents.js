"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nanoevents";
exports.ids = ["vendor-chunks/nanoevents"];
exports.modules = {

/***/ "(ssr)/./node_modules/nanoevents/index.js":
/*!******************************************!*\
  !*** ./node_modules/nanoevents/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNanoEvents: () => (/* binding */ createNanoEvents)\n/* harmony export */ });\nlet createNanoEvents = () => ({\n  events: {},\n  emit(event, ...args) {\n    let callbacks = this.events[event] || []\n    for (let i = 0, length = callbacks.length; i < length; i++) {\n      callbacks[i](...args)\n    }\n  },\n  on(event, cb) {\n    this.events[event]?.push(cb) || (this.events[event] = [cb])\n    return () => {\n      this.events[event] = this.events[event]?.filter(i => cb !== i)\n    }\n  }\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFub2V2ZW50cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCxZQUFZO0FBQ1o7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsdXRvLWxlYXJuaW5nLy4vbm9kZV9tb2R1bGVzL25hbm9ldmVudHMvaW5kZXguanM/YzhlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IGNyZWF0ZU5hbm9FdmVudHMgPSAoKSA9PiAoe1xuICBldmVudHM6IHt9LFxuICBlbWl0KGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgbGV0IGNhbGxiYWNrcyA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrc1tpXSguLi5hcmdzKVxuICAgIH1cbiAgfSxcbiAgb24oZXZlbnQsIGNiKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnRdPy5wdXNoKGNiKSB8fCAodGhpcy5ldmVudHNbZXZlbnRdID0gW2NiXSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdPy5maWx0ZXIoaSA9PiBjYiAhPT0gaSlcbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nanoevents/index.js\n");

/***/ })

};
;