import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';
$(function() {
  const search = instantsearch({
    appId: 'OOK48W9UCL',
    apiKey: '2d64ec1106519cbc672d863b0d200782',
    indexName: 'sentry-docs'
  });

  search.addWidget(
    searchBox({
      container: '#search-box',
      placeholder: 'Search for products'
    })
  );

  search.addWidget(
    hits({
      container: '#hits'
    })
  );

  search.start();
});
