import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counter, increment, decrement } from './redux/CounterSlice';

const CounterView = () => {
    const counterState = useSelector(counter)
    const dispatch = useDispatch();

    const onPressIncrement = () => {
        dispatch(increment())
    }

    const onPressDecrement = () => {
        dispatch(decrement())
    }

    return <View style={{ flex:1,justifyContent: 'center' }}>
        <SafeAreaView>
            <View  style={{alignItems:'center'}}>
                <Text>{counterState.counter}</Text>
                <View>
                    <Button title="Increment" onPress={onPressIncrement} />
                    <Button title="Decrement" onPress={onPressDecrement} />
                </View>
            </View>
        </SafeAreaView>
    </View>
}

export default CounterView;