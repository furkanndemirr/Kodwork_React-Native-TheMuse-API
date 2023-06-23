import React from "react";
import {SafeAreaView,Text,FlatList} from "react-native";
import JobsCard from "../components/JobsCard/JobsCard";
import useFetch from "../hooks/useFetch";
function First({navigation})
{
    function goDetail (info) {

        navigation.navigate("Detail",{info})
      }
    const {data,loading} = useFetch("https://www.themuse.com/api/public/jobs" + '?page=');

    const renderjobs = ({item}) => <JobsCard job={item} select={()=> goDetail(item)}></JobsCard>
    if(loading)
    {
        return <Text>Yükleniyor</Text>
    }
    const flatListData = data.flatMap(item => item.results);
    return(
        
        <SafeAreaView>
            <FlatList data={flatListData} renderItem={renderjobs}></FlatList>
        </SafeAreaView>
           
        
    )
}
export default First;