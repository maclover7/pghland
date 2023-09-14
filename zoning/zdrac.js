// UNLOCATED
fetch("https://pittsburghpa.agencycounter.com/api/search/list?offset=0&limit=100&sort_by=-record_date", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "agency-counter-module": "home",
    "agency-counter-tenant": "pittsburghpa",
    "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2OTAxNjEwNTcsImp0aSI6IlFPTWE5RGJWLWtxQ1k3MV9tNmZqUllCSE5QM2R0M3dRIiwiaXNzIjoicGl0dHNidXJnaHBhLmFnZW5jeWNvdW50ZXIuY29tIiwic3ViIjoiYWNjZXNzIiwibmJmIjoxNjkwMTYxMDQ3LCJleHAiOjE2OTA3NjU4NTcsImRhdGEiOnsidXNlcl9pZCI6NTI4NSwidGVuYW50IjoicGl0dHNidXJnaHBhIiwibG9naW5fZXhwaXJlIjoxNjkwNzY1ODU3LCJhY2Nlc3NfZXhwaXJlIjoxNjkwNzY1ODU3LCJ2YWxpZGF0aW9uX3Rva2VuIjoicEJTM1lqNmEweldTOEtvaGwxU2R2V0pkRFZhZHptSnZfMTY3OTUwMzAwMyJ9fQ.A8ntvwjNgpVzW0l0azYFz4kTXHDQNxBdTYfAL9DXpWGp7bW41Ww5Qs7051dZEabENcG-IyASKWrXpdxg5m88gw",
    "content-type": "application/json;charset=UTF-8",
    "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM0MTA3NzEiLCJhcCI6IjExMDMxMTc4MTIiLCJpZCI6Ijg5ZTBjMzdiNmYxYTdhYjUiLCJ0ciI6ImIzNzkyY2I5OWNlMjRmYzY2OTY5YjdmZTBlNGNlNTcwIiwidGkiOjE2OTAxNjE0MDM0ODl9fQ==",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "traceparent": "00-b3792cb99ce24fc66969b7fe0e4ce570-89e0c37b6f1a7ab5-01",
    "tracestate": "3410771@nr=0-1-3410771-1103117812-89e0c37b6f1a7ab5----1690161403489",
    "cookie": "_jsuid=3068845674; _referrer_og=https%3A%2F%2Fpittsburghpa.gov%2F; _heatmaps_g2g_101266655=yes; _first_pageview=1; _csrf-api=df1bf3660d6550b9ca4275ad29a2154faebdf9086e27102c03e236b770792c7fa%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_csrf-api%22%3Bi%3A1%3Bs%3A32%3A%2280WYWWvfmat7JZcGZnCh-B1C1QxrlrxA%22%3B%7D",
    "Referer": "https://pittsburghpa.agencycounter.com/?tab=map",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": JSON.stringify({
    "___address": "",
    "agency_reference": "",
    "record_date___start": "2023-07-01",
    "record_date___end": "2023-07-22",
    "status_category_id_internal": "all",
    "record_type": [
        "/Planning/Zoning Development Review Application"
    ]
  }),
  "method": "POST"
})
  .then((r) => r.json()).then((r) => {
    console.log(r.name === 'OK');
    console.log(r.data.details.length); //'status_text', 'record_date'
});

// LOCATED -- DETAIL
fetch("https://pittsburghpa.agencycounter.com/api/search/detail", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "agency-counter-module": "home",
    "agency-counter-tenant": "pittsburghpa",
    "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2OTAxNjEwNTcsImp0aSI6IlFPTWE5RGJWLWtxQ1k3MV9tNmZqUllCSE5QM2R0M3dRIiwiaXNzIjoicGl0dHNidXJnaHBhLmFnZW5jeWNvdW50ZXIuY29tIiwic3ViIjoiYWNjZXNzIiwibmJmIjoxNjkwMTYxMDQ3LCJleHAiOjE2OTA3NjU4NTcsImRhdGEiOnsidXNlcl9pZCI6NTI4NSwidGVuYW50IjoicGl0dHNidXJnaHBhIiwibG9naW5fZXhwaXJlIjoxNjkwNzY1ODU3LCJhY2Nlc3NfZXhwaXJlIjoxNjkwNzY1ODU3LCJ2YWxpZGF0aW9uX3Rva2VuIjoicEJTM1lqNmEweldTOEtvaGwxU2R2V0pkRFZhZHptSnZfMTY3OTUwMzAwMyJ9fQ.A8ntvwjNgpVzW0l0azYFz4kTXHDQNxBdTYfAL9DXpWGp7bW41Ww5Qs7051dZEabENcG-IyASKWrXpdxg5m88gw",
    "content-type": "application/json;charset=UTF-8",
    "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjM0MTA3NzEiLCJhcCI6IjExMDMxMTc4MTIiLCJpZCI6ImVmOWU0YjA1MGIyZGMyZTIiLCJ0ciI6IjUxMGZjNTk4NWI3Y2M5MThjMDYzYTZjMTM4ZGQ0NGQwIiwidGkiOjE2OTAxNjIzMTM1MTN9fQ==",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "traceparent": "00-510fc5985b7cc918c063a6c138dd44d0-ef9e4b050b2dc2e2-01",
    "tracestate": "3410771@nr=0-1-3410771-1103117812-ef9e4b050b2dc2e2----1690162313513",
    "cookie": "_jsuid=3068845674; _referrer_og=https%3A%2F%2Fpittsburghpa.gov%2F; _csrf-api=4c47be161a46d0d83c68b7c6c7e95794a6464bc1b7e1936fa9725b373fb27fbea%3A2%3A%7Bi%3A0%3Bs%3A9%3A%22_csrf-api%22%3Bi%3A1%3Bs%3A32%3A%22AMB4VyCvWyOE5WrwUPB5WFFCMAbD7Ood%22%3B%7D",
    "Referer": "https://pittsburghpa.agencycounter.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": JSON.stringify({
    "___viewport": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [-80.095517, 40.501202],
                [-79.865728, 40.501202],
                [-79.865728, 40.36152],
                [-80.095517, 40.36152],
                [ -80.095517, 40.501202]
              ]
            ]
          },
          "properties": {}
        }
      ]
    },
    "___address": "",
    "agency_reference": "",
    "record_date___start": "2023-07-01",
    "record_date___end": "2023-07-22",
    "status_category_id_internal": "all",
    "record_type": [
      "/Planning/Zoning Development Review Application"
    ],
    "___location": [
      "43f689eb-6631-4140-b822-033ec33bd621"
    ]
}),
  "method": "POST"
}).then((r) => r.json()).then((r) => console.log(r.data.details));
