import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { NavigationActions } from "react-navigation";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const { addBlogPost } = useContext(Context);

	return (
		<View>
			<Text>Edit Screen</Text>
			<Text style={styles.label}>Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Content:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Button
				title="Add Blog Post"
				onPress={() => {
					addBlogPost(title, content, () => {
						navigation.navigate("Index");
					});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		fontSize: 20,
		borderWidth: 1,
		borderColor: "black",
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	label: {
		fontSize: 20,
		padding: 5,
		margin: 5,
	},
});

export default EditScreen;
