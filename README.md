# MechGo - Emergency Roadside Assistance App 🔧

A modern React Native Expo application connecting stranded motorists with nearby mechanics in real-time. Built with TypeScript and following industry best practices.

## ✨ Core Features

- 🚨 **Emergency SOS System**
  - One-tap emergency mechanic dispatch
  - Real-time location sharing
  - Smart mechanic matching algorithm

- 📱 **Modern Tech Stack**
  - [Expo](https://expo.dev/) for cross-platform development
  - [Expo Router](https://expo.github.io/router/docs/) for navigation
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) for smooth animations

- 🔒 **Security & Verification**
  - Mechanic identity verification
  - Secure payment processing
  - End-to-end chat encryption
  - Real-time tracking protection

- 💳 **Business Features**
  - Multiple payment methods
  - Service cost calculator
  - Invoice generation
  - Earnings analytics for mechanics

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v8 or newer)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/) (for iOS development)
- [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/) (for Android development)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mechgo.git

# Navigate to the project directory
cd mechgo

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Start the development server
pnpm start
```

## 📜 Available Scripts

- `pnpm start` - Start the Expo development server
- `pnpm android` - Run on Android device/emulator
- `pnpm ios` - Run on iOS simulator
- `pnpm web` - Run on web browser
- `pnpm test` - Run tests in watch mode
- `pnpm lint` - Check code style issues
- `pnpm format` - Format code with Biome
- `pnpm typecheck` - Check TypeScript types
- `pnpm commit` - Create a new commit using Commitizen

## 🏗️ Project Structure

```
src/
├── app/                # Expo Router pages
│   ├── auth/          # Authentication screens
│   ├── mechanic/      # Mechanic dashboard
│   └── user/          # User screens
├── components/         # Reusable components
│   ├── common/        # Shared components
│   ├── mechanic/      # Mechanic-specific components
│   └── user/          # User-specific components
├── hooks/             # Custom hooks
├── services/          # API and third-party services
├── store/             # State management
├── types/             # TypeScript types
└── utils/             # Helper functions
```

## 🛠️ Technical Architecture

### Frontend Features
- 🎯 TypeScript for enhanced developer experience
- 📱 Expo Router for file-based routing
- 💫 React Native Reanimated for smooth animations
- 🎨 Native Base UI components
- 🔄 Real-time updates with Socket.IO
- 📍 Location tracking with Expo Location

### Backend Integration
- 🔥 Firebase Authentication
- 📡 RESTful API with Express.js
- 📦 MongoDB for data persistence
- 🚦 Socket.IO for real-time features
- 🗺️ Google Maps API integration

## 🧪 Quality Assurance

### Testing
```bash
# Run tests
pnpm test

# Check TypeScript types
pnpm typecheck

# Lint code
pnpm lint
```

### Code Quality Tools
- 🎯 Biome for linting and formatting
- 📝 Commitizen for consistent commits
- 🔄 Semantic Release for versioning
- 🪝 Lefthook for Git hooks

## 🚀 Deployment

### Development
1. Configure environment variables
2. Start the development server
3. Use Expo Go app for testing

### Production
1. Build the app using EAS Build
2. Submit to App Store and Play Store
3. Configure CI/CD pipeline

## 📱 App Variants

- 🚗 User App: For motorists seeking assistance
- 🔧 Mechanic App: For service providers
- 👨‍💼 Admin Dashboard: For system management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Run tests (`pnpm test`)
4. Commit changes using Commitizen (`pnpm commit`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛣️ Roadmap

### Phase 1 (Q1 2024)
- [ ] Core user and mechanic apps
- [ ] Basic location services
- [ ] Authentication system

### Phase 2 (Q2 2024)
- [ ] Payment integration
- [ ] Chat system
- [ ] Rating system

### Phase 3 (Q3 2024)
- [ ] AI-powered diagnostics
- [ ] Parts marketplace
- [ ] Advanced analytics

## 🤝 Support

- 📧 Email: support@mechgo.com
- 💬 Discord: [Join our community](https://discord.gg/mechgo)
- 📚 Documentation: [docs.mechgo.com](https://docs.mechgo.com)

---

<p align="center">Built with ❤️ using <a href="https://expo.dev">Expo</a> and <a href="https://reactnative.dev">React Native</a></p>