import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import ListItem from "../components/ListItem";

// APIを読み込むためのもの
import Constants from "expo-constants";
import axios from "axios";

// APIのURL
const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

// articlesをstateでもつ
export default HomeScreen = (props) => {
  const { navigation } = props;
  const [articles, setArticles] = useState([]);

  //useEffectで画面がマウントされたときだけ発火するようになる
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            // 画面遷移
            onPress={() => navigation.navigate('Article', {article:item}
            )}
          />
        )}
        // keyExtractorに値を振り分ける
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
