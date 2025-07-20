import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

function renderExpenseItem(itemData){
    return <ExpenseItem description={itemData.item.description} amount={itemData.item.amount} date={itemData.item.date}/>
}

const ExpensesList = ({expenses}) => {
    
    return (
        <View>
            <View>
                <FlatList 
                    data={expenses}
                    renderItem={renderExpenseItem}
                    keyExtractor={(item)=>item.id}
                />
            </View>
        </View>
  )
}

export default ExpensesList

const styles = StyleSheet.create({})