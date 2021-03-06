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

<hr />

### [Expanded tree](https://stonecypher.github.io/jssm-viz-demo/graph_explorer.html?s=LYQwxgFglgdgpgfRiYcAEGMC40CIBKcYUADugCoBOccuA3AFCiSyIgCuALhAPaWY5cAKRABnHjHpNw0eAgA2UMHBij0aHAFkAkuUbNZiMD2CoYnbHiHtRFkGgCO7JQGs0cAB4oS89DwBmaLwA7mjccGpoINRowZRQnJwqUgasCiAwAObsIJnoOCr6MmkAbnCUolASlgCMAHQADI2M-qLyCGUVVTCYAmj1TQ2MDLbRnAijSaK9GmgA2gAyPCAAJmiEapwAuowqKxOcIFMzlnM7DBcA9ABUaCtw-hzynKJYDD4ZnAA0GVCg8l9OH84ICeDx5AxrpcLgxLnD4QjEfCAOQfczIpGYzGwy5oNEWAB8RLCwPe8k+aAAtAT5v5KM4LGVMpkoOgYFxzji0HSGWgiTSgagGDyElSaXMQCQfOgAEblSgATzQxE49NEnLhaCZLPQ-JJQu1rLF82MlB6wQgcCOaHBUDKGtx7MJxMFcAYTuNczIGS4UXkwAka2MxhADqxWORv3+GPD4YYUZA8k9LDALhUaBl7Eyyp4wQdyugqZUDBTaZ61PmcGZOfk5LyMHzmcyDCbnrl6GDhkTaHJYHzxmCJdznuAUHkbmMtdy6YVPGylG2+jHbgrmcS5WGONjSORnDB8hj26xDD34OTEHYZrQo9rNrKDeGmsgl5gJYvV9XXCSlDocJvLiuXEbwhLkeHvQCjwRXdgUPSDESYWAuHQABeGleEvNBULuEAlSwgNzAgR8gMQpIEKddAKzmEU7ClXwcyvb0PVLdMq2zf8CxffN0MoBhuM9Q1ZXlJULStOx-UDDMs2vMd5HzFYcIYeSlUolU1TQD1bTKHMQxzUIwJUc44KMuMgA)


