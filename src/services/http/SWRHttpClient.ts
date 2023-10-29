import useSWR from "swr";
import IHttpClient, { IHttpResponse } from "../data/IHttpClient";

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const SWRHttpClient: IHttpClient = {
  useGet: <Data = unknown, Error = unknown>(url: string) => {
    const { data, error } = useSWR<Data, Error>(url, fetcher);
    return {
      data,
      error,
    } as IHttpResponse<Data, Error>;
  },
  usePost: async (url: string, body: BodyInit) => {
    return fetcher(url, {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res);

    // return {
    //     data,
    //     error,
    // } as IHttpResponse<Data, Error>;
  },
};

export { SWRHttpClient };
