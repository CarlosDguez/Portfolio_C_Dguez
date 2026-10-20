---
layout: default
title: "Certification Tracker: Supplier Compliance Analysis and Monitoring"
---


[← Back to all projects]({{ '/' | relative_url }})

# Certification Tracker: Supplier Compliance Analysis and Monitoring

*Portfolio case study. The visuals below are static screenshots; select an image to inspect it at full size.*

## Objective

Centralize supplier quality, certification, and sustainability information through two interactive Power BI dashboards to support compliance assessments and weekly follow-up.

The project consolidated evidence from multiple sources to identify compliance gaps, prioritize follow-up based on purchasing spend, and provide Supplier Quality and Development Engineers (SQE/SDE) with visibility into the suppliers assigned to them.

## Tools and Project Type

![Power BI](https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge)
![Power Query](https://img.shields.io/badge/Power_Query-217346?style=for-the-badge)

![Data Consolidation](https://img.shields.io/badge/Data_Consolidation-295F98?style=for-the-badge)
![Data Visualization](https://img.shields.io/badge/Data_Visualization-295F98?style=for-the-badge)
![KPI Monitoring](https://img.shields.io/badge/KPI_Monitoring-295F98?style=for-the-badge)
![Compliance Analysis](https://img.shields.io/badge/Compliance_Analysis-295F98?style=for-the-badge)
![Supplier Quality](https://img.shields.io/badge/Supplier_Quality-295F98?style=for-the-badge)
## Key Questions

- What is each supplier’s compliance level, and what evidence supports that classification?

- Which suppliers have expired certifications, missing documentation, or audits requiring follow-up?

- How can follow-up activities be prioritized by purchasing spend, purchasing facility, and assigned SQE/SDE?

- What is each supplier’s status in SQM, EcoVadis, and Source Intelligence during weekly reviews?

- How are outstanding items distributed across AMERICAS and the second business segment?

## Methodology

- **Data merging and consolidation:** Used Power Query to merge data from multiple sources, bringing supplier records, certifications, audit results, corrective actions, and external platform statuses into a consolidated dataset for the Certification Tracker.

- **Audit data integration:** Incorporated the latest supplier audit result from a separate document, allowing the assessment to include audits conducted by other teams.

- **Compliance visualization:** Displayed supplier classifications across four levels (Low Compliance, Medium Compliance, Complies, and Exceed Compliance) alongside the indicators and evidence supporting the assessment.

- **Segmentation and prioritization:** Added supplier search and filters by business segment, assigned SQE/SDE, and purchasing facility. Facilities were ordered from highest to lowest purchasing spend to support prioritization.

- **Weekly monitoring:** Developed a second dashboard used in weekly reviews to identify outstanding items and support follow-up by the responsible SQE/SDE.

## Dashboards Developed

### Supplier Compliance Overview

<figure>
  <a href="{{ '/assets/img/certification-overview.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/certification-overview.png' | relative_url }}" alt="Supplier compliance overview" loading="lazy">
  </a>
  <figcaption>Supplier compliance overview. Select the image to open it at full size.</figcaption>
</figure>

Consolidated supplier compliance ratings and the supporting information needed to assess each supplier:

- Signature and revision status of the Supplier Quality Manual (SQM).

- Latest overall audit result and ESG audit status.

- Participation and assessment status in EcoVadis.

- ISO 9001, ISO 14001, IATF, and other certifications, distinguishing valid, expired, and missing documentation.

- Number of Supplier Corrective Action Requests (SCARs) by year.

- Source Intelligence status for information requests related to regulated materials and substances.

- Current purchasing spend and purchasing facility context.

### Weekly Supplier Follow-up

<figure>
  <a href="{{ '/assets/img/certification-weekly.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/certification-weekly.png' | relative_url }}" alt="Weekly supplier documentation follow-up" loading="lazy">
  </a>
  <figcaption>Weekly supplier documentation follow-up. Select the image to open it at full size.</figcaption>
</figure>

Supported weekly reviews of SQM and EcoVadis statuses across AMERICAS and the second business segment, together with Source Intelligence follow-up.

SQE/SDE filters and supplier search enabled users to review their assigned suppliers, identify outstanding responses, and locate cases requiring escalation.

## Results and Value Delivered

Developed two complementary dashboards: one for comprehensive supplier compliance assessment and another for weekly operational follow-up. By consolidating multiple data sources through Power Query, the solution made supplier evidence easier to access and supported coordinated follow-up by responsible engineer, business segment, and purchasing facility.

---

[← Back to all projects]({{ '/' | relative_url }})
<script src="{{ '/assets/js/lightbox.js' | relative_url }}" defer></script>
<nav class="project-side-nav" aria-label="Project navigation">
  <a class="nav-home" href="{{ '/' | relative_url }}">
    ← Home
  </a>
  <a class="nav-next"
     href="{{ '/projects/scar-rma-tracker.html' | relative_url }}">
    Next project →
  </a>
</nav>
