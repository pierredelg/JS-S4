"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*data = [
	{
		nom: 'Regina',
		base: 'tomate',
		prix_petite: 5.5,
		prix_grande: 7.5
	},
	{
		nom: 'Napolitain',
		base: 'tomate',
		prix_petite: 6.2,
		prix_grande: 8
	},
	{
		nom: 'Spicy',
		base: 'crème',
		prix_petite: 6.5,
		prix_grande: 9.95
	},
];
*/
var Animal =
/*#__PURE__*/
function () {
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: "fly",
    value: function fly() {
      // déclaration de méthode
      console.log("".concat(this.name, " is flying now !"));
    }
  }]);

  return Animal;
}();

var threeEyedRaven = new Animal('Bran');
threeEyedRaven.fly();

var Component =
/*#__PURE__*/
function () {
  function Component(tag, attribute, children) {
    _classCallCheck(this, Component);

    this.tag = tag;
    this.attribute = attribute;

    if (attribute != null || attribute != undefined) {
      this.attribute.name = attribute.name;
      this.attribute.value = attribute.value;
    }

    this.children = children;
  }

  _createClass(Component, [{
    key: "renderAttribute",
    value: function renderAttribute() {
      return "".concat(this.attribute.name, "=\"").concat(this.attribute.value, "\"");
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      if (this.children instanceof Component) {
        return this.children.render();
      }

      if (this.children instanceof Array) {
        var child = "";

        for (var i = 0; i < this.children.length; i++) {
          child = child + this.children[i];
        }

        return "\n\t\t\t\t\t\t".concat(child, "\n\t\t\t\t\t");
      }

      if (attributeEmpty) {
        return "\n\t\t\t\t".concat(this.children, "\n\t\t\t\t");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var attributeEmpty = this.attribute === null || this.attribute === undefined;
      var childrenEmpty = this.children === null || this.children === undefined;
      var result;
      result = "<".concat(this.tag, " ");

      if (!attributeEmpty) {
        result += this.renderAttribute();
      }

      if (!childrenEmpty) {
        result += this.renderChildren();
      }

      if (attributeEmpty && childrenEmpty) {
        result += "/>";
      } else {
        if (childrenEmpty) {
          result += ">";
        } else {
          result += "</".concat(this.tag, ">");
        }
      }

      return result;
    }
  }]);

  return Component;
}();

var Img =
/*#__PURE__*/
function (_Component) {
  _inherits(Img, _Component);

  function Img(path) {
    _classCallCheck(this, Img);

    return _possibleConstructorReturn(this, _getPrototypeOf(Img).call(this, 'img', {
      name: 'src',
      value: "".concat(path)
    }, null));
  }

  return Img;
}(Component);

var title = new Component('h1', null, ['La', ' ', 'carte']);
console.log("tag =" + title.tag);
console.log("attribute = " + title.attribute);
console.log("children = " + title.children);
document.querySelector('.pageTitle').innerHTML = title.render();
var img = new Img('images/regina.jpg');
document.querySelector('.pizzasContainer').innerHTML = img.render(); // const c = new Component( 'article', {name:'class', value:'media'},
//  [new Img('images/regina.jpg'),'Regina']);
// console.log("c tag = "+c.tag);
// console.log("c attribute name = "+c.attribute.name);
// console.log("c attribute value = " + c.attribute.value);
// console.log("c children 1 = "+c.children[0]);
// console.log("c children 2 = "+c.children[1]);
// console.log("c children 1 tag = "+c.children[0].tag);
// console.log("c children 1 attribute = "+c.children[0].attribute);
// console.log("c children 1 children = "+c.children[0].children);
// document.querySelector( '.pizzasContainer' ).innerHTML = c.render();
//# sourceMappingURL=main.js.map