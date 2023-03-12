import { UploadedFile } from 'express-fileupload';

export class CreateCoffeeCommand {
  constructor(
    public readonly brand: string,
    public readonly name: string,
    public readonly type: string,
    public readonly image: UploadedFile,
    public readonly description: string,
    public readonly burntLvl: string,
    public readonly CoffeeStatus: string,
    public readonly reflink?: string
  ) {}
}
