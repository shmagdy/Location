import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface DropDownPickerComponnentProps {
    title: string;
    errorMsg?: string | null;
}

const DropDownPickerComponnent = (props: DropDownPickerComponnentProps & DropDownPicker) => {
    return (
        <View style={styles.componentContainer}>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <DropDownPicker
                searchable
                dropDownMaxHeight={300}
                searchablePlaceholderTextColor="#068778"
                dropDownStyle={styles.dropDownnStyle}
                containerStyle={styles.containerStyle}
                style={styles.headerStyle}
                itemStyle={styles.itemStyle}
                labelStyle={styles.labelStyle}
                selectedLabelStyle={styles.selectedLabelStyle}
                placeholderStyle={styles.placeholderStyle}
                {...props}
            />
            {props.errorMsg && <Text style={styles.errorMsgStyle}>{props.errorMsg}</Text>}
        </View>
    );
};

export default DropDownPickerComponnent;

const styles = StyleSheet.create({
    componentContainer: {
        margin: 20
    },
    titleStyle: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 10
    },
    errorMsgStyle: {
        color: 'red',
        marginTop: 10
    },
    dropDownnStyle: { backgroundColor: '#edf8f9', height: 300 },
    containerStyle: { height: 40 },
    headerStyle: { backgroundColor: '#f7f7f7' },
    itemStyle: {
        justifyContent: 'flex-start'
    },
    labelStyle: { color: '#030f6b' },
    selectedLabelStyle: { color: '#1554f2', fontSize: 15, fontWeight: '500' },
    placeholderStyle: { color: '#8fa0b4' }
});
