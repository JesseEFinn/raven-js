var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define("lib/services/service", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Service = (function () {
        function Service() {
        }
        return Service;
    }());
    exports.Service = Service;
});
define("lib/services/servicable", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Servicable = (function () {
        function Servicable() {
        }
        return Servicable;
    }());
    exports.Servicable = Servicable;
});
define("lib/services/ux/service/elements/base", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseElement = (function () {
        function BaseElement(target, root, provider) {
            this._provider = provider;
            this._root = root;
            var el = (typeof target === 'string') ? this._getEl(target) : target;
            this.delegate = el;
        }
        Object.defineProperty(BaseElement.prototype, "provider", {
            get: function () { return this._provider; },
            set: function (provider) { this._provider = provider; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "delegate", {
            get: function () { return this._delegate; },
            set: function (delegate) { this._delegate = delegate; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "root", {
            get: function () { return this._root; },
            set: function (root) { this._root = root; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "parent", {
            get: function () {
                return this.provider.createFrom(this.delegate.parentElement);
            },
            enumerable: true,
            configurable: true
        });
        BaseElement.prototype.clone = function (isDeep) {
            if (isDeep === void 0) { isDeep = true; }
            return this.provider.createFrom(this.delegate.cloneNode(isDeep));
        };
        BaseElement.prototype.remove = function () { return this.delegate.remove(); };
        Object.defineProperty(BaseElement.prototype, "x", {
            get: function () { return this.delegate.getBoundingClientRect().left; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "y", {
            get: function () { return this.delegate.getBoundingClientRect().top; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "xOffset", {
            get: function () { return this.x - this.parent.x; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "yOffset", {
            get: function () { return this.y - this.parent.y; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "coordinates", {
            get: function () { return [this.x, this.y]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "offsetCoordinates", {
            get: function () { return [this.xOffset, this.yOffset]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "width", {
            get: function () { return this.delegate.getBoundingClientRect().width; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "height", {
            get: function () { return this.delegate.getBoundingClientRect().height; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "center", {
            get: function () {
                var box = this.delegate.getBoundingClientRect();
                return [box.width / 2, box.height / 2];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "prev", {
            get: function () { return this.sibling('before'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "next", {
            get: function () { return this.sibling('after'); },
            enumerable: true,
            configurable: true
        });
        BaseElement.prototype.sibling = function (name, offset) {
            if (name === void 0) { name = 'after'; }
            if (offset === void 0) { offset = 1; }
            var sibling = null;
            if (name == 'after') {
                sibling = this.delegate.nextElementSibling;
            }
            else if (name == 'before') {
                sibling = this.delegate.previousElementSibling;
            }
            sibling = (sibling) ? new BaseElement(sibling, this.root, this.provider) : null;
            if (sibling && offset > 1)
                sibling = sibling.sibling(name, --offset);
            return sibling;
        };
        Object.defineProperty(BaseElement.prototype, "HTML", {
            get: function () { return this.innerHTML; },
            set: function (html) { this.innerHTML = html; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "innerHTML", {
            get: function () { return this.delegate.innerHTML; },
            set: function (html) { this.delegate.innerHTML = html; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElement.prototype, "outerHTML", {
            get: function () { return this.delegate.outerHTML; },
            enumerable: true,
            configurable: true
        });
        BaseElement.prototype.closestParent = function (selector) {
            var closest = this.delegate.closest(selector);
            return (closest) ? this.provider.createFrom(closest) : null;
        };
        BaseElement.prototype.closestChild = function (selector) {
            var closest = this.delegate.querySelector(selector);
            return (closest) ? this.provider.createFrom(closest) : null;
        };
        BaseElement.prototype.closest = function (selector) {
            var closest = this.closestParent(selector) || this.closestChild(selector);
            return (closest) ? closest : null;
        };
        BaseElement.prototype.datum = function (name) {
            return this.delegate.getAttribute("data-" + name);
        };
        BaseElement.prototype.data = function () {
            var e_1, _a;
            var names = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                names[_i] = arguments[_i];
            }
            var items = {};
            try {
                for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
                    var name_1 = names_1_1.value;
                    items[name_1] = this.datum(name_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return items;
        };
        BaseElement.prototype.setDatum = function (name, value) { this.delegate.setAttribute("data-" + name, value); };
        BaseElement.prototype.setData = function (data) {
            var e_2, _a;
            try {
                for (var _b = __values(Object.keys(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var datum = _c.value;
                    this.setDatum(datum, data[datum]);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        BaseElement.prototype.removeDatum = function (datum) { this.delegate.removeAttribute("data-" + name); };
        BaseElement.prototype.removeData = function (data) {
            var e_3, _a;
            try {
                for (var _b = __values(Object.keys(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var datum = _c.value;
                    this.removeDatum(datum);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        BaseElement.prototype.attr = function (name) { return this.delegate.getAttribute(name); };
        BaseElement.prototype.setAttr = function (name, value) { this.delegate.setAttribute(name, value); };
        BaseElement.prototype.addEventListener = function (type, listener, capture) {
            return this.delegate.addEventListener(type, listener, capture);
        };
        BaseElement.prototype.removeEventListener = function (type, listener) {
            return this.delegate.removeEventListener(type, listener);
        };
        BaseElement.prototype.appendTo = function (target) {
            target = target || this.parent;
            target.append(this);
        };
        BaseElement.prototype.append = function (content) {
            this.delegate.appendChild(content.delegate);
        };
        BaseElement.prototype.insertBefore = function (content, ref) {
            if (ref === void 0) { ref = null; }
            this.delegate.insertBefore(content.delegate, ref);
        };
        BaseElement.prototype.insertAfter = function (content) {
            this.parent.insertBefore(content, this.parent.sibling().delegate);
        };
        BaseElement.prototype.querySelector = function (selector) { return this.delegate.querySelector(selector); };
        BaseElement.prototype.querySelectorAll = function (selector) { return this.delegate.querySelectorAll(selector); };
        BaseElement.prototype.getStyle = function (property) { return window.getComputedStyle(this.delegate, property); };
        BaseElement.prototype.setStyle = function (property, value) { this.delegate.style[property] = value; };
        BaseElement.prototype.setStyles = function (properties) {
            var e_4, _a;
            try {
                for (var _b = __values(Object.keys(properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var property = _c.value;
                    this.setStyle(property, properties[property]);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        BaseElement.prototype.removeStyle = function (property) { this.setStyle(property, null); };
        BaseElement.prototype.removeStyles = function (properties) {
            var e_5, _a;
            try {
                for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                    var property = properties_1_1.value;
                    this.removeStyle(property);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
        };
        BaseElement.prototype.getClass = function (name) { return Array.from(this.delegate.classList).find(function (predicate) { return predicate === name; }); };
        BaseElement.prototype.getClasses = function () { return Array.from(this.delegate.classList); };
        BaseElement.prototype.addClass = function (name) { this.delegate.classList.add(name); };
        BaseElement.prototype.addClasses = function (names) {
            var _a;
            (_a = this.delegate.classList).add.apply(_a, __spread((typeof names === 'string') ? names.split(' ') : names));
        };
        BaseElement.prototype.removeClass = function (name) { this.delegate.classList.remove(name); };
        BaseElement.prototype.removeClasses = function (names) {
            var _a;
            (_a = this.delegate.classList).remove.apply(_a, __spread((typeof names === 'string') ? names.split(' ') : names));
        };
        BaseElement.prototype.replaceClass = function (remove, add) {
            this.removeClass(remove);
            this.addClass(add);
        };
        BaseElement.prototype.replaceClasses = function (remove, add) {
            this.removeClasses(remove);
            this.addClasses(add);
        };
        BaseElement.prototype.toggleClass = function (flavorA, flavorB) {
            var _a = __read((this.hasClass(flavorA)) ? [flavorB, flavorA] : [flavorA, flavorB], 2), add = _a[0], remove = _a[1];
            this.replaceClass(remove, add);
        };
        BaseElement.prototype.hasClass = function (name) { return this.delegate.classList.contains(name); };
        BaseElement.prototype.hasClasses = function (names) {
            var _this = this;
            return names.every(function (name) { return _this.hasClass(name); });
        };
        BaseElement.prototype.excludeClasses = function (names) {
            var _this = this;
            names = (typeof names === 'string') ? names.split(' ') : names;
            return names.filter(function (v) { return !_this.getClasses().includes(v); });
        };
        BaseElement.prototype.sameClasses = function (names) {
            var _this = this;
            names = (typeof names === 'string') ? names.split(' ') : names;
            return names.filter(function (v) { return _this.getClasses().includes(v); });
        };
        BaseElement.prototype._getEl = function (selector) {
            var root = (this._root) ? this.root.delegate || this.root : ((this.provider && this.provider.root) ? this.provider.root : document);
            var el = root.querySelector(selector);
            return el;
        };
        return BaseElement;
    }());
    exports.BaseElement = BaseElement;
    var BaseElementList = (function () {
        function BaseElementList(target, root, provider) {
            var e_6, _a;
            this.delegates = [];
            this.selector = '';
            this._provider = provider;
            this._root = root;
            var els;
            var cls = BaseElement;
            if (typeof target === 'string') {
                this.selector = target;
                els = this._getEls(target);
            }
            else {
                els = Array.from(target);
            }
            try {
                for (var els_1 = __values(els), els_1_1 = els_1.next(); !els_1_1.done; els_1_1 = els_1.next()) {
                    var delegate = els_1_1.value;
                    this.delegates.push(new cls(delegate, root, provider));
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (els_1_1 && !els_1_1.done && (_a = els_1.return)) _a.call(els_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        Object.defineProperty(BaseElementList.prototype, "root", {
            get: function () { return this._root; },
            set: function (root) { this._root = root; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElementList.prototype, "provider", {
            get: function () { return this._provider; },
            set: function (provider) { this._provider = provider; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElementList.prototype, "first", {
            get: function () { return this.delegates[0]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElementList.prototype, "last", {
            get: function () { return this.delegates[this.delegates.length - 1]; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseElementList.prototype, "length", {
            get: function () { return this.delegates.length; },
            enumerable: true,
            configurable: true
        });
        BaseElementList.prototype.index = function (index) { return this.delegates[index]; };
        BaseElementList.prototype.find = function (predicate) {
            return this.delegates.find(predicate);
        };
        BaseElementList.prototype.addEventListener = function (type, listener) {
            var e_7, _a;
            try {
                for (var _b = __values(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var el = _c.value;
                    el.addEventListener(type, listener);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_7) throw e_7.error; }
            }
        };
        BaseElementList.prototype.setAttr = function (name, value) {
            var e_8, _a;
            try {
                for (var _b = __values(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var delegate = _c.value;
                    delegate.setAttr(name, value);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_8) throw e_8.error; }
            }
        };
        BaseElementList.prototype.setStyle = function (property, value) {
            var e_9, _a;
            try {
                for (var _b = __values(this.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var delegate = _c.value;
                    delegate.setStyle(property, value);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        };
        BaseElementList.prototype._getEls = function (selector) {
            var root = (this._root) ? (this.root.delegate || document) : ((this.provider && this.provider.root) ? this.provider.root : document);
            var els = root.querySelectorAll(selector);
            return Array.from(els);
        };
        return BaseElementList;
    }());
    exports.BaseElementList = BaseElementList;
});
define("lib/services/ux/service/animations/target", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TransitionTarget = (function () {
        function TransitionTarget(step, target) {
            var _this = this;
            this.states = { 'onStart': {}, 'onBeforeStart': {}, 'onComplete': {}, 'onBeforeComplete': {} };
            this.listeners = {};
            this.processing = new Set();
            this.step = step;
            this.ref = (typeof target === 'string') ? (function () { return _this.transition.root.view.el(target, true); }) : target;
        }
        Object.defineProperty(TransitionTarget.prototype, "transition", {
            get: function () { return this.step.transition; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionTarget.prototype, "target", {
            get: function () {
                return (typeof this.ref === 'object') ? this.ref : this.ref();
            },
            enumerable: true,
            configurable: true
        });
        TransitionTarget.prototype.onBeforeStart = function (cb) {
            this.states['onBeforeStart'] = { 'cb': cb };
            return this;
        };
        TransitionTarget.prototype.onBeforeComplete = function (cb) {
            this.states['onBeforeComplete'] = { 'cb': cb };
            return this;
        };
        TransitionTarget.prototype.onStart = function (addClasses, removeClasses, cb) {
            this.states['onStart'] = { 'addClasses': addClasses, 'removeClasses': removeClasses, 'cb': cb };
            return this;
        };
        TransitionTarget.prototype.onComplete = function (addClasses, removeClasses, cb) {
            this.states['onComplete'] = { 'addClasses': addClasses, 'removeClasses': removeClasses, 'cb': cb };
            return this;
        };
        TransitionTarget.prototype.start = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.states['onBeforeStart'].cb)
                this.states['onBeforeStart'].cb.apply(this);
            var state = this.states['onStart'];
            var addClasses = (state.addClasses && this.target.excludeClasses(state.addClasses)) || [];
            var removeClasses = (state.removeClasses && this.target.sameClasses(state.removeClasses)) || [];
            if (removeClasses.length)
                this.target.removeClasses(removeClasses);
            this._addStartTransitionEvent();
            this._addEndTransitionEvent();
            if (addClasses.length)
                this.target.addClasses(addClasses);
            if (state.cb)
                state.cb.apply(this, this.transition.args || []);
            if (!addClasses.length && !removeClasses.length)
                this.complete();
        };
        TransitionTarget.prototype.complete = function () {
            if (this.states['onBeforeComplete'].cb)
                this.states['onBeforeComplete'].cb.apply(this);
            var state = this.states['onComplete'];
            if (state.removeClasses)
                this.target.removeClasses(state.removeClasses);
            this._removeStartTransitionEvent();
            this._removeEndTransitionEvent();
            if (state.addClasses)
                this.target.addClasses(state.addClasses);
            if (state.cb)
                state.cb.apply(this);
            this.step.complete(this);
        };
        TransitionTarget.prototype.startTransitionEvent = function (e) {
            this.processing.add(e.propertyName);
        };
        TransitionTarget.prototype.endTransitionEvent = function (e) {
            this.processing.delete(e.propertyName);
            if (!this.processing.size)
                this.complete();
        };
        TransitionTarget.prototype._addStartTransitionEvent = function () {
            this.listeners['start'] = this.startTransitionEvent.bind(this);
            this.target.addEventListener('transitionstart', this.listeners['start']);
        };
        TransitionTarget.prototype._addEndTransitionEvent = function () {
            this.listeners['end'] = this.endTransitionEvent.bind(this);
            this.target.addEventListener('transitionend', this.listeners['end']);
        };
        TransitionTarget.prototype._removeStartTransitionEvent = function () {
            this.target.removeEventListener('transitionstart', this.listeners['start']);
        };
        TransitionTarget.prototype._removeEndTransitionEvent = function () {
            this.target.removeEventListener('transitionend', this.listeners['end']);
        };
        return TransitionTarget;
    }());
    exports.TransitionTarget = TransitionTarget;
});
define("lib/services/ux/service/animations/step", ["require", "exports", "lib/services/ux/service/animations/target"], function (require, exports, target_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TransitionStep = (function () {
        function TransitionStep(transition, name) {
            if (name === void 0) { name = ''; }
            this.targets = new Set();
            this.processing = new Set();
            this.name = name || transition.length + "";
            this.transition = transition;
        }
        TransitionStep.prototype.target = function (target) {
            var created = new target_1.TransitionTarget(this, target);
            this.targets.add(created);
            return created;
        };
        TransitionStep.prototype.start = function (previous) {
            var e_10, _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.processing = new Set(this.targets);
            try {
                for (var _b = __values(this.processing), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var target = _c.value;
                    target.start.apply(target, __spread(args));
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_10) throw e_10.error; }
            }
        };
        TransitionStep.prototype.complete = function (target) {
            this.processing.delete(target);
            if (!this.processing.size)
                this.next(this);
        };
        TransitionStep.prototype.next = function (previous) {
            this.transition.next(previous);
        };
        return TransitionStep;
    }());
    exports.TransitionStep = TransitionStep;
});
define("lib/core/components/strappable", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Strappable = (function () {
        function Strappable() {
            this.strapOnInitialize = true;
            this.isStrapped = false;
            this.isStrapping = false;
            this.hasBeenStrapped = false;
        }
        Strappable.prototype.strap = function () {
            if (this.canBeStrapped()) {
                this.isStrapping = true;
                if (!this.isStrapped && !this.hasBeenStrapped)
                    this.onBeforeInitialStrap();
                if (!this.isStrapped)
                    this.onBeforeStrap();
                if (this.resolveAndStrap()) {
                    this.isStrapping = false;
                    this.isStrapped = true;
                    this.onStrap();
                    if (!this.hasBeenStrapped)
                        this.onInitialStrap();
                    if (this.isStrapped && !this.hasBeenStrapped)
                        this.onAfterInitialStrap();
                    if (this.isStrapped)
                        this.onAfterStrap();
                    this.hasBeenStrapped = true;
                }
            }
        };
        Strappable.prototype.canBeStrapped = function () { return !this.isStrapped; };
        Strappable.prototype.resolveAndStrap = function () {
            return true;
        };
        Strappable.prototype.onInitialStrap = function () { };
        Strappable.prototype.onBeforeInitialStrap = function () { };
        Strappable.prototype.onAfterInitialStrap = function () { };
        Strappable.prototype.onStrap = function () { };
        ;
        Strappable.prototype.onBeforeStrap = function () { };
        Strappable.prototype.onAfterStrap = function () { };
        return Strappable;
    }());
    exports.Strappable = Strappable;
});
define("lib/core/components/loadable", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Loadable = (function () {
        function Loadable() {
            this.loadOnInitialize = true;
            this.isLoaded = false;
            this.isLoading = false;
            this.hasBeenLoaded = false;
        }
        Loadable.prototype.load = function () {
            if (this.canBeLoaded()) {
                this.isLoading = true;
                if (!this.isLoaded && !this.hasBeenLoaded)
                    this.onBeforeInitialLoad();
                if (!this.isLoaded)
                    this.onBeforeLoad();
                if (this.resolveAndLoad()) {
                    this.isLoading = false;
                    this.isLoaded = true;
                    this.onLoad();
                    if (!this.hasBeenLoaded)
                        this.onInitialLoad();
                    if (this.isLoaded && !this.hasBeenLoaded)
                        this.onAfterInitialLoad();
                    if (this.isLoaded)
                        this.onAfterLoad();
                    this.hasBeenLoaded = true;
                }
            }
        };
        Loadable.prototype.canBeLoaded = function () { return !this.isLoaded; };
        Loadable.prototype.resolveAndLoad = function () {
            return true;
        };
        Loadable.prototype.onInitialLoad = function () { };
        Loadable.prototype.onBeforeInitialLoad = function () { };
        Loadable.prototype.onAfterInitialLoad = function () { };
        Loadable.prototype.onLoad = function () { };
        ;
        Loadable.prototype.onBeforeLoad = function () { };
        Loadable.prototype.onAfterLoad = function () { };
        return Loadable;
    }());
    exports.Loadable = Loadable;
});
define("lib/helpers/strings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UTF8 = (function () {
        function UTF8() {
        }
        UTF8.findSequence = function (input, sequence, index) {
            if (input === void 0) { input = []; }
            if (sequence === void 0) { sequence = []; }
            if (index === void 0) { index = 0; }
            var rbound = sequence.length - 1;
            var ending = sequence[rbound];
            var start = sequence[0];
            var tokens = new Set(sequence);
            var found = [];
            primary: for (var i = index, c = input.length; i + rbound < c; i++) {
                var last = input[i + rbound];
                var processed = [];
                if (last != ending) {
                    if (!tokens.has(last))
                        i += rbound;
                    continue;
                }
                else if (input[i] == start) {
                    for (var k = rbound - 1, n = 1; k >= n; k--) {
                        last = input[i + k];
                        processed.push([i, last, sequence[k]]);
                        if (last != sequence[k]) {
                            if (!tokens.has(last))
                                i += rbound;
                            continue primary;
                        }
                    }
                    if (i >= rbound) {
                        found.push(i);
                    }
                }
            }
            return found;
        };
        UTF8.decodeEntities = function (input) {
            var output = input.replace(/&#(\d+);/g, function (match, dec) {
                return String.fromCharCode(dec);
            });
            return output;
        };
        UTF8.decodeUTF8ToStr = function (input) {
            var output = '';
            for (var i = 0, c = input.length; i < c; i++) {
                var char = input[i].toString(16);
                if (char.length < 2)
                    char = '0' + char;
                output += '%' + char;
            }
            return decodeURIComponent(output);
        };
        UTF8.filterUnsafeUnicode = function (input) {
            var output = input;
            var unsafe = ['&#55357;', '&#55358;'];
            for (var i = 0, c = unsafe.length; i < c; i++) {
                var unicode = unsafe[i];
                var regex = new RegExp(unicode + "&#[0-9]{5};", 'gi');
                output = output.replace(regex, function (match) {
                    return "[U+" + match.substring(10, match.lastIndexOf(';')) + "]";
                });
            }
            return output;
        };
        UTF8.encodeStrToUTF8 = function (input) {
            var encoded = encodeURIComponent(input);
            var output = [];
            for (var i = 0, c = encoded.length; i < c; i++) {
                if (encoded.charAt(i) == '%') {
                    output.push(parseInt(encoded.substring(i + 1, i + 3), 16));
                    i += 2;
                }
                else {
                    output.push(encoded.charCodeAt(i));
                }
            }
            return output;
        };
        UTF8.encodeStrToHexUTF8 = function (input) {
            var encoded = this.encodeStrToUTF8(input);
            var output = '';
            for (var i = 0, c = encoded.length; i < c; i++) {
                output += (encoded[i] < 16 ? '0' : '') + encoded[i].toString(16);
            }
            return output;
        };
        return UTF8;
    }());
    exports.UTF8 = UTF8;
    var Strings = (function () {
        function Strings() {
        }
        Strings.format = function (str) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var formatted = str;
            if (typeof args[0] === "object") {
                for (var k in args[0]) {
                    str = str.replace(new RegExp("\\{" + k + "\\}", "gi"), args[0][k]);
                }
            }
            else {
                str = str.replace(/{(\d+)}/g, function (match, number) {
                    return (typeof args[number] != 'undefined') ? args[number] : match;
                });
            }
            return str;
        };
        Strings.matchAll = function (predicate, re, data) {
            var e_11, _a;
            data = data || [];
            if (typeof predicate === 'string') {
                var matched = predicate.match(re);
                if (matched) {
                    data.push(__spread(matched));
                    Strings.matchAll(predicate.substr(matched.index + matched[0].length), re, data);
                }
            }
            else {
                try {
                    for (var predicate_1 = __values(predicate), predicate_1_1 = predicate_1.next(); !predicate_1_1.done; predicate_1_1 = predicate_1.next()) {
                        var s = predicate_1_1.value;
                        data.push(__spread(s.match(re)));
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (predicate_1_1 && !predicate_1_1.done && (_a = predicate_1.return)) _a.call(predicate_1);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
            }
            return data;
        };
        Strings.capitalize = function (str) {
            return (typeof str !== 'string') ? '' : str.charAt(0).toUpperCase() + str.slice(1);
        };
        return Strings;
    }());
    exports.Strings = Strings;
});
define("lib/helpers/common", ["require", "exports", "lib/helpers/strings"], function (require, exports, strings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function assert(condition, message) {
        if (condition)
            console.log(message);
    }
    exports.assert = assert;
    function Mixin(derived) {
        var bases = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            bases[_i - 1] = arguments[_i];
        }
        var untouched = __assign({}, derived.prototype);
        bases.forEach(function (base) {
            var e_12, _a;
            Object.getOwnPropertyNames(base.prototype).forEach(function (name) {
                var property = Object.getOwnPropertyDescriptor(base.prototype, name);
                if (property && !Object.getOwnPropertyDescriptor(untouched, name))
                    Object.defineProperty(derived.prototype, name, property);
            });
            try {
                var properties = [];
                if (base.toString().indexOf('\n') != -1) {
                    properties = __spread(strings_1.Strings.matchAll(base.toString(), /this.(.+) = (.+);/));
                }
                else {
                    properties = __spread(strings_1.Strings.matchAll(base.toString().match(/{(.+)}/)[1].split(/(?=,this.)/).map(function (v) { return v.startsWith(',') ? v.substr(1) : v; }), /this\.([^=]+)=(.+)/));
                }
                try {
                    for (var properties_2 = __values(properties), properties_2_1 = properties_2.next(); !properties_2_1.done; properties_2_1 = properties_2.next()) {
                        var prop = properties_2_1.value;
                        if (!Object.getOwnPropertyDescriptor(untouched, prop[1])) {
                            derived.prototype[prop[1]] = Function("\"use strict\";return " + prop[2])();
                        }
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (properties_2_1 && !properties_2_1.done && (_a = properties_2.return)) _a.call(properties_2);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
            }
            catch (TypeError) { }
            derived.prototype.__MRO__ = (!derived.prototype.___MRO__) ? __spread(bases) : __spread(bases, derived.prototype.__MRO__);
        });
    }
    exports.Mixin = Mixin;
});
define("lib/helpers/objects", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Objects = (function () {
        function Objects() {
        }
        Objects.diffKeys = function (predicate, subject) {
            var keys = Object.keys(predicate).filter(function (k) { return subject[k] === undefined; });
            return keys;
        };
        Objects.diff = function (predicate, subject) {
            var e_13, _a;
            var keys = Objects.diffKeys(predicate, subject);
            var obj = {};
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var k = keys_1_1.value;
                    obj[k] = predicate[k];
                }
            }
            catch (e_13_1) { e_13 = { error: e_13_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_13) throw e_13.error; }
            }
            return obj;
        };
        return Objects;
    }());
    exports.Objects = Objects;
});
define("lib/helpers/crypto/uuid", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UUID = (function () {
        function UUID() {
        }
        UUID.make = function () {
            var fn = UUID.getFn();
            return fn();
        };
        UUID.getFn = function () {
            var fn = UUID.timeUUID;
            if (window.crypto && window.crypto.getRandomValues) {
                fn = UUID.cryptoUUID;
            }
            return fn;
        };
        UUID.cryptoUUID = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (c) {
                return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
            });
        };
        UUID.timeUUID = function () {
            var t = Date.now();
            if (typeof performance && typeof performance.now === 'function')
                t += performance.now();
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (c) {
                var seed = Math.random() * 16 | 0;
                return (c == 'x' ? seed : (seed & 0x3 | 0x8)).toString();
            });
        };
        return UUID;
    }());
    exports.UUID = UUID;
});
define("lib/helpers/requests/response", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpResponse = (function () {
        function HttpResponse(request, payload, isSuccessful, status) {
            if (isSuccessful === void 0) { isSuccessful = true; }
            this.isSuccessful = true;
            this.request = request;
            this.payload = payload;
            this.isSuccessful = isSuccessful;
            if (status)
                this.status = status;
        }
        return HttpResponse;
    }());
    exports.HttpResponse = HttpResponse;
});
define("lib/helpers/requests/request", ["require", "exports", "lib/helpers/requests/response"], function (require, exports, response_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpRequest = (function () {
        function HttpRequest(uri, cb, payload, method) {
            var _this = this;
            if (method === void 0) { method = 'GET'; }
            this.response = null;
            this.isResolved = false;
            this.isRejected = false;
            this.isPending = false;
            this.XHR = new XMLHttpRequest();
            this.uri = uri;
            this.method = method;
            this.payload = payload;
            this.cb = cb;
            this._promise = new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
            }).then(this.onComplete.bind(this), this.onRejected.bind(this));
            this.strap();
        }
        HttpRequest.prototype.strap = function () {
            var _this = this;
            this.XHR.open(this.method, this.uri, true);
            this.XHR.onload = function () {
                if (_this.XHR.status >= 200 && _this.XHR.status < 300) {
                    _this.resolve(_this.XHR.response, _this.XHR.status);
                }
                else {
                    _this.reject(_this.XHR.statusText, _this.XHR.status);
                }
            };
            this.XHR.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        };
        Object.defineProperty(HttpRequest.prototype, "resolve", {
            get: function () { return this._resolve; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpRequest.prototype, "reject", {
            get: function () { return this._reject; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpRequest.prototype, "pending", {
            get: function () { return this._promise; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HttpRequest.prototype, "isComplete", {
            get: function () { return !this.isPending; },
            enumerable: true,
            configurable: true
        });
        HttpRequest.prototype.send = function () {
            this.isPending = true;
            if (this.method === 'POST') {
                this.XHR.send(this.payload);
            }
            else {
                this.XHR.send();
            }
            return this._promise;
        };
        HttpRequest.prototype.onComplete = function (payload, status) {
            this.isPending = false;
            this.isResolved = true;
            this.response = new response_1.HttpResponse(this, payload, true, status);
            return (this.cb) ? this.cb(this.response) : this.response;
        };
        HttpRequest.prototype.onRejected = function (message, status) {
            this.isPending = false;
            this.isRejected = true;
            this.response = new response_1.HttpResponse(this, message, false, status);
            return (this.cb) ? this.cb(this.response) : this.response;
        };
        return HttpRequest;
    }());
    exports.HttpRequest = HttpRequest;
});
define("lib/helpers/requests/resolver", ["require", "exports", "lib/helpers/requests/request"], function (require, exports, request_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Resolver = (function () {
        function Resolver() {
        }
        Object.defineProperty(Resolver.prototype, "uri", {
            get: function () { return window.location.href; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Resolver.prototype, "path", {
            get: function () { return window.location.pathname; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Resolver.prototype, "origin", {
            get: function () { return window.location.origin; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Resolver.prototype, "segments", {
            get: function () {
                var path = this.path;
                var segments = path.split("/");
                return (!segments.length) ? [] : segments.slice(1);
            },
            enumerable: true,
            configurable: true
        });
        Resolver.prototype.segment = function (pos) { return this.segments[pos - 1]; };
        Resolver.prototype.request = function (uri, cb, payload, method, origin) {
            uri = (origin) ? origin + uri : this.origin + "/" + uri;
            return new request_1.HttpRequest(uri, cb, payload, method);
        };
        Resolver.prototype.get = function (uri, cb, payload, origin) {
            var request = this.request(uri, cb, payload, 'GET', origin);
            request.send();
            return request._promise;
        };
        Resolver.prototype.post = function (uri, cb, payload, origin) {
            var request = this.request(uri, cb, payload, 'POST', origin);
            request.send();
            return request._promise;
        };
        return Resolver;
    }());
    exports.Resolver = Resolver;
});
define("lib/helpers", ["require", "exports", "lib/helpers/common", "lib/helpers/strings", "lib/helpers/objects", "lib/helpers/crypto/uuid", "lib/helpers/requests/resolver", "lib/helpers/requests/request", "lib/helpers/requests/response"], function (require, exports, common_1, strings_2, objects_1, uuid_1, resolver_1, request_2, response_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assert = common_1.assert;
    exports.Mixin = common_1.Mixin;
    exports.UTF8 = strings_2.UTF8;
    exports.Strings = strings_2.Strings;
    exports.Objects = objects_1.Objects;
    exports.UUID = uuid_1.UUID;
    exports.Resolver = resolver_1.Resolver;
    exports.HttpRequest = request_2.HttpRequest;
    exports.HttpResponse = response_2.HttpResponse;
});
define("lib/core/components/initializable", ["require", "exports", "lib/core/components/strappable", "lib/core/components/loadable", "lib/helpers"], function (require, exports, strappable_1, loadable_1, helpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Initializable = (function () {
        function Initializable() {
            this.isInitialized = false;
            this.isInitializing = false;
        }
        Initializable.prototype.init = function () {
            this.isInitializing = true;
            this.onBeforeInit();
            if (this.resolveAndInit()) {
                this.isInitializing = false;
                this.isInitialized = true;
                this.onInit();
                this.onAfterInit();
            }
        };
        Initializable.prototype.onInit = function () { };
        ;
        Initializable.prototype.onBeforeInit = function () { };
        Initializable.prototype.onAfterInit = function () { };
        Initializable.prototype.resolveAndInit = function () {
            if (this.strapOnInitialize)
                this.strap();
            if (this.loadOnInitialize)
                this.load();
            return this.isStrapped && this.isLoaded;
        };
        return Initializable;
    }());
    exports.Initializable = Initializable;
    ;
    ;
    helpers_1.Mixin(Initializable, strappable_1.Strappable, loadable_1.Loadable);
});
define("lib/core/components/observable", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable = (function () {
        function Observable() {
        }
        Observable.prototype.onChanged = function (records) {
            var e_14, _a;
            try {
                for (var records_1 = __values(records), records_1_1 = records_1.next(); !records_1_1.done; records_1_1 = records_1.next()) {
                    var record = records_1_1.value;
                    switch (record.type) {
                        case 'childList':
                            this.onChangedChildList(record);
                    }
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (records_1_1 && !records_1_1.done && (_a = records_1.return)) _a.call(records_1);
                }
                finally { if (e_14) throw e_14.error; }
            }
        };
        Observable.prototype.onChangedChildList = function (record) {
            var e_15, _a, e_16, _b;
            if (record.removedNodes.length)
                try {
                    for (var _c = __values(Object.values(record.removedNodes)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var node = _d.value;
                        this.onRemovedChild(node);
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
            if (record.addedNodes.length)
                try {
                    for (var _e = __values(Object.values(record.addedNodes)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var node = _f.value;
                        this.onAddedChild(node);
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
        };
        Observable.prototype.onAddedChild = function (node, record) { };
        Observable.prototype.onRemovedChild = function (node, record) { };
        return Observable;
    }());
    exports.Observable = Observable;
});
define("lib/core/components/stateful", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ;
});
define("lib/core/components/application", ["require", "exports", "lib/core/components/component"], function (require, exports, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseApplication = (function (_super) {
        __extends(BaseApplication, _super);
        function BaseApplication() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'app';
            _this.routes = {};
            return _this;
        }
        BaseApplication.prototype.resolveAndLoad = function () {
            var e_17, _a;
            var canResolve = true;
            if (typeof this.view === 'function') {
                this.view = new this._view();
                this.view.init();
                if (!this.view.isInitialized) {
                    this.view.signals.once('view:init:after', this.resolveInitializedView.bind(this, this.view));
                    canResolve = false;
                }
            }
            if (canResolve && this.canInitializeChildren) {
                try {
                    for (var _b = __values(Object.values(this._children)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (!this.initializeChild(child))
                            canResolve = false;
                    }
                }
                catch (e_17_1) { e_17 = { error: e_17_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_17) throw e_17.error; }
                }
            }
            else {
                canResolve = false;
            }
            if (canResolve) {
                for (var path in this.routes)
                    this.router.createRoute(this.routes[path], path);
                this.router._process(this, true);
            }
            return canResolve;
        };
        return BaseApplication;
    }(component_1.BaseComponent));
    exports.BaseApplication = BaseApplication;
    ;
});
define("lib/core/controllers/controller", ["require", "exports", "lib/core/components/initializable", "lib/helpers"], function (require, exports, initializable_1, helpers_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Controller = (function () {
        function Controller() {
            this.name = 'cont';
        }
        return Controller;
    }());
    exports.Controller = Controller;
    ;
    ;
    helpers_2.Mixin(Controller, initializable_1.Initializable);
});
define("lib/services/signals/service/radio", ["require", "exports", "lib/services", "lib/helpers"], function (require, exports, services_1, helpers_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Radio = (function () {
        function Radio(parent, name, spectrum, frequency, channel) {
            if (parent === void 0) { parent = null; }
            if (name === void 0) { name = ''; }
            if (spectrum === void 0) { spectrum = 'global'; }
            if (frequency === void 0) { frequency = 'base'; }
            if (channel === void 0) { channel = 'std'; }
            this.name = '';
            this.source = '';
            this.uuid = helpers_3.UUID.make();
            this._spectrums = {};
            this._frequencies = {};
            this.name = name;
            this.parent = parent;
            if (spectrum)
                this.source += spectrum + "|";
            if (frequency)
                this.source += frequency;
            if (channel)
                this.source += (this.source) ? " #" + channel : "#" + channel;
            var broadcast;
            if (parent) {
                broadcast = new services_1.Broadcast(parent, undefined, this.source);
            }
            else {
                broadcast = new services_1.Broadcast(this);
            }
            this.spectrum = broadcast.spectrum;
            this.frequency = broadcast.frequency;
            this.channel = broadcast.channels[0];
        }
        Object.defineProperty(Radio.prototype, "spectrums", {
            get: function () { return (this.parent) ? this.parent._spectrums : this._spectrums; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Radio.prototype, "frequencies", {
            get: function () { return this._frequencies; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Radio.prototype, "spectrum", {
            get: function () { return this._spectrum; },
            set: function (spectrum) { this._spectrum = spectrum; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Radio.prototype, "frequency", {
            get: function () { return this._frequency; },
            set: function (frequency) { this._frequency = frequency; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Radio.prototype, "channel", {
            get: function () { return this._channel; },
            set: function (channel) { this._channel = channel; },
            enumerable: true,
            configurable: true
        });
        Radio.prototype.subscribe = function (name, cb, broadcast) {
            var _this = this;
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            broadcast.receivers.forEach(function (receivers, channel) {
                var e_18, _a;
                try {
                    for (var receivers_1 = __values(receivers), receivers_1_1 = receivers_1.next(); !receivers_1_1.done; receivers_1_1 = receivers_1.next()) {
                        var receiver = receivers_1_1.value;
                        receiver.subscribe.apply(receiver, __spread([cb, _this.uuid], args));
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (receivers_1_1 && !receivers_1_1.done && (_a = receivers_1.return)) _a.call(receivers_1);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
            });
        };
        Radio.prototype.subscribeTemporary = function (name, cb, broadcast) {
            var _this = this;
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            broadcast.receivers.forEach(function (receivers, channel) {
                var e_19, _a;
                try {
                    for (var receivers_2 = __values(receivers), receivers_2_1 = receivers_2.next(); !receivers_2_1.done; receivers_2_1 = receivers_2.next()) {
                        var receiver = receivers_2_1.value;
                        receiver.subscribeTemporary.apply(receiver, __spread([cb, _this.uuid], args));
                    }
                }
                catch (e_19_1) { e_19 = { error: e_19_1 }; }
                finally {
                    try {
                        if (receivers_2_1 && !receivers_2_1.done && (_a = receivers_2.return)) _a.call(receivers_2);
                    }
                    finally { if (e_19) throw e_19.error; }
                }
            });
        };
        Radio.prototype.registerSpectrum = function (name, spectrum) {
            this.spectrums[name] = (spectrum) ? spectrum : new services_1.Spectrum(name);
            return this.spectrums[name];
        };
        Radio.prototype.createBroadcast = function (input, source) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var broadcast = new services_1.Broadcast(this, input, source);
            return broadcast;
        };
        return Radio;
    }());
    exports.Radio = Radio;
});
define("lib/services/signals/service/operation", ["require", "exports", "lib/services"], function (require, exports, services_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Operation = (function () {
        function Operation(radio, input, source, resolve) {
            if (resolve === void 0) { resolve = true; }
            var args = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                args[_i - 4] = arguments[_i];
            }
            this.pending = new Set();
            this.completed = new Set();
            this.results = {};
            this.radio = radio;
            this.broadcast = new services_2.Broadcast(radio, input, source);
            this.args = args;
            if (this.broadcast.hasRepeatersBefore)
                this.before = new (Operation.bind.apply(Operation, __spread([void 0, radio, input + ':before', source, false], args)))();
            if (this.broadcast.hasRepeatersAfter)
                this.after = new (Operation.bind.apply(Operation, __spread([void 0, radio, input + ':after', source, false], args)))();
            this._definePending();
            if (resolve)
                this.resolve.apply(this, __spread(args));
        }
        Object.defineProperty(Operation.prototype, "input", {
            get: function () { return this.broadcast.input; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Operation.prototype, "before", {
            get: function () { return this._before; },
            set: function (op) { this._before = op; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Operation.prototype, "after", {
            get: function () { return this._after; },
            set: function (op) { this._after = op; },
            enumerable: true,
            configurable: true
        });
        Operation.prototype.resolve = function () {
            var e_20, _a;
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.before)
                this.before.resolve();
            var _loop_1 = function (repeater) {
                (function () { return _this.resolveRepeater.apply(_this, __spread([repeater.name, repeater], args)); })();
            };
            try {
                for (var _b = __values(this.pending), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var repeater = _c.value;
                    _loop_1(repeater);
                }
            }
            catch (e_20_1) { e_20 = { error: e_20_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_20) throw e_20.error; }
            }
            if (this.after)
                this.after.resolve();
        };
        Operation.prototype.resolved = function (key, repeater) {
            this.pending.delete(repeater);
            this.completed.add(repeater);
            if (repeater.destroyAfter)
                repeater.receiver.remove(repeater);
        };
        Operation.prototype.resolveRepeater = function (key, repeater) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            this.results[key] = repeater.trigger.apply(repeater, __spread(args));
            this.resolved(key, repeater);
            this.pending.delete(repeater);
            this.completed.add(repeater);
        };
        Operation.prototype._definePending = function () {
            var _this = this;
            this.broadcast.receivers.forEach(function (receivers, channel) {
                var e_21, _a, e_22, _b;
                try {
                    for (var receivers_3 = __values(receivers), receivers_3_1 = receivers_3.next(); !receivers_3_1.done; receivers_3_1 = receivers_3.next()) {
                        var receiver = receivers_3_1.value;
                        try {
                            for (var _c = (e_22 = void 0, __values(Object.values(receiver.repeaters))), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var repeater = _d.value;
                                if (repeater.signature && _this.broadcast.signatures.length) {
                                    if (_this.broadcast.signatures.includes(repeater.signature))
                                        _this.pending.add(repeater);
                                }
                                else {
                                    _this.pending.add(repeater);
                                }
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                    }
                }
                catch (e_21_1) { e_21 = { error: e_21_1 }; }
                finally {
                    try {
                        if (receivers_3_1 && !receivers_3_1.done && (_a = receivers_3.return)) _a.call(receivers_3);
                    }
                    finally { if (e_21) throw e_21.error; }
                }
            });
        };
        Object.defineProperty(Operation.prototype, "isComplete", {
            get: function () { return !(this.pending.size); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Operation.prototype, "isIncomplete", {
            get: function () { return (this.pending.size); },
            enumerable: true,
            configurable: true
        });
        return Operation;
    }());
    exports.Operation = Operation;
});
define("lib/services/signals/signal", ["require", "exports", "lib/services/signals/signals.service"], function (require, exports, signals_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Signal(signal, scope) {
        var _a;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return (_a = signals_service_1.SignalsService.binder).bind.apply(_a, __spread([signal, scope], args));
    }
    exports.Signal = Signal;
});
define("lib/services/binder", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Annotation = (function () {
        function Annotation(origin, data) {
            this.origin = origin;
            this.data = data;
        }
        return Annotation;
    }());
    exports.Annotation = Annotation;
    var Binder = (function () {
        function Binder() {
            this.annotations = [];
        }
        Binder.prototype.bind = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var ctx = this;
            return function () {
                var descriptorArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    descriptorArgs[_i] = arguments[_i];
                }
                var binder;
                if (descriptorArgs.length > 1) {
                    binder = function () {
                        var _a;
                        return (_a = ctx).bindProperty.apply(_a, __spread(descriptorArgs, args));
                    };
                }
                else {
                    binder = function () {
                        var _a;
                        return (_a = ctx).bindCls.apply(_a, __spread(descriptorArgs, args));
                    };
                }
                var _a = __read(binder(), 2), output = _a[0], annotation = _a[1];
                if (annotation)
                    ctx.annotations.push(annotation);
                return output;
            };
        };
        Binder.prototype.bindCls = function (origin) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return [origin, null];
        };
        Binder.prototype.bindProperty = function (origin, key, descriptor) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            return [descriptor, null];
        };
        Binder.prototype.annotation = function (origin, data) {
            return new Annotation(origin, data);
        };
        Binder.prototype.link = function (annotation) {
            this.annotations.push(annotation);
        };
        Binder.prototype.process = function (predicate) {
            var e_23, _a;
            var annotations = this._findPredicate(predicate);
            try {
                for (var _b = __values(Object.values(annotations)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var annotation = _c.value;
                    this.processAnnotation(predicate, annotation.data, annotation);
                }
            }
            catch (e_23_1) { e_23 = { error: e_23_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_23) throw e_23.error; }
            }
        };
        Binder.prototype.processAnnotation = function (predicate, data, annotation) { };
        Binder.prototype._findPredicate = function (predicate) {
            return this.annotations.filter(function (v) { return v.origin === predicate.constructor.prototype || v.origin === predicate.constructor; });
        };
        return Binder;
    }());
    exports.Binder = Binder;
});
define("lib/services/signals/signals.binder", ["require", "exports", "lib/services/binder"], function (require, exports, binder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SignalsBinder = (function (_super) {
        __extends(SignalsBinder, _super);
        function SignalsBinder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SignalsBinder.prototype.bindCls = function (target, signal, scope) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var data = {
                signal: signal,
                scope: scope,
                isTrigger: false,
                method: null
            };
            return [target, this.annotation(target, data)];
        };
        SignalsBinder.prototype.bindProperty = function (target, key, descriptor, signal, scope) {
            var args = [];
            for (var _i = 5; _i < arguments.length; _i++) {
                args[_i - 5] = arguments[_i];
            }
            var fn = descriptor;
            var data = {
                signal: signal,
                scope: scope,
                isTrigger: !key.startsWith('on'),
                method: key
            };
            return [fn, this.annotation(target, data)];
        };
        SignalsBinder.prototype.processAnnotation = function (predicate, data) {
            if (predicate && data.method) {
                if (!data.isTrigger) {
                    var service = predicate.signals;
                    if (service) {
                        if (!data.signal.endsWith(':before') && data.method.startsWith('onBefore')) {
                            service.on(data.signal + ':before', predicate[data.method].bind(predicate));
                        }
                        else if (!data.signal.endsWith(':after') && data.method.startsWith('onAfter')) {
                            service.on(data.signal + ':after', predicate[data.method].bind(predicate));
                        }
                        else {
                            service.on(data.signal, predicate[data.method].bind(predicate));
                        }
                    }
                }
                else {
                    var original_1 = predicate[data.method];
                    var p = predicate;
                    var fn = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        original_1.apply(void 0, __spread(args));
                        predicate.signal.op(data.signal);
                    };
                    p[data.method] = fn;
                }
            }
        };
        return SignalsBinder;
    }(binder_1.Binder));
    exports.SignalsBinder = SignalsBinder;
});
define("lib/services/signals/signals.service", ["require", "exports", "lib/services/service", "lib/services/signals/service/radio", "lib/services/signals/service/operation", "lib/services/signals/signals.binder"], function (require, exports, service_1, radio_1, operation_1, signals_binder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SignalsService = (function (_super) {
        __extends(SignalsService, _super);
        function SignalsService(provider) {
            var _a;
            var _this = _super.call(this) || this;
            _this.provider = provider;
            _this.radio = new radio_1.Radio(((_a = _this.provider.parent) === null || _a === void 0 ? void 0 : _a.signals) ? _this.provider.parent.signals.radio : null);
            return _this;
        }
        SignalsService.prototype.broadcast = function (input, source) {
            var _a;
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return (_a = this.radio).createBroadcast.apply(_a, __spread([input, source || "~" + this.radio.uuid + "~"], args));
        };
        SignalsService.prototype.op = function (input, source, resolve) {
            if (resolve === void 0) { resolve = true; }
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var op = new (operation_1.Operation.bind.apply(operation_1.Operation, __spread([void 0, this.radio, input, source || "~" + this.radio.uuid + "~", resolve], args)))();
            return op;
        };
        SignalsService.prototype.on = function (input, cb, source) {
            var _a, _b;
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var broadcast = (_a = this.radio).createBroadcast.apply(_a, __spread([input, source || "~" + this.radio.uuid + "~"], args));
            (_b = this.radio).subscribe.apply(_b, __spread([input, cb, broadcast], args));
        };
        SignalsService.prototype.once = function (input, cb, source) {
            var _a, _b;
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var broadcast = (_a = this.radio).createBroadcast.apply(_a, __spread([input, source || "~" + this.radio.uuid + "~"], args));
            (_b = this.radio).subscribeTemporary.apply(_b, __spread([input, cb, broadcast], args));
        };
        SignalsService.prototype._process = function () {
            SignalsService.binder.process(this.provider);
        };
        SignalsService.binder = new signals_binder_1.SignalsBinder();
        return SignalsService;
    }(service_1.Service));
    exports.SignalsService = SignalsService;
});
define("lib/services/templates/template", ["require", "exports", "lib/services/templates/templates.service"], function (require, exports, templates_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Template(name, tmpl, isUri) {
        var _a;
        if (isUri === void 0) { isUri = true; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = templates_service_1.TemplatesService.binder).bind.apply(_a, __spread([name, tmpl, isUri], args));
    }
    exports.Template = Template;
});
define("lib/services/templates/templates.binder", ["require", "exports", "lib/services/binder"], function (require, exports, binder_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TemplatesBinder = (function (_super) {
        __extends(TemplatesBinder, _super);
        function TemplatesBinder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TemplatesBinder.prototype.bindCls = function (target, name, tmpl, isUri) {
            if (isUri === void 0) { isUri = true; }
            var args = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                args[_i - 4] = arguments[_i];
            }
            var data = {
                name: name,
                tmpl: tmpl,
                isUri: isUri,
                args: args,
            };
            return [target, this.annotation(target, data)];
        };
        TemplatesBinder.prototype.processAnnotation = function (predicate, data) {
            var tmpl = predicate.templates.create(((data.isUri) ? this._resolveRemote.bind(this, predicate, data.tmpl) : data.tmpl), data.name);
            predicate.templates.tmpl = tmpl;
        };
        TemplatesBinder.prototype._resolveRemote = function (predicate, uri, cb) {
            var request = predicate.templates.resolver.request(uri, function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                cb.apply(void 0, __spread(args));
                (_a = predicate.signals).op.apply(_a, __spread(['tmpl:resolved', undefined, true], args));
            });
            request.send();
            return request;
        };
        return TemplatesBinder;
    }(binder_2.Binder));
    exports.TemplatesBinder = TemplatesBinder;
});
define("lib/services/templates/service/template", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseTemplate = (function () {
        function BaseTemplate(tmpl, name) {
            this.name = '';
            this._engine = Handlebars;
            if (typeof tmpl === 'string') {
                this.compileFrom(tmpl);
            }
            else {
                this.resolver = tmpl;
            }
            if (name)
                this.name = name;
        }
        Object.defineProperty(BaseTemplate.prototype, "raw", {
            get: function () { return this._raw; },
            set: function (tmpl) { this._raw = tmpl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseTemplate.prototype, "processed", {
            get: function () { return this._processed; },
            set: function (processed) { this._processed = processed; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseTemplate.prototype, "tmpl", {
            get: function () { return this._tmpl; },
            set: function (compiled) { this._tmpl = compiled; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseTemplate.prototype, "hasRawTemplate", {
            get: function () { return (this.raw != null); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseTemplate.prototype, "hasTemplate", {
            get: function () { return (this.tmpl != null); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseTemplate.prototype, "hasBeenProcessed", {
            get: function () { return (this.processed != null); },
            enumerable: true,
            configurable: true
        });
        BaseTemplate.prototype.resolve = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.pending = this.resolver(function (response) {
                _this.compileFrom.apply(_this, __spread([response.payload], args));
            });
            return this.pending;
        };
        BaseTemplate.prototype.compileFrom = function (input, process) {
            if (process === void 0) { process = true; }
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            delete this.pending;
            this._raw = input;
            this._tmpl = Handlebars.compile(input);
        };
        BaseTemplate.prototype.process = function (context) {
            if (context === void 0) { context = {}; }
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.processed = this.tmpl.apply(this, __spread([context], args));
            return this.processed;
        };
        BaseTemplate.prototype.processAfterAvailable = function (cb, context) {
            if (context === void 0) { context = {}; }
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.pending];
                        case 1:
                            _a.sent();
                            cb(this.process.apply(this, __spread([context], args)));
                            return [2];
                    }
                });
            });
        };
        return BaseTemplate;
    }());
    exports.BaseTemplate = BaseTemplate;
});
define("lib/services/templates/templates.service", ["require", "exports", "lib/services/service", "lib/services/templates/templates.binder", "lib/services/templates/service/template", "lib/helpers/requests/resolver"], function (require, exports, service_2, templates_binder_1, template_1, resolver_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TemplatesService = (function (_super) {
        __extends(TemplatesService, _super);
        function TemplatesService(provider) {
            var _this = _super.call(this) || this;
            _this.provider = provider;
            _this.engine = Handlebars;
            _this.resolver = new resolver_2.Resolver();
            _this._named = {};
            _this.bindHelpers();
            if (provider.parent)
                _this.named = provider.parent.templates.named;
            return _this;
        }
        Object.defineProperty(TemplatesService.prototype, "tmpl", {
            get: function () { return this._tmpl; },
            set: function (tmpl) { this._tmpl = tmpl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TemplatesService.prototype, "named", {
            get: function () { return this._named; },
            set: function (named) { this._named = named; },
            enumerable: true,
            configurable: true
        });
        TemplatesService.prototype.create = function (tmpl, name, overwrite) {
            if (name === void 0) { name = ''; }
            if (overwrite === void 0) { overwrite = false; }
            var created = new template_1.BaseTemplate(tmpl, name);
            if (name && (!this.named[name] || (this.named[name] && overwrite)))
                this.named[name] = created;
            return created;
        };
        TemplatesService.prototype.createFrom = function (parentName, name, selector, overwrite) {
            if (overwrite === void 0) { overwrite = false; }
            var fragment = document.createElement('div');
            fragment.innerHTML = this.template(parentName).raw;
            var extracted = fragment.querySelector(selector);
            return (extracted) ? this.create(extracted.outerHTML, name, overwrite) : null;
        };
        TemplatesService.prototype.process = function (name) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return (_a = this.named[name]).process.apply(_a, __spread(args));
        };
        TemplatesService.prototype.processAfterAvailable = function (name, cb) {
            var _a;
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return (_a = this.named[name]).processAfterAvailable.apply(_a, __spread([cb], args));
        };
        TemplatesService.prototype.template = function (name) { return this.named[name]; };
        TemplatesService.prototype.resolve = function (predicate, force) {
            if (force === void 0) { force = false; }
            if (predicate.templates.tmpl && predicate.templates.tmpl.resolver) {
                if (force || !predicate.tmpl.hasTemplate) {
                    predicate.signals.once('tmpl:resolved', predicate.resolveLoadedTemplate.bind(predicate));
                    predicate.templates.tmpl.resolve();
                }
            }
        };
        TemplatesService.prototype.bindHelpers = function () {
            var _this = this;
            this.engine.registerHelper('ifEquals', function (value, predicate, options) {
                return (value === predicate) ? options.fn(_this) : options.inverse(_this);
            });
            this.engine.registerHelper('ifNotEquals', function (value, predicate, options) {
                return (value !== predicate) ? options.fn(_this) : options.inverse(_this);
            });
            this.engine.registerHelper('op', function (operation, value, predicate, options) {
                var output = value;
                switch (operation) {
                    case '+':
                        output = value + predicate;
                        break;
                }
                return output;
            });
            this.engine.registerHelper('encode', function (input) { return new _this.engine.SafeString(input); });
            this.engine.registerHelper('decode', function (input) {
                var el = document.createElement('textarea');
                el.innerHTML = input;
                return el.value;
            });
            this.engine.registerHelper('listContains', function (value, list, options) {
                return (list.indexOf(value) > -1) ? options.fn(_this) : options.inverse(_this);
            });
            this.engine.registerHelper('listAbsent', function (value, list, options) {
                return (list.indexOf(value) == -1) ? options.fn(_this) : options.inverse(_this);
            });
        };
        TemplatesService.prototype._process = function () {
            TemplatesService.binder.process(this.provider);
        };
        TemplatesService.binder = new templates_binder_1.TemplatesBinder();
        return TemplatesService;
    }(service_2.Service));
    exports.TemplatesService = TemplatesService;
});
define("lib/core/components/view", ["require", "exports", "lib/core/components/initializable", "lib/core/components/viewable", "lib/services/ux/element.service", "lib/services/servicable", "lib/core/components/observable", "lib/services/signals/signals.service", "lib/services/templates/templates.service", "lib/helpers"], function (require, exports, initializable_2, viewable_1, element_service_1, servicable_1, observable_1, signals_service_2, templates_service_2, helpers_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var View = (function () {
        function View(_parent) {
            this._parent = _parent;
            this.name = 'view';
            this._children = {};
        }
        Object.defineProperty(View.prototype, "com", {
            get: function () { var _a; return (this._com || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.com)); },
            set: function (com) { this._com = com; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "app", {
            get: function () { return this._app; },
            set: function (app) { this._app = app; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "ux", {
            get: function () { return this._ux; },
            set: function (service) { this._ux = service; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "signals", {
            get: function () { return this._signals; },
            set: function (service) { this._signals = service; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "canInitializeChildren", {
            get: function () {
                var _a, _b;
                if ((_b = (_a = this.templates) === null || _a === void 0 ? void 0 : _a.tmpl) === null || _b === void 0 ? void 0 : _b.resolver) {
                    return this.isStrapped && this.templates.tmpl.pending === undefined;
                }
                else {
                    return this.isStrapped;
                }
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.init = function () {
            (viewable_1.Viewable.prototype.init || initializable_2.Initializable.prototype.init).bind(this)();
            if (this.isInitialized)
                this.signals.op('view:init');
        };
        View.prototype.strap = function () {
            (viewable_1.Viewable.prototype.strap || initializable_2.Initializable.prototype.strap).bind(this)();
            if (this.isStrapped)
                this.signals.op('view:strap');
        };
        View.prototype.load = function () {
            (viewable_1.Viewable.prototype.load || initializable_2.Initializable.prototype.load).bind(this)();
            if (this.isLoaded)
                this.signals.op('view:load');
        };
        View.prototype.el = function (name, update) {
            if (update === void 0) { update = true; }
            try {
                return this.ux.el(name, update);
            }
            catch (ReferenceError) { }
        };
        View.prototype.list = function (name, update) {
            if (update === void 0) { update = true; }
            try {
                return this.ux.list(name, update);
            }
            catch (ReferenceError) { }
        };
        View.prototype.resolveAndInit = function () {
            if (this.strapOnInitialize)
                this.strap();
            if (this.loadOnInitialize)
                this.load();
            if (this.showOnInitialize)
                this.show();
            if (this.hideOnInitialize)
                this.hide();
            return this.isStrapped && this.isLoaded;
        };
        View.prototype.resolveAndStrap = function () {
            this.discoverChildViews();
            this.ux = new element_service_1.ElementsService(this);
            this.signals = new signals_service_2.SignalsService(this);
            this.templates = new templates_service_2.TemplatesService(this);
            this.signals._process();
            this.templates._process();
            return true;
        };
        View.prototype.resolveAndLoad = function () {
            var e_24, _a;
            var canResolve = true;
            this.templates.resolve(this);
            if (this.canInitializeChildren) {
                try {
                    for (var _b = __values(Object.values(this._children)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (!this.initializeChild(child))
                            canResolve = false;
                    }
                }
                catch (e_24_1) { e_24 = { error: e_24_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_24) throw e_24.error; }
                }
            }
            else {
                canResolve = false;
            }
            if (canResolve) {
                this.ux._normalizePins();
                this.ux.updateAll();
                this.ux._process();
            }
            return canResolve;
        };
        View.prototype.resolveAndShow = function () {
            this.attach();
            return this.isAttached;
        };
        View.prototype.resolveAndAttach = function () {
            if (this.parent)
                this.parent.ux.root.innerHTML = this.ux.root.innerHTML;
            return true;
        };
        return View;
    }());
    exports.View = View;
    ;
    ;
    helpers_4.Mixin(View, initializable_2.Initializable, servicable_1.Servicable, observable_1.Observable, viewable_1.Viewable);
});
define("lib/core/components/view_list", ["require", "exports", "lib/core/components/initializable", "lib/core/components/view", "lib/core/components/viewable", "lib/services/ux/element.service", "lib/helpers", "lib/services/servicable", "lib/core/components/observable", "lib/services/signals/signals.service", "lib/services/templates/templates.service"], function (require, exports, initializable_3, view_1, viewable_2, element_service_2, helpers_5, servicable_2, observable_2, signals_service_3, templates_service_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListView = (function () {
        function ListView(_parent) {
            this._parent = _parent;
            this.name = 'list_view';
            this.listSelector = '';
            this.listed = [];
            this._children = {};
            this._listSelector = '';
            this._listPins = {};
        }
        Object.defineProperty(ListView.prototype, "ux", {
            get: function () { return this._ux; },
            set: function (service) { this._ux = service; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListView.prototype, "signals", {
            get: function () { return this._signals; },
            set: function (service) { this._signals = service; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListView.prototype, "com", {
            get: function () { var _a; return (this._com || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.com)); },
            set: function (com) { this._com = com; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListView.prototype, "app", {
            get: function () { return this._app; },
            set: function (app) { this._app = app; },
            enumerable: true,
            configurable: true
        });
        ListView.prototype.factory = function (el) {
            var ctx = this;
            return (function (_super) {
                __extends(ListItemView, _super);
                function ListItemView() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.pins = ctx._listPins;
                    return _this;
                }
                ListItemView.prototype.resolveAndStrap = function () {
                    this.ux = new element_service_2.ElementsService(this, ctx.ux.createFrom(el), true);
                    this.signals = new signals_service_3.SignalsService(this);
                    return true;
                };
                return ListItemView;
            }(view_1.View));
        };
        ListView.prototype.findAndAddListItems = function () {
            var e_25, _a;
            var items = this.ux.root.querySelectorAll(this._listSelector);
            try {
                for (var _b = __values(Object.values(items)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    this.addListItem(item);
                }
            }
            catch (e_25_1) { e_25 = { error: e_25_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_25) throw e_25.error; }
            }
        };
        ListView.prototype.onRemovedChild = function (el) {
            var index = this.listed.findIndex(function (v) { return v.ux.root.delegate === el; });
            if (index >= 0)
                this.listed.splice(index, 1);
        };
        ListView.prototype.addListItem = function (el) {
            var view = new (this.factory(el))(this);
            this.listed.push(view);
            view.init();
        };
        Object.defineProperty(ListView.prototype, "canInitializeChildren", {
            get: function () {
                var _a, _b;
                if ((_b = (_a = this.templates) === null || _a === void 0 ? void 0 : _a.tmpl) === null || _b === void 0 ? void 0 : _b.resolver) {
                    return this.isStrapped && this.templates.tmpl.pending === undefined;
                }
                else {
                    return this.isStrapped;
                }
            },
            enumerable: true,
            configurable: true
        });
        ListView.prototype.init = function () {
            (viewable_2.Viewable.prototype.init || initializable_3.Initializable.prototype.init).bind(this)();
            if (this.isInitialized)
                this.signals.op('view:init');
        };
        ListView.prototype.strap = function () {
            (viewable_2.Viewable.prototype.strap || initializable_3.Initializable.prototype.strap).bind(this)();
            if (this.isStrapped)
                this.signals.op('view:strap');
        };
        ListView.prototype.load = function () {
            (viewable_2.Viewable.prototype.load || initializable_3.Initializable.prototype.load).bind(this)();
            if (this.isLoaded)
                this.signals.op('view:load');
        };
        ListView.prototype.el = function (name, update) {
            if (update === void 0) { update = true; }
            try {
                return this.ux.el(name, update);
            }
            catch (ReferenceError) { }
        };
        ListView.prototype.list = function (name, update) {
            if (update === void 0) { update = true; }
            try {
                return this.ux.list(name, update);
            }
            catch (ReferenceError) { }
        };
        ListView.prototype.resolveAndInit = function () {
            if (this.strapOnInitialize)
                this.strap();
            if (this.loadOnInitialize)
                this.load();
            if (this.showOnInitialize)
                this.show();
            if (this.hideOnInitialize)
                this.hide();
            return this.isStrapped && this.isLoaded;
        };
        ListView.prototype.resolveAndStrap = function () {
            this.discoverChildViews();
            this.ux = new element_service_2.ElementsService(this);
            this.signals = new signals_service_3.SignalsService(this);
            this.templates = new templates_service_3.TemplatesService(this);
            this.signals._process();
            this.templates._process();
            this._listPins = this.ux._extractFactoryChildPins(true, 'list')['list'];
            this._listSelector = (typeof this._listPins['root'] === 'string') ? this._listPins['root'] : this._listPins['root']();
            delete this._listPins['root'];
            return true;
        };
        ListView.prototype.resolveAndLoad = function () {
            var e_26, _a;
            var canResolve = true;
            this.templates.resolve(this);
            if (this.canInitializeChildren) {
                try {
                    for (var _b = __values(Object.values(this._children)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (!this.initializeChild(child))
                            canResolve = false;
                    }
                }
                catch (e_26_1) { e_26 = { error: e_26_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_26) throw e_26.error; }
                }
            }
            else {
                canResolve = false;
            }
            if (canResolve) {
                this.ux._normalizePins();
                this.ux.updateAll();
                this.ux._process();
                this.findAndAddListItems();
                this.ux.observe(this.onChanged.bind(this));
            }
            return canResolve;
        };
        ListView.prototype.resolveAndShow = function () {
            this.attach();
            return this.isAttached;
        };
        ListView.prototype.resolveAndAttach = function () {
            if (this.parent)
                this.parent.ux.root.innerHTML = this.ux.root.innerHTML;
            return true;
        };
        return ListView;
    }());
    exports.ListView = ListView;
    ;
    ;
    helpers_5.Mixin(ListView, initializable_3.Initializable, servicable_2.Servicable, observable_2.Observable, viewable_2.Viewable);
});
define("lib/core/models/list", ["require", "exports", "lib/helpers"], function (require, exports, helpers_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModelList = (function () {
        function ModelList(model, uri) {
            this.resolver = new helpers_6.Resolver();
            this.items = [];
            this.model = model;
            this.uri = uri;
        }
        ModelList.prototype.retrieve = function (cb) {
            this.resolver.get(this.uri, this.resolveRetrieved.bind(this, cb));
        };
        ModelList.prototype.resolveRetrieved = function (cb, response) {
            var parsed = JSON.parse(response.payload);
            this.update(parsed);
            this.onUpdate(parsed);
            if (cb)
                cb();
        };
        ModelList.prototype.update = function (items) {
            var e_27, _a;
            this.items = [];
            try {
                for (var _b = __values(Object.values(items)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    this.items.push(new this.model(new Map(Object.entries(item))));
                }
            }
            catch (e_27_1) { e_27 = { error: e_27_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_27) throw e_27.error; }
            }
        };
        ModelList.prototype.onUpdate = function (items) { };
        ModelList.prototype.extract = function () {
            return this.items.map(function (item) { return item.extract(); });
        };
        return ModelList;
    }());
    exports.ModelList = ModelList;
});
define("lib/core/models/fields/field", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModelField = (function () {
        function ModelField() {
        }
        ModelField.prototype.update = function (value) {
            this.value = value;
        };
        ModelField.prototype.validate = function (value) { return true; };
        ModelField.prototype.normalize = function (value) { return value; };
        ModelField.prototype.extract = function () { return this.value; };
        return ModelField;
    }());
    exports.ModelField = ModelField;
});
define("lib/core/models/model", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Model = (function () {
        function Model(input) {
            this.attributes = new Map();
            this.create();
            if (input)
                this.populate(input);
        }
        Model.prototype.create = function () { };
        Model.prototype.populate = function (input) {
            var _this = this;
            input.forEach(function (value, name) {
                _this.updateField(name, value);
            });
        };
        Model.prototype.updateField = function (name, value) {
            var field = this.attributes.get(name);
            if (field)
                field.update(value);
        };
        Model.prototype.extract = function () {
            var e_28, _a;
            var data = {};
            try {
                for (var _b = __values(this.attributes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var attr = _c.value;
                    data[attr[0]] = attr[1].extract();
                }
            }
            catch (e_28_1) { e_28 = { error: e_28_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_28) throw e_28.error; }
            }
            return data;
        };
        return Model;
    }());
    exports.Model = Model;
});
define("lib/core/models/fields/number.field", ["require", "exports", "lib/core/models/fields/field"], function (require, exports, field_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModelNumberField = (function (_super) {
        __extends(ModelNumberField, _super);
        function ModelNumberField(value) {
            if (value === void 0) { value = 0; }
            var _this = _super.call(this) || this;
            _this.value = _this.update(value);
            return _this;
        }
        ModelNumberField.prototype.update = function (value) {
            this.value = this.normalize(value);
            return this.value;
        };
        ModelNumberField.prototype.normalize = function (value) {
            return (typeof value === 'string') ? parseFloat(value) : value;
        };
        return ModelNumberField;
    }(field_1.ModelField));
    exports.ModelNumberField = ModelNumberField;
});
define("lib/core/models/fields/text.field", ["require", "exports", "lib/core/models/fields/field"], function (require, exports, field_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModelTextField = (function (_super) {
        __extends(ModelTextField, _super);
        function ModelTextField(value) {
            if (value === void 0) { value = ''; }
            var _this = _super.call(this) || this;
            _this.value = _this.update(value);
            return _this;
        }
        ModelTextField.prototype.update = function (value) {
            this.value = this.normalize(value);
            return this.value;
        };
        return ModelTextField;
    }(field_2.ModelField));
    exports.ModelTextField = ModelTextField;
});
define("lib/core", ["require", "exports", "lib/core/components/strappable", "lib/core/components/loadable", "lib/core/components/initializable", "lib/core/components/component", "lib/core/components/application", "lib/core/controllers/controller", "lib/core/components/viewable", "lib/core/components/view", "lib/core/components/view_list", "lib/core/models/model", "lib/core/models/list", "lib/core/models/fields/field", "lib/core/models/fields/number.field", "lib/core/models/fields/text.field"], function (require, exports, strappable_2, loadable_2, initializable_4, component_2, application_1, controller_1, viewable_3, view_2, view_list_1, model_1, list_1, field_3, number_field_1, text_field_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Strappable = strappable_2.Strappable;
    exports.Loadable = loadable_2.Loadable;
    exports.Initializable = initializable_4.Initializable;
    exports.BaseComponent = component_2.BaseComponent;
    exports.BaseApplication = application_1.BaseApplication;
    exports.Controller = controller_1.Controller;
    exports.Viewable = viewable_3.Viewable;
    exports.View = view_2.View;
    exports.ListView = view_list_1.ListView;
    exports.Model = model_1.Model;
    exports.ModelList = list_1.ModelList;
    exports.ModelField = field_3.ModelField;
    exports.ModelNumberField = number_field_1.ModelNumberField;
    exports.ModelTextField = text_field_1.ModelTextField;
});
define("lib/services/ux/uxevent", ["require", "exports", "lib/helpers/objects", "lib/services/ux/element.service"], function (require, exports, objects_2, element_service_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function UXEvent(el, opts) {
        if (opts === void 0) { opts = {}; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var defaults = {
            parent: null, test: null, event: undefined, name: '', isSelector: true, capture: false
        };
        var resolved = __assign(__assign({}, defaults), opts);
        return element_service_3.ElementsService.binder.bind(null, el, resolved.parent, resolved.test, resolved.event, resolved.name, resolved.isSelector, resolved.capture, objects_2.Objects.diff(opts, defaults));
    }
    exports.UXEvent = UXEvent;
    function UXFormFieldEvent(el, opts) {
        if (opts === void 0) { opts = {}; }
        var defaults = {
            parent: document, test: null, event: undefined, name: '', isSelector: true, capture: true
        };
        var resolved = __assign(__assign({}, defaults), opts);
        return element_service_3.ElementsService.binder.bind(null, el, resolved.parent, resolved.test, resolved.event, resolved.name, resolved.isSelector, resolved.capture, objects_2.Objects.diff(opts, defaults));
    }
    exports.UXFormFieldEvent = UXFormFieldEvent;
});
define("lib/services/ux/element.binder", ["require", "exports", "lib/services/binder"], function (require, exports, binder_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ElementsBinder = (function (_super) {
        __extends(ElementsBinder, _super);
        function ElementsBinder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ElementsBinder.prototype.bindProperty = function (origin, key, descriptor, resolver, el, parent, test, event, name, isSelector, capture, opts) {
            if (parent === void 0) { parent = null; }
            if (test === void 0) { test = null; }
            if (name === void 0) { name = ''; }
            if (isSelector === void 0) { isSelector = true; }
            if (capture === void 0) { capture = false; }
            if (opts === void 0) { opts = {}; }
            event = event || ((key.startsWith('on')) ? key.split(/(?=[A-Z])/)[1].toLowerCase() : key);
            var data = __assign({ el: el, parent: parent, event: event, isSelector: isSelector, method: key, test: test, resolver: resolver, capture: capture }, opts);
            return [descriptor, this.annotation(origin, data)];
        };
        ElementsBinder.prototype.processAnnotation = function (predicate, data) {
            if (predicate && data.resolver) {
                data.resolver(this, predicate, data);
            }
            else if (predicate && data.method) {
                var root = (data.parent) ? ((typeof data.parent === 'string') ? predicate.ux.els[data.parent] : data.parent) : predicate.ux.root;
                var fn_1 = predicate[data.method].bind(predicate);
                var test_1 = (data.test) ? predicate[data.test].bind(predicate) : null;
                if (root instanceof Document || root instanceof Window || (root.delegate)) {
                    if (test_1) {
                        root.addEventListener(data.event, function (e) {
                            (test_1(e)) ? fn_1(e) : false;
                        }, data.capture);
                    }
                    else {
                        if (data.el && data.el.startsWith('@') && !data.el.startsWith('@root')) {
                            var selector_1 = predicate.ux._normalizePin(data.el);
                            root.addEventListener(data.event, function (e) {
                                var closest = e.target.closest(selector_1);
                                return (e.target && closest) ? fn_1(e, closest) : false;
                            }, data.capture);
                        }
                        else {
                            root.addEventListener(data.event, function (e) {
                                return fn_1(e, e.target);
                            }, data.capture);
                        }
                    }
                }
            }
        };
        return ElementsBinder;
    }(binder_3.Binder));
    exports.ElementsBinder = ElementsBinder;
});
define("lib/services/ux/transition", ["require", "exports", "lib/services/ux/element.service"], function (require, exports, element_service_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Transition(name, root, options) {
        var _a;
        if (root === void 0) { root = null; }
        if (options === void 0) { options = {}; }
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = element_service_4.ElementsService.transitionsBinder).bind.apply(_a, __spread([name, root, options], args));
    }
    exports.Transition = Transition;
});
define("lib/services/ux/animations.binder", ["require", "exports", "lib/services/binder"], function (require, exports, binder_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TransitionsBinder = (function (_super) {
        __extends(TransitionsBinder, _super);
        function TransitionsBinder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TransitionsBinder.prototype.bindProperty = function (origin, key, descriptor, name, root, options) {
            if (root === void 0) { root = null; }
            if (options === void 0) { options = {}; }
            var data = {
                method: key,
                name: name,
                root: root,
                options: options
            };
            return [descriptor, this.annotation(origin, data)];
        };
        TransitionsBinder.prototype.processAnnotation = function (predicate, data) {
            var transition = predicate.view.ux.transition(data.name, predicate.com, data.options);
            if (!transition.length)
                predicate[data.method](transition);
        };
        return TransitionsBinder;
    }(binder_4.Binder));
    exports.TransitionsBinder = TransitionsBinder;
});
define("lib/services/ux/element.service", ["require", "exports", "lib/services/service", "lib/services/ux/service/elements/base", "lib/services/ux/element.binder", "lib/helpers/common", "lib/services/ux/service/animations/transition", "lib/services/ux/animations.binder"], function (require, exports, service_3, base_1, element_binder_1, common_2, transition_1, animations_binder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ElementsService = (function (_super) {
        __extends(ElementsService, _super);
        function ElementsService(provider, root, isFixedRoot) {
            if (isFixedRoot === void 0) { isFixedRoot = false; }
            var _this = _super.call(this) || this;
            _this.provider = provider;
            _this.isFixedRoot = isFixedRoot;
            _this._els = {};
            _this._observers = {};
            if (root)
                _this.updateRoot(root, true);
            return _this;
        }
        Object.defineProperty(ElementsService.prototype, "pins", {
            get: function () { return this.provider.pins; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ElementsService.prototype, "els", {
            get: function () { return this._els; },
            set: function (list) { this._els = list; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ElementsService.prototype, "transitions", {
            get: function () { return ElementsService._transitions; },
            set: function (list) { ElementsService._transitions = list; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ElementsService.prototype, "root", {
            get: function () { return this._root; },
            set: function (el) { this._root = el; },
            enumerable: true,
            configurable: true
        });
        ElementsService.prototype.create = function (tmpl, provider) {
            var temp = document.createElement('div');
            temp.innerHTML = tmpl.trim();
            return new base_1.BaseElement(temp.firstChild, null, provider);
        };
        ElementsService.prototype.createFrom = function (el, provider) {
            return new base_1.BaseElement(el, null, provider);
        };
        ElementsService.prototype.pin = function (name, resolve) {
            if (resolve === void 0) { resolve = false; }
            return (typeof this.pins[name] === 'string' || !resolve) ? this.pins[name] : this.pins[name]();
        };
        ElementsService.prototype.observe = function (fn, name, options) {
            options = options || { childList: true };
            var target = (name && this.el(name) && this.el(name).delegate) || this.root.delegate;
            this._observers[name || 'root'] = new MutationObserver(fn);
            this._observers[name || 'root'].observe(target, options);
        };
        ElementsService.prototype.el = function (name, update) {
            if (update === void 0) { update = true; }
            if (update)
                this.update(name);
            return this.els[name].first;
        };
        ElementsService.prototype.list = function (name, update) {
            if (update === void 0) { update = true; }
            if (update)
                this.update(name);
            return this.els[name];
        };
        ElementsService.prototype.update = function (name, el) {
            this.els[name] = (el) ? el : this._getEl(name);
        };
        ElementsService.prototype.updateRoot = function (el, forced) {
            if (forced === void 0) { forced = false; }
            if (!this.isFixedRoot || forced)
                this.root = (el) ? el : this._getRoot();
        };
        ElementsService.prototype.updateAll = function () {
            this.updateRoot();
            this.els = __assign({}, this._getEls());
        };
        ElementsService.prototype.transition = function (name, root, options) {
            if (options === void 0) { options = {}; }
            var transition;
            if (name) {
                transition = this.transitions[name] = this.transitions[name] || new transition_1.BaseTransition(name, root, options);
            }
            else {
                transition = new transition_1.BaseTransition();
            }
            return transition;
        };
        ElementsService.prototype._getEls = function () {
            var e_29, _a;
            var els = {};
            try {
                for (var _b = __values(Object.keys(this.pins || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name_2 = _c.value;
                    els[name_2] = this._getEl(name_2);
                }
            }
            catch (e_29_1) { e_29 = { error: e_29_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_29) throw e_29.error; }
            }
            return els;
        };
        ElementsService.prototype._getEl = function (name) {
            var el;
            if (typeof this.pins[name] === 'string') {
                el = new base_1.BaseElementList(this.pins[name], this.root, this.provider);
            }
            else {
                el = this.pins[name]();
            }
            return el;
        };
        ElementsService.prototype._getRoot = function (selector) {
            var _a, _b;
            selector = selector || this.provider.selector;
            common_2.assert(selector === '', "Selector not set for: " + this.provider.name);
            var base = document;
            if (this.provider.parent) {
                base = this.provider.parent.ux.root;
            }
            if ((_b = (_a = this.provider.templates) === null || _a === void 0 ? void 0 : _a.tmpl) === null || _b === void 0 ? void 0 : _b._tmpl) {
                var fragment = new base_1.BaseElement(document.createDocumentFragment(), null, this.provider);
                var el = this.create(this.provider.templates.tmpl.process());
                el.appendTo(fragment);
                if ((new base_1.BaseElement(selector, fragment, this.provider)).delegate)
                    base = fragment;
            }
            base = new base_1.BaseElement(selector, base, this);
            return base;
        };
        ElementsService.prototype._extractFactoryChildPins = function (clean) {
            var e_30, _a;
            if (clean === void 0) { clean = true; }
            var targets = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                targets[_i - 1] = arguments[_i];
            }
            var extracted = {};
            targets.forEach(function (childName) { return extracted[childName] = {}; });
            try {
                for (var _b = __values(Object.keys(this.pins)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name_3 = _c.value;
                    var pin = this.pins[name_3];
                    if (name_3.startsWith('%')) {
                        var rBoundary = (name_3.indexOf(' ') >= 0) ? name_3.indexOf(' ') - 1 : pin.length;
                        var childName = name_3.substr(1, rBoundary);
                        if (targets.includes(childName)) {
                            extracted[childName][name_3.substr(2 + childName.length)] = pin;
                            if (clean)
                                delete this.pins[name_3];
                        }
                    }
                }
            }
            catch (e_30_1) { e_30 = { error: e_30_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_30) throw e_30.error; }
            }
            return extracted;
        };
        ElementsService.prototype._normalizePins = function () {
            var e_31, _a;
            try {
                for (var _b = __values(Object.keys(this.pins || {})), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name_4 = _c.value;
                    var pin = this.pins[name_4];
                    if (typeof pin === 'string' && (pin.startsWith('@') || pin.startsWith('%'))) {
                        this.pins[name_4] = this._normalizePin(pin);
                    }
                }
            }
            catch (e_31_1) { e_31 = { error: e_31_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_31) throw e_31.error; }
            }
        };
        ElementsService.prototype._normalizePin = function (pin, depth) {
            if (depth === void 0) { depth = 0; }
            var normalized = pin;
            if (pin.startsWith('%')) {
                normalized = this._normalizeViewPin(pin, depth);
            }
            else if (pin.startsWith('@')) {
                normalized = this._expandStandardPin(pin, depth);
            }
            return normalized;
        };
        ElementsService.prototype._normalizeViewPin = function (pin, depth) {
            var _this = this;
            if (depth === void 0) { depth = 0; }
            return function () {
                var rBoundary = (pin.indexOf(' ') >= 0) ? pin.indexOf(' ') - 1 : pin.length;
                var name = pin.substr(1, rBoundary);
                var view = _this.provider.child(name);
                view.compile();
                return (view) ? new base_1.BaseElementList([view.ux.root.delegate], view.ux.root, _this) : null;
            };
        };
        ElementsService.prototype._expandViewPin = function (pin, depth) {
            if (depth === void 0) { depth = 0; }
            var rBoundary = (pin.indexOf(' ') >= 0) ? pin.indexOf(' ') - 1 : pin.length;
            var name = pin.substr(1, rBoundary);
            var child = this.provider.child(name);
            var tail = (pin.indexOf(' ') >= 0) ? pin.split(' ', 2)[1] : '';
            return child.selector + " " + tail;
        };
        ElementsService.prototype._expandStandardPin = function (pin, depth) {
            if (depth === void 0) { depth = 0; }
            var rBoundary = (pin.indexOf(' ') >= 0) ? pin.indexOf(' ') - 1 : pin.length;
            var name = pin.substr(1, rBoundary);
            if (!this.provider._children[name]) {
                var head = this.pins[name] || '';
                var tail = (pin.indexOf(' ') >= 0) ? pin.split(' ', 2)[1] : '';
                var selector = (head + " " + tail).trim();
                return (selector.startsWith('@') && !depth) ? this._expandStandardPin(selector, depth + 1) : selector;
            }
            else {
                return this._expandViewPin(pin, depth);
            }
        };
        ElementsService.prototype._process = function () {
            ElementsService.binder.process(this.provider);
            if (this.provider.com)
                ElementsService.transitionsBinder.process(this.provider.com);
        };
        ElementsService._transitions = {};
        ElementsService.binder = new element_binder_1.ElementsBinder();
        ElementsService.transitionsBinder = new animations_binder_1.TransitionsBinder();
        return ElementsService;
    }(service_3.Service));
    exports.ElementsService = ElementsService;
});
define("lib/core/components/viewable", ["require", "exports", "lib/core/components/initializable", "lib/services/servicable", "lib/core/components/observable", "lib/helpers"], function (require, exports, initializable_5, servicable_3, observable_3, helpers_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Viewable = (function () {
        function Viewable() {
            this.annotations = new Map();
            this.name = '';
            this.selector = 'body';
            this.pins = {};
            this._children = {};
            this._services = {};
            this.showOnInitialize = false;
            this.hideOnInitialize = false;
            this.isShown = false;
            this.isHidden = false;
            this.isAttached = false;
            this.isAttaching = false;
            this.hasBeenShown = false;
            this.hasBeenHidden = false;
            this.hasBeenAttached = false;
            this.hasBeenDetached = false;
        }
        Object.defineProperty(Viewable.prototype, "hasTemplate", {
            get: function () { var _a; return (((_a = this.tmpl) === null || _a === void 0 ? void 0 : _a._tmpl) !== (undefined || null)); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Viewable.prototype, "parent", {
            get: function () { return this._parent; },
            set: function (parent) { this._parent = parent; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Viewable.prototype, "ux", {
            get: function () { return this._ux; },
            set: function (service) { this._ux = service; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Viewable.prototype, "signals", {
            get: function () { return this._signals; },
            set: function (service) { this._signals = service; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Viewable.prototype, "templates", {
            get: function () { return this._templates; },
            set: function (service) { this._templates = service; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Viewable.prototype, "tmpl", {
            get: function () { var _a; return (_a = this._templates) === null || _a === void 0 ? void 0 : _a._tmpl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Viewable.prototype, "canBeShown", {
            get: function () { return !this.isShown; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Viewable.prototype, "canBeHidden", {
            get: function () { return !this.isHidden; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Viewable.prototype, "canBeAttached", {
            get: function () { return !this.isAttached; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Viewable.prototype, "canInitializeChildren", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Viewable.prototype.discoverChildViews = function () {
            var _this = this;
            Object.getOwnPropertyNames(this).forEach(function (name) {
                if (name !== '_parent') {
                    var property = Object.getOwnPropertyDescriptor(_this, name);
                    if (property && property.value && property.value.__MRO__ && property.value.__MRO__.includes(Viewable)) {
                        _this.addChildView(name, property.value);
                    }
                }
            });
        };
        Viewable.prototype.child = function (name) {
            return this._children[name];
        };
        Viewable.prototype.addChildView = function (name, view) {
            this._children[name] = view;
            view.parent = this;
        };
        Viewable.prototype.initializeChild = function (child) {
            if (!child.isInitialized && !child.isInitializing)
                child.init();
            if (!child.isInitialized)
                child.signals.once('view:init:after', this.resolveInitializedChild.bind(this, child));
            return child.isInitialized;
        };
        Viewable.prototype.resolveInitializedChild = function (child) {
            var canLoad = Object.values(this._children).every(function (child) { return child.isInitialized; });
            if (canLoad)
                this.init();
        };
        Viewable.prototype.resolveLoadedTemplate = function (request) {
            if (!this.templates.tmpl.pending)
                this.init();
        };
        Viewable.prototype.show = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.canBeShown) {
                if (!this.isShown && !this.hasBeenShown)
                    this.onBeforeInitialShow();
                if (!this.isShown)
                    this.onBeforeShow();
                if (this.resolveAndShow()) {
                    this.isShown = true;
                    this.isHidden = false;
                    this.onShow.apply(this, __spread(args));
                    if (!this.hasBeenShown)
                        this.onInitialShow();
                    if (this.isShown && !this.hasBeenShown)
                        this.onAfterInitialShow();
                    if (this.isShown)
                        this.onAfterShow();
                    this.hasBeenShown = true;
                }
            }
        };
        Viewable.prototype.resolveAndShow = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return true;
        };
        Viewable.prototype.onInitialShow = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.onBeforeInitialShow = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.onAfterInitialShow = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.onShow = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        ;
        Viewable.prototype.onBeforeShow = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.onAfterShow = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.hide = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.canBeHidden) {
                if (!this.isHidden && !this.hasBeenHidden)
                    this.onBeforeInitialHide();
                if (!this.isHidden)
                    this.onBeforeHide();
                if (this.resolveAndHide()) {
                    this.isHidden = true;
                    this.isShown = false;
                    this.onHide.apply(this, __spread(args));
                    if (!this.hasBeenHidden)
                        this.onInitialHide();
                    if (this.isHidden && !this.hasBeenHidden)
                        this.onAfterInitialHide();
                    if (this.isHidden)
                        this.onAfterHide();
                    this.hasBeenHidden = true;
                }
            }
        };
        Viewable.prototype.resolveAndHide = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return true;
        };
        Viewable.prototype.onInitialHide = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.onBeforeInitialHide = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.onAfterInitialHide = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.onHide = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        ;
        Viewable.prototype.onBeforeHide = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.onAfterHide = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        Viewable.prototype.attach = function () {
            if (this.canBeAttached) {
                this.isAttaching = true;
                if (!this.isAttached && !this.hasBeenAttached)
                    this.onBeforeInitialAttach();
                if (!this.isAttached)
                    this.onBeforeAttach();
                if (this.resolveAndAttach()) {
                    this.isAttached = true;
                    this.isAttaching = false;
                    this.onAttach();
                    if (!this.hasBeenAttached)
                        this.onInitialAttach();
                    if (this.isAttached && !this.hasBeenAttached)
                        this.onAfterInitialAttach();
                    if (this.isAttached)
                        this.onAfterAttach();
                    this.hasBeenAttached = true;
                }
            }
        };
        Viewable.prototype.resolveAndAttach = function () {
            return true;
        };
        Viewable.prototype.onInitialAttach = function () { };
        Viewable.prototype.onBeforeInitialAttach = function () { };
        Viewable.prototype.onAfterInitialAttach = function () { };
        Viewable.prototype.onAttach = function () { };
        ;
        Viewable.prototype.onBeforeAttach = function () { };
        Viewable.prototype.onAfterAttach = function () { };
        Viewable.prototype.compile = function () {
            this.ux.updateAll();
            this.ux._process();
            this.onBeforeCompile();
            this.onCompile();
            this.onAfterCompile();
        };
        Viewable.prototype.onCompile = function () { };
        Viewable.prototype.onBeforeCompile = function () { };
        Viewable.prototype.onAfterCompile = function () { };
        return Viewable;
    }());
    exports.Viewable = Viewable;
    ;
    helpers_7.Mixin(Viewable, initializable_5.Initializable, servicable_3.Servicable, observable_3.Observable);
});
define("lib/services/routing/route", ["require", "exports", "lib/services/routing/routing.service"], function (require, exports, routing_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Route(pattern, transition) {
        var _a;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return (_a = routing_service_1.RoutingService.binder).bind.apply(_a, __spread([pattern, transition], args));
    }
    exports.Route = Route;
});
define("lib/services/routing/service/validator", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Validator = (function () {
        function Validator(name, fn, converter) {
            this.name = name;
            this.fn = fn;
            this.converter = converter;
        }
        Validator.prototype.test = function (predicate) {
            return this.fn(predicate);
        };
        Validator.prototype.convert = function (predicate) {
            return (this.converter) ? this.converter(predicate) : predicate;
        };
        return Validator;
    }());
    exports.Validator = Validator;
});
define("lib/services/routing/service/route", ["require", "exports", "lib/core/components/component"], function (require, exports, component_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseRoute = (function () {
        function BaseRoute(provider, route) {
            this.pattern = route.pattern;
            this.regex = route.regex || new RegExp('');
            this.fn = function () { };
            this.tests = route.tests || [];
            this.name = route.name || this.resolveName();
            this.provider = provider;
        }
        Object.defineProperty(BaseRoute.prototype, "provider", {
            get: function () { return this._provider; },
            set: function (provider) { this._provider = provider; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseRoute.prototype, "router", {
            get: function () { return this.provider.router; },
            enumerable: true,
            configurable: true
        });
        BaseRoute.prototype.resolveName = function () { return null; };
        BaseRoute.prototype.validate = function (compare) {
            var _a;
            var isValid = false;
            var tests = [];
            if (this.regex.test(compare)) {
                var matches = this.getMatches(compare);
                var value = '';
                isValid = true;
                if (this.tests.length) {
                    for (var m in matches) {
                        _a = __read(this.validateTest(matches[m], this.tests[m]), 2), isValid = _a[0], value = _a[1];
                        tests.push(value);
                        if (!isValid)
                            break;
                    }
                }
            }
            return [isValid, tests];
        };
        BaseRoute.prototype.getMatches = function (predicate) { return predicate.match(this.regex).slice(1); };
        BaseRoute.prototype.validateTest = function (predicate, test) {
            var validator = this.router.validators[test];
            var result = (validator) ? validator.test(predicate) : false;
            var converted = (result) ? validator.convert(predicate) : null;
            return [result, converted];
        };
        return BaseRoute;
    }());
    exports.BaseRoute = BaseRoute;
    var MatchedRoute = (function () {
        function MatchedRoute(route, args) {
            this.args = [];
            this.route = route;
            this.args = args;
        }
        Object.defineProperty(MatchedRoute.prototype, "provider", {
            get: function () { return this.route.provider; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MatchedRoute.prototype, "router", {
            get: function () { return this.route.router; },
            enumerable: true,
            configurable: true
        });
        MatchedRoute.prototype.call = function () {
            var _a;
            if (this.route.fn !== null)
                return (_a = this.route).fn.apply(_a, __spread(this.args));
        };
        return MatchedRoute;
    }());
    exports.MatchedRoute = MatchedRoute;
    var DeferredRoute = (function (_super) {
        __extends(DeferredRoute, _super);
        function DeferredRoute(predicate, route, path) {
            var _this = _super.call(this, predicate, route) || this;
            _this.path = path;
            _this.fn = _this.resolveFn();
            return _this;
        }
        DeferredRoute.prototype.resolveName = function () {
            return null;
        };
        DeferredRoute.prototype.resolveFn = function () {
            var _this = this;
            return function () { return __awaiter(_this, void 0, void 0, function () {
                var imported, coms, _loop_2, this_1, coms_1, coms_1_1, cls;
                var e_32, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4, new Promise(function (resolve_1, reject_1) { require([_this.path], resolve_1, reject_1); }).then(__importStar)];
                        case 1:
                            imported = _b.sent();
                            if (this.path.endsWith('.com')) {
                                coms = this.discoverImportComponents(imported);
                                _loop_2 = function (cls) {
                                    var com = new cls();
                                    if (this_1.provider instanceof component_3.BaseComponent)
                                        com.parent = this_1.provider;
                                    com.init();
                                    if (!com.isInitialized) {
                                        com.signals.once('com:init:after', function () { com.router.update(); });
                                    }
                                    else {
                                        com.router.update();
                                    }
                                };
                                this_1 = this;
                                try {
                                    for (coms_1 = __values(coms), coms_1_1 = coms_1.next(); !coms_1_1.done; coms_1_1 = coms_1.next()) {
                                        cls = coms_1_1.value;
                                        _loop_2(cls);
                                    }
                                }
                                catch (e_32_1) { e_32 = { error: e_32_1 }; }
                                finally {
                                    try {
                                        if (coms_1_1 && !coms_1_1.done && (_a = coms_1.return)) _a.call(coms_1);
                                    }
                                    finally { if (e_32) throw e_32.error; }
                                }
                            }
                            return [2];
                    }
                });
            }); };
        };
        DeferredRoute.prototype.discoverImportComponents = function (imported) {
            var coms = [];
            Object.getOwnPropertyNames(imported).forEach(function (name) {
                var _a, _b;
                var property = Object.getOwnPropertyDescriptor(imported, name);
                if (((_b = (_a = property) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.prototype) && (property.value.prototype instanceof component_3.BaseComponent))
                    coms.push(property.value);
            });
            return coms;
        };
        return DeferredRoute;
    }(BaseRoute));
    exports.DeferredRoute = DeferredRoute;
    var LoadedRoute = (function (_super) {
        __extends(LoadedRoute, _super);
        function LoadedRoute(provider, route) {
            var _this = _super.call(this, provider, route) || this;
            if (route.method) {
                _this.fn = provider[route.method].bind(provider);
            }
            else {
                _this.fn = function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (route.transition) {
                        provider.view.ux.transition(route.transition).run(provider.view);
                    }
                    else {
                        (_a = provider.view).show.apply(_a, __spread(args));
                    }
                };
            }
            return _this;
        }
        return LoadedRoute;
    }(BaseRoute));
    exports.LoadedRoute = LoadedRoute;
});
define("lib/services/routing/routing.binder", ["require", "exports", "lib/services/binder"], function (require, exports, binder_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RoutingBinder = (function (_super) {
        __extends(RoutingBinder, _super);
        function RoutingBinder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RoutingBinder.prototype.bindCls = function (origin, pattern, transition) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var data = {
                pattern: pattern,
                transition: transition,
                method: null
            };
            return [origin, this.annotation(origin, data)];
        };
        RoutingBinder.prototype.bindProperty = function (origin, key, descriptor, pattern, transition) {
            var args = [];
            for (var _i = 5; _i < arguments.length; _i++) {
                args[_i - 5] = arguments[_i];
            }
            var data = {
                pattern: pattern,
                transition: transition,
                method: key
            };
            return [descriptor, this.annotation(origin, data)];
        };
        RoutingBinder.prototype.processAnnotation = function (predicate, data) {
            predicate.router.createRoute(predicate, data);
        };
        return RoutingBinder;
    }(binder_5.Binder));
    exports.RoutingBinder = RoutingBinder;
});
define("lib/services/routing/routing.service", ["require", "exports", "lib/services/service", "lib/services/routing/service/route", "lib/services/routing/service/validator", "lib/services/routing/routing.binder", "lib/helpers/common", "lib/helpers/requests/resolver"], function (require, exports, service_4, route_1, validator_1, routing_binder_1, common_3, resolver_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RoutingService = (function (_super) {
        __extends(RoutingService, _super);
        function RoutingService(provider) {
            var _this = _super.call(this) || this;
            _this.provider = provider;
            _this.routes = {};
            _this.named = {};
            _this.validators = {
                'num': new validator_1.Validator('num', function (predicate) { return (Number(predicate) != NaN) ? true : false; }, function (predicate) { return Number(predicate); }),
                'str': new validator_1.Validator('str', function (predicate) { return typeof predicate == 'string'; })
            };
            if (_this.provider.parent)
                _this.routes = _this.provider.parent.router.routes;
            return _this;
        }
        Object.defineProperty(RoutingService.prototype, "history", {
            get: function () { return window.history; },
            enumerable: true,
            configurable: true
        });
        RoutingService.prototype.createRoute = function (predicate, options) {
            var route;
            var params = (typeof options === 'string') ? { 'pattern': options } : options;
            if (!params.regex) {
                var _a = __read(this._resolvePattern(params.pattern), 2), regex = _a[0], tests = _a[1];
                params.regex = regex;
                params.tests = tests;
            }
            if (typeof predicate === 'string') {
                route = this.routes[params.pattern] = new route_1.DeferredRoute(this.provider, params, predicate);
            }
            else {
                route = this.routes[params.pattern] = new route_1.LoadedRoute(predicate, params);
            }
            if (params.name || route.name)
                this.named[(params.name || route.name)] = route;
        };
        RoutingService.prototype.changeURI = function (uri, update) {
            if (update === void 0) { update = true; }
            this.history.pushState({}, '', uri);
            if (update)
                this.update();
        };
        RoutingService.prototype.update = function () {
            var route = this.matchRoute(this.path);
            if (route)
                route.call();
        };
        RoutingService.prototype.matchRoute = function (path) {
            var e_33, _a;
            try {
                for (var _b = __values(Object.values(this.routes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var route = _c.value;
                    var _d = __read(route.validate(path), 2), validated = _d[0], values = _d[1];
                    if (validated)
                        return new route_1.MatchedRoute(route, values);
                }
            }
            catch (e_33_1) { e_33 = { error: e_33_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_33) throw e_33.error; }
            }
        };
        RoutingService.prototype._resolvePattern = function (pattern) {
            var e_34, _a;
            var matches = pattern.match(/{([^}]+)}/g) || [];
            var tests = [];
            try {
                for (var matches_1 = __values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                    var match = matches_1_1.value;
                    var test = match.split(':')[1];
                    tests.push(test.substr(0, test.length - 1));
                    pattern = pattern.replace(match, '(.+)');
                }
            }
            catch (e_34_1) { e_34 = { error: e_34_1 }; }
            finally {
                try {
                    if (matches_1_1 && !matches_1_1.done && (_a = matches_1.return)) _a.call(matches_1);
                }
                finally { if (e_34) throw e_34.error; }
            }
            if (!matches.length)
                pattern = "^" + pattern + "$";
            pattern = pattern.replace('**', '(.+)?');
            var regex = new RegExp(pattern);
            return [regex, tests];
        };
        RoutingService.prototype._process = function (predicate, update) {
            if (update === void 0) { update = false; }
            RoutingService.binder.process(predicate || this.provider);
            if (update)
                this.update();
        };
        RoutingService.binder = new routing_binder_1.RoutingBinder();
        return RoutingService;
    }(service_4.Service));
    exports.RoutingService = RoutingService;
    ;
    ;
    common_3.Mixin(RoutingService, resolver_3.Resolver);
});
define("lib/core/components/component", ["require", "exports", "lib/core/components/initializable", "lib/services/servicable", "lib/services/routing/routing.service", "lib/helpers", "lib/helpers/common", "lib/services/signals/signals.service"], function (require, exports, initializable_6, servicable_4, routing_service_2, helpers_8, common_4, signals_service_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseComponent = (function () {
        function BaseComponent() {
            this.name = 'com';
            this._children = {};
        }
        Object.defineProperty(BaseComponent.prototype, "parent", {
            get: function () { return this._parent; },
            set: function (parent) {
                this.router = parent.router;
                this._parent = parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseComponent.prototype, "view", {
            get: function () { return this._view; },
            set: function (view) { this._view = view; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseComponent.prototype, "cont", {
            get: function () { return this._cont; },
            set: function (cont) { this._cont = cont; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseComponent.prototype, "router", {
            get: function () { return this._router; },
            set: function (service) { this._router = service; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseComponent.prototype, "signals", {
            get: function () { return this._signals; },
            set: function (service) { this._signals = service; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseComponent.prototype, "canInitializeChildren", {
            get: function () {
                return this.isStrapped;
            },
            enumerable: true,
            configurable: true
        });
        BaseComponent.prototype.discoverChildComponents = function () {
            var _this = this;
            Object.getOwnPropertyNames(this).forEach(function (name) {
                var _a;
                if (name !== '_parent') {
                    var property = Object.getOwnPropertyDescriptor(_this, name);
                    if (((_a = property) === null || _a === void 0 ? void 0 : _a.value) && (property.value instanceof BaseComponent))
                        _this.addChildComponent(name, property.value);
                }
            });
        };
        BaseComponent.prototype.init = function () {
            (initializable_6.Initializable.prototype.init).bind(this)();
            if (this.isInitialized)
                this.signals.op('com:init');
        };
        BaseComponent.prototype.strap = function () {
            (initializable_6.Initializable.prototype.strap).bind(this)();
            if (this.isStrapped)
                this.signals.op('com:strap');
        };
        BaseComponent.prototype.load = function () {
            (initializable_6.Initializable.prototype.load).bind(this)();
            if (this.isLoaded)
                this.signals.op('com:load');
        };
        BaseComponent.prototype.resolveAndStrap = function () {
            var canResolve = true;
            common_4.assert(!this.view, 'A base view was not bound to the component');
            this.discoverChildComponents();
            if (!this.router)
                this.router = new routing_service_2.RoutingService(this);
            this.signals = new signals_service_4.SignalsService(this.view);
            if (typeof this.cont === 'function')
                this.cont = new this._cont();
            return canResolve;
        };
        BaseComponent.prototype.resolveAndLoad = function () {
            var e_35, _a;
            var canResolve = true;
            if (typeof this.view === 'function') {
                this.view = new this._view();
                this.view.com = this;
                this.view.init();
                if (!this.view.isInitialized) {
                    this.view.signals.once('view:init:after', this.resolveInitializedView.bind(this, this.view));
                    canResolve = false;
                }
            }
            if (canResolve && this.canInitializeChildren) {
                try {
                    for (var _b = __values(Object.values(this._children)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        if (!this.initializeChild(child))
                            canResolve = false;
                    }
                }
                catch (e_35_1) { e_35 = { error: e_35_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_35) throw e_35.error; }
                }
            }
            else {
                canResolve = false;
            }
            if (canResolve) {
                this.router._process(this);
            }
            return canResolve;
        };
        BaseComponent.prototype.resolveInitializedView = function (view) {
            var canLoad = (view === this.view) && this.view.isInitialized;
            view.ux.updateAll();
            view.ux._process();
            if (canLoad)
                this.init();
        };
        BaseComponent.prototype.child = function (name) {
            return this._children[name];
        };
        BaseComponent.prototype.addChildComponent = function (name, child) {
            this._children[name] = child;
            child.parent = this;
        };
        BaseComponent.prototype.initializeChild = function (child) {
            if (!child.isInitialized && !child.isInitializing)
                child.init();
            if (!child.isInitialized)
                child.view.signals.once('com:init:after', this.resolveInitializedChild.bind(this, child));
            return child.isInitialized;
        };
        BaseComponent.prototype.resolveInitializedChild = function (child) {
            var canLoad = Object.values(this._children).every(function (child) { return child.isInitialized; });
            if (canLoad)
                this.init();
        };
        return BaseComponent;
    }());
    exports.BaseComponent = BaseComponent;
    ;
    ;
    helpers_8.Mixin(BaseComponent, initializable_6.Initializable, servicable_4.Servicable);
});
define("lib/services/ux/service/animations/transition", ["require", "exports", "lib/services/ux/service/animations/step"], function (require, exports, step_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseTransition = (function () {
        function BaseTransition(name, root, options) {
            if (options === void 0) { options = {}; }
            this.options = {};
            this.args = null;
            this.sequence = {};
            this.processing = null;
            if (name)
                this.name = name;
            if (root)
                this._root = root;
            this.options = __assign({}, options);
        }
        Object.defineProperty(BaseTransition.prototype, "root", {
            get: function () { return this._root; },
            set: function (root) { this._root = root; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseTransition.prototype, "isProcessing", {
            get: function () { return (this.processing) ? true : false; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseTransition.prototype, "length", {
            get: function () { return Object.keys(this.sequence).length; },
            enumerable: true,
            configurable: true
        });
        BaseTransition.prototype.iterable = function () {
            var _a, _b, step, e_36_1;
            var e_36, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(Object.values(this.sequence)), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3, 4];
                        step = _b.value;
                        return [4, step];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5:
                        e_36_1 = _d.sent();
                        e_36 = { error: e_36_1 };
                        return [3, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_36) throw e_36.error; }
                        return [7];
                    case 7: return [2];
                }
            });
        };
        BaseTransition.prototype.first = function () {
            if (!this.processing)
                this.processing = this.iterable();
            var step = this.processing.next().value;
            return step;
        };
        BaseTransition.prototype.next = function (previous) {
            var step = (this.processing) ? this.processing.next().value : null;
            if (step) {
                step.start.apply(step, __spread([previous], (this.args || [])));
            }
            else {
                this.processing = null;
            }
        };
        BaseTransition.prototype.add = function (name) {
            var step = new step_1.TransitionStep(this, name);
            this.sequence[step.name] = step;
            return step;
        };
        BaseTransition.prototype.parallel = function (name) {
            var step = ((name) ? this.sequence[name] : this.sequence[Object.keys(this.sequence)[this.length - 1]]);
            return step;
        };
        BaseTransition.prototype.run = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.isProcessing) {
                this.args = (args.length) ? args : null;
                var step = this.first();
                step.start.apply(step, __spread([undefined], args));
            }
        };
        return BaseTransition;
    }());
    exports.BaseTransition = BaseTransition;
});
define("lib/services/signals/service/broadcast", ["require", "exports", "lib/helpers"], function (require, exports, helpers_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Broadcast = (function () {
        function Broadcast(radio, input, source) {
            var _a, e_37, _b;
            if (input === void 0) { input = ''; }
            this.before = new Map();
            this.after = new Map();
            this.radio = radio;
            this.input = input;
            this.source = source || radio.source;
            var components = this._resolveSourceComponents(this.source);
            this.spectrum = this._resolveSpectrum(components[0]);
            this.frequency = this._resolveFrequency(components[1], this.spectrum);
            _a = __read(this._resolveChannelsAndReceivers(components[2], this.frequency), 2), this.channels = _a[0], this.receivers = _a[1];
            this.bands = this._resolveFrequencyBands(this.frequency.bandName);
            this.signatures = __spread(components[3]);
            try {
                for (var _c = __values(['before', 'after']), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var hook = _d.value;
                    if (![':before', ':after'].find(function (v) { return input.endsWith(v); }))
                        this[hook] = this._resolveReceivers(this.channels, this.input + ":" + hook);
                }
            }
            catch (e_37_1) { e_37 = { error: e_37_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_37) throw e_37.error; }
            }
        }
        Object.defineProperty(Broadcast.prototype, "hasRepeatersBefore", {
            get: function () {
                var result = false;
                this.before.forEach(function (receivers) {
                    var e_38, _a;
                    try {
                        for (var receivers_4 = __values(receivers), receivers_4_1 = receivers_4.next(); !receivers_4_1.done; receivers_4_1 = receivers_4.next()) {
                            var receiver = receivers_4_1.value;
                            if (Object.keys(receiver.repeaters).length)
                                result = true;
                        }
                    }
                    catch (e_38_1) { e_38 = { error: e_38_1 }; }
                    finally {
                        try {
                            if (receivers_4_1 && !receivers_4_1.done && (_a = receivers_4.return)) _a.call(receivers_4);
                        }
                        finally { if (e_38) throw e_38.error; }
                    }
                });
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Broadcast.prototype, "hasRepeatersAfter", {
            get: function () {
                var result = false;
                this.after.forEach(function (receivers) {
                    var e_39, _a;
                    try {
                        for (var receivers_5 = __values(receivers), receivers_5_1 = receivers_5.next(); !receivers_5_1.done; receivers_5_1 = receivers_5.next()) {
                            var receiver = receivers_5_1.value;
                            if (Object.keys(receiver.repeaters).length)
                                result = true;
                        }
                    }
                    catch (e_39_1) { e_39 = { error: e_39_1 }; }
                    finally {
                        try {
                            if (receivers_5_1 && !receivers_5_1.done && (_a = receivers_5.return)) _a.call(receivers_5);
                        }
                        finally { if (e_39) throw e_39.error; }
                    }
                });
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Broadcast.prototype._resolveSpectrum = function (name) {
            var spectrum = this.radio.spectrums[name];
            if (!spectrum)
                spectrum = this.radio.spectrums[name] = this.radio.registerSpectrum(name);
            return spectrum;
        };
        Broadcast.prototype._resolveFrequency = function (bands, spectrum) {
            var e_40, _a;
            bands = (bands.length) ? bands : this.bands;
            spectrum = spectrum || this.spectrum;
            var frequency;
            var parent;
            if (bands.length > 1) {
                frequency = this.spectrum.frequencies[bands[bands.length - 1]];
                if (frequency == null) {
                    try {
                        for (var bands_1 = __values(bands), bands_1_1 = bands_1.next(); !bands_1_1.done; bands_1_1 = bands_1.next()) {
                            var band = bands_1_1.value;
                            var name_5 = band.split(':').pop();
                            frequency = spectrum.frequencies[band];
                            parent = (band.split(':').length > 1) ? spectrum.frequencies[band.split(':').slice(0, -1).join(':')] : this.frequency;
                            if (!frequency)
                                frequency = spectrum.frequencies[band] = spectrum.registerFrequency(name_5, parent);
                        }
                    }
                    catch (e_40_1) { e_40 = { error: e_40_1 }; }
                    finally {
                        try {
                            if (bands_1_1 && !bands_1_1.done && (_a = bands_1.return)) _a.call(bands_1);
                        }
                        finally { if (e_40) throw e_40.error; }
                    }
                }
            }
            else {
                var name_6 = bands[bands.length - 1];
                frequency = spectrum.frequencies[name_6];
                if (!frequency)
                    frequency = spectrum.frequencies[name_6] = spectrum.registerFrequency(name_6, this.frequency);
            }
            return frequency;
        };
        Broadcast.prototype._resolveReceivers = function (channels, input) {
            var e_41, _a;
            var opNames = (input || this.input).split(' ');
            var receivers = new Map();
            var _loop_3 = function (channel) {
                receivers.set(channel, opNames.map(function (name) { return channel.receiver(name); }));
            };
            try {
                for (var channels_1 = __values(channels), channels_1_1 = channels_1.next(); !channels_1_1.done; channels_1_1 = channels_1.next()) {
                    var channel = channels_1_1.value;
                    _loop_3(channel);
                }
            }
            catch (e_41_1) { e_41 = { error: e_41_1 }; }
            finally {
                try {
                    if (channels_1_1 && !channels_1_1.done && (_a = channels_1.return)) _a.call(channels_1);
                }
                finally { if (e_41) throw e_41.error; }
            }
            return receivers;
        };
        Broadcast.prototype._resolveChannelsAndReceivers = function (channelNames, frequency) {
            var e_42, _a;
            channelNames = channelNames || Object.keys(this.frequency.channels);
            var opNames = this.input.split(' ');
            var receivers = new Map();
            var channels;
            var _loop_4 = function (name_7) {
                var channel = frequency.channel(name_7);
                receivers.set(channel, opNames.map(function (name) { return channel.receiver(name); }));
            };
            try {
                for (var channelNames_1 = __values(channelNames), channelNames_1_1 = channelNames_1.next(); !channelNames_1_1.done; channelNames_1_1 = channelNames_1.next()) {
                    var name_7 = channelNames_1_1.value;
                    _loop_4(name_7);
                }
            }
            catch (e_42_1) { e_42 = { error: e_42_1 }; }
            finally {
                try {
                    if (channelNames_1_1 && !channelNames_1_1.done && (_a = channelNames_1.return)) _a.call(channelNames_1);
                }
                finally { if (e_42) throw e_42.error; }
            }
            channels = __spread(receivers.keys());
            return [channels, receivers];
        };
        Broadcast.prototype._resolveSourceComponents = function (source) {
            var _a, _b;
            var components = ['', [], null, null];
            var parts = source.split(' ');
            if (!parts[0].startsWith('#') && !parts[0].startsWith('~')) {
                _a = __read(this._resolvePrimarySource(parts[0]), 2), components[0] = _a[0], components[1] = _a[1];
                components[2] = this._resolveSecondarySource((parts.length > 1) ? parts.slice(1) : null);
                components[3] = this._resolveSignatureSource((parts.length > 1) ? parts.slice(1) : null);
            }
            else {
                _b = __read(this._resolvePrimarySource(''), 2), components[0] = _b[0], components[1] = _b[1];
                components[2] = this._resolveSecondarySource(parts);
                components[3] = this._resolveSignatureSource(parts);
            }
            return components;
        };
        Broadcast.prototype._resolvePrimarySource = function (predicate) {
            var primary = predicate.split('|');
            var components = ['', []];
            if (primary.length > 1) {
                components[0] = primary[0];
                components[1] = this._resolveFrequencyBands(primary[1]);
            }
            else if (predicate != '') {
                components[0] = this.radio.spectrum.name;
                components[1] = this._resolveFrequencyBands(primary[0]);
            }
            else {
                components[0] = this.radio.spectrum.name;
                components[1] = this._resolveFrequencyBands(this.radio.frequency.bandName);
            }
            return components;
        };
        Broadcast.prototype._resolveSecondarySource = function (predicate) {
            var component = null;
            if (predicate != null) {
                component = this._resolveChannelNames(predicate.join(' '));
            }
            component = (component && component.length) ? component : ((this.radio.channel) ? [this.radio.channel.name] : null);
            return component;
        };
        Broadcast.prototype._resolveSignatureSource = function (predicate) {
            var component;
            if (predicate != null) {
                component = this._resolveSignatures(predicate.join(' '));
            }
            else {
                component = (this.radio.name) ? [this.radio.name] : null;
            }
            return component;
        };
        Broadcast.prototype._resolveFrequencyBands = function (name) {
            var parts = name.split(':');
            return parts.map(function (name, i) { return parts.slice(0, i + 1).join(':'); });
        };
        Broadcast.prototype._resolveChannelNames = function (channels) {
            return __spread(helpers_9.Strings.matchAll(channels, /#([^ ]+)/)).map(function (m) { return m[1]; });
        };
        Broadcast.prototype._resolveSignatures = function (signatures) {
            return __spread(helpers_9.Strings.matchAll(signatures, /~([^ ]+)~/)).map(function (m) { return m[1]; });
        };
        return Broadcast;
    }());
    exports.Broadcast = Broadcast;
});
define("lib/services/signals/service/spectrum", ["require", "exports", "lib/services"], function (require, exports, services_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Spectrum = (function () {
        function Spectrum(name) {
            this.frequencies = {};
            this.name = name;
        }
        Spectrum.prototype.frequency = function (name) {
            var frequency = this.frequencies[name];
            if (!frequency)
                frequency = this.frequencies[name] = this.registerFrequency(name);
            return frequency;
        };
        Spectrum.prototype.registerFrequency = function (name, parent, frequency) {
            this.frequencies[name] = (frequency) ? frequency : new services_3.Frequency(name, this, parent);
            return this.frequencies[name];
        };
        return Spectrum;
    }());
    exports.Spectrum = Spectrum;
});
define("lib/services/signals/service/channel", ["require", "exports", "lib/services"], function (require, exports, services_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Channel = (function () {
        function Channel(name, frequency) {
            this.receivers = {};
            this.name = name;
            this.frequency = frequency;
        }
        Channel.prototype.receiver = function (name) {
            var receiver = this.receivers[name];
            if (!receiver)
                receiver = this.receivers[name] = this.registerReceiver(name);
            return receiver;
        };
        Channel.prototype.registerReceiver = function (name, receiver) {
            this.receivers[name] = (receiver) ? receiver : new services_4.Receiver(name, this);
            return this.receivers[name];
        };
        Channel.prototype.registerListener = function (name, cb, signature) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var receiver = this.receiver(name);
            receiver.subscribe.apply(receiver, __spread([cb, signature], args));
        };
        return Channel;
    }());
    exports.Channel = Channel;
});
define("lib/services/signals/service/frequency", ["require", "exports", "lib/services"], function (require, exports, services_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Frequency = (function () {
        function Frequency(name, spectrum, band) {
            this.channels = {};
            this.name = name;
            this.spectrum = spectrum;
            if (band)
                this.band = band;
        }
        Object.defineProperty(Frequency.prototype, "band", {
            get: function () { return this._band; },
            set: function (band) { this._band = band; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Frequency.prototype, "bandName", {
            get: function () { return (!this.band) ? this.name : this.band.bandName + ":" + this.name; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Frequency.prototype, "fullName", {
            get: function () { return this.spectrum.name + "|" + this.bandName; },
            enumerable: true,
            configurable: true
        });
        Frequency.prototype.channel = function (name) {
            var channel = this.channels[name];
            if (!channel)
                channel = this.channels[name] = this.registerChannel(name);
            return channel;
        };
        Frequency.prototype.registerChannel = function (name, channel) {
            this.channels[name] = (channel) ? channel : new services_5.Channel(name, this);
            return this.channels[name];
        };
        return Frequency;
    }());
    exports.Frequency = Frequency;
});
define("lib/services/signals/service/receiver", ["require", "exports", "lib/services", "lib/helpers"], function (require, exports, services_6, helpers_10) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Receiver = (function () {
        function Receiver(name, channel) {
            this.repeaters = {};
            this.name = name;
            this.channel = channel;
        }
        Receiver.prototype.subscribe = function (cb, signature) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var repeater = new (services_6.Repeater.bind.apply(services_6.Repeater, __spread([void 0, this, "fixed-" + helpers_10.UUID.make(), cb, signature], args)))();
            this.repeaters[repeater.name] = repeater;
            return repeater;
        };
        Receiver.prototype.subscribeTemporary = function (cb, signature) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var repeater = new (services_6.TemporaryRepeater.bind.apply(services_6.TemporaryRepeater, __spread([void 0, this, "temp-" + helpers_10.UUID.make(), cb, signature], args)))();
            this.repeaters[repeater.name] = repeater;
            return repeater;
        };
        Receiver.prototype.remove = function (repeater) {
            delete this.repeaters[repeater.name];
        };
        return Receiver;
    }());
    exports.Receiver = Receiver;
});
define("lib/services/signals/service/repeater", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Repeater = (function () {
        function Repeater(receiver, name, cb, signature) {
            var args = [];
            for (var _i = 4; _i < arguments.length; _i++) {
                args[_i - 4] = arguments[_i];
            }
            this.destroyAfter = false;
            this.receiver = receiver;
            this.name = name;
            this.cb = cb;
            this.signature = signature;
            this.args = args;
        }
        Repeater.prototype.trigger = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.cb.apply(this, __spread(args));
        };
        Repeater.prototype.remove = function () {
            delete this.receiver.repeaters[this.name];
        };
        return Repeater;
    }());
    exports.Repeater = Repeater;
    var TemporaryRepeater = (function (_super) {
        __extends(TemporaryRepeater, _super);
        function TemporaryRepeater() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.destroyAfter = true;
            return _this;
        }
        return TemporaryRepeater;
    }(Repeater));
    exports.TemporaryRepeater = TemporaryRepeater;
});
define("lib/services", ["require", "exports", "lib/services/service", "lib/services/servicable", "lib/services/ux/service/elements/base", "lib/services/ux/service/animations/transition", "lib/services/ux/element.service", "lib/services/ux/transition", "lib/services/ux/uxevent", "lib/services/signals/service/radio", "lib/services/signals/service/broadcast", "lib/services/signals/service/operation", "lib/services/signals/service/spectrum", "lib/services/signals/service/channel", "lib/services/signals/service/frequency", "lib/services/signals/service/receiver", "lib/services/signals/service/repeater", "lib/services/signals/signal", "lib/services/signals/signals.binder", "lib/services/signals/signals.service", "lib/services/templates/service/template", "lib/services/templates/template", "lib/services/templates/templates.binder", "lib/services/templates/templates.service", "lib/services/routing/route", "lib/services/routing/routing.service", "lib/services/routing/routing.binder", "lib/services/routing/service/route", "lib/services/routing/service/validator"], function (require, exports, service_5, servicable_5, base_2, transition_2, element_service_5, transition_3, uxevent_1, radio_2, broadcast_1, operation_2, spectrum_1, channel_1, frequency_1, receiver_1, repeater_1, signal_1, signals_binder_2, signals_service_5, template_2, template_3, templates_binder_2, templates_service_4, route_2, routing_service_3, routing_binder_2, route_3, validator_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Service = service_5.Service;
    exports.Servicable = servicable_5.Servicable;
    exports.BaseElement = base_2.BaseElement;
    exports.BaseElementList = base_2.BaseElementList;
    exports.BaseTransition = transition_2.BaseTransition;
    exports.ElementsService = element_service_5.ElementsService;
    exports.Transition = transition_3.Transition;
    exports.UXEvent = uxevent_1.UXEvent;
    exports.UXFormFieldEvent = uxevent_1.UXFormFieldEvent;
    exports.Radio = radio_2.Radio;
    exports.Broadcast = broadcast_1.Broadcast;
    exports.Operation = operation_2.Operation;
    exports.Spectrum = spectrum_1.Spectrum;
    exports.Channel = channel_1.Channel;
    exports.Frequency = frequency_1.Frequency;
    exports.Receiver = receiver_1.Receiver;
    exports.Repeater = repeater_1.Repeater;
    exports.TemporaryRepeater = repeater_1.TemporaryRepeater;
    exports.Signal = signal_1.Signal;
    exports.SignalsBinder = signals_binder_2.SignalsBinder;
    exports.SignalsService = signals_service_5.SignalsService;
    exports.BaseTemplate = template_2.BaseTemplate;
    exports.Template = template_3.Template;
    exports.TemplatesBinder = templates_binder_2.TemplatesBinder;
    exports.TemplatesService = templates_service_4.TemplatesService;
    exports.Route = route_2.Route;
    exports.RoutingService = routing_service_3.RoutingService;
    exports.RoutingBinder = routing_binder_2.RoutingBinder;
    exports.BaseRoute = route_3.BaseRoute;
    exports.Validator = validator_2.Validator;
});
define("raven-js", ["require", "exports", "lib/services", "lib/core", "lib/helpers"], function (require, exports, services_7, core_1, helpers_11) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Service = services_7.Service;
    exports.Servicable = services_7.Servicable;
    exports.BaseElement = services_7.BaseElement;
    exports.BaseElementList = services_7.BaseElementList;
    exports.ElementsService = services_7.ElementsService;
    exports.UXEvent = services_7.UXEvent;
    exports.UXFormFieldEvent = services_7.UXFormFieldEvent;
    exports.Transition = services_7.Transition;
    exports.BaseTransition = services_7.BaseTransition;
    exports.Radio = services_7.Radio;
    exports.Broadcast = services_7.Broadcast;
    exports.Operation = services_7.Operation;
    exports.Spectrum = services_7.Spectrum;
    exports.Channel = services_7.Channel;
    exports.Frequency = services_7.Frequency;
    exports.Receiver = services_7.Receiver;
    exports.Repeater = services_7.Repeater;
    exports.TemporaryRepeater = services_7.TemporaryRepeater;
    exports.Signal = services_7.Signal;
    exports.SignalsBinder = services_7.SignalsBinder;
    exports.SignalsService = services_7.SignalsService;
    exports.Route = services_7.Route;
    exports.RoutingService = services_7.RoutingService;
    exports.RoutingBinder = services_7.RoutingBinder;
    exports.BaseRoute = services_7.BaseRoute;
    exports.Validator = services_7.Validator;
    exports.BaseTemplate = services_7.BaseTemplate;
    exports.Template = services_7.Template;
    exports.TemplatesBinder = services_7.TemplatesBinder;
    exports.TemplatesService = services_7.TemplatesService;
    exports.Strappable = core_1.Strappable;
    exports.Loadable = core_1.Loadable;
    exports.Viewable = core_1.Viewable;
    exports.Initializable = core_1.Initializable;
    exports.View = core_1.View;
    exports.ListView = core_1.ListView;
    exports.BaseComponent = core_1.BaseComponent;
    exports.BaseApplication = core_1.BaseApplication;
    exports.Controller = core_1.Controller;
    exports.ModelList = core_1.ModelList;
    exports.Model = core_1.Model;
    exports.ModelField = core_1.ModelField;
    exports.ModelNumberField = core_1.ModelNumberField;
    exports.ModelTextField = core_1.ModelTextField;
    exports.assert = helpers_11.assert;
    exports.Mixin = helpers_11.Mixin;
    exports.UTF8 = helpers_11.UTF8;
    exports.Strings = helpers_11.Strings;
    exports.UUID = helpers_11.UUID;
    exports.Objects = helpers_11.Objects;
    exports.Resolver = helpers_11.Resolver;
    exports.HttpRequest = helpers_11.HttpRequest;
    exports.HttpResponse = helpers_11.HttpResponse;
});
define("lib/services/templates/service/helper", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Helper = (function () {
        function Helper() {
            this.engine = Handlebars;
        }
        Helper.prototype.fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        return Helper;
    }());
    exports.Helper = Helper;
});
define("lib/services/templates/service/helpers/decode", ["require", "exports", "lib/services/templates/service/helper"], function (require, exports, helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecodeHelper = (function (_super) {
        __extends(DecodeHelper, _super);
        function DecodeHelper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'decode';
            return _this;
        }
        DecodeHelper.prototype.fn = function (input) {
            var el = document.createElement('textarea');
            el.innerHTML = input;
            return el.value;
        };
        return DecodeHelper;
    }(helper_1.Helper));
    exports.DecodeHelper = DecodeHelper;
});
define("lib/services/templates/service/helpers/encode", ["require", "exports", "lib/services/templates/service/helper"], function (require, exports, helper_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EncodeHelper = (function (_super) {
        __extends(EncodeHelper, _super);
        function EncodeHelper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'encode';
            return _this;
        }
        EncodeHelper.prototype.fn = function (input) {
            new this.engine.SafeString(input);
        };
        return EncodeHelper;
    }(helper_2.Helper));
    exports.EncodeHelper = EncodeHelper;
});
define("lib/services/templates/service/helpers/ifEquals", ["require", "exports", "lib/services/templates/service/helper"], function (require, exports, helper_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IfEqualsHelper = (function (_super) {
        __extends(IfEqualsHelper, _super);
        function IfEqualsHelper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'ifEquals';
            return _this;
        }
        IfEqualsHelper.prototype.fn = function (value, predicate, options) {
            return (value === predicate) ? options.fn(this) : options.inverse(this);
        };
        return IfEqualsHelper;
    }(helper_3.Helper));
    exports.IfEqualsHelper = IfEqualsHelper;
});
define("lib/services/templates/service/helpers/listAbsent", ["require", "exports", "lib/services/templates/service/helper"], function (require, exports, helper_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListAbsentHelper = (function (_super) {
        __extends(ListAbsentHelper, _super);
        function ListAbsentHelper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'listAbsent';
            return _this;
        }
        ListAbsentHelper.prototype.fn = function (value, list, options) {
            return (list.indexOf(value) == -1) ? options.fn(this) : options.inverse(this);
        };
        return ListAbsentHelper;
    }(helper_4.Helper));
    exports.ListAbsentHelper = ListAbsentHelper;
});
define("lib/services/templates/service/helpers/listContains", ["require", "exports", "lib/services/templates/service/helper"], function (require, exports, helper_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListContainsHelper = (function (_super) {
        __extends(ListContainsHelper, _super);
        function ListContainsHelper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'listContains';
            return _this;
        }
        ListContainsHelper.prototype.fn = function (value, list, options) {
            return (list.indexOf(value) > -1) ? options.fn(this) : options.inverse(this);
        };
        return ListContainsHelper;
    }(helper_5.Helper));
    exports.ListContainsHelper = ListContainsHelper;
});
define("lib/services/templates/service/helpers/op", ["require", "exports", "lib/services/templates/service/helper"], function (require, exports, helper_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OpHelper = (function (_super) {
        __extends(OpHelper, _super);
        function OpHelper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = 'op';
            return _this;
        }
        OpHelper.prototype.fn = function (operation, value, predicate, options) {
            var output = value;
            switch (operation) {
                case '+':
                    output = value + predicate;
                    break;
            }
            return output;
        };
        return OpHelper;
    }(helper_6.Helper));
    exports.OpHelper = OpHelper;
});
