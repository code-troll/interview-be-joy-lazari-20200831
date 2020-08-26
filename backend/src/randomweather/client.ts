import {Client as AbstractClient} from "../Abstracts/client";
import {Coords, CurrentWeatherResult} from "./models";
import {coords as randomCoords, ids as randomIds, locations as randomLocations} from "./randoms";

export class Client extends AbstractClient {

    public async getCurrentByName(location: string): Promise<CurrentWeatherResult> {
        location = Client._getRandomElement(randomLocations)
        const response = await this.get('/weather', {q: location});

        return response.data;
    }

    public async getCurrentByCoordinates(coords: Coords): Promise<CurrentWeatherResult> {
        coords = Client._getRandomElement(randomCoords)
        const response = await this.get('/weather', coords);

        return response.data;
    }

    public async getCurrentById(id: string): Promise<CurrentWeatherResult> {
        id = Client._getRandomElement(randomIds)
        const response = await this.get(`/weather`, {id: id});

        return response.data;
    }

    private static _getRandomElement(pool: Array<any>): any {
        return pool[Math.floor(Math.random() * pool.length)]
    }
}
