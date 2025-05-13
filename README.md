# PromptKit - React Native Mobile Application

## Table of Contents

1. [Introduction](#1-introduction)
2. [Key Features](#2-key-features)
3. [Technology Stack](#3-technology-stack)
4. [Project Structure](#4-project-structure)
5. [Getting Started](#5-getting-started)
6. [Development](#6-development)

## 1. Introduction

PromptKit is a React Native mobile application that provides a modern and efficient way to manage prompts and interactions. The application is built with a focus on performance, maintainability, and user experience.

## 2. Key Features

- Authentication system with multiple sign-in options
- Modern UI with theme support
- Cross-platform compatibility (iOS and Android)
- Type-safe development with TypeScript
- Efficient state management
- Responsive and intuitive user interface

## 3. Technology Stack

- **Core Framework:**

  - React Native
  - TypeScript

- **State Management:**

  - Redux Toolkit

- **Navigation:**

  - React Navigation

- **UI & Styling:**

  - React Native's built-in components
  - Custom theme system
  - React Native Elements for styling

- **Code Quality:**
  - ESLint
  - Prettier

## 4. Project Structure

```
src/
├── app/                          # Core application-level services
│   ├── providers/                # Context providers
│   ├── navigation/               # Navigation configuration
│   └── theme/                    # Theme configuration
├── features/                     # Feature modules
│   ├── auth/                     # Authentication feature
│   │   ├── views/               # UI components
│   │   ├── models/              # Data models
│   │   └── api/                 # API integration
│   └── ...                      # Other features
└── shared/                      # Shared utilities and components
```

## 5. Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- React Native development environment setup
- iOS: Xcode (for Mac)
- Android: Android Studio

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd PromptKit
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Install iOS dependencies (iOS only):

```bash
cd ios
pod install
cd ..
```

## 6. Development

### Running the Application

#### iOS

```bash
yarn ios
# or
npm run ios
```

#### Android

```bash
yarn android
# or
npm run android
```

### Code Style

This project uses ESLint and Prettier for code formatting. To ensure consistent code style:

```bash
# Check for linting issues
yarn lint

# Format code
yarn format
```

### TypeScript

The project uses TypeScript for type safety. To check for type errors:

```bash
yarn tsc
```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[Add your license information here]
