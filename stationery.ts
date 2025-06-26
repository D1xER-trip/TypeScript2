
class Stationery {
    price: number;
    inStock: boolean;
    id: string;

    constructor();
    constructor(price?: number, inStock?: boolean, id?: string) {
        this.price = price || 1;
        this.inStock = inStock || false;
        this.id = id || "unknown";
    }
}


class Pen extends Stationery {
    color: string;
    inkType: string;

    constructor();
    constructor(price: number, inStock: boolean, id: string, color: string, inkType: string);
    constructor(price?: number, inStock?: boolean, id?: string, color?: string, inkType?: string) {
        super(price, inStock, id);
        this.color = color || "black";
        this.inkType = inkType || "gel";
    }

    displayPen() {
        console.log(`Pen (ID: ${this.id}):`);
        console.log(`  Price: $${this.price}`);
        console.log(`  In Stock: ${this.inStock ? "Yes" : "No"}`);
        console.log(`  Color: ${this.color}`);
        console.log(`  Ink Type: ${this.inkType}`);
        console.log("----------------------");
    }
}


class Pencil extends Stationery {
    hardness: string;
    hasEraser: boolean;

    constructor();
    constructor(price: number, inStock: boolean, id: string, hardness: string, hasEraser: boolean);
    constructor(price?: number, inStock?: boolean, id?: string, hardness?: string, hasEraser?: boolean) {
        super(price, inStock, id);
        this.hardness = hardness || "HB";
        this.hasEraser = hasEraser || false;
    }

    displayPencil() {
        console.log(`Pencil (ID: ${this.id}):`);
        console.log(`  Price: $${this.price}`);
        console.log(`  In Stock: ${this.inStock ? "Yes" : "No"}`);
        console.log(`  Hardness: ${this.hardness}`);
        console.log(`  Has Eraser: ${this.hasEraser ? "Yes" : "No"}`);
        console.log("----------------------");
    }
}

class Notebook extends Stationery {
    pageCount: number;
    size: string;

    constructor();
    constructor(price: number, inStock: boolean, id: string, pageCount: number, size: string);
    constructor(price?: number, inStock?: boolean, id?: string, pageCount?: number, size?: string) {
        super(price, inStock, id);
        this.pageCount = pageCount || 48;
        this.size = size || "A5";
    }

    displayNotebook() {
        console.log(`Notebook (ID: ${this.id}):`);
        console.log(`  Price: $${this.price}`);
        console.log(`  In Stock: ${this.inStock ? "Yes" : "No"}`);
        console.log(`  Pages: ${this.pageCount}`);
        console.log(`  Size: ${this.size}`);
        console.log("----------------------");
    }
}


const bluePen = new Pen(1.5, true, "P001", "blue", "ballpoint");
const mechanicalPencil = new Pencil(0.8, false, "PC005", "2H", true);
const mathNotebook = new Notebook(2.3, true, "N010", 96, "A4");


bluePen.displayPen();
mechanicalPencil.displayPencil();
mathNotebook.displayNotebook();


const defaultPen = new Pen();
const defaultPencil = new Pencil();
const defaultNotebook = new Notebook();

defaultPen.displayPen();
defaultPencil.displayPencil();
defaultNotebook.displayNotebook();