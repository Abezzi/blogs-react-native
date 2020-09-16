import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam("id");
	const { state, editBlogPost } = useContext(Context);

	const blogPost = state.find(
		(blogPost) => blogPost.id === navigation.getParam("id")
	);

	return (
		<BlogPostForm
			initialValues={{ title: blogPost.title, content: blogPost.content }}
			onSubmit={(title, content) => {
				editBlogPost(id, title, content, () => navigation.pop());
			}}
		/>
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
