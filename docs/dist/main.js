(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _GetComponent = __webpack_require__(/*! ./GetComponent */ "./components/GetComponent.js");

var _GetComponent2 = _interopRequireDefault(_GetComponent);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Header = __webpack_require__(/*! ./Header/Header1 */ "./components/Header/Header1.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var App = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(App, _Component);

    function App(props) {
        (0, _classCallCheck3['default'])(this, App);
        return (0, _possibleConstructorReturn3['default'])(this, (App.__proto__ || (0, _getPrototypeOf2['default'])(App)).call(this, props));
    }

    (0, _createClass3['default'])(App, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                // console.log(this.props)
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(_Header2['default'], {
                        title: 'Blokk Wireframe Kit11',
                        subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        imgUrl: 'https://d30y9cdsu7xlg0.cloudfront.net/png/50320-200.png' }),
                    this.props.components.map(function (block, i) {
                        var cssClass = (0, _classnames2['default'])('section-' + block.acf_fc_layout, block.section_css_class);
                        return _react2['default'].createElement(
                            'section',
                            { key: i, className: cssClass },
                            _react2['default'].createElement(_GetComponent2['default'], { block: block })
                        );
                    })
                );
            }

            return render;
        }()
    }]);
    return App;
}(_react.Component), _class.defaultProps = {
    components: [],
    block: {
        acf_fc_layout: null,
        section_css_class: null
    }
}, _temp);
exports['default'] = App;
module.exports = exports['default'];

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Footer = function (_Component) {
    (0, _inherits3['default'])(Footer, _Component);

    function Footer(props) {
        (0, _classCallCheck3['default'])(this, Footer);
        return (0, _possibleConstructorReturn3['default'])(this, (Footer.__proto__ || (0, _getPrototypeOf2['default'])(Footer)).call(this, props));
    }

    (0, _createClass3['default'])(Footer, [{
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'footer',
                    null,
                    'Footer'
                );
            }

            return render;
        }()
    }]);
    return Footer;
}(_react.Component);

exports['default'] = Footer;
module.exports = exports['default'];

/***/ }),

/***/ "./components/GetComponent.js":
/*!************************************!*\
  !*** ./components/GetComponent.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(/*! ./Nav */ "./components/Nav/index.js");

var _Nav2 = _interopRequireDefault(_Nav);

var _Header = __webpack_require__(/*! ./Header */ "./components/Header/index.js");

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(/*! ./Footer */ "./components/Footer/index.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _TheContent = __webpack_require__(/*! ./TheContent */ "./components/TheContent/index.js");

var _TheContent2 = _interopRequireDefault(_TheContent);

var _Row = __webpack_require__(/*! ./Shared/Row */ "./components/Shared/Row.js");

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var GetComponent = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(GetComponent, _Component);

    function GetComponent(props) {
        (0, _classCallCheck3['default'])(this, GetComponent);
        return (0, _possibleConstructorReturn3['default'])(this, (GetComponent.__proto__ || (0, _getPrototypeOf2['default'])(GetComponent)).call(this, props));
    }

    (0, _createClass3['default'])(GetComponent, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                // console.log(this.props)
            }

            return componentDidMount;
        }()
    }, {
        key: 'getBlockComponent',
        value: function () {
            function getBlockComponent(block) {
                switch (block.acf_fc_layout) {
                    case 'header':
                        return _react2['default'].createElement(_Header2['default'], block);

                    case 'footer':
                        return _react2['default'].createElement(_Row2['default'], block);

                    case 'navbar':
                        return _react2['default'].createElement(_Nav2['default'], block);

                    case 'article':
                        return _react2['default'].createElement(_TheContent2['default'], block);

                    case 'the_content':
                        return _react2['default'].createElement(_TheContent2['default'], block);

                    case 'row':
                        return _react2['default'].createElement(_Row2['default'], block);

                    default:
                        return null;
                }
            }

            return getBlockComponent;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _props = this.props,
                    block = _props.block,
                    i = _props.i;

                return this.getBlockComponent(block);
            }

            return render;
        }()
    }]);
    return GetComponent;
}(_react.Component), _class.defaultProps = {
    block: {}
}, _temp);
exports['default'] = GetComponent;
module.exports = exports['default'];

/***/ }),

