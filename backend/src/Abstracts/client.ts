import {AxiosInstance} from "axios";

export abstract class Client {

    constructor(
        protected readonly httpClient: AxiosInstance,
        protected readonly baseUrl: string,
        protected readonly apiKey: string
    ) {
    }

    public async getCurrentByName(location: string): Promise<any> {
    }

    public async getCurrentByCoordinates(coords: any): Promise<any> {
    }

    public async getCurrentById(id: string): Promise<any> {
    }

    protected get(endpoint: string, params: any): Promise<any> {
        return this.httpClient({
            method: 'get',
            url: this.makeUrl(endpoint),
            params: this.makeParams(params),
        }).catch(error => {
            if (error.response) {
                console.error('Response error:', error.response.data);
            } else if (error.request) {
                console.error('Request error:', error.request);
            } else {
                console.error('Error', error.message);
            }
            return error // TODO: implement error display
        });
    }

    private makeUrl(endpoint: string): string {
        return this.baseUrl + endpoint;
    }

    private makeParams(params: object): object {
        return {APPID: this.apiKey, ...params};
    }
}
