---
layout: default
title: "Supplier Quality Workflow Automation: Documentation and Audit Follow-up"
---



[← Back to all projects]({{ '/' | relative_url }})

# Supplier Quality Workflow Automation: Documentation and Audit Follow-up

*Portfolio case study. The visuals below are static screenshots; select an image to inspect it at full size.*

## Objective

Develop six automated workflows using Power Automate, Excel, and Office Scripts to support supplier documentation follow-up, internal record completion, and audit activities.

The project automated recurring reminders for Supplier Quality and Development Engineers (SQE/SDE) and personalized requests to suppliers, helping teams identify outstanding requirements, maintain updated records, and coordinate documentation reviews.

## Tools and Project Type

Power Automate | Office Scripts | Microsoft Excel | Microsoft Outlook | HTML | Workflow Automation | Conditional Data Extraction | Personalized Email Notifications | Documentation and Audit Follow-up

## Key Questions

- Which suppliers have expired or soon-to-expire certifications requiring follow-up?

- What documentation or information must each SQE/SDE complete?

- Which peer reviews and SCAR closure audits remain outstanding?

- How can recurring reminders reach the correct person with the specific information needed to act?

- How can documentation follow-up be standardized across multiple internal trackers?

## Methodology

- **Excel-based tracking:** Used Excel workbooks as structured data sources containing supplier records, assigned responsibilities, document statuses, and audit information.

- **Conditional data extraction:** Developed Office Scripts to identify and extract records meeting defined conditions, such as approaching expiration dates, incomplete fields, pending reviews, or unsuccessful document validation.

- **Personalized email generation:** Used Power Automate to build email bodies from the extracted records, presenting relevant suppliers, cases, missing documents, and reviewer feedback.

- **Recipient routing:** Directed notifications to the assigned SQE/SDE or supplier. Supplier certification requests were sent from the responsible engineer’s account, while internal reminders used a service account.

- **Scheduled execution:** Configured monthly, weekly, or three-times-weekly schedules according to each process’s follow-up requirements.

- **Actionable reminders:** Included links to the corresponding internal trackers so recipients could complete missing information and update records for review.

## Workflows Developed

### Supplier Certification Renewal Requests — Monthly

<figure>
  <a href="{{ '/assets/img/certification-request.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/certification-request.png' | relative_url }}" alt="Supplier certification renewal request" loading="lazy">
  </a>
  <figcaption>Supplier certification renewal request. Select the image to open it at full size.</figcaption>
</figure>

Sent personalized emails to suppliers with expired or soon-to-expire certifications, requesting updated certificates, renewal status, or evidence of a scheduled recertification audit.

Messages were sent from the account of the supplier’s assigned SQE/SDE, maintaining the established point of contact.

### Certification Tracker Peer Review — Three Times per Week

<figure>
  <a href="{{ '/assets/img/certification-peer-review.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/certification-peer-review.png' | relative_url }}" alt="Certification tracker peer-review notification" loading="lazy">
  </a>
  <figcaption>Certification tracker peer-review notification. Select the image to open it at full size.</figcaption>
</figure>

Sent each SQE/SDE a consolidated notification covering:

- Feedback from a colleague’s review of documentation for their assigned suppliers.

- Missing documents and records requiring correction.

- Pending reviews they needed to perform for another SQE/SDE.

This workflow supported both sides of the peer-review process: addressing feedback and completing assigned validations.

### External Audit Record Completion — Weekly

<figure>
  <a href="{{ '/assets/img/audit-follow-up.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/audit-follow-up.png' | relative_url }}" alt="External audit record completion notification" loading="lazy">
  </a>
  <figcaption>External audit record completion notification. Select the image to open it at full size.</figcaption>
</figure>

Identified incomplete fields in the external supplier audit tracker and notified the responsible SQE/SDE.

Emails highlighted the specific information requiring completion, such as audit dates, scores, results, and classifications.

### PPAP Documentation Follow-up — Weekly

<figure>
  <a href="{{ '/assets/img/ppap-follow-up.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/ppap-follow-up.png' | relative_url }}" alt="PPAP documentation follow-up notification" loading="lazy">
  </a>
  <figcaption>PPAP documentation follow-up notification. Select the image to open it at full size.</figcaption>
</figure>

Notified SQE/SDE teams of missing Production Part Approval Process (PPAP) documentation, organized by project, supplier, and part number.

Messages identified outstanding items, such as approval records, PPAP workbooks, signed submissions, or current drawing revisions, and directed recipients to update the tracker for validation.

### SCAR Closure Audit Assignments — Weekly

<figure>
  <a href="{{ '/assets/img/scar-audit-assignment.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-audit-assignment.png' | relative_url }}" alt="SCAR closure audit assignment notification" loading="lazy">
  </a>
  <figcaption>SCAR closure audit assignment notification. Select the image to open it at full size.</figcaption>
</figure>

Notified the assigned reviewer of closed SCARs awaiting a documentation audit.

Emails provided case references, supplier and part information, issue descriptions, and 8D receipt details to support verification of the required closure evidence.

### SCAR Closure Audit Corrections — Weekly

<figure>
  <a href="{{ '/assets/img/scar-audit-correction.png' | relative_url }}" target="_blank" rel="noopener">
    <img src="{{ '/assets/img/scar-audit-correction.png' | relative_url }}" alt="SCAR closure audit correction notification" loading="lazy">
  </a>
  <figcaption>SCAR closure audit correction notification. Select the image to open it at full size.</figcaption>
</figure>

Notified the responsible SQE/SDE when a closed SCAR received an NG documentation audit result.

Messages identified missing evidence, such as the final 8D report or signed 8D, and requested completion before resubmitting the record for validation.

## Results and Value Delivered

Implemented six scheduled workflows that replaced repetitive email preparation with targeted notifications generated from Excel records.

The solution standardized supplier and internal follow-up, made documentation gaps visible to the responsible person, and supported the completion and review of certification, audit, PPAP, and SCAR records.

---

[← Back to all projects]({{ '/' | relative_url }})
