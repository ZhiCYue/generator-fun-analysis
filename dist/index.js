"use strict";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var _regenerator = _interopRequireDefault(require("./runtime-module"));

var _marked =
/*#__PURE__*/
_regenerator.default.mark(interator);

function interator() {
  var a;
  return _regenerator.default.wrap(function interator$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return '23';

      case 2:
        a = _context.sent;
        console.log(a);

      case 4:
      case "end":
        return _context.stop();
    }
  }, _marked);
}

var gen = interator();
console.log(gen.next());