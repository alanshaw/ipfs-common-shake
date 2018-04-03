# ipfs-common-shake

> Does [common-shake](https://github.com/indutny/common-shake) save some bytes when bundling IPFS?

Regular minified build:

```
$ npm run build
$ stat -f "%z" bundle.js
2572097
```

Minifed build + common-shake:

```
$ npm run build:shake
$ stat -f "%z" bundle.js
2516969
```

**Saving = 55,128 bytes**

You can `npm run serve` to run a static server and test the bundle works - should print "ready" to the console when IPFS node is ready.
