const dictionary = [
  "the",
  "be",
  "to",
  "of",
  "and",
  "a",
  "in",
  "that",
  "have",
  "I",
  "it",
  "for",
  "not",
  "on",
  "with",
  "he",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "his",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she",
  "or",
  "an",
  "will",
  "my",
  "one",
  "all",
  "would",
  "there",
  "their",
  "what",
  "so",
  "up",
  "out",
  "if",
  "about",
  "who",
  "get",
  "which",
  "go",
  "me",
  "when",
  "make",
  "can",
  "like",
  "time",
  "no",
  "just",
  "him",
  "know",
  "take",
  "people",
  "into",
  "year",
  "your",
  "good",
  "some",
  "could",
  "them",
  "see",
  "other",
  "than",
  "then",
  "now",
  "look",
  "only",
  "come",
  "its",
  "over",
  "think",
  "also",
  "back",
  "after",
  "use",
  "two",
  "how",
  "our",
  "work",
  "first",
  "well",
  "way",
  "even",
  "new",
  "want",
  "because",
  "any",
  "these",
  "give",
  "day",
  "most",
  "us",
  "is",
  "are",
  "was",
  "were",
  "been",
  "has",
  "had",
  "may",
  "should",
  "would",
  "could",
  "can",
  "will",
  "might",
  "must",
  "shall",
  "ought",
  "need",
  "dare",
  "used",
  "going",
  "having",
  "doing",
  "being",
  "getting",
  "making",
  "taking",
  "putting",
  "seeing",
  "coming",
  "knowing",
  "thinking",
  "saying",
  "going",
  "finding",
  "giving",
  "working",
  "telling",
  "keeping",
  "letting",
  "feeling",
  "becoming",
  "leaving",
  "helping",
  "showing",
  "hearing",
  "playing",
  "running",
  "moving",
  "living",
  "turning",
  "carrying",
  "bringing",
  "beginning",
  "holding",
  "writing",
  "sitting",
  "standing",
  "understanding",
  "watching",
  "following",
  "creating",
  "speaking",
  "reading",
  "spending",
  "growing",
  "opening",
  "walking",
  "winning",
  "teaching",
  "offering",
  "remembering",
  "considering",
  "appearing",
  "buying",
  "waiting",
  "serving",
  "dying",
  "sending",
  "expecting",
  "building",
  "staying",
  "falling",
  "cutting",
  "reaching",
  "killing",
  "remaining",
  "suggesting",
  "raising",
  "passing",
  "selling",
  "deciding",
  "returning",
  "explaining",
  "hoping",
  "developing",
  "trying",
  "asking",
  "using",
  "playing",
  "meeting",
  "including",
  "continuing",
  "setting",
  "learning",
  "changing",
  "leading",
  "understanding",
  "watching",
  "following",
  "stopping",
  "creating",
  "speaking",
  "reading",
  "allowing",
  "adding",
  "spending",
  "increasing",
  "responding",
  "describing",
  "fighting",
  "producing",
  "providing",
  "requiring",
  "reporting",
  "deciding",
  "suggesting",
  "receiving",
  "choosing",
  "dealing",
  "driving",
  "training",
  "containing",
  "beginning",
  "discussing",
  "accepting",
  "can",
  "will",
  "might",
  "must",
  "shall",
  "ought",
  "need",
  "dare",
  "used",
  "went",
  "had",
  "done",
  "made",
  "saw",
  "came",
  "took",
  "put",
  "felt",
  "found",
  "said",
  "told",
  "kept",
  "let",
  "left",
  "helped",
  "showed",
  "heard",
  "ran",
  "moved",
  "lived",
  "turned",
  "brought",
  "began",
  "held",
  "wrote",
  "sat",
  "stood",
  "understood",
  "watched",
  "followed",
  "spoke",
  "read",
  "spent",
  "grew",
  "opened",
  "won",
  "taught",
  "offered",
  "remembered",
  "considered",
  "appeared",
  "bought",
  "waited",
  "served",
  "died",
  "sent",
  "expected",
  "built",
  "stayed",
  "fell",
  "cut",
  "reached",
  "killed",
  "remained",
  "raised",
  "passed",
  "sold",
  "decided",
  "returned",
  "explained",
  "hoped",
  "developed",
  "tried",
  "asked",
  "used",
  "played",
  "met",
  "set",
  "learned",
  "changed",
  "led",
  "understood",
  "stopped",
  "created",
  "spoke",
  "allowed",
  "added",
  "increased",
  "responded",
  "described",
  "fought",
  "produced",
  "provided",
  "required",
  "reported",
  "chose",
  "dealt",
  "drove",
  "contained",
  "discussed",
  "accepted",
  "entered",
  "supported",
  "hit",
  "represented",
  "broke",
  "prepared",
  "achieved",
  "lost",
  "occurred",
  "shared",
  "assumed",
  "joined",
  "hid",
  "covered",
  "sought",
  "reflected",
  "defined",
  "drew",
  "smiled",
  "argued",
  "stated",
  "ranged",
  "caused",
  "avoided",
  "performed",
  "laid",
  "wondered",
  "failed",
  "pressed",
  "doubted",
  "advised",
  "meant",
  "thanked",
  "shot",
  "removed",
  "referred",
  "forgot",
  "ate",
  "slept",
  "drank",
  "flew",
  "swam",
  "rode",
  "froze",
  "chose",
  "shook",
  "sang",
  "sank",
  "rose",
  "stole",
  "threw",
  "woke",
  "wore",
  "won",
  "withdrew",
  "wrote",
  "tore",
  "struck",
  "stuck",
];
const $button = document.getElementById("reloadParraf");
let $text = document.getElementById("words");
const $timer = document.getElementById("countdown");
const $wpm = document.getElementById("wpm");
const $precision = document.getElementById("precision");
let letters = [];
let firstime = true;
let second = 60;
let right = 0;
let counter = 0;
let j = 0;
let x = 0;

