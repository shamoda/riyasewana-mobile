import React from 'react';
import { Image, View, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';

function SparePartDetailsScreen(props) {
    return (
        <ScrollView>
            <View>
                <Image resizeMode="cover" fadeDuration={300} style={styles.image} source={require("../assets/test.jpg")} />
                
                <View style={styles.detailsContainer}>

                    <AppText style={styles.title}>BMW z4 2020 M40</AppText>
                    <AppText style={styles.date}>2021-01-01</AppText>
                    <AppText style={styles.price}>Rs.1600000</AppText>
                    
                    <View style={styles.wrap}>
                        <View style={styles.info} ><AppText style={styles.infoText} >Condition: Brand New</AppText></View>
                        {/* <View style={styles.info} ><AppText style={styles.infoText} >Brand New</AppText></View> */}
                    </View>
                    <View style={styles.wrap}>
                        <View style={styles.info} ><AppText style={styles.infoText} >Type: Sports Car</AppText></View>
                        {/* <View style={styles.info} ><AppText style={styles.infoText} >Sports Car</AppText></View> */}
                    </View>
                    <View style={styles.wrap}>
                        <View style={styles.info} ><AppText style={styles.infoText} >Category: Audio System</AppText></View>
                        {/* <View style={styles.info} ><AppText style={styles.infoText} >Audio System</AppText></View> */}
                    </View>
                    <View  ><AppText style={styles.additionalText} >This will be a long text to test what will happen if user enters a long text input This will be a long text to test what will happen if user enters a long text input</AppText></View>
                    
                    <View>
                        <AppText  style={styles.contactTitle} >Contact info:</AppText>
                        <AppText  style={styles.contactInfo} >Name: Shamoda Jayasekara</AppText>
                        <AppText  style={styles.contactInfo} >Contact No: 0713432334</AppText>
                        <AppText  style={styles.contactInfo} >Location: Colombo</AppText>
                    </View>

                    <View style={styles.button}>
                        <Button title="Call Seller" onPress={() => alert("clicked")} color={colors.primary} />
                    </View>
                    
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 15
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    info: {
        marginVertical: 2,
        flex: 1, 
        alignSelf: 'stretch'
    },
    infoText: {
        color: "black",
        fontSize: 15,
    },
    additionalText: {
        marginVertical: 10,
        color: "black",
        fontSize: 15,
    },
    contactTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 15,
        marginVertical: 10,
    },
    contactInfo: {
        color: colors.medium,
        fontSize: 15,
        marginBottom: 3,
    },
    date: {
        color: colors.secondary,
        fontSize: 12,
    },
    button: {
        marginTop: 30
    },
    wrap: {
        flex: 1, 
        alignSelf: 'stretch', 
        flexDirection: 'row', 
        marginBottom: 5
    },
})

export default SparePartDetailsScreen;