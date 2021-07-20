import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subTitle1, subTitle2, subTitle3, subTitle4, image }) {
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <Image fadeDuration={300} resizeMode={'cover'} style={styles.image} source={image} />
                <View style={styles.detailsContainer} >
                    <AppText style={styles.title} >{title}</AppText>
                    <AppText style={styles.subTitle} >Rs.{subTitle1}</AppText>
                    <AppText style={styles.subTitle} >{subTitle2}</AppText>
                    <AppText style={styles.subTitle} >{subTitle3}</AppText>
                    <AppText style={styles.subTitle} >{subTitle4}</AppText>
                </View>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 15,
        overflow: "hidden",
        padding: 5
    },
    detailsContainer: {
        paddingLeft: 15,
    },
    image: {
        width: 120,
        height: '100%',
        borderRadius: 15,
    },
    subTitle: {
        color: colors.secondary,
        fontSize: 13
    },
    title: {
        marginBottom: 3,
    }
})

export default Card;