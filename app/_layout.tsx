import { store } from "@/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { Provider } from "react-redux";

export default () => (
    <Provider store={store}>
        <BottomSheetModalProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </BottomSheetModalProvider >
    </Provider>

)