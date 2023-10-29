import { IHttpResponse } from "@/services/data/IHttpClient";
import { httpClient } from "@/services/data/main";
import { Superhero } from "@/types/HerosTypes";

export default class HerosApi {
  baseUrl = "";
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_APIS_BASE_URL ?? "";
  }

  endPointListHeros = () => {
    return `${this.baseUrl}/api/ps/metahumans`;
  };

  getListHeros = (): IHttpResponse<Superhero[], unknown> => {
    const { data, error } = httpClient.useGet<Superhero[]>(
      this.endPointListHeros()
    ) as IHttpResponse<Superhero[], unknown>;

    return {
      data,
      isLoading: !error && !data,
      error,
    };
  };
}