/***/ "./components/Header/Header1.js":
/*!**************************************!*\
  !*** ./components/Header/Header1.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Header1 = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(Header1, _Component);

    function Header1(props) {
        (0, _classCallCheck3['default'])(this, Header1);
        return (0, _possibleConstructorReturn3['default'])(this, (Header1.__proto__ || (0, _getPrototypeOf2['default'])(Header1)).call(this, props));
    }

    (0, _createClass3['default'])(Header1, [{
        key: 'render',
        value: function () {
            function render() {
                var cssClass = (0, _classnames2['default'])('header header1', this.props.cssClass);
                return _react2['default'].createElement(
                    'header',
                    { className: cssClass, id: this.props.id },
                    _react2['default'].createElement(
                        'div',
                        { className: 'inner' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'imgB hrow' },
                            _react2['default'].createElement('img', { src: this.props.imgUrl, alt: this.imgAlt }),
                            ' '
                        ),
                        _react2['default'].createElement(
                            'h2',
                            { className: 'title hrow' },
                            this.props.title
                        ),
                        _react2['default'].createElement(
                            'h4',
                            { className: 'subTitle hrow' },
                            this.props.subTitle
                        ),
                        _react2['default'].createElement('div', { className: 'description hrow', dangerouslySetInnerHTML: { __html: this.props.description } })
                    )
                );
            }

            return render;
        }()
    }]);
    return Header1;
}(_react.Component), _class.defaultProps = {
    id: null,
    cssClass: null,
    imgUrl: null,
    imgAlt: null,
    title: null,
    subTitle: null,
    description: null
}, _temp);
exports['default'] = Header1;
module.exports = exports['default'];

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Header = function (_Component) {
    (0, _inherits3['default'])(Header, _Component);

    function Header(props) {
        (0, _classCallCheck3['default'])(this, Header);
        return (0, _possibleConstructorReturn3['default'])(this, (Header.__proto__ || (0, _getPrototypeOf2['default'])(Header)).call(this, props));
    }

    // componentDidMount() {
    //     console.log('header mount')
    // }

    // componentDidUpdate() {
    //     console.log('header update')
    // }

    // handleClick() {
    //     alert('clickced')
    // }

    (0, _createClass3['default'])(Header, [{
        key: 'render',
        value: function () {
            function render() {

                return _react2['default'].createElement(
                    'header',
                    null,
                    _react2['default'].createElement(
                        'h5',
                        null,
                        'Header'
                    )
                );
            }

            return render;
        }()
    }]);
    return Header;
}(_react.Component);

exports['default'] = Header;
module.exports = exports['default'];

/***/ }),

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Links = __webpack_require__(/*! ../Shared/Links */ "./components/Shared/Links.js");

var _Links2 = _interopRequireDefault(_Links);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Nav = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(Nav, _Component);

    function Nav(props) {
        (0, _classCallCheck3['default'])(this, Nav);
        return (0, _possibleConstructorReturn3['default'])(this, (Nav.__proto__ || (0, _getPrototypeOf2['default'])(Nav)).call(this, props));
    }

    (0, _createClass3['default'])(Nav, [{
        key: 'getBlockComponent',
        value: function () {
            function getBlockComponent(block, i) {
                switch (block.acf_fc_layout) {
                    case 'menu':
                        return _react2['default'].createElement(
                            'div',
                            { key: i, className: 'block blockMenu' },
                            _react2['default'].createElement('div', { className: 'blockInner', dangerouslySetInnerHTML: { __html: block.html } })
                        );

                    case 'links':
                        return _react2['default'].createElement(
                            'div',
                            { key: i, className: 'block blockLinks' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'blockInner' },
                                _react2['default'].createElement(_Links2['default'], { links: block.links })
                            )
                        );

                    case 'logo':
                        return _react2['default'].createElement(
                            'div',
                            { key: i, className: 'block blockLogo' },
                            _react2['default'].createElement('div', { className: 'blockInner logo', style: { backgroundImage: 'url(\'' + String(block.logo) + '\')' } })
                        );

                    default:
                        return null;
                }
            }

            return getBlockComponent;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                console.log(this.props);
                var _props = this.props,
                    css_class = _props.css_class,
                    fields = _props.fields,
                    layout = _props.layout;

                var containerClass = (0, _classnames2['default'])('navbarCt', css_class, 'child_' + fields.length, layout);
                return _react2['default'].createElement(
                    'div',
                    { className: containerClass },
                    fields.map(function (block, i) {
                        return _this2.getBlockComponent(block, i);
                    })
                );
            }

            return render;
        }()
    }]);
    return Nav;
}(_react.Component), _class.defaultProps = {
    css_class: null,
    fields: []
}, _temp);
exports['default'] = Nav;
module.exports = exports['default'];

/***/ }),

