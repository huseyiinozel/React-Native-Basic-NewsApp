import React from "react";
import { SafeAreaView, View , Text , FlatList, StyleSheet,ScrollView, Image, Dimensions} from "react-native";
import news_data from './news_data.json';
import Newscard from "./components/newscard";
import newsbanner from "./news_banner_data.json";
function App() {
    const rendernews = ({item}) => <Newscard news={item} />;
    const keytry = item  => item.uid.toString();


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header} >News</Text>
            <Text>Commit Try</Text>
            <View>
           
            <FlatList
            ListHeaderComponent={()=>(
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {newsbanner.map(bannernews => <Image style={styles.banner} source={{uri: bannernews.imageUrl}} />)}
            </ScrollView>
            )}

            keyExtractor={keytry }
            data={news_data}
            renderItem={rendernews}
            
            />
            </View>
            
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundcolor: 'aceff1',
    },
    banner:{
        height:Dimensions.get('window').height / 5,
        width:Dimensions.get("window").width /2

    },
    header:{
        fontWeight: 'bold',
        fontSize:50
    }
    })
export default  App;