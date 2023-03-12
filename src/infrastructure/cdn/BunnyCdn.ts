import { UploadedFile } from 'express-fileupload';
import { injectable } from 'inversify';
import fetch from 'isomorphic-fetch';

@injectable()
export class BunnyCdn {
  private readonly STORAGE_ZONE_NAME: string = process.env
    .BUNNY_CDN_STORAGE_ZONE_NAME as string;

  private readonly API_KEY: string = process.env.BUNNY_CDN_API_KEY as string;

  private readonly BUNNY_CDN_API_URL: string = process.env
    .BUNNY_CDN_API_URL as string;

  async uploadImage(fileBuffer: UploadedFile): Promise<Response> {
    const fileName = '123qweasd.png';
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'image/png', AccessKey: this.API_KEY },
      body: fileBuffer.data,
    };

    return fetch(
      `${this.BUNNY_CDN_API_URL}/${this.STORAGE_ZONE_NAME}/coffee_images/${fileName}`,
      options
    );
  }
}
