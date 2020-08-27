import React, {Component} from 'react';
import { StyleSheet, View, Text, Modal, TextInput, Button } from 'react-native';
import {observer} from 'mobx-react';
import RecipeStore from '../Stores/RecipeStore';


@observer
class Recipe extends Component {

    handleAddRecipe() {
        const RecipeStore = this.props.RecipeStore;
        RecipeStore.setTargetID("");
        RecipeStore.fetchRecipeDataAsync(0);
        RecipeStore.setModalVisible(false);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                style={styles.viewInput} 
                title="Add Recipe" 
                onPress={() => RecipeStore.setModalVisible(true)}
                />
                <View style={styles.conState}>
                    <Text>
                        Connection status: {RecipeStore.getConState}
                    </Text>
                </View>
                <Modal 
                animationType="slide"
                visible={RecipeStore.getModalVisible}>
                    <View style={styles.recipeContainer}>
                        <Text>Enter URL of recipe:</Text>
                        <TextInput 
                        style={styles.recipeInput}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.buttonContainer}> 
                        <Button
                        style={styles.addButton}
                        title="Save"
                        onPress={() => this.handleAddRecipe()}
                         />
                        <Button 
                        style={styles.cancelButton}
                        title="Cancel"
                        onPress={() => RecipeStore.setModalVisible(false)}
                        />
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = new StyleSheet.create({
    container: {
        flex: 1
    },
    recipeContainer: {
        flex: 15,
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#fff'
    },
    viewInput: {
        padding: 10,
        color: '#fff'
    },
    recipeInput: {
        borderWidth: 1, 
        borderColor: '#4f5d75'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row-reverse",
        justifyContent: 'space-between',
        padding: 50
    },
    addButton: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: "#ef8354",
        color: '#fff'
    },
    cancelButton: {
        flex: 1,
        color: "#4f5d75",
        borderWidth: 1,
        borderColor: '#4f5d75',
        backgroundColor: '#fff'
    },
    conState: {
        flex: 1,
        padding: 20
    }

});

export default Recipe;