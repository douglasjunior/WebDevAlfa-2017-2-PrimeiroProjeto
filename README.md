# WebDevAlfa-2017-2-PrimeiroProjeto
Projeto "Hello World" utilizado como introdução ao framework React Native na Pós-graduação WebDev Alfa.

## Instalando as dependências

1. Faça o Clone ou Download deste repositório para o seu computador.

2. Através do `cmd` ou `git bash` instale as dependências do projeto. 
    ```bash
    yarn install
    ```
    
    _Obs: caso ainda não tenha o Yarn, instale com o comando `npm install -g yarn`_
    

## Executando o projeto Android

Antes de executar o projeto no Android, verifique se o SDK 23.0.1 e todas as dependências necessárias estão instaladas em seu computador. 
Para facilitar este processo abra a pasta `android` deste repositório com o **Android Studio** e execute os procedimentos recomendados 
por ele. *Importante ressaltar que, se o Android Studio pedir para atualizar a versão do Gradle, apenas ignore.*

1. Abra o emulador do Android com versão SDK 16 ou superior, ou conecte o seu dispositvo ao USB.

    _Para verificar se o dispositivo ou o emulador foram reconhecidos, execute o comando_
    
    ```bash
    adb devices
    ```

2. Através do `cmd` ou `git bash` execute o projeto Android:
    ```bash
    react-native run-android
    ```
    
3. Se o `package monitor` não for iniciado automaticamente, execute o comando:
    ```bash
    npm start
    ```

## Executando o projeto iOS

1. Utilizando **Xcode** abra o projeto através do arquivo `ios/PrimeiroProjeto.xcodeproj`.

2. Aguarde a indexação e execute o projeto utilizando um emulador ou dispositivo de sua preferência.

3. Se o `package monitor` não for iniciado automaticamente, execute o comando:
    ```bash
    npm start
    ```
