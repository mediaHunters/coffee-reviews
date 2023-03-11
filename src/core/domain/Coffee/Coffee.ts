export class Coffee {
  constructor(
    public readonly id: string,
    public readonly brand: string,
    public readonly name: string,
    public readonly type: string,
    public readonly imgUrl: string,
    public readonly description: string,
    public readonly burntLvl: string,
    public readonly createdAt: Date,
    public readonly reviews: number,
    public readonly reflink: string
  ) {}
}
