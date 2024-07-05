export const getAnyData = async<T>(
  url: string,
  options?: RequestInit | undefined
): Promise<T> => {
  const res = await fetch(url, options);

  const json = await res.json();

  return json;
};

export const HOST_URL = 'https://main.d3szou7kc9sjnr.amplifyapp.com';