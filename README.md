# Android Wifi Manager for React Native

React Native Android module to view and connect to Wifi networks. Includes a function to connect the a network with its ssid and password. Look in android/app/src/main/java/com/androidwifireactnative/WifiModule.java

## Installation

```
git clone https://github.com/ccmxy/react-native-wifi-manager-android     
cd react-native-wifi-manager-android      
npm install     
react-native android run     
```

## Screenshots

###In this version of the app, this appears when when you tap the name of the network        
![This appears when you tap the name of the network](http://i.imgur.com/nPjvpet.png "Screenshot from this app")

###Version of the app which implements RNSimpleAlertDialogModule by lucas ferreira
![Screenshot from a version of this app which implements RNSimpleAlertDialogModule by lucas ferreira](http://i.imgur.com/7FIyUoD.png "Connect version 1")

###Upon successful connection with ```wifiModule.findAndConnect(ssid, password);```
![Upon connecting](http://i.imgur.com/xXfNzBR.png "Connect version 2")