document.addEventListener("DOMContentLoaded", () => {
  setRandomInitialText();
});

addEventListener("keydown", handleKeydown);

$button.addEventListener("click", reload);

function handleKeydown(event) {
  if (firstime === true) {
    timer(second);
    firstime = false;
  }

  verifyWrited(event.key);
}

function setRandomInitialText(wordCount = 150) {
  const randomWords = Array.from(
    { length: wordCount },
    () => dictionary[Math.floor(Math.random() * dictionary.length)]
  );
  const initialText = randomWords.join(" ");
  $text.textContent = initialText;
  letters = initialText.split("");
}

function reload() {
  location.reload();
}

function verifyWrited(key) {
  if (key === "Backspace") {
    if (j > 0) {
      j--;
      letters[j] = letters[j].replace(/<\/?span[^>]*>/g, "");
    }
    counter--;
  } else if (key.length === 1) {
    if (key === " " && key === letters[j]) {
      letters[
        j
      ] = `<span style="background-color: rgb(190, 218, 179);">${letters[j]}</span>`;
      x++;
    } else if (key === " " && key !== letters[j]) {
      letters[j] = `<span style="background-color: red;">${letters[j]}</span>`;
    }

    if (key === letters[j]) {
      letters[j] = `<span style="color: green;">${letters[j]}</span>`;
      right++;
      counter++;
    } else {
      letters[j] = `<span style="color: red;">${letters[j]}</span>`;
      counter++;
    }

    j++;
  }

  $text.innerHTML = letters.join("");
}

function timer(second) {
  if (second >= 0) {
    $timer.innerText = second;
    setTimeout(() => timer(second - 1), 1000);
  } else {
    $timer.innerText = "¡Tiempo terminado!";
    wordCount();
    lettersRight();
    removeEventListener("keydown", handleKeydown);
  }
}

function wordCount() {
  let wpm = x;
  wpm = wpm.toFixed(2);
  $wpm.innerHTML = `WPM = ${wpm}`;
}

function lettersRight() {
  let precision = parseFloat((right / counter) * 100);
  precision = precision.toFixed(2); // Round to 2 decimal places
  $precision.innerHTML = `Your accuracy was ${precision}%`;
}
