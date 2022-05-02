# steps

- npm i -g expo-cli
- expo init nombreApp
- expo start

StyleSheet - to use styles
Text - like a p in html
View - container like a div
FlatList - para recorrer un array de datos (showverticalscrollindicator to remove the scrollbar)
Image source={{uri:''}} to use images in react native (it need a width and height)

rnfe - para generar un componente basico de react native

styles for multiple classes
<Text style={[styles.clase1, value > 1? styles.clase2Positive: styles.clase2Negative ]}>

to refresh elements in flatlist if they change alot like crypto coins
then you can use
useState refreshing false
refreshing={refreshing}
onRefresh={{() => setRefreshing in true , loadData, setRefesing in false}}
