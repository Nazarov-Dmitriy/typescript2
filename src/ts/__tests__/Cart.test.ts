import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";

describe("Test function cart", () => {
  test("costCarts test ", () => {
    const cart = new Cart();
    cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
    cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

    expect(cart.costCarts()).toBe(2900);
  });

  test("costCartsToDiscount test ", () => {
    const cart = new Cart();
    cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
    cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));

    expect(cart.costCartsToDiscount(10)).toBe(2610);
  });

  test("removeCartItem test ", () => {
    const cart = new Cart();
    cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
    cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
    cart.removeCartItem(1001);
    expect(cart.items.length).toBe(1);
  });
});
