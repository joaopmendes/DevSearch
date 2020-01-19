import React, {useEffect, useState} from "react";
import MapView, {Marker, Callout} from "react-native-maps";
import {requestPermissionsAsync, getCurrentPositionAsync} from "expo-location";
import {
    DevImage,
    DevTextBio,
    DevTextName,
    DevTextSkills,
    DevWrapper,
    FormView,
    SearchButton,
    SearchInput
} from "./main.styles";
import axios from "axios";
import {MaterialIcons} from "@expo/vector-icons"
import * as socket from "../../Services/socket"

/**
 * @return {null}
 */
function Main({navigation}) {
    const [currentLocation, setCurrentLocation] = useState();
    const [devs, setDevs] = useState();
    const [techsSearch, setTechsSearch] = useState("");
    async function loadDevs({latitude, longitude}) {
        axios.get("http://192.168.1.67:8000/devs/search", {
            params: {
                latitude,
                longitude,
                techs: techsSearch
            }
        })
            .then(res => {
                setDevs(res.data.data);
                setupWebSocket()
            })
            .catch(err => {
                if (err.response) {
                    console.log(err.response);
                }
            })
    }
    function setupWebSocket() {
        socket.connect();
    }
    useEffect(() => {
            async function loadInitialPosition() {
                const {granted} = await requestPermissionsAsync();
                if (!granted) {
                    return;
                }
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });
                setCurrentLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                });
                loadDevs(coords);
            }


            loadInitialPosition();

        }
        ,[]
    );


    if (!currentLocation) {
        return null;
    }
    return (
        <>
            <MapView onRegionChangeComplete={(region) => setCurrentLocation(region)} initialRegion={currentLocation} style={{flex: 1}}>
                {devs?.map(dev => (
                    <Marker
                        key={dev._id}
                        coordinate={{latitude: dev.location.coordinates[1], longitude: dev.location.coordinates[0]}}>
                        <DevImage source={{uri: dev.avatar_url}}/>

                            <Callout
                            style={{width: 260}}
                            onPress={() => {
                                navigation.navigate("Profile", {githubUsername: dev.github_username});
                            }}
                        >
                            <DevWrapper>
                                <DevTextName>{dev.name}</DevTextName>
                                <DevTextBio>{dev.bio}</DevTextBio>
                                <DevTextSkills>{dev.techs.join(", ")}</DevTextSkills>
                            </DevWrapper>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <FormView>
                <SearchInput
                    placeholder={"Search Devs by skills..."}
                    autoCapitalize={"words"}
                    autoCorrect={false}
                    value={techsSearch}
                    onChangeText={setTechsSearch}
                />
                <SearchButton onPress={() => {
                    loadDevs({latitude: currentLocation.latitude, longitude: currentLocation.longitude})
                }}>
                    <MaterialIcons name={"my-location"} size={20} color={"#FFF"}/>
                </SearchButton>
            </FormView>

        </>
    );
}

export default Main;
{/*    <Marker coordinate={currentLocation}>*/
}
{/*        <DevImage source={{uri: "https://avatars1.githubusercontent.com/u/4669899?s=400&v=4"}}/>*/
}
{/*        <Callout*/
}
{/*            style={{width: 260}}*/
}
{/*            onPress={() => {*/
}
{/*                navigation.navigate("Profile", {githubUsername: "CleitonSouza"});*/
}
{/*            }}*/
}
{/*        >*/
}
{/*            <DevWrapper>*/
}
{/*                <DevTextName>Cleiton Souza</DevTextName>*/
}
{/*                <DevTextBio>Co-founder & COO @Rocketseat</DevTextBio>*/
}
{/*                <DevTextSkills>ReactJS, Angular</DevTextSkills>*/
}
{/*            </DevWrapper>*/
}
{/*        </Callout>*/
}
{/*    </Marker>*/
}
{/*</MapView>*/
}