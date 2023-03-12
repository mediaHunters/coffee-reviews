import { UploadedFile } from 'express-fileupload';

export class CreateCoffeeUnitOfWorkRepositoryCommand {
  constructor(
    public readonly brand: string,
    public readonly name: string,
    public readonly type: string,
    public readonly image: UploadedFile,
    public readonly description: string,
    public readonly burntLvl: string,
    public readonly reflink: string,
    public readonly CoffeeStatus: string
  ) {}
}
