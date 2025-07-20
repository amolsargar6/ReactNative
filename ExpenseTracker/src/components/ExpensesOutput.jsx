import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//components
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../constants/styles'

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 200,
    date: new Date('2024-12-19')
  },
  {
    id: 'e2',
    description: 'A pair of shirts',
    amount: 400,
    date: new Date('2024-12-18')
  },
  {
    id: 'e3',
    description: 'A pair of shorts',
    amount: 200,
    date: new Date('2024-12-20')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 20,
    date: new Date('2025-1-20')
  },
]

const ExpensesOutput = ({expenses, periodName}) => {
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={periodName} />
        <ExpensesList expenses={DUMMY_EXPENSE}/>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor: GlobalStyles.colors.primary3
  }
})