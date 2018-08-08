# ETFdb.com API
Fetches data of all 3114 ETFs listed on [ETFdb.com](ETFdb.com)

Indicators: returns (YTD, 1-week, etc.), AUM, expense ratio, dividend yield, 3-month avg. volume, price, etc.

# Quick Start
```javascript
const etfdb = require('./index');

etfdb.getData({limit: 50, offset: 0}).then(result => {
  console.log('Total ETFs:', result.total);
  console.log('Returned ETFs:', result.rows.length);

  result.rows.forEach(row => {
    console.log(row._ytd_percent_return_data.th, row.ytd_percent_return);
  })
});
```

```json
{
    "total": 3114,
    "rows": [
        {
            "symbol": "<a href=\"/etf/AAVX/\"><span class=\"caps\">AAVX</span></a>",
            "_symbol_data": {
                "th": "Symbol"
            },
            "name": "<a href=\"/etf/AAVX/\"><span class=\"caps\">ETRACS</span> Daily Short 1-Month S&amp;P 500 <span class=\"caps\">VIX</span> Futures <span class=\"caps\">ETN</span></a>",
            "_name_data": {
                "th": "ETF Name"
            },
            "assets_under_management": "N/A",
            "_assets_under_management_data": {
                "th": "Total Assets*"
            },
            "ytd_percent_return": "154.63%",
            "_ytd_percent_return_data": {
                "th": "YTD"
            },
            "three_month_average_volume": "2,592.0",
            "_three_month_average_volume_data": {
                "th": "Avg Volume"
            },
            "price": "$220.66",
            "_price_data": {
                "th": "Previous Closing Price"
            },
            "change": "0.00%",
            "_change_data": {
                "th": "1-Day Change"
            },
            "one_week_return": "23.68%",
            "_one_week_return_data": {
                "th": "1 Week"
            },
            "four_week_return": "17.97%",
            "_four_week_return_data": {
                "th": "4 Week"
            },
            "fiftytwo_week_return": "150.49%",
            "_fiftytwo_week_return_data": {
                "th": "1 year"
            },
            "three_year_percent_return": "N/A",
            "_three_year_percent_return_data": {
                "th": "3 year"
            },
            "five_year_percent_return": "N/A",
            "_five_year_percent_return_data": {
                "th": "5 year"
            },
            "ytd_fund_flow": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;YTD Fund Flow&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_ytd_fund_flow_data": {
                "th": "YTD FF"
            },
            "one_week_fund_flow": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;1 Week Fund Flow&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_one_week_fund_flow_data": {
                "th": "1 Week FF"
            },
            "four_week_fund_flow": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;4 Week Fund Flow&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_four_week_fund_flow_data": {
                "th": "4 Week FF"
            },
            "one_year_fund_flow": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;1 Year Fund Flow&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_one_year_fund_flow_data": {
                "th": "1 Year FF"
            },
            "three_year_fund_flow": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;3 Year Fund Flow&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_three_year_fund_flow_data": {
                "th": "3 Year FF"
            },
            "five_year_fund_flow": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;5 Year Fund Flow&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_five_year_fund_flow_data": {
                "th": "5 Year FF"
            },
            "etf_category": "<a href=\"/etfdb-category/inverse-volatility/\">Inverse Volatility</a>",
            "_etf_category_data": {
                "th": "ETFdb.com Category"
            },
            "inception": "N/A",
            "_inception_data": {
                "th": "Inception"
            },
            "expense_ratio": "1.35%",
            "_expense_ratio_data": {
                "th": "ER"
            },
            "link_to_commission_free_brokers": "N/A",
            "_link_to_commission_free_brokers_data": {
                "th": "Commission Free"
            },
            "dividend_annular_rate": "$0.00",
            "_dividend_annular_rate_data": {
                "th": "Annual Dividend Rate"
            },
            "dividend_date": "N/A",
            "_dividend_date_data": {
                "th": "Dividend Date"
            },
            "dividend": "$0.00",
            "_dividend_data": {
                "th": "Dividend"
            },
            "dividend_yield": "0.00%",
            "_dividend_yield_data": {
                "th": "Annual Dividend Yield %"
            },
            "pe_ratio": "0.00",
            "_pe_ratio_data": {
                "th": "P/E Ratio"
            },
            "beta": "0.00",
            "_beta_data": {
                "th": "Beta"
            },
            "number_of_holdings": "N/A",
            "_number_of_holdings_data": {
                "th": "# of Holdings"
            },
            "top_ten_holdings": "N/A",
            "_top_ten_holdings_data": {
                "th": "% In Top 10"
            },
            "complete": "<a href=\"/etf/AAVX/#holdings\">View</a>",
            "_complete_data": {
                "th": "Complete"
            },
            "short_term_cap_gains_rate": "35%",
            "_short_term_cap_gains_rate_data": {
                "th": "ST Cap Gain Rate"
            },
            "long_term_cap_gains_rate": "15%",
            "_long_term_cap_gains_rate_data": {
                "th": "LT Cap Gain Rate"
            },
            "tax_form": "1099",
            "_tax_form_data": {
                "th": "Tax Form"
            },
            "twenty_day_lower_bollinger_band": "$162.36",
            "_twenty_day_lower_bollinger_band_data": {
                "th": "Lower Bollinger"
            },
            "twenty_day_upper_bollinger_band": "$206.83",
            "_twenty_day_upper_bollinger_band_data": {
                "th": "Upper Bollinger"
            },
            "support_level_one": "$218.81",
            "_support_level_one_data": {
                "th": "Support 1"
            },
            "resistance_level_one": "$221.59",
            "_resistance_level_one_data": {
                "th": "Resistance 1"
            },
            "twenty_day_rsi": "71.92",
            "_twenty_day_rsi_data": {
                "th": "RSI"
            },
            "advanced": "<a href=\"/etf/AAVX/#technical\">View</a>",
            "_advanced_data": {
                "th": "Advanced"
            },
            "fact_sheet": "<a href=\"/etf/AAVX/#fact-sheet\">View</a>",
            "_fact_sheet_data": {
                "th": "Fact Sheet"
            },
            "etf_holdings": "<a href=\"/etf/AAVX/#holdings\">View</a>",
            "_etf_holdings_data": {
                "th": "ETF Holdings"
            },
            "chart": "<a href=\"/etf/AAVX/#charts\">View</a>",
            "_chart_data": {
                "th": "Chart"
            },
            "etf_home_page": "<a href=\"/etf/AAVX/\">View</a>",
            "_etf_home_page_data": {
                "th": "ETF Home Page"
            },
            "head_to_head": "<a href=\"/tool/etf-comparison/#AAVX\">View</a>",
            "_head_to_head_data": {
                "th": "Head-To-Head"
            },
            "overall_score": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;Overall Rating&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_overall_score_data": {
                "th": "Overall Rating"
            },
            "liquidity_score": "N/A",
            "_liquidity_score_data": {
                "th": "Liquidity Rating"
            },
            "expenses_score": "N/A",
            "_expenses_score_data": {
                "th": "Expenses Rating"
            },
            "performance_score": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;Returns Rating&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_performance_score_data": {
                "th": "Returns Rating"
            },
            "volatility_score": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;Volatility Rating&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_volatility_score_data": {
                "th": "Volatility Rating"
            },
            "dividend_score": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;Dividend Rating&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_dividend_score_data": {
                "th": "Dividend Rating"
            },
            "concentration_score": "<a class=\"restricted\" data-analytics-track-click=\"{&quot;category&quot;:&quot;Table&quot;,&quot;label&quot;:&quot;Concentration Rating&quot;,&quot;action&quot;:&quot;Click&quot;}\" href=\"/members/join/\"></a>",
            "_concentration_score_data": {
                "th": "Concentration Rating"
            },
            "esg_quality_score": "N/A",
            "_esg_quality_score_data": {
                "th": "ESG Score"
            },
            "esg_quality_score_pctl_peer": "N/A",
            "_esg_quality_score_pctl_peer_data": {
                "th": "ESG Score Peer Percentile (%)"
            },
            "esg_quality_score_pctl_global": "N/A",
            "_esg_quality_score_pctl_global_data": {
                "th": "ESG Score Global Percentile (%)"
            },
            "esg_weighted_avg_carbon_inten": "N/A",
            "_esg_weighted_avg_carbon_inten_data": {
                "th": "Carbon Intensity (Tons of CO2e / $M Sales)"
            },
            "esg_sri_exclusion_criteria_pct": "N/A",
            "_esg_sri_exclusion_criteria_pct_data": {
                "th": "ESG Exclusion Criteria (%)"
            },
            "esg_sustainable_impact_pct": "N/A",
            "_esg_sustainable_impact_pct_data": {
                "th": "Sustainable Impact Solutions (%)"
            }
        }
    ]
}
```