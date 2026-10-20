---
layout: default
title: "Automated SCAR Follow-up and Escalation Management"
---



[← Back to all projects]({{ '/' | relative_url }})

# Automated SCAR Follow-up and Escalation Management

*Portfolio case study. The visuals below are static screenshots; select an image to inspect it at full size.*

## Objective

Develop automated supplier communications and internal reminders to support the follow-up of open Supplier Corrective Action Requests (SCARs) and escalate cases according to their age and status.

The project combined Power Automate, Office Scripts, and Excel with a documented escalation procedure, providing a consistent process and email evidence to demonstrate how SCARs were monitored, communicated, and escalated.

## Tools and Project Type

![Power Automate](https://img.shields.io/badge/Power_Automate-0066FF?style=for-the-badge)
![Office Scripts](https://img.shields.io/badge/Office_Scripts-185ABD?style=for-the-badge)
![Microsoft Excel](https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge)
![Microsoft Outlook](https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![Workflow Automation](https://img.shields.io/badge/Workflow_Automation-6750A4?style=for-the-badge)
![Conditional Data Extraction](https://img.shields.io/badge/Conditional_Data_Extraction-6750A4?style=for-the-badge)
![Personalized Email Notifications](https://img.shields.io/badge/Personalized_Email_Notifications-6750A4?style=for-the-badge)
![Documentation and Audit Follow-up](https://img.shields.io/badge/Documentation_and_Audit_Follow--up-6750A4?style=for-the-badge)

## Key Questions

- How can suppliers receive consistent updates on their open SCARs and outstanding corrective actions?

- Which internal stakeholders should receive reminders at each stage?

- When should overdue or unresponsive cases be escalated to management?

- How can cases awaiting internal review be distinguished from those requiring supplier action?

- What evidence demonstrates that SCAR follow-up follows a defined process?

## Methodology

- **Conditional data extraction:** Used Office Scripts to extract open SCAR information from an Excel tracker, including supplier, case reference, issue description, responsible engineer, elapsed business days, and current status.

- **Personalized email generation:** Used Power Automate to build supplier summaries and internal reminders containing the information relevant to each recipient.

- **Scheduled follow-up:** Configured daily communications to maintain visibility of open cases and outstanding activities.

- **Escalation logic:** Used both elapsed business days and SCAR status as triggers to determine notification recipients. Status-based conditions, such as Escalated or Pending Revision, activated the corresponding notification path, while aging thresholds expanded the recipient list according to the escalation matrix.

- **Process documentation:** Documented the reminder and escalation procedure in the department’s process manual, using an escalation matrix to define triggers and recipients.

## Workflows Developed

### Daily Supplier SCAR Summary

<figure>
  <a href="{{ '/assets/img/scar-supplier-summary.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-supplier-summary.png' | relative_url }}" alt="Daily open SCAR summary sent to a supplier" loading="lazy">
  </a>
  <figcaption>Daily open SCAR summary sent to a supplier. Select the image to open it at full size.</figcaption>
</figure>

Sent each supplier a personalized summary of its open SCARs from the account of the responsible SQE/SDE.

The email included:

- SCAR number and defect description.

- Elapsed business days and current case status.

- Progress on corrective action submissions.

- Outstanding 5D and 8D deliverables, including remaining time or delays where applicable.

This workflow maintained a consistent point of contact and made the supplier’s pending actions explicit.

### Daily Internal Follow-up and Conditional Escalation

<figure>
  <a href="{{ '/assets/img/scar-internal-reminder.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-internal-reminder.png' | relative_url }}" alt="Internal open SCAR reminder" loading="lazy">
  </a>
  <figcaption>Internal open SCAR reminder. Select the image to open it at full size.</figcaption>
</figure>

<figure>
  <a href="{{ '/assets/img/scar-escalation.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-escalation.png' | relative_url }}" alt="SCAR escalation support request" loading="lazy">
  </a>
  <figcaption>SCAR escalation support request. Select the image to open it at full size.</figcaption>
</figure>

<figure>
  <a href="{{ '/assets/img/scar-pending-review.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-pending-review.png' | relative_url }}" alt="SCAR reminder for cases pending internal review" loading="lazy">
  </a>
  <figcaption>SCAR reminder for cases pending internal review. Select the image to open it at full size.</figcaption>
</figure>

<figure>
  <a href="{{ '/assets/img/scar-escalation-matrix.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-escalation-matrix.png' | relative_url }}" alt="SCAR reminder and escalation matrix" loading="lazy">
  </a>
  <figcaption>SCAR reminder and escalation matrix. Select the image to open it at full size.</figcaption>
</figure>

Sent internal reminders to the responsible engineers and expanded the notification chain according to case age and status.

The documented escalation matrix defined the following rules:

| Trigger | Notification   recipients |
| --- | --- |
| From  5  business   days | Responsible  QA/SQE |
| From  15  business   days | QA/SQE and SDE |
| From  30  business   days | QA/SQE, SDE, and Supplier Development Manager  ( SDM ) |
| Escalated case or missing response | Responsible SQE/SDE, relevant Commodity Managers  (CM)  and SSM, with SDM copied |
| 90-business-day escalation threshold with Pending Revision status | Responsible SQE/SDE, with SDM and LOQCM copied |

Notifications included the SCAR reference, supplier, issue description, person in charge, elapsed business days, and status. Separate email formats distinguished routine follow-up, escalation requiring support, and cases awaiting internal review.

## Results and Value Delivered

Developed two automated workflows with conditional notification paths that standardized daily supplier communication and internal SCAR follow-up.

The solution made outstanding actions visible, directed reminders to the appropriate stakeholders, and supported management involvement when escalation conditions were met. Together, the generated emails and documented procedure provided evidence of a structured SCAR follow-up process.

---

[← Back to all projects]({{ '/' | relative_url }})
