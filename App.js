
import React, {useState,useEffect} from 'react';
import { StyleSheet, Image, Text, View,FlatList,SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json';


export default function App() {

  const [articles, setArticles] = useState([]);

  //useEffectで画面がマウントされたときだけ発火するようになる
  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        // keyExtractorに値を振り分ける
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
