/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AuthenticationService } from './services/AuthenticationService';
import { GitHubAuthenticationService } from './services/GitHubAuthenticationService';
import { GoogleAuthenticationService } from './services/GoogleAuthenticationService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class ServerAPI {
    public readonly authentication: AuthenticationService;
    public readonly gitHubAuthentication: GitHubAuthenticationService;
    public readonly googleAuthentication: GoogleAuthenticationService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:9527',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.authentication = new AuthenticationService(this.request);
        this.gitHubAuthentication = new GitHubAuthenticationService(this.request);
        this.googleAuthentication = new GoogleAuthenticationService(this.request);
    }
}

