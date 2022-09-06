import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '0d331c1b96msh319a0ffad52ab25p17f069jsna17885ef318a',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (arg, count) => createRequest(`/news/search?q=${arg.newsCategory}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${arg.count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