[![example](https://github.com/Ehawk82/element-merger/blob/main/docs/src/assets/images/readmeImage_1.png)](https://fsl.tools/viewer/?z=LYQwxgFglgdgpgfRiYcAEGMC40CIBKcYUADugCoBOccuA3AFCiSyIgCuALhAPaWY5cAKRABnHjDQBxSiABeUEDB70m4aPAQAbKGDgxR6NDgCyASXKNmGxGB7BUMTtjwBBNACMxutFp48AazQQZ250TmpaK3VWbSUAc3YQePQcfWiWTQA3OEpRKAkXAEYAOgAGcsYAM1EtBBy8gslMYvLKhgZRThBKTgQukLhRFuM0AG0AGR4QABM0QkNOAF1GfRn+7s4hkZcxlY6GAHoAKjQZuCqOLU5RLAYSLSVOABolKFAtZ853uC--LQYx0OHROaAeTzQQPujycaAAvAA+NBVSjsKDORFoHLxeJQdCYmBcRhHU5vD6Q4FkkBaeFIlhgAL6WloOwAd2ZHnY8WJoO+qApTFgXHxSN47H4mJmIAAnszgBJuMTgEKtmgALRIsYotHOemMySQcUwfYMMX8DXjbG49BstDKrRaE1S2UWsaE5yc+JoHg5Y0806cf4CwM8GmYw2USSY+1hpE+9JAA)

<hr />

<a href="https://fsl.tools/viewer/?z=LYQwxgFglgdgpgfRiYcAEGMC40CIBKcYUADugCoBOccuA3AFCiSyIgCuALhAPaWY5cAKRABnHjDQBxSiABeUEDB70m4aPAQAbKGDgxR6NDgCyASXKNmGxGB7BUMTtjwBBNNWJk0nIhB-UtFbqrNpKAObsIOHoOPrBLJoAbnCUolASLgCMAHS5AAyMAGaiWggpaRmSmNk5+XWMDKKcIJScCM0gvqI1xmgA2gAyPCAAJmiEhpwAuoz6ox0t3b0u-bMMGwD0AFRoo3BFHFqcolgMJFpKnAAUIACUADRKUKBa1wBGj5w8PG9gXy84NdRncGNtNhtIQxNps0CA0DCGPCALwAPjhCBR6JAmKxGJABMa8IAtOj+jj3hiwBjRuskZi0KSBgSEO9KSywNSWaNaUTcYyyQSKWy4RzOaKcTzeVtYZTEZS0Wh3qy0IrlSK1ay2YxKUzyay6eqBczhYatcbySy2e86TC0NTEQxqQAeRVgBAut0ez3o92csCMal6nFgdZ+i1isPeiNi0ONaGw8aI8aKhYp9Fp9N7BBSxjjYM5ulpmM56UMTMxyU8ukJmF1+sNtCgWD2iDsGAAawRDZ7Peh2wTaAuV27kOHTlVZKKlHYUGcKXC4Sg6HCslEPRgXFtduns+cdYYu7nk4GJHs6HeqUoAE97XOZ6I6WfUCfySQLugyK0h3B1K2r9e6wgO+WjoIq-S4MBH5oEUlxJHwuB4FBoEwVAWg6DA4S4EBIHoHquCrjQkijNetBPr+-DgbgX78LBIDwZQiHURRqHobAWHrDRFq4AA7tAvh7KR2GNF+kCvsxf50QxTGif4RRoRhHGMLJ3EqSRZGNJAAHiVplA3jBcEIXgun6fJbGYcJToQNp+HUOM6mWQwl56be4HNLIPHOfp7xaOwcBebePngB2AXrO5ICedpVHhZFLkGfRRm4DFAWsYplnJTZZLUbAXYOYavn+VFWU+X5KVSYlJWFXFZlpeslUpfhlWCRpGxBWAIVFQMuBtR11WGYxeA9WVCnsZZQ2ZV1PXNY5Tr3uwPTgaBwCZDoL58BEcDrEtmRUdtkjlQNuB7alo1bXAy2SPhpHoTwPHTXSq1gVlj3xdJeAvTVp2MC9+EvXljTrZhT1dYDMSvYloPoJ9FnrJD3Fw-9MqwguS7oAeKPLq+diUJIvxQCkdLY5IVFE2gnSUJATGk6I14ziQjm4NTLQUxAiFUe8IAduxQ63fsh26OgYDUCgiHcLoHb6KkdKM3wkg03TbNZchUP9TJLEHWrkmq8Z1l9Qlh0ZXrb3dQVZXaybwVm-rTHHRr72AuDh1wxrdJ4ykJ48GhjR1mgq5iD0B4MH766vnxv7OKI7DhK0YBKJtjRh10r6wTw7CUOsKdp6+HOcL4-CjKn4QQHSkfRxTcevqXrTbrCm77oidevl+jcgFoF3jHYdggORShcOJzd9+8XB55rjcsCQoiWa37fidPEjjMAaEdkxc8wB30AT5ZncjDpvB2JcAkkGIvhU3vvxdILG+TzW4K1r298P4-T-9pCdrPK8o7v63WPQO1+hKlHe0t0a6tnFv-A8LA-7E3RHARcjRYHhAtAXKO-gwDzWZmWH2Q9EEHmwa+dSZNrLoXAEWUi4k7LTTwIRf+DlBoFUoRJMStCjoO2YddLQt0GEkBygwvic50DMKmswhGQkS5EMuNSEmShRjLg7iMTgo0qGXDkLQX27BgAgLsHdCBnDwKLy0F2felwYgwDpPors4Eh651SEqLoed7ToNaB3YWGjNK-GMf-cCMQD6wBvhCJ+ATAkBJfjKHwPwtCjm+L8V8PAUiSH0REyAadTGNCiREvUntEkuOMrLMmtN2D0zJlHGOcdNFthxt2CESSKl6nCMoi8w8bHQ0QRJRuViR5ITbvPJsS9T48H3hfIcx9VHeK6L4xozTuLKxOhZPAXFmmazEgsnW2lllJU4B5Ya5ksJ0NKqskasyLbtS2Wld651MhrI+gcnZuBnbXOEpgJGPT0KVKYApC0md+BV34DLCp5NKaDU5tzM8PE+ajz7uPSenSZ6Qr6QMgSsK1GuKebE8BiJUWXSyrHNesigFjJhvGW+QTiUkoPDsV+sIFEvkRIvOuwNeBZ1TCAVy6ILrcG9naWlXA0Y0tgNyiMuE0CJ2cJAiWkgEGtmSSAhl-ADwyotFxQ2+ljrPk-L+RuR5nB4IIQkkBoxmWvP1bePUKl6raReilUmq9xgY0Fpw8xaAMUgLZf4A8LqLQmUChI3q+k4bEA2fNR1Oh3bb3hHXPxUIgA">THE EVER EVOLVING TREE OF HOPE</a>




<hr />

### [template tree(for demo page)](https://stonecypher.github.io/jssm-viz-demo/graph_explorer.html?s=LYQwxgFglgdgpgfRiYcAEGMC40CIAqcwADgDYgAu6+ATnHLgNwBQoksiIArhRAPY1MOXACkQAZz4w0AcRogAXlBAw+TVuGjwEpKGDgxx6NDgCyASXws2WxGD7BUMCtjwBBNFRLkqnuui4jABM0KTQgoj40YhAAcwZrTQ4dFViuOPQcA0T2bQA3OBpxKDCTNABGADoABhqWADNxUgQCopLpTFcq2uqWZnEKEBoKBAHKOHFOsoBtABk+EBCAJQm4CgBdFgMg0cGqSamZzeZmEDQAWgA+NGmQO7O7tBAAIyewJ5CQeqfYp4gn8BoZ6Al4g4FgIL1Y6vK43Z7w14vIGvZ7vZ4hZ7fZ6-Z7-cFPfGgiFQljvWHTMCU96A1FoSl0kJgb5gX6QAFowFgQFBQH1QGxQEQMHC4nHELkoKSz4YxkhSXhb5BX5Bf486ngyHHb7k+q675fIHMxXfXVoeq-er-Pnq8Cali-cmxJ2-OJA1nKi2-J1oWL-AVgY7-ckQEP-EB4-5slVmv3-ENoIUBxhAA)

|  abc  |   a   |   b   |   c   |   d   |   f   |   g   |   h   |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   a   |   aa  |   ab  |   ac  |   ad  |   af  |   ag  |   ah  |
|   b   |   ab  |   bb  |   bc  |   bd  |   bf  |   bg  |   bh  |
|   c   |   ac  |   bc  |   cc  |   cd  |   cf  |   cg  |   ch  |
|   d   |   ad  |   bd  |   cd  |   dd  |   df  |   dg  |   dh  |
|   f   |   af  |   bf  |   cf  |   df  |   ff  |   fg  |   fh  |
|   g   |   ag  |   bg  |   cg  |   dg  |   fg  |   gg  |   gh  |
|   h   |   ah  |   bh  |   ch  |   dh  |   fh  |   gh  |   hh  |

<hr />

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