/***/ "./components/Shared/Links.js":
/*!************************************!*\
  !*** ./components/Shared/Links.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Nav = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(Nav, _Component);

    function Nav(props) {
        (0, _classCallCheck3['default'])(this, Nav);
        return (0, _possibleConstructorReturn3['default'])(this, (Nav.__proto__ || (0, _getPrototypeOf2['default'])(Nav)).call(this, props));
    }

    (0, _createClass3['default'])(Nav, [{
        key: 'getLinkComponent',
        value: function () {
            function getLinkComponent(objLink, i) {
                return _react2['default'].createElement(
                    'li',
                    { className: objLink.css_class, id: objLink.id, key: i },
                    _react2['default'].createElement(
                        'a',
                        { href: objLink.href, className: objLink.anchor_css_class },
                        objLink.icon_type == 'image' ? _react2['default'].createElement(
                            'span',
                            { className: 'imgC' },
                            _react2['default'].createElement('span', { className: 'img', style: { backgroundImage: 'url(\'' + String(objLink.image_default) + '\')' } }),
                            _react2['default'].createElement('span', { className: 'imgHovered', style: { backgroundImage: 'url(\'' + String(objLink.image_hovered) + '\')' } })
                        ) : objLink.icon_class ? _react2['default'].createElement('i', { className: objLink.icon_class }) : null,
                        objLink.title ? _react2['default'].createElement(
                            'span',
                            null,
                            objLink.title
                        ) : null
                    )
                );
            }

            return getLinkComponent;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                // console.log(this.props)
                return _react2['default'].createElement(
                    'ul',
                    { className: 'linksList' },
                    this.props.links.map(function (block, i) {
                        return _this2.getLinkComponent(block, i);
                    })
                );
            }

            return render;
        }()
    }]);
    return Nav;
}(_react.Component), _class.defaultProps = {
    links: null
}, _temp);
exports['default'] = Nav;
module.exports = exports['default'];

/***/ }),

/***/ "./components/Shared/Row.js":
/*!**********************************!*\
  !*** ./components/Shared/Row.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _GetComponent = __webpack_require__(/*! ../GetComponent */ "./components/GetComponent.js");

var _GetComponent2 = _interopRequireDefault(_GetComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Row = (_temp = _class = function (_Component) {
    (0, _inherits3['default'])(Row, _Component);

    function Row(props) {
        (0, _classCallCheck3['default'])(this, Row);
        return (0, _possibleConstructorReturn3['default'])(this, (Row.__proto__ || (0, _getPrototypeOf2['default'])(Row)).call(this, props));
    }

    (0, _createClass3['default'])(Row, [{
        key: 'getColumnComponent',
        value: function () {
            function getColumnComponent(obj, i) {
                return _react2['default'].createElement(
                    'div',
                    { className: 'ocol', id: obj.id, key: i },
                    _react2['default'].createElement(
                        'div',
                        { className: 'ocolInner' },
                        obj.fields.map(function (block, i) {
                            return _react2['default'].createElement(_GetComponent2['default'], { key: i, block: block });
                        })
                    )
                );
            }

            return getColumnComponent;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _this2 = this;

                console.log(this.props);
                var cssClass = (0, _classnames2['default'])('orow', this.props.css_class);

                return _react2['default'].createElement(
                    'div',
                    { className: cssClass },
                    this.props.columns.map(function (block, i) {
                        return _this2.getColumnComponent(block, i);
                    })
                );
            }

            return render;
        }()
    }]);
    return Row;
}(_react.Component), _class.defaultProps = {
    columns: [],
    css_class: null
}, _temp);
exports['default'] = Row;
module.exports = exports['default'];

/***/ }),

/***/ "./components/TheContent/index.js":
/*!****************************************!*\
  !*** ./components/TheContent/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TheContent = (_temp = _class = function (_Component) {
    (0, _inherits3["default"])(TheContent, _Component);

    function TheContent(props) {
        (0, _classCallCheck3["default"])(this, TheContent);
        return (0, _possibleConstructorReturn3["default"])(this, (TheContent.__proto__ || (0, _getPrototypeOf2["default"])(TheContent)).call(this, props));
    }

    (0, _createClass3["default"])(TheContent, [{
        key: "render",
        value: function () {
            function render() {
                // console.log(this.props)
                return _react2["default"].createElement(
                    "div",
                    { className: "theContent" },
                    _react2["default"].createElement("div", { className: "content", dangerouslySetInnerHTML: { __html: this.props.html } })
                );
            }

            return render;
        }()
    }]);
    return TheContent;
}(_react.Component), _class.defaultProps = {
    data: null
}, _temp);
exports["default"] = TheContent;
module.exports = exports["default"];

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _App = __webpack_require__(/*! ./components/App */ "./components/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

if (!global.setTimeout) {
    global.setTimeout = function () {};
}
if (!global.clearTimeout) {
    global.clearTimeout = function () {};
}
global.React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
global.ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
global.ReactDOMServer = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");

// import Header from './header'
// global.Header = Header

global.App = _App2['default'];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/D/www/php/oyewp/wp-content/themes/oyewpreact/src/index.js */"./index.js");


/***/ })

},[[0,"runtime~main","vendor"]]]);
//# sourceMappingURL=main.js.map