# element-merger
A small, basic representation of the game "Doodle God" and "Alchemy 10" meant for learning/forking in to new projects

[Play now!](https://ehawk82.github.io/element-merger/)

## Requirements
- [x] Initial startup elements: 4
- [ ] Total elements: 30'ish
- [ ] DRY
- [ ] All features completed

![Progress](https://progress-bar.dev/63/)

## Features

- [x] Drag/Drop
- [x] Sounds
  + [x] User has volume control
  + [x] Optional: Music
  	* [x] Music can play
  	* [x] Music can pause/resume
  	* [x] Music can stop/reset
- [ ] Simple graphics
- [x] User can clear board
- [x] User can sort side-bar items
- [x] Bad merges delete themselves
  + [ ] Optional: animated deletion
- [x] Game detects 'end-of-line' elements
- [x] Can detect when all combos are unlocked
- [ ] Hints
  + [x] Button for 'hints'
  + [ ] 'NUM' free hints per day
  + [x] Spend in-game "tokens" for hints
  + [ ] Adds 'NUM' free "token" per day
  + [ ] Pay a dollar for 'NUM' x2 tokens per day
  + [ ] Membership for daily multiplier
- [ ] touch screen

## Tech-Tree(not final)

### [Basic tree](https://stonecypher.github.io/jssm-viz-demo/graph_explorer.html?s=LYQwxgFglgdgpgfRiYcAEGMC40CIBKcYUADugCoBOccuA3AFCiSyIgCuALhAPaWY5cAKRABnHjDQBxSiABeUEDB70m4aPAQAbKGDgxR6NDgCyASXKNmGxGB7BUMTtjwBBNACMxutFp48AazQQZ250TmpaK3VWbSUAc3YQePQcfWiWTQA3OEpRKAkXAEYAOgAGcsYAM1EtBBy8gslMYvLKhgZRThBKTgQukLhRFuM0AG0AGR4QABM0QkNOAF1GfRn+7s4hkZcxlY6GAHoAKjQZuCqOLU5RLAYSLSVOABolKFAtZ853uC--LQYx0OHROaAeTzQQPujycaAAvAA+NBVSjsKDORFoHLxeJQdCYmBcRhHU5vD6Q4FkkBaeFIlhgAL6WloOwAd2ZHnY8WJoO+qApTFgXHxSN47H4mJmIAAnszgBJuMTgEKtmgALRIsYotHOemMySQcUwfYMMX8DXjbG49BstDKrRaE1S2UWsaE5yc+JoHg5Y0806cf4CwM8GmYw2USSY+1hpE+9JAA)

### [Expanded tree](https://stonecypher.github.io/jssm-viz-demo/graph_explorer.html?s=LYQwxgFglgdgpgfRiYcAEGMC40CIBKcYUADugCoBOccuA3AFCiSyIgCuALhAPaWY5cAKRABnHjHpNw0eAgA2UMHBij0aHAFkAkuUbNZiMD2CoYnbHiHtRFkGgCO7JQGs0cAB4oS89DwBmaLwA7mjccGpoINRowZRQnJwqUgasCiAwAObsIJnoOCr6MmkAbnCUolASlgCMAHQADI2M-qLyCGUVVTCYAmj1TQ2MDLbRnAijSaK9GmgA2gAyPCAAJmiEapwAuowqKxOcIFMzlnM7DBcA9ABUaCtw-hzynKJYDD4ZnAA0GVCg8l9OH84ICeDx5AxrpcLgxLnD4QjEfCAOQfczIpGYzGwy5oNEWAB8RLCwPe8k+aAAtAT5v5KM4LGVMpkoOgYFxzji0HSGWgiTSgagGDyElSaXMQCQfOgAEblSgATzQxE49NEnLhaCZLPQ-JJQu1rLF82MlB6wQgcCOaHBUDKGtx7MJxMFcAYTuNczIGS4UXkwAka2MxhADqxWORv3+GPD4YYUZA8k9LDALhUaBl7Eyyp4wQdyugqZUDBTaZ61PmcGZOfk5LyMHzmcyDCbnrl6GDhkTaHJYHzxmCJdznuAUHkbmMtdy6YVPGylG2+jHbgrmcS5WGONjSORnDB8hj26xDD34OTEHYZrQo9rNrKDeGmsgl5gJYvV9XXCSlDocJvLiuXEbwhLkeHvQCjwRXdgUPSDESYWAuHQABeGleEvNBULuEAlSwgNzAgR8gMQpIEKddAKzmEU7ClXwcyvb0PVLdMq2zf8CxffN0MoBhuM9Q1ZXlJULStOx-UDDMs2vMd5HzFYcIYeSlUolU1TQD1bTKHMQxzUIwJUc44KMuMgA)


[![EXPANDED TREE](https://github.com/Ehawk82/element-merger/blob/main/docs/src/assets/images/readmeImage_1.png)](https://fsl.tools/viewer/?z=LYQwxgFglgdgpgfRiYcAEGMC40CIBKcYUADugCoBOccuA3AFCiSyIgCuALhAPaWY5cAKRABnHjDQBxSiABeUEDB70m4aPAQAbKGDgxR6NDgCyASXKNmGxGB7BUMTtjwBBNACMxutFp48AazQQZ250TmpaK3VWbSUAc3YQePQcfWiWTQA3OEpRKAkXAEYAOgAGcsYAM1EtBBy8gslMYvLKhgZRThBKTgQukLhRFuM0AG0AGR4QABM0QkNOAF1GfRn+7s4hkZcxlY6GAHoAKjQZuCqOLU5RLAYSLSVOABolKFAtZ853uC--LQYx0OHROaAeTzQQPujycaAAvAA+NBVSjsKDORFoHLxeJQdCYmBcRhHU5vD6Q4FkkBaeFIlhgAL6WloOwAd2ZHnY8WJoO+qApTFgXHxSN47H4mJmIAAnszgBJuMTgEKtmgALRIsYotHOemMySQcUwfYMMX8DXjbG49BstDKrRaE1S2UWsaE5yc+JoHg5Y0806cf4CwM8GmYw2USSY+1hpE+9JAA)


[template tree(for demo page)](https://stonecypher.github.io/jssm-viz-demo/graph_explorer.html?s=LYQwxgFglgdgpgfRiYcAEGMC40CIAqcwADgDYgAu6+ATnHLgNwBQoksiIArhRAPY1MOXACkQAZz4w0AcRogAXlBAw+TVuGjwEpKGDgxx6NDgCyASXws2WxGD7BUMCtjwBBNFRLkqnuui4jABM0KTQgoj40YhAAcwZrTQ4dFViuOPQcA0T2bQA3OBpxKDCTNABGADoABhqWADNxUgQCopLpTFcq2uqWZnEKEBoKBAHKOHFOsoBtABk+EBCAJQm4CgBdFgMg0cGqSamZzeZmEDQAWgA+NGmQO7O7tBAAIyewJ5CQeqfYp4gn8BoZ6Al4g4FgIL1Y6vK43Z7w14vIGvZ7vZ4hZ7fZ6-Z7-cFPfGgiFQljvWHTMCU96A1FoSl0kJgb5gX6QAFowFgQFBQH1QGxQEQMHC4nHELkoKSz4YxkhSXhb5BX5Bf486ngyHHb7k+q675fIHMxXfXVoeq-er-Pnq8Cali-cmxJ2-OJA1nKi2-J1oWL-AVgY7-ckQEP-EB4-5slVmv3-ENoIUBxhAA)


## Tech-Tree notes:
- Each 'type' of item has 4 tiers of evolution.
- <code>time</code> will be the only item that can be merged with itself to expand the tier.
- Each "type" item will have it's own sub-tree.

## Tech translations with examples
- Translating a formula will be automatic but its important to know the algorithm works.
- Lets say, 'a' can be 'plant', and 'b' can be 'minute', if we needed to combine plant and minute to make fruit, then 'ab' would be how we get fruit.  


## Developers
1. The object <code>unknownObjects</code> is a list of working combo
2. The object <code>knownObjects</code> is a list of starting ingredients
3. Sounds are currently still being modified.  'We shall create a better way' -unknown artisan


