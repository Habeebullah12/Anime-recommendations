// ╔══════════════════════════════════════════════════════════════╗
// ║              🎌  ANIMEVAULT — YOUR DATA FILE  🎌             ║
// ║                                                              ║
// ║  HOW TO ADD A NEW ANIME:                                     ║
// ║  Just copy one line below and paste it at the bottom of      ║
// ║  the matching genre list. Change the title and rating.       ║
// ║                                                              ║
// ║  RATING: 5 = Must Watch  4 = Great  3 = Good                 ║
// ║           2 = Decent     1 = Meh                             ║
// ║                                                              ║
// ║  FORMAT:  { title: "Anime Name", rating: 5 },                ║
// ║                                                              ║
// ║  TO DELETE: Simply remove that line.                         ║
// ╚══════════════════════════════════════════════════════════════╝

const ANIME_DATA = {

  // ──────────────────────────────────────────────────────────────
  // 🌀  ISEKAI / REINCARNATION / FANTASY
  // ──────────────────────────────────────────────────────────────
  "Isekai / Reincarnation / Fantasy": [
    { title: "The Eminence in Shadow",                              rating: 5 },
    { title: "Mushoku Tensei: Jobless Reincarnation",               rating: 5 },
    { title: "The Rising of the Shield Hero",                       rating: 5 },
    { title: "Solo Leveling",                                       rating: 5 },
    { title: "The World's Finest Assassin Gets Reincarnated",       rating: 5 },
    { title: "Isekai Cheat Magician",                               rating: 4 },
    { title: "The Aristocrat's Otherworldly Adventure",             rating: 4 },
    { title: "Reborn to Master the Blade",                          rating: 4 },
    { title: "Summoned to Another World for a Second Time",         rating: 4 },
    { title: "In Another World with My Smartphone",                 rating: 4 },
    { title: "Tales of Wedding Rings",                              rating: 4 },
    { title: "Kunon the Sorcerer Can See Through",                  rating: 4 },
    { title: "I Got a Cheat Skill in Another World",                rating: 4 },
    { title: "Chillin' in Another World with Level 2 Cheat Powers", rating: 4 },
    { title: "The New Gate",                                        rating: 4 },
    { title: "My Instant Death Ability Is So Overpowered",          rating: 4 },
    { title: "Seirei Gensouki: Spirit Chronicles",                  rating: 4 },
    { title: "My Unique Skill Makes Me OP Even at Level 1",         rating: 4 },
    { title: "Backstabbed in a Backwater Dungeon",                  rating: 4 },
    { title: "The Greatest Demon Lord Is Reborn as a Typical Nobody",rating: 4 },
    { title: "The Reincarnation of the Strongest Exorcist",         rating: 4 },
    { title: "Am I Actually the Strongest?",                        rating: 4 },
    { title: "Reborn as the 7th Prince",                            rating: 4 },
    { title: "Yasei no Last Boss ga Arawareta!",                    rating: 4 },
    { title: "Harem in the Labyrinth of Another World",             rating: 3 },
    // ↓ ADD NEW ISEKAI ANIME HERE ↓
    // { title: "Your New Anime Title", rating: 5 },
  ],

  // ──────────────────────────────────────────────────────────────
  // ⚡  MAGIC / ADVENTURE / OVERPOWERED MC
  // ──────────────────────────────────────────────────────────────
  "Magic / Adventure / Overpowered MC": [
    { title: "Naruto",                                              rating: 5 },
    { title: "Black Clover",                                        rating: 5 },
    { title: "Mashle: Magic and Muscles",                           rating: 5 },
    { title: "A Returner's Magic Should Be Special",                rating: 5 },
    { title: "Kaiju No. 8",                                         rating: 5 },
    { title: "Dr. Stone",                                           rating: 5 },
    { title: "Wistoria: Wand and Sword",                            rating: 4 },
    { title: "The Iceblade Sorcerer Shall Rule the World",          rating: 4 },
    { title: "The Wrong Way to Use Healing Magic",                  rating: 4 },
    { title: "Wise Man's Grandchild",                               rating: 4 },
    { title: "Banished from the Hero's Party",                      rating: 4 },
    { title: "The Unwanted Undead Adventurer",                      rating: 4 },
    { title: "Wind Breaker",                                        rating: 4 },
    { title: "The Ossan Newbie Adventurer",                         rating: 3 },
    // ↓ ADD NEW MAGIC / ADVENTURE ANIME HERE ↓
    // { title: "Your New Anime Title", rating: 5 },
  ],

  // ──────────────────────────────────────────────────────────────
  // 🧠  SCHOOL / PSYCHOLOGICAL / STRATEGY
  // ──────────────────────────────────────────────────────────────
  "School / Psychological / Strategy": [
    { title: "Classroom of the Elite",                              rating: 5 },
    { title: "Tomodachi Game",                                      rating: 5 },
    { title: "Mission: Yozakura Family",                            rating: 4 },
    // ↓ ADD NEW SCHOOL / PSYCHOLOGICAL ANIME HERE ↓
    // { title: "Your New Anime Title", rating: 5 },
  ],

  // ──────────────────────────────────────────────────────────────
  // 💕  ROMANCE / COMEDY / HAREM
  // ──────────────────────────────────────────────────────────────
  "Romance / Comedy / Harem": [
    { title: "The Quintessential Quintuplets",                      rating: 5 },
    { title: "Kaguya-sama: Love Is War",                            rating: 5 },
    { title: "Grand Blue Dreaming",                                 rating: 5 },
    { title: "Girlfriend, Girlfriend",                              rating: 4 },
    { title: "Alya Sometimes Hides Her Feelings in Russian",        rating: 4 },
    { title: "Date A Live",                                         rating: 4 },
    { title: "Yamada-kun and the Seven Witches",                    rating: 4 },
    { title: "ORESUKI: Are You the Only One Who Loves Me?",         rating: 4 },
    { title: "Tune In to the Midnight Heart",                       rating: 4 },
    { title: "Tomo-chan Is a Girl!",                                 rating: 4 },
    { title: "More Than a Married Couple, but Not Lovers",          rating: 4 },
    { title: "The Café Terrace and Its Goddesses",                  rating: 4 },
    { title: "Shikimori's Not Just a Cutie",                        rating: 4 },
    { title: "Osamake: Romcom Where The Childhood Friend Won't Lose",rating: 4 },
    { title: "A Couple of Cuckoos",                                 rating: 4 },
    { title: "World's End Harem",                                   rating: 3 },
    // ↓ ADD NEW ROMANCE / COMEDY ANIME HERE ↓
    // { title: "Your New Anime Title", rating: 5 },
  ],

  // ──────────────────────────────────────────────────────────────
  // 🗡️  ACTION / DARK FANTASY / SUPERNATURAL
  // ──────────────────────────────────────────────────────────────
  "Action / Dark Fantasy / Supernatural": [
    { title: "Chainsaw Man",                                        rating: 5 },
    { title: "Akame ga Kill!",                                      rating: 5 },
    { title: "Kill Blue",                                           rating: 4 },
    { title: "Strike the Blood",                                    rating: 4 },
    { title: "The God of High School",                              rating: 4 },
    { title: "Redo of Healer",                                      rating: 3 },
    // ↓ ADD NEW ACTION / DARK FANTASY ANIME HERE ↓
    // { title: "Your New Anime Title", rating: 5 },
  ],

  // ──────────────────────────────────────────────────────────────
  // ➕  WANT A BRAND NEW GENRE? Copy this block and paste below:
  //
  //  "Your Genre Name": [
  //    { title: "Anime Title", rating: 5 },
  //    { title: "Anime Title", rating: 4 },
  //  ],
  //
  // ──────────────────────────────────────────────────────────────

};
