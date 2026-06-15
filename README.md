# 🔧 Product Support Portal

AI powered Product Support Portal that helps users diagnose 
product issues through step by step troubleshooting instead of giving direct answers.

# Problem Statement
Build a platform where companies can list their products and users
can quickly find answers to product related questions and issues.
Unlike traditional chatbots or search engines,the asistant should 
diagnose problems through investigation,elimination and resonong using
trusted manufacturer documentation and support materials.


# Solution
Product Support Portal is an intelligent support platform that combines 
product information with an AI-powered Diagnostic Assistant.
Instead of providing direct answer,the assistant behaves likes a mechanic,technician
or support engineer.It asks relevant diagnostic questions,investigates
symptoms,identifies possible root causes and provides practical
solutions based on the user's responses.
This creates a more realistic troubleshooting experience and helps users 
understand,maintain and resolve product issues effectively.


## 🌟 Features
-Product Selection
-AI Diagnostic Assistant
-Root Cause Analysis
-Step by Step Troubleshooting
-Solution Recommendations
-Diagnostic Report Generation
-Conversation History Storage
-Multi Product Support


### For Users
- Browse and search products
- View product details and documentation
- AI Diagnostic Assistant — talks like a real technician
- Chat history saved automatically

# How It Works
1.Select a product.
2.Describe the issue.
3.AI Investigates the problem step by step.
4.Root Cause is identified.
5.Solution is provided.
6.Diagnostic report is generated.

## 🤖 AI Diagnostic Assistant
The assistant does NOT give direct answers.
It asks questions step by step — just like a real mechanic would — 
and slowly diagnoses the root cause of the problem.

**Example:**
- User: "My AC is not cooling"
- Assistant: "Is the compressor running? Do you hear any sound when AC starts?"

## 🛠️ Tech Stack
- HTML, CSS, JavaScript
- LocalStorage for data
- OpenRouter API (free) for AI
- Model: OpenAI GPT-OSS-120B

# Demo video link
https://drive.google.com/file/d/1vbR9R0ZXbW2xFGBJW7TvyG2Cu0i9cYgS/view?usp=drivesdk

## 🚀 How to Run

1. Clone this repo
2. Open in VS Code
3. Add your OpenRouter API key in `assistant.html`:
```javascript
   const OPENROUTER_API_KEY = "your-key-here";
```
4. Run with Live Server

## 🔑 Get Free API Key
1. Go to openrouter.ai
2. Sign up for free
3. Create API key
4. Use any free model

# Future Enhancements
-Repair Cost Estimator
-PDF Report Download
-Admin Dashboard
-User Authenication
-Analytics Dashboard

## 📁 Project Structure
|-index.html #Product Marketplace
|-product.html #Product detail page
|-assistant.html #AI Diagnostic Assistant
|-style.css #Styling
|-script.js #JavaScript logic
