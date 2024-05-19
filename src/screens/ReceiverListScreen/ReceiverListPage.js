import React, { useState } from 'react';
import { View, Text,Image, FlatList, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    height:40,
    width:40,
    padding:2,
    paddingRight:7,
  },
  image:{
    height:"100%",
    width:"100%",
    borderRadius:25

  }

})
const ReceiverListPage = ({ senderId }) => {
  const [receivers, setReceivers] = useState([{receiverName:"helmi eroi",
  lastMessage:'hi',
  lastMessageTime:"14/03/24",
  receiverId:1,
  },
  {receiverName:"anime salem",
  lastMessage:'hello',
  lastMessageTime:"14/03/24",
  receiverId:2,
  },
  {receiverName:"ahmed bh",
  lastMessage:'wnk',
  lastMessageTime:"14/03/24",
  receiverId:3,
  }]); 

 
 
  const renderItem = ({ item }) => (
    <View style={{ padding: 10,display:"flex" ,
    flexDirection: 'row',
    borderBottomWidth: 1,
     borderBottomColor: '#ccc' }} 
     onPress={() => navigation.navigate('User-Chat')}
     >
    <View style={styles.container}>
      <Image
        source={require('../../assets/vide_profile.png')}
        style={styles.image}
      />
    </View>
      <View>
      <Text>{item.receiverName}</Text>
      <Text>Last Message: {item.lastMessage}</Text>
      <Text>Last Message Time: {item.lastMessageTime}</Text>
      </View>
    </View>
  );

 

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={receivers}
        renderItem={renderItem}
        keyExtractor={(item) => item.receiverId.toString()}
      />
    </View>
  );
};

export default ReceiverListPage;