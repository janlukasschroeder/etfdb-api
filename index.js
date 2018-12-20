const h = require('./helpers');
const config = require('./config');

/**
 * List all ETFs. Manipulate the order by using parameters.
 * @param {number} [perPage=25]
 * @param {number} [page=1]
 * @param {string} [sort='ytd']
 * @param {string} [order='desc']
 */
module.exports.getData = (
  perPage = 25,
  page = 1,
  sort = 'ytd',
  order = 'desc'
) => {
  const path = `api/screener/`;

  const body = {
    page: page,
    per_page: perPage,
    sort_by: sort,
    sort_direction: order,
    only: ['meta', 'data']
  };

  const url = config.etfdb.baseUrl + path;

  return h.fetch(url, body);
};

/**
 * Filters
 */
const filters = [
  {
    key: 'asset_class',
    type: 'string',
    values: [
      'equity',
      'currency',
      'alternatives',
      'bonds',
      'commodity',
      'volatility',
      'real estate'
    ]
  },
  {
    key: 'sizes',
    type: 'array',
    values: [
      'Large-Cap',
      'Mega-Cap',
      'Micro-Cap',
      'Mid-Cap',
      'Multi-Cap',
      'Small-Cap'
    ]
  },
  {
    key: 'regions',
    type: 'array',
    values: [
      'Africa',
      'Egypt',
      'Nigeria',
      'Australia',
      'Hong Kong',
      'Japan',
      'New Zealand',
      'Singapore',
      'South Korea',
      'Taiwan',
      'Austria',
      'Belgium',
      'Denmark',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Ireland',
      'Italy',
      'Netherlands',
      'Netherlands',
      'Norway',
      'Norway',
      'Sweden',
      'United Kingdom',
      'China',
      'India',
      'Poland',
      'Russia',
      'Brazil',
      'Mexico',
      'Canada',
      'U.S.'
    ]
  },
  {
    key: 'sectors',
    type: 'array',
    values: [
      'Consumer Discretionary',
      'Consumer Staples',
      'Energy',
      'Financials',
      'Healthcare',
      'Materials',
      'Technology',
      'Telecom',
      'Utilities'
    ]
  },
  {
    key: 'leveraged',
    type: 'string',
    values: ['0.5x', '1.25x', '1.5x', '2x', '3x', '4x']
  },
  {
    key: 'inverse',
    type: 'string',
    values: ['true', 'false']
  },
  {
    key: 'expense_ratio_start',
    type: 'string',
    unit: 'percent',
    values: [
      '1.41'
      // ...
    ]
  },
  {
    key: 'expense_ratio_end',
    type: 'string',
    unit: 'percent',
    values: [
      '7.69'
      // ...
    ]
  },
  {
    key: 'dividend_yield_start',
    type: 'string',
    unit: 'percent',
    values: [
      '3.06'
      // ... 22.25
    ]
  },
  {
    key: 'dividend_yield_end',
    type: 'string',
    unit: 'percent',
    values: [
      '22.25'
      // ...
    ]
  },
  {
    key: 'dividend_yield_end',
    type: 'string',
    unit: 'percent',
    values: [
      '22.25'
      // ...
    ]
  },
  {
    key: 'price_start',
    type: 'string',
    unit: 'dollar',
    values: [
      '10.20'
      // ...
    ]
  },
  {
    key: 'price_end',
    type: 'string',
    unit: 'dollar',
    values: [
      '30.20'
      // ...
    ]
  },
  {
    key: 'one_week_return_start',
    type: 'string',
    unit: 'percent',
    values: [
      '-68.36'
      // ...
    ]
  },
  {
    key: 'one_week_return_end',
    type: 'string',
    unit: 'percent',
    values: [
      '-68.36'
      // ...
    ]
  },
  {
    key: 'four_week_return_end',
    type: 'string',
    unit: 'percent',
    values: [
      '8.36'
      // ...
    ]
  },
  {
    key: 'four_week_return_start',
    type: 'string',
    unit: 'percent',
    values: [
      '8.36'
      // ...
    ]
  },
  {
    key: 'ytd_start',
    type: 'string',
    unit: 'percent',
    values: [
      '8.36'
      // ...
    ]
  },
  {
    key: 'ytd_end',
    type: 'string',
    unit: 'percent',
    values: [
      '8.36'
      // ...
    ]
  },
  {
    key: 'fifty_two_week_start',
    type: 'string',
    unit: 'percent',
    values: ['8.36']
  },
  {
    key: 'fifty_two_week_end',
    type: 'string',
    unit: 'percent',
    values: ['8.36']
  }
];
