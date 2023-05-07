import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header = () => {
	const [addedList, setAddedList] = useState(false);
	const addListItem = () => {
		console.warn("Added Items");
	};
	return (
		<>
			<View style={styles.top}>
				<Image
					source={require("../../assets/ja-02.png")}
					style={styles.profileImage}
				/>
				<View styles={styles.iconButton}>
					<Feather
						onPress={addListItem}
						name='bell'
						size={32}
						color='#023047'
					/>
					<View style={styles.colorDot}>
						<Text
							style={addedList ? styles.countList : { display: "none" }}
						></Text>
					</View>
				</View>
			</View>

			<View style={{ marginTop: 10 }}>
				<Text style={styles.subtitle}>Hello, Jennet!</Text>
				<View style={{ marginTop: 5 }}>
					<Text style={styles.subtitle2}>
						Make your own{"\n"}Delicacies at{" "}
						<Text style={{ color: "#ffb703" }}>home</Text>
					</Text>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	top: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 5,
	},
	profileImage: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	iconButton: {
		justifyContent: "space-between",
	},
	colorDot: {
		flex: 1,
		alignSelf: "flex-end",
		position: "absolute",
		width: 15,
		height: 15,
		backgroundColor: "#ffb703",
		borderRadius: 50,
	},
	countList: {
		textAlign: "center",
	},
	subtitle: {
		fontWeight: 300,
		fontSize: 16,
		color: "#023047",
		letterSpacing: 2,
	},
	subtitle2: {
		fontSize: 20,
		fontWeight: 600,
		letterSpacing: 2,
		lineHeight: 30,
	},
});

export default Header;
