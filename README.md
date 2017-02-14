ReactLayouts
============

Exemple de projet développé sous **macOS**, utilisant:
- react-native (v0.40)
- code-push (dernière version, ici v1.17.0-beta)
- Xcode
- Android Studio
Les étapes ci-dessous décrivent les étapes permettant la construction de ce projet, mais pourraient être utilisées pour n'importe quel nouveau projet.


### Customisation de la couleur des boutons
Lancer l'app ColorChanger.app, sélectionner une couleur puis cliquer sur "apply". 
Ceci va uploader une nouvelle release CodePush pour customiser les boutons de l'écran principal.


### Récupération du projet et installation software tiers

- Installer Homebrew:
```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- Installer Node et Watchman:
```sh
brew install node watchman
```

- Installer le client en ligne de commande React Native:
```sh
sudo npm install -g react-native-cli
```

- Installer CodePush:
```sh
npm install -g code-push-cli
```

- Télécharger les dépendances:
```sh
npm i --save-dev invariant
npm install
```

- (optionnel) Créer un nouveau projet react-native:
```sh
react-native init MonProjet
```


### Configuration CodePush

- **Si on a une session GitHub ouverte dans le browser par défaut de la machine de dev, faire un logout.**

- Créer un compte CodePush (si non existant):
```sh
code-push register
```
Ceci ouvre le navigateur. Il faut se connecter avec le compte GitHub de Mobi Rider.
Une fois l'access-key créée, la C/C dans l'invite de commandes du terminal.


- Se logger sur CodePush:
```sh
code-push login
```
Ceci ouvre le navigateur. Il faut se connecter avec le compte GitHub de Mobi Rider (voir ci-dessus)
Une fois l'access-key créée, la C/C dans l'invite de commandes du terminal.
On peut vérifier qu'on est bien connecté au serveur CodePush avec:
```sh
code-push session list
```

- Ajouter 2 apps à gérer (une pour iOS, une pour Android):
```sh
code-push app add MonProjet-ios
code-push app add MonProjet-android
```
**La création d'une seule app CodePush est possible, mais les résultats peuvent être aléatoires selon les versions ! A éviter donc.**


- Rajouter les sources CodePush au projet:
```sh
npm install --save react-native-code-push@latest
```


### Configuration code natif (commun)
```sh
$ react-native link react-native-code-push
```
Cette commande va modifier les fichiers source natifs afin de rajouter le code d'initialisation de CodePush. Certaines étapes manuelles (ci-dessous) restent à faire.


### Configuration code natif (iOS)

- Signer le code sous Xcode:
```sh
open ios/MonProjet.xcodeproj/
```
Puis aller dans la Target "MonProjet", onglet General, et sélectionner dans Signing la bonne Team (par exemple le compte MobiRider chez Apple)

- Ajout de la clé CodePush au projet natif:
```sh
code-push deployment ls MonProjet-ios -k
```

C/C la clé "Staging", sous Xcode sélectionner le fichier Info.plist, puis rajouter la clé, sous "CodePushDeploymentKey". Sous forme de code XML, cela donne:
```sh
<key>CodePushDeploymentKey</key>
<string>MNxACmiUsc3qNIrGRvCJ4fy2xjR1VJA6z2q8M</string>
```

- (optionnel) Ajout plusieurs clés CodePush au projet natif:
Sous Xcode, sélectionner le fichier Info.plist, créer la clé "CodePushDeploymentKey", mettre la valeur "$(CODEPUSH_KEY)"
Sélectionner le projet "MonProjet", onglet "Build Settings", cliquer sur "+" puis "Add user-defined setting".
A la place de "NEW_SETTING", mettre "CODEPUSH_KEY", puis mettre la clé Staging sous Debug, et la clé Production sous Release (par exemple).
Il est également possible de créer plusieurs "Build Schemes" et d'y placer la clé de son choix.

- Dans le fichier AppDelegate.m, remplacer la ligne:
```objective-c
jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
```
par:
```objective-c
#if defined(__i386__)  || defined(__x86_64__)
  /* Run code if in Simulator */
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

#else
  /* Run code if in device */
  jsCodeLocation = [CodePush bundleURL];
#endif
```


### Configuration code natif (android)

- Récupérer la clé CodePush:
```sh
code-push deployment ls MonProjet-android -k
```

- Ouvrir Android Studio, sélectionner "Open an existing Android Studio project", choisir le répertoire "MonProjet/android".
Chercher la ligne "new CodePush("<CODEPUSH_KEY_HERE>", MainApplication.this, BuildConfig.DEBUG)", puis placer la clé (Staging ou Production) entre le guillemets.

- Vérifier la configuration Gradle:
https://github.com/Microsoft/react-native-code-push/blob/master/docs/setup-android.md



### Lancement et test de l'app

- Pour un device iOS:
```sh
react-native run-ios --device
```

- Pour le simulateur iOS:
```sh
react-native run-ios
```

- Pour un device Android:
```sh
react-native run-android
```


### Pousser une nouvelle release (en configuration "Staging" par exemple)

Attention, si les fichiers source JS n'ont pas été modifiés depuis le dernier upload, l'upload ne fonctionnera pas.
- Pour iOS:
```sh
code-push release-react MonProjet-ios ios -d Staging
```

- Pour Android:
```sh
code-push release-react MonProjet-android android -d Staging
```

