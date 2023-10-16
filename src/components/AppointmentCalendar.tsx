import { CalendarBlank, Clock } from "phosphor-react-native";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../styles/theme";

export const AppointmentCalendar = () => {

    function renderDayItem(item: string, isActive: boolean = false) {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                style={[
                    styles.dayItemContainer, 
                    isActive && {
                        backgroundColor: THEME.COLORS.BLUE,
                        borderColor: 'transparent'
                    }
                ]}
            >
                <Text 
                    style={[
                        styles.dayItemText,
                        isActive && {
                            color: THEME.COLORS.WHITE
                        }
                    ]}
                >
                    Seg
                </Text>

                <Text
                    style={[
                        styles.dayItemDate,
                        isActive && {
                            color: THEME.COLORS.WHITE
                        }
                    ]}
                >
                    {item}
                </Text>

                <Text
                    style={[
                        styles.dayItemMonth,
                        isActive && {
                            color: THEME.COLORS.WHITE
                        }
                    ]}
                >
                    Out
                </Text>
            </TouchableOpacity>
        );
    }

    function renderTimeItem(time: {time: string, time2: string}) {
        return (
            <View style={styles.timeContainer}>
                <TouchableOpacity 
                    activeOpacity={0.7}
                    style={styles.timeItemContainer}
                >
                    <Text style={styles.timeItemText}>
                        {time.time}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={0.7}
                    style={styles.timeItemContainer}
                >
                    <Text style={styles.timeItemText}>
                        {time.time2}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.labelContainer}>
                    <CalendarBlank size={20} color={THEME.COLORS.BLUE} />

                    <Text>Data da consulta</Text>
                </View>

                <FlatList 
                    data={['16', '17', '18', '19', '20', '21']}
                    horizontal 
                    keyExtractor={(item) => item}
                    renderItem={({item}) => renderDayItem(item)}
                    contentContainerStyle={{
                        paddingLeft: 24,
                        gap: 16,
                        paddingRight: 24
                    }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View>
                <View style={styles.labelContainer}>
                    <Clock size={20} color={THEME.COLORS.BLUE} />

                    <Text>Melhor horário para atendimento</Text>
                </View>

                <FlatList 
                    data={[{time: '08:00', time2: '09:00'}, {time: '10:00', time2: '11:00'}, {time: '14:00', time2: '15:00'}, {time: '16:00', time2: '17:00'}]}
                    horizontal 
                    keyExtractor={(item) => item.time}
                    renderItem={({item}) => renderTimeItem(item)}
                    contentContainerStyle={{
                        paddingLeft: 24,
                        gap: 16,
                        paddingRight: 24
                    }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 32
    },
    labelContainer: {
        marginLeft: 24,
        flexDirection: 'row',
        gap: 8,
        marginBottom: 12,

        alignItems: 'center'
    },


    dayItemContainer: {
        width: 62,

        backgroundColor: THEME.COLORS.GRAY_100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.GRAY_200,
        padding: 12,

        alignItems: 'center'
    },
    dayItemText: {
        textTransform: 'uppercase',
        fontSize: THEME.FONT_SIZE.INTER.MD,
        fontFamily: THEME.FONT_FAMILY.INTER.REGULAR,
        color: THEME.COLORS.GRAY_400,
    },
    dayItemDate: {
        fontSize: THEME.FONT_SIZE.INTER.XXL,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD,
        color: THEME.COLORS.GRAY_500,

        marginTop: 6,
        marginBottom: 2
    },
    dayItemMonth: {
        fontSize: THEME.FONT_SIZE.INTER.MD,
        fontFamily: THEME.FONT_FAMILY.INTER.REGULAR,
        color: THEME.COLORS.GRAY_400,
    },


    timeContainer: {
        gap: 12
    },
    timeItemContainer: {
        width: 100,

        backgroundColor: THEME.COLORS.GRAY_100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: THEME.COLORS.GRAY_200,
        paddingVertical: 10,
        paddingHorizontal: 14,

        alignItems: 'center'
    },
    timeItemText: {
        fontSize: THEME.FONT_SIZE.INTER.MD,
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD,
        color: THEME.COLORS.GRAY_400,
    }
});