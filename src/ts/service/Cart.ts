import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  costCarts(): number {
    return Array.from(this.items).reduce(
      (sum, current) => sum + current.price,
      0
    );
  }

  costCartsToDiscount(percent: number): number {
    return this.costCarts() * ((100 - percent) / 100);
  }

  removeCartItem(id: number): void {
    this._items.forEach((item, index) => {
      if (id === item.id) {
        this._items.splice(index, 1);
      }
    });
  }
}
