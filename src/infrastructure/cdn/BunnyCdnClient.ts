import * as fs from 'fs';

import { injectable } from 'inversify';
import fetch from 'isomorphic-fetch';

@injectable()
export class BunnyCdnClient {
  private readonly STORAGE_ZONE_NAME: string = process.env
    .BUNNY_CDN_STORAGE_ZONE_NAME as string;

  private readonly API_KEY: string = process.env.BUNNY_CDN_API_KEY as string;

  private readonly BUNNY_CDN_API_URL: string = process.env
    .BUNNY_CDN_API_URL as string;

  async uploadImage(file: any): Promise<Response> {
    const fileName = file.originalname;

    const options = {
      method: 'PUT',
      headers: {
        'content-type': 'image/png',
        AccessKey: this.API_KEY,
      },
      body: fs.createReadStream(file.path),
    };
    return fetch(
      `${this.BUNNY_CDN_API_URL}/${this.STORAGE_ZONE_NAME}/coffee_images/${fileName}`,
      options as any
    );
  }
}
