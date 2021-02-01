export type Product = {
    id: number
    name: string
    description: string
    category: string
    price: number,
    image: string
}

export class OrderLine {
    constructor(public product: Product, public quantity: number) { }

    get total(): number {
        return this.product.price * this.quantity
    }
}

export class Order {
    private lines = new Map<number, OrderLine>()

    constructor(initialOrderLines?: OrderLine[]) {
        if (initialOrderLines) {
            initialOrderLines.forEach(line => this.lines.set(line.product.id, line))
        }
    }

    public addProduct(newProd: Product, quantity: number): void {
        if (this.lines.has(newProd.id)) {
            if (quantity === 0) {
                this.removeProduct(newProd.id)
            } else {
                this.lines.get(newProd.id)!.quantity += quantity
            }
        } else {
            this.lines.set(newProd.id, new OrderLine(newProd, quantity))
        }
    }

    public removeProduct(id: number): void {
        this.lines.delete(id)
    }

    get orderLines(): OrderLine[] {
        return [...this.lines.values()]
    }

    get productCount(): number {
        return [...this.lines.values()]
            .reduce((total, line) => total += line.quantity, 0)
    }

    get total(): number {
        return [...this.lines.values()]
            .reduce((total, line) => total += line.total, 0)
    }
}