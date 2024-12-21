# React Native Expo Template 📱

A modern, fully-featured React Native template with Expo, TypeScript, and best practices setup out of the box.

## ✨ Features

- 🚀 [Expo](https://expo.dev/) for cross-platform development
- 📱 [Expo Router](https://expo.github.io/router/docs/) for navigation
- 🔥 [TypeScript](https://www.typescriptlang.org/) for type safety
- 💅 [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) for smooth animations
- 🧪 [Jest](https://jestjs.io/) for testing
- 🎯 [Biome](https://biomejs.dev/) for linting and formatting
- 📝 [Commitizen](https://commitizen-tools.github.io/commitizen/) & [Commitlint](https://commitlint.js.org/) for consistent commits
- 🔄 [Semantic Release](https://semantic-release.gitbook.io/) for automated versioning
- 🪝 [Lefthook](https://github.com/evilmartians/lefthook) for Git hooks

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
git clone https://github.com/yourusername/react-native-templete.git

# Navigate to the project directory
cd react-native-templete

# Install dependencies
pnpm install

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
- `pnpm lint:fix` - Fix code style issues
- `pnpm typecheck` - Check TypeScript types
- `pnpm clean` - Clean build files and dependencies
- `pnpm commit` - Create a new commit using Commitizen
- `pnpm prepare` - Install git hooks using Lefthook

## 🏗️ Project Structure

```
src/
├── app/          # Expo Router pages
├── components/   # Reusable components
├── constants/    # App constants
├── hooks/        # Custom hooks
└── utils/        # Helper functions
```

## 📝 Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) with Commitizen for consistent commit messages. Instead of `git commit`, use:

```bash
pnpm commit
```

## 🔄 Automated Releases

This project uses Semantic Release for automated versioning and changelog generation. The release process is triggered on the `main` branch when commits follow the conventional commit format.

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

## 🧹 Code Style

This project uses Biome for linting and formatting. Check and fix code style issues:

```bash
# Check for issues
pnpm lint

# Fix issues automatically
pnpm lint:fix

# Format code
pnpm format
```

## 📱 Development Workflow

1. Create a new branch for your feature/fix
2. Make your changes
3. Run `pnpm typecheck` and `pnpm lint` to check for issues
4. Use `pnpm commit` to create a conventional commit
5. Push your changes and create a pull request

## 🔧 VS Code Configuration

This project includes recommended VS Code settings and extensions. Install them from the Extensions panel by searching for `@recommended`.

## 🧹 Clean Project

To clean the project and remove all dependencies:

```bash
pnpm clean
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes using `pnpm commit`
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Learning Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Expo Router Documentation](https://expo.github.io/router/docs/)