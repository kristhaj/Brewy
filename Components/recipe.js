import React, {Component} from 'react';
import { StyleSheet, View, Text, Modal, TextInput, Button } from 'react-native';
import {observer} from 'mobx-react';
import RecipeStore from '../Stores/RecipeStore';


@observer
class Recipe extends Component {

    state = {
        modalVisible: false
    }

    setModalVisible(visible) {
        this.setSate({modalVisible: visible})
    }

    handleAddRecipe() {
        const RecipeStore = this.props.RecipeStore;
        RecipeStore.setTargetID("");
        RecipeStore.fetchRecipeDataAsync(0);
        this.setModalVisible(false);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                style={styles.viewInput} 
                title="Add Recipe" 
                onPress={() => this.setModalVisible(true)}
                />
                <Modal visible={this.state.modalVisible}> 
                    <View style={styles.recipeContainer}>
                        <TextInput style={styles.recipeInput}>

                        </TextInput>
                        <View> style={styles.buttonContainer}
                            <Button
                            style={styles.addButton}
                            title="Save"
                            onPress={() => this.handleAddRecipe()}
                            />
                            <Button 
                            style={styles.cancelButton}
                            title="Cancel"
                            onPress={() => this.setModalVisible(false)}
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
    recipeContainer: {
        flex: 1,
        padding: 20,
        height: '30%',
    },
    viewInput: {
        padding: 10,
        backgroundColor: "#ef8354",
        color: '#fff'
    },
    recipeInput: {
        flex: 2,
        borderWidth: 1, 
        borderColor: '#4f5d75'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addButton: {
        flex: 1,
        padding: 10,
        backgroundColor: "#ef8354",
        color: '#fff'
    },
    cancelButton: {
        flex: 1,
        padding: 10,
        color: "#4f5d75",
        borderWidth: 1,
        borderColor: '#4f5d75',
        backgroundColor: '#fff'
    }

});

export default Recipe;