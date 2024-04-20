import { RootStackParamList } from "@constants/navigatorTypes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
