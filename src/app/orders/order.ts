export class Order {
  private _coffee: string;
  private _email: string;
  private _size: string;
  private _flavor: string;
  private _strength: number;


  constructor(coffee: string, email: string, size: string, flavor: string, strength: number) {
    this._coffee = coffee;
    this._email = email;
    this._size = size;
    this._flavor = flavor;
    this._strength = strength;
  }


  get coffee(): string {
    return this._coffee;
  }

  get email(): string {
    return this._email;
  }

  get size(): string {
    return this._size;
  }

  get flavor(): string {
    return this._flavor;
  }

  get strength(): number {
    return this._strength;
  }
}
