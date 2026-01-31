#Playwright Test Automation Project - Singlish to Sinhala Transliteration

###ITPM - ITPM - Assignment 01 

## 👤 Student Information
| Field | Details |
| *Name* | Nethmini S A T |
| *Student ID* | IT23591202 |
| *Specialization* | Information Technology |
| *Option Selected* | Option 1 (Singlish to Sinhala) |

## 📋 Project Description

This repository hosts a comprehensive automation framework designed for the [SwiftTranslator](https://www.swifttranslator.com/) web application. Utilizing  **Playwright**, the suite is engineered to validate translation precision and ensure the seamless performance of critical user interface components.

## 🛠 Tech Stack

- *Framework:* [Playwright](https://playwright.dev/)
- *Language:* JavaScript (Node.js)
- *Reporting:* Playwright HTML Reporter
- *Source Control:* GitHub

### Test Coverage

The automation framework includes **40 comprehensive test cases**:

- **29 Positive Functional Tests** - Validating accurate transliteration across various scenarios
- **10 Negative Functional Tests** - Testing edge cases and system robustness
- **1 UI Behavior Test** - Verifying real-time output functionality

## 🎯 Test Scope

### Positive Functional Tests Cover:
- Simple, compound, and complex sentences
- Interrogative and imperative forms
- Past, present, and future tenses
- Positive and negative sentence forms
- Polite vs informal phrasing
- Daily language usage scenarios (greetings, requests, responses)
- Word combinations (joined words, repeated words for emphasis)
- Mixed Singlish with English (technical terms, brands, places)
- Currency, time formats, dates, and numeric formats
- Multiple spaces, line breaks, and paragraph formatting
- Slang and colloquial expressions
- Long inputs (≥300 characters)

### Negative Functional Tests Cover:
- Email and URL transliteration errors
- Password handling issues
- Phonetic errors (w/v confusion, vowel length)
- Spacing and typo handling
- English word breakdown errors
- Slang and typo transliteration issues
- Mixed language case handling

### UI Tests Cover:
- Real-time transliteration behavior
- UI responsiveness
- Output field validation

## 📦 Installation

Follow these steps to set up the project:

### 1. Navigate to the project directory

```bash
cd "C:\Users\HP\Downloads\IT23591202 ITPM"
```
### 2. Install dependencies

```bash
npm install
```
### 3. Install Playwright browsers

```bash
npx playwright install
```

## 🚀 Running Tests


### 1.Run All Tests (Headed) 
```bash
npx playwright test --headed
```

### 2.Run Accuracy Tests

```bash
npx playwright test tests/assignment.spec.js --headed
```

### 3.Run UI-Related Tests

```bash
npx playwright test tests/test.spec.js --headed
```

### 4.View Test Report 

```bash
npx playwright show-report
```
## 📁 Project Structure

```
├── .github/workflows/
│   └── playwright.yml       # GitHub Actions CI configuration
├── tests/
│   ├── assignment.spec.js   # Accuracy validation scenarios (24+ cases)
│   └── UI_test.spec.js      # UI-related and edge case scenarios
├── playwright.config.js     # Playwright global configuration
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Locked dependency versions
├── .gitignore               # Files to be excluded from Git
├── README.md                # Project documentation and setup guide
└── IT23591202 (version 1).xlsx  # Completed Test Case document (Appendix 2)
```

## 📊 Test Scenarios Covered
Accuracy Validation: Testing complex sentences, mixed languages, punctuation, and numerical data.

UI Functionality: Verification of the "Clear" button to ensure it properly resets the input and output fields.

---

## 📊 Test Execution Report
Here is the summary of the test execution results:

![Playwright Test Report](./screenshots_report.png)

| Test ID | Description | Input Length |
|---------|-------------|--------------|
| Pos_Fun_0001 | Greeting / request / response | S |
| Pos_Fun_0002 | Present tense plural sentence | S |
| Pos_Fun_0003 | Complex sentence with past | S |
| Pos_Fun_0004 | Interrogative with punctuation Input length | S |
| Pos_Fun_0005 | Future tense with pronoun variation | S |
| Pos_Fun_0006 | Polite request (Imperative) | S |
| Pos_Fun_0007 | Negation pattern in simple sentence| S |
| Pos_Fun_0008 | Compound sentence | M |
| Pos_Fun_0009 | Plural form with numbers  | S |
| Pos_Fun_0010 | Mixed Singlish (Brand Name) | S |
| Pos_Fun_0011 | Repeated words for emphasi  | S |
| Pos_Fun_0012 | Long paragraph input (Robustness/Accuracy)  | L |
| Pos_Fun_0013 | Colloquial slang usage | S |
| Pos_Fun_0014 | Multi-word phrase with punctuation | S |
| Pos_Fun_0015 | Mixed Singlish and Sinhala locations | S |
| Pos_Fun_0016 | Negation of plural form | S |
| Pos_Fun_0017 | Formatting with line breaks | S |
| Pos_Fun_0018 | Compound request  | S |
| Pos_Fun_0019 | Technical terms in Singlish | S |
| Pos_Fun_0020 | Long sentence with multiple pronouns | M |
| Pos_Fun_0021 | Slang response | M |
| Pos_Fun_0022 | Complex negation with future tense | M |
| Pos_Fun_0023 | Medium length simple instruction | S |
| Pos_Fun_0024 | Handling major typos in common words| M |


### Negative Functional Tests (10)

| Test ID | Description | Input Length |
|---------|-------------|--------------|
| Neg_Fun_0001 | Handling major typos in common words | S |
| Neg_Fun_0002 | Mixed English/Singlish ambiguity | S |
| Neg_Fun_0003 | Empty input handling | S |
| Neg_Fun_0004 | Excessive white space handling | S |
| Neg_Fun_0005 | Unknown special symbols | S |
| Neg_Fun_0006 | Ambiguous phonetic mapping (Mahaprana) | S |
| Neg_Fun_0007 | Joined word variation | M |
| Neg_Fun_0008 | Slang with non-standard characters | S |
| Neg_Fun_0009 | Incorrect pronoun/case mapping | S |
| Neg_Fun_0010 | Handling non-linguistic phonetic strings (Gibberish) | S |


### UI Behavior Test (1)

| Test ID | Description | Input Length |
|---------|-------------|--------------|
| Pos_UI_0001 | Real-time output update behavior | S |


## 📊 Understanding Test Results

After running tests, you'll see:

- ✅ **Passed tests** - Transliteration worked as expected
- ❌ **Failed tests** - Output didn't match expected results
- ⏭️ **Skipped tests** - Tests that were skipped (if any)

Detailed results are available in:
- Console output (immediate feedback)
- HTML report (`playwright-report/index.html`)
- JSON report (`test-results.json`)


  
