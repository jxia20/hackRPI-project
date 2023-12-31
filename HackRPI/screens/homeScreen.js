import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BudgetingPage from './BudgetingPage';
import SubscriptionPage from './SubscriptionPage';
import QuestionnairePage from './QuestionnairePage';
import { View, Text, StyleSheet, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home" // Set the initialRouteName to 'Home'
        screenOptions={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;
            if (focused) {
              iconSource = require('./images/squirrel.jpg');
            } else {
              iconSource = require('./images/3.jpg');
            }
            return <Image source={iconSource} style={{ width: 24, height: 24, tintColor: color }} />;
          },
        }}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Questionnaire" component={QuestionnairePage} />
        <Tab.Screen name="Budgeting" component={BudgetingPage} />
        <Tab.Screen name="Home" component={HomeContent} options={{ tabBarIcon: ({ focused, color, size }) => <Image source={require('./images/home.png')} style={{ width: 24, height: 24, tintColor: color }} /> }} />
        <Tab.Screen name="Subscription" component={SubscriptionPage} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Banking App</Text>
      <Image source={require('./images/squirrel.jpg')} style={styles.logo} />
      <Text style={styles.subtitle}>Your Trusted Banking Partner</Text>
      {/* Your HomeScreen content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -300,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
});

export default HomeScreen;
