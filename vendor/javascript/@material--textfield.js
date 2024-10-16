// @material/textfield@4.0.0 downloaded from https://ga.jspm.io/npm:@material/textfield@4.0.0/dist/mdc.textfield.js

var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var e={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */(function webpackUniversalModuleDefinition(t,n){e=n()})(e,(function(){return function(t){var e={};function __webpack_require__(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:false,exports:{}};t[n].call(i.exports,i,i.exports,__webpack_require__);i.l=true;return i.exports}__webpack_require__.m=t;__webpack_require__.c=e;__webpack_require__.d=function(t,e,n){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{enumerable:true,get:n})};__webpack_require__.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});Object.defineProperty(t,"__esModule",{value:true})};__webpack_require__.t=function(t,e){1&e&&(t=__webpack_require__(t));if(8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);__webpack_require__.r(n);Object.defineProperty(n,"default",{enumerable:true,value:t});if(2&e&&"string"!=typeof t)for(var i in t)__webpack_require__.d(n,i,function(e){return t[e]}.bind(null,i));return n};__webpack_require__.n=function(t){var e=t&&t.__esModule?function getDefault(){return t["default"]}:function getModuleExports(){return t};__webpack_require__.d(e,"a",e);return e};__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="./packages/mdc-textfield/index.ts")}({"./packages/mdc-base/component.ts":function(e,n,i){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__read||function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,o=[],a;try{while((void 0===e||e-- >0)&&!(r=i.next()).done)o.push(r.value)}catch(t){a={error:t}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(a)throw a.error}}return o};var o=(this||t)&&(this||t).__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/foundation.ts");var s=function(){function MDCComponent(e,n){var i=[];for(var r=2;r<arguments.length;r++)i[r-2]=arguments[r];(this||t).root_=e;(this||t).initialize.apply(this||t,o(i));(this||t).foundation_=void 0===n?this.getDefaultFoundation():n;(this||t).foundation_.init();this.initialSyncWithDOM()}MDCComponent.attachTo=function(t){return new MDCComponent(t,new a.MDCFoundation({}))};MDCComponent.prototype.initialize=function(){var t=[];for(var e=0;e<arguments.length;e++)t[e]=arguments[e]};MDCComponent.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured "+"foundation class")};MDCComponent.prototype.initialSyncWithDOM=function(){};MDCComponent.prototype.destroy=function(){(this||t).foundation_.destroy()};MDCComponent.prototype.listen=function(e,n,i){(this||t).root_.addEventListener(e,n,i)};MDCComponent.prototype.unlisten=function(e,n,i){(this||t).root_.removeEventListener(e,n,i)};MDCComponent.prototype.emit=function(e,n,i){void 0===i&&(i=false);var r;if("function"===typeof CustomEvent)r=new CustomEvent(e,{bubbles:i,detail:n});else{r=document.createEvent("CustomEvent");r.initCustomEvent(e,i,false,n)}(this||t).root_.dispatchEvent(r)};return MDCComponent}();n.MDCComponent=s;n.default=s},"./packages/mdc-base/foundation.ts":function(e,n,i){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(n,"__esModule",{value:true});var r=function(){function MDCFoundation(e){void 0===e&&(e={});(this||t).adapter_=e}Object.defineProperty(MDCFoundation,"cssClasses",{get:function get(){return{}},enumerable:true,configurable:true});Object.defineProperty(MDCFoundation,"strings",{get:function get(){return{}},enumerable:true,configurable:true});Object.defineProperty(MDCFoundation,"numbers",{get:function get(){return{}},enumerable:true,configurable:true});Object.defineProperty(MDCFoundation,"defaultAdapter",{get:function get(){return{}},enumerable:true,configurable:true});MDCFoundation.prototype.init=function(){};MDCFoundation.prototype.destroy=function(){};return MDCFoundation}();n.MDCFoundation=r;n.default=r},"./packages/mdc-dom/events.ts":function(t,e,n){
/**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});var i;function applyPassive(t,e){void 0===t&&(t=window);void 0===e&&(e=false);if(void 0===i||e){var n=false;try{t.document.addEventListener("test",(function(){}),{get passive(){n=true;return n}})}catch(t){}i=n}return!!i&&{passive:true}}e.applyPassive=applyPassive},"./packages/mdc-dom/ponyfill.ts":function(t,e,n){
/**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});function closest(t,e){if(t.closest)return t.closest(e);var n=t;while(n){if(matches(n,e))return n;n=n.parentElement}return null}e.closest=closest;function matches(t,e){var n=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return n.call(t,e)}e.matches=matches},"./packages/mdc-floating-label/component.ts":function(e,n,i){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();Object.defineProperty(n,"__esModule",{value:true});var o=i("./packages/mdc-base/component.ts");var a=i("./packages/mdc-floating-label/foundation.ts");var s=function(e){r(MDCFloatingLabel,e);function MDCFloatingLabel(){return null!==e&&e.apply(this||t,arguments)||this||t}MDCFloatingLabel.attachTo=function(t){return new MDCFloatingLabel(t)};
/**
           * Styles the label to produce the label shake for errors.
           * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
           */MDCFloatingLabel.prototype.shake=function(e){(this||t).foundation_.shake(e)};
/**
           * Styles the label to float/dock.
           * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
           */MDCFloatingLabel.prototype.float=function(e){(this||t).foundation_.float(e)};MDCFloatingLabel.prototype.getWidth=function(){return(this||t).foundation_.getWidth()};MDCFloatingLabel.prototype.getDefaultFoundation=function(){var e=this||t;var n={addClass:function addClass(t){return e.root_.classList.add(t)},removeClass:function removeClass(t){return e.root_.classList.remove(t)},getWidth:function getWidth(){return e.root_.scrollWidth},registerInteractionHandler:function registerInteractionHandler(t,n){return e.listen(t,n)},deregisterInteractionHandler:function deregisterInteractionHandler(t,n){return e.unlisten(t,n)}};return new a.MDCFloatingLabelFoundation(n)};return MDCFloatingLabel}(o.MDCComponent);n.MDCFloatingLabel=s},"./packages/mdc-floating-label/constants.ts":function(t,e,n){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});e.cssClasses={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"}},"./packages/mdc-floating-label/foundation.ts":function(e,n,i){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__assign||function(){o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};return o.apply(this||t,arguments)};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/foundation.ts");var s=i("./packages/mdc-floating-label/constants.ts");var u=function(e){r(MDCFloatingLabelFoundation,e);function MDCFloatingLabelFoundation(n){var i=e.call(this||t,o({},MDCFloatingLabelFoundation.defaultAdapter,n))||this||t;i.shakeAnimationEndHandler_=function(){return i.handleShakeAnimationEnd_()};return i}Object.defineProperty(MDCFloatingLabelFoundation,"cssClasses",{get:function get(){return s.cssClasses},enumerable:true,configurable:true});Object.defineProperty(MDCFloatingLabelFoundation,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},getWidth:function getWidth(){return 0},registerInteractionHandler:function registerInteractionHandler(){},deregisterInteractionHandler:function deregisterInteractionHandler(){}}},enumerable:true,configurable:true});MDCFloatingLabelFoundation.prototype.init=function(){(this||t).adapter_.registerInteractionHandler("animationend",(this||t).shakeAnimationEndHandler_)};MDCFloatingLabelFoundation.prototype.destroy=function(){(this||t).adapter_.deregisterInteractionHandler("animationend",(this||t).shakeAnimationEndHandler_)};MDCFloatingLabelFoundation.prototype.getWidth=function(){return(this||t).adapter_.getWidth()};
/**
           * Styles the label to produce a shake animation to indicate an error.
           * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
           */MDCFloatingLabelFoundation.prototype.shake=function(e){var n=MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;e?(this||t).adapter_.addClass(n):(this||t).adapter_.removeClass(n)};
