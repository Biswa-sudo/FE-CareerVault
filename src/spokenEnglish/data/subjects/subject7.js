export default {
  id: 7,
  title: "Telling Time & Schedules",
  description: "Learn to tell the time, talk about your daily schedule, and use prepositions like 'at' and 'on'.",
  lessons: [
    {
      id: 1,
      title: "O'Clock – On the Hour",
      description: "Learn to tell the time when it is exactly on the hour – 1 o'clock, 2 o'clock, etc.",
      activities: [
        {
          id: "a1",
          type: "listen_repeat",
          instruction: "Listen and repeat this time.",
          content: "It is one o'clock.",
          expectedAnswers: ["it is one o'clock", "it's one o'clock"],
          hint: "It is 1:00.",
          image: "https://via.placeholder.com/400x200?text=1+Oclock",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a2",
          type: "listen_repeat",
          instruction: "Listen and repeat this time.",
          content: "It is two o'clock.",
          expectedAnswers: ["it is two o'clock", "it's two o'clock"],
          hint: "It is 2:00.",
          image: "https://via.placeholder.com/400x200?text=2+Oclock",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a3",
          type: "read_aloud",
          instruction: "Read this time aloud.",
          content: "It is three o'clock.",
          expectedAnswers: ["it is three o'clock", "it's three o'clock"],
          hint: "It is 3:00.",
          image: "https://via.placeholder.com/400x200?text=3+Oclock"
        },
        {
          id: "a4",
          type: "multiple_choice",
          instruction: "Choose the correct time for 4:00.",
          content: "What time is it at 4:00?",
          options: ["It is four o'clock", "It is five o'clock", "It is three o'clock"],
          expectedAnswers: ["it is four o'clock"],
          hint: "It is exactly 4.",
          image: "https://via.placeholder.com/400x200?text=4+Oclock"
        },
        {
          id: "a5",
          type: "sentence_completion",
          instruction: "Complete the sentence for 5:00.",
          content: "It is ______ o'clock.",
          expectedAnswers: ["five"],
          hint: "Say the number.",
          image: "https://via.placeholder.com/400x200?text=5+Oclock"
        },
        {
          id: "a6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "It is six ______.",
          expectedAnswers: ["o'clock", "oclock"],
          hint: "Use 'o'clock'.",
          image: "https://via.placeholder.com/400x200?text=6+Oclock"
        },
        {
          id: "a7",
          type: "spell_word",
          instruction: "Spell the word 'o'clock'.",
          content: "o'clock",
          expectedAnswers: ["oclock", "o'clock"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Oclock"
        },
        {
          id: "a8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I wake up at six o'clock.",
          expectedAnswers: ["i wake up at six o'clock"],
          hint: "Say your wake-up time.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+at+6",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "We eat dinner at seven o'clock.",
          expectedAnswers: ["we eat dinner at seven o'clock"],
          hint: "Say your dinner time.",
          image: "https://via.placeholder.com/400x200?text=Dinner+at+7"
        },
        {
          id: "a10",
          type: "multiple_choice",
          instruction: "Choose the correct time for 8:00.",
          content: "What time is it at 8:00?",
          options: ["Eight o'clock", "Seven o'clock", "Nine o'clock"],
          expectedAnswers: ["eight o'clock"],
          hint: "It is exactly 8.",
          image: "https://via.placeholder.com/400x200?text=8+Oclock"
        },
        {
          id: "a11",
          type: "spell_word",
          instruction: "Spell the word 'eight'.",
          content: "eight",
          expectedAnswers: ["eight", "e-i-g-h-t"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Eight"
        },
        {
          id: "a12",
          type: "sentence_completion",
          instruction: "Complete the sentence for 9:00.",
          content: "It is nine ______.",
          expectedAnswers: ["o'clock", "oclock"],
          hint: "Use 'o'clock'.",
          image: "https://via.placeholder.com/400x200?text=9+Oclock"
        },
        {
          id: "a13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What time is it? It is ten o'clock.",
          expectedAnswers: ["what time is it it is ten o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=10+Oclock",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time is it? It is twelve o'clock.",
          expectedAnswers: ["what time is it it is twelve o'clock"],
          hint: "It is 12:00.",
          image: "https://via.placeholder.com/400x200?text=12+Oclock"
        },
        {
          id: "a15",
          type: "revision",
          instruction: "Practise saying o'clock times.",
          content: "One o'clock, two o'clock, three o'clock, four o'clock.",
          expectedAnswers: ["one o'clock two o'clock three o'clock four o'clock"],
          hint: "Say the times.",
          image: "https://via.placeholder.com/400x200?text=Practice+Oclock"
        },
        {
          id: "a16",
          type: "challenge_question",
          instruction: "What time is it at 3:00?",
          content: "Say the time at 3:00.",
          expectedAnswers: ["three o'clock", "it is three o'clock"],
          hint: "Say 'three o'clock'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+3+Oclock"
        }
      ]
    },
    {
      id: 2,
      title: "Half Past – 30 Minutes Past",
      description: "Learn to tell the time when it is half past the hour – 3:30, 6:30, etc.",
      activities: [
        {
          id: "b1",
          type: "listen_repeat",
          instruction: "Listen and repeat this time.",
          content: "It is half past three.",
          expectedAnswers: ["it is half past three", "it's half past three"],
          hint: "It is 3:30.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+3",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b2",
          type: "listen_repeat",
          instruction: "Listen and repeat this time.",
          content: "It is half past six.",
          expectedAnswers: ["it is half past six", "it's half past six"],
          hint: "It is 6:30.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+6",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b3",
          type: "read_aloud",
          instruction: "Read this time aloud.",
          content: "It is half past four.",
          expectedAnswers: ["it is half past four", "it's half past four"],
          hint: "It is 4:30.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+4"
        },
        {
          id: "b4",
          type: "multiple_choice",
          instruction: "Choose the correct time for 5:30.",
          content: "What time is it at 5:30?",
          options: ["Half past five", "Half past six", "Five o'clock"],
          expectedAnswers: ["half past five"],
          hint: "It is 30 minutes after 5.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+5"
        },
        {
          id: "b5",
          type: "sentence_completion",
          instruction: "Complete the sentence for 7:30.",
          content: "It is ______ past seven.",
          expectedAnswers: ["half"],
          hint: "Use 'half'.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+7"
        },
        {
          id: "b6",
          type: "sentence_completion",
          instruction: "Complete the sentence for 8:30.",
          content: "It is half ______ eight.",
          expectedAnswers: ["past"],
          hint: "Use 'past'.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+8"
        },
        {
          id: "b7",
          type: "spell_word",
          instruction: "Spell the word 'half'.",
          content: "half",
          expectedAnswers: ["half", "h-a-l-f"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Half"
        },
        {
          id: "b8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "We eat lunch at half past twelve.",
          expectedAnswers: ["we eat lunch at half past twelve"],
          hint: "Say your lunch time.",
          image: "https://via.placeholder.com/400x200?text=Lunch+at+Half+Past+12",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I go home at half past two.",
          expectedAnswers: ["i go home at half past two"],
          hint: "Say your home time.",
          image: "https://via.placeholder.com/400x200?text=Home+at+Half+Past+2"
        },
        {
          id: "b10",
          type: "multiple_choice",
          instruction: "Choose the correct time for half past nine.",
          content: "What time is half past nine?",
          options: ["9:30", "9:00", "10:30"],
          expectedAnswers: ["9:30"],
          hint: "It is 30 minutes after 9.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+9"
        },
        {
          id: "b11",
          type: "spell_word",
          instruction: "Spell the word 'past'.",
          content: "past",
          expectedAnswers: ["past", "p-a-s-t"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Past"
        },
        {
          id: "b12",
          type: "sentence_completion",
          instruction: "Complete the sentence for 10:30.",
          content: "It is half past ______.",
          expectedAnswers: ["ten"],
          hint: "Say the number.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+10"
        },
        {
          id: "b13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question and answer.",
          content: "What time is it? It is half past eleven.",
          expectedAnswers: ["what time is it it is half past eleven"],
          hint: "It is 11:30.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+11",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time is it? It is half past one.",
          expectedAnswers: ["what time is it it is half past one"],
          hint: "It is 1:30.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+1"
        },
        {
          id: "b15",
          type: "revision",
          instruction: "Practise saying half past times.",
          content: "Half past three, half past six, half past nine.",
          expectedAnswers: ["half past three half past six half past nine"],
          hint: "Say the times.",
          image: "https://via.placeholder.com/400x200?text=Practice+Half+Past"
        },
        {
          id: "b16",
          type: "challenge_question",
          instruction: "What time is it at 4:30?",
          content: "Say the time at 4:30.",
          expectedAnswers: ["half past four", "it is half past four"],
          hint: "Say 'half past four'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Half+Past+4"
        }
      ]
    },
    {
      id: 3,
      title: "Quarter Past – 15 Minutes Past",
      description: "Learn to tell the time when it is quarter past the hour – 3:15, 6:15, etc.",
      activities: [
        {
          id: "c1",
          type: "listen_repeat",
          instruction: "Listen and repeat this time.",
          content: "It is quarter past three.",
          expectedAnswers: ["it is quarter past three", "it's quarter past three"],
          hint: "It is 3:15.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+3",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c2",
          type: "listen_repeat",
          instruction: "Listen and repeat this time.",
          content: "It is quarter past six.",
          expectedAnswers: ["it is quarter past six", "it's quarter past six"],
          hint: "It is 6:15.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+6",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c3",
          type: "read_aloud",
          instruction: "Read this time aloud.",
          content: "It is quarter past four.",
          expectedAnswers: ["it is quarter past four", "it's quarter past four"],
          hint: "It is 4:15.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+4"
        },
        {
          id: "c4",
          type: "multiple_choice",
          instruction: "Choose the correct time for quarter past five.",
          content: "What time is quarter past five?",
          options: ["5:15", "5:30", "5:00"],
          expectedAnswers: ["5:15"],
          hint: "It is 15 minutes after 5.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+5"
        },
        {
          id: "c5",
          type: "sentence_completion",
          instruction: "Complete the sentence for 7:15.",
          content: "It is ______ past seven.",
          expectedAnswers: ["quarter"],
          hint: "Use 'quarter'.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+7"
        },
        {
          id: "c6",
          type: "sentence_completion",
          instruction: "Complete the sentence for 8:15.",
          content: "It is quarter ______ eight.",
          expectedAnswers: ["past"],
          hint: "Use 'past'.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+8"
        },
        {
          id: "c7",
          type: "spell_word",
          instruction: "Spell the word 'quarter'.",
          content: "quarter",
          expectedAnswers: ["quarter", "q-u-a-r-t-e-r"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Quarter"
        },
        {
          id: "c8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I take a break at quarter past ten.",
          expectedAnswers: ["i take a break at quarter past ten"],
          hint: "Say your break time.",
          image: "https://via.placeholder.com/400x200?text=Break+at+Quarter+Past+10",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "We start class at quarter past eight.",
          expectedAnswers: ["we start class at quarter past eight"],
          hint: "Say your class time.",
          image: "https://via.placeholder.com/400x200?text=Class+at+Quarter+Past+8"
        },
        {
          id: "c10",
          type: "multiple_choice",
          instruction: "Choose the correct time for 9:15.",
          content: "What time is 9:15?",
          options: ["Quarter past nine", "Half past nine", "Nine o'clock"],
          expectedAnswers: ["quarter past nine"],
          hint: "It is 15 minutes after 9.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+9"
        },
        {
          id: "c11",
          type: "spell_word",
          instruction: "Spell the word 'fifteen'.",
          content: "fifteen",
          expectedAnswers: ["fifteen", "f-i-f-t-e-e-n"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Fifteen"
        },
        {
          id: "c12",
          type: "sentence_completion",
          instruction: "Complete the sentence for 11:15.",
          content: "It is quarter past ______.",
          expectedAnswers: ["eleven"],
          hint: "Say the number.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+11"
        },
        {
          id: "c13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question and answer.",
          content: "What time is it? It is quarter past two.",
          expectedAnswers: ["what time is it it is quarter past two"],
          hint: "It is 2:15.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+2",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time is it? It is quarter past twelve.",
          expectedAnswers: ["what time is it it is quarter past twelve"],
          hint: "It is 12:15.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+12"
        },
        {
          id: "c15",
          type: "revision",
          instruction: "Practise saying quarter past times.",
          content: "Quarter past three, quarter past six, quarter past nine.",
          expectedAnswers: ["quarter past three quarter past six quarter past nine"],
          hint: "Say the times.",
          image: "https://via.placeholder.com/400x200?text=Practice+Quarter+Past"
        },
        {
          id: "c16",
          type: "challenge_question",
          instruction: "What time is it at 2:15?",
          content: "Say the time at 2:15.",
          expectedAnswers: ["quarter past two", "it is quarter past two"],
          hint: "Say 'quarter past two'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Quarter+Past+2"
        }
      ]
    },
    {
      id: 4,
      title: "Quarter To – 15 Minutes To",
      description: "Learn to tell the time when it is quarter to the next hour – 2:45, 5:45, etc.",
      activities: [
        {
          id: "d1",
          type: "listen_repeat",
          instruction: "Listen and repeat this time.",
          content: "It is quarter to four.",
          expectedAnswers: ["it is quarter to four", "it's quarter to four"],
          hint: "It is 3:45.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+4",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d2",
          type: "listen_repeat",
          instruction: "Listen and repeat this time.",
          content: "It is quarter to seven.",
          expectedAnswers: ["it is quarter to seven", "it's quarter to seven"],
          hint: "It is 6:45.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+7",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d3",
          type: "read_aloud",
          instruction: "Read this time aloud.",
          content: "It is quarter to five.",
          expectedAnswers: ["it is quarter to five", "it's quarter to five"],
          hint: "It is 4:45.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+5"
        },
        {
          id: "d4",
          type: "multiple_choice",
          instruction: "Choose the correct time for quarter to six.",
          content: "What time is quarter to six?",
          options: ["5:45", "6:15", "6:00"],
          expectedAnswers: ["5:45"],
          hint: "It is 15 minutes before 6.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+6"
        },
        {
          id: "d5",
          type: "sentence_completion",
          instruction: "Complete the sentence for 7:45.",
          content: "It is quarter ______ eight.",
          expectedAnswers: ["to"],
          hint: "Use 'to'.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+8"
        },
        {
          id: "d6",
          type: "sentence_completion",
          instruction: "Complete the sentence for 8:45.",
          content: "It is quarter to ______.",
          expectedAnswers: ["nine"],
          hint: "Say the next hour.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+9"
        },
        {
          id: "d7",
          type: "spell_word",
          instruction: "Spell the word 'to'.",
          content: "to",
          expectedAnswers: ["to", "t-o"],
          hint: "It has two letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+To"
        },
        {
          id: "d8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "School ends at quarter to three.",
          expectedAnswers: ["school ends at quarter to three"],
          hint: "It ends at 2:45.",
          image: "https://via.placeholder.com/400x200?text=School+Ends+at+Quarter+to+3",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "We have dinner at quarter to eight.",
          expectedAnswers: ["we have dinner at quarter to eight"],
          hint: "We eat at 7:45.",
          image: "https://via.placeholder.com/400x200?text=Dinner+at+Quarter+to+8"
        },
        {
          id: "d10",
          type: "multiple_choice",
          instruction: "Choose the correct time for quarter to ten.",
          content: "What time is quarter to ten?",
          options: ["9:45", "10:15", "10:00"],
          expectedAnswers: ["9:45"],
          hint: "It is 15 minutes before 10.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+10"
        },
        {
          id: "d11",
          type: "spell_word",
          instruction: "Spell the word 'forty-five'.",
          content: "forty-five",
          expectedAnswers: ["fortyfive", "forty five"],
          hint: "It is 45.",
          image: "https://via.placeholder.com/400x200?text=Spell+Forty+Five"
        },
        {
          id: "d12",
          type: "sentence_completion",
          instruction: "Complete the sentence for 10:45.",
          content: "It is quarter to ______.",
          expectedAnswers: ["eleven"],
          hint: "Say the next hour.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+11"
        },
        {
          id: "d13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question and answer.",
          content: "What time is it? It is quarter to twelve.",
          expectedAnswers: ["what time is it it is quarter to twelve"],
          hint: "It is 11:45.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+12",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time is it? It is quarter to two.",
          expectedAnswers: ["what time is it it is quarter to two"],
          hint: "It is 1:45.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+2"
        },
        {
          id: "d15",
          type: "revision",
          instruction: "Practise saying quarter to times.",
          content: "Quarter to four, quarter to seven, quarter to ten.",
          expectedAnswers: ["quarter to four quarter to seven quarter to ten"],
          hint: "Say the times.",
          image: "https://via.placeholder.com/400x200?text=Practice+Quarter+To"
        },
        {
          id: "d16",
          type: "challenge_question",
          instruction: "What time is it at 5:45?",
          content: "Say the time at 5:45.",
          expectedAnswers: ["quarter to six", "it is quarter to six"],
          hint: "Say 'quarter to six'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Quarter+to+6"
        }
      ]
    },
    {
      id: 5,
      title: "Using 'At' with Time",
      description: "Learn to use 'at' to talk about when you do things.",
      activities: [
        {
          id: "e1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I wake up at six o'clock.",
          expectedAnswers: ["i wake up at six o'clock"],
          hint: "Say when you wake up.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+at+6",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "We eat lunch at half past twelve.",
          expectedAnswers: ["we eat lunch at half past twelve"],
          hint: "Say when you eat lunch.",
          image: "https://via.placeholder.com/400x200?text=Lunch+at+Half+Past+12",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I go to school at quarter past seven.",
          expectedAnswers: ["i go to school at quarter past seven"],
          hint: "Say when you go to school.",
          image: "https://via.placeholder.com/400x200?text=School+at+Quarter+Past+7"
        },
        {
          id: "e4",
          type: "multiple_choice",
          instruction: "Choose the correct preposition for time.",
          content: "Which word do you use for a specific time?",
          options: ["At", "On", "In"],
          expectedAnswers: ["at"],
          hint: "Use 'at' for clock time.",
          image: "https://via.placeholder.com/400x200?text=At+Time"
        },
        {
          id: "e5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I go to bed ______ nine o'clock.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=At+9+Oclock"
        },
        {
          id: "e6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "We have breakfast ______ quarter to eight.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=At+Quarter+to+8"
        },
        {
          id: "e7",
          type: "spell_word",
          instruction: "Spell the word 'at'.",
          content: "at",
          expectedAnswers: ["at", "a-t"],
          hint: "It has two letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+At"
        },
        {
          id: "e8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "School starts at half past eight.",
          expectedAnswers: ["school starts at half past eight"],
          hint: "Say when school starts.",
          image: "https://via.placeholder.com/400x200?text=School+Starts+at+Half+Past+8",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "We eat dinner at seven o'clock.",
          expectedAnswers: ["we eat dinner at seven o'clock"],
          hint: "Say when you eat dinner.",
          image: "https://via.placeholder.com/400x200?text=Dinner+at+7"
        },
        {
          id: "e10",
          type: "multiple_choice",
          instruction: "Choose the correct time phrase.",
          content: "Which sentence is correct?",
          options: ["I wake up at 6 o'clock", "I wake up in 6 o'clock", "I wake up on 6 o'clock"],
          expectedAnswers: ["i wake up at 6 o'clock"],
          hint: "Use 'at' for time.",
          image: "https://via.placeholder.com/400x200?text=At+6+Oclock"
        },
        {
          id: "e11",
          type: "spell_word",
          instruction: "Spell the word 'time'.",
          content: "time",
          expectedAnswers: ["time", "t-i-m-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Time"
        },
        {
          id: "e12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I do my homework ______ half past four.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=At+Half+Past+4"
        },
        {
          id: "e13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question and answer.",
          content: "What time do you wake up? I wake up at six o'clock.",
          expectedAnswers: ["what time do you wake up i wake up at six o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+Question",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time do you go to school? I go to school at quarter past seven.",
          expectedAnswers: ["what time do you go to school i go to school at quarter past seven"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Go+to+School+Question"
        },
        {
          id: "e15",
          type: "revision",
          instruction: "Practise using 'at' with times.",
          content: "At 6 o'clock, at half past 7, at quarter to 8.",
          expectedAnswers: ["at 6 o'clock at half past 7 at quarter to 8"],
          hint: "Say the times with 'at'.",
          image: "https://via.placeholder.com/400x200?text=Practice+At"
        },
        {
          id: "e16",
          type: "challenge_question",
          instruction: "What time do you wake up? Use 'at' in your answer.",
          content: "Say your wake-up time with 'at'.",
          expectedAnswers: ["i wake up at"],
          hint: "Say 'I wake up at...'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Wake+Up+Time+At"
        }
      ]
    },
    {
      id: 6,
      title: "Using 'On' with Days",
      description: "Learn to use 'on' with days of the week for activities.",
      activities: [
        {
          id: "f1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I go to school on Monday.",
          expectedAnswers: ["i go to school on monday"],
          hint: "Say when you go to school.",
          image: "https://via.placeholder.com/400x200?text=School+on+Monday",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I play cricket on Saturday.",
          expectedAnswers: ["i play cricket on saturday"],
          hint: "Say when you play.",
          image: "https://via.placeholder.com/400x200?text=Play+on+Saturday",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "We visit my grandmother on Sunday.",
          expectedAnswers: ["we visit my grandmother on sunday"],
          hint: "Say when you visit.",
          image: "https://via.placeholder.com/400x200?text=Visit+on+Sunday"
        },
        {
          id: "f4",
          type: "multiple_choice",
          instruction: "Choose the correct preposition for days.",
          content: "Which word do you use for a day?",
          options: ["On", "At", "In"],
          expectedAnswers: ["on"],
          hint: "Use 'on' for days.",
          image: "https://via.placeholder.com/400x200?text=On+Days"
        },
        {
          id: "f5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I study English ______ Tuesday.",
          expectedAnswers: ["on"],
          hint: "Use 'on'.",
          image: "https://via.placeholder.com/400x200?text=On+Tuesday"
        },
        {
          id: "f6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "We have a holiday ______ Friday.",
          expectedAnswers: ["on"],
          hint: "Use 'on'.",
          image: "https://via.placeholder.com/400x200?text=On+Friday"
        },
        {
          id: "f7",
          type: "spell_word",
          instruction: "Spell the word 'Monday'.",
          content: "monday",
          expectedAnswers: ["monday", "m-o-n-d-a-y"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Monday"
        },
        {
          id: "f8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "On Wednesday, I have a music class.",
          expectedAnswers: ["on wednesday i have a music class"],
          hint: "Say what you have on Wednesday.",
          image: "https://via.placeholder.com/400x200?text=Music+Class+on+Wednesday",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I play with my friends on Thursday.",
          expectedAnswers: ["i play with my friends on thursday"],
          hint: "Say when you play.",
          image: "https://via.placeholder.com/400x200?text=Play+on+Thursday"
        },
        {
          id: "f10",
          type: "multiple_choice",
          instruction: "Choose the correct day for school.",
          content: "Which day do you go to school?",
          options: ["Monday", "Sunday", "Saturday"],
          expectedAnswers: ["monday"],
          hint: "It is a weekday.",
          image: "https://via.placeholder.com/400x200?text=Monday"
        },
        {
          id: "f11",
          type: "spell_word",
          instruction: "Spell the word 'Saturday'.",
          content: "saturday",
          expectedAnswers: ["saturday", "s-a-t-u-r-d-a-y"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Saturday"
        },
        {
          id: "f12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I don't go to school ______ Sunday.",
          expectedAnswers: ["on"],
          hint: "Use 'on'.",
          image: "https://via.placeholder.com/400x200?text=On+Sunday"
        },
        {
          id: "f13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question and answer.",
          content: "When do you play cricket? I play on Saturday.",
          expectedAnswers: ["when do you play cricket i play on saturday"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Play+Cricket+on+Saturday",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "When do you visit your grandmother? We visit on Sunday.",
          expectedAnswers: ["when do you visit your grandmother we visit on sunday"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Visit+on+Sunday"
        },
        {
          id: "f15",
          type: "revision",
          instruction: "Practise using 'on' with days.",
          content: "On Monday, on Tuesday, on Wednesday, on Thursday.",
          expectedAnswers: ["on monday on tuesday on wednesday on thursday"],
          hint: "Say the days with 'on'.",
          image: "https://via.placeholder.com/400x200?text=Practice+On+Days"
        },
        {
          id: "f16",
          type: "challenge_question",
          instruction: "What do you do on Sunday? Use 'on' in your answer.",
          content: "Say an activity you do on Sunday.",
          expectedAnswers: ["i play on sunday", "i visit on sunday"],
          hint: "Say 'I... on Sunday'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+On+Sunday"
        }
      ]
    },
    {
      id: 7,
      title: "My Morning Schedule",
      description: "Learn to describe your morning routine with times.",
      activities: [
        {
          id: "g1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I wake up at 6 o'clock.",
          expectedAnswers: ["i wake up at 6 o'clock"],
          hint: "Say your wake-up time.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+at+6",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I brush my teeth at quarter past six.",
          expectedAnswers: ["i brush my teeth at quarter past six"],
          hint: "Say when you brush.",
          image: "https://via.placeholder.com/400x200?text=Brush+at+Quarter+Past+6",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I eat breakfast at half past six.",
          expectedAnswers: ["i eat breakfast at half past six"],
          hint: "Say your breakfast time.",
          image: "https://via.placeholder.com/400x200?text=Breakfast+at+Half+Past+6"
        },
        {
          id: "g4",
          type: "multiple_choice",
          instruction: "Choose the correct time for breakfast.",
          content: "When do you eat breakfast?",
          options: ["At 6:30", "At 12:00", "At 7:00"],
          expectedAnswers: ["at 6:30"],
          hint: "It is half past six.",
          image: "https://via.placeholder.com/400x200?text=Breakfast+at+6:30"
        },
        {
          id: "g5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I go to school ______ quarter to eight.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=Go+to+School+at+Quarter+to+8"
        },
        {
          id: "g6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I wake up ______ 6 o'clock.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+at+6"
        },
        {
          id: "g7",
          type: "spell_word",
          instruction: "Spell the word 'routine'.",
          content: "routine",
          expectedAnswers: ["routine", "r-o-u-t-i-n-e"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Routine"
        },
        {
          id: "g8",
          type: "listen_repeat",
          instruction: "Listen and repeat this full morning routine.",
          content: "I wake up at 6. I brush my teeth at 6:15. I eat breakfast at 6:30. I go to school at 7:45.",
          expectedAnswers: ["i wake up at 6 i brush my teeth at 6 15 i eat breakfast at 6 30 i go to school at 7 45"],
          hint: "Say your whole morning.",
          image: "https://via.placeholder.com/400x200?text=Morning+Routine",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g9",
          type: "read_aloud",
          instruction: "Read this morning routine aloud.",
          content: "In the morning, I wake up at 6. I take a shower. I eat breakfast. I go to school at 7.",
          expectedAnswers: ["in the morning i wake up at 6 i take a shower i eat breakfast i go to school at 7"],
          hint: "Describe your morning.",
          image: "https://via.placeholder.com/400x200?text=My+Morning"
        },
        {
          id: "g10",
          type: "multiple_choice",
          instruction: "Choose the correct activity for morning.",
          content: "What do you do at 6:30?",
          options: ["Eat breakfast", "Go to school", "Go to bed"],
          expectedAnswers: ["eat breakfast"],
          hint: "It is early morning.",
          image: "https://via.placeholder.com/400x200?text=Eat+Breakfast"
        },
        {
          id: "g11",
          type: "spell_word",
          instruction: "Spell the word 'morning'.",
          content: "morning",
          expectedAnswers: ["morning", "m-o-r-n-i-n-g"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Morning"
        },
        {
          id: "g12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ up at 6 o'clock.",
          expectedAnswers: ["wake"],
          hint: "Use 'wake'.",
          image: "https://via.placeholder.com/400x200?text=I+Wake+Up"
        },
        {
          id: "g13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What time do you eat breakfast? I eat breakfast at 6:30.",
          expectedAnswers: ["what time do you eat breakfast i eat breakfast at 6 30"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Breakfast+Question",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time do you go to school? I go to school at 7:45.",
          expectedAnswers: ["what time do you go to school i go to school at 7 45"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=School+Question"
        },
        {
          id: "g15",
          type: "revision",
          instruction: "Practise your morning routine.",
          content: "I wake up at 6. I eat breakfast at 6:30. I go to school at 7:45.",
          expectedAnswers: ["i wake up at 6 i eat breakfast at 6 30 i go to school at 7 45"],
          hint: "Say three things.",
          image: "https://via.placeholder.com/400x200?text=Practice+Morning+Routine"
        },
        {
          id: "g16",
          type: "challenge_question",
          instruction: "Tell your morning routine with times.",
          content: "Say three things you do in the morning and their times.",
          expectedAnswers: ["i wake up at", "i eat breakfast at", "i go to school at"],
          hint: "Use 'at' for each time.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Morning+Routine"
        }
      ]
    },
    {
      id: 8,
      title: "My School Schedule",
      description: "Learn to describe your schedule at school with times.",
      activities: [
        {
          id: "h1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "School starts at 8 o'clock.",
          expectedAnswers: ["school starts at 8 o'clock"],
          hint: "Say when school starts.",
          image: "https://via.placeholder.com/400x200?text=School+Starts+at+8",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "We have break at quarter past ten.",
          expectedAnswers: ["we have break at quarter past ten"],
          hint: "Say when break is.",
          image: "https://via.placeholder.com/400x200?text=Break+at+Quarter+Past+10",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "We eat lunch at half past twelve.",
          expectedAnswers: ["we eat lunch at half past twelve"],
          hint: "Say when you eat lunch.",
          image: "https://via.placeholder.com/400x200?text=Lunch+at+Half+Past+12"
        },
        {
          id: "h4",
          type: "multiple_choice",
          instruction: "Choose the correct start time for school.",
          content: "When does school usually start?",
          options: ["At 8 o'clock", "At 12 o'clock", "At 6 o'clock"],
          expectedAnswers: ["at 8 o'clock"],
          hint: "It is in the morning.",
          image: "https://via.placeholder.com/400x200?text=School+Start+8"
        },
        {
          id: "h5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "School ______ at 8 o'clock.",
          expectedAnswers: ["starts"],
          hint: "Use 'starts'.",
          image: "https://via.placeholder.com/400x200?text=School+Starts+at+8"
        },
        {
          id: "h6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "We have lunch ______ half past twelve.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=At+Half+Past+12"
        },
        {
          id: "h7",
          type: "spell_word",
          instruction: "Spell the word 'break'.",
          content: "break",
          expectedAnswers: ["break", "b-r-e-a-k"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Break"
        },
        {
          id: "h8",
          type: "listen_repeat",
          instruction: "Listen and repeat this full school schedule.",
          content: "School starts at 8. Break is at 10:15. Lunch is at 12:30. School ends at 2:45.",
          expectedAnswers: ["school starts at 8 break is at 10 15 lunch is at 12 30 school ends at 2 45"],
          hint: "Say your school schedule.",
          image: "https://via.placeholder.com/400x200?text=School+Schedule",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h9",
          type: "read_aloud",
          instruction: "Read this school schedule aloud.",
          content: "School starts at 8. We have assembly at 8:15. Class starts at 8:30. Break is at 10:15.",
          expectedAnswers: ["school starts at 8 we have assembly at 8 15 class starts at 8 30 break is at 10 15"],
          hint: "Describe your school morning.",
          image: "https://via.placeholder.com/400x200?text=School+Morning"
        },
        {
          id: "h10",
          type: "multiple_choice",
          instruction: "Choose the correct time for lunch.",
          content: "When do you eat lunch at school?",
          options: ["At 12:30", "At 8:00", "At 3:00"],
          expectedAnswers: ["at 12:30"],
          hint: "It is half past twelve.",
          image: "https://via.placeholder.com/400x200?text=Lunch+at+12:30"
        },
        {
          id: "h11",
          type: "spell_word",
          instruction: "Spell the word 'schedule'.",
          content: "schedule",
          expectedAnswers: ["schedule", "s-c-h-e-d-u-l-e"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Schedule"
        },
        {
          id: "h12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "School ______ at 2:45.",
          expectedAnswers: ["ends"],
          hint: "Use 'ends'.",
          image: "https://via.placeholder.com/400x200?text=School+Ends+at+2:45"
        },
        {
          id: "h13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What time does school start? It starts at 8 o'clock.",
          expectedAnswers: ["what time does school start it starts at 8 o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=School+Start+Question",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time is lunch? Lunch is at half past twelve.",
          expectedAnswers: ["what time is lunch lunch is at half past twelve"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Lunch+Question"
        },
        {
          id: "h15",
          type: "revision",
          instruction: "Practise your school schedule.",
          content: "School starts at 8. Break at 10:15. Lunch at 12:30.",
          expectedAnswers: ["school starts at 8 break at 10 15 lunch at 12 30"],
          hint: "Say three times.",
          image: "https://via.placeholder.com/400x200?text=Practice+School+Schedule"
        },
        {
          id: "h16",
          type: "challenge_question",
          instruction: "Tell your school schedule with times.",
          content: "Say when school starts and when lunch is.",
          expectedAnswers: ["school starts at", "lunch is at"],
          hint: "Use 'at' for each time.",
          image: "https://via.placeholder.com/400x200?text=Challenge+School+Schedule"
        }
      ]
    },
    {
      id: 9,
      title: "My Afternoon Schedule",
      description: "Learn to describe what you do in the afternoon and at what time.",
      activities: [
        {
          id: "i1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I come home at half past two.",
          expectedAnswers: ["i come home at half past two"],
          hint: "Say when you come home.",
          image: "https://via.placeholder.com/400x200?text=Come+Home+at+Half+Past+2",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I do my homework at quarter past three.",
          expectedAnswers: ["i do my homework at quarter past three"],
          hint: "Say when you do homework.",
          image: "https://via.placeholder.com/400x200?text=Homework+at+Quarter+Past+3",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I play with my friends at half past four.",
          expectedAnswers: ["i play with my friends at half past four"],
          hint: "Say when you play.",
          image: "https://via.placeholder.com/400x200?text=Play+at+Half+Past+4"
        },
        {
          id: "i4",
          type: "multiple_choice",
          instruction: "Choose the correct time for coming home.",
          content: "When do you come home from school?",
          options: ["At 2:30", "At 6:00", "At 9:00"],
          expectedAnswers: ["at 2:30"],
          hint: "It is half past two.",
          image: "https://via.placeholder.com/400x200?text=Come+Home+at+2:30"
        },
        {
          id: "i5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I come home ______ half past two.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=At+Half+Past+2"
        },
        {
          id: "i6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I do my homework ______ quarter past three.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=At+Quarter+Past+3"
        },
        {
          id: "i7",
          type: "spell_word",
          instruction: "Spell the word 'afternoon'.",
          content: "afternoon",
          expectedAnswers: ["afternoon", "a-f-t-e-r-n-o-o-n"],
          hint: "It has nine letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Afternoon"
        },
        {
          id: "i8",
          type: "listen_repeat",
          instruction: "Listen and repeat this full afternoon routine.",
          content: "I come home at 2:30. I eat lunch at 2:45. I do homework at 3:15. I play at 4:30.",
          expectedAnswers: ["i come home at 2 30 i eat lunch at 2 45 i do homework at 3 15 i play at 4 30"],
          hint: "Say your afternoon.",
          image: "https://via.placeholder.com/400x200?text=Afternoon+Routine",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i9",
          type: "read_aloud",
          instruction: "Read this afternoon routine aloud.",
          content: "In the afternoon, I come home. I eat lunch. I do homework. I play with my friends.",
          expectedAnswers: ["in the afternoon i come home i eat lunch i do homework i play with my friends"],
          hint: "Describe your afternoon.",
          image: "https://via.placeholder.com/400x200?text=My+Afternoon"
        },
        {
          id: "i10",
          type: "multiple_choice",
          instruction: "Choose the correct activity for afternoon.",
          content: "What do you do at 3:15?",
          options: ["Do homework", "Go to school", "Go to bed"],
          expectedAnswers: ["do homework"],
          hint: "It is after school.",
          image: "https://via.placeholder.com/400x200?text=Do+Homework"
        },
        {
          id: "i11",
          type: "spell_word",
          instruction: "Spell the word 'home'.",
          content: "home",
          expectedAnswers: ["home", "h-o-m-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Home"
        },
        {
          id: "i12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ with my friends at 4:30.",
          expectedAnswers: ["play"],
          hint: "Use 'play'.",
          image: "https://via.placeholder.com/400x200?text=Play+with+Friends"
        },
        {
          id: "i13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What time do you come home? I come home at half past two.",
          expectedAnswers: ["what time do you come home i come home at half past two"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Come+Home+Question",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time do you play? I play at half past four.",
          expectedAnswers: ["what time do you play i play at half past four"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Play+Question"
        },
        {
          id: "i15",
          type: "revision",
          instruction: "Practise your afternoon routine.",
          content: "I come home at 2:30. I do homework at 3:15. I play at 4:30.",
          expectedAnswers: ["i come home at 2 30 i do homework at 3 15 i play at 4 30"],
          hint: "Say three things.",
          image: "https://via.placeholder.com/400x200?text=Practice+Afternoon"
        },
        {
          id: "i16",
          type: "challenge_question",
          instruction: "Tell your afternoon routine with times.",
          content: "Say three things you do in the afternoon.",
          expectedAnswers: ["i come home at", "i do homework at", "i play at"],
          hint: "Use 'at' for each time.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Afternoon"
        }
      ]
    },
    {
      id: 10,
      title: "My Evening Schedule",
      description: "Learn to describe what you do in the evening and at what time.",
      activities: [
        {
          id: "j1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I eat dinner at 7 o'clock.",
          expectedAnswers: ["i eat dinner at 7 o'clock"],
          hint: "Say when you eat dinner.",
          image: "https://via.placeholder.com/400x200?text=Dinner+at+7",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I watch TV at quarter past seven.",
          expectedAnswers: ["i watch tv at quarter past seven"],
          hint: "Say when you watch TV.",
          image: "https://via.placeholder.com/400x200?text=TV+at+Quarter+Past+7",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I go to bed at 9 o'clock.",
          expectedAnswers: ["i go to bed at 9 o'clock"],
          hint: "Say when you go to bed.",
          image: "https://via.placeholder.com/400x200?text=Bed+at+9"
        },
        {
          id: "j4",
          type: "multiple_choice",
          instruction: "Choose the correct time for dinner.",
          content: "When do you eat dinner?",
          options: ["At 7 o'clock", "At 12 o'clock", "At 6 o'clock"],
          expectedAnswers: ["at 7 o'clock"],
          hint: "It is in the evening.",
          image: "https://via.placeholder.com/400x200?text=Dinner+at+7"
        },
        {
          id: "j5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I eat dinner ______ 7 o'clock.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=At+7+Oclock"
        },
        {
          id: "j6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ TV at quarter past seven.",
          expectedAnswers: ["watch"],
          hint: "Use 'watch'.",
          image: "https://via.placeholder.com/400x200?text=I+Watch+TV"
        },
        {
          id: "j7",
          type: "spell_word",
          instruction: "Spell the word 'evening'.",
          content: "evening",
          expectedAnswers: ["evening", "e-v-e-n-i-n-g"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Evening"
        },
        {
          id: "j8",
          type: "listen_repeat",
          instruction: "Listen and repeat this full evening routine.",
          content: "I eat dinner at 7. I watch TV at 7:15. I read a book at 8:30. I go to bed at 9.",
          expectedAnswers: ["i eat dinner at 7 i watch tv at 7 15 i read a book at 8 30 i go to bed at 9"],
          hint: "Say your evening.",
          image: "https://via.placeholder.com/400x200?text=Evening+Routine",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j9",
          type: "read_aloud",
          instruction: "Read this evening routine aloud.",
          content: "In the evening, I eat dinner. I watch TV. I read a book. I go to bed.",
          expectedAnswers: ["in the evening i eat dinner i watch tv i read a book i go to bed"],
          hint: "Describe your evening.",
          image: "https://via.placeholder.com/400x200?text=My+Evening"
        },
        {
          id: "j10",
          type: "multiple_choice",
          instruction: "Choose the correct activity for evening.",
          content: "What do you do at 8:30?",
          options: ["Read a book", "Go to school", "Eat breakfast"],
          expectedAnswers: ["read a book"],
          hint: "It is before bedtime.",
          image: "https://via.placeholder.com/400x200?text=Read+a+Book"
        },
        {
          id: "j11",
          type: "spell_word",
          instruction: "Spell the word 'book'.",
          content: "book",
          expectedAnswers: ["book", "b-o-o-k"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Book"
        },
        {
          id: "j12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ to bed at 9 o'clock.",
          expectedAnswers: ["go"],
          hint: "Use 'go'.",
          image: "https://via.placeholder.com/400x200?text=I+Go+to+Bed"
        },
        {
          id: "j13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What time do you eat dinner? I eat dinner at 7 o'clock.",
          expectedAnswers: ["what time do you eat dinner i eat dinner at 7 o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Dinner+Question",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time do you go to bed? I go to bed at 9 o'clock.",
          expectedAnswers: ["what time do you go to bed i go to bed at 9 o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Bed+Question"
        },
        {
          id: "j15",
          type: "revision",
          instruction: "Practise your evening routine.",
          content: "I eat dinner at 7. I watch TV at 7:15. I go to bed at 9.",
          expectedAnswers: ["i eat dinner at 7 i watch tv at 7 15 i go to bed at 9"],
          hint: "Say three things.",
          image: "https://via.placeholder.com/400x200?text=Practice+Evening"
        },
        {
          id: "j16",
          type: "challenge_question",
          instruction: "Tell your evening routine with times.",
          content: "Say three things you do in the evening.",
          expectedAnswers: ["i eat dinner at", "i watch tv at", "i go to bed at"],
          hint: "Use 'at' for each time.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Evening"
        }
      ]
    },
    {
      id: 11,
      title: "Weekend Schedule",
      description: "Learn to talk about what you do on weekends (Saturday and Sunday).",
      activities: [
        {
          id: "k1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "On Saturday, I wake up late.",
          expectedAnswers: ["on saturday i wake up late"],
          hint: "Say what you do on Saturday.",
          image: "https://via.placeholder.com/400x200?text=Saturday+Wake+Up+Late",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "On Sunday, I visit my grandparents.",
          expectedAnswers: ["on sunday i visit my grandparents"],
          hint: "Say what you do on Sunday.",
          image: "https://via.placeholder.com/400x200?text=Visit+Grandparents+on+Sunday",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "On weekends, I play with my friends.",
          expectedAnswers: ["on weekends i play with my friends"],
          hint: "Say what you do on weekends.",
          image: "https://via.placeholder.com/400x200?text=Play+on+Weekends"
        },
        {
          id: "k4",
          type: "multiple_choice",
          instruction: "Choose the correct preposition for weekend.",
          content: "Which preposition do you use for weekends?",
          options: ["On", "At", "In"],
          expectedAnswers: ["on"],
          hint: "Use 'on' for days.",
          image: "https://via.placeholder.com/400x200?text=On+Weekends"
        },
        {
          id: "k5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "______ Saturday, I play cricket.",
          expectedAnswers: ["on"],
          hint: "Use 'on'.",
          image: "https://via.placeholder.com/400x200?text=On+Saturday"
        },
        {
          id: "k6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I visit my grandmother ______ Sunday.",
          expectedAnswers: ["on"],
          hint: "Use 'on'.",
          image: "https://via.placeholder.com/400x200?text=On+Sunday"
        },
        {
          id: "k7",
          type: "spell_word",
          instruction: "Spell the word 'weekend'.",
          content: "weekend",
          expectedAnswers: ["weekend", "w-e-e-k-e-n-d"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Weekend"
        },
        {
          id: "k8",
          type: "listen_repeat",
          instruction: "Listen and repeat this weekend schedule.",
          content: "On Saturday, I wake up at 8. I play cricket. On Sunday, I visit my grandparents.",
          expectedAnswers: ["on saturday i wake up at 8 i play cricket on sunday i visit my grandparents"],
          hint: "Say your weekend.",
          image: "https://via.placeholder.com/400x200?text=Weekend+Schedule",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k9",
          type: "read_aloud",
          instruction: "Read this weekend schedule aloud.",
          content: "On weekends, I don't go to school. I wake up late. I play with my friends. I watch TV.",
          expectedAnswers: ["on weekends i don't go to school i wake up late i play with my friends i watch tv"],
          hint: "Describe your weekend.",
          image: "https://via.placeholder.com/400x200?text=My+Weekend"
        },
        {
          id: "k10",
          type: "multiple_choice",
          instruction: "Choose the correct activity for weekends.",
          content: "What do you do on weekends?",
          options: ["Play with friends", "Go to school", "Eat lunch"],
          expectedAnswers: ["play with friends"],
          hint: "It is free time.",
          image: "https://via.placeholder.com/400x200?text=Play+with+Friends"
        },
        {
          id: "k11",
          type: "spell_word",
          instruction: "Spell the word 'Saturday'.",
          content: "saturday",
          expectedAnswers: ["saturday", "s-a-t-u-r-d-a-y"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Saturday"
        },
        {
          id: "k12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ up late on Saturday.",
          expectedAnswers: ["wake"],
          hint: "Use 'wake'.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+Late"
        },
        {
          id: "k13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What do you do on Sunday? I visit my grandparents.",
          expectedAnswers: ["what do you do on sunday i visit my grandparents"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Sunday+Question",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What do you do on Saturday? I play cricket.",
          expectedAnswers: ["what do you do on saturday i play cricket"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Saturday+Question"
        },
        {
          id: "k15",
          type: "revision",
          instruction: "Practise your weekend schedule.",
          content: "On Saturday, I play. On Sunday, I visit my grandparents.",
          expectedAnswers: ["on saturday i play on sunday i visit my grandparents"],
          hint: "Say both days.",
          image: "https://via.placeholder.com/400x200?text=Practice+Weekend"
        },
        {
          id: "k16",
          type: "challenge_question",
          instruction: "Tell what you do on Sunday.",
          content: "Say one thing you do on Sunday.",
          expectedAnswers: ["on sunday i", "i visit", "i play"],
          hint: "Use 'on Sunday'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Sunday"
        }
      ]
    },
    {
      id: 12,
      title: "Asking 'What Time?' and 'When?'",
      description: "Learn to ask questions about time and schedules.",
      activities: [
        {
          id: "l1",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What time is it?",
          expectedAnswers: ["what time is it", "what time is it?"],
          hint: "Ask the current time.",
          image: "https://via.placeholder.com/400x200?text=What+Time+Is+It",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l2",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What time do you wake up?",
          expectedAnswers: ["what time do you wake up", "what time do you wake up?"],
          hint: "Ask about wake-up time.",
          image: "https://via.placeholder.com/400x200?text=What+Time+Do+You+Wake+Up",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l3",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "When do you go to bed?",
          expectedAnswers: ["when do you go to bed", "when do you go to bed?"],
          hint: "Ask about bedtime.",
          image: "https://via.placeholder.com/400x200?text=When+Do+You+Go+to+Bed"
        },
        {
          id: "l4",
          type: "multiple_choice",
          instruction: "Choose the correct question to ask the time.",
          content: "How do you ask the current time?",
          options: ["What time is it?", "How are you?", "What is your name?"],
          expectedAnswers: ["what time is it"],
          hint: "Use 'What time'.",
          image: "https://via.placeholder.com/400x200?text=Ask+Current+Time"
        },
        {
          id: "l5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ time do you eat breakfast?",
          expectedAnswers: ["what"],
          hint: "Use 'What'.",
          image: "https://via.placeholder.com/400x200?text=What+Time+Do+You+Eat+Breakfast"
        },
        {
          id: "l6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ do you go to school?",
          expectedAnswers: ["when"],
          hint: "Use 'When'.",
          image: "https://via.placeholder.com/400x200?text=When+Do+You+Go+to+School"
        },
        {
          id: "l7",
          type: "spell_word",
          instruction: "Spell the word 'when'.",
          content: "when",
          expectedAnswers: ["when", "w-h-e-n"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+When"
        },
        {
          id: "l8",
          type: "listen_repeat",
          instruction: "Listen and repeat this question and answer.",
          content: "What time is it? It is half past three.",
          expectedAnswers: ["what time is it it is half past three"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Current+Time+Question",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l9",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time do you come home? I come home at quarter past three.",
          expectedAnswers: ["what time do you come home i come home at quarter past three"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Come+Home+Time"
        },
        {
          id: "l10",
          type: "multiple_choice",
          instruction: "Choose the correct question for bedtime.",
          content: "How do you ask about bedtime?",
          options: ["When do you go to bed?", "What time is it?", "How are you?"],
          expectedAnswers: ["when do you go to bed"],
          hint: "Use 'When' or 'What time'.",
          image: "https://via.placeholder.com/400x200?text=Ask+Bedtime"
        },
        {
          id: "l11",
          type: "spell_word",
          instruction: "Spell the word 'question'.",
          content: "question",
          expectedAnswers: ["question", "q-u-e-s-t-i-o-n"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Question"
        },
        {
          id: "l12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ do you wake up?",
          expectedAnswers: ["what time", "when"],
          hint: "Use 'What time' or 'When'.",
          image: "https://via.placeholder.com/400x200?text=What+Time+Do+You+Wake+Up"
        },
        {
          id: "l13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "When do you do your homework? I do it in the evening.",
          expectedAnswers: ["when do you do your homework i do it in the evening"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Homework+Question",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time do you go to school? I go to school at 8 o'clock.",
          expectedAnswers: ["what time do you go to school i go to school at 8 o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=School+Time+Question"
        },
        {
          id: "l15",
          type: "revision",
          instruction: "Practise asking time questions.",
          content: "What time is it? What time do you wake up? When do you go to bed?",
          expectedAnswers: ["what time is it what time do you wake up when do you go to bed"],
          hint: "Ask all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Time+Questions"
        },
        {
          id: "l16",
          type: "challenge_question",
          instruction: "Ask two questions about someone's schedule.",
          content: "Ask about wake-up time and bedtime.",
          expectedAnswers: ["what time do you wake up", "when do you go to bed"],
          hint: "Use 'What time' and 'When'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Ask+Schedule"
        }
      ]
    },
    {
      id: 13,
      title: "Using 'In' with Parts of the Day",
      description: "Learn to use 'in' with morning, afternoon, and evening.",
      activities: [
        {
          id: "m1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I wake up in the morning.",
          expectedAnswers: ["i wake up in the morning"],
          hint: "Say when you wake up.",
          image: "https://via.placeholder.com/400x200?text=In+the+Morning",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I play in the afternoon.",
          expectedAnswers: ["i play in the afternoon"],
          hint: "Say when you play.",
          image: "https://via.placeholder.com/400x200?text=In+the+Afternoon",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I watch TV in the evening.",
          expectedAnswers: ["i watch tv in the evening"],
          hint: "Say when you watch TV.",
          image: "https://via.placeholder.com/400x200?text=In+the+Evening"
        },
        {
          id: "m4",
          type: "multiple_choice",
          instruction: "Choose the correct preposition for parts of the day.",
          content: "Which word do you use for 'morning'?",
          options: ["In", "At", "On"],
          expectedAnswers: ["in"],
          hint: "Use 'in' for parts of the day.",
          image: "https://via.placeholder.com/400x200?text=In+the+Morning"
        },
        {
          id: "m5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I do my homework ______ the evening.",
          expectedAnswers: ["in"],
          hint: "Use 'in'.",
          image: "https://via.placeholder.com/400x200?text=In+the+Evening"
        },
        {
          id: "m6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "We eat lunch ______ the afternoon.",
          expectedAnswers: ["in"],
          hint: "Use 'in'.",
          image: "https://via.placeholder.com/400x200?text=In+the+Afternoon"
        },
        {
          id: "m7",
          type: "spell_word",
          instruction: "Spell the word 'morning'.",
          content: "morning",
          expectedAnswers: ["morning", "m-o-r-n-i-n-g"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Morning"
        },
        {
          id: "m8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "In the morning, I eat breakfast. In the afternoon, I play. In the evening, I watch TV.",
          expectedAnswers: ["in the morning i eat breakfast in the afternoon i play in the evening i watch tv"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=In+the+Morning+Afternoon+Evening",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I like to read books in the evening.",
          expectedAnswers: ["i like to read books in the evening"],
          hint: "Say what you like.",
          image: "https://via.placeholder.com/400x200?text=Read+Books+in+Evening"
        },
        {
          id: "m10",
          type: "multiple_choice",
          instruction: "Choose the correct time of day for breakfast.",
          content: "When do you eat breakfast?",
          options: ["In the morning", "In the afternoon", "In the evening"],
          expectedAnswers: ["in the morning"],
          hint: "It is the first meal.",
          image: "https://via.placeholder.com/400x200?text=Breakfast+in+Morning"
        },
        {
          id: "m11",
          type: "spell_word",
          instruction: "Spell the word 'afternoon'.",
          content: "afternoon",
          expectedAnswers: ["afternoon", "a-f-t-e-r-n-o-o-n"],
          hint: "It has nine letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Afternoon"
        },
        {
          id: "m12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I go to school ______ the morning.",
          expectedAnswers: ["in"],
          hint: "Use 'in'.",
          image: "https://via.placeholder.com/400x200?text=In+the+Morning"
        },
        {
          id: "m13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What do you do in the evening? I watch TV.",
          expectedAnswers: ["what do you do in the evening i watch tv"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Evening+Question",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What do you do in the morning? I eat breakfast.",
          expectedAnswers: ["what do you do in the morning i eat breakfast"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Morning+Question"
        },
        {
          id: "m15",
          type: "revision",
          instruction: "Practise using 'in' with parts of the day.",
          content: "In the morning, in the afternoon, in the evening.",
          expectedAnswers: ["in the morning in the afternoon in the evening"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+In"
        },
        {
          id: "m16",
          type: "challenge_question",
          instruction: "What do you do in the evening? Use 'in' in your answer.",
          content: "Say what you do in the evening.",
          expectedAnswers: ["in the evening i"],
          hint: "Say 'In the evening, I...'",
          image: "https://via.placeholder.com/400x200?text=Challenge+In+Evening"
        }
      ]
    },
    {
      id: 14,
      title: "Dialogue – Talking About Schedules",
      description: "Practise a full dialogue about daily and weekly schedules.",
      activities: [
        {
          id: "n1",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "What time do you wake up?",
          expectedAnswers: ["what time do you wake up", "what time do you wake up?"],
          hint: "Ask about wake-up time.",
          image: "https://via.placeholder.com/400x200?text=Ask+Wake+Up+Time",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n2",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "I wake up at six o'clock.",
          expectedAnswers: ["i wake up at six o'clock"],
          hint: "Answer the question.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+at+6",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n3",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "When do you go to school? I go to school at quarter past seven.",
          expectedAnswers: ["when do you go to school i go to school at quarter past seven"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=School+Time+Dialogue"
        },
        {
          id: "n4",
          type: "multiple_choice",
          instruction: "Choose the correct question for wake-up time.",
          content: "How do you ask about wake-up time?",
          options: ["What time do you wake up?", "What is your name?", "How are you?"],
          expectedAnswers: ["what time do you wake up"],
          hint: "Ask 'What time'.",
          image: "https://via.placeholder.com/400x200?text=Ask+Wake+Up+Time"
        },
        {
          id: "n5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ time do you get up?",
          expectedAnswers: ["what"],
          hint: "Use 'What'.",
          image: "https://via.placeholder.com/400x200?text=What+Time+Do+You+Get+Up"
        },
        {
          id: "n6",
          type: "sentence_completion",
          instruction: "Complete the answer.",
          content: "I wake up ______ six o'clock.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=At+6+Oclock"
        },
        {
          id: "n7",
          type: "spell_word",
          instruction: "Spell the word 'dialogue'.",
          content: "dialogue",
          expectedAnswers: ["dialogue", "d-i-a-l-o-g-u-e"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Dialogue"
        },
        {
          id: "n8",
          type: "listen_repeat",
          instruction: "Listen and repeat this full schedule dialogue.",
          content: "What time do you wake up? I wake up at 6. When do you go to school? I go at 7:45. What do you do in the evening? I watch TV.",
          expectedAnswers: ["what time do you wake up i wake up at 6 when do you go to school i go at 7 45 what do you do in the evening i watch tv"],
          hint: "Ask and answer multiple questions.",
          image: "https://via.placeholder.com/400x200?text=Full+Schedule+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "When do you do your homework? I do it at half past three. What do you do on Saturday? I play cricket.",
          expectedAnswers: ["when do you do your homework i do it at half past three what do you do on saturday i play cricket"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Homework+and+Saturday+Dialogue"
        },
        {
          id: "n10",
          type: "multiple_choice",
          instruction: "Choose the correct question for activities.",
          content: "How do you ask about weekend activities?",
          options: ["What do you do on Sunday?", "What time is it?", "How are you?"],
          expectedAnswers: ["what do you do on sunday"],
          hint: "Ask 'What do you do'.",
          image: "https://via.placeholder.com/400x200?text=Ask+Sunday+Activity"
        },
        {
          id: "n11",
          type: "spell_word",
          instruction: "Spell the word 'activity'.",
          content: "activity",
          expectedAnswers: ["activity", "a-c-t-i-v-i-t-y"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Activity"
        },
        {
          id: "n12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ do you do on Sunday?",
          expectedAnswers: ["what"],
          hint: "Use 'What'.",
          image: "https://via.placeholder.com/400x200?text=What+Do+You+Do+on+Sunday"
        },
        {
          id: "n13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "When do you go to bed? I go to bed at nine o'clock.",
          expectedAnswers: ["when do you go to bed i go to bed at nine o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Bedtime+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n14",
          type: "read_aloud",
          instruction: "Read this dialogue with a partner.",
          content: "What time does school start? It starts at 8 o'clock. What time is lunch? Lunch is at half past twelve.",
          expectedAnswers: ["what time does school start it starts at 8 o'clock what time is lunch lunch is at half past twelve"],
          hint: "Ask about school.",
          image: "https://via.placeholder.com/400x200?text=School+Schedule+Dialogue"
        },
        {
          id: "n15",
          type: "revision",
          instruction: "Practise a full schedule dialogue.",
          content: "What time do you wake up? I wake up at 6. What do you do on Saturday? I play cricket.",
          expectedAnswers: ["what time do you wake up i wake up at 6 what do you do on saturday i play cricket"],
          hint: "Say the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Practice+Schedule+Dialogue"
        },
        {
          id: "n16",
          type: "challenge_question",
          instruction: "Ask three questions about someone's schedule.",
          content: "Ask about wake-up time, school time, and weekend activity.",
          expectedAnswers: ["what time do you wake up", "what time do you go to school", "what do you do on saturday"],
          hint: "Use 'What time' and 'What do you'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Ask+Schedule"
        }
      ]
    },
    {
      id: 15,
      title: "Review – Telling Time and Schedules",
      description: "Consolidate everything you have learned about time and schedules.",
      activities: [
        {
          id: "o1",
          type: "listen_repeat",
          instruction: "Listen and repeat all the time phrases.",
          content: "O'clock, half past, quarter past, quarter to.",
          expectedAnswers: ["oclock half past quarter past quarter to"],
          hint: "Say all four.",
          image: "https://via.placeholder.com/400x200?text=All+Time+Phrases",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o2",
          type: "listen_repeat",
          instruction: "Listen and repeat all the prepositions.",
          content: "At, on, in.",
          expectedAnswers: ["at on in"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Prepositions+At+On+In",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o3",
          type: "read_aloud",
          instruction: "Read this full schedule aloud.",
          content: "I wake up at 6 o'clock. I go to school at 8 o'clock. I come home at 2:30. I do homework at 3:15. I eat dinner at 7 o'clock. I go to bed at 9 o'clock.",
          expectedAnswers: ["i wake up at 6 o'clock i go to school at 8 o'clock i come home at 2 30 i do homework at 3 15 i eat dinner at 7 o'clock i go to bed at 9 o'clock"],
          hint: "Say your full daily schedule.",
          image: "https://via.placeholder.com/400x200?text=Full+Daily+Schedule"
        },
        {
          id: "o4",
          type: "multiple_choice",
          instruction: "Choose the correct time for 6:00.",
          content: "What time is 6:00?",
          options: ["Six o'clock", "Half past six", "Quarter past six"],
          expectedAnswers: ["six o'clock"],
          hint: "It is on the hour.",
          image: "https://via.placeholder.com/400x200?text=Six+Oclock"
        },
        {
          id: "o5",
          type: "multiple_choice",
          instruction: "Choose the correct time for 3:30.",
          content: "What time is 3:30?",
          options: ["Half past three", "Three o'clock", "Quarter past three"],
          expectedAnswers: ["half past three"],
          hint: "It is 30 minutes past.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+Three"
        },
        {
          id: "o6",
          type: "multiple_choice",
          instruction: "Choose the correct time for 2:45.",
          content: "What time is 2:45?",
          options: ["Quarter to three", "Quarter past two", "Half past two"],
          expectedAnswers: ["quarter to three"],
          hint: "It is 15 minutes before 3.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+Three"
        },
        {
          id: "o7",
          type: "sentence_completion",
          instruction: "Complete the sentence for 5:15.",
          content: "It is ______ past five.",
          expectedAnswers: ["quarter"],
          hint: "Use 'quarter'.",
          image: "https://via.placeholder.com/400x200?text=Quarter+Past+Five"
        },
        {
          id: "o8",
          type: "sentence_completion",
          instruction: "Complete the sentence for 4:30.",
          content: "It is half ______ four.",
          expectedAnswers: ["past"],
          hint: "Use 'past'.",
          image: "https://via.placeholder.com/400x200?text=Half+Past+Four"
        },
        {
          id: "o9",
          type: "sentence_completion",
          instruction: "Complete the sentence for 7:45.",
          content: "It is quarter ______ eight.",
          expectedAnswers: ["to"],
          hint: "Use 'to'.",
          image: "https://via.placeholder.com/400x200?text=Quarter+to+Eight"
        },
        {
          id: "o10",
          type: "spell_word",
          instruction: "Spell the word 'twelve'.",
          content: "twelve",
          expectedAnswers: ["twelve", "t-w-e-l-v-e"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Twelve"
        },
        {
          id: "o11",
          type: "spell_word",
          instruction: "Spell the word 'preposition'.",
          content: "preposition",
          expectedAnswers: ["preposition", "p-r-e-p-o-s-i-t-i-o-n"],
          hint: "It has eleven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Preposition"
        },
        {
          id: "o12",
          type: "listen_repeat",
          instruction: "Listen and repeat this review dialogue.",
          content: "What time do you wake up? I wake up at 6. What do you do in the evening? I watch TV. When do you go to bed? I go to bed at 9.",
          expectedAnswers: ["what time do you wake up i wake up at 6 what do you do in the evening i watch tv when do you go to bed i go to bed at 9"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Review+Schedule+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o13",
          type: "read_aloud",
          instruction: "Read this full review aloud.",
          content: "My name is Anjali. I am a student. I wake up at 6:00. I go to school at 7:45. I come home at 2:30. I do homework at 3:15. I eat dinner at 7:00. I go to bed at 9:00. On Saturday, I play cricket. On Sunday, I visit my grandparents.",
          expectedAnswers: ["my name is anjali i am a student i wake up at 6 00 i go to school at 7 45 i come home at 2 30 i do homework at 3 15 i eat dinner at 7 00 i go to bed at 9 00 on saturday i play cricket on sunday i visit my grandparents"],
          hint: "Say everything.",
          image: "https://via.placeholder.com/400x200?text=Full+Review"
        },
        {
          id: "o14",
          type: "multiple_choice",
          instruction: "Choose the correct preposition for a specific time.",
          content: "Which preposition is used for '6 o'clock'?",
          options: ["At", "On", "In"],
          expectedAnswers: ["at"],
          hint: "Use 'at' for specific times.",
          image: "https://via.placeholder.com/400x200?text=At+6+Oclock"
        },
        {
          id: "o15",
          type: "revision",
          instruction: "Review all the time phrases.",
          content: "O'clock, half past, quarter past, quarter to.",
          expectedAnswers: ["oclock half past quarter past quarter to"],
          hint: "Say all four.",
          image: "https://via.placeholder.com/400x200?text=Review+All+Time+Phrases"
        },
        {
          id: "o16",
          type: "challenge_question",
          instruction: "Tell your complete daily schedule.",
          content: "Say your whole day with times.",
          expectedAnswers: ["i wake up at", "i go to school at", "i come home at", "i eat dinner at", "i go to bed at"],
          hint: "Use 'at' for each time.",
          image: "https://via.placeholder.com/400x200?text=Final+Challenge+Schedule"
        },
        {
          id: "o17",
          type: "challenge_question",
          instruction: "Ask someone three questions about their schedule.",
          content: "Ask about wake-up, school, and weekend.",
          expectedAnswers: ["what time do you wake up", "what time do you go to school", "what do you do on saturday"],
          hint: "Use 'What time' and 'What do you'.",
          image: "https://via.placeholder.com/400x200?text=Final+Challenge+Ask+Schedule"
        }
      ]
    }
  ],
  challengeTest: {
    id: "ch7",
    activities: [
      {
        id: "ch1",
        type: "multiple_choice",
        instruction: "What time is 6:00?",
        content: "Choose the correct time.",
        options: ["Six o'clock", "Half past six", "Quarter past six"],
        expectedAnswers: ["six o'clock"],
        hint: "It is on the hour.",
        image: "https://via.placeholder.com/400x200?text=Challenge+6+Oclock"
      },
      {
        id: "ch2",
        type: "multiple_choice",
        instruction: "What time is 3:30?",
        content: "Choose the correct time.",
        options: ["Half past three", "Three o'clock", "Quarter to three"],
        expectedAnswers: ["half past three"],
        hint: "It is 30 minutes past 3.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Half+Past+3"
      },
      {
        id: "ch3",
        type: "multiple_choice",
        instruction: "What time is 5:45?",
        content: "Choose the correct time.",
        options: ["Quarter to six", "Quarter past five", "Half past five"],
        expectedAnswers: ["quarter to six"],
        hint: "It is 15 minutes before 6.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Quarter+to+6"
      },
      {
        id: "ch4",
        type: "multiple_choice",
        instruction: "What time is 2:15?",
        content: "Choose the correct time.",
        options: ["Quarter past two", "Quarter to two", "Two o'clock"],
        expectedAnswers: ["quarter past two"],
        hint: "It is 15 minutes after 2.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Quarter+Past+2"
      },
      {
        id: "ch5",
        type: "sentence_completion",
        instruction: "Complete the sentence for 4:00.",
        content: "It is ______ o'clock.",
        expectedAnswers: ["four"],
        hint: "Say the number.",
        image: "https://via.placeholder.com/400x200?text=Challenge+4+Oclock"
      },
      {
        id: "ch6",
        type: "sentence_completion",
        instruction: "Complete the sentence for 7:30.",
        content: "It is half ______ seven.",
        expectedAnswers: ["past"],
        hint: "Use 'past'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Half+Past+7"
      },
      {
        id: "ch7",
        type: "sentence_completion",
        instruction: "Complete the sentence for 8:45.",
        content: "It is quarter ______ nine.",
        expectedAnswers: ["to"],
        hint: "Use 'to'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Quarter+to+9"
      },
      {
        id: "ch8",
        type: "sentence_completion",
        instruction: "Complete the sentence for 10:15.",
        content: "It is ______ past ten.",
        expectedAnswers: ["quarter"],
        hint: "Use 'quarter'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Quarter+Past+10"
      },
      {
        id: "ch9",
        type: "multiple_choice",
        instruction: "Choose the correct preposition for 8 o'clock.",
        content: "Which preposition is used with '8 o'clock'?",
        options: ["At", "On", "In"],
        expectedAnswers: ["at"],
        hint: "Use 'at' for specific times.",
        image: "https://via.placeholder.com/400x200?text=Challenge+At+8"
      },
      {
        id: "ch10",
        type: "multiple_choice",
        instruction: "Choose the correct preposition for Monday.",
        content: "Which preposition is used with 'Monday'?",
        options: ["On", "At", "In"],
        expectedAnswers: ["on"],
        hint: "Use 'on' for days.",
        image: "https://via.placeholder.com/400x200?text=Challenge+On+Monday"
      },
      {
        id: "ch11",
        type: "multiple_choice",
        instruction: "Choose the correct preposition for 'the morning'.",
        content: "Which preposition is used with 'the morning'?",
        options: ["In", "At", "On"],
        expectedAnswers: ["in"],
        hint: "Use 'in' for parts of the day.",
        image: "https://via.placeholder.com/400x200?text=Challenge+In+Morning"
      },
      {
        id: "ch12",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I go to school ______ Monday.",
        expectedAnswers: ["on"],
        hint: "Use 'on'.",
        image: "https://via.placeholder.com/400x200?text=On+Monday"
      },
      {
        id: "ch13",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I wake up ______ the morning.",
        expectedAnswers: ["in"],
        hint: "Use 'in'.",
        image: "https://via.placeholder.com/400x200?text=In+the+Morning"
      },
      {
        id: "ch14",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I eat lunch ______ half past twelve.",
        expectedAnswers: ["at"],
        hint: "Use 'at'.",
        image: "https://via.placeholder.com/400x200?text=At+Half+Past+12"
      },
      {
        id: "ch15",
        type: "listen_repeat",
        instruction: "Listen and repeat this question.",
        content: "What time do you wake up? I wake up at 6 o'clock.",
        expectedAnswers: ["what time do you wake up i wake up at 6 o'clock"],
        hint: "Ask and answer.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Wake+Up+Question",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch16",
        type: "listen_repeat",
        instruction: "Listen and repeat this question.",
        content: "What do you do on Saturday? I play cricket.",
        expectedAnswers: ["what do you do on saturday i play cricket"],
        hint: "Ask and answer.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Saturday+Question",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch17",
        type: "sentence_completion",
        instruction: "Complete the question.",
        content: "______ time do you go to school?",
        expectedAnswers: ["what"],
        hint: "Use 'What'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+What+Time"
      },
      {
        id: "ch18",
        type: "sentence_completion",
        instruction: "Complete the question.",
        content: "______ do you do on Sunday?",
        expectedAnswers: ["what"],
        hint: "Use 'What'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+What+Do+You+Do"
      },
      {
        id: "ch19",
        type: "challenge_question",
        instruction: "Tell your daily schedule with times.",
        content: "Say three things you do and their times.",
        expectedAnswers: ["i wake up at", "i go to school at", "i go to bed at"],
        hint: "Use 'at' for each time.",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+My+Schedule"
      },
      {
        id: "ch20",
        type: "challenge_question",
        instruction: "Ask three questions about someone's schedule.",
        content: "Ask about wake-up, school start, and weekend activity.",
        expectedAnswers: ["what time do you wake up", "what time does school start", "what do you do on saturday"],
        hint: "Use 'What time' and 'What do you'.",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+Ask+All"
      }
    ]
  }
};