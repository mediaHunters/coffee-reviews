export class CreateCoffeeCommandBody {
  constructor(
    public readonly brand: string,
    public readonly name: string,
    public readonly type: string,
    public readonly description: string,
    
    public readonly burntLvl: string,
    public readonly image: any,
    public readonly CoffeeStatus: string,
    public readonly reflink?: string
  ) {}
}
