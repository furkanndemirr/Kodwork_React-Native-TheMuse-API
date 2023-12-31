import React from "react";
import {View,Text,FlatList,Button,Alert,TouchableOpacity} from 'react-native';
import styles from './Favorites.style'
import {useSelector} from 'react-redux'
import JobsCardStyle from "../../components/JobsCard/JobsCard.style";
import JobsCard from "../../components/JobsCard/JobsCard";
import {useDispatch}  from 'react-redux'
function Favorites ({navigation}) {

    const dispatch = useDispatch();

    function goDetail (info) {

        navigation.navigate("Detail",{info})
      }


    const renderjob =({item}) => (

        <View>
         <JobsCard job={item} select={()=> goDetail(item)} ></JobsCard>

         <TouchableOpacity  style={styles.button}  onPress={() => remove(item)} >
            <Text style={styles.title} > Delete  </Text>
         </TouchableOpacity>
        </View> 
     )

     const remove = (item) => {
        dispatch({type: 'REMOVE_FAV',payload:{id: item.id}})
        Alert.alert("Favorites","removed")
    }
    

    const list = useSelector(s=> s.favList)

    const flatListData = list
    
    return (
        
        <View  style={{backgroundColor:'black'}} >
            
            <FlatList 
            data={flatListData}
            renderItem={renderjob}
            
            
            
            
            />
            

        </View>


    )
}

export default Favorites;