import React from 'react';
import { StyleSheet, View, Text, Modal, TextInput, Button } from 'react-native';
import {observer} from 'mobx-react/native';
import RecipeStore from '../Stores/RecipeStore';


@observer
export default function Recipe() {
    return (
        <View style={styles.container}>
            <Modal > 
                <View style={styles.recipeContainer}>
                    <TextInput style={styles.recipeInput}>

                    </TextInput>
                    <Button style={styles.addButton}/>
                    <Button style={styles.cancelButton}/>
                </View>
            </Modal>
        </View>
    );
}

const styles = new StyleSheet.create({
    container: {
        flex: 1
    },
    recipeContainer: {

    },
    recipeInput: {

    },
    addButton: {

    },
    cancelButton: {

    }

});