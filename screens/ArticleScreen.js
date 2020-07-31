import React from "react";
import {
  StyleSheet,
  Image,
  View,
  FlatList,
  SafeAreaView,
  SafeAreaViewComponent,
} from "react-native";
import { WebView } from "react-native-webview";

export default ArticleScreen = ({route}) => {
  const { article } = route.params;
  return (
    <WebView source={{ uri: article.url }} />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
