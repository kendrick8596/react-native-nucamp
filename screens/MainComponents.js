import { useState } from "react";
import { CAMPSITES } from '../shared/campsites';
import { View } from 'react-native';
import DirectoryScreen from './DirectoryScreen';
import CampsiteInfoScreen from "./CampsiteinfoScreen";

const Main = () => {
    const [ campsites, setCampsites ] = useState(CAMPSITES);
    const [ selectedCampsiteId, setSelectedCampsiteId ] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen 
                campsites={campsites} 
                onPress={(campsiteId) => setSelectedCampsiteId(campsiteId)}
            />
            <CampsiteInfoScreen 
                campsite={
                        campsites.filter(
                            (campsite) => campsite.id === selectedCampsiteId
                        )[0] 
                }
            />
        </View>          
    );
};

export default Main;