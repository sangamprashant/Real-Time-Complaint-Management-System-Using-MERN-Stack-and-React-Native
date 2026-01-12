import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>

            {/* CURVED HEADER */}
            <View style={styles.header}>
                <Text style={styles.welcome}>Welcome 👋</Text>
                <Text style={styles.username}>User Dashboard</Text>
            </View>

            {/* CONTENT */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* STAT CARDS */}
                <View style={styles.grid}>

                    <View style={[styles.card, { backgroundColor: "#DBEAFE" }]}>
                        <Text style={styles.cardValue}>12</Text>
                        <Text style={styles.cardLabel}>Total Complaints</Text>
                    </View>

                    <View style={[styles.card, { backgroundColor: "#FEF3C7" }]}>
                        <Text style={[styles.cardValue, { color: "#92400E" }]}>5</Text>
                        <Text style={styles.cardLabel}>In Progress</Text>
                    </View>

                    <View style={[styles.card, { backgroundColor: "#DCFCE7" }]}>
                        <Text style={[styles.cardValue, { color: "#166534" }]}>7</Text>
                        <Text style={styles.cardLabel}>Resolved</Text>
                    </View>

                    <View style={[styles.card, { backgroundColor: "#E0E7FF" }]}>
                        <Text style={styles.cardValue}>+</Text>
                        <Text style={styles.cardLabel}>New Complaint</Text>
                    </View>

                </View>

            </ScrollView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
    },

    header: {
        height: 160,
        backgroundColor: "#2563EB",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        paddingTop: 50,
    },

    welcome: {
        color: "#E0E7FF",
        fontSize: 14,
    },

    username: {
        color: "#FFFFFF",
        fontSize: 26,
        fontWeight: "700",
        marginTop: 4,
    },

    content: {
        flexGrow: 1,
        padding: 20,
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },

    card: {
        width: "48%",
        height: 130,
        borderRadius: 18,
        padding: 16,
        marginBottom: 16,
        justifyContent: "space-between",
        elevation: 4,
    },

    cardValue: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1E3A8A",
    },

    cardLabel: {
        fontSize: 14,
        color: "#374151",
        fontWeight: "600",
    },
});
