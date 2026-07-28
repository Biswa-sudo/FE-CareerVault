export default {
  id: 4,
  title: "My Family",
  description: "Learn to talk about your family members – their names, relationships, ages, and what they are like.",
  lessons: [
    {
      id: 1,
      title: "Introducing My Mother and Father",
      description: "Practise saying 'This is my mother' and 'This is my father'.",
      activities: [
        {
          id: "a1",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my mother.",
          expectedAnswers: ["this is my mother"],
          hint: "Introduce your mom.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Mother",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a2",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my father.",
          expectedAnswers: ["this is my father"],
          hint: "Introduce your dad.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Father",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a3",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "This is my mother. Her name is Anjali.",
          expectedAnswers: ["this is my mother her name is anjali"],
          hint: "Introduce your mother and say her name.",
          image: "https://via.placeholder.com/400x200?text=My+Mother+Anjali"
        },
        {
          id: "a4",
          type: "multiple_choice",
          instruction: "Choose the correct word for your mother.",
          content: "Who is 'mother'?",
          options: ["Mom", "Dad", "Brother"],
          expectedAnswers: ["mom"],
          hint: "She is your female parent.",
          image: "https://via.placeholder.com/400x200?text=Mother+Meaning"
        },
        {
          id: "a5",
          type: "multiple_choice",
          instruction: "Choose the correct word for your father.",
          content: "Who is 'father'?",
          options: ["Dad", "Mom", "Sister"],
          expectedAnswers: ["dad"],
          hint: "He is your male parent.",
          image: "https://via.placeholder.com/400x200?text=Father+Meaning"
        },
        {
          id: "a6",
          type: "sentence_completion",
          instruction: "Complete the introduction.",
          content: "This is my ______.",
          expectedAnswers: ["mother", "father", "mom", "dad"],
          hint: "Say 'mother' or 'father'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Blank"
        },
        {
          id: "a7",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Her ______ is Anjali.",
          expectedAnswers: ["name"],
          hint: "Use 'name'.",
          image: "https://via.placeholder.com/400x200?text=Her+Name+Is+Anjali"
        },
        {
          id: "a8",
          type: "spell_word",
          instruction: "Spell the word 'mother'.",
          content: "mother",
          expectedAnswers: ["mother", "m-o-t-h-e-r"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Mother"
        },
        {
          id: "a9",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my father. His name is Ravi.",
          expectedAnswers: ["this is my father his name is ravi"],
          hint: "Introduce your father and say his name.",
          image: "https://via.placeholder.com/400x200?text=My+Father+Ravi",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a10",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "My mother is kind. My father is strong.",
          expectedAnswers: ["my mother is kind my father is strong"],
          hint: "Describe your parents.",
          image: "https://via.placeholder.com/400x200?text=Kind+Mother+Strong+Father"
        },
        {
          id: "a11",
          type: "multiple_choice",
          instruction: "Choose the correct possessive for mother.",
          content: "Which word do you use for mother?",
          options: ["Her", "His", "Your"],
          expectedAnswers: ["her"],
          hint: "Use 'her' for a female.",
          image: "https://via.placeholder.com/400x200?text=Her"
        },
        {
          id: "a12",
          type: "spell_word",
          instruction: "Spell the word 'father'.",
          content: "father",
          expectedAnswers: ["father", "f-a-t-h-e-r"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Father"
        },
        {
          id: "a13",
          type: "sentence_completion",
          instruction: "Complete the introduction.",
          content: "______ name is Ravi.",
          expectedAnswers: ["his"],
          hint: "Use 'His' for a male.",
          image: "https://via.placeholder.com/400x200?text=His+Name+Is+Ravi"
        },
        {
          id: "a14",
          type: "listen_repeat",
          instruction: "Listen and repeat this phrase.",
          content: "I love my mother and father.",
          expectedAnswers: ["i love my mother and father"],
          hint: "Show love for your parents.",
          image: "https://via.placeholder.com/400x200?text=I+Love+My+Parents",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a15",
          type: "revision",
          instruction: "Practise introducing your parents.",
          content: "This is my mother. This is my father.",
          expectedAnswers: ["this is my mother this is my father"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Parents"
        },
        {
          id: "a16",
          type: "challenge_question",
          instruction: "How do you introduce your mother?",
          content: "Say a sentence to introduce your mother.",
          expectedAnswers: ["this is my mother", "this is my mom"],
          hint: "Say 'This is my mother'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Mother"
        }
      ]
    },
    {
      id: 2,
      title: "Introducing My Brother and Sister",
      description: "Learn to talk about your brothers and sisters.",
      activities: [
        {
          id: "b1",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my brother.",
          expectedAnswers: ["this is my brother"],
          hint: "Introduce your brother.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Brother",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b2",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my sister.",
          expectedAnswers: ["this is my sister"],
          hint: "Introduce your sister.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Sister",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b3",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "My brother's name is Arjun.",
          expectedAnswers: ["my brother's name is arjun", "my brother name is arjun"],
          hint: "Say your brother's name.",
          image: "https://via.placeholder.com/400x200?text=Brother+Arjun"
        },
        {
          id: "b4",
          type: "multiple_choice",
          instruction: "Choose the correct word for a male sibling.",
          content: "Who is 'brother'?",
          options: ["A boy sibling", "A girl sibling", "A parent"],
          expectedAnswers: ["a boy sibling"],
          hint: "He is a boy in your family.",
          image: "https://via.placeholder.com/400x200?text=Brother+Meaning"
        },
        {
          id: "b5",
          type: "multiple_choice",
          instruction: "Choose the correct word for a female sibling.",
          content: "Who is 'sister'?",
          options: ["A girl sibling", "A boy sibling", "A parent"],
          expectedAnswers: ["a girl sibling"],
          hint: "She is a girl in your family.",
          image: "https://via.placeholder.com/400x200?text=Sister+Meaning"
        },
        {
          id: "b6",
          type: "sentence_completion",
          instruction: "Complete the introduction.",
          content: "This is my ______.",
          expectedAnswers: ["brother", "sister"],
          hint: "Say 'brother' or 'sister'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Blank"
        },
        {
          id: "b7",
          type: "sentence_completion",
          instruction: "Complete the sentence for a brother.",
          content: "______ name is Arjun.",
          expectedAnswers: ["his"],
          hint: "Use 'His' for a boy.",
          image: "https://via.placeholder.com/400x200?text=His+Name+Is+Arjun"
        },
        {
          id: "b8",
          type: "spell_word",
          instruction: "Spell the word 'brother'.",
          content: "brother",
          expectedAnswers: ["brother", "b-r-o-t-h-e-r"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Brother"
        },
        {
          id: "b9",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my sister. Her name is Priya.",
          expectedAnswers: ["this is my sister her name is priya"],
          hint: "Introduce your sister.",
          image: "https://via.placeholder.com/400x200?text=My+Sister+Priya",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b10",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "My brother is tall. My sister is smart.",
          expectedAnswers: ["my brother is tall my sister is smart"],
          hint: "Describe your siblings.",
          image: "https://via.placeholder.com/400x200?text=Tall+Brother+Smart+Sister"
        },
        {
          id: "b11",
          type: "multiple_choice",
          instruction: "Choose the correct pronoun for a brother.",
          content: "Which pronoun do you use for your brother?",
          options: ["He", "She", "They"],
          expectedAnswers: ["he"],
          hint: "Use 'He' for a boy.",
          image: "https://via.placeholder.com/400x200?text=He"
        },
        {
          id: "b12",
          type: "spell_word",
          instruction: "Spell the word 'sister'.",
          content: "sister",
          expectedAnswers: ["sister", "s-i-s-t-e-r"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Sister"
        },
        {
          id: "b13",
          type: "sentence_completion",
          instruction: "Complete the sentence for a sister.",
          content: "______ name is Priya.",
          expectedAnswers: ["her"],
          hint: "Use 'Her' for a girl.",
          image: "https://via.placeholder.com/400x200?text=Her+Name+Is+Priya"
        },
        {
          id: "b14",
          type: "listen_repeat",
          instruction: "Listen and repeat this phrase.",
          content: "I have one brother and one sister.",
          expectedAnswers: ["i have one brother and one sister"],
          hint: "Say how many siblings you have.",
          image: "https://via.placeholder.com/400x200?text=One+Brother+One+Sister",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b15",
          type: "revision",
          instruction: "Practise introducing your siblings.",
          content: "This is my brother. This is my sister.",
          expectedAnswers: ["this is my brother this is my sister"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Siblings"
        },
        {
          id: "b16",
          type: "challenge_question",
          instruction: "How do you introduce your sister?",
          content: "Say a sentence to introduce your sister.",
          expectedAnswers: ["this is my sister"],
          hint: "Say 'This is my sister'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Sister"
        }
      ]
    },
    {
      id: 3,
      title: "Introducing Grandparents",
      description: "Learn to talk about your grandparents – grandfather and grandmother.",
      activities: [
        {
          id: "c1",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my grandfather.",
          expectedAnswers: ["this is my grandfather"],
          hint: "Introduce your grandpa.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Grandfather",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c2",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my grandmother.",
          expectedAnswers: ["this is my grandmother"],
          hint: "Introduce your grandma.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Grandmother",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c3",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "My grandfather is very kind.",
          expectedAnswers: ["my grandfather is very kind"],
          hint: "Describe your grandfather.",
          image: "https://via.placeholder.com/400x200?text=Grandfather+Is+Kind"
        },
        {
          id: "c4",
          type: "multiple_choice",
          instruction: "Choose the correct word for your father's father.",
          content: "Who is 'grandfather'?",
          options: ["Your father's father", "Your mother's father", "Both"],
          expectedAnswers: ["both"],
          hint: "He is your parent's father.",
          image: "https://via.placeholder.com/400x200?text=Grandfather+Meaning"
        },
        {
          id: "c5",
          type: "multiple_choice",
          instruction: "Choose the correct word for your mother's mother.",
          content: "Who is 'grandmother'?",
          options: ["Your mother's mother", "Your father's mother", "Both"],
          expectedAnswers: ["both"],
          hint: "She is your parent's mother.",
          image: "https://via.placeholder.com/400x200?text=Grandmother+Meaning"
        },
        {
          id: "c6",
          type: "sentence_completion",
          instruction: "Complete the introduction.",
          content: "This is my ______.",
          expectedAnswers: ["grandfather", "grandmother"],
          hint: "Say 'grandfather' or 'grandmother'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Blank"
        },
        {
          id: "c7",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My ______ is very old.",
          expectedAnswers: ["grandfather", "grandmother"],
          hint: "Say 'grandfather' or 'grandmother'.",
          image: "https://via.placeholder.com/400x200?text=Grandparent+Is+Old"
        },
        {
          id: "c8",
          type: "spell_word",
          instruction: "Spell the word 'grandfather'.",
          content: "grandfather",
          expectedAnswers: ["grandfather", "g-r-a-n-d-f-a-t-h-e-r"],
          hint: "It has twelve letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Grandfather"
        },
        {
          id: "c9",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my grandmother. Her name is Savita.",
          expectedAnswers: ["this is my grandmother her name is savita"],
          hint: "Introduce your grandmother.",
          image: "https://via.placeholder.com/400x200?text=Grandmother+Savita",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c10",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "I love my grandfather and grandmother.",
          expectedAnswers: ["i love my grandfather and grandmother"],
          hint: "Show love for your grandparents.",
          image: "https://via.placeholder.com/400x200?text=I+Love+Grandparents"
        },
        {
          id: "c11",
          type: "multiple_choice",
          instruction: "Choose the correct possessive for grandfather.",
          content: "Which word do you use for grandfather?",
          options: ["His", "Her", "Your"],
          expectedAnswers: ["his"],
          hint: "Use 'His' for a male.",
          image: "https://via.placeholder.com/400x200?text=His"
        },
        {
          id: "c12",
          type: "spell_word",
          instruction: "Spell the word 'grandmother'.",
          content: "grandmother",
          expectedAnswers: ["grandmother", "g-r-a-n-d-m-o-t-h-e-r"],
          hint: "It has twelve letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Grandmother"
        },
        {
          id: "c13",
          type: "sentence_completion",
          instruction: "Complete the introduction.",
          content: "My ______ is very loving.",
          expectedAnswers: ["grandmother", "grandfather"],
          hint: "Say 'grandmother' or 'grandfather'.",
          image: "https://via.placeholder.com/400x200?text=Loving+Grandparent"
        },
        {
          id: "c14",
          type: "listen_repeat",
          instruction: "Listen and repeat this phrase.",
          content: "My grandparents live with us.",
          expectedAnswers: ["my grandparents live with us"],
          hint: "Talk about where your grandparents live.",
          image: "https://via.placeholder.com/400x200?text=Grandparents+Live+With+Us",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c15",
          type: "revision",
          instruction: "Practise introducing your grandparents.",
          content: "This is my grandfather. This is my grandmother.",
          expectedAnswers: ["this is my grandfather this is my grandmother"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Grandparents"
        },
        {
          id: "c16",
          type: "challenge_question",
          instruction: "How do you introduce your grandmother?",
          content: "Say a sentence to introduce your grandmother.",
          expectedAnswers: ["this is my grandmother"],
          hint: "Say 'This is my grandmother'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Grandmother"
        }
      ]
    },
    {
      id: 4,
      title: "Introducing Aunts and Uncles",
      description: "Learn to talk about your aunts and uncles.",
      activities: [
        {
          id: "d1",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my uncle.",
          expectedAnswers: ["this is my uncle"],
          hint: "Introduce your uncle.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Uncle",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d2",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my aunt.",
          expectedAnswers: ["this is my aunt"],
          hint: "Introduce your aunt.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Aunt",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d3",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "My uncle is a doctor.",
          expectedAnswers: ["my uncle is a doctor"],
          hint: "Tell your uncle's job.",
          image: "https://via.placeholder.com/400x200?text=Uncle+Is+a+Doctor"
        },
        {
          id: "d4",
          type: "multiple_choice",
          instruction: "Choose the correct word for your parent's brother.",
          content: "Who is 'uncle'?",
          options: ["Your parent's brother", "Your parent's sister", "Your sibling"],
          expectedAnswers: ["your parent's brother"],
          hint: "He is your parent's brother.",
          image: "https://via.placeholder.com/400x200?text=Uncle+Meaning"
        },
        {
          id: "d5",
          type: "multiple_choice",
          instruction: "Choose the correct word for your parent's sister.",
          content: "Who is 'aunt'?",
          options: ["Your parent's sister", "Your parent's brother", "Your sibling"],
          expectedAnswers: ["your parent's sister"],
          hint: "She is your parent's sister.",
          image: "https://via.placeholder.com/400x200?text=Aunt+Meaning"
        },
        {
          id: "d6",
          type: "sentence_completion",
          instruction: "Complete the introduction.",
          content: "This is my ______.",
          expectedAnswers: ["uncle", "aunt"],
          hint: "Say 'uncle' or 'aunt'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Blank"
        },
        {
          id: "d7",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My ______ is very funny.",
          expectedAnswers: ["uncle", "aunt"],
          hint: "Say 'uncle' or 'aunt'.",
          image: "https://via.placeholder.com/400x200?text=Funny+Uncle+Aunt"
        },
        {
          id: "d8",
          type: "spell_word",
          instruction: "Spell the word 'uncle'.",
          content: "uncle",
          expectedAnswers: ["uncle", "u-n-c-l-e"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Uncle"
        },
        {
          id: "d9",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my aunt. Her name is Meera.",
          expectedAnswers: ["this is my aunt her name is meera"],
          hint: "Introduce your aunt.",
          image: "https://via.placeholder.com/400x200?text=Aunt+Meera",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d10",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "My uncle and aunt are very kind.",
          expectedAnswers: ["my uncle and aunt are very kind"],
          hint: "Describe both.",
          image: "https://via.placeholder.com/400x200?text=Kind+Uncle+Aunt"
        },
        {
          id: "d11",
          type: "multiple_choice",
          instruction: "Choose the correct pronoun for an uncle.",
          content: "Which pronoun do you use for your uncle?",
          options: ["He", "She", "They"],
          expectedAnswers: ["he"],
          hint: "Use 'He' for a male.",
          image: "https://via.placeholder.com/400x200?text=He"
        },
        {
          id: "d12",
          type: "spell_word",
          instruction: "Spell the word 'aunt'.",
          content: "aunt",
          expectedAnswers: ["aunt", "a-u-n-t"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Aunt"
        },
        {
          id: "d13",
          type: "sentence_completion",
          instruction: "Complete the description for an aunt.",
          content: "My ______ is a teacher.",
          expectedAnswers: ["aunt"],
          hint: "Say 'aunt'.",
          image: "https://via.placeholder.com/400x200?text=Aunt+Is+a+Teacher"
        },
        {
          id: "d14",
          type: "listen_repeat",
          instruction: "Listen and repeat this phrase.",
          content: "I have two uncles and three aunts.",
          expectedAnswers: ["i have two uncles and three aunts"],
          hint: "Say how many aunts and uncles you have.",
          image: "https://via.placeholder.com/400x200?text=Two+Uncles+Three+Aunts",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d15",
          type: "revision",
          instruction: "Practise introducing your aunt and uncle.",
          content: "This is my uncle. This is my aunt.",
          expectedAnswers: ["this is my uncle this is my aunt"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Uncle+Aunt"
        },
        {
          id: "d16",
          type: "challenge_question",
          instruction: "How do you introduce your uncle?",
          content: "Say a sentence to introduce your uncle.",
          expectedAnswers: ["this is my uncle"],
          hint: "Say 'This is my uncle'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Uncle"
        }
      ]
    },
    {
      id: 5,
      title: "Introducing Cousins",
      description: "Learn to talk about your cousins – your uncles' and aunts' children.",
      activities: [
        {
          id: "e1",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my cousin.",
          expectedAnswers: ["this is my cousin"],
          hint: "Introduce your cousin.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Cousin",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e2",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "These are my cousins.",
          expectedAnswers: ["these are my cousins"],
          hint: "Introduce two or more cousins.",
          image: "https://via.placeholder.com/400x200?text=These+Are+My+Cousins",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e3",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "My cousin is very smart.",
          expectedAnswers: ["my cousin is very smart"],
          hint: "Describe your cousin.",
          image: "https://via.placeholder.com/400x200?text=Cousin+Is+Smart"
        },
        {
          id: "e4",
          type: "multiple_choice",
          instruction: "Choose the correct meaning of 'cousin'.",
          content: "Who is a 'cousin'?",
          options: ["Your uncle or aunt's child", "Your brother", "Your father"],
          expectedAnswers: ["your uncle or aunt's child"],
          hint: "They are your relatives of the same generation.",
          image: "https://via.placeholder.com/400x200?text=Cousin+Meaning"
        },
        {
          id: "e5",
          type: "sentence_completion",
          instruction: "Complete the introduction.",
          content: "This is my ______.",
          expectedAnswers: ["cousin"],
          hint: "Say 'cousin'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+My+Cousin"
        },
        {
          id: "e6",
          type: "sentence_completion",
          instruction: "Complete the introduction for more than one.",
          content: "______ are my cousins.",
          expectedAnswers: ["these", "they"],
          hint: "Use 'These' or 'They'.",
          image: "https://via.placeholder.com/400x200?text=These+Are+My+Cousins"
        },
        {
          id: "e7",
          type: "spell_word",
          instruction: "Spell the word 'cousin'.",
          content: "cousin",
          expectedAnswers: ["cousin", "c-o-u-s-i-n"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Cousin"
        },
        {
          id: "e8",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "My cousin's name is Rohan.",
          expectedAnswers: ["my cousin's name is rohan", "my cousin name is rohan"],
          hint: "Say your cousin's name.",
          image: "https://via.placeholder.com/400x200?text=Cousin+Rohan",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e9",
          type: "read_aloud",
          instruction: "Read this introduction aloud.",
          content: "I have many cousins. They are all my friends.",
          expectedAnswers: ["i have many cousins they are all my friends"],
          hint: "Talk about your cousins.",
          image: "https://via.placeholder.com/400x200?text=Many+Cousins+Friends"
        },
        {
          id: "e10",
          type: "multiple_choice",
          instruction: "Choose the correct pronoun for a male cousin.",
          content: "Which pronoun do you use for a male cousin?",
          options: ["He", "She", "It"],
          expectedAnswers: ["he"],
          hint: "Use 'He' for a boy.",
          image: "https://via.placeholder.com/400x200?text=He"
        },
        {
          id: "e11",
          type: "multiple_choice",
          instruction: "Choose the correct pronoun for a female cousin.",
          content: "Which pronoun do you use for a female cousin?",
          options: ["She", "He", "It"],
          expectedAnswers: ["she"],
          hint: "Use 'She' for a girl.",
          image: "https://via.placeholder.com/400x200?text=She"
        },
        {
          id: "e12",
          type: "spell_word",
          instruction: "Spell the word 'cousins'.",
          content: "cousins",
          expectedAnswers: ["cousins", "c-o-u-s-i-n-s"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Cousins"
        },
        {
          id: "e13",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My cousin ______ very funny.",
          expectedAnswers: ["is"],
          hint: "Use 'is'.",
          image: "https://via.placeholder.com/400x200?text=Cousin+Is+Funny"
        },
        {
          id: "e14",
          type: "listen_repeat",
          instruction: "Listen and repeat this phrase.",
          content: "I love playing with my cousins.",
          expectedAnswers: ["i love playing with my cousins"],
          hint: "Talk about spending time with cousins.",
          image: "https://via.placeholder.com/400x200?text=Playing+with+Cousins",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e15",
          type: "revision",
          instruction: "Practise introducing your cousin.",
          content: "This is my cousin. These are my cousins.",
          expectedAnswers: ["this is my cousin these are my cousins"],
          hint: "Say both singular and plural.",
          image: "https://via.placeholder.com/400x200?text=Practice+Cousins"
        },
        {
          id: "e16",
          type: "challenge_question",
          instruction: "How do you introduce two or more cousins?",
          content: "Introduce your cousins.",
          expectedAnswers: ["these are my cousins", "they are my cousins"],
          hint: "Say 'These are my cousins'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Cousins"
        }
      ]
    },
    {
      id: 6,
      title: "Describing My Mother",
      description: "Learn to describe your mother – her appearance, personality, and job.",
      activities: [
        {
          id: "f1",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My mother is tall.",
          expectedAnswers: ["my mother is tall"],
          hint: "Describe your mother's height.",
          image: "https://via.placeholder.com/400x200?text=My+Mother+Is+Tall",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f2",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My mother is kind.",
          expectedAnswers: ["my mother is kind"],
          hint: "Describe your mother's personality.",
          image: "https://via.placeholder.com/400x200?text=My+Mother+Is+Kind",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f3",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My mother is a teacher.",
          expectedAnswers: ["my mother is a teacher"],
          hint: "Tell your mother's job.",
          image: "https://via.placeholder.com/400x200?text=My+Mother+Is+a+Teacher"
        },
        {
          id: "f4",
          type: "multiple_choice",
          instruction: "Choose the correct adjective for a kind person.",
          content: "Which word means 'nice and caring'?",
          options: ["Kind", "Tall", "Short"],
          expectedAnswers: ["kind"],
          hint: "It is a personality adjective.",
          image: "https://via.placeholder.com/400x200?text=Kind"
        },
        {
          id: "f5",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My mother is very ______.",
          expectedAnswers: ["kind", "tall", "smart", "beautiful"],
          hint: "Describe her personality or appearance.",
          image: "https://via.placeholder.com/400x200?text=My+Mother+Is+Very+Blank"
        },
        {
          id: "f6",
          type: "sentence_completion",
          instruction: "Complete the sentence about her job.",
          content: "My mother is ______ doctor.",
          expectedAnswers: ["a"],
          hint: "Use 'a'.",
          image: "https://via.placeholder.com/400x200?text=My+Mother+Is+a+Doctor"
        },
        {
          id: "f7",
          type: "spell_word",
          instruction: "Spell the word 'kind'.",
          content: "kind",
          expectedAnswers: ["kind", "k-i-n-d"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Kind"
        },
        {
          id: "f8",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My mother has long hair.",
          expectedAnswers: ["my mother has long hair"],
          hint: "Describe your mother's hair.",
          image: "https://via.placeholder.com/400x200?text=Long+Hair",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f9",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My mother is beautiful and smart.",
          expectedAnswers: ["my mother is beautiful and smart"],
          hint: "Use two adjectives.",
          image: "https://via.placeholder.com/400x200?text=Beautiful+and+Smart"
        },
        {
          id: "f10",
          type: "multiple_choice",
          instruction: "Choose the correct word for a person who teaches.",
          content: "A person who teaches is a ______.",
          options: ["Teacher", "Doctor", "Driver"],
          expectedAnswers: ["teacher"],
          hint: "They work in a school.",
          image: "https://via.placeholder.com/400x200?text=Teacher"
        },
        {
          id: "f11",
          type: "spell_word",
          instruction: "Spell the word 'hair'.",
          content: "hair",
          expectedAnswers: ["hair", "h-a-i-r"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Hair"
        },
        {
          id: "f12",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My mother ______ brown eyes.",
          expectedAnswers: ["has"],
          hint: "Use 'has'.",
          image: "https://via.placeholder.com/400x200?text=Has+Brown+Eyes"
        },
        {
          id: "f13",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "I love my mother. She is the best.",
          expectedAnswers: ["i love my mother she is the best"],
          hint: "Show love for your mother.",
          image: "https://via.placeholder.com/400x200?text=I+Love+My+Mother",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f14",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My mother is a good cook.",
          expectedAnswers: ["my mother is a good cook"],
          hint: "Tell what she does well.",
          image: "https://via.placeholder.com/400x200?text=Good+Cook"
        },
        {
          id: "f15",
          type: "revision",
          instruction: "Practise describing your mother.",
          content: "My mother is tall. My mother is kind. My mother is a teacher.",
          expectedAnswers: ["my mother is tall my mother is kind my mother is a teacher"],
          hint: "Say three things about your mother.",
          image: "https://via.placeholder.com/400x200?text=Practice+Mother"
        },
        {
          id: "f16",
          type: "challenge_question",
          instruction: "Describe your mother in two sentences.",
          content: "Give two sentences about your mother.",
          expectedAnswers: ["my mother is", "my mother has", "my mother is a"],
          hint: "Say her appearance and personality.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Mother"
        }
      ]
    },
    {
      id: 7,
      title: "Describing My Father",
      description: "Learn to describe your father – his appearance, personality, and job.",
      activities: [
        {
          id: "g1",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My father is tall.",
          expectedAnswers: ["my father is tall"],
          hint: "Describe your father's height.",
          image: "https://via.placeholder.com/400x200?text=My+Father+Is+Tall",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g2",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My father is strong.",
          expectedAnswers: ["my father is strong"],
          hint: "Describe your father's strength.",
          image: "https://via.placeholder.com/400x200?text=My+Father+Is+Strong",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g3",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My father is a driver.",
          expectedAnswers: ["my father is a driver"],
          hint: "Tell your father's job.",
          image: "https://via.placeholder.com/400x200?text=My+Father+Is+a+Driver"
        },
        {
          id: "g4",
          type: "multiple_choice",
          instruction: "Choose the correct adjective for a person who is not short.",
          content: "Which word is the opposite of 'short'?",
          options: ["Tall", "Small", "Big"],
          expectedAnswers: ["tall"],
          hint: "It describes height.",
          image: "https://via.placeholder.com/400x200?text=Tall"
        },
        {
          id: "g5",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My father is very ______.",
          expectedAnswers: ["strong", "tall", "smart", "kind"],
          hint: "Describe his personality or appearance.",
          image: "https://via.placeholder.com/400x200?text=My+Father+Is+Very+Blank"
        },
        {
          id: "g6",
          type: "sentence_completion",
          instruction: "Complete the sentence about his job.",
          content: "My father is ______ engineer.",
          expectedAnswers: ["an"],
          hint: "Use 'an' before a vowel sound.",
          image: "https://via.placeholder.com/400x200?text=My+Father+Is+an+Engineer"
        },
        {
          id: "g7",
          type: "spell_word",
          instruction: "Spell the word 'strong'.",
          content: "strong",
          expectedAnswers: ["strong", "s-t-r-o-n-g"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Strong"
        },
        {
          id: "g8",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My father has short hair.",
          expectedAnswers: ["my father has short hair"],
          hint: "Describe your father's hair.",
          image: "https://via.placeholder.com/400x200?text=Short+Hair",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g9",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My father is funny and hardworking.",
          expectedAnswers: ["my father is funny and hardworking"],
          hint: "Use two adjectives.",
          image: "https://via.placeholder.com/400x200?text=Funny+and+Hardworking"
        },
        {
          id: "g10",
          type: "multiple_choice",
          instruction: "Choose the correct word for a person who drives.",
          content: "A person who drives a car is a ______.",
          options: ["Driver", "Doctor", "Teacher"],
          expectedAnswers: ["driver"],
          hint: "They operate vehicles.",
          image: "https://via.placeholder.com/400x200?text=Driver"
        },
        {
          id: "g11",
          type: "spell_word",
          instruction: "Spell the word 'driver'.",
          content: "driver",
          expectedAnswers: ["driver", "d-r-i-v-e-r"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Driver"
        },
        {
          id: "g12",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My father ______ a car.",
          expectedAnswers: ["drives", "has"],
          hint: "Use 'drives' or 'has'.",
          image: "https://via.placeholder.com/400x200?text=Drives+a+Car"
        },
        {
          id: "g13",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "I love my father. He is my hero.",
          expectedAnswers: ["i love my father he is my hero"],
          hint: "Show love for your father.",
          image: "https://via.placeholder.com/400x200?text=I+Love+My+Father",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g14",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My father helps me with my homework.",
          expectedAnswers: ["my father helps me with my homework"],
          hint: "Tell what your father does for you.",
          image: "https://via.placeholder.com/400x200?text=Helps+with+Homework"
        },
        {
          id: "g15",
          type: "revision",
          instruction: "Practise describing your father.",
          content: "My father is tall. My father is strong. My father is a driver.",
          expectedAnswers: ["my father is tall my father is strong my father is a driver"],
          hint: "Say three things about your father.",
          image: "https://via.placeholder.com/400x200?text=Practice+Father"
        },
        {
          id: "g16",
          type: "challenge_question",
          instruction: "Describe your father in two sentences.",
          content: "Give two sentences about your father.",
          expectedAnswers: ["my father is", "my father has", "my father is a"],
          hint: "Say his appearance and personality.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Father"
        }
      ]
    },
    {
      id: 8,
      title: "Describing My Siblings",
      description: "Learn to describe your brother and sister – their age, appearance, and personality.",
      activities: [
        {
          id: "h1",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My brother is younger than me.",
          expectedAnswers: ["my brother is younger than me"],
          hint: "Say your brother is younger.",
          image: "https://via.placeholder.com/400x200?text=Brother+Is+Younger",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h2",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My sister is older than me.",
          expectedAnswers: ["my sister is older than me"],
          hint: "Say your sister is older.",
          image: "https://via.placeholder.com/400x200?text=Sister+Is+Older",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h3",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My brother is very playful.",
          expectedAnswers: ["my brother is very playful"],
          hint: "Describe your brother's personality.",
          image: "https://via.placeholder.com/400x200?text=Playful+Brother"
        },
        {
          id: "h4",
          type: "multiple_choice",
          instruction: "Choose the correct word for someone who is not old.",
          content: "Which word is the opposite of 'old'?",
          options: ["Young", "Tall", "Short"],
          expectedAnswers: ["young"],
          hint: "It describes age.",
          image: "https://via.placeholder.com/400x200?text=Young"
        },
        {
          id: "h5",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My brother is ______ than me.",
          expectedAnswers: ["younger", "older"],
          hint: "Say 'younger' or 'older'.",
          image: "https://via.placeholder.com/400x200?text=Brother+Is+Younger+Than+Me"
        },
        {
          id: "h6",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My sister is very ______.",
          expectedAnswers: ["smart", "kind", "funny", "helpful"],
          hint: "Describe her personality.",
          image: "https://via.placeholder.com/400x200?text=Sister+Is+Very+Blank"
        },
        {
          id: "h7",
          type: "spell_word",
          instruction: "Spell the word 'young'.",
          content: "young",
          expectedAnswers: ["young", "y-o-u-n-g"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Young"
        },
        {
          id: "h8",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My brother has curly hair.",
          expectedAnswers: ["my brother has curly hair"],
          hint: "Describe your brother's hair.",
          image: "https://via.placeholder.com/400x200?text=Curly+Hair",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h9",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My sister has long black hair.",
          expectedAnswers: ["my sister has long black hair"],
          hint: "Describe your sister's hair.",
          image: "https://via.placeholder.com/400x200?text=Long+Black+Hair"
        },
        {
          id: "h10",
          type: "multiple_choice",
          instruction: "Choose the correct word for someone who likes to play.",
          content: "Which word means 'likes to have fun and play'?",
          options: ["Playful", "Serious", "Quiet"],
          expectedAnswers: ["playful"],
          hint: "They enjoy games.",
          image: "https://via.placeholder.com/400x200?text=Playful"
        },
        {
          id: "h11",
          type: "spell_word",
          instruction: "Spell the word 'playful'.",
          content: "playful",
          expectedAnswers: ["playful", "p-l-a-y-f-u-l"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Playful"
        },
        {
          id: "h12",
          type: "sentence_completion",
          instruction: "Complete the comparison.",
          content: "My brother is younger ______ me.",
          expectedAnswers: ["than"],
          hint: "Use 'than'.",
          image: "https://via.placeholder.com/400x200?text=Younger+Than+Me"
        },
        {
          id: "h13",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "I have a brother and a sister. They are both kind.",
          expectedAnswers: ["i have a brother and a sister they are both kind"],
          hint: "Talk about both siblings.",
          image: "https://via.placeholder.com/400x200?text=Brother+and+Sister+Kind",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h14",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My brother and I play together every day.",
          expectedAnswers: ["my brother and i play together every day"],
          hint: "Talk about playing with your brother.",
          image: "https://via.placeholder.com/400x200?text=Play+Together+Every+Day"
        },
        {
          id: "h15",
          type: "revision",
          instruction: "Practise describing your siblings.",
          content: "My brother is young. My sister is smart. My brother is playful.",
          expectedAnswers: ["my brother is young my sister is smart my brother is playful"],
          hint: "Say three things about your siblings.",
          image: "https://via.placeholder.com/400x200?text=Practice+Siblings"
        },
        {
          id: "h16",
          type: "challenge_question",
          instruction: "Describe your brother or sister in two sentences.",
          content: "Give two sentences about your sibling.",
          expectedAnswers: ["my brother is", "my sister is"],
          hint: "Say their age and personality.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Siblings"
        }
      ]
    },
    {
      id: 9,
      title: "Family Members – What Do They Do?",
      description: "Learn to talk about the jobs of different family members.",
      activities: [
        {
          id: "i1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My mother is a teacher.",
          expectedAnswers: ["my mother is a teacher"],
          hint: "Tell your mother's job.",
          image: "https://via.placeholder.com/400x200?text=Mother+Teacher",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My father is a doctor.",
          expectedAnswers: ["my father is a doctor"],
          hint: "Tell your father's job.",
          image: "https://via.placeholder.com/400x200?text=Father+Doctor",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My uncle is a driver.",
          expectedAnswers: ["my uncle is a driver"],
          hint: "Tell your uncle's job.",
          image: "https://via.placeholder.com/400x200?text=Uncle+Driver"
        },
        {
          id: "i4",
          type: "multiple_choice",
          instruction: "Choose the correct job for a person who teaches.",
          content: "A person who teaches is a ______.",
          options: ["Teacher", "Doctor", "Driver"],
          expectedAnswers: ["teacher"],
          hint: "They work in a school.",
          image: "https://via.placeholder.com/400x200?text=Teacher+Job"
        },
        {
          id: "i5",
          type: "multiple_choice",
          instruction: "Choose the correct job for a person who treats sick people.",
          content: "A person who treats sick people is a ______.",
          options: ["Doctor", "Teacher", "Driver"],
          expectedAnswers: ["doctor"],
          hint: "They work in a hospital.",
          image: "https://via.placeholder.com/400x200?text=Doctor+Job"
        },
        {
          id: "i6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My mother is ______ nurse.",
          expectedAnswers: ["a"],
          hint: "Use 'a'.",
          image: "https://via.placeholder.com/400x200?text=Mother+Nurse"
        },
        {
          id: "i7",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My father is ______ engineer.",
          expectedAnswers: ["an"],
          hint: "Use 'an' before a vowel sound.",
          image: "https://via.placeholder.com/400x200?text=Father+Engineer"
        },
        {
          id: "i8",
          type: "spell_word",
          instruction: "Spell the word 'doctor'.",
          content: "doctor",
          expectedAnswers: ["doctor", "d-o-c-t-o-r"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Doctor"
        },
        {
          id: "i9",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My aunt is a police officer.",
          expectedAnswers: ["my aunt is a police officer"],
          hint: "Tell your aunt's job.",
          image: "https://via.placeholder.com/400x200?text=Aunt+Police+Officer",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i10",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My grandfather is a farmer.",
          expectedAnswers: ["my grandfather is a farmer"],
          hint: "Tell your grandfather's job.",
          image: "https://via.placeholder.com/400x200?text=Grandfather+Farmer"
        },
        {
          id: "i11",
          type: "multiple_choice",
          instruction: "Choose the correct job for a person who drives a bus.",
          content: "A person who drives a bus is a ______.",
          options: ["Driver", "Doctor", "Teacher"],
          expectedAnswers: ["driver"],
          hint: "They drive vehicles.",
          image: "https://via.placeholder.com/400x200?text=Driver+Job"
        },
        {
          id: "i12",
          type: "spell_word",
          instruction: "Spell the word 'nurse'.",
          content: "nurse",
          expectedAnswers: ["nurse", "n-u-r-s-e"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Nurse"
        },
        {
          id: "i13",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My sister is ______ student.",
          expectedAnswers: ["a"],
          hint: "Use 'a'.",
          image: "https://via.placeholder.com/400x200?text=Sister+Student"
        },
        {
          id: "i14",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I want to be a doctor like my father.",
          expectedAnswers: ["i want to be a doctor like my father"],
          hint: "Talk about your dream job.",
          image: "https://via.placeholder.com/400x200?text=Want+to+Be+a+Doctor",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i15",
          type: "revision",
          instruction: "Practise saying family members' jobs.",
          content: "My mother is a teacher. My father is a doctor.",
          expectedAnswers: ["my mother is a teacher my father is a doctor"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Jobs"
        },
        {
          id: "i16",
          type: "challenge_question",
          instruction: "Tell the jobs of two family members.",
          content: "Say what two family members do.",
          expectedAnswers: ["my mother is a", "my father is a"],
          hint: "Say 'My mother is a...' and 'My father is a...'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Jobs"
        }
      ]
    },
    {
      id: 10,
      title: "Family Members – How Many?",
      description: "Learn to say how many people are in your family and who they are.",
      activities: [
        {
          id: "j1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "There are four people in my family.",
          expectedAnswers: ["there are four people in my family"],
          hint: "Tell the number of people.",
          image: "https://via.placeholder.com/400x200?text=Four+People+in+My+Family",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I have two brothers.",
          expectedAnswers: ["i have two brothers"],
          hint: "Say how many brothers.",
          image: "https://via.placeholder.com/400x200?text=Two+Brothers",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I have one sister.",
          expectedAnswers: ["i have one sister"],
          hint: "Say how many sisters.",
          image: "https://via.placeholder.com/400x200?text=One+Sister"
        },
        {
          id: "j4",
          type: "multiple_choice",
          instruction: "Choose the correct number word for 4.",
          content: "What is the word for the number 4?",
          options: ["Four", "Five", "Three"],
          expectedAnswers: ["four"],
          hint: "It comes after three.",
          image: "https://via.placeholder.com/400x200?text=Four"
        },
        {
          id: "j5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "There are ______ people in my family.",
          expectedAnswers: ["three", "four", "five", "six"],
          hint: "Say a number.",
          image: "https://via.placeholder.com/400x200?text=Blank+People+in+Family"
        },
        {
          id: "j6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ two sisters.",
          expectedAnswers: ["have"],
          hint: "Use 'have'.",
          image: "https://via.placeholder.com/400x200?text=I+Have+Two+Sisters"
        },
        {
          id: "j7",
          type: "spell_word",
          instruction: "Spell the word 'four'.",
          content: "four",
          expectedAnswers: ["four", "f-o-u-r"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Four"
        },
        {
          id: "j8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I have three brothers and one sister.",
          expectedAnswers: ["i have three brothers and one sister"],
          hint: "Say all your siblings.",
          image: "https://via.placeholder.com/400x200?text=Three+Brothers+One+Sister",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My family is big. There are six people.",
          expectedAnswers: ["my family is big there are six people"],
          hint: "Describe your family size.",
          image: "https://via.placeholder.com/400x200?text=Big+Family+Six+People"
        },
        {
          id: "j10",
          type: "multiple_choice",
          instruction: "Choose the correct response to 'How many people are in your family?'",
          content: "Someone asks about your family size. What do you say?",
          options: ["There are five people", "I have a sister", "My mother is kind"],
          expectedAnswers: ["there are five people"],
          hint: "Tell the number.",
          image: "https://via.placeholder.com/400x200?text=Five+People"
        },
        {
          id: "j11",
          type: "spell_word",
          instruction: "Spell the word 'three'.",
          content: "three",
          expectedAnswers: ["three", "t-h-r-e-e"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Three"
        },
        {
          id: "j12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ many people are in your family?",
          expectedAnswers: ["how"],
          hint: "Use 'How'.",
          image: "https://via.placeholder.com/400x200?text=How+Many+People"
        },
        {
          id: "j13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I have a big family. I have many cousins too.",
          expectedAnswers: ["i have a big family i have many cousins too"],
          hint: "Talk about extended family.",
          image: "https://via.placeholder.com/400x200?text=Big+Family+Many+Cousins",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "There are ten people in my family.",
          expectedAnswers: ["there are ten people in my family"],
          hint: "Say a number.",
          image: "https://via.placeholder.com/400x200?text=Ten+People+in+Family"
        },
        {
          id: "j15",
          type: "revision",
          instruction: "Practise saying how many people are in your family.",
          content: "There are [number] people in my family.",
          expectedAnswers: ["there are"],
          hint: "Say the number.",
          image: "https://via.placeholder.com/400x200?text=Practice+Family+Size"
        },
        {
          id: "j16",
          type: "challenge_question",
          instruction: "Tell how many people are in your family and who they are.",
          content: "Say the number of people and name them.",
          expectedAnswers: ["there are", "my", "my", "my"],
          hint: "Say 'There are... My mother, my father...'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Family+Count"
        }
      ]
    },
    {
      id: 11,
      title: "What Does Your Family Like?",
      description: "Learn to talk about what your family members like or enjoy.",
      activities: [
        {
          id: "k1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My mother likes cooking.",
          expectedAnswers: ["my mother likes cooking"],
          hint: "Tell what your mother likes.",
          image: "https://via.placeholder.com/400x200?text=Mother+Likes+Cooking",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My father likes reading.",
          expectedAnswers: ["my father likes reading"],
          hint: "Tell what your father likes.",
          image: "https://via.placeholder.com/400x200?text=Father+Likes+Reading",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My brother likes playing cricket.",
          expectedAnswers: ["my brother likes playing cricket"],
          hint: "Tell what your brother likes.",
          image: "https://via.placeholder.com/400x200?text=Brother+Likes+Cricket"
        },
        {
          id: "k4",
          type: "multiple_choice",
          instruction: "Choose the correct verb for 'likes'.",
          content: "Which word means 'enjoys'?",
          options: ["Likes", "Hates", "Does"],
          expectedAnswers: ["likes"],
          hint: "It is a positive feeling.",
          image: "https://via.placeholder.com/400x200?text=Likes"
        },
        {
          id: "k5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My sister ______ dancing.",
          expectedAnswers: ["likes"],
          hint: "Use 'likes'.",
          image: "https://via.placeholder.com/400x200?text=Sister+Likes+Dancing"
        },
        {
          id: "k6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My mother likes ______.",
          expectedAnswers: ["cooking", "singing", "dancing", "reading"],
          hint: "Say what she likes.",
          image: "https://via.placeholder.com/400x200?text=Mother+Likes+Blank"
        },
        {
          id: "k7",
          type: "spell_word",
          instruction: "Spell the word 'likes'.",
          content: "likes",
          expectedAnswers: ["likes", "l-i-k-e-s"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Likes"
        },
        {
          id: "k8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My father likes watching movies.",
          expectedAnswers: ["my father likes watching movies"],
          hint: "Tell what your father likes.",
          image: "https://via.placeholder.com/400x200?text=Father+Likes+Movies",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My grandfather likes telling stories.",
          expectedAnswers: ["my grandfather likes telling stories"],
          hint: "Tell what your grandfather likes.",
          image: "https://via.placeholder.com/400x200?text=Grandfather+Likes+Stories"
        },
        {
          id: "k10",
          type: "multiple_choice",
          instruction: "Choose the correct word for something you enjoy doing.",
          content: "Which word means 'something you enjoy'?",
          options: ["Like", "Hate", "Don't like"],
          expectedAnswers: ["like"],
          hint: "It is a positive word.",
          image: "https://via.placeholder.com/400x200?text=Like"
        },
        {
          id: "k11",
          type: "spell_word",
          instruction: "Spell the word 'cooking'.",
          content: "cooking",
          expectedAnswers: ["cooking", "c-o-o-k-i-n-g"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Cooking"
        },
        {
          id: "k12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My sister ______ dancing.",
          expectedAnswers: ["likes"],
          hint: "Use 'likes'.",
          image: "https://via.placeholder.com/400x200?text=Sister+Likes+Dancing"
        },
        {
          id: "k13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My family likes going to the park.",
          expectedAnswers: ["my family likes going to the park"],
          hint: "Talk about family activities.",
          image: "https://via.placeholder.com/400x200?text=Family+Likes+Park",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I like playing with my cousins.",
          expectedAnswers: ["i like playing with my cousins"],
          hint: "Tell what you like.",
          image: "https://via.placeholder.com/400x200?text=I+Like+Playing+with+Cousins"
        },
        {
          id: "k15",
          type: "revision",
          instruction: "Practise saying what family members like.",
          content: "My mother likes cooking. My father likes reading.",
          expectedAnswers: ["my mother likes cooking my father likes reading"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Likes"
        },
        {
          id: "k16",
          type: "challenge_question",
          instruction: "Tell what two family members like.",
          content: "Say what two people in your family like.",
          expectedAnswers: ["my mother likes", "my father likes"],
          hint: "Say 'My mother likes...' and 'My father likes...'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Likes"
        }
      ]
    },
    {
      id: 12,
      title: "Describing Family – My Family Is...",
      description: "Learn to describe your family using adjectives and phrases.",
      activities: [
        {
          id: "l1",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My family is happy.",
          expectedAnswers: ["my family is happy"],
          hint: "Describe your family.",
          image: "https://via.placeholder.com/400x200?text=My+Family+Is+Happy",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l2",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My family is close.",
          expectedAnswers: ["my family is close"],
          hint: "Say you are close to each other.",
          image: "https://via.placeholder.com/400x200?text=My+Family+Is+Close",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l3",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My family is loving and caring.",
          expectedAnswers: ["my family is loving and caring"],
          hint: "Use two adjectives.",
          image: "https://via.placeholder.com/400x200?text=Loving+and+Caring"
        },
        {
          id: "l4",
          type: "multiple_choice",
          instruction: "Choose the correct adjective for a joyful family.",
          content: "Which word means 'full of joy'?",
          options: ["Happy", "Sad", "Angry"],
          expectedAnswers: ["happy"],
          hint: "It is a positive emotion.",
          image: "https://via.placeholder.com/400x200?text=Happy"
        },
        {
          id: "l5",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My family is very ______.",
          expectedAnswers: ["happy", "kind", "loving", "caring"],
          hint: "Describe your family.",
          image: "https://via.placeholder.com/400x200?text=My+Family+Is+Very+Blank"
        },
        {
          id: "l6",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My family is ______ and ______.",
          expectedAnswers: ["happy", "kind", "loving", "caring", "close", "strong"],
          hint: "Use two adjectives.",
          image: "https://via.placeholder.com/400x200?text=Family+Is+Blank+and+Blank"
        },
        {
          id: "l7",
          type: "spell_word",
          instruction: "Spell the word 'happy'.",
          content: "happy",
          expectedAnswers: ["happy", "h-a-p-p-y"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Happy"
        },
        {
          id: "l8",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "My family is very supportive.",
          expectedAnswers: ["my family is very supportive"],
          hint: "Say your family helps each other.",
          image: "https://via.placeholder.com/400x200?text=Supportive+Family",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l9",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My family is small but we are very close.",
          expectedAnswers: ["my family is small but we are very close"],
          hint: "Describe family size and bond.",
          image: "https://via.placeholder.com/400x200?text=Small+but+Close"
        },
        {
          id: "l10",
          type: "multiple_choice",
          instruction: "Choose the correct word for a family that loves each other.",
          content: "Which word means 'full of love'?",
          options: ["Loving", "Tall", "Short"],
          expectedAnswers: ["loving"],
          hint: "It is a positive adjective.",
          image: "https://via.placeholder.com/400x200?text=Loving"
        },
        {
          id: "l11",
          type: "spell_word",
          instruction: "Spell the word 'close'.",
          content: "close",
          expectedAnswers: ["close", "c-l-o-s-e"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Close"
        },
        {
          id: "l12",
          type: "sentence_completion",
          instruction: "Complete the description.",
          content: "My family is very ______ to each other.",
          expectedAnswers: ["close", "kind", "loving"],
          hint: "Say you are close.",
          image: "https://via.placeholder.com/400x200?text=Close+to+Each+Other"
        },
        {
          id: "l13",
          type: "listen_repeat",
          instruction: "Listen and repeat this description.",
          content: "I love my family. They are the best.",
          expectedAnswers: ["i love my family they are the best"],
          hint: "Show love for your family.",
          image: "https://via.placeholder.com/400x200?text=Love+My+Family",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l14",
          type: "read_aloud",
          instruction: "Read this description aloud.",
          content: "My family means everything to me.",
          expectedAnswers: ["my family means everything to me"],
          hint: "Say how much your family matters.",
          image: "https://via.placeholder.com/400x200?text=Family+Means+Everything"
        },
        {
          id: "l15",
          type: "revision",
          instruction: "Practise describing your family.",
          content: "My family is happy. My family is close.",
          expectedAnswers: ["my family is happy my family is close"],
          hint: "Say two adjectives.",
          image: "https://via.placeholder.com/400x200?text=Practice+Family+Description"
        },
        {
          id: "l16",
          type: "challenge_question",
          instruction: "Describe your family in two sentences.",
          content: "Give two sentences about your family.",
          expectedAnswers: ["my family is", "my family is"],
          hint: "Say size and personality.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Family+Description"
        }
      ]
    },
    {
      id: 13,
      title: "Family Tree – Talking About Relationships",
      description: "Learn to talk about how family members are related to each other.",
      activities: [
        {
          id: "m1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My mother is my grandmother's daughter.",
          expectedAnswers: ["my mother is my grandmother's daughter", "my mother is my grandmothers daughter"],
          hint: "Talk about the relationship.",
          image: "https://via.placeholder.com/400x200?text=Mother+Is+Grandmothers+Daughter",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My father is my grandfather's son.",
          expectedAnswers: ["my father is my grandfather's son", "my father is my grandfathers son"],
          hint: "Talk about the relationship.",
          image: "https://via.placeholder.com/400x200?text=Father+Is+Grandfathers+Son",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My uncle is my father's brother.",
          expectedAnswers: ["my uncle is my father's brother", "my uncle is my fathers brother"],
          hint: "Talk about the relationship.",
          image: "https://via.placeholder.com/400x200?text=Uncle+Is+Fathers+Brother"
        },
        {
          id: "m4",
          type: "multiple_choice",
          instruction: "Choose the correct relationship for 'mother'.",
          content: "My mother is my grandmother's ______.",
          options: ["Daughter", "Son", "Sister"],
          expectedAnswers: ["daughter"],
          hint: "She is the child.",
          image: "https://via.placeholder.com/400x200?text=Daughter+Relationship"
        },
        {
          id: "m5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My aunt is my mother's ______.",
          expectedAnswers: ["sister"],
          hint: "Say 'sister'.",
          image: "https://via.placeholder.com/400x200?text=Aunt+Is+Mothers+Sister"
        },
        {
          id: "m6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My ______ is my father's brother.",
          expectedAnswers: ["uncle"],
          hint: "Say 'uncle'.",
          image: "https://via.placeholder.com/400x200?text=Uncle+Is+Fathers+Brother"
        },
        {
          id: "m7",
          type: "spell_word",
          instruction: "Spell the word 'daughter'.",
          content: "daughter",
          expectedAnswers: ["daughter", "d-a-u-g-h-t-e-r"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Daughter"
        },
        {
          id: "m8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My cousin is my uncle's child.",
          expectedAnswers: ["my cousin is my uncle's child", "my cousin is my uncles child"],
          hint: "Talk about the relationship.",
          image: "https://via.placeholder.com/400x200?text=Cousin+Is+Uncles+Child",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My grandfather is my father's father.",
          expectedAnswers: ["my grandfather is my father's father", "my grandfather is my fathers father"],
          hint: "Talk about the relationship.",
          image: "https://via.placeholder.com/400x200?text=Grandfather+Is+Fathers+Father"
        },
        {
          id: "m10",
          type: "multiple_choice",
          instruction: "Choose the correct relationship for 'uncle'.",
          content: "My uncle is my mother's ______.",
          options: ["Brother", "Sister", "Son"],
          expectedAnswers: ["brother"],
          hint: "He is the sibling.",
          image: "https://via.placeholder.com/400x200?text=Uncle+Is+Mothers+Brother"
        },
        {
          id: "m11",
          type: "spell_word",
          instruction: "Spell the word 'son'.",
          content: "son",
          expectedAnswers: ["son", "s-o-n"],
          hint: "It has three letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Son"
        },
        {
          id: "m12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My grandmother is my mother's ______.",
          expectedAnswers: ["mother"],
          hint: "Say 'mother'.",
          image: "https://via.placeholder.com/400x200?text=Grandmother+Is+Mothers+Mother"
        },
        {
          id: "m13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My sister is my parents' daughter.",
          expectedAnswers: ["my sister is my parents' daughter", "my sister is my parents daughter"],
          hint: "Talk about the relationship.",
          image: "https://via.placeholder.com/400x200?text=Sister+Is+Parents+Daughter",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My brother is my parents' son.",
          expectedAnswers: ["my brother is my parents' son", "my brother is my parents son"],
          hint: "Talk about the relationship.",
          image: "https://via.placeholder.com/400x200?text=Brother+Is+Parents+Son"
        },
        {
          id: "m15",
          type: "revision",
          instruction: "Practise talking about relationships.",
          content: "My mother is my grandmother's daughter. My uncle is my father's brother.",
          expectedAnswers: ["my mother is my grandmother's daughter my uncle is my father's brother", "my mother is my grandmothers daughter my uncle is my fathers brother"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Relationships"
        },
        {
          id: "m16",
          type: "challenge_question",
          instruction: "Explain how your mother and grandmother are related.",
          content: "Say the relationship between your mother and grandmother.",
          expectedAnswers: ["my mother is my grandmother's daughter", "my mother is my grandmothers daughter"],
          hint: "Say 'My mother is my grandmother's daughter.'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Relationships"
        }
      ]
    },
    {
      id: 14,
      title: "Dialogue – Talking About Family",
      description: "Practise a full dialogue where you talk about your family.",
      activities: [
        {
          id: "n1",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "How many people are in your family?",
          expectedAnswers: ["how many people are in your family", "how many people are in your family?"],
          hint: "Ask about family size.",
          image: "https://via.placeholder.com/400x200?text=How+Many+People+in+Your+Family",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n2",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "There are four people in my family.",
          expectedAnswers: ["there are four people in my family"],
          hint: "Answer the question.",
          image: "https://via.placeholder.com/400x200?text=Four+People+in+My+Family",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n3",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Who are they? They are my parents and my sister.",
          expectedAnswers: ["who are they they are my parents and my sister"],
          hint: "Name your family members.",
          image: "https://via.placeholder.com/400x200?text=Parents+and+Sister"
        },
        {
          id: "n4",
          type: "multiple_choice",
          instruction: "Choose the correct question to ask about family size.",
          content: "How do you ask about family size?",
          options: ["How many people are in your family?", "What is your name?", "How are you?"],
          expectedAnswers: ["how many people are in your family"],
          hint: "Ask 'How many'.",
          image: "https://via.placeholder.com/400x200?text=Ask+Family+Size"
        },
        {
          id: "n5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ many people are in your family?",
          expectedAnswers: ["how"],
          hint: "Use 'How'.",
          image: "https://via.placeholder.com/400x200?text=How+Many+People"
        },
        {
          id: "n6",
          type: "sentence_completion",
          instruction: "Complete the answer.",
          content: "There are ______ people in my family.",
          expectedAnswers: ["four", "five", "six", "three"],
          hint: "Say a number.",
          image: "https://via.placeholder.com/400x200?text=Blank+People+in+Family"
        },
        {
          id: "n7",
          type: "spell_word",
          instruction: "Spell the word 'people'.",
          content: "people",
          expectedAnswers: ["people", "p-e-o-p-l-e"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+People"
        },
        {
          id: "n8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Do you have any brothers or sisters? Yes, I have one brother.",
          expectedAnswers: ["do you have any brothers or sisters yes i have one brother"],
          hint: "Ask and answer about siblings.",
          image: "https://via.placeholder.com/400x200?text=Brothers+or+Sisters",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "What does your father do? He is a doctor.",
          expectedAnswers: ["what does your father do he is a doctor"],
          hint: "Ask about your father's job.",
          image: "https://via.placeholder.com/400x200?text=Father+Doctor"
        },
        {
          id: "n10",
          type: "multiple_choice",
          instruction: "Choose the correct response to 'Do you have any siblings?'",
          content: "Someone asks 'Do you have any brothers or sisters?' What do you say?",
          options: ["Yes, I have one sister", "I am fine", "Good morning"],
          expectedAnswers: ["yes i have one sister"],
          hint: "Answer yes or no.",
          image: "https://via.placeholder.com/400x200?text=Yes+I+Have+Sister"
        },
        {
          id: "n11",
          type: "spell_word",
          instruction: "Spell the word 'siblings'.",
          content: "siblings",
          expectedAnswers: ["siblings", "s-i-b-l-i-n-g-s"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Siblings"
        },
        {
          id: "n12",
          type: "sentence_completion",
          instruction: "Complete the question about job.",
          content: "What does your ______ do?",
          expectedAnswers: ["father", "mother", "uncle", "aunt"],
          hint: "Ask about a family member's job.",
          image: "https://via.placeholder.com/400x200?text=What+Does+Your+Blank+Do"
        },
        {
          id: "n13",
          type: "listen_repeat",
          instruction: "Listen and repeat this full dialogue.",
          content: "How many people are in your family? There are five. Who are they? My parents, my two brothers, and me.",
          expectedAnswers: ["how many people are in your family there are five who are they my parents my two brothers and me"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Full+Family+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n14",
          type: "read_aloud",
          instruction: "Read this dialogue with a partner.",
          content: "What is your mother like? She is kind and caring.",
          expectedAnswers: ["what is your mother like she is kind and caring"],
          hint: "Ask and describe your mother.",
          image: "https://via.placeholder.com/400x200?text=Mother+Is+Kind+and+Caring"
        },
        {
          id: "n15",
          type: "revision",
          instruction: "Practise a family dialogue.",
          content: "How many people are in your family? There are four. Who are they? My parents, my sister, and me.",
          expectedAnswers: ["how many people are in your family there are four who are they my parents my sister and me"],
          hint: "Say the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Practice+Family+Dialogue"
        },
        {
          id: "n16",
          type: "challenge_question",
          instruction: "Ask a friend about their family and answer about yours.",
          content: "Have a conversation about families.",
          expectedAnswers: ["how many people are in your family", "there are"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Family+Dialogue"
        }
      ]
    },
    {
      id: 15,
      title: "Review – All About My Family",
      description: "Consolidate everything you have learned about family.",
      activities: [
        {
          id: "o1",
          type: "listen_repeat",
          instruction: "Listen and repeat all the family words.",
          content: "Mother, father, brother, sister, grandfather, grandmother, uncle, aunt, cousin.",
          expectedAnswers: ["mother father brother sister grandfather grandmother uncle aunt cousin"],
          hint: "Say all the family words.",
          image: "https://via.placeholder.com/400x200?text=All+Family+Words",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o2",
          type: "listen_repeat",
          instruction: "Listen and repeat this introduction.",
          content: "This is my family. This is my mother and father.",
          expectedAnswers: ["this is my family this is my mother and father"],
          hint: "Introduce your family.",
          image: "https://via.placeholder.com/400x200?text=My+Family",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o3",
          type: "read_aloud",
          instruction: "Read this full description aloud.",
          content: "My family is big. There are six people. My mother is a teacher. My father is a doctor. I have two sisters and one brother.",
          expectedAnswers: ["my family is big there are six people my mother is a teacher my father is a doctor i have two sisters and one brother"],
          hint: "Describe your whole family.",
          image: "https://via.placeholder.com/400x200?text=Big+Family+Description"
        },
        {
          id: "o4",
          type: "multiple_choice",
          instruction: "Choose the correct word for your female parent.",
          content: "Who is your mother?",
          options: ["Your female parent", "Your male parent", "Your sibling"],
          expectedAnswers: ["your female parent"],
          hint: "She is your mom.",
          image: "https://via.placeholder.com/400x200?text=Mother+Review"
        },
        {
          id: "o5",
          type: "multiple_choice",
          instruction: "Choose the correct word for your male parent.",
          content: "Who is your father?",
          options: ["Your male parent", "Your female parent", "Your sibling"],
          expectedAnswers: ["your male parent"],
          hint: "He is your dad.",
          image: "https://via.placeholder.com/400x200?text=Father+Review"
        },
        {
          id: "o6",
          type: "multiple_choice",
          instruction: "Choose the correct word for your parent's sister.",
          content: "Who is your aunt?",
          options: ["Your parent's sister", "Your parent's brother", "Your sibling"],
          expectedAnswers: ["your parent's sister"],
          hint: "She is your aunt.",
          image: "https://via.placeholder.com/400x200?text=Aunt+Review"
        },
        {
          id: "o7",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "My ______ is kind.",
          expectedAnswers: ["mother", "father", "sister", "brother", "aunt", "uncle"],
          hint: "Say a family member.",
          image: "https://via.placeholder.com/400x200?text=Blank+Is+Kind"
        },
        {
          id: "o8",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I have two ______.",
          expectedAnswers: ["brothers", "sisters", "cousins"],
          hint: "Say a plural family word.",
          image: "https://via.placeholder.com/400x200?text=Two+Blank"
        },
        {
          id: "o9",
          type: "sentence_completion",
          instruction: "Complete the sentence about a relationship.",
          content: "My uncle is my father's ______.",
          expectedAnswers: ["brother"],
          hint: "Say 'brother'.",
          image: "https://via.placeholder.com/400x200?text=Uncle+Is+Fathers+Brother"
        },
        {
          id: "o10",
          type: "spell_word",
          instruction: "Spell the word 'family'.",
          content: "family",
          expectedAnswers: ["family", "f-a-m-i-l-y"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Family"
        },
        {
          id: "o11",
          type: "spell_word",
          instruction: "Spell the word 'grandmother'.",
          content: "grandmother",
          expectedAnswers: ["grandmother", "g-r-a-n-d-m-o-t-h-e-r"],
          hint: "It has twelve letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Grandmother"
        },
        {
          id: "o12",
          type: "listen_repeat",
          instruction: "Listen and repeat this review dialogue.",
          content: "How many people are in your family? There are five. Who are they? My parents, my brother, my sister, and me.",
          expectedAnswers: ["how many people are in your family there are five who are they my parents my brother my sister and me"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Review+Family+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o13",
          type: "read_aloud",
          instruction: "Read this full family description.",
          content: "I have a big family. My father is tall and strong. My mother is kind and beautiful. My brother is playful. My sister is smart. I love my family very much.",
          expectedAnswers: ["i have a big family my father is tall and strong my mother is kind and beautiful my brother is playful my sister is smart i love my family very much"],
          hint: "Describe everyone.",
          image: "https://via.placeholder.com/400x200?text=Full+Family+Description"
        },
        {
          id: "o14",
          type: "multiple_choice",
          instruction: "Choose the correct word for a person who treats sick people.",
          content: "A doctor treats ______.",
          options: ["Sick people", "Healthy people", "Students"],
          expectedAnswers: ["sick people"],
          hint: "They help people who are ill.",
          image: "https://via.placeholder.com/400x200?text=Doctor+Treats+Sick+People"
        },
        {
          id: "o15",
          type: "revision",
          instruction: "Review all the family vocabulary.",
          content: "Mother, father, brother, sister, grandfather, grandmother, uncle, aunt, cousin.",
          expectedAnswers: ["mother father brother sister grandfather grandmother uncle aunt cousin"],
          hint: "Say them all.",
          image: "https://via.placeholder.com/400x200?text=Review+All+Vocabulary"
        },
        {
          id: "o16",
          type: "challenge_question",
          instruction: "Describe your family in three sentences.",
          content: "Tell about your family.",
          expectedAnswers: ["my family has", "my mother is", "my father is"],
          hint: "Say size, members, and something about them.",
          image: "https://via.placeholder.com/400x200?text=Final+Challenge+Family"
        },
        {
          id: "o17",
          type: "challenge_question",
          instruction: "How do you introduce your family to someone?",
          content: "Introduce your family.",
          expectedAnswers: ["this is my family", "this is my mother", "this is my father"],
          hint: "Say 'This is my...' for each member.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Introduce+Family"
        }
      ]
    }
  ],
  challengeTest: {
    id: "ch4",
    activities: [
      {
        id: "ch1",
        type: "multiple_choice",
        instruction: "Choose the correct word for your mother.",
        content: "Who is your mother?",
        options: ["Your female parent", "Your male parent", "Your sibling"],
        expectedAnswers: ["your female parent"],
        hint: "She is your mom.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Mother"
      },
      {
        id: "ch2",
        type: "multiple_choice",
        instruction: "Choose the correct word for your father.",
        content: "Who is your father?",
        options: ["Your male parent", "Your female parent", "Your sibling"],
        expectedAnswers: ["your male parent"],
        hint: "He is your dad.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Father"
      },
      {
        id: "ch3",
        type: "multiple_choice",
        instruction: "Choose the correct word for a male sibling.",
        content: "Who is your brother?",
        options: ["A boy sibling", "A girl sibling", "A parent"],
        expectedAnswers: ["a boy sibling"],
        hint: "He is a boy.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Brother"
      },
      {
        id: "ch4",
        type: "multiple_choice",
        instruction: "Choose the correct word for a female sibling.",
        content: "Who is your sister?",
        options: ["A girl sibling", "A boy sibling", "A parent"],
        expectedAnswers: ["a girl sibling"],
        hint: "She is a girl.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Sister"
      },
      {
        id: "ch5",
        type: "sentence_completion",
        instruction: "Complete the introduction.",
        content: "This is my ______.",
        expectedAnswers: ["mother", "father", "brother", "sister"],
        hint: "Say a family member.",
        image: "https://via.placeholder.com/400x200?text=This+Is+My+Blank"
      },
      {
        id: "ch6",
        type: "sentence_completion",
        instruction: "Complete the description.",
        content: "My mother is very ______.",
        expectedAnswers: ["kind", "tall", "smart", "beautiful"],
        hint: "Describe your mother.",
        image: "https://via.placeholder.com/400x200?text=My+Mother+Is+Blank"
      },
      {
        id: "ch7",
        type: "sentence_completion",
        instruction: "Complete the description.",
        content: "My father is very ______.",
        expectedAnswers: ["strong", "tall", "kind", "hardworking"],
        hint: "Describe your father.",
        image: "https://via.placeholder.com/400x200?text=My+Father+Is+Blank"
      },
      {
        id: "ch8",
        type: "multiple_choice",
        instruction: "Choose the correct word for your parent's brother.",
        content: "Who is your uncle?",
        options: ["Your parent's brother", "Your parent's sister", "Your sibling"],
        expectedAnswers: ["your parent's brother"],
        hint: "He is your uncle.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Uncle"
      },
      {
        id: "ch9",
        type: "multiple_choice",
        instruction: "Choose the correct word for your parent's sister.",
        content: "Who is your aunt?",
        options: ["Your parent's sister", "Your parent's brother", "Your sibling"],
        expectedAnswers: ["your parent's sister"],
        hint: "She is your aunt.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Aunt"
      },
      {
        id: "ch10",
        type: "sentence_completion",
        instruction: "Complete the sentence about a relationship.",
        content: "My uncle is my father's ______.",
        expectedAnswers: ["brother"],
        hint: "Say 'brother'.",
        image: "https://via.placeholder.com/400x200?text=Uncle+Is+Fathers+Brother"
      },
      {
        id: "ch11",
        type: "sentence_completion",
        instruction: "Complete the sentence about a relationship.",
        content: "My aunt is my mother's ______.",
        expectedAnswers: ["sister"],
        hint: "Say 'sister'.",
        image: "https://via.placeholder.com/400x200?text=Aunt+Is+Mothers+Sister"
      },
      {
        id: "ch12",
        type: "multiple_choice",
        instruction: "Choose the correct word for a person who teaches.",
        content: "A teacher works in a ______.",
        options: ["School", "Hospital", "Office"],
        expectedAnswers: ["school"],
        hint: "They teach students.",
        image: "https://via.placeholder.com/400x200?text=Teacher+School"
      },
      {
        id: "ch13",
        type: "multiple_choice",
        instruction: "Choose the correct word for a person who treats sick people.",
        content: "A doctor works in a ______.",
        options: ["Hospital", "School", "Bank"],
        expectedAnswers: ["hospital"],
        hint: "They treat sick people.",
        image: "https://via.placeholder.com/400x200?text=Doctor+Hospital"
      },
      {
        id: "ch14",
        type: "sentence_completion",
        instruction: "Complete the question.",
        content: "______ many people are in your family?",
        expectedAnswers: ["how"],
        hint: "Use 'How'.",
        image: "https://via.placeholder.com/400x200?text=How+Many+People"
      },
      {
        id: "ch15",
        type: "sentence_completion",
        instruction: "Complete the answer.",
        content: "There are ______ people in my family.",
        expectedAnswers: ["four", "five", "three", "six"],
        hint: "Say a number.",
        image: "https://via.placeholder.com/400x200?text=Blank+People+in+My+Family"
      },
      {
        id: "ch16",
        type: "listen_repeat",
        instruction: "Listen and repeat this description.",
        content: "My family is happy and close.",
        expectedAnswers: ["my family is happy and close"],
        hint: "Describe your family.",
        image: "https://via.placeholder.com/400x200?text=Happy+and+Close",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch17",
        type: "listen_repeat",
        instruction: "Listen and repeat this dialogue.",
        content: "What does your father do? He is a doctor.",
        expectedAnswers: ["what does your father do he is a doctor"],
        hint: "Ask about a job.",
        image: "https://via.placeholder.com/400x200?text=Father+Doctor",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch18",
        type: "multiple_choice",
        instruction: "Choose the correct word for someone who likes to play.",
        content: "Which word means 'likes to have fun'?",
        options: ["Playful", "Serious", "Quiet"],
        expectedAnswers: ["playful"],
        hint: "They enjoy games.",
        image: "https://via.placeholder.com/400x200?text=Playful+Challenge"
      },
      {
        id: "ch19",
        type: "challenge_question",
        instruction: "Describe your family in two sentences.",
        content: "Tell about your family.",
        expectedAnswers: ["my family has", "my mother is"],
        hint: "Say size and something about them.",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+Family"
      },
      {
        id: "ch20",
        type: "challenge_question",
        instruction: "How do you introduce your family to someone?",
        content: "Introduce your family.",
        expectedAnswers: ["this is my family", "this is my mother", "this is my father"],
        hint: "Say 'This is my...'.",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+Introduce"
      }
    ]
  }
};