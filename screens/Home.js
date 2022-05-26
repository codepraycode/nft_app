import {useState} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';

import {COLORS, NFTData} from '../constants';

// COMPONENTS
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = (value)=>{
        
        if (value.length > 0){
            // setNftData(()=>NFTData)
            // return

            const nftFilter = NFTData.filter((item)=>{
                
                return item.name.toLowerCase().includes(value.toLowerCase());
                
            });

            if(nftFilter.length){
                setNftData(()=> nftFilter);
                return
            }
        }


        setNftData(()=>NFTData)

    }
    return (
        <SafeAreaView style={{flex:1}}>
            <FocusedStatusBar background={COLORS.primary}/>

            <View style={{flex:1}}>
                <View style={{zIndex:0}}>
                    <FlatList
                        data={nftData}
                        renderItem={({item})=>{
                            return <NFTCard data={item}/>
                        }}
                        keyExtractor={(item)=>item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
                    />
                </View>

                <View style={{
                    position:"absolute",
                    top:0,
                    bottom:0,
                    right:0,
                    left:0,
                    zIndex:-1,
                }}>
                    <View style={{height:300, backgroundColor:COLORS.primary}}/>
                    <View style={{flex:1, backgroundColor:COLORS.white}}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;
