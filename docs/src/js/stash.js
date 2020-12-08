/* user starts with these */
var knownObjects = ["a", "b", "c", "d"];

/* list of unknown elements */
var unknownObjects = [
  "aa",
  "ab",
  "ac",
  "ad",
  "af",
  "ah",
  "ag",
  "bb",
  "bc",
  "bd",
  "bf",
  "bg",
  "bh",
  "cc",
  "cd",
  "cf",
  "cg",
  "ch",
  "dd",
  "df",
  "dg",
  "dh",
  "ff",
  "fg",
  "fh",
  "gg",
  "gh",
  "hh",
  "bac",
  "aaaa",
  "aabb"
];

/* shorter version of unknownObjects for testing */
//var unknownObjects = ["aa","ab","ac","ad"];

/* end of line assertions */
var eol = [
  "bac",
  "ac",
  "aaaa",
  "aabb"
]

/* template summoned by init on first load */
var userdata = {
  kObj: knownObjects,
  unkObj: unknownObjects,
  eOL: eol
};
/* sound - CAUTION: to match the correct sound, we do this by passing the correct index */
var appSounds = [
  "beep.wav",
  "clack.wav",
  "complete.mp3",
  "deduct.wav",
  "sweep.wav",
  "grab.mp3",
  "ting.wav",
  "swap.wav",
  "c1.wav"
];

/* these are settings that are not meant to be deleted */
var emd_legend = {
    sound: 0
};