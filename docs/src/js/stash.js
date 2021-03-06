/* user starts with these */
var knownObjects = ["a", "b", "c", "d"];

/* list of unknown elements */
/*
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
  "aac",
  "cac",
  "dac",
  "fac",
  "gac",
  "hac",
  "aaaa",
  "bbbb",
  "cccc",
  "dddd",
  "ffff",
  "gggg",
  "hhhh",
  "abac",
  "abacdf"
];
*/
/* shorter version of unknownObjects for testing */
var unknownObjects = ["ac","acc","acccc","bc","bcc","bcccc","cc","cccc","cccccccc","ccccacc"];

/* end of line assertions */
//var eol = ["aaaa","bbbb","cccc","dddd","ffff","gggg","hhhh","aac","bac","cac","dac","fac","gac","hac","abac"];
var eol = [];
/* template summoned by init on first load */
var userdata = {
  kObj: knownObjects,
  unkObj: unknownObjects,
  eOL: eol,
  currentHint: ""
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
  "c1.wav",
];

/* these are settings that are not meant to be deleted */
var emd_legend = {
  gold: 50,
  sound: 0,
  musicVol: 0,
  musicPos: 0
};
