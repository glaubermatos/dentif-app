import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
    children: ReactNode;
}

export const Container: React.FC<Props> = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
    }
});