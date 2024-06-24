import { Injectable } from '@angular/core';
import * as platformClient from 'purecloud-platform-client-v2';
import { ApiClientClass } from 'purecloud-platform-client-v2';

@Injectable({
  providedIn: 'root',
})
export class PurecloudService {
  private client: ApiClientClass = platformClient.ApiClient.instance;
  private clientId: string = 'c59536ef-73f2-4f5f-b01e-5964ea378404';
  private clientSecret: string = 'jDqq9SHv-HWhMrRRhOloS8749I-8ITrItocYlTylXH4';

  private authData!: platformClient.AuthData;

  constructor() {}

  public login(): void {
    this.client.setEnvironment('https://api.mypurecloud.com');
    this.client
      // .loginClientCredentialsGrant(this.clientId, this.clientSecret)
      .loginImplicitGrant(this.clientId, window.location.origin)
      .then((data) => {
        this.authData = data;
        console.log('Reading data: ' + data);
        // this.router.navigate(['/conversations']);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }
}
