v0:

- [x] extension boiler plate setup
- [x] on click: get current tab url -> open metaphor tab with query url
- [ ] get scroll percentage and if 80%, show popup to see similar sites?


v0 workflow examples:
1. Go to a lesswrong post or some blog, click extension, boom 😂.
1. Go to a SaaS page, click extension, add "Github.com" in filters and find open source alternatives.


Pre AI wrapper:

1. Personal indexing: BM25 of history, and the links mentioned in those pages.
2. If metaphor results are not relevant, then fallback to results from history/bookmarks.

v1:
1. for articles: get pages with contradicting ideas
2. similar articles but from other disciplines (AI agents -> )

---


<details>
  <summary>Local Setup</summary>
  
 This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).


```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

</details>


