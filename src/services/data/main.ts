import { FetchHttpClient } from "../http/FetchHttpClient";
import { SWRHttpClient } from "../http/SWRHttpClient";
import IHttpClient from "./IHttpClient";

export const httpClient: IHttpClient = SWRHttpClient;
export const fetchHttpClient: IHttpClient = FetchHttpClient;
