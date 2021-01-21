/* user starts with these */
var knownObjects = ["a", "b", "c", "d"];

/* list of unknown elements */
var unknownObjects = [
  "ac","acc","acccc",
  "bc","bcc","bcccc",
  "cc","ccac","ccccac","ccccccccac","ccccccccacc","cccc","cccccccc","ccccacc","cacccc","ccacccc","ccccacccc","ccccccccacccc"
];

/* end of line assertions */
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
