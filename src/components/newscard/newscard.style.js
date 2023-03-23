import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin: 15,
        borderRadius:20,

    },
    image:{
        height:Dimensions.get('window').height / 4,
        borderRadius:20,


    },
    title:{
        fontWeight:'bold',
        fontSize:20,

    },
    description:{
        marginTop:4,

    },
    inner:{
        padding:10,
    },
    author:{
        fontStyle: 'italic',
        textAlign:'right',

    },

})