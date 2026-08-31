---
title: "Building a Dynamic Learning Simulation Platform: What’s New in ScaleLXP"
slug: "building-a-dynamic-learning-simulation-platform"
date: "2026-08-30"
excerpt: "A look at how we evolved ScaleLXP’s web app and API around dynamic challenges, profiles, metrics, and reliable AI batch processing—without losing clarity for instructors or students."
coverImage: "/images/blogs/building-a-dynamic-learning-simulation-platform/hero.png"
author:
  name: "Jason Price"
  role: "Founder & CEO"
  bio: "Jason Price is the founder of Next Wave Agentic, where he leads the intersection of creative technology and AI-driven software delivery. With over 15 years in software engineering and digital strategy, he helps organizations harness agentic AI to ship faster and smarter."
  avatar: "/images/team/jason-price.jpg"
tags: ["ScaleLXP", "AI", "Learning Technology", "Simulation", "Software Engineering"]
featured: true
---

The best learning simulations do not simply tell students whether an answer was right or wrong. They let students make a decision, live with the result, and understand why it happened.

That has always been the idea behind **ScaleLXP**: turn supply chain concepts into an applied experience where students operate a simulated business over time. Recently, we have been evolving both the web application and the API to make that experience much more dynamic.

The change is bigger than adding a few settings. We have been moving away from a system built around one fixed simulation and toward a flexible platform where instructors can shape the learning environment itself.

Challenges can change. Business profiles can change. The inputs students work with can change. Even the metrics used to explain success can change.

The platform adapts with them.

![A dynamic learning simulation connecting instructors, business profiles, metrics, and student outcomes](/images/blogs/building-a-dynamic-learning-simulation-platform/hero.png)

---

## From Fixed Screens to Shared Definitions

![One shared definition system powering forms, APIs, AI evaluation, and dashboards](/images/blogs/building-a-dynamic-learning-simulation-platform/shared-definitions.png)

A configurable product creates a deceptively difficult engineering problem: every part of the system has to agree on what the configuration means.

If an instructor adds a new decision input, it is not enough to place another field on a form. That input also needs to be validated by the API, stored with the student’s decision, included in the simulation context, displayed in the right views, and represented correctly in an export.

The same is true for profiles and metrics.

Our recent work has centered on creating shared definitions that can travel through the whole platform:

- The API defines the available structures and rules.
- The web app uses those definitions to build the right instructor and student experiences.
- The simulation engine uses the same definitions when preparing an evaluation.
- Dashboards and exports use them again when presenting the result.

This gives ScaleLXP a common language. Instead of teaching every screen about every possible classroom setup, we teach the system how to interpret definitions.

That is what makes the platform dynamic without making it unpredictable.

## Challenges That Fit the Lesson

![An instructor assembling a dynamic business challenge from modular scenario elements](/images/blogs/building-a-dynamic-learning-simulation-platform/dynamic-challenges.png)

A traditional case study is usually static. The setup, questions, and expected outcomes are written in advance. That works for presenting a concept, but it can limit how an instructor responds to a class.

ScaleLXP challenges are becoming much more adaptable.

An instructor can build a scenario around the conditions they want students to face, define the decisions students need to make, and control how the challenge moves through its lifecycle. The web app guides that process, while the API keeps the underlying data consistent.

We have also introduced an AI-assisted starting point for challenge creation. An instructor can describe the exercise they want to run and receive a structured draft to review and edit. AI accelerates the blank-page part of the work; the instructor stays in control of what reaches the class.

The important word there is **draft**. We do not treat generated content as unquestionable truth. It enters the same editing and validation flow as content created manually.

We have also made challenge states clearer. Accepting submissions, locking decisions, calculating outcomes, completing results, and releasing feedback are separate moments. Modeling those moments explicitly helps the web app tell students and instructors what is actually happening, especially when a full class is being processed in the background.

## Profiles as Part of the Simulation

![Different business profiles responding to the same decision under different conditions](/images/blogs/building-a-dynamic-learning-simulation-platform/dynamic-profiles.png)

In the real world, two businesses can make the same decision and still get different results. They may begin with different resources, cost structures, operating models, or constraints.

Profiles give ScaleLXP that same context.

A profile is no longer just descriptive information attached to a student. It can carry a classroom-specific business type, starting conditions, and configurable attributes that influence the simulation. Instructors can create different operating profiles for different lessons rather than being limited to a permanent list built into the software.

This changes the learning experience in an important way. A decision cannot be evaluated in isolation; it has to be evaluated in context.

It also creates better classroom discussion. When students compare results, the conversation can move beyond “Who chose the right number?” to questions like:

- Which strategy worked best for this kind of business?
- Which constraints changed the result?
- Did a short-term gain create a longer-term risk?
- Would the same decision work for a different profile?

The technology becomes a way to reveal tradeoffs rather than hide them.

## Metrics That Define Success

![A flexible metric engine producing charts, rankings, comparisons, and exports](/images/blogs/building-a-dynamic-learning-simulation-platform/dynamic-metrics.png)

Once challenges and profiles became configurable, fixed reporting stopped making sense.

Different lessons need different measures of success. One challenge may emphasize profitability. Another may focus on waste, service level, resilience, efficiency, or a balance across several outcomes.

We built metric definitions so each classroom can describe the outputs that matter. A definition tells the platform what a metric represents, how it should be formatted, how it rolls up over time, where it should appear, and—when appropriate—how it should influence rankings.

Those definitions now power multiple parts of ScaleLXP:

- Result tables can add the relevant columns automatically.
- KPI cards and charts can display the right measures for the lesson.
- Leaderboards can rank by a meaningful primary metric and respect whether higher or lower is better.
- Profile comparisons can calculate totals and averages from the same source.
- Data exports can include the configured metrics without requiring a custom export for every class.

