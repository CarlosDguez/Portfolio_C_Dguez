---
layout: default
title: "SCAR and RMA Tracker: Supplier Quality and Cost Recovery Across the Americas"
---



[← Back to all projects]({{ '/' | relative_url }})

# SCAR and RMA Tracker: Supplier Quality and Cost Recovery Across the Americas

*Portfolio case study. The visuals below are static screenshots; select an image to inspect it at full size.*

## Objective

Develop four interactive Power BI dashboards to monitor Supplier Corrective Action Requests (SCARs) across the Americas, track corrective action progress, and provide visibility into the financial impact of supplier quality issues.

The project connected supplier performance, resolution timelines, defective parts, and Return Merchandise Authorization (RMA) recovery tracking to help SQE/SDE teams prioritize overdue cases and outstanding amounts.

## Tools and Project Type

![Power Automate](https://img.shields.io/badge/Power_Automate-0066FF?style=for-the-badge)
![Office Scripts](https://img.shields.io/badge/Office_Scripts-185ABD?style=for-the-badge)
![Microsoft Excel](https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge)
![Microsoft Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge)

![Personalized Email Automation](https://img.shields.io/badge/Personalized_Email_Automation-087E8B?style=for-the-badge)
![Conditional Recipient Routing](https://img.shields.io/badge/Conditional_Recipient_Routing-087E8B?style=for-the-badge)
![Business-Day Tracking](https://img.shields.io/badge/Business--Day_Tracking-087E8B?style=for-the-badge)
![Escalation Management](https://img.shields.io/badge/Escalation_Management-087E8B?style=for-the-badge)
![Process Documentation](https://img.shields.io/badge/Process_Documentation-087E8B?style=for-the-badge)

## Key Questions

- Which suppliers and facilities account for the highest number of SCARs?

- Which corrective actions are overdue, and what stage of the 8D process have they reached?

- Are SCARs being closed within the target of fewer than 30 business days?

- How much has been recovered through RMAs, and how much remains outstanding by supplier and facility?

- Which defect types and part numbers account for the largest quantities of nonconforming parts?

## Methodology

- **Interactive segmentation:** Implemented shared filters for record date, facility, and supplier name across all four dashboards, supporting both last twelve months (LTM) and full historical analysis.

- **Supplier performance analysis:** Visualized monthly SCAR volumes, status distributions, and supplier rankings to identify concentrations of quality issues and open cases.

- **Aging and deadline monitoring:** Compared SCAR aging and closure performance against the 30-business-day target, with views by supplier, case status, and responsible SQE/SDE.

- **Financial recovery tracking:** Distinguished amounts collected during each month from amounts still outstanding, including balances originating in earlier periods. Displayed year-to-date cumulative recovery to support financial follow-up.

- **Defect and RMA traceability:** Connected defect categories, rejected quantities, part numbers, SCAR references, and RMA status to support investigation and recovery prioritization.

## Dashboards Developed

### SCAR Volume and Supplier Performance

<figure>
  <a href="{{ '/assets/img/scar-performance.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-performance.png' | relative_url }}" alt="SCAR volume and supplier performance" loading="lazy">
  </a>
  <figcaption>SCAR volume and supplier performance. Select the image to open it at full size.</figcaption>
</figure>

Provided an overview of corrective action activity across the Americas:

- Monthly counts of open, closed, and cancelled SCARs, alongside a total-volume trend line.

- Supplier rankings highlighting those with the highest SCAR volumes.

- SCAR/8D distribution by facility.

- Overall SCAR status breakdown by count and percentage.

### SCAR Aging and Closure Performance

<figure>
  <a href="{{ '/assets/img/scar-aging.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-aging.png' | relative_url }}" alt="SCAR aging and closure performance" loading="lazy">
  </a>
  <figcaption>SCAR aging and closure performance. Select the image to open it at full size.</figcaption>
</figure>

Supported corrective action follow-up and deadline monitoring through:

- Individual SCAR aging with status filtering.

- Open SCAR aging grouped by supplier.

- Current 8D process stage for open cases.

- On-time versus late closure performance by SQE/SDE, measured against the target of fewer than 30 business days.

### RMA Financial Recovery

<figure>
  <a href="{{ '/assets/img/rma-recovery.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/rma-recovery.png' | relative_url }}" alt="RMA financial recovery and outstanding amounts" loading="lazy">
  </a>
  <figcaption>RMA financial recovery and outstanding amounts. Select the image to open it at full size.</figcaption>
</figure>

Served as the main dashboard for monitoring outstanding amounts and recovery progress:

- **Green bars:** amounts collected during each month.

- **Yellow bars:** amounts remaining outstanding that month, including unresolved balances from previous periods.

- **Trend line:** cumulative amounts recovered from the beginning of each year through the selected month.

- Open RMAs classified as on time or late against the five-day target.

- Outstanding amounts and their percentage distribution by supplier.

- Four facility-level charts comparing collected and pending amounts.

### Defect Analysis and Supplier Overview

<figure>
  <a href="{{ '/assets/img/scar-defects.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-defects.png' | relative_url }}" alt="Defects and supplier quality overview" loading="lazy">
  </a>
  <figcaption>Defects and supplier quality overview. Select the image to open it at full size.</figcaption>
</figure>

Combined quality and financial indicators in a supplier-focused view:

- Defect distribution by type.

- Nonconforming (NG) part quantities by part number and SCAR.

- Filtering by whether a SCAR had an associated RMA.

- Outstanding amounts by supplier, average SCAR aging, and total reported nonconforming parts.

- Monthly collected and outstanding amounts.

- RMA aging and status distribution, with amounts, percentages, and status filtering.

## Results and Value Delivered

Developed four complementary dashboards that brought together corrective action monitoring, defect analysis, and financial recovery tracking. The solution supported targeted follow-up by supplier and facility, highlighted overdue cases, and made outstanding RMA amounts visible alongside their associated quality issues.

---

[← Back to all projects]({{ '/' | relative_url }})
