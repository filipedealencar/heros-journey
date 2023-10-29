import IHttpClient, { IHttpResponse } from "../data/IHttpClient";

export const FetchHttpClient: IHttpClient = {
  useGet: async <Data = unknown, Error = unknown>(url: string) => {
    try {
      const response = await fetch(url);
      return {
        data: response.json(),
        error: null,
      } as unknown as IHttpResponse<Data, Error>;
    } catch (err) {
      console.log(err);
      return {
        data: null,
        error: err || { message: "Erro na chamada da API" },
      } as IHttpResponse<Data, Error>;
    }
  },
  usePost: async <Data = unknown, Error = unknown>(url: string, body: any) => {
    return fetch(url, { body: body as any })
      .then((response) => {
        return {
          data: response.json(),
          error: null,
        } as unknown as IHttpResponse<Data, Error>;
      })
      .catch((err) => {
        console.log(err);
        return {
          data: null,
          error: err || { message: "Erro na chamada da API" },
        } as IHttpResponse<Data, Error>;
      });
  },

  // post: <Data = unknown, Error = unknown>(url: string, body: Partial<Data>) => Promise<IHttpResponse<Data, Error>>;
};
