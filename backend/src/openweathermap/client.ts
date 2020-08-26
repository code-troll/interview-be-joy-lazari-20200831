import {AxiosInstance} from "axios";
import {Coords, CurrentWeatherResult} from "./models";
// @ts-ignore
import {unit} from "config/openweathermap";
import {Client as AbstractClient} from "../Abstracts/client";

/**
 * Uses the OpenWeatherMap API to bring current weather data.
 *
 * API endpoints: https://openweathermap.org/current
 */
export class Client extends AbstractClient {

    protected readonly units: string

    constructor(
        protected readonly httpClient: AxiosInstance,
        protected readonly baseUrl: string,
        protected readonly apiKey: string
    ) {
        super(httpClient, baseUrl, apiKey)
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
}
