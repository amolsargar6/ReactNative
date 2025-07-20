import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { Ionicons } from 'react-native-vector-icons/Ionicons' ;

//navigation
import {NavigationContainer} from '@react-navigation/native'
//stack
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//screens
import AllExpenses from './screens/AllExpenses'
import ManageExpenses from './screens/ManageExpenses'
import RecentExpenses from './screens/RecentExpenses'
import { GlobalStyles } from './constants/styles'

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function ExpenseOverview(){
  return (

    <BottomTab.Navigator
      screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: GlobalStyles.colors.background},
          headerTintColor: 'white',
          tabBarStyle: {backgroundColor: GlobalStyles.colors.background},
          tabBarActiveTintColor: GlobalStyles.colors.primary2
        }}
    >
      <BottomTab.Screen 
        name='RecentExpense'
        component={RecentExpenses}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent',
          // tabBarIcon: ({color, size}) => (
          //   <Ionicons
          //     name='calendar'
          //     size={size}
          //     color={color} />
          // )
        }}
        
      />
      <BottomTab.Screen 
        name='AllExpenses'
        component={AllExpenses}
        options={{
          title: 'All Expense',
          tabBarLabel: 'All',
          // tabBarIcon: ({color, size}) => (
          //   <Ionicons
          //     name='calendar'
          //     size={size}
          //     color={color} />
          // )
        }}
      />
    </BottomTab.Navigator>

  )
}


const App = () => {
  return (
    <>
    <StatusBar 
      backgroundColor={GlobalStyles.colors.background}
      barStyle="light-content"
    />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='ExpensesOverview'
          component={ExpenseOverview}
          options={{
            headerShown : false,

          }}
        />
        <Stack.Screen 
          name='ManageExpenses'
          component={ManageExpenses}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})