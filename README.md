# Ledger-Ethfx App
Ethfx wallet application for Ledger Blue and Nano S.
This app should be used in conjuction with the Ethfinex-Api-Node package to allow you to seamlessly trade on Ethfinex from your Ledger hardware wallet.

## Why use this app:
* This app will automatically sign transactions and personal messages without confirmation on the hard

## Limitations
* Currently 5 trades can be made without confirmation.
* If the Ledger wakket is unused for 5 minutes, the user must confirm any action made on the Ledger


## Installing
There are 2 ways to get this app on to your Ledger hardware wallet:
1) Download from Ledger Live (Coming soon)
2) Load manually (See "Developing" instructions)



# Developing
### Dependency
* Ledger Nano S
* Currently only Linux is supported for development

### Setup Dev Enviroment:
Follow instructions provided by Ledger: https://ledger.readthedocs.io/en/latest/userspace/getting_started.html

**Build and Load** 

`make load`

**Remove app**

`make clean`

### Debugging
In order to log events from ledger into your terminal, read the following instructions:
https://ledger.readthedocs.io/en/latest/userspace/debugging.html