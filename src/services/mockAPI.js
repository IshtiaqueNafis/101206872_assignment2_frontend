import {delay} from "../app/utlis/utlis";
import {data} from "./fakeData";

export function fetchSampleData() {
    return delay(1000).then(() => Promise.resolve(data))
}