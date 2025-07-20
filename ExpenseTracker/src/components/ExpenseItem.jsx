import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/styles'
import { getFormatedDate } from '../../util/date'

const ExpenseItem = ({description, amount, date}) => {
  return (
    <Pressable>
        <View style={styles.expenseItem}>
            <View>
                <Text style={[styles.textBase, styles.description]}>{description}</Text>
                <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount.toFixed(2)}</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
    expenseItem:{
        padding:12,
        marginVertical:8,
        backgroundColor: GlobalStyles.colors.primary4,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:8,
        elevation:3,
        shadowColor:GlobalStyles.colors.gray5
    },
    textBase:{
        color:GlobalStyles.colors.primary5,
    },
    description:{
        fontSize:18,
        marginBottom:8,
        fontWeight:'bold'
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        minWidth:80
    },
    amount:{
        color:GlobalStyles.colors.primary3,
        fontWeight:'bold',
        fontSize:18
    }

})