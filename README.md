# element-merger
A small, basic representation of the game "Doodle God" and "Alchemy 10" meant for learning/forking in to new projects

[Play now!](https://ehawk82.github.io/element-merger/)

## Requirements
- Initial startup elements: 4
- Total elements: 30'ish
- [] DRY

## Features
- [x] Drag/Drop
- [x] Sounds
  + [x] User has volume control 
- [] Simple graphics
- [x] User can clear board
- [x] User can sort side-bar items
- [x] Bad merges delete themselves
  + "Could be a nice addition if we run a gif to show them explode or crumble when invoked"
- [x] Game detects 'end-of-line' elements
- [x] Can detect when all combos are unlocked
- [] Hints
  + [] Button for 'hints'
  + [] 'NUM' free hints per day
  + [] Spend in-game "tokens" for hints
  + [] Adds 'NUM' free "token" per day
  + [] Pay a dollar for 'NUM' x2 tokens per day
  + [] Membership for daily multiplier

## Tech-Tree
- [Basic tree](https://stonecypher.github.io/jssm-viz-demo/graph_explorer.html?s=LYQwxgFglgdgpgfRiYcAEGMC40CIBKcYUADugCoBOccuA3AFCiSyIgCuALhAPaWY5cAZQhwANgCMAnmgCiANziUpZSgGceMNAB52apQAE4ADxQkxcAHRgewAHz0m4aPARioYODH3Y0AWQBJckZmF0QbYFQYTl9cACk9GJA0AEd2DwBrNBMzCzQeADM0XgB3NG44HxBqNBLKKE5OL0dQ1jcQGABzdhBO9BwvEOc2xXUoTV8ARksABlnGArUxBFG1ca1MKdn5hgY1TmrOBH2QJrVNtBwAbQAZHhAAEzRCfU4AXUYvB+ODs4vfK4fXYMAD0ACo0A84AUOGJOGosAxzB1OAAaDpQUBiVGcTFwHE8HhiBhgkG7cFoZHRNCkpFiFFoAC8djQBUo6RizLQik6nSg6C5MC4jFBEIxWJpZPFIDETJZLDAGS8crQNjKXIk7E6IopuNQkqYsC4ApZvHY-C5DxAMi5wE03BFwCNTTQAFoWWyOSFneh3aroIrBoahS6-ZBzTARWb+H6eXy4Ixo275TwSomeObk2gnWIxCKrTI-SHGAWs5rtQxS36eIpI+SIZxCbLaY2iSrw5QtLaoLmVTXBkA)

## Developers
1. The object <code>unknownObjects</code> is a list of working combo
2. The object <code>knownObjects</code> is a list of starting ingredients
3. Sounds are currently still being modified.  'We shall create a better way' -unknown artisan


