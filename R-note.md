`Under /android`
`Create`
`local.properties`
`sdk.dir=C\:\\Users\\santosh\\AppData\\Local\\Android\\Sdk`

<p>Save File</p>



`npm start` `a` or use `react-native run-android` in Dev mode 


# To Build APK
<p>Go to Root of projet and </p>

`npm start`

`curl "http://localhost:8081/index.android.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"`

run entire Thing

`cd android`

`./gradlew assembleRelease`