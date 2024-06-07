import LocalizedStrings from "react-native-localization";

export const translations = new LocalizedStrings({
  en: {
    onboarding: {
      title1: "Lorem Ipsum is simply dummy text?",
      title2: "Lorem Ipsum is simply dummy text?",
      title3: "Lorem Ipsum is simply dummy text?",
      description1:
        "Welcome !!! Do you want to clear task super fast with Mane?",
      description2:
        "Easily arrange work order for you to mange. Many functions to choose.",
      description3:
        "It has been easier to complete tasks. Get started with us!",
    },
    auth: {
      signIn: "Sign In",
      signUp: "Sign Up",
      orSignInWith: "Or sign in with",
      orSignUpWith: "Or sign up with",
      username: "Username",
      password: "Password",
      confirmPassword: "Confirm Password",
      forgotPasswordQ: "Forgot password?",
      alreadyHaveAnAccount: "Already have an account?",
      youDontHaveAnAccount: "You don't have an account?",
    },
    skip: "Skip",
    login: "Login",
    getStarted: "Get started",
  },
});

translations.setLanguage("en");