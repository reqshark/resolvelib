# resolvelib: clean up require calls
invent a new name for the require call you want to use and give it path to wherever that is.

```bash
$ npm i resolvelib
```

```js
var resolve = require('resolvelib');
resolve( 'mill', './build/Release/mill.node'); // now we can do require('mill')
```
## license

MIT
