---
id: azure-ai-studio
title: Azure AI Studio
---

# Azure AI Studio Manual

Welcome to the Azure AI Studio Manual. This guide will walk you through the steps to leverage Azure AI Studio for building, testing, and deploying AI models.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Creating an Azure Account](#creating-an-azure-account)
    - [Accessing Azure AI Studio](#accessing-azure-ai-studio)
- [Azure AI Studio Interface](#azure-ai-studio-interface)
    - [Dashboard Overview](#dashboard-overview)
    - [Projects and Hubs](#projects-and-hubs)
- [Model Management](#model-management)
    - [Deploying a Model](#deploying-a-model)
    - [Using Existing Models](#using-existing-models)
    - [Fine-Tuning a Model](#fine-tuning-a-model)
- [Interactive Playgrounds](#interactive-playgrounds)
    - [Chat Mode](#chat-mode)
    - [Assistant Mode](#assistant-mode)
- [Content Safety and Compliance](#content-safety-and-compliance)
- [Advanced Tools](#advanced-tools)
    - [Prompt Flow](#prompt-flow)
    - [Performance Monitoring](#performance-monitoring)
- [FAQ](#faq)
- [Conclusion](#conclusion)

---

## Getting Started

### Prerequisites
Before using Azure AI Studio, you will need the following:

- An **Azure account** with a valid subscription.
- Familiarity with AI concepts like **Natural Language Processing (NLP)** and **machine learning models**.
- Basic programming skills in **Python** or **JavaScript** (optional but helpful).

### Creating an Azure Account

If you do not have an Azure account, you can create one by following these steps:

1. Go to the [Azure Sign Up page](https://azure.microsoft.com/en-us/free/).
2. Click on **Start for Free**.
3. Complete the registration process using your email, phone number, and billing information.
4. You will receive **$200 in credits** for the first month.

Once your account is created, you can access **Azure AI Studio** through the Azure portal.

### Accessing Azure AI Studio

To access Azure AI Studio:

1. Log into your [Azure Portal](https://portal.azure.com).
2. In the search bar, type **"Azure AI Studio"** and select it.
3. If this is your first time, you may need to create a **new Hub** or **Project**. This will allow you to group your AI models and experiments.

## Azure AI Studio Interface

### Dashboard Overview

The **Dashboard** provides an overview of your ongoing projects and active models. The main sections of the dashboard include:

- **Hubs**: These are containers for organizing your projects.
- **Projects**: Each project can contain multiple models, datasets, and experiments.
- **Recent Activity**: Displays recent model deployments, fine-tuning jobs, and interactive tests.
- **Resources**: Lists compute resources being used by your models.

### Projects and Hubs

A **Hub** is a high-level organization unit for grouping multiple **projects**. Projects contain your models, datasets, and experiments. To create a project:

1. Navigate to **Projects** in the side menu.
2. Click **Create Project** and provide a name, description, and relevant tags.
3. Assign your project to a **Hub** and select a **Region**.

## Model Management

### Deploying a Model

You can deploy pre-trained models from Azure’s library or upload your own model for inference.

1. Navigate to the **Models** section.
2. Click **Deploy Model**.
3. Choose from available models like **LLaMA**, **GPT-4**, or **Microsoft Research Models**.
4. Configure the deployment options such as **compute resources** and **region**.

### Using Existing Models

To use an existing model:

1. In the **Models** tab, click **View** next to the model you wish to use.
2. You will see options to test the model directly in **Playground** or deploy it for production use.

### Fine-Tuning a Model

To fine-tune a model on your own data:

1. Upload your dataset in the **Datasets** section.
2. In **Models**, select the model you want to fine-tune.
3. Click **Fine-Tune** and configure the settings for learning rate, epochs, and other hyperparameters.
4. Monitor the progress of fine-tuning in the **Jobs** section.

## Interactive Playgrounds

### Chat Mode

In **Chat Mode**, you can test various models by interacting with them in real-time. This is useful for:

- **Language learning**: Ask the model for translations or explanations.
- **Programming assistance**: Get help with code snippets or debugging.

To use Chat Mode:

1. Navigate to **Playgrounds**.
2. Select **Chat**.
3. Type your question or prompt and click **Send**.

### Assistant Mode

**Assistant Mode** allows you to build multi-step workflows where the AI can handle more complex interactions, such as guiding users through tasks or answering specific queries. To set it up:

1. Go to **Assistants**.
2. Define steps for the interaction.
3. Test and tweak the workflow as needed.

## Content Safety and Compliance

Azure AI Studio integrates with **Azure AI Content Safety** to monitor text and images for harmful content. You can enable content filters when deploying models to ensure compliance with safety standards.

1. In **Deploy Model**, enable **Content Safety** under the advanced settings.
2. Configure thresholds for flagging content that violates guidelines.

## Advanced Tools

### Prompt Flow

The **Prompt Flow** tool allows you to create custom workflows that involve chaining different models or services together. You can use it to:

- **Combine multiple models** for complex tasks.
- **Integrate external APIs** or datasets.

To access Prompt Flow:

1. Navigate to **Advanced Tools**.
2. Select **Prompt Flow** and create a new flow by defining steps and conditions.

### Performance Monitoring

Azure AI Studio provides **real-time monitoring** tools to track the performance of your models. This includes:

- **Latency metrics**.
- **Token usage**.
- **Accuracy and precision** of responses.

These metrics can be accessed in the **Monitor** tab for each deployed model.

## FAQ

### How do I choose between Hub and Project?
- **Hub** is for high-level organization, suitable for teams working on multiple projects. **Project** is where you define individual AI experiments and models.

### Can I fine-tune models on my own data?
- Yes, you can upload datasets and fine-tune pre-trained models in the **Models** section.

## Conclusion

Azure AI Studio provides a powerful platform for building, testing, and deploying AI models. By leveraging its full capabilities, including Hubs, Projects, and advanced tools like Prompt Flow, you can create sophisticated AI solutions that are production-ready.
