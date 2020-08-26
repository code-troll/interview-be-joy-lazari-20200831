import {AxiosInstance} from "axios";
import {Coords, CurrentWeatherResult} from "./models";
// @ts-ignore
import {unit} from "config/openweathermap";

/**
 * Uses the OpenWeatherMap API to bring current weather data.
 *
 * API endpoints: https://openweathermap.org/current
 */
export class Client {

    protected readonly units: string

    constructor(
        private readonly httpClient: AxiosInstance,
        private readonly baseUrl: string,
        private readonly apiKey: string
    ) {
        this.units = unit || null
    }

    public async getCurrentByName(location: string): Promise<CurrentWeatherResult> {
        const response = await this.get('/weather', {q: location});

        return response.data;
    }

    public async getCurrentByCoordinates(coords: Coords): Promise<CurrentWeatherResult> {
        const response = await this.get('/weather', coords);

        return response.data;
    }

    public async getCurrentById(id: string): Promise<CurrentWeatherResult> {
        const response = await this.get(`/weather`, {id: id});

        return response.data;
    }

    private get(endpoint: string, params: any): Promise<any> {
        return this.httpClient({
            method: 'get',
            url: this.makeUrl(endpoint),
            params: this.makeParams(params),
        });
    }

    private makeUrl(endpoint: string): string {
        return this.baseUrl + endpoint;
    }

    private makeParams(params: object): object {
        return {APPID: this.apiKey, units: this.units, ...params};
    }
}
