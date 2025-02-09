import { toast } from "@/hooks/use-toast";

type RequestConfig = Omit<RequestInit, "body"> & {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | Record<string, unknown>;
  params?: Record<string, string | number | boolean | undefined | null>;
  cache?: RequestCache;
  signal?: AbortSignal;
};

function buildUrlWithParams(
  url: string,
  params?: RequestConfig["params"]
): string {
  if (!params) return url;

  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null
    )
  );

  if (Object.keys(filteredParams).length === 0) return url;

  const queryString = new URLSearchParams(
    filteredParams as Record<string, string>
  ).toString();

  return `${url}?${queryString}`;
}

class ApiError extends Error {
  constructor(
    public status: number,
    public data: unknown,
    public statusText: string
  ) {
    super(`API Error ${status}: ${statusText}`);
    toast({
      variant: "destructive",
      title: "API Error",
      description: this.message,
    });
  }
}

export async function apiClient<T>(
  endpoint: string,
  { params, body, ...customConfig }: RequestConfig = {}
) {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const config: RequestInit = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const url = buildUrlWithParams(`/api${endpoint}`, params);
  const response = await fetch(url, config);

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(response.status, error, response.statusText);
  }

  return response.json() as Promise<T>;
}
