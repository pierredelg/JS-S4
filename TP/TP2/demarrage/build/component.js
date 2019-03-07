function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component =
/*#__PURE__*/
function () {
  function Component(tag, attribute, children) {
    _classCallCheck(this, Component);

    this.tag = tag;
    this.attribute = attribute;
    this.children = children;
    this.attributeEmpty = this.attribute === null || this.attribute === undefined;
    this.childrenEmpty = this.children === null || this.children === undefined;
  }

  _createClass(Component, [{
    key: "renderAttribute",
    value: function renderAttribute() {
      return " ".concat(this.attribute.name, "=\"").concat(this.attribute.value, "\"");
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      if (this.children instanceof Component) {
        return this.children.render();
      }

      if (this.children instanceof Array) {
        var child = "> ";

        for (var i = 0; i < this.children.length; i++) {
          if (this.children[i] instanceof Component) {
            child += this.children[i].render();
          } else {
            child += this.children[i];
          }
        }

        return "\n\t\t\t\t".concat(child, "\n\t\t\t\t");
      }

      return "\n\t\t\t".concat(this.children, "\n\t\t\t");
    }
  }, {
    key: "render",
    value: function render() {
      var result;
      result = "<".concat(this.tag);

      if (!this.attributeEmpty) {
        result += this.renderAttribute();
      }

      if (!this.childrenEmpty) {
        result += this.renderChildren();
      }

      if (this.attributeEmpty && this.childrenEmpty) {
        result += "/> ";
      } else {
        if (this.childrenEmpty) {
          result += "> ";
        } else {
          result += "</".concat(this.tag, ">");
        }
      }

      return result;
    }
  }]);

  return Component;
}();

export { Component as default };
//# sourceMappingURL=component.js.map