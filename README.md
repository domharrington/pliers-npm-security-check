# pliers-npm-security-check

Checks the security status of modules in your package.json against the nodesecurity.io web service

## Installation

      npm install pliers-npm-security-check

## Usage

This will expose a new pliers task called `npmSecurityCheck`.

```js
// within a pliers.js
module.exports = function (pliers) {

  require('pliers-npm-security-check')(pliers)

}
```

Then from the cli:

```
pliers npmSecurityCheck
```

If you already have a task called `npmSecurityCheck`, you can provide a name to the task like so:


```js
// within a pliers.js
module.exports = function (pliers) {

  require('pliers-npm-security-check')(pliers, 'checkSecurity')

}
```


## Credits
[Dom Harrington](https://github.com/domharrington/) follow me on twitter [@domharrington](http://twitter.com/domharrington)

## Licence
Licensed under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
