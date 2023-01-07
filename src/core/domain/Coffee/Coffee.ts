export class Coffee {
  constructor(
    public readonly id: number,
    public readonly brand: string,
    public readonly name: string,
    public readonly type: string,
    public readonly look: string,
    public readonly desc: string,
    public readonly burntLvl: string,
    public readonly createdAt: Date,
    public readonly creatorUserId: string,
    public readonly reviewAmount: number,
    public readonly overallReview: number,
    public readonly reflink: string
  ) {}
}