/**
           * Styles the label to float or dock.
           * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
           */MDCFloatingLabelFoundation.prototype.float=function(e){var n=MDCFloatingLabelFoundation.cssClasses,i=n.LABEL_FLOAT_ABOVE,r=n.LABEL_SHAKE;if(e)(this||t).adapter_.addClass(i);else{(this||t).adapter_.removeClass(i);(this||t).adapter_.removeClass(r)}};MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_=function(){var e=MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;(this||t).adapter_.removeClass(e)};return MDCFloatingLabelFoundation}(a.MDCFoundation);n.MDCFloatingLabelFoundation=u;n.default=u},"./packages/mdc-line-ripple/component.ts":function(e,n,i){
/**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();Object.defineProperty(n,"__esModule",{value:true});var o=i("./packages/mdc-base/component.ts");var a=i("./packages/mdc-line-ripple/foundation.ts");var s=function(e){r(MDCLineRipple,e);function MDCLineRipple(){return null!==e&&e.apply(this||t,arguments)||this||t}MDCLineRipple.attachTo=function(t){return new MDCLineRipple(t)};MDCLineRipple.prototype.activate=function(){(this||t).foundation_.activate()};MDCLineRipple.prototype.deactivate=function(){(this||t).foundation_.deactivate()};MDCLineRipple.prototype.setRippleCenter=function(e){(this||t).foundation_.setRippleCenter(e)};MDCLineRipple.prototype.getDefaultFoundation=function(){var e=this||t;var n={addClass:function addClass(t){return e.root_.classList.add(t)},removeClass:function removeClass(t){return e.root_.classList.remove(t)},hasClass:function hasClass(t){return e.root_.classList.contains(t)},setStyle:function setStyle(t,n){return e.root_.style.setProperty(t,n)},registerEventHandler:function registerEventHandler(t,n){return e.listen(t,n)},deregisterEventHandler:function deregisterEventHandler(t,n){return e.unlisten(t,n)}};return new a.MDCLineRippleFoundation(n)};return MDCLineRipple}(o.MDCComponent);n.MDCLineRipple=s},"./packages/mdc-line-ripple/constants.ts":function(t,e,n){
/**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});var i={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};e.cssClasses=i},"./packages/mdc-line-ripple/foundation.ts":function(e,n,i){
/**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__assign||function(){o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};return o.apply(this||t,arguments)};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/foundation.ts");var s=i("./packages/mdc-line-ripple/constants.ts");var u=function(e){r(MDCLineRippleFoundation,e);function MDCLineRippleFoundation(n){var i=e.call(this||t,o({},MDCLineRippleFoundation.defaultAdapter,n))||this||t;i.transitionEndHandler_=function(t){return i.handleTransitionEnd(t)};return i}Object.defineProperty(MDCLineRippleFoundation,"cssClasses",{get:function get(){return s.cssClasses},enumerable:true,configurable:true});Object.defineProperty(MDCLineRippleFoundation,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},hasClass:function hasClass(){return false},setStyle:function setStyle(){},registerEventHandler:function registerEventHandler(){},deregisterEventHandler:function deregisterEventHandler(){}}},enumerable:true,configurable:true});MDCLineRippleFoundation.prototype.init=function(){(this||t).adapter_.registerEventHandler("transitionend",(this||t).transitionEndHandler_)};MDCLineRippleFoundation.prototype.destroy=function(){(this||t).adapter_.deregisterEventHandler("transitionend",(this||t).transitionEndHandler_)};MDCLineRippleFoundation.prototype.activate=function(){(this||t).adapter_.removeClass(s.cssClasses.LINE_RIPPLE_DEACTIVATING);(this||t).adapter_.addClass(s.cssClasses.LINE_RIPPLE_ACTIVE)};MDCLineRippleFoundation.prototype.setRippleCenter=function(e){(this||t).adapter_.setStyle("transform-origin",e+"px center")};MDCLineRippleFoundation.prototype.deactivate=function(){(this||t).adapter_.addClass(s.cssClasses.LINE_RIPPLE_DEACTIVATING)};MDCLineRippleFoundation.prototype.handleTransitionEnd=function(e){var n=(this||t).adapter_.hasClass(s.cssClasses.LINE_RIPPLE_DEACTIVATING);if("opacity"===e.propertyName&&n){(this||t).adapter_.removeClass(s.cssClasses.LINE_RIPPLE_ACTIVE);(this||t).adapter_.removeClass(s.cssClasses.LINE_RIPPLE_DEACTIVATING)}};return MDCLineRippleFoundation}(a.MDCFoundation);n.MDCLineRippleFoundation=u;n.default=u},"./packages/mdc-notched-outline/component.ts":function(e,n,i){
/**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();Object.defineProperty(n,"__esModule",{value:true});var o=i("./packages/mdc-base/component.ts");var a=i("./packages/mdc-floating-label/foundation.ts");var s=i("./packages/mdc-notched-outline/constants.ts");var u=i("./packages/mdc-notched-outline/foundation.ts");var c=function(e){r(MDCNotchedOutline,e);function MDCNotchedOutline(){return null!==e&&e.apply(this||t,arguments)||this||t}MDCNotchedOutline.attachTo=function(t){return new MDCNotchedOutline(t)};MDCNotchedOutline.prototype.initialSyncWithDOM=function(){(this||t).notchElement_=(this||t).root_.querySelector(s.strings.NOTCH_ELEMENT_SELECTOR);var e=(this||t).root_.querySelector("."+a.MDCFloatingLabelFoundation.cssClasses.ROOT);if(e){e.style.transitionDuration="0s";(this||t).root_.classList.add(s.cssClasses.OUTLINE_UPGRADED);requestAnimationFrame((function(){e.style.transitionDuration=""}))}else(this||t).root_.classList.add(s.cssClasses.NO_LABEL)};
/**
           * Updates classes and styles to open the notch to the specified width.
           * @param notchWidth The notch width in the outline.
           */MDCNotchedOutline.prototype.notch=function(e){(this||t).foundation_.notch(e)};MDCNotchedOutline.prototype.closeNotch=function(){(this||t).foundation_.closeNotch()};MDCNotchedOutline.prototype.getDefaultFoundation=function(){var e=this||t;var n={addClass:function addClass(t){return e.root_.classList.add(t)},removeClass:function removeClass(t){return e.root_.classList.remove(t)},setNotchWidthProperty:function setNotchWidthProperty(t){return e.notchElement_.style.setProperty("width",t+"px")},removeNotchWidthProperty:function removeNotchWidthProperty(){return e.notchElement_.style.removeProperty("width")}};return new u.MDCNotchedOutlineFoundation(n)};return MDCNotchedOutline}(o.MDCComponent);n.MDCNotchedOutline=c},"./packages/mdc-notched-outline/constants.ts":function(t,e,n){
/**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});var i={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"};e.strings=i;var r={NOTCH_ELEMENT_PADDING:8};e.numbers=r;var o={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};e.cssClasses=o},"./packages/mdc-notched-outline/foundation.ts":function(e,n,i){
/**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__assign||function(){o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};return o.apply(this||t,arguments)};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/foundation.ts");var s=i("./packages/mdc-notched-outline/constants.ts");var u=function(e){r(MDCNotchedOutlineFoundation,e);function MDCNotchedOutlineFoundation(n){return e.call(this||t,o({},MDCNotchedOutlineFoundation.defaultAdapter,n))||this||t}Object.defineProperty(MDCNotchedOutlineFoundation,"strings",{get:function get(){return s.strings},enumerable:true,configurable:true});Object.defineProperty(MDCNotchedOutlineFoundation,"cssClasses",{get:function get(){return s.cssClasses},enumerable:true,configurable:true});Object.defineProperty(MDCNotchedOutlineFoundation,"numbers",{get:function get(){return s.numbers},enumerable:true,configurable:true});Object.defineProperty(MDCNotchedOutlineFoundation,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},setNotchWidthProperty:function setNotchWidthProperty(){},removeNotchWidthProperty:function removeNotchWidthProperty(){}}},enumerable:true,configurable:true});MDCNotchedOutlineFoundation.prototype.notch=function(e){var n=MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;e>0&&(e+=s.numbers.NOTCH_ELEMENT_PADDING);(this||t).adapter_.setNotchWidthProperty(e);(this||t).adapter_.addClass(n)};MDCNotchedOutlineFoundation.prototype.closeNotch=function(){var e=MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;(this||t).adapter_.removeClass(e);(this||t).adapter_.removeNotchWidthProperty()};return MDCNotchedOutlineFoundation}(a.MDCFoundation);n.MDCNotchedOutlineFoundation=u;n.default=u},"./packages/mdc-ripple/component.ts":function(e,n,i){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e["default"]=t;return e};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/component.ts");var s=i("./packages/mdc-dom/events.ts");var u=i("./packages/mdc-dom/ponyfill.ts");var c=i("./packages/mdc-ripple/foundation.ts");var d=o(i("./packages/mdc-ripple/util.ts"));var l=function(e){r(MDCRipple,e);function MDCRipple(){var n=null!==e&&e.apply(this||t,arguments)||this||t;n.disabled=false;return n}MDCRipple.attachTo=function(t,e){void 0===e&&(e={isUnbounded:void 0});var n=new MDCRipple(t);void 0!==e.isUnbounded&&(n.unbounded=e.isUnbounded);return n};MDCRipple.createAdapter=function(t){return{addClass:function addClass(e){return t.root_.classList.add(e)},browserSupportsCssVars:function browserSupportsCssVars(){return d.supportsCssVariables(window)},computeBoundingRect:function computeBoundingRect(){return t.root_.getBoundingClientRect()},containsEventTarget:function containsEventTarget(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function deregisterDocumentInteractionHandler(t,e){return document.documentElement.removeEventListener(t,e,s.applyPassive())},deregisterInteractionHandler:function deregisterInteractionHandler(e,n){return t.root_.removeEventListener(e,n,s.applyPassive())},deregisterResizeHandler:function deregisterResizeHandler(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function getWindowPageOffset(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function isSurfaceActive(){return u.matches(t.root_,":active")},isSurfaceDisabled:function isSurfaceDisabled(){return Boolean(t.disabled)},isUnbounded:function isUnbounded(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function registerDocumentInteractionHandler(t,e){return document.documentElement.addEventListener(t,e,s.applyPassive())},registerInteractionHandler:function registerInteractionHandler(e,n){return t.root_.addEventListener(e,n,s.applyPassive())},registerResizeHandler:function registerResizeHandler(t){return window.addEventListener("resize",t)},removeClass:function removeClass(e){return t.root_.classList.remove(e)},updateCssVariable:function updateCssVariable(e,n){return t.root_.style.setProperty(e,n)}}};Object.defineProperty(MDCRipple.prototype,"unbounded",{get:function get(){return Boolean((this||t).unbounded_)},set:function set(e){(this||t).unbounded_=Boolean(e);this.setUnbounded_()},enumerable:true,configurable:true});MDCRipple.prototype.activate=function(){(this||t).foundation_.activate()};MDCRipple.prototype.deactivate=function(){(this||t).foundation_.deactivate()};MDCRipple.prototype.layout=function(){(this||t).foundation_.layout()};MDCRipple.prototype.getDefaultFoundation=function(){return new c.MDCRippleFoundation(MDCRipple.createAdapter(this||t))};MDCRipple.prototype.initialSyncWithDOM=function(){var e=(this||t).root_;(this||t).unbounded="mdcRippleIsUnbounded"in e.dataset};MDCRipple.prototype.setUnbounded_=function(){(this||t).foundation_.setUnbounded(Boolean((this||t).unbounded_))};return MDCRipple}(a.MDCComponent);n.MDCRipple=l},"./packages/mdc-ripple/constants.ts":function(t,e,n){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});e.cssClasses={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"};e.strings={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"};e.numbers={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300}},"./packages/mdc-ripple/foundation.ts":function(e,n,i){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__assign||function(){o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};return o.apply(this||t,arguments)};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/foundation.ts");var s=i("./packages/mdc-ripple/constants.ts");var u=i("./packages/mdc-ripple/util.ts");var c=["touchstart","pointerdown","mousedown","keydown"];var d=["touchend","pointerup","mouseup","contextmenu"];var l=[];var p=function(e){r(MDCRippleFoundation,e);function MDCRippleFoundation(n){var i=e.call(this||t,o({},MDCRippleFoundation.defaultAdapter,n))||this||t;i.activationAnimationHasEnded_=false;i.activationTimer_=0;i.fgDeactivationRemovalTimer_=0;i.fgScale_="0";i.frame_={width:0,height:0};i.initialSize_=0;i.layoutFrame_=0;i.maxRadius_=0;i.unboundedCoords_={left:0,top:0};i.activationState_=i.defaultActivationState_();i.activationTimerCallback_=function(){i.activationAnimationHasEnded_=true;i.runDeactivationUXLogicIfReady_()};i.activateHandler_=function(t){return i.activate_(t)};i.deactivateHandler_=function(){return i.deactivate_()};i.focusHandler_=function(){return i.handleFocus()};i.blurHandler_=function(){return i.handleBlur()};i.resizeHandler_=function(){return i.layout()};return i}Object.defineProperty(MDCRippleFoundation,"cssClasses",{get:function get(){return s.cssClasses},enumerable:true,configurable:true});Object.defineProperty(MDCRippleFoundation,"strings",{get:function get(){return s.strings},enumerable:true,configurable:true});Object.defineProperty(MDCRippleFoundation,"numbers",{get:function get(){return s.numbers},enumerable:true,configurable:true});Object.defineProperty(MDCRippleFoundation,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},browserSupportsCssVars:function browserSupportsCssVars(){return true},computeBoundingRect:function computeBoundingRect(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function containsEventTarget(){return true},deregisterDocumentInteractionHandler:function deregisterDocumentInteractionHandler(){},deregisterInteractionHandler:function deregisterInteractionHandler(){},deregisterResizeHandler:function deregisterResizeHandler(){},getWindowPageOffset:function getWindowPageOffset(){return{x:0,y:0}},isSurfaceActive:function isSurfaceActive(){return true},isSurfaceDisabled:function isSurfaceDisabled(){return true},isUnbounded:function isUnbounded(){return true},registerDocumentInteractionHandler:function registerDocumentInteractionHandler(){},registerInteractionHandler:function registerInteractionHandler(){},registerResizeHandler:function registerResizeHandler(){},removeClass:function removeClass(){},updateCssVariable:function updateCssVariable(){}}},enumerable:true,configurable:true});MDCRippleFoundation.prototype.init=function(){var e=this||t;var n=this.supportsPressRipple_();this.registerRootHandlers_(n);if(n){var i=MDCRippleFoundation.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.addClass(r);if(e.adapter_.isUnbounded()){e.adapter_.addClass(o);e.layoutInternal_()}}))}};MDCRippleFoundation.prototype.destroy=function(){var e=this||t;if(this.supportsPressRipple_()){if((this||t).activationTimer_){clearTimeout((this||t).activationTimer_);(this||t).activationTimer_=0;(this||t).adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION)}if((this||t).fgDeactivationRemovalTimer_){clearTimeout((this||t).fgDeactivationRemovalTimer_);(this||t).fgDeactivationRemovalTimer_=0;(this||t).adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION)}var n=MDCRippleFoundation.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame((function(){e.adapter_.removeClass(i);e.adapter_.removeClass(r);e.removeCssVars_()}))}this.deregisterRootHandlers_();this.deregisterDeactivationHandlers_()};
/**
           * @param evt Optional event containing position information.
           */MDCRippleFoundation.prototype.activate=function(t){this.activate_(t)};MDCRippleFoundation.prototype.deactivate=function(){this.deactivate_()};MDCRippleFoundation.prototype.layout=function(){var e=this||t;(this||t).layoutFrame_&&cancelAnimationFrame((this||t).layoutFrame_);(this||t).layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_();e.layoutFrame_=0}))};MDCRippleFoundation.prototype.setUnbounded=function(e){var n=MDCRippleFoundation.cssClasses.UNBOUNDED;e?(this||t).adapter_.addClass(n):(this||t).adapter_.removeClass(n)};MDCRippleFoundation.prototype.handleFocus=function(){var e=this||t;requestAnimationFrame((function(){return e.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)}))};MDCRippleFoundation.prototype.handleBlur=function(){var e=this||t;requestAnimationFrame((function(){return e.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)}))};MDCRippleFoundation.prototype.supportsPressRipple_=function(){return(this||t).adapter_.browserSupportsCssVars()};MDCRippleFoundation.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:false,isActivated:false,isProgrammatic:false,wasActivatedByPointer:false,wasElementMadeActive:false}};MDCRippleFoundation.prototype.registerRootHandlers_=function(e){var n=this||t;if(e){c.forEach((function(t){n.adapter_.registerInteractionHandler(t,n.activateHandler_)}));(this||t).adapter_.isUnbounded()&&(this||t).adapter_.registerResizeHandler((this||t).resizeHandler_)}(this||t).adapter_.registerInteractionHandler("focus",(this||t).focusHandler_);(this||t).adapter_.registerInteractionHandler("blur",(this||t).blurHandler_)};MDCRippleFoundation.prototype.registerDeactivationHandlers_=function(e){var n=this||t;"keydown"===e.type?(this||t).adapter_.registerInteractionHandler("keyup",(this||t).deactivateHandler_):d.forEach((function(t){n.adapter_.registerDocumentInteractionHandler(t,n.deactivateHandler_)}))};MDCRippleFoundation.prototype.deregisterRootHandlers_=function(){var e=this||t;c.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}));(this||t).adapter_.deregisterInteractionHandler("focus",(this||t).focusHandler_);(this||t).adapter_.deregisterInteractionHandler("blur",(this||t).blurHandler_);(this||t).adapter_.isUnbounded()&&(this||t).adapter_.deregisterResizeHandler((this||t).resizeHandler_)};MDCRippleFoundation.prototype.deregisterDeactivationHandlers_=function(){var e=this||t;(this||t).adapter_.deregisterInteractionHandler("keyup",(this||t).deactivateHandler_);d.forEach((function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)}))};MDCRippleFoundation.prototype.removeCssVars_=function(){var e=this||t;var n=MDCRippleFoundation.strings;var i=Object.keys(n);i.forEach((function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)}))};MDCRippleFoundation.prototype.activate_=function(e){var n=this||t;if(!(this||t).adapter_.isSurfaceDisabled()){var i=(this||t).activationState_;if(!i.isActivated){var r=(this||t).previousActivationEvent_;var o=r&&void 0!==e&&r.type!==e.type;if(!o){i.isActivated=true;i.isProgrammatic=void 0===e;i.activationEvent=e;i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type));var a=void 0!==e&&l.length>0&&l.some((function(t){return n.adapter_.containsEventTarget(t)}));if(a)this.resetActivationState_();else{if(void 0!==e){l.push(e.target);this.registerDeactivationHandlers_(e)}i.wasElementMadeActive=this.checkElementMadeActive_(e);i.wasElementMadeActive&&this.animateActivation_();requestAnimationFrame((function(){l=[];if(!i.wasElementMadeActive&&void 0!==e&&(" "===e.key||32===e.keyCode)){i.wasElementMadeActive=n.checkElementMadeActive_(e);i.wasElementMadeActive&&n.animateActivation_()}i.wasElementMadeActive||(n.activationState_=n.defaultActivationState_())}))}}}}};MDCRippleFoundation.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||(this||t).adapter_.isSurfaceActive()};MDCRippleFoundation.prototype.animateActivation_=function(){var e=this||t;var n=MDCRippleFoundation.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END;var o=MDCRippleFoundation.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION;var u=MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="";var d="";if(!(this||t).adapter_.isUnbounded()){var l=this.getFgTranslationCoordinates_(),p=l.startPoint,f=l.endPoint;c=p.x+"px, "+p.y+"px";d=f.x+"px, "+f.y+"px"}(this||t).adapter_.updateCssVariable(i,c);(this||t).adapter_.updateCssVariable(r,d);clearTimeout((this||t).activationTimer_);clearTimeout((this||t).fgDeactivationRemovalTimer_);this.rmBoundedActivationClasses_();(this||t).adapter_.removeClass(a);(this||t).adapter_.computeBoundingRect();(this||t).adapter_.addClass(s);(this||t).activationTimer_=setTimeout((function(){return e.activationTimerCallback_()}),u)};MDCRippleFoundation.prototype.getFgTranslationCoordinates_=function(){var e=(this||t).activationState_,n=e.activationEvent,i=e.wasActivatedByPointer;var r;r=i?u.getNormalizedEventCoords(n,(this||t).adapter_.getWindowPageOffset(),(this||t).adapter_.computeBoundingRect()):{x:(this||t).frame_.width/2,y:(this||t).frame_.height/2};r={x:r.x-(this||t).initialSize_/2,y:r.y-(this||t).initialSize_/2};var o={x:(this||t).frame_.width/2-(this||t).initialSize_/2,y:(this||t).frame_.height/2-(this||t).initialSize_/2};return{startPoint:r,endPoint:o}};MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_=function(){var e=this||t;var n=MDCRippleFoundation.cssClasses.FG_DEACTIVATION;var i=(this||t).activationState_,r=i.hasDeactivationUXRun,o=i.isActivated;var a=r||!o;if(a&&(this||t).activationAnimationHasEnded_){this.rmBoundedActivationClasses_();(this||t).adapter_.addClass(n);(this||t).fgDeactivationRemovalTimer_=setTimeout((function(){e.adapter_.removeClass(n)}),s.numbers.FG_DEACTIVATION_MS)}};MDCRippleFoundation.prototype.rmBoundedActivationClasses_=function(){var e=MDCRippleFoundation.cssClasses.FG_ACTIVATION;(this||t).adapter_.removeClass(e);(this||t).activationAnimationHasEnded_=false;(this||t).adapter_.computeBoundingRect()};MDCRippleFoundation.prototype.resetActivationState_=function(){var e=this||t;(this||t).previousActivationEvent_=(this||t).activationState_.activationEvent;(this||t).activationState_=this.defaultActivationState_();setTimeout((function(){return e.previousActivationEvent_=void 0}),MDCRippleFoundation.numbers.TAP_DELAY_MS)};MDCRippleFoundation.prototype.deactivate_=function(){var e=this||t;var n=(this||t).activationState_;if(n.isActivated){var i=o({},n);if(n.isProgrammatic){requestAnimationFrame((function(){return e.animateDeactivation_(i)}));this.resetActivationState_()}else{this.deregisterDeactivationHandlers_();requestAnimationFrame((function(){e.activationState_.hasDeactivationUXRun=true;e.animateDeactivation_(i);e.resetActivationState_()}))}}};MDCRippleFoundation.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()};MDCRippleFoundation.prototype.layoutInternal_=function(){var e=this||t;(this||t).frame_=(this||t).adapter_.computeBoundingRect();var n=Math.max((this||t).frame_.height,(this||t).frame_.width);var i=function getBoundedRadius(){var t=Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2));return t+MDCRippleFoundation.numbers.PADDING};(this||t).maxRadius_=(this||t).adapter_.isUnbounded()?n:i();var r=Math.floor(n*MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);(this||t).adapter_.isUnbounded()&&r%2!==0?(this||t).initialSize_=r-1:(this||t).initialSize_=r;(this||t).fgScale_=""+(this||t).maxRadius_/(this||t).initialSize_;this.updateLayoutCssVars_()};MDCRippleFoundation.prototype.updateLayoutCssVars_=function(){var e=MDCRippleFoundation.strings,n=e.VAR_FG_SIZE,i=e.VAR_LEFT,r=e.VAR_TOP,o=e.VAR_FG_SCALE;(this||t).adapter_.updateCssVariable(n,(this||t).initialSize_+"px");(this||t).adapter_.updateCssVariable(o,(this||t).fgScale_);if((this||t).adapter_.isUnbounded()){(this||t).unboundedCoords_={left:Math.round((this||t).frame_.width/2-(this||t).initialSize_/2),top:Math.round((this||t).frame_.height/2-(this||t).initialSize_/2)};(this||t).adapter_.updateCssVariable(i,(this||t).unboundedCoords_.left+"px");(this||t).adapter_.updateCssVariable(r,(this||t).unboundedCoords_.top+"px")}};return MDCRippleFoundation}(a.MDCFoundation);n.MDCRippleFoundation=p;n.default=p},"./packages/mdc-ripple/util.ts":function(t,e,n){Object.defineProperty(e,"__esModule",{value:true});var i;function detectEdgePseudoVarBug(t){var e=t.document;var n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug";e.head.appendChild(n);var i=t.getComputedStyle(n);var r=null!==i&&"solid"===i.borderTopStyle;n.parentNode&&n.parentNode.removeChild(n);return r}function supportsCssVariables(t,e){void 0===e&&(e=false);var n=t.CSS;var r=i;if("boolean"===typeof i&&!e)return i;var o=n&&"function"===typeof n.supports;if(!o)return false;var a=n.supports("--css-vars","yes");var s=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");r=!(!a&&!s)&&!detectEdgePseudoVarBug(t);e||(i=r);return r}e.supportsCssVariables=supportsCssVariables;function getNormalizedEventCoords(t,e,n){if(!t)return{x:0,y:0};var i=e.x,r=e.y;var o=i+n.left;var a=r+n.top;var s;var u;if("touchstart"===t.type){var c=t;s=c.changedTouches[0].pageX-o;u=c.changedTouches[0].pageY-a}else{var d=t;s=d.pageX-o;u=d.pageY-a}return{x:s,y:u}}e.getNormalizedEventCoords=getNormalizedEventCoords},"./packages/mdc-textfield/character-counter/component.ts":function(e,n,i){
/**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();Object.defineProperty(n,"__esModule",{value:true});var o=i("./packages/mdc-base/component.ts");var a=i("./packages/mdc-textfield/character-counter/foundation.ts");var s=function(e){r(MDCTextFieldCharacterCounter,e);function MDCTextFieldCharacterCounter(){return null!==e&&e.apply(this||t,arguments)||this||t}MDCTextFieldCharacterCounter.attachTo=function(t){return new MDCTextFieldCharacterCounter(t)};Object.defineProperty(MDCTextFieldCharacterCounter.prototype,"foundation",{get:function get(){return(this||t).foundation_},enumerable:true,configurable:true});MDCTextFieldCharacterCounter.prototype.getDefaultFoundation=function(){var e=this||t;var n={setContent:function setContent(t){e.root_.textContent=t}};return new a.MDCTextFieldCharacterCounterFoundation(n)};return MDCTextFieldCharacterCounter}(o.MDCComponent);n.MDCTextFieldCharacterCounter=s},"./packages/mdc-textfield/character-counter/constants.ts":function(t,e,n){
/**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});var i={ROOT:"mdc-text-field-character-counter"};e.cssClasses=i;var r={ROOT_SELECTOR:"."+i.ROOT};e.strings=r},"./packages/mdc-textfield/character-counter/foundation.ts":function(e,n,i){
/**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__assign||function(){o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};return o.apply(this||t,arguments)};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/foundation.ts");var s=i("./packages/mdc-textfield/character-counter/constants.ts");var u=function(e){r(MDCTextFieldCharacterCounterFoundation,e);function MDCTextFieldCharacterCounterFoundation(n){return e.call(this||t,o({},MDCTextFieldCharacterCounterFoundation.defaultAdapter,n))||this||t}Object.defineProperty(MDCTextFieldCharacterCounterFoundation,"cssClasses",{get:function get(){return s.cssClasses},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldCharacterCounterFoundation,"strings",{get:function get(){return s.strings},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldCharacterCounterFoundation,"defaultAdapter",{get:function get(){return{setContent:function setContent(){}}},enumerable:true,configurable:true});MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue=function(e,n){e=Math.min(e,n);(this||t).adapter_.setContent(e+" / "+n)};return MDCTextFieldCharacterCounterFoundation}(a.MDCFoundation);n.MDCTextFieldCharacterCounterFoundation=u;n.default=u},"./packages/mdc-textfield/character-counter/index.ts":function(t,e,n){
/**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
function __export(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:true});__export(n("./packages/mdc-textfield/character-counter/component.ts"));__export(n("./packages/mdc-textfield/character-counter/foundation.ts"));var i=n("./packages/mdc-textfield/character-counter/constants.ts");e.characterCountCssClasses=i.cssClasses;e.characterCountStrings=i.strings},"./packages/mdc-textfield/component.ts":function(e,n,i){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__assign||function(){o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};return o.apply(this||t,arguments)};var a=(this||t)&&(this||t).__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e["default"]=t;return e};Object.defineProperty(n,"__esModule",{value:true});var s=i("./packages/mdc-base/component.ts");var u=i("./packages/mdc-dom/events.ts");var c=a(i("./packages/mdc-dom/ponyfill.ts"));var d=i("./packages/mdc-floating-label/component.ts");var l=i("./packages/mdc-line-ripple/component.ts");var p=i("./packages/mdc-notched-outline/component.ts");var f=i("./packages/mdc-ripple/component.ts");var _=i("./packages/mdc-ripple/foundation.ts");var h=i("./packages/mdc-textfield/character-counter/component.ts");var C=i("./packages/mdc-textfield/character-counter/foundation.ts");var v=i("./packages/mdc-textfield/constants.ts");var g=i("./packages/mdc-textfield/foundation.ts");var m=i("./packages/mdc-textfield/helper-text/component.ts");var y=i("./packages/mdc-textfield/helper-text/foundation.ts");var b=i("./packages/mdc-textfield/icon/component.ts");var F=function(e){r(MDCTextField,e);function MDCTextField(){return null!==e&&e.apply(this||t,arguments)||this||t}MDCTextField.attachTo=function(t){return new MDCTextField(t)};MDCTextField.prototype.initialize=function(e,n,i,r,o,a,s){void 0===e&&(e=function rippleFactory(t,e){return new f.MDCRipple(t,e)});void 0===n&&(n=function lineRippleFactory(t){return new l.MDCLineRipple(t)});void 0===i&&(i=function helperTextFactory(t){return new m.MDCTextFieldHelperText(t)});void 0===r&&(r=function characterCounterFactory(t){return new h.MDCTextFieldCharacterCounter(t)});void 0===o&&(o=function iconFactory(t){return new b.MDCTextFieldIcon(t)});void 0===a&&(a=function labelFactory(t){return new d.MDCFloatingLabel(t)});void 0===s&&(s=function outlineFactory(t){return new p.MDCNotchedOutline(t)});(this||t).input_=(this||t).root_.querySelector(v.strings.INPUT_SELECTOR);var u=(this||t).root_.querySelector(v.strings.LABEL_SELECTOR);(this||t).label_=u?a(u):null;var c=(this||t).root_.querySelector(v.strings.LINE_RIPPLE_SELECTOR);(this||t).lineRipple_=c?n(c):null;var _=(this||t).root_.querySelector(v.strings.OUTLINE_SELECTOR);(this||t).outline_=_?s(_):null;var g=y.MDCTextFieldHelperTextFoundation.strings;var F=(this||t).root_.nextElementSibling;var D=F&&F.classList.contains(v.cssClasses.HELPER_LINE);var T=D&&F&&F.querySelector(g.ROOT_SELECTOR);(this||t).helperText_=T?i(T):null;var M=C.MDCTextFieldCharacterCounterFoundation.strings;var x=(this||t).root_.querySelector(M.ROOT_SELECTOR);!x&&D&&F&&(x=F.querySelector(M.ROOT_SELECTOR));(this||t).characterCounter_=x?r(x):null;(this||t).leadingIcon_=null;(this||t).trailingIcon_=null;var O=(this||t).root_.querySelectorAll(v.strings.ICON_SELECTOR);if(O.length>0)if(O.length>1){(this||t).leadingIcon_=o(O[0]);(this||t).trailingIcon_=o(O[1])}else(this||t).root_.classList.contains(v.cssClasses.WITH_LEADING_ICON)?(this||t).leadingIcon_=o(O[0]):(this||t).trailingIcon_=o(O[0]);(this||t).ripple=this.createRipple_(e)};MDCTextField.prototype.destroy=function(){(this||t).ripple&&(this||t).ripple.destroy();(this||t).lineRipple_&&(this||t).lineRipple_.destroy();(this||t).helperText_&&(this||t).helperText_.destroy();(this||t).characterCounter_&&(this||t).characterCounter_.destroy();(this||t).leadingIcon_&&(this||t).leadingIcon_.destroy();(this||t).trailingIcon_&&(this||t).trailingIcon_.destroy();(this||t).label_&&(this||t).label_.destroy();(this||t).outline_&&(this||t).outline_.destroy();e.prototype.destroy.call(this||t)};MDCTextField.prototype.initialSyncWithDOM=function(){(this||t).disabled=(this||t).input_.disabled};Object.defineProperty(MDCTextField.prototype,"value",{get:function get(){return(this||t).foundation_.getValue()},
/**
             * @param value The value to set on the input.
             */
set:function set(e){(this||t).foundation_.setValue(e)},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"disabled",{get:function get(){return(this||t).foundation_.isDisabled()},
/**
             * @param disabled Sets the Text Field disabled or enabled.
             */
set:function set(e){(this||t).foundation_.setDisabled(e)},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"valid",{get:function get(){return(this||t).foundation_.isValid()},
/**
             * @param valid Sets the Text Field valid or invalid.
             */
set:function set(e){(this||t).foundation_.setValid(e)},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"required",{get:function get(){return(this||t).input_.required},
/**
             * @param required Sets the Text Field to required.
             */
set:function set(e){(this||t).input_.required=e},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"pattern",{get:function get(){return(this||t).input_.pattern},
/**
             * @param pattern Sets the input element's validation pattern.
             */
set:function set(e){(this||t).input_.pattern=e},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"minLength",{get:function get(){return(this||t).input_.minLength},
/**
             * @param minLength Sets the input element's minLength.
             */
set:function set(e){(this||t).input_.minLength=e},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"maxLength",{get:function get(){return(this||t).input_.maxLength},
/**
             * @param maxLength Sets the input element's maxLength.
             */
set:function set(e){e<0?(this||t).input_.removeAttribute("maxLength"):(this||t).input_.maxLength=e},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"min",{get:function get(){return(this||t).input_.min},
/**
             * @param min Sets the input element's min.
             */
set:function set(e){(this||t).input_.min=e},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"max",{get:function get(){return(this||t).input_.max},
/**
             * @param max Sets the input element's max.
             */
set:function set(e){(this||t).input_.max=e},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"step",{get:function get(){return(this||t).input_.step},
/**
             * @param step Sets the input element's step.
             */
set:function set(e){(this||t).input_.step=e},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"helperTextContent",{set:function set(e){(this||t).foundation_.setHelperTextContent(e)},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"leadingIconAriaLabel",{set:function set(e){(this||t).foundation_.setLeadingIconAriaLabel(e)},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"leadingIconContent",{set:function set(e){(this||t).foundation_.setLeadingIconContent(e)},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"trailingIconAriaLabel",{set:function set(e){(this||t).foundation_.setTrailingIconAriaLabel(e)},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"trailingIconContent",{set:function set(e){(this||t).foundation_.setTrailingIconContent(e)},enumerable:true,configurable:true});Object.defineProperty(MDCTextField.prototype,"useNativeValidation",{
/**
             * Enables or disables the use of native validation. Use this for custom validation.
             * @param useNativeValidation Set this to false to ignore native input validation.
             */
set:function set(e){(this||t).foundation_.setUseNativeValidation(e)},enumerable:true,configurable:true});MDCTextField.prototype.focus=function(){(this||t).input_.focus()};MDCTextField.prototype.layout=function(){var e=(this||t).foundation_.shouldFloat;(this||t).foundation_.notchOutline(e)};MDCTextField.prototype.getDefaultFoundation=function(){var t=o({},this.getRootAdapterMethods_(),this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_());return new g.MDCTextFieldFoundation(t,this.getFoundationMap_())};MDCTextField.prototype.getRootAdapterMethods_=function(){var e=this||t;return{addClass:function addClass(t){return e.root_.classList.add(t)},removeClass:function removeClass(t){return e.root_.classList.remove(t)},hasClass:function hasClass(t){return e.root_.classList.contains(t)},registerTextFieldInteractionHandler:function registerTextFieldInteractionHandler(t,n){return e.listen(t,n)},deregisterTextFieldInteractionHandler:function deregisterTextFieldInteractionHandler(t,n){return e.unlisten(t,n)},registerValidationAttributeChangeHandler:function registerValidationAttributeChangeHandler(t){var n=function getAttributesList(t){return t.map((function(t){return t.attributeName})).filter((function(t){return t}))};var i=new MutationObserver((function(e){return t(n(e))}));var r={attributes:true};i.observe(e.input_,r);return i},deregisterValidationAttributeChangeHandler:function deregisterValidationAttributeChangeHandler(t){return t.disconnect()}}};MDCTextField.prototype.getInputAdapterMethods_=function(){var e=this||t;return{getNativeInput:function getNativeInput(){return e.input_},isFocused:function isFocused(){return document.activeElement===e.input_},registerInputInteractionHandler:function registerInputInteractionHandler(t,n){return e.input_.addEventListener(t,n,u.applyPassive())},deregisterInputInteractionHandler:function deregisterInputInteractionHandler(t,n){return e.input_.removeEventListener(t,n,u.applyPassive())}}};MDCTextField.prototype.getLabelAdapterMethods_=function(){var e=this||t;return{floatLabel:function floatLabel(t){return e.label_&&e.label_.float(t)},getLabelWidth:function getLabelWidth(){return e.label_?e.label_.getWidth():0},hasLabel:function hasLabel(){return Boolean(e.label_)},shakeLabel:function shakeLabel(t){return e.label_&&e.label_.shake(t)}}};MDCTextField.prototype.getLineRippleAdapterMethods_=function(){var e=this||t;return{activateLineRipple:function activateLineRipple(){e.lineRipple_&&e.lineRipple_.activate()},deactivateLineRipple:function deactivateLineRipple(){e.lineRipple_&&e.lineRipple_.deactivate()},setLineRippleTransformOrigin:function setLineRippleTransformOrigin(t){e.lineRipple_&&e.lineRipple_.setRippleCenter(t)}}};MDCTextField.prototype.getOutlineAdapterMethods_=function(){var e=this||t;return{closeOutline:function closeOutline(){return e.outline_&&e.outline_.closeNotch()},hasOutline:function hasOutline(){return Boolean(e.outline_)},notchOutline:function notchOutline(t){return e.outline_&&e.outline_.notch(t)}}};MDCTextField.prototype.getFoundationMap_=function(){return{characterCounter:(this||t).characterCounter_?(this||t).characterCounter_.foundation:void 0,helperText:(this||t).helperText_?(this||t).helperText_.foundation:void 0,leadingIcon:(this||t).leadingIcon_?(this||t).leadingIcon_.foundation:void 0,trailingIcon:(this||t).trailingIcon_?(this||t).trailingIcon_.foundation:void 0}};MDCTextField.prototype.createRipple_=function(e){var n=this||t;var i=(this||t).root_.classList.contains(v.cssClasses.TEXTAREA);var r=(this||t).root_.classList.contains(v.cssClasses.OUTLINED);if(i||r)return null;var a=o({},f.MDCRipple.createAdapter(this||t),{isSurfaceActive:function isSurfaceActive(){return c.matches(n.input_,":active")},registerInteractionHandler:function registerInteractionHandler(t,e){return n.input_.addEventListener(t,e,u.applyPassive())},deregisterInteractionHandler:function deregisterInteractionHandler(t,e){return n.input_.removeEventListener(t,e,u.applyPassive())}});return e((this||t).root_,new _.MDCRippleFoundation(a))};return MDCTextField}(s.MDCComponent);n.MDCTextField=F},"./packages/mdc-textfield/constants.ts":function(t,e,n){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});var i={ARIA_CONTROLS:"aria-controls",ICON_SELECTOR:".mdc-text-field__icon",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline"};e.strings=i;var r={DENSE:"mdc-text-field--dense",DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",FULLWIDTH:"mdc-text-field--fullwidth",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"};e.cssClasses=r;var o={DENSE_LABEL_SCALE:.923,LABEL_SCALE:.75};e.numbers=o;var a=["pattern","min","max","required","step","minlength","maxlength"];e.VALIDATION_ATTR_WHITELIST=a;var s=["color","date","datetime-local","month","range","time","week"];e.ALWAYS_FLOAT_TYPES=s},"./packages/mdc-textfield/foundation.ts":function(e,n,i){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__assign||function(){o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};return o.apply(this||t,arguments)};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/foundation.ts");var s=i("./packages/mdc-textfield/constants.ts");var u=["mousedown","touchstart"];var c=["click","keydown"];var d=function(e){r(MDCTextFieldFoundation,e);
/**
           * @param adapter
           * @param foundationMap Map from subcomponent names to their subfoundations.
           */function MDCTextFieldFoundation(n,i){void 0===i&&(i={});var r=e.call(this||t,o({},MDCTextFieldFoundation.defaultAdapter,n))||this||t;r.isFocused_=false;r.receivedUserInput_=false;r.isValid_=true;r.useNativeValidation_=true;r.helperText_=i.helperText;r.characterCounter_=i.characterCounter;r.leadingIcon_=i.leadingIcon;r.trailingIcon_=i.trailingIcon;r.inputFocusHandler_=function(){return r.activateFocus()};r.inputBlurHandler_=function(){return r.deactivateFocus()};r.inputInputHandler_=function(){return r.handleInput()};r.setPointerXOffset_=function(t){return r.setTransformOrigin(t)};r.textFieldInteractionHandler_=function(){return r.handleTextFieldInteraction()};r.validationAttributeChangeHandler_=function(t){return r.handleValidationAttributeChange(t)};return r}Object.defineProperty(MDCTextFieldFoundation,"cssClasses",{get:function get(){return s.cssClasses},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldFoundation,"strings",{get:function get(){return s.strings},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldFoundation,"numbers",{get:function get(){return s.numbers},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldFoundation.prototype,"shouldAlwaysFloat_",{get:function get(){var t=this.getNativeInput_().type;return s.ALWAYS_FLOAT_TYPES.indexOf(t)>=0},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldFoundation.prototype,"shouldFloat",{get:function get(){return(this||t).shouldAlwaysFloat_||(this||t).isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldFoundation.prototype,"shouldShake",{get:function get(){return!(this||t).isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldFoundation,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},hasClass:function hasClass(){return true},registerTextFieldInteractionHandler:function registerTextFieldInteractionHandler(){},deregisterTextFieldInteractionHandler:function deregisterTextFieldInteractionHandler(){},registerInputInteractionHandler:function registerInputInteractionHandler(){},deregisterInputInteractionHandler:function deregisterInputInteractionHandler(){},registerValidationAttributeChangeHandler:function registerValidationAttributeChangeHandler(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function deregisterValidationAttributeChangeHandler(){},getNativeInput:function getNativeInput(){return null},isFocused:function isFocused(){return false},activateLineRipple:function activateLineRipple(){},deactivateLineRipple:function deactivateLineRipple(){},setLineRippleTransformOrigin:function setLineRippleTransformOrigin(){},shakeLabel:function shakeLabel(){},floatLabel:function floatLabel(){},hasLabel:function hasLabel(){return false},getLabelWidth:function getLabelWidth(){return 0},hasOutline:function hasOutline(){return false},notchOutline:function notchOutline(){},closeOutline:function closeOutline(){}}},enumerable:true,configurable:true});MDCTextFieldFoundation.prototype.init=function(){var e=this||t;if((this||t).adapter_.isFocused())this.inputFocusHandler_();else if((this||t).adapter_.hasLabel()&&(this||t).shouldFloat){this.notchOutline(true);(this||t).adapter_.floatLabel(true)}(this||t).adapter_.registerInputInteractionHandler("focus",(this||t).inputFocusHandler_);(this||t).adapter_.registerInputInteractionHandler("blur",(this||t).inputBlurHandler_);(this||t).adapter_.registerInputInteractionHandler("input",(this||t).inputInputHandler_);u.forEach((function(t){e.adapter_.registerInputInteractionHandler(t,e.setPointerXOffset_)}));c.forEach((function(t){e.adapter_.registerTextFieldInteractionHandler(t,e.textFieldInteractionHandler_)}));(this||t).validationObserver_=(this||t).adapter_.registerValidationAttributeChangeHandler((this||t).validationAttributeChangeHandler_);this.setCharacterCounter_(this.getValue().length)};MDCTextFieldFoundation.prototype.destroy=function(){var e=this||t;(this||t).adapter_.deregisterInputInteractionHandler("focus",(this||t).inputFocusHandler_);(this||t).adapter_.deregisterInputInteractionHandler("blur",(this||t).inputBlurHandler_);(this||t).adapter_.deregisterInputInteractionHandler("input",(this||t).inputInputHandler_);u.forEach((function(t){e.adapter_.deregisterInputInteractionHandler(t,e.setPointerXOffset_)}));c.forEach((function(t){e.adapter_.deregisterTextFieldInteractionHandler(t,e.textFieldInteractionHandler_)}));(this||t).adapter_.deregisterValidationAttributeChangeHandler((this||t).validationObserver_)};MDCTextFieldFoundation.prototype.handleTextFieldInteraction=function(){var e=(this||t).adapter_.getNativeInput();e&&e.disabled||((this||t).receivedUserInput_=true)};MDCTextFieldFoundation.prototype.handleValidationAttributeChange=function(e){var n=this||t;e.some((function(t){if(s.VALIDATION_ATTR_WHITELIST.indexOf(t)>-1){n.styleValidity_(true);return true}return false}));e.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)};MDCTextFieldFoundation.prototype.notchOutline=function(e){if((this||t).adapter_.hasOutline())if(e){var n=(this||t).adapter_.hasClass(s.cssClasses.DENSE);var i=n?s.numbers.DENSE_LABEL_SCALE:s.numbers.LABEL_SCALE;var r=(this||t).adapter_.getLabelWidth()*i;(this||t).adapter_.notchOutline(r)}else(this||t).adapter_.closeOutline()};MDCTextFieldFoundation.prototype.activateFocus=function(){(this||t).isFocused_=true;this.styleFocused_((this||t).isFocused_);(this||t).adapter_.activateLineRipple();if((this||t).adapter_.hasLabel()){this.notchOutline((this||t).shouldFloat);(this||t).adapter_.floatLabel((this||t).shouldFloat);(this||t).adapter_.shakeLabel((this||t).shouldShake)}(this||t).helperText_&&(this||t).helperText_.showToScreenReader()};MDCTextFieldFoundation.prototype.setTransformOrigin=function(e){var n=e.touches;var i=n?n[0]:e;var r=i.target.getBoundingClientRect();var o=i.clientX-r.left;(this||t).adapter_.setLineRippleTransformOrigin(o)};MDCTextFieldFoundation.prototype.handleInput=function(){this.autoCompleteFocus();this.setCharacterCounter_(this.getValue().length)};MDCTextFieldFoundation.prototype.autoCompleteFocus=function(){(this||t).receivedUserInput_||this.activateFocus()};MDCTextFieldFoundation.prototype.deactivateFocus=function(){(this||t).isFocused_=false;(this||t).adapter_.deactivateLineRipple();var e=this.isValid();this.styleValidity_(e);this.styleFocused_((this||t).isFocused_);if((this||t).adapter_.hasLabel()){this.notchOutline((this||t).shouldFloat);(this||t).adapter_.floatLabel((this||t).shouldFloat);(this||t).adapter_.shakeLabel((this||t).shouldShake)}(this||t).shouldFloat||((this||t).receivedUserInput_=false)};MDCTextFieldFoundation.prototype.getValue=function(){return this.getNativeInput_().value};
/**
           * @param value The value to set on the input Element.
           */MDCTextFieldFoundation.prototype.setValue=function(e){this.getValue()!==e&&(this.getNativeInput_().value=e);this.setCharacterCounter_(e.length);var n=this.isValid();this.styleValidity_(n);if((this||t).adapter_.hasLabel()){this.notchOutline((this||t).shouldFloat);(this||t).adapter_.floatLabel((this||t).shouldFloat);(this||t).adapter_.shakeLabel((this||t).shouldShake)}};MDCTextFieldFoundation.prototype.isValid=function(){return(this||t).useNativeValidation_?this.isNativeInputValid_():(this||t).isValid_};
/**
           * @param isValid Sets the custom validity state of the Text Field.
           */MDCTextFieldFoundation.prototype.setValid=function(e){(this||t).isValid_=e;this.styleValidity_(e);var n=!e&&!(this||t).isFocused_&&!!this.getValue();(this||t).adapter_.hasLabel()&&(this||t).adapter_.shakeLabel(n)};
/**
           * Enables or disables the use of native validation. Use this for custom validation.
           * @param useNativeValidation Set this to false to ignore native input validation.
           */MDCTextFieldFoundation.prototype.setUseNativeValidation=function(e){(this||t).useNativeValidation_=e};MDCTextFieldFoundation.prototype.isDisabled=function(){return this.getNativeInput_().disabled};
/**
           * @param disabled Sets the text-field disabled or enabled.
           */MDCTextFieldFoundation.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t;this.styleDisabled_(t)};
/**
           * @param content Sets the content of the helper text.
           */MDCTextFieldFoundation.prototype.setHelperTextContent=function(e){(this||t).helperText_&&(this||t).helperText_.setContent(e)};MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel=function(e){(this||t).leadingIcon_&&(this||t).leadingIcon_.setAriaLabel(e)};MDCTextFieldFoundation.prototype.setLeadingIconContent=function(e){(this||t).leadingIcon_&&(this||t).leadingIcon_.setContent(e)};MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel=function(e){(this||t).trailingIcon_&&(this||t).trailingIcon_.setAriaLabel(e)};MDCTextFieldFoundation.prototype.setTrailingIconContent=function(e){(this||t).trailingIcon_&&(this||t).trailingIcon_.setContent(e)};MDCTextFieldFoundation.prototype.setCharacterCounter_=function(e){if((this||t).characterCounter_){var n=this.getNativeInput_().maxLength;if(-1===n)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");(this||t).characterCounter_.setCounterValue(e,n)}};MDCTextFieldFoundation.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||false};MDCTextFieldFoundation.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid};MDCTextFieldFoundation.prototype.styleValidity_=function(e){var n=MDCTextFieldFoundation.cssClasses.INVALID;e?(this||t).adapter_.removeClass(n):(this||t).adapter_.addClass(n);(this||t).helperText_&&(this||t).helperText_.setValidity(e)};MDCTextFieldFoundation.prototype.styleFocused_=function(e){var n=MDCTextFieldFoundation.cssClasses.FOCUSED;e?(this||t).adapter_.addClass(n):(this||t).adapter_.removeClass(n)};MDCTextFieldFoundation.prototype.styleDisabled_=function(e){var n=MDCTextFieldFoundation.cssClasses,i=n.DISABLED,r=n.INVALID;if(e){(this||t).adapter_.addClass(i);(this||t).adapter_.removeClass(r)}else(this||t).adapter_.removeClass(i);(this||t).leadingIcon_&&(this||t).leadingIcon_.setDisabled(e);(this||t).trailingIcon_&&(this||t).trailingIcon_.setDisabled(e)};MDCTextFieldFoundation.prototype.getNativeInput_=function(){var e=(this||t).adapter_?(this||t).adapter_.getNativeInput():null;return e||{disabled:false,maxLength:-1,type:"input",validity:{badInput:false,valid:true},value:""}};return MDCTextFieldFoundation}(a.MDCFoundation);n.MDCTextFieldFoundation=d;n.default=d},"./packages/mdc-textfield/helper-text/component.ts":function(e,n,i){
/**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();Object.defineProperty(n,"__esModule",{value:true});var o=i("./packages/mdc-base/component.ts");var a=i("./packages/mdc-textfield/helper-text/foundation.ts");var s=function(e){r(MDCTextFieldHelperText,e);function MDCTextFieldHelperText(){return null!==e&&e.apply(this||t,arguments)||this||t}MDCTextFieldHelperText.attachTo=function(t){return new MDCTextFieldHelperText(t)};Object.defineProperty(MDCTextFieldHelperText.prototype,"foundation",{get:function get(){return(this||t).foundation_},enumerable:true,configurable:true});MDCTextFieldHelperText.prototype.getDefaultFoundation=function(){var e=this||t;var n={addClass:function addClass(t){return e.root_.classList.add(t)},removeClass:function removeClass(t){return e.root_.classList.remove(t)},hasClass:function hasClass(t){return e.root_.classList.contains(t)},setAttr:function setAttr(t,n){return e.root_.setAttribute(t,n)},removeAttr:function removeAttr(t){return e.root_.removeAttribute(t)},setContent:function setContent(t){e.root_.textContent=t}};return new a.MDCTextFieldHelperTextFoundation(n)};return MDCTextFieldHelperText}(o.MDCComponent);n.MDCTextFieldHelperText=s},"./packages/mdc-textfield/helper-text/constants.ts":function(t,e,n){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});var i={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"};e.cssClasses=i;var r={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+i.ROOT};e.strings=r},"./packages/mdc-textfield/helper-text/foundation.ts":function(e,n,i){
/**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__assign||function(){o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};return o.apply(this||t,arguments)};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/foundation.ts");var s=i("./packages/mdc-textfield/helper-text/constants.ts");var u=function(e){r(MDCTextFieldHelperTextFoundation,e);function MDCTextFieldHelperTextFoundation(n){return e.call(this||t,o({},MDCTextFieldHelperTextFoundation.defaultAdapter,n))||this||t}Object.defineProperty(MDCTextFieldHelperTextFoundation,"cssClasses",{get:function get(){return s.cssClasses},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldHelperTextFoundation,"strings",{get:function get(){return s.strings},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldHelperTextFoundation,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},hasClass:function hasClass(){return false},setAttr:function setAttr(){},removeAttr:function removeAttr(){},setContent:function setContent(){}}},enumerable:true,configurable:true});MDCTextFieldHelperTextFoundation.prototype.setContent=function(e){(this||t).adapter_.setContent(e)};
/**
           * @param isPersistent Sets the persistency of the helper text.
           */MDCTextFieldHelperTextFoundation.prototype.setPersistent=function(e){e?(this||t).adapter_.addClass(s.cssClasses.HELPER_TEXT_PERSISTENT):(this||t).adapter_.removeClass(s.cssClasses.HELPER_TEXT_PERSISTENT)};
/**
           * @param isValidation True to make the helper text act as an error validation message.
           */MDCTextFieldHelperTextFoundation.prototype.setValidation=function(e){e?(this||t).adapter_.addClass(s.cssClasses.HELPER_TEXT_VALIDATION_MSG):(this||t).adapter_.removeClass(s.cssClasses.HELPER_TEXT_VALIDATION_MSG)};MDCTextFieldHelperTextFoundation.prototype.showToScreenReader=function(){(this||t).adapter_.removeAttr(s.strings.ARIA_HIDDEN)};MDCTextFieldHelperTextFoundation.prototype.setValidity=function(e){var n=(this||t).adapter_.hasClass(s.cssClasses.HELPER_TEXT_PERSISTENT);var i=(this||t).adapter_.hasClass(s.cssClasses.HELPER_TEXT_VALIDATION_MSG);var r=i&&!e;r?(this||t).adapter_.setAttr(s.strings.ROLE,"alert"):(this||t).adapter_.removeAttr(s.strings.ROLE);n||r||this.hide_()};MDCTextFieldHelperTextFoundation.prototype.hide_=function(){(this||t).adapter_.setAttr(s.strings.ARIA_HIDDEN,"true")};return MDCTextFieldHelperTextFoundation}(a.MDCFoundation);n.MDCTextFieldHelperTextFoundation=u;n.default=u},"./packages/mdc-textfield/helper-text/index.ts":function(t,e,n){
/**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
function __export(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:true});__export(n("./packages/mdc-textfield/helper-text/component.ts"));__export(n("./packages/mdc-textfield/helper-text/foundation.ts"));var i=n("./packages/mdc-textfield/helper-text/constants.ts");e.helperTextCssClasses=i.cssClasses;e.helperTextStrings=i.strings},"./packages/mdc-textfield/icon/component.ts":function(e,n,i){
/**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();Object.defineProperty(n,"__esModule",{value:true});var o=i("./packages/mdc-base/component.ts");var a=i("./packages/mdc-textfield/icon/foundation.ts");var s=function(e){r(MDCTextFieldIcon,e);function MDCTextFieldIcon(){return null!==e&&e.apply(this||t,arguments)||this||t}MDCTextFieldIcon.attachTo=function(t){return new MDCTextFieldIcon(t)};Object.defineProperty(MDCTextFieldIcon.prototype,"foundation",{get:function get(){return(this||t).foundation_},enumerable:true,configurable:true});MDCTextFieldIcon.prototype.getDefaultFoundation=function(){var e=this||t;var n={getAttr:function getAttr(t){return e.root_.getAttribute(t)},setAttr:function setAttr(t,n){return e.root_.setAttribute(t,n)},removeAttr:function removeAttr(t){return e.root_.removeAttribute(t)},setContent:function setContent(t){e.root_.textContent=t},registerInteractionHandler:function registerInteractionHandler(t,n){return e.listen(t,n)},deregisterInteractionHandler:function deregisterInteractionHandler(t,n){return e.unlisten(t,n)},notifyIconAction:function notifyIconAction(){return e.emit(a.MDCTextFieldIconFoundation.strings.ICON_EVENT,{},true)}};return new a.MDCTextFieldIconFoundation(n)};return MDCTextFieldIcon}(o.MDCComponent);n.MDCTextFieldIcon=s},"./packages/mdc-textfield/icon/constants.ts":function(t,e,n){
/**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
Object.defineProperty(e,"__esModule",{value:true});var i={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"};e.strings=i;var r={ROOT:"mdc-text-field__icon"};e.cssClasses=r},"./packages/mdc-textfield/icon/foundation.ts":function(e,n,i){
/**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
var r=(this||t)&&(this||t).__extends||function(){var e=function extendStatics(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return e(t,n)};return function(n,i){e(n,i);function __(){(this||t).constructor=n}n.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}();var o=(this||t)&&(this||t).__assign||function(){o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};return o.apply(this||t,arguments)};Object.defineProperty(n,"__esModule",{value:true});var a=i("./packages/mdc-base/foundation.ts");var s=i("./packages/mdc-textfield/icon/constants.ts");var u=["click","keydown"];var c=function(e){r(MDCTextFieldIconFoundation,e);function MDCTextFieldIconFoundation(n){var i=e.call(this||t,o({},MDCTextFieldIconFoundation.defaultAdapter,n))||this||t;i.savedTabIndex_=null;i.interactionHandler_=function(t){return i.handleInteraction(t)};return i}Object.defineProperty(MDCTextFieldIconFoundation,"strings",{get:function get(){return s.strings},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldIconFoundation,"cssClasses",{get:function get(){return s.cssClasses},enumerable:true,configurable:true});Object.defineProperty(MDCTextFieldIconFoundation,"defaultAdapter",{get:function get(){return{getAttr:function getAttr(){return null},setAttr:function setAttr(){},removeAttr:function removeAttr(){},setContent:function setContent(){},registerInteractionHandler:function registerInteractionHandler(){},deregisterInteractionHandler:function deregisterInteractionHandler(){},notifyIconAction:function notifyIconAction(){}}},enumerable:true,configurable:true});MDCTextFieldIconFoundation.prototype.init=function(){var e=this||t;(this||t).savedTabIndex_=(this||t).adapter_.getAttr("tabindex");u.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.interactionHandler_)}))};MDCTextFieldIconFoundation.prototype.destroy=function(){var e=this||t;u.forEach((function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionHandler_)}))};MDCTextFieldIconFoundation.prototype.setDisabled=function(e){if((this||t).savedTabIndex_)if(e){(this||t).adapter_.setAttr("tabindex","-1");(this||t).adapter_.removeAttr("role")}else{(this||t).adapter_.setAttr("tabindex",(this||t).savedTabIndex_);(this||t).adapter_.setAttr("role",s.strings.ICON_ROLE)}};MDCTextFieldIconFoundation.prototype.setAriaLabel=function(e){(this||t).adapter_.setAttr("aria-label",e)};MDCTextFieldIconFoundation.prototype.setContent=function(e){(this||t).adapter_.setContent(e)};MDCTextFieldIconFoundation.prototype.handleInteraction=function(e){var n="Enter"===e.key||13===e.keyCode;("click"===e.type||n)&&(this||t).adapter_.notifyIconAction()};return MDCTextFieldIconFoundation}(a.MDCFoundation);n.MDCTextFieldIconFoundation=c;n.default=c},"./packages/mdc-textfield/icon/index.ts":function(t,e,n){
/**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
function __export(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:true});__export(n("./packages/mdc-textfield/icon/component.ts"));__export(n("./packages/mdc-textfield/icon/foundation.ts"));var i=n("./packages/mdc-textfield/icon/constants.ts");e.iconCssClasses=i.cssClasses;e.iconStrings=i.strings},"./packages/mdc-textfield/index.ts":function(t,e,n){
/**
         * @license
         * Copyright 2019 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */
function __export(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:true});__export(n("./packages/mdc-textfield/component.ts"));__export(n("./packages/mdc-textfield/constants.ts"));__export(n("./packages/mdc-textfield/foundation.ts"));__export(n("./packages/mdc-textfield/character-counter/index.ts"));__export(n("./packages/mdc-textfield/helper-text/index.ts"));__export(n("./packages/mdc-textfield/icon/index.ts"))}})}));var n=e;const i=e.textfield,r=e.__esModule,o=e.MDCComponent,a=e.MDCFoundation,s=e.applyPassive,u=e.closest,c=e.matches,d=e.MDCFloatingLabel,l=e.cssClasses,p=e.MDCFloatingLabelFoundation,f=e.MDCLineRipple,_=e.MDCLineRippleFoundation,h=e.MDCNotchedOutline,C=e.strings,v=e.numbers,g=e.MDCNotchedOutlineFoundation,m=e.MDCRipple,y=e.MDCRippleFoundation,b=e.supportsCssVariables,F=e.getNormalizedEventCoords,D=e.MDCTextFieldCharacterCounter,T=e.MDCTextFieldCharacterCounterFoundation,M=e.characterCountCssClasses,x=e.characterCountStrings,O=e.MDCTextField,I=e.VALIDATION_ATTR_WHITELIST,A=e.ALWAYS_FLOAT_TYPES,E=e.MDCTextFieldFoundation,L=e.MDCTextFieldHelperText,R=e.MDCTextFieldHelperTextFoundation,P=e.helperTextCssClasses,H=e.helperTextStrings,S=e.MDCTextFieldIcon,N=e.MDCTextFieldIconFoundation,w=e.iconCssClasses,k=e.iconStrings;export default n;export{A as ALWAYS_FLOAT_TYPES,o as MDCComponent,d as MDCFloatingLabel,p as MDCFloatingLabelFoundation,a as MDCFoundation,f as MDCLineRipple,_ as MDCLineRippleFoundation,h as MDCNotchedOutline,g as MDCNotchedOutlineFoundation,m as MDCRipple,y as MDCRippleFoundation,O as MDCTextField,D as MDCTextFieldCharacterCounter,T as MDCTextFieldCharacterCounterFoundation,E as MDCTextFieldFoundation,L as MDCTextFieldHelperText,R as MDCTextFieldHelperTextFoundation,S as MDCTextFieldIcon,N as MDCTextFieldIconFoundation,I as VALIDATION_ATTR_WHITELIST,r as __esModule,s as applyPassive,M as characterCountCssClasses,x as characterCountStrings,u as closest,l as cssClasses,F as getNormalizedEventCoords,P as helperTextCssClasses,H as helperTextStrings,w as iconCssClasses,k as iconStrings,c as matches,v as numbers,C as strings,b as supportsCssVariables,i as textfield};