This is one of the most meaningful architectural shifts in the recent work. Metrics are not decorative labels added after processing. They are part of the contract between the lesson, the simulation, the API, and the interface.

> ### Why this is cool
>
> An instructor is not locked into one version of the simulation. They can shape the profiles, decisions, and measures of success around the lesson they actually want to teach. Once those definitions change, the student forms, AI evaluation, dashboards, comparisons, and exports all adapt with them. That means ScaleLXP can support new classroom experiences without rebuilding the product for every new scenario.

## Using AI for Explanation, Not Mystery

![Structured rules and student decisions becoming validated metrics and understandable AI explanations](/images/blogs/building-a-dynamic-learning-simulation-platform/explainable-ai.png)

ScaleLXP combines structured business rules with AI-generated evaluation and explanation.

That combination matters. A learning platform needs consistency, but it also needs to help a student understand the consequences of a decision in plain language.

The configurable challenge, profile, decision, and metric definitions are assembled into a structured evaluation context. The AI service is asked to return results in a shape the API understands, and the platform validates and stores those results as part of the student’s ongoing ledger.

The result is not just a paragraph from a model. It is a durable simulation outcome that can support dashboards, comparisons, instructor debriefs, and future rounds.

We have also added class-level summaries that help instructors see patterns across a completed challenge. The goal is not to replace an instructor’s judgment. It is to make it easier to spot themes worth discussing: where students struggled, which tradeoffs appeared repeatedly, and what the class results suggest about the underlying lesson.

## Why OpenAI Batch Processing Matters

![Student decisions moving through an orderly asynchronous AI batch-processing system](/images/blogs/building-a-dynamic-learning-simulation-platform/batch-processing.png)

Evaluating one decision is an interactive request. Evaluating an entire classroom is a workflow.

That distinction shaped our work on OpenAI batch processing.

When a challenge closes, ScaleLXP prepares the student simulation jobs as a group and submits them for asynchronous processing. The API tracks the batch through its lifecycle, periodically checks its progress, and reconciles each returned result with the correct student job and ledger entry.

This approach gives us several advantages:

- The web request is not held open while a class is evaluated.
- Larger groups can be processed without pretending every result is immediate.
- Each student’s job has its own status and error trail.
- Completed items can be recorded safely even if processing is revisited.
- Instructors can cancel and rerun work when a batch needs intervention.

Just as important, the interface now reflects the asynchronous reality. Closing submissions does not mean every result instantly exists. During that interval, the challenge shows that results are being calculated, student outcomes remain appropriately gated, and the platform refreshes as work completes.

That may sound like a small wording change. It is actually a product-level expression of good distributed-system design: tell people the truth about the state of the work.

> ### Why this is cool
>
> A whole classroom can submit different decisions under different business conditions, and ScaleLXP can evaluate that work as one coordinated process while still preserving an individual result for every student. Instructors do not have to manage dozens of separate AI requests, and students receive outcomes tied to their own choices, profile, history, and constraints.

## Reliability Is Part of the Experience

![A resilient simulation pipeline protected by validation, recovery, and observability layers](/images/blogs/building-a-dynamic-learning-simulation-platform/reliability.png)

Dynamic systems need stronger guardrails than fixed ones.

The more instructors can configure, the more carefully the application has to validate definitions, preserve classroom boundaries, apply sensible defaults, handle incomplete submissions, and recover from interrupted processing.

Much of our recent work has been in those less visible details:

- Making challenge transitions explicit and testable
- Keeping results hidden until they are actually ready
- Preventing feedback from being released too early
- Preserving historical ledger data across multiple rounds
- Supporting cancellation and clean reprocessing
- Making dashboards and calculations derive from current definitions
- Improving instructor visibility into missing work and processing status

Students may never see the machinery behind those behaviors. They should simply experience a platform that feels coherent.

That is the standard we care about. Reliability is not separate from user experience; it is one of its ingredients.

## What We Learned

![The connected layers of a dynamic learning simulation platform](/images/blogs/building-a-dynamic-learning-simulation-platform/connected-architecture.png)

The biggest lesson from this phase of ScaleLXP is that flexibility cannot live in only one layer.

A dynamic form attached to a fixed API is not a dynamic platform. Neither is a flexible data model feeding a dashboard full of hard-coded assumptions.

The real work is connecting the layers:

```text
Classroom definitions
        ↓
Challenge and profile setup
        ↓
Student decisions
        ↓
Structured AI evaluation
        ↓
Persistent metrics and explanations
        ↓
Dashboards, debriefs, and exports
```

Each layer needs to understand the same configuration, respect the same lifecycle, and produce data the next layer can trust.

That is what we have been building: not simply more options, but a stronger system for turning an instructor’s learning objective into a complete, measurable simulation.

## The Platform Is Becoming the Curriculum Engine

![An instructor and students exploring choices and consequences in an interactive supply-chain simulation](/images/blogs/building-a-dynamic-learning-simulation-platform/curriculum-engine.png)

ScaleLXP began with a focused goal: help students experience supply chain decisions instead of only reading about them.

The recent web app and API work expands what that idea can become.

Instructors can shape challenges around the lesson. Profiles can represent different operating realities. Metrics can define success in context. AI can process and explain outcomes at classroom scale. And the entire experience can remain understandable while substantial work happens asynchronously behind the scenes.

We are still building, testing, and learning from real classroom use. But the direction is clear: the more the software can adapt to the lesson, the more the lesson can stay focused on what matters—decisions, consequences, and understanding.
