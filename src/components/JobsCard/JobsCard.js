import React from "react";
import {SafeAreaView,Text,View,TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import styles from "./JobsCard.style";

function JobsCard({job,select})
{
    return(
        <TouchableWithoutFeedback onPress={select}>
            <SafeAreaView style={styles.container}>
        <View style={styles.body_container}>
        <Text style={styles.jobname} >{job.name}</Text>
            <Text style={styles.kind}  >{job.company.name}</Text>
            <TouchableOpacity disabled={true} style={styles.count}  >
                <Text style={styles.text}  >{job.categories[0].name}</Text>
                
            </TouchableOpacity >
            <Text  style={styles.level} >{job.type}</Text>
        </View>
       
    </SafeAreaView>
        </TouchableWithoutFeedback>
        
    
    )
    
}
export default JobsCard;