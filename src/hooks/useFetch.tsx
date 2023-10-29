import useSWR, { SWRConfiguration } from "swr";

interface RequestInstance {
  get: (url: string) => Promise<any>;
}

interface AxiosError {
  response: { data: any };
}

const fetcher = async (url: string, apiInstance?: RequestInstance) => {
  if (apiInstance) {
    return await apiInstance.get(url);
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return { data, headers: response.headers };
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export function useFetch<Data = any, Error = AxiosError>(
  url: string,
  options: SWRConfiguration = {},
  condition = true,
  apiInstance?: RequestInstance
) {
  const {
    data: response,
    error,
    mutate,
    isValidating,
  } = useSWR(
    condition ? url : null,
    async (url: string) => await fetcher(url, apiInstance),
    options
  );

  return {
    data: response?.data,
    headers: response?.headers,
    error,
    mutate,
    isLoading: !response?.data && !error,
    isValidating,
  };
}
