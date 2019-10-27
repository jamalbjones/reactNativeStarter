import React, { useReducer } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
	//state === {count: 0}
	//action === {type: 'increment' || 'decrement', payload: 0}
	switch(action.type){
		case 'increment':
			return {...state, count: state.count + action.payload };
		case 'decrement':
			return {...state, count: state.count - action.payload };
		default:
			return;
	}
}

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, {count: 0});
	const {count} = state;
	return (
		<View>
			<Button 
				title="Increase" 
				onPress={() => dispatch({type: 'increment', payload: COUNTER_INCREMENT})} 
			/> 
			<Button 
				title="Decrease" 
				onPress={() => dispatch({type: 'decrement', payload: COUNTER_INCREMENT})}
			/>
			<Text>Current Count: {count}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	
});

export default CounterScreen;