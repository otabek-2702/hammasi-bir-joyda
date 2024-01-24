import { Tabs } from "expo-router";
import CustomHeader from "@/components/custom-header";
import { AntDesign, FontAwesome, Octicons } from "@expo/vector-icons";
import { SIZES } from "@/constants";

export default () => {
    return (

        <Tabs screenOptions={{
            title: '',
            tabBarActiveTintColor: '#db3e25',
            tabBarInactiveTintColor: '#000000',
            tabBarBadgeStyle: { borderRadius: 50 },
            tabBarStyle: {
                height: 60,
                paddingTop: SIZES.small
            },
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    header: () => <CustomHeader />,
                    tabBarIcon: ({ color, }) => {
                        return (
                            <AntDesign name="home" size={26} color={color} />
                        )
                    },
                }}
            />
            <Tabs.Screen
                name="favourites"
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="hearto" size={26} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="basket"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="shopping-basket" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Octicons name="person" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>

    )
}
