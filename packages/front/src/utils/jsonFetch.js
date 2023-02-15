const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const jsonFetch = ({
  endpoint,
  method = "GET",
  jsonBody = null,
  headers = DEFAULT_HEADERS,
}) => {
  let config = {
    method,
    body: jsonBody ? JSON.stringify(jsonBody) : null,
    headers
  };

  return new Promise((resolve, reject) =>
    fetch(endpoint, config)
      .then(async (response) => {
        const json = isJsonResponse(response) ? await response.json() : null;
        if (response.ok) {
          resolve(json);
          return;
        }

        const error = { status: response.status, ...json };
        console.error({ endpoint, method }, error);
        reject(error);

        return;
      })
      .catch((error) => {
        console.error({ endpoint, method }, error);
        reject(error);

        return;
      })
  );
};

const isJsonResponse = (response) => {
  const contentType = response.headers.get("content-type");
  return contentType && contentType.indexOf("application/json") !== -1;
};

export default jsonFetch;
