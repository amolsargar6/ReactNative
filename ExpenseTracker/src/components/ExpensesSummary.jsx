import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/styles';

const ExpensesSummary = ({expenses, periodName}) => {
    const expesesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);
    return (   
        <View>
            <View style={styles.container}>
                <Text style={styles.period}>{periodName}</Text>
                <Text style={styles.sum}>{expesesSum.toFixed(2)} Rs.</Text>
            </View>
        </View>
    )
}

export default ExpensesSummary

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor: GlobalStyles.colors.primary4,
        borderRadius:6,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    period:{
        fontSize:18,
        // color:GlobalStyles.colors.primary3,
        fontWeight: 'bold'
    },
    sum:{
        fontSize:18,
        // color:GlobalStyles.colors.primary2,
        fontWeight: 'bold'
    },

})