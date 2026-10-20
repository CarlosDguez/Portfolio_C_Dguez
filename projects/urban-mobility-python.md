---
layout: default
title: "Urban Mobility and Economic Performance: Data Preparation and Exploratory Analysis with Python"
---



[← Back to all projects]({{ '/' | relative_url }})

# Urban Mobility and Economic Performance: Data Preparation and Exploratory Analysis with Python

TripleTen Data Analytics course project using a simulated development-bank scenario.

## Objective

Combine urban mobility and economic data to explore how traffic conditions relate to GDP per capita across 15 Latin American cities in 2024.

The project focused on preparing a unified dataset and identifying contrasting city profiles that could guide further investigation into transportation infrastructure needs.

## Tools and Project Type

Python | Pandas | Seaborn | Matplotlib | Jupyter Notebook | Data Cleaning | Data Aggregation | Dataset Merging | Exploratory Data Analysis

## Key Questions

- Which cities show the highest aggregate traffic delays?

- How does GDP per capita vary across the cities analyzed?

- Do cities with higher GDP per capita consistently experience lower traffic delays?

- Which contrasting city profiles warrant further investigation?

- How can traffic observations and annual economic indicators be combined into a consistent analytical dataset?

## Methodology

- **Data exploration:** Inspected a traffic dataset containing 1,004,464 records and an economic dataset containing 30 city-year records, reviewing column structures, data types, and missing-value counts.

- **Data cleaning:** Standardized column names using snake_case, converted traffic timestamps to datetime, and cleaned GDP per capita, unemployment, and population fields by removing formatting characters and converting them to numeric values.

- **Time-period alignment:** Extracted the year from traffic timestamps and filtered both datasets to 2024.

- **Traffic aggregation:** Used Pandas groupby() and agg() to calculate average traffic indicators by city, country, and year, producing 387 city-level traffic records.

- **Dataset integration:** Applied an inner merge on city and year, retaining the 15 Latin American cities represented in both sources.

- **Exploratory visualization:** Created a traffic-delay boxplot, a GDP-per-capita histogram, and a city comparison chart to examine distributions, outliers, and contrasting profiles.

- **Documentation and export:** Documented the workflow in Jupyter Notebook and exported the merged dataset as a CSV for further analysis.

## Key Findings

<figure>
  <a href="{{ '/assets/img/python-mobility-economy.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/python-mobility-economy.png' | relative_url }}" alt="Python code and exploratory city comparison chart for 2024" loading="lazy">
  </a>
  <figcaption>Python code and exploratory city comparison chart for 2024. Select the image to open it at full size.</figcaption>
</figure>

**Reading this figure:** Traffic delay and GDP per capita use different units. Their bar heights are not directly comparable. This exploratory view does not establish a statistical association or causality; separate plots or a scatter plot with clearly labeled units would support further analysis.

### 1. Mexico City stood out for its aggregate traffic delays.

Mexico City had the highest average jams_delay value among the 387 cities in the aggregated traffic dataset and appeared as an outlier in the merged sample. This metric represents aggregate delay across monitored roads, rather than an individual commuter’s travel time.

### 2. Higher GDP per capita coexisted with different traffic conditions.

Mexico City combined relatively high GDP per capita with substantial aggregate delays, while Montevideo showed the highest GDP per capita in the merged sample alongside much lower delays.

### 3. The visual comparison identified contrasting profiles, rather than establishing a statistical relationship.

The exploratory results supported further investigation into city-specific conditions. Additional analysis would be needed to quantify associations and assess factors such as population, road-network coverage, and transportation infrastructure.

## Recommendations for Further Analysis

- Compare GDP per capita with traffic indicators using scatter plots and correlation measures, including travel time and delay per 10 km to complement aggregate delay metrics.

- Investigate Mexico City and Montevideo as contrasting cases, considering population, transport systems, and data coverage before drawing conclusions about infrastructure investment priorities.

## Results and Value Delivered

Prepared a unified 2024 dataset covering 15 Latin American cities, supported by a documented Python workflow, exploratory visualizations, and an executive summary.

The project demonstrated how to transform traffic observations and economic records into a consistent dataset suitable for comparative analysis and further research.

---

[← Back to all projects]({{ '/' | relative_url }})
