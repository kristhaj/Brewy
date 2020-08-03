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
                visible={RecipeStore.getModalVisible}
                >
                    <View styles={styles.modalView}>
                        <View style={styles.recipeContainer}>
                            <TextInput 
                            style={styles.recipeInput}
                            value="Enter URL of the recipe">

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
    modalView : {
        flexDirection: 'column',
        
    },
    recipeContainer: {
        flex: 2,
        padding: 20,
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
        justifyContent: 'space-between',
        padding: 50
    },
    addButton: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        backgroundColor: "#ef8354",
        color: '#fff'
    },
    cancelButton: {
        flex: 1,
        padding: 10,
        height: 50,
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