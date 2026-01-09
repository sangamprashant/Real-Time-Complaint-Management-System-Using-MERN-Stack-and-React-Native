import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Welcome to RCMS",
    description:
      "A smart platform to register, track and resolve complaints in real time.",
  },
  {
    id: "2",
    title: "Track Complaints",
    description:
      "Monitor complaint status with real-time updates and notifications.",
  },
  {
    id: "3",
    title: "Secure & Transparent",
    description:
      "Role-based access ensures complete data security and transparency.",
  },
  {
    id: "4",
    title: "Get Started",
    description:
      "Login or register to begin using the complaint management system.",
  },
];

const Index = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      sliderRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      router.replace("/(auth)/Login");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={sliderRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
      />

      {/* Indicators */}
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentIndex === i && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.replace("/(auth)/Login")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1
              ? "Go to Login"
              : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2563EB",
    marginBottom: 12,
  },
  desc: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
    lineHeight: 24,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#CBD5E1",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#2563EB",
    width: 18,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 30,
    alignItems: "center",
  },
  skip: {
    color: "#6B7280",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },
});
