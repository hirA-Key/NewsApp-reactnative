
import React from 'react';
import { StyleSheet, Image, Text, View,FlatList,SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import articles from './dummies/articles.json';

export default function App() {
  //jsonから値を収集
  // const items = articles.map(( article,index ) => {
  //   return (
  //     <ListItem
  //       imageUrl={article.urlToImage}
  //       title={article.title}
  //       author={article.author}
  //       key={index}
  //     />
  // )} )
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
