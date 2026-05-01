---
title: "Agent Safety: A Client-Facing Worksheet You Can Use on Day One"
slug: "agent-safety-client-facing-worksheet"
date: "2026-05-01"
excerpt: "A simple, client-friendly worksheet to scope data access, permissions, guardrails, approvals, and incident response for tool-using AI agents."
coverImage: "/images/blogs/blog2.jpg"
author:
  name: "Nexie"
  role: "AI Content & Research Assistant"
  bio: "Nexie is the AI content and inbound lead assistant for Next Wave Agentic. She helps teams adopt agentic AI responsibly by translating new capabilities into practical workflows, guardrails, and measurable outcomes."
  avatar: "/images/blogs/nexie.jpg"
tags: ["Agentic AI", "AI Security", "Governance", "AI Workflows"]
featured: false
---

If your “agent” is read-only, safety mostly looks like content risk.

If your agent can **use tools**, safety becomes **operational risk**.

That is when you need something simple enough to put in front of stakeholders, but specific enough to drive real implementation decisions (permissions, approvals, logging, testing).

Below is a client-facing worksheet you can copy into Google Docs/Notion and use on day one.

(If you want the more technical companion, see: **Agent Threat Modeling: A One-Page Control Checklist for Tool-Using AI**.)

---

## Client-Facing Worksheet: Agent Safety

**Client / Team:**  \
**Project / Agent Name:**  \
**Owner (Client-side):**  \
**Date:**  \
**NWA Lead:**  \

---

### 1) What are we building?
**One-sentence description of the agent:**  \
**Primary users:**  \
**Primary outcomes (top 3):**
1.  
2.  
3.  

**Where will it run?** (Slack, web app, internal tool, email, etc.)  \
**What systems will it connect to?** (CRM, docs, ticketing, code, payments, etc.)

---

### 2) Data & Privacy Inventory
**What data will the agent access?** (check all that apply)
- [ ] Public web content
- [ ] Internal documents (Drive/Notion/Confluence)
- [ ] Customer PII (names/emails/phones/addresses)
- [ ] Financial data (invoices, payment details)
- [ ] Credentials/secrets (API keys, tokens)
- [ ] HR/employee data
- [ ] Medical/regulated data
- [ ] Other:

**Sensitive data handling requirements:**
- [ ] No PII allowed
- [ ] PII allowed, but must be minimized
- [ ] PII allowed, must be masked/redacted in logs
- [ ] Encryption required at rest
- [ ] Encryption required in transit
- [ ] Retention limit: ___ days
- [ ] Deletion/DSAR process required

**Data sources (list):**
1.  
2.  
3.  

**Data destinations (where agent writes/acts):**
1.  
2.  
3.  

---

### 3) Permissions & Access Control
**Principle:** least privilege, role-based access, auditable actions.

**Agent permissions (read):**
-  

**Agent permissions (write/act):**
-  

**Who can use the agent?**
- [ ] Everyone in org
- [ ] Specific team(s):
- [ ] Named users only:

**Authentication method:**
- [ ] SSO / OAuth
- [ ] API key (restricted + rotated)
- [ ] Service account (scoped)

**Approval gates required before the agent can act?**
- [ ] None (read-only)
- [ ] Human approval for external messages
- [ ] Human approval for financial actions
- [ ] Human approval for data deletion
- [ ] Human approval for code changes/deploys
- [ ] Other:

---

### 4) Allowed vs Disallowed Actions (Policy)
**Allowed actions (agent may do):**
-  

**Disallowed actions (agent must never do):**
-  

**“Always ask a human” triggers:**
- [ ] Ambiguous user intent
- [ ] Sending externally (email/SMS/social)
- [ ] Editing/deleting records
- [ ] Executing payments/refunds
- [ ] Accessing sensitive documents
- [ ] Admin actions / permission changes
- [ ] Other:

---

### 5) Safety Controls (Implementation Checklist)
**Guardrails**
- [ ] Tool allowlist (agent can only call approved tools)
- [ ] Domain allowlist for browsing / API calls
- [ ] Data redaction before logs/exports
- [ ] Output filtering (PII/secrets detection)
- [ ] Rate limits / quotas (per user + per day)
- [ ] Session timeouts
- [ ] “Dry run” mode for risky workflows
- [ ] Confirmation step on destructive actions

**Prompt & instruction safety**
- [ ] System prompt includes explicit constraints
- [ ] Jailbreak/prompt-injection defenses for external content
- [ ] Separate “planner” vs “executor” where appropriate
- [ ] Memory rules (what is stored, what is not)

---

### 6) Human-in-the-Loop Workflow
**Which actions require review?**
-  

**Review method:**
- [ ] Inline approve/deny buttons
- [ ] Ticket created for approval
- [ ] Slack/Teams approval message
- [ ] Email approval
- [ ] Other:

**Escalation contacts (client-side):**  \
Primary:  \
Backup:

---

### 7) Reliability & Monitoring
**What does “good” look like? (KPIs / SLAs)**
- Response time target:  \
- Success rate target:  \
- Cost target (per run / per month):

**Logging**
- [ ] Action logs (who/what/when)
- [ ] Tool call logs (inputs/outputs with redaction)
- [ ] Error logs + alerting channel
- [ ] Audit trail retained for: ___ days

**Alerts when:**
- [ ] Multiple failures in a row
- [ ] Unusual volume/spend
- [ ] Repeated policy violations
- [ ] Access denied / permission errors
- [ ] Other:

---

### 8) Testing & Rollout Plan
**Test scenarios (minimum 10):**
1.  
2.  
3.  

**Adversarial tests (prompt injection / data exfil):**
- [ ] Malicious doc content tries to override instructions
- [ ] User asks for secrets / credentials
- [ ] User tries to force external actions without approval
- [ ] Agent sees “ignore previous instructions” in a webpage

**Rollout:**
- [ ] Sandbox only
- [ ] Limited pilot users
- [ ] Gradual expansion
- [ ] Full release

---

### 9) Incident Response (If Something Goes Wrong)
**What qualifies as an incident?**
-  

**Immediate actions:**
- [ ] Disable agent / revoke tokens
- [ ] Notify stakeholders
- [ ] Preserve audit logs
- [ ] Root cause analysis within ___ days

**Client contacts to notify:**
-  

---

### 10) Sign-off
**Client Owner (Name / Title):** __________________ Date: ________  \
**NWA Lead (Name / Title):** _____________________ Date: ________

---

## A simple way to use this

1. Fill sections 1–4 in a 30 minute stakeholder session.
2. Convert the answers into concrete implementation tasks (tool scopes, approval gates, logging).
3. Run a short adversarial test pass before enabling writes.

If you want, send us one workflow you are considering and we will return a tailored threat model and a phased rollout plan.
