# Request Resource

🚀 🔥 Promise based HTTP client for the browser and node.js

### Installation

Using **npm**:

```bash
npm install request-resource
```

Using **yarn**:

```bash
yarn add request-resource
```

## Example

Get resource from an endpoint

```js
import resource from 'request-resource'

resource
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(d => console.log(d))
    .catch(e => console.error(e))

// Response ->
/*
    {
        data: {
            body: "quia et suscipit....."
            id: 1
            title: "sunt aut facere....."
            userId: 1
        }, 
        headers: {
            cache-control: "public, max-age=14400"
            content-type: "application/json; charset=utf-8"
            expires: "Mon, 12 Nov 2018 20:40:35 GMT"
            pragma: "no-cache"
        }, 
        statusCode: 200
    }
*/
```

> **NOTE**: async/await is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.

Performing a POST request

```js
import resource from 'request-resource'

resource
    .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'new Post',
        body: 'new post body',
    })
    .then(d => console.log(d))
    .catch(e => console.error(e))
```

## Available methods

-   resource.get(url, formData , [, config])
-   resource.post(url, formData , [, config])
-   resource.delete(url, formData , [, config])
-   resource.put(url, formData , [, config])
-   resource.head(url, formData , [, config])
-   resource.option(url, formData , [, config])
-   resource.head(url, formData , [, config])

**url**: (String) Resouce endpoint url
**formData**: (Object) data to be sent as the request body. Only applicable for request methods **PUT**, **POST**, and **PATCH**
**config**: (Object) configaration object of `request-resource` library

config object schema

```js
// todo: add moto config to config
{
    headers: {
    }
}
```

## Response Schema

```js
{
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  statusCode: 200,

  // `headers` the headers that the server responded with
  // All header names are lower cased
  headers: {},
}
```
