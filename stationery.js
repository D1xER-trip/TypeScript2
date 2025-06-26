var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stationery = /** @class */ (function () {
    function Stationery(price, inStock, id) {
        this.price = price || 0;
        this.inStock = inStock || false;
        this.id = id || "unknown";
    }
    return Stationery;
}());
var Pen = /** @class */ (function (_super) {
    __extends(Pen, _super);
    function Pen(price, inStock, id, color, inkType) {
        var _this = _super.call(this, price, inStock, id) || this;
        _this.color = color || "black";
        _this.inkType = inkType || "gel";
        return _this;
    }
    Pen.prototype.displayPen = function () {
        console.log("Pen (ID: ".concat(this.id, "):"));
        console.log("  Price: $".concat(this.price));
        console.log("  In Stock: ".concat(this.inStock ? "Yes" : "No"));
        console.log("  Color: ".concat(this.color));
        console.log("  Ink Type: ".concat(this.inkType));
        console.log("----------------------");
    };
    return Pen;
}(Stationery));
var Pencil = /** @class */ (function (_super) {
    __extends(Pencil, _super);
    function Pencil(price, inStock, id, hardness, hasEraser) {
        var _this = _super.call(this, price, inStock, id) || this;
        _this.hardness = hardness || "HB";
        _this.hasEraser = hasEraser || false;
        return _this;
    }
    Pencil.prototype.displayPencil = function () {
        console.log("Pencil (ID: ".concat(this.id, "):"));
        console.log("  Price: $".concat(this.price));
        console.log("  In Stock: ".concat(this.inStock ? "Yes" : "No"));
        console.log("  Hardness: ".concat(this.hardness));
        console.log("  Has Eraser: ".concat(this.hasEraser ? "Yes" : "No"));
        console.log("----------------------");
    };
    return Pencil;
}(Stationery));
var Notebook = /** @class */ (function (_super) {
    __extends(Notebook, _super);
    function Notebook(price, inStock, id, pageCount, size) {
        var _this = _super.call(this, price, inStock, id) || this;
        _this.pageCount = pageCount || 48;
        _this.size = size || "A5";
        return _this;
    }
    Notebook.prototype.displayNotebook = function () {
        console.log("Notebook (ID: ".concat(this.id, "):"));
        console.log("  Price: $".concat(this.price));
        console.log("  In Stock: ".concat(this.inStock ? "Yes" : "No"));
        console.log("  Pages: ".concat(this.pageCount));
        console.log("  Size: ".concat(this.size));
        console.log("----------------------");
    };
    return Notebook;
}(Stationery));
var bluePen = new Pen(1.5, true, "P001", "blue", "ballpoint");
var mechanicalPencil = new Pencil(0.8, false, "PC005", "2H", true);
var mathNotebook = new Notebook(2.3, true, "N010", 96, "A4");
bluePen.displayPen();
mechanicalPencil.displayPencil();
mathNotebook.displayNotebook();
var defaultPen = new Pen();
var defaultPencil = new Pencil();
var defaultNotebook = new Notebook();
defaultPen.displayPen();
defaultPencil.displayPencil();
defaultNotebook.displayNotebook();
