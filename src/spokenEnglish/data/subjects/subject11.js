export default {
  id: 11,
  title: "Making Requests and Offers",
  description: "Learn to ask for things politely, offer help, and respond to requests using 'can', 'could', and 'would'.",
  lessons: [
    {
      id: 1,
      title: "Can I...? – Asking for Permission",
      description: "Learn to ask for permission using 'Can I...?'",
      activities: [
        {
          id: "a1",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can I go out?",
          expectedAnswers: ["can i go out", "can i go out?"],
          hint: "Ask for permission.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Go+Out",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a2",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can I come in?",
          expectedAnswers: ["can i come in", "can i come in?"],
          hint: "Ask to enter.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Come+In",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a3",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Can I have some water?",
          expectedAnswers: ["can i have some water", "can i have some water?"],
          hint: "Ask for water.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+Water"
        },
        {
          id: "a4",
          type: "multiple_choice",
          instruction: "Choose the correct question for permission.",
          content: "How do you ask for permission to go out?",
          options: ["Can I go out?", "I go out", "Go out"],
          expectedAnswers: ["can i go out"],
          hint: "Use 'Can I'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Go+Out"
        },
        {
          id: "a5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ I go out?",
          expectedAnswers: ["can"],
          hint: "Use 'Can'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Go+Out"
        },
        {
          id: "a6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Can I ______ some water?",
          expectedAnswers: ["have"],
          hint: "Use 'have'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+Water"
        },
        {
          id: "a7",
          type: "spell_word",
          instruction: "Spell the word 'can'.",
          content: "can",
          expectedAnswers: ["can", "c-a-n"],
          hint: "It has three letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Can"
        },
        {
          id: "a8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Can I come in? Yes, please come in.",
          expectedAnswers: ["can i come in yes please come in"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Come+In+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Can I go to the bathroom? Yes, you can.",
          expectedAnswers: ["can i go to the bathroom yes you can"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Go+to+Bathroom"
        },
        {
          id: "a10",
          type: "multiple_choice",
          instruction: "Choose the correct response to 'Can I come in?'",
          content: "Someone asks 'Can I come in?' What do you say?",
          options: ["Yes, come in", "No, go out", "Thank you"],
          expectedAnswers: ["yes come in"],
          hint: "Give permission.",
          image: "https://via.placeholder.com/400x200?text=Yes+Come+In"
        },
        {
          id: "a11",
          type: "spell_word",
          instruction: "Spell the word 'come'.",
          content: "come",
          expectedAnswers: ["come", "c-o-m-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Come"
        },
        {
          id: "a12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Can I ______ out?",
          expectedAnswers: ["go"],
          hint: "Use 'go'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Go+Out"
        },
        {
          id: "a13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can I use your pen?",
          expectedAnswers: ["can i use your pen", "can i use your pen?"],
          hint: "Ask to borrow.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Use+Your+Pen",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Can I borrow your pencil?",
          expectedAnswers: ["can i borrow your pencil", "can i borrow your pencil?"],
          hint: "Ask to borrow.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Borrow+Pencil"
        },
        {
          id: "a15",
          type: "revision",
          instruction: "Practise asking for permission.",
          content: "Can I go out? Can I come in? Can I have water?",
          expectedAnswers: ["can i go out can i come in can i have water"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Can+I"
        },
        {
          id: "a16",
          type: "challenge_question",
          instruction: "How do you ask to come in?",
          content: "Ask for permission to enter.",
          expectedAnswers: ["can i come in", "can i come in?"],
          hint: "Say 'Can I come in?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Can+I+Come+In"
        }
      ]
    },
    {
      id: 2,
      title: "Can You...? – Asking for Help",
      description: "Learn to ask someone to do something using 'Can you...?'",
      activities: [
        {
          id: "b1",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can you help me?",
          expectedAnswers: ["can you help me", "can you help me?"],
          hint: "Ask for help.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Help+Me",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b2",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can you open the door?",
          expectedAnswers: ["can you open the door", "can you open the door?"],
          hint: "Ask someone to open.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Open+the+Door",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b3",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Can you pass the salt?",
          expectedAnswers: ["can you pass the salt", "can you pass the salt?"],
          hint: "Ask for salt.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Pass+the+Salt"
        },
        {
          id: "b4",
          type: "multiple_choice",
          instruction: "Choose the correct question to ask for help.",
          content: "How do you ask someone to help you?",
          options: ["Can you help me?", "I need help", "Help me"],
          expectedAnswers: ["can you help me"],
          hint: "Use 'Can you'.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Help+Me"
        },
        {
          id: "b5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ you help me?",
          expectedAnswers: ["can"],
          hint: "Use 'Can'.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Help+Me"
        },
        {
          id: "b6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Can you ______ the window?",
          expectedAnswers: ["open", "close"],
          hint: "Use 'open' or 'close'.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Open+the+Window"
        },
        {
          id: "b7",
          type: "spell_word",
          instruction: "Spell the word 'you'.",
          content: "you",
          expectedAnswers: ["you", "y-o-u"],
          hint: "It has three letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+You"
        },
        {
          id: "b8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Can you help me? Sure, I can help you.",
          expectedAnswers: ["can you help me sure i can help you"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Help+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Can you pass the salt? Here you are. Thank you!",
          expectedAnswers: ["can you pass the salt here you are thank you"],
          hint: "Ask for salt.",
          image: "https://via.placeholder.com/400x200?text=Pass+Salt+Dialogue"
        },
        {
          id: "b10",
          type: "multiple_choice",
          instruction: "Choose the correct response to 'Can you help me?'",
          content: "Someone asks 'Can you help me?' What do you say?",
          options: ["Sure, I can help", "No, I can't", "Thank you"],
          expectedAnswers: ["sure i can help"],
          hint: "Agree to help.",
          image: "https://via.placeholder.com/400x200?text=Sure+I+Can+Help"
        },
        {
          id: "b11",
          type: "spell_word",
          instruction: "Spell the word 'help'.",
          content: "help",
          expectedAnswers: ["help", "h-e-l-p"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Help"
        },
        {
          id: "b12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Can you ______ me?",
          expectedAnswers: ["help"],
          hint: "Use 'help'.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Help+Me"
        },
        {
          id: "b13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can you show me how to do this?",
          expectedAnswers: ["can you show me how to do this", "can you show me how to do this?"],
          hint: "Ask for a demonstration.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Show+Me",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Can you repeat that, please?",
          expectedAnswers: ["can you repeat that please", "can you repeat that please?"],
          hint: "Ask for repetition.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Repeat+That"
        },
        {
          id: "b15",
          type: "revision",
          instruction: "Practise asking for help.",
          content: "Can you help me? Can you open the door? Can you pass the salt?",
          expectedAnswers: ["can you help me can you open the door can you pass the salt"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Can+You"
        },
        {
          id: "b16",
          type: "challenge_question",
          instruction: "How do you ask someone to help you?",
          content: "Ask for help.",
          expectedAnswers: ["can you help me", "can you help me?"],
          hint: "Say 'Can you help me?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Can+You+Help+Me"
        }
      ]
    },
    {
      id: 3,
      title: "Could You...? – More Polite Requests",
      description: "Learn to make very polite requests using 'Could you...?'",
      activities: [
        {
          id: "c1",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Could you help me, please?",
          expectedAnswers: ["could you help me please", "could you help me please?"],
          hint: "A polite request.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Help+Me",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c2",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Could you open the window?",
          expectedAnswers: ["could you open the window", "could you open the window?"],
          hint: "A polite request.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Open+the+Window",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c3",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Could you pass me the book?",
          expectedAnswers: ["could you pass me the book", "could you pass me the book?"],
          hint: "Ask for a book.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Pass+the+Book"
        },
        {
          id: "c4",
          type: "multiple_choice",
          instruction: "Choose the more polite way to ask.",
          content: "Which is more polite?",
          options: ["Could you help me?", "Help me", "You help me"],
          expectedAnswers: ["could you help me"],
          hint: "Use 'Could you'.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Help+Me"
        },
        {
          id: "c5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ you open the door?",
          expectedAnswers: ["could"],
          hint: "Use 'Could'.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Open+the+Door"
        },
        {
          id: "c6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Could you ______ me the salt?",
          expectedAnswers: ["pass"],
          hint: "Use 'pass'.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Pass+the+Salt"
        },
        {
          id: "c7",
          type: "spell_word",
          instruction: "Spell the word 'could'.",
          content: "could",
          expectedAnswers: ["could", "c-o-u-l-d"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Could"
        },
        {
          id: "c8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Could you help me, please? Yes, of course.",
          expectedAnswers: ["could you help me please yes of course"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Help+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Could you repeat that? Sure, I will say it again.",
          expectedAnswers: ["could you repeat that sure i will say it again"],
          hint: "Ask for repetition.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Repeat+That"
        },
        {
          id: "c10",
          type: "multiple_choice",
          instruction: "Choose the correct response to 'Could you help me?'",
          content: "Someone asks 'Could you help me?' What do you say?",
          options: ["Yes, of course", "No", "Goodbye"],
          expectedAnswers: ["yes of course"],
          hint: "Agree politely.",
          image: "https://via.placeholder.com/400x200?text=Yes+of+Course"
        },
        {
          id: "c11",
          type: "spell_word",
          instruction: "Spell the word 'please'.",
          content: "please",
          expectedAnswers: ["please", "p-l-e-a-s-e"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Please"
        },
        {
          id: "c12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Could you ______ me the water?",
          expectedAnswers: ["pass", "give"],
          hint: "Use 'pass' or 'give'.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Pass+the+Water"
        },
        {
          id: "c13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Could you please speak slowly?",
          expectedAnswers: ["could you please speak slowly", "could you please speak slowly?"],
          hint: "Ask someone to speak slowly.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Speak+Slowly",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Could you show me your homework?",
          expectedAnswers: ["could you show me your homework", "could you show me your homework?"],
          hint: "Ask to see homework.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Show+Homework"
        },
        {
          id: "c15",
          type: "revision",
          instruction: "Practise polite requests.",
          content: "Could you help me? Could you open the window? Could you pass the salt?",
          expectedAnswers: ["could you help me could you open the window could you pass the salt"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Could+You"
        },
        {
          id: "c16",
          type: "challenge_question",
          instruction: "Ask politely for help.",
          content: "Use 'Could you' to ask for help.",
          expectedAnswers: ["could you help me please", "could you help me"],
          hint: "Say 'Could you help me, please?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Could+You+Help"
        }
      ]
    },
    {
      id: 4,
      title: "Would You Like...? – Making Offers",
      description: "Learn to offer something using 'Would you like...?'",
      activities: [
        {
          id: "d1",
          type: "listen_repeat",
          instruction: "Listen and repeat this offer.",
          content: "Would you like some tea?",
          expectedAnswers: ["would you like some tea", "would you like some tea?"],
          hint: "Offer tea.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Tea",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d2",
          type: "listen_repeat",
          instruction: "Listen and repeat this offer.",
          content: "Would you like some water?",
          expectedAnswers: ["would you like some water", "would you like some water?"],
          hint: "Offer water.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Water",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d3",
          type: "read_aloud",
          instruction: "Read this offer aloud.",
          content: "Would you like a pizza?",
          expectedAnswers: ["would you like a pizza", "would you like a pizza?"],
          hint: "Offer pizza.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Pizza"
        },
        {
          id: "d4",
          type: "multiple_choice",
          instruction: "Choose the correct way to offer something.",
          content: "How do you offer tea to someone?",
          options: ["Would you like some tea?", "I like tea", "Drink tea"],
          expectedAnswers: ["would you like some tea"],
          hint: "Use 'Would you like'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Tea"
        },
        {
          id: "d5",
          type: "sentence_completion",
          instruction: "Complete the offer.",
          content: "______ you like some water?",
          expectedAnswers: ["would"],
          hint: "Use 'Would'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Water"
        },
        {
          id: "d6",
          type: "sentence_completion",
          instruction: "Complete the offer.",
          content: "Would you like ______ juice?",
          expectedAnswers: ["some"],
          hint: "Use 'some'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Some+Juice"
        },
        {
          id: "d7",
          type: "spell_word",
          instruction: "Spell the word 'would'.",
          content: "would",
          expectedAnswers: ["would", "w-o-u-l-d"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Would"
        },
        {
          id: "d8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Would you like some tea? Yes, please.",
          expectedAnswers: ["would you like some tea yes please"],
          hint: "Offer and accept.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like a sandwich? No, thank you.",
          expectedAnswers: ["would you like a sandwich no thank you"],
          hint: "Offer and refuse.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Sandwich"
        },
        {
          id: "d10",
          type: "multiple_choice",
          instruction: "Choose the correct response to accept an offer.",
          content: "Someone offers you tea. What do you say?",
          options: ["Yes, please", "No, thank you", "Goodbye"],
          expectedAnswers: ["yes please"],
          hint: "Accept politely.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please"
        },
        {
          id: "d11",
          type: "spell_word",
          instruction: "Spell the word 'offer'.",
          content: "offer",
          expectedAnswers: ["offer", "o-f-f-e-r"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Offer"
        },
        {
          id: "d12",
          type: "sentence_completion",
          instruction: "Complete the offer.",
          content: "Would you ______ some water?",
          expectedAnswers: ["like"],
          hint: "Use 'like'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Water"
        },
        {
          id: "d13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Would you like to sit down?",
          expectedAnswers: ["would you like to sit down", "would you like to sit down?"],
          hint: "Offer a seat.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+to+Sit",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Would you like to join us?",
          expectedAnswers: ["would you like to join us", "would you like to join us?"],
          hint: "Invite someone.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+to+Join"
        },
        {
          id: "d15",
          type: "revision",
          instruction: "Practise making offers.",
          content: "Would you like some tea? Would you like some water? Would you like a pizza?",
          expectedAnswers: ["would you like some tea would you like some water would you like a pizza"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Would+You+Like"
        },
        {
          id: "d16",
          type: "challenge_question",
          instruction: "Offer some water to a friend.",
          content: "Make an offer.",
          expectedAnswers: ["would you like some water", "would you like some water?"],
          hint: "Say 'Would you like some water?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Would+You+Like"
        }
      ]
    },
    {
      id: 5,
      title: "Responding to Offers – Yes, Please and No, Thank You",
      description: "Learn to accept and refuse offers politely.",
      activities: [
        {
          id: "e1",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "Yes, please.",
          expectedAnswers: ["yes please"],
          hint: "Accept an offer.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e2",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "No, thank you.",
          expectedAnswers: ["no thank you"],
          hint: "Refuse an offer.",
          image: "https://via.placeholder.com/400x200?text=No+Thank+You",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e3",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like some tea? Yes, please.",
          expectedAnswers: ["would you like some tea yes please"],
          hint: "Accept tea.",
          image: "https://via.placeholder.com/400x200?text=Tea+Yes+Please"
        },
        {
          id: "e4",
          type: "multiple_choice",
          instruction: "Choose the correct way to accept.",
          content: "How do you accept an offer?",
          options: ["Yes, please", "No, thank you", "I don't want"],
          expectedAnswers: ["yes please"],
          hint: "Accept politely.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please"
        },
        {
          id: "e5",
          type: "sentence_completion",
          instruction: "Complete the response to accept.",
          content: "Yes, ______.",
          expectedAnswers: ["please"],
          hint: "Use 'please'.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please"
        },
        {
          id: "e6",
          type: "sentence_completion",
          instruction: "Complete the response to refuse.",
          content: "No, ______ you.",
          expectedAnswers: ["thank"],
          hint: "Use 'thank'.",
          image: "https://via.placeholder.com/400x200?text=No+Thank+You"
        },
        {
          id: "e7",
          type: "spell_word",
          instruction: "Spell the word 'thank'.",
          content: "thank",
          expectedAnswers: ["thank", "t-h-a-n-k"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Thank"
        },
        {
          id: "e8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Would you like some water? Yes, please.",
          expectedAnswers: ["would you like some water yes please"],
          hint: "Accept water.",
          image: "https://via.placeholder.com/400x200?text=Water+Yes+Please",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like a sandwich? No, thank you.",
          expectedAnswers: ["would you like a sandwich no thank you"],
          hint: "Refuse sandwich.",
          image: "https://via.placeholder.com/400x200?text=Sandwich+No+Thank+You"
        },
        {
          id: "e10",
          type: "multiple_choice",
          instruction: "Choose the correct way to refuse.",
          content: "How do you refuse an offer politely?",
          options: ["No, thank you", "Yes, please", "I want"],
          expectedAnswers: ["no thank you"],
          hint: "Refuse politely.",
          image: "https://via.placeholder.com/400x200?text=No+Thank+You"
        },
        {
          id: "e11",
          type: "spell_word",
          instruction: "Spell the word 'thank you'.",
          content: "thankyou",
          expectedAnswers: ["thankyou", "thank you"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Thank+You"
        },
        {
          id: "e12",
          type: "sentence_completion",
          instruction: "Complete the response.",
          content: "No, ______.",
          expectedAnswers: ["thank you"],
          hint: "Use 'thank you'.",
          image: "https://via.placeholder.com/400x200?text=No+Thank+You"
        },
        {
          id: "e13",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Would you like to join us? Yes, I would love to.",
          expectedAnswers: ["would you like to join us yes i would love to"],
          hint: "Accept an invitation.",
          image: "https://via.placeholder.com/400x200?text=Yes+I+Would+Love+To",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e14",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like some coffee? No, thank you. I don't drink coffee.",
          expectedAnswers: ["would you like some coffee no thank you i don't drink coffee"],
          hint: "Refuse coffee.",
          image: "https://via.placeholder.com/400x200?text=Coffee+No+Thank+You"
        },
        {
          id: "e15",
          type: "revision",
          instruction: "Practise responding to offers.",
          content: "Yes, please. No, thank you.",
          expectedAnswers: ["yes please no thank you"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Responses"
        },
        {
          id: "e16",
          type: "challenge_question",
          instruction: "Accept an offer of water.",
          content: "Say yes to water.",
          expectedAnswers: ["yes please", "yes please"],
          hint: "Say 'Yes, please'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Accept"
        }
      ]
    },
    {
      id: 6,
      title: "Can I Have...? – Requesting Objects",
      description: "Learn to ask for things using 'Can I have...?'",
      activities: [
        {
          id: "f1",
          type: "listen_repeat",
          instruction: "Listen and repeat this request.",
          content: "Can I have a pen, please?",
          expectedAnswers: ["can i have a pen please", "can i have a pen please?"],
          hint: "Ask for a pen.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+a+Pen",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f2",
          type: "listen_repeat",
          instruction: "Listen and repeat this request.",
          content: "Can I have some water?",
          expectedAnswers: ["can i have some water", "can i have some water?"],
          hint: "Ask for water.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+Water",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f3",
          type: "read_aloud",
          instruction: "Read this request aloud.",
          content: "Can I have a pencil, please?",
          expectedAnswers: ["can i have a pencil please", "can i have a pencil please?"],
          hint: "Ask for a pencil.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+a+Pencil"
        },
        {
          id: "f4",
          type: "multiple_choice",
          instruction: "Choose the correct way to ask for a pen.",
          content: "How do you ask for a pen?",
          options: ["Can I have a pen, please?", "Give me a pen", "Pen please"],
          expectedAnswers: ["can i have a pen please"],
          hint: "Use 'Can I have'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+a+Pen"
        },
        {
          id: "f5",
          type: "sentence_completion",
          instruction: "Complete the request.",
          content: "Can I have a ______, please?",
          expectedAnswers: ["pen", "pencil", "book", "ruler"],
          hint: "Say an object.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+a+Blank"
        },
        {
          id: "f6",
          type: "sentence_completion",
          instruction: "Complete the request.",
          content: "Can I have ______ water?",
          expectedAnswers: ["some"],
          hint: "Use 'some'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+Some+Water"
        },
        {
          id: "f7",
          type: "spell_word",
          instruction: "Spell the word 'have'.",
          content: "have",
          expectedAnswers: ["have", "h-a-v-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Have"
        },
        {
          id: "f8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Can I have a pencil, please? Here you are.",
          expectedAnswers: ["can i have a pencil please here you are"],
          hint: "Ask and receive.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+Pencil",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Can I have some water, please? Sure, here you are.",
          expectedAnswers: ["can i have some water please sure here you are"],
          hint: "Ask for water.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+Water+Sure"
        },
        {
          id: "f10",
          type: "multiple_choice",
          instruction: "Choose the correct response when someone asks for something.",
          content: "Someone asks 'Can I have a pen?' What do you say?",
          options: ["Here you are", "No", "Thank you"],
          expectedAnswers: ["here you are"],
          hint: "Give it to them.",
          image: "https://via.placeholder.com/400x200?text=Here+You+Are"
        },
        {
          id: "f11",
          type: "spell_word",
          instruction: "Spell the word 'here'.",
          content: "here",
          expectedAnswers: ["here", "h-e-r-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Here"
        },
        {
          id: "f12",
          type: "sentence_completion",
          instruction: "Complete the request.",
          content: "Can I ______ a ruler, please?",
          expectedAnswers: ["have"],
          hint: "Use 'have'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+a+Ruler"
        },
        {
          id: "f13",
          type: "listen_repeat",
          instruction: "Listen and repeat this request.",
          content: "Can I have some juice, please?",
          expectedAnswers: ["can i have some juice please", "can i have some juice please?"],
          hint: "Ask for juice.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+Juice",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f14",
          type: "read_aloud",
          instruction: "Read this request aloud.",
          content: "Can I have some help, please?",
          expectedAnswers: ["can i have some help please", "can i have some help please?"],
          hint: "Ask for help.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+Help"
        },
        {
          id: "f15",
          type: "revision",
          instruction: "Practise asking for things.",
          content: "Can I have a pen? Can I have some water? Can I have a pencil?",
          expectedAnswers: ["can i have a pen can i have some water can i have a pencil"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Can+I+Have"
        },
        {
          id: "f16",
          type: "challenge_question",
          instruction: "Ask for a pencil politely.",
          content: "Use 'Can I have' to ask for a pencil.",
          expectedAnswers: ["can i have a pencil please", "can i have a pencil"],
          hint: "Say 'Can I have a pencil, please?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Can+I+Have+Pencil"
        }
      ]
    },
    {
      id: 7,
      title: "Could I Have...? – More Polite Requests",
      description: "Learn to ask for things more politely using 'Could I have...?'",
      activities: [
        {
          id: "g1",
          type: "listen_repeat",
          instruction: "Listen and repeat this request.",
          content: "Could I have some water, please?",
          expectedAnswers: ["could i have some water please", "could i have some water please?"],
          hint: "Polite request for water.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Have+Water",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g2",
          type: "listen_repeat",
          instruction: "Listen and repeat this request.",
          content: "Could I borrow your pen?",
          expectedAnswers: ["could i borrow your pen", "could i borrow your pen?"],
          hint: "Ask to borrow a pen.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Borrow+Pen",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g3",
          type: "read_aloud",
          instruction: "Read this request aloud.",
          content: "Could I have a piece of paper?",
          expectedAnswers: ["could i have a piece of paper", "could i have a piece of paper?"],
          hint: "Ask for paper.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Have+Paper"
        },
        {
          id: "g4",
          type: "multiple_choice",
          instruction: "Choose the more polite way to ask for water.",
          content: "Which is more polite?",
          options: ["Could I have some water?", "Can I have some water?", "I want water"],
          expectedAnswers: ["could i have some water"],
          hint: "Use 'Could I have'.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Have+Water"
        },
        {
          id: "g5",
          type: "sentence_completion",
          instruction: "Complete the request.",
          content: "______ I have some juice, please?",
          expectedAnswers: ["could"],
          hint: "Use 'Could'.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Have+Juice"
        },
        {
          id: "g6",
          type: "sentence_completion",
          instruction: "Complete the request.",
          content: "Could I ______ your pencil?",
          expectedAnswers: ["borrow"],
          hint: "Use 'borrow'.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Borrow+Pencil"
        },
        {
          id: "g7",
          type: "spell_word",
          instruction: "Spell the word 'borrow'.",
          content: "borrow",
          expectedAnswers: ["borrow", "b-o-r-r-o-w"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Borrow"
        },
        {
          id: "g8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Could I have some water, please? Yes, here you are.",
          expectedAnswers: ["could i have some water please yes here you are"],
          hint: "Ask and receive.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Have+Water+Yes",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Could I borrow your eraser? Sure, here you are.",
          expectedAnswers: ["could i borrow your eraser sure here you are"],
          hint: "Borrow an eraser.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Borrow+Eraser"
        },
        {
          id: "g10",
          type: "multiple_choice",
          instruction: "Choose the correct response to 'Could I have a pencil?'",
          content: "Someone asks 'Could I have a pencil?' What do you say?",
          options: ["Yes, here you are", "No", "Thank you"],
          expectedAnswers: ["yes here you are"],
          hint: "Give it politely.",
          image: "https://via.placeholder.com/400x200?text=Yes+Here+You+Are"
        },
        {
          id: "g11",
          type: "spell_word",
          instruction: "Spell the word 'paper'.",
          content: "paper",
          expectedAnswers: ["paper", "p-a-p-e-r"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Paper"
        },
        {
          id: "g12",
          type: "sentence_completion",
          instruction: "Complete the request.",
          content: "Could I ______ some help?",
          expectedAnswers: ["have"],
          hint: "Use 'have'.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Have+Help"
        },
        {
          id: "g13",
          type: "listen_repeat",
          instruction: "Listen and repeat this request.",
          content: "Could I have a glass of water, please?",
          expectedAnswers: ["could i have a glass of water please", "could i have a glass of water please?"],
          hint: "Ask for a glass of water.",
          image: "https://via.placeholder.com/400x200?text=Glass+of+Water",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g14",
          type: "read_aloud",
          instruction: "Read this request aloud.",
          content: "Could I have a moment, please?",
          expectedAnswers: ["could i have a moment please", "could i have a moment please?"],
          hint: "Ask for a moment.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Have+a+Moment"
        },
        {
          id: "g15",
          type: "revision",
          instruction: "Practise polite requests.",
          content: "Could I have some water? Could I borrow your pen? Could I have some paper?",
          expectedAnswers: ["could i have some water could i borrow your pen could i have some paper"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Could+I+Have"
        },
        {
          id: "g16",
          type: "challenge_question",
          instruction: "Ask for a glass of water politely.",
          content: "Use 'Could I have' to ask for water.",
          expectedAnswers: ["could i have a glass of water", "could i have some water please"],
          hint: "Say 'Could I have some water, please?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Could+I+Have+Water"
        }
      ]
    },
    {
      id: 8,
      title: "Would You Mind...? – Very Polite Requests",
      description: "Learn to ask very politely using 'Would you mind...?'",
      activities: [
        {
          id: "h1",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Would you mind helping me?",
          expectedAnswers: ["would you mind helping me", "would you mind helping me?"],
          hint: "A very polite request.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Helping",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h2",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Would you mind opening the window?",
          expectedAnswers: ["would you mind opening the window", "would you mind opening the window?"],
          hint: "Very polite request.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Opening",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h3",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Would you mind passing the salt?",
          expectedAnswers: ["would you mind passing the salt", "would you mind passing the salt?"],
          hint: "Very polite request.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Passing+Salt"
        },
        {
          id: "h4",
          type: "multiple_choice",
          instruction: "Choose the most polite way to ask.",
          content: "Which is the most polite?",
          options: ["Would you mind helping me?", "Can you help me?", "Help me"],
          expectedAnswers: ["would you mind helping me"],
          hint: "Use 'Would you mind'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Helping"
        },
        {
          id: "h5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Would you ______ helping me?",
          expectedAnswers: ["mind"],
          hint: "Use 'mind'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Helping"
        },
        {
          id: "h6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Would you mind ______ the door?",
          expectedAnswers: ["closing", "opening"],
          hint: "Use the -ing form.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Opening"
        },
        {
          id: "h7",
          type: "spell_word",
          instruction: "Spell the word 'mind'.",
          content: "mind",
          expectedAnswers: ["mind", "m-i-n-d"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Mind"
        },
        {
          id: "h8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Would you mind helping me? Of course not. I'd be happy to help.",
          expectedAnswers: ["would you mind helping me of course not i'd be happy to help"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you mind closing the door? Not at all.",
          expectedAnswers: ["would you mind closing the door not at all"],
          hint: "Very polite request.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Closing"
        },
        {
          id: "h10",
          type: "multiple_choice",
          instruction: "Choose the correct response to 'Would you mind helping?'",
          content: "Someone asks 'Would you mind helping?' What do you say?",
          options: ["Of course not", "No", "Maybe"],
          expectedAnswers: ["of course not"],
          hint: "Agree politely.",
          image: "https://via.placeholder.com/400x200?text=Of+Course+Not"
        },
        {
          id: "h11",
          type: "spell_word",
          instruction: "Spell the word 'not'.",
          content: "not",
          expectedAnswers: ["not", "n-o-t"],
          hint: "It has three letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Not"
        },
        {
          id: "h12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Would you mind ______ me?",
          expectedAnswers: ["helping"],
          hint: "Use 'helping'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Helping"
        },
        {
          id: "h13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Would you mind if I opened the window?",
          expectedAnswers: ["would you mind if i opened the window", "would you mind if i opened the window?"],
          hint: "Ask for permission.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+If",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Would you mind if I sat here?",
          expectedAnswers: ["would you mind if i sat here", "would you mind if i sat here?"],
          hint: "Ask to sit.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+If+I+Sit"
        },
        {
          id: "h15",
          type: "revision",
          instruction: "Practise very polite requests.",
          content: "Would you mind helping me? Would you mind opening the window? Would you mind passing the salt?",
          expectedAnswers: ["would you mind helping me would you mind opening the window would you mind passing the salt"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Would+You+Mind"
        },
        {
          id: "h16",
          type: "challenge_question",
          instruction: "Ask very politely for help.",
          content: "Use 'Would you mind' to ask for help.",
          expectedAnswers: ["would you mind helping me", "would you mind helping me?"],
          hint: "Say 'Would you mind helping me?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Would+You+Mind"
        }
      ]
    },
    {
      id: 9,
      title: "Offering Help – Can I Help You?",
      description: "Learn to offer help using 'Can I help you?'",
      activities: [
        {
          id: "i1",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can I help you?",
          expectedAnswers: ["can i help you", "can i help you?"],
          hint: "Offer help.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Help+You",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i2",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Do you need any help?",
          expectedAnswers: ["do you need any help", "do you need any help?"],
          hint: "Offer help.",
          image: "https://via.placeholder.com/400x200?text=Do+You+Need+Help",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i3",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Would you like some help?",
          expectedAnswers: ["would you like some help", "would you like some help?"],
          hint: "Offer help.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Help"
        },
        {
          id: "i4",
          type: "multiple_choice",
          instruction: "Choose the correct way to offer help.",
          content: "How do you offer help?",
          options: ["Can I help you?", "I want help", "Help me"],
          expectedAnswers: ["can i help you"],
          hint: "Use 'Can I help you?'",
          image: "https://via.placeholder.com/400x200?text=Can+I+Help+You"
        },
        {
          id: "i5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Can I ______ you?",
          expectedAnswers: ["help"],
          hint: "Use 'help'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Help+You"
        },
        {
          id: "i6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Do you ______ any help?",
          expectedAnswers: ["need"],
          hint: "Use 'need'.",
          image: "https://via.placeholder.com/400x200?text=Do+You+Need+Help"
        },
        {
          id: "i7",
          type: "spell_word",
          instruction: "Spell the word 'help'.",
          content: "help",
          expectedAnswers: ["help", "h-e-l-p"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Help"
        },
        {
          id: "i8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Can I help you? Yes, please. I need some water.",
          expectedAnswers: ["can i help you yes please i need some water"],
          hint: "Offer and accept.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Help+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Do you need any help? No, thank you. I can do it myself.",
          expectedAnswers: ["do you need any help no thank you i can do it myself"],
          hint: "Offer and refuse.",
          image: "https://via.placeholder.com/400x200?text=Do+You+Need+Help+Dialogue"
        },
        {
          id: "i10",
          type: "multiple_choice",
          instruction: "Choose the correct response to accept help.",
          content: "Someone asks 'Can I help you?' What do you say?",
          options: ["Yes, please", "No, thank you", "Goodbye"],
          expectedAnswers: ["yes please"],
          hint: "Accept help.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please+Help"
        },
        {
          id: "i11",
          type: "spell_word",
          instruction: "Spell the word 'need'.",
          content: "need",
          expectedAnswers: ["need", "n-e-e-d"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Need"
        },
        {
          id: "i12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Would you ______ some help?",
          expectedAnswers: ["like"],
          hint: "Use 'like'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Help"
        },
        {
          id: "i13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Is there anything I can do to help?",
          expectedAnswers: ["is there anything i can do to help", "is there anything i can do to help?"],
          hint: "Offer help generally.",
          image: "https://via.placeholder.com/400x200?text=Anything+I+Can+Do",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Let me help you with that.",
          expectedAnswers: ["let me help you with that"],
          hint: "Offer to help.",
          image: "https://via.placeholder.com/400x200?text=Let+Me+Help+You"
        },
        {
          id: "i15",
          type: "revision",
          instruction: "Practise offering help.",
          content: "Can I help you? Do you need help? Would you like help?",
          expectedAnswers: ["can i help you do you need help would you like help"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Offer+Help"
        },
        {
          id: "i16",
          type: "challenge_question",
          instruction: "Offer help to a friend.",
          content: "Use 'Can I help you?'",
          expectedAnswers: ["can i help you", "can i help you?"],
          hint: "Say 'Can I help you?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Offer+Help"
        }
      ]
    },
    {
      id: 10,
      title: "Responding to Offers of Help",
      description: "Learn to accept or refuse offers of help politely.",
      activities: [
        {
          id: "j1",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "Yes, please.",
          expectedAnswers: ["yes please"],
          hint: "Accept help.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please+Help",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j2",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "No, thank you. I can do it myself.",
          expectedAnswers: ["no thank you i can do it myself"],
          hint: "Refuse help.",
          image: "https://via.placeholder.com/400x200?text=No+Thank+You+Myself",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j3",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Can I help you? Yes, please. I need help with this.",
          expectedAnswers: ["can i help you yes please i need help with this"],
          hint: "Accept help.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please+Help+With+This"
        },
        {
          id: "j4",
          type: "multiple_choice",
          instruction: "Choose the correct way to accept help.",
          content: "How do you accept help?",
          options: ["Yes, please", "No, thank you", "I don't need help"],
          expectedAnswers: ["yes please"],
          hint: "Accept politely.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please"
        },
        {
          id: "j5",
          type: "sentence_completion",
          instruction: "Complete the response to accept.",
          content: "Yes, ______.",
          expectedAnswers: ["please"],
          hint: "Use 'please'.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please"
        },
        {
          id: "j6",
          type: "sentence_completion",
          instruction: "Complete the response to refuse.",
          content: "No, ______ you.",
          expectedAnswers: ["thank"],
          hint: "Use 'thank'.",
          image: "https://via.placeholder.com/400x200?text=No+Thank+You"
        },
        {
          id: "j7",
          type: "spell_word",
          instruction: "Spell the word 'myself'.",
          content: "myself",
          expectedAnswers: ["myself", "m-y-s-e-l-f"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Myself"
        },
        {
          id: "j8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Do you need any help? Yes, please. That would be great.",
          expectedAnswers: ["do you need any help yes please that would be great"],
          hint: "Accept help.",
          image: "https://via.placeholder.com/400x200?text=That+Would+Be+Great",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like some help? No, thank you. I'm fine.",
          expectedAnswers: ["would you like some help no thank you i'm fine"],
          hint: "Refuse help.",
          image: "https://via.placeholder.com/400x200?text=Im+Fine+No+Help"
        },
        {
          id: "j10",
          type: "multiple_choice",
          instruction: "Choose the correct way to refuse help.",
          content: "How do you refuse help politely?",
          options: ["No, thank you", "Yes, please", "I want help"],
          expectedAnswers: ["no thank you"],
          hint: "Refuse politely.",
          image: "https://via.placeholder.com/400x200?text=No+Thank+You"
        },
        {
          id: "j11",
          type: "spell_word",
          instruction: "Spell the word 'fine'.",
          content: "fine",
          expectedAnswers: ["fine", "f-i-n-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Fine"
        },
        {
          id: "j12",
          type: "sentence_completion",
          instruction: "Complete the response.",
          content: "No, ______. I can do it.",
          expectedAnswers: ["thank you"],
          hint: "Refuse politely.",
          image: "https://via.placeholder.com/400x200?text=No+Thank+You+I+Can+Do+It"
        },
        {
          id: "j13",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Can I help you with that? Yes, please. I really appreciate it.",
          expectedAnswers: ["can i help you with that yes please i really appreciate it"],
          hint: "Accept help.",
          image: "https://via.placeholder.com/400x200?text=I+Appreciate+It",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j14",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Do you want some help? No, thanks. I've got it.",
          expectedAnswers: ["do you want some help no thanks i've got it"],
          hint: "Refuse help.",
          image: "https://via.placeholder.com/400x200?text=Ive+Got+It"
        },
        {
          id: "j15",
          type: "revision",
          instruction: "Practise responding to offers.",
          content: "Yes, please. No, thank you. That would be great.",
          expectedAnswers: ["yes please no thank you that would be great"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Responses+to+Offers"
        },
        {
          id: "j16",
          type: "challenge_question",
          instruction: "Accept an offer of help.",
          content: "Say yes to help.",
          expectedAnswers: ["yes please", "yes please"],
          hint: "Say 'Yes, please'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Accept+Help"
        }
      ]
    },
    {
      id: 11,
      title: "Asking for Favourites – What's Your Favourite?",
      description: "Learn to ask and answer about preferences using 'favourite'.",
      activities: [
        {
          id: "k1",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What is your favourite food?",
          expectedAnswers: ["what is your favourite food", "what is your favourite food?"],
          hint: "Ask about favourite food.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Food",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k2",
          type: "listen_repeat",
          instruction: "Listen and repeat this answer.",
          content: "My favourite food is pizza.",
          expectedAnswers: ["my favourite food is pizza"],
          hint: "Answer the question.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Pizza",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k3",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "What is your favourite colour?",
          expectedAnswers: ["what is your favourite colour", "what is your favourite colour?"],
          hint: "Ask about favourite colour.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Colour"
        },
        {
          id: "k4",
          type: "multiple_choice",
          instruction: "Choose the correct way to ask about favourite food.",
          content: "How do you ask about favourite food?",
          options: ["What is your favourite food?", "How are you?", "What is your name?"],
          expectedAnswers: ["what is your favourite food"],
          hint: "Ask 'What is your favourite food'.",
          image: "https://via.placeholder.com/400x200?text=What+Is+Your+Favourite+Food"
        },
        {
          id: "k5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "What is your ______ colour?",
          expectedAnswers: ["favourite", "favorite"],
          hint: "Use 'favourite'.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Colour"
        },
        {
          id: "k6",
          type: "sentence_completion",
          instruction: "Complete the answer.",
          content: "My favourite ______ is blue.",
          expectedAnswers: ["colour"],
          hint: "Say what it is about.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Colour+Blue"
        },
        {
          id: "k7",
          type: "spell_word",
          instruction: "Spell the word 'favourite'.",
          content: "favourite",
          expectedAnswers: ["favourite", "f-a-v-o-u-r-i-t-e"],
          hint: "It has nine letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Favourite"
        },
        {
          id: "k8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "What is your favourite colour? My favourite colour is blue.",
          expectedAnswers: ["what is your favourite colour my favourite colour is blue"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Colour+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "What is your favourite fruit? My favourite fruit is mango.",
          expectedAnswers: ["what is your favourite fruit my favourite fruit is mango"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Fruit+Mango"
        },
        {
          id: "k10",
          type: "multiple_choice",
          instruction: "Choose the correct answer to 'What is your favourite food?'",
          content: "Someone asks about your favourite food. What do you say?",
          options: ["My favourite food is pizza", "I am fine", "My name is Ravi"],
          expectedAnswers: ["my favourite food is pizza"],
          hint: "Tell your favourite food.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Food+Pizza"
        },
        {
          id: "k11",
          type: "spell_word",
          instruction: "Spell the word 'fruit'.",
          content: "fruit",
          expectedAnswers: ["fruit", "f-r-u-i-t"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Fruit"
        },
        {
          id: "k12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "What is your ______ drink?",
          expectedAnswers: ["favourite", "favorite"],
          hint: "Use 'favourite'.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Drink"
        },
        {
          id: "k13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What is your favourite thing to do?",
          expectedAnswers: ["what is your favourite thing to do", "what is your favourite thing to do?"],
          hint: "Ask about favourite activity.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Thing+to+Do",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What is your favourite subject? My favourite subject is English.",
          expectedAnswers: ["what is your favourite subject my favourite subject is english"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Subject+English"
        },
        {
          id: "k15",
          type: "revision",
          instruction: "Practise asking about favourites.",
          content: "What is your favourite food? What is your favourite colour? What is your favourite fruit?",
          expectedAnswers: ["what is your favourite food what is your favourite colour what is your favourite fruit"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Favourites"
        },
        {
          id: "k16",
          type: "challenge_question",
          instruction: "Ask someone about their favourite food.",
          content: "Say the question.",
          expectedAnswers: ["what is your favourite food", "what is your favourite food?"],
          hint: "Say 'What is your favourite food?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Favourite+Food"
        }
      ]
    },
    {
      id: 12,
      title: "Would You Like to...? – Invitations",
      description: "Learn to invite someone to do something using 'Would you like to...?'",
      activities: [
        {
          id: "l1",
          type: "listen_repeat",
          instruction: "Listen and repeat this invitation.",
          content: "Would you like to play cricket?",
          expectedAnswers: ["would you like to play cricket", "would you like to play cricket?"],
          hint: "Invite to play.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+to+Play",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l2",
          type: "listen_repeat",
          instruction: "Listen and repeat this invitation.",
          content: "Would you like to come to my house?",
          expectedAnswers: ["would you like to come to my house", "would you like to come to my house?"],
          hint: "Invite someone over.",
          image: "https://via.placeholder.com/400x200?text=Come+to+My+House",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l3",
          type: "read_aloud",
          instruction: "Read this invitation aloud.",
          content: "Would you like to have dinner with us?",
          expectedAnswers: ["would you like to have dinner with us", "would you like to have dinner with us?"],
          hint: "Invite to dinner.",
          image: "https://via.placeholder.com/400x200?text=Dinner+with+Us"
        },
        {
          id: "l4",
          type: "multiple_choice",
          instruction: "Choose the correct way to invite someone.",
          content: "How do you invite someone to play?",
          options: ["Would you like to play?", "I like to play", "Play with me"],
          expectedAnswers: ["would you like to play"],
          hint: "Use 'Would you like to'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+to+Play"
        },
        {
          id: "l5",
          type: "sentence_completion",
          instruction: "Complete the invitation.",
          content: "______ you like to come?",
          expectedAnswers: ["would"],
          hint: "Use 'Would'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+to+Come"
        },
        {
          id: "l6",
          type: "sentence_completion",
          instruction: "Complete the invitation.",
          content: "Would you like to ______ cricket?",
          expectedAnswers: ["play"],
          hint: "Use 'play'.",
          image: "https://via.placeholder.com/400x200?text=Play+Cricket"
        },
        {
          id: "l7",
          type: "spell_word",
          instruction: "Spell the word 'come'.",
          content: "come",
          expectedAnswers: ["come", "c-o-m-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Come"
        },
        {
          id: "l8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Would you like to play cricket? Yes, I would love to.",
          expectedAnswers: ["would you like to play cricket yes i would love to"],
          hint: "Accept an invitation.",
          image: "https://via.placeholder.com/400x200?text=Yes+I+Would+Love+To",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like to have dinner with us? I would love to, but I can't.",
          expectedAnswers: ["would you like to have dinner with us i would love to but i can't"],
          hint: "Refuse an invitation.",
          image: "https://via.placeholder.com/400x200?text=Love+to+But+Can't"
        },
        {
          id: "l10",
          type: "multiple_choice",
          instruction: "Choose the correct way to accept an invitation.",
          content: "Someone invites you. What do you say?",
          options: ["Yes, I would love to", "No, thank you", "Goodbye"],
          expectedAnswers: ["yes i would love to"],
          hint: "Accept politely.",
          image: "https://via.placeholder.com/400x200?text=Yes+I+Would+Love+To"
        },
        {
          id: "l11",
          type: "spell_word",
          instruction: "Spell the word 'invitation'.",
          content: "invitation",
          expectedAnswers: ["invitation", "i-n-v-i-t-a-t-i-o-n"],
          hint: "It has ten letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Invitation"
        },
        {
          id: "l12",
          type: "sentence_completion",
          instruction: "Complete the invitation.",
          content: "Would you like to ______ to the party?",
          expectedAnswers: ["come", "go"],
          hint: "Use 'come' or 'go'.",
          image: "https://via.placeholder.com/400x200?text=Come+to+the+Party"
        },
        {
          id: "l13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Would you like to join us for a movie?",
          expectedAnswers: ["would you like to join us for a movie", "would you like to join us for a movie?"],
          hint: "Invite to a movie.",
          image: "https://via.placeholder.com/400x200?text=Join+for+a+Movie",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l14",
          type: "read_aloud",
          instruction: "Read this invitation aloud.",
          content: "Would you like to go to the park with me?",
          expectedAnswers: ["would you like to go to the park with me", "would you like to go to the park with me?"],
          hint: "Invite to the park.",
          image: "https://via.placeholder.com/400x200?text=Go+to+the+Park"
        },
        {
          id: "l15",
          type: "revision",
          instruction: "Practise making invitations.",
          content: "Would you like to play? Would you like to come? Would you like to have dinner?",
          expectedAnswers: ["would you like to play would you like to come would you like to have dinner"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Invitations"
        },
        {
          id: "l16",
          type: "challenge_question",
          instruction: "Invite a friend to play cricket.",
          content: "Make an invitation.",
          expectedAnswers: ["would you like to play cricket", "would you like to play cricket?"],
          hint: "Say 'Would you like to play cricket?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Invite+Cricket"
        }
      ]
    },
    {
      id: 13,
      title: "Accepting and Refusing Invitations",
      description: "Learn to accept or refuse invitations politely.",
      activities: [
        {
          id: "m1",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "I would love to.",
          expectedAnswers: ["i would love to"],
          hint: "Accept an invitation.",
          image: "https://via.placeholder.com/400x200?text=I+Would+Love+To",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m2",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "I am sorry, I can't.",
          expectedAnswers: ["i am sorry i can't", "i am sorry i cannot"],
          hint: "Refuse an invitation.",
          image: "https://via.placeholder.com/400x200?text=Sorry+I+Can't",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m3",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like to come to my party? I would love to!",
          expectedAnswers: ["would you like to come to my party i would love to"],
          hint: "Accept an invitation.",
          image: "https://via.placeholder.com/400x200?text=Party+Love+To"
        },
        {
          id: "m4",
          type: "multiple_choice",
          instruction: "Choose the correct way to accept an invitation.",
          content: "How do you accept an invitation?",
          options: ["I would love to", "I am sorry", "I can't"],
          expectedAnswers: ["i would love to"],
          hint: "Accept politely.",
          image: "https://via.placeholder.com/400x200?text=I+Would+Love+To"
        },
        {
          id: "m5",
          type: "sentence_completion",
          instruction: "Complete the response to accept.",
          content: "I would ______ to.",
          expectedAnswers: ["love"],
          hint: "Use 'love'.",
          image: "https://via.placeholder.com/400x200?text=I+Would+Love+To"
        },
        {
          id: "m6",
          type: "sentence_completion",
          instruction: "Complete the response to refuse.",
          content: "I am ______, I can't.",
          expectedAnswers: ["sorry"],
          hint: "Use 'sorry'.",
          image: "https://via.placeholder.com/400x200?text=I+Am+Sorry+I+Can't"
        },
        {
          id: "m7",
          type: "spell_word",
          instruction: "Spell the word 'sorry'.",
          content: "sorry",
          expectedAnswers: ["sorry", "s-o-r-r-y"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Sorry"
        },
        {
          id: "m8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Would you like to play with us? I would love to! Let's go.",
          expectedAnswers: ["would you like to play with us i would love to let's go"],
          hint: "Accept and join.",
          image: "https://via.placeholder.com/400x200?text=Lets+Go",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like to have lunch with me? I am sorry, I have other plans.",
          expectedAnswers: ["would you like to have lunch with me i am sorry i have other plans"],
          hint: "Refuse politely.",
          image: "https://via.placeholder.com/400x200?text=Other+Plans"
        },
        {
          id: "m10",
          type: "multiple_choice",
          instruction: "Choose the correct way to refuse an invitation.",
          content: "How do you refuse an invitation politely?",
          options: ["I am sorry, I can't", "I would love to", "Yes, please"],
          expectedAnswers: ["i am sorry i can't"],
          hint: "Refuse politely.",
          image: "https://via.placeholder.com/400x200?text=I+Am+Sorry+I+Can't"
        },
        {
          id: "m11",
          type: "spell_word",
          instruction: "Spell the word 'party'.",
          content: "party",
          expectedAnswers: ["party", "p-a-r-t-y"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Party"
        },
        {
          id: "m12",
          type: "sentence_completion",
          instruction: "Complete the response.",
          content: "I would love to, but I ______.",
          expectedAnswers: ["can't", "cannot"],
          hint: "Say you can't.",
          image: "https://via.placeholder.com/400x200?text=Love+To+But+Can't"
        },
        {
          id: "m13",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Would you like to go to the park? That sounds great! I would love to.",
          expectedAnswers: ["would you like to go to the park that sounds great i would love to"],
          hint: "Accept enthusiastically.",
          image: "https://via.placeholder.com/400x200?text=Sounds+Great",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m14",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like to join us? I am sorry, I am busy today.",
          expectedAnswers: ["would you like to join us i am sorry i am busy today"],
          hint: "Refuse because you're busy.",
          image: "https://via.placeholder.com/400x200?text=Busy+Today"
        },
        {
          id: "m15",
          type: "revision",
          instruction: "Practise accepting and refusing.",
          content: "I would love to. I am sorry, I can't.",
          expectedAnswers: ["i would love to i am sorry i can't"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Accept+Refuse"
        },
        {
          id: "m16",
          type: "challenge_question",
          instruction: "Accept an invitation to a party.",
          content: "Say yes to a party invitation.",
          expectedAnswers: ["i would love to", "i would love to"],
          hint: "Say 'I would love to'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Accept+Party"
        }
      ]
    },
    {
      id: 14,
      title: "Dialogue – Making Requests and Offers",
      description: "Practise a full dialogue with requests, offers, and responses.",
      activities: [
        {
          id: "n1",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Can I help you with anything?",
          expectedAnswers: ["can i help you with anything", "can i help you with anything?"],
          hint: "Offer help.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Help+You+Anything",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n2",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "Yes, please. Could you help me with this?",
          expectedAnswers: ["yes please could you help me with this", "yes please could you help me with this?"],
          hint: "Accept and ask.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Help+Me",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n3",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like some water? Yes, please. That would be great.",
          expectedAnswers: ["would you like some water yes please that would be great"],
          hint: "Offer and accept.",
          image: "https://via.placeholder.com/400x200?text=Water+That+Would+Be+Great"
        },
        {
          id: "n4",
          type: "multiple_choice",
          instruction: "Choose the correct offer to start a conversation.",
          content: "How do you offer help?",
          options: ["Can I help you?", "Help me", "I want help"],
          expectedAnswers: ["can i help you"],
          hint: "Use 'Can I help you?'",
          image: "https://via.placeholder.com/400x200?text=Can+I+Help+You"
        },
        {
          id: "n5",
          type: "sentence_completion",
          instruction: "Complete the offer.",
          content: "Can I ______ you?",
          expectedAnswers: ["help"],
          hint: "Use 'help'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Help+You"
        },
        {
          id: "n6",
          type: "sentence_completion",
          instruction: "Complete the request.",
          content: "Could you ______ me with this?",
          expectedAnswers: ["help"],
          hint: "Use 'help'.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Help+Me"
        },
        {
          id: "n7",
          type: "spell_word",
          instruction: "Spell the word 'anything'.",
          content: "anything",
          expectedAnswers: ["anything", "a-n-y-t-h-i-n-g"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Anything"
        },
        {
          id: "n8",
          type: "listen_repeat",
          instruction: "Listen and repeat this full dialogue.",
          content: "Can I help you? Yes, could you pass me the salt? Sure, here you are. Thank you! You're welcome.",
          expectedAnswers: ["can i help you yes could you pass me the salt sure here you are thank you you're welcome"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Full+Request+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Would you like to come to my party? I would love to! When is it? It's on Saturday.",
          expectedAnswers: ["would you like to come to my party i would love to when is it it's on saturday"],
          hint: "Invite and accept.",
          image: "https://via.placeholder.com/400x200?text=Party+on+Saturday"
        },
        {
          id: "n10",
          type: "multiple_choice",
          instruction: "Choose the correct response to an offer.",
          content: "Someone offers help. What do you say?",
          options: ["Yes, please", "No, thank you", "Both"],
          expectedAnswers: ["both"],
          hint: "Accept or refuse politely.",
          image: "https://via.placeholder.com/400x200?text=Accept+or+Refuse"
        },
        {
          id: "n11",
          type: "spell_word",
          instruction: "Spell the word 'welcome'.",
          content: "welcome",
          expectedAnswers: ["welcome", "w-e-l-c-o-m-e"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Welcome"
        },
        {
          id: "n12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Would you ______ to come?",
          expectedAnswers: ["like"],
          hint: "Use 'like'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+to+Come"
        },
        {
          id: "n13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can I borrow your book, please?",
          expectedAnswers: ["can i borrow your book please", "can i borrow your book please?"],
          hint: "Ask to borrow a book.",
          image: "https://via.placeholder.com/400x200?text=Borrow+Your+Book",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "Could I have some help? Of course, I'd be happy to help.",
          expectedAnswers: ["could i have some help of course i'd be happy to help"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Happy+to+Help"
        },
        {
          id: "n15",
          type: "revision",
          instruction: "Practise a full request and offer dialogue.",
          content: "Can I help you? Could you help me? I would like some water. Would you like some tea?",
          expectedAnswers: ["can i help you could you help me i would like some water would you like some tea"],
          hint: "Say all four.",
          image: "https://via.placeholder.com/400x200?text=Practice+Full+Dialogue"
        },
        {
          id: "n16",
          type: "challenge_question",
          instruction: "Have a conversation making a request and accepting an offer.",
          content: "Ask for help and accept help.",
          expectedAnswers: ["can you help me", "yes please"],
          hint: "Say 'Can you help me?' and 'Yes, please'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Request+Offer"
        }
      ]
    },
    {
      id: 15,
      title: "Review – Making Requests and Offers",
      description: "Consolidate everything you have learned about requests and offers.",
      activities: [
        {
          id: "o1",
          type: "listen_repeat",
          instruction: "Listen and repeat all the key phrases.",
          content: "Can I, Can you, Could I, Could you, Would you like, I would like, Yes please, No thank you, I would love to, I am sorry I can't.",
          expectedAnswers: ["can i can you could i could you would you like i would like yes please no thank you i would love to i am sorry i can't"],
          hint: "Say all the phrases.",
          image: "https://via.placeholder.com/400x200?text=All+Key+Phrases",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o2",
          type: "listen_repeat",
          instruction: "Listen and repeat this full dialogue.",
          content: "Can I have some water, please? Yes, here you are. Thank you! You're welcome.",
          expectedAnswers: ["can i have some water please yes here you are thank you you're welcome"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Review+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o3",
          type: "read_aloud",
          instruction: "Read this full review aloud.",
          content: "My name is Ravi. I know how to make requests and offers. I can ask for things using 'Can I have...?' I can ask for help using 'Can you help me?' I can be more polite using 'Could I...?' and 'Could you...?' I can offer things using 'Would you like...?' I can accept using 'Yes, please' or 'I would love to.' I can refuse using 'No, thank you' or 'I am sorry, I can't.' I am polite and helpful.",
          expectedAnswers: ["my name is ravi i know how to make requests and offers i can ask for things using can i have i can ask for help using can you help me i can be more polite using could i and could you i can offer things using would you like i can accept using yes please or i would love to i can refuse using no thank you or i am sorry i can't i am polite and helpful"],
          hint: "Say your full review.",
          image: "https://via.placeholder.com/400x200?text=Full+Review+Requests+Offers"
        },
        {
          id: "o4",
          type: "multiple_choice",
          instruction: "Choose the correct way to ask for permission.",
          content: "How do you ask for permission to go out?",
          options: ["Can I go out?", "I go out", "Go out"],
          expectedAnswers: ["can i go out"],
          hint: "Use 'Can I'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Go+Out"
        },
        {
          id: "o5",
          type: "multiple_choice",
          instruction: "Choose the more polite way to ask.",
          content: "Which is more polite to ask for help?",
          options: ["Could you help me?", "Help me", "Can you help me?"],
          expectedAnswers: ["could you help me"],
          hint: "Use 'Could you'.",
          image: "https://via.placeholder.com/400x200?text=Could+You+Help+Me"
        },
        {
          id: "o6",
          type: "multiple_choice",
          instruction: "Choose the correct way to offer.",
          content: "How do you offer tea to someone?",
          options: ["Would you like some tea?", "Drink tea", "I like tea"],
          expectedAnswers: ["would you like some tea"],
          hint: "Use 'Would you like'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Tea"
        },
        {
          id: "o7",
          type: "sentence_completion",
          instruction: "Complete the request.",
          content: "Can I have a ______, please?",
          expectedAnswers: ["pen", "pencil", "book"],
          hint: "Say an object.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Have+a+Blank"
        },
        {
          id: "o8",
          type: "sentence_completion",
          instruction: "Complete the polite request.",
          content: "______ I have some water, please?",
          expectedAnswers: ["could"],
          hint: "Use 'Could'.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Have+Water"
        },
        {
          id: "o9",
          type: "sentence_completion",
          instruction: "Complete the offer.",
          content: "Would you ______ some tea?",
          expectedAnswers: ["like"],
          hint: "Use 'like'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+Tea"
        },
        {
          id: "o10",
          type: "spell_word",
          instruction: "Spell the word 'request'.",
          content: "request",
          expectedAnswers: ["request", "r-e-q-u-e-s-t"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Request"
        },
        {
          id: "o11",
          type: "spell_word",
          instruction: "Spell the word 'offer'.",
          content: "offer",
          expectedAnswers: ["offer", "o-f-f-e-r"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Offer"
        },
        {
          id: "o12",
          type: "listen_repeat",
          instruction: "Listen and repeat this review dialogue.",
          content: "Can I help you? Yes, could you pass me the salt? Sure. Thank you!",
          expectedAnswers: ["can i help you yes could you pass me the salt sure thank you"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Review+Request+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o13",
          type: "read_aloud",
          instruction: "Read this full review aloud.",
          content: "I can ask for things. I can offer help. I can accept politely. I can refuse politely. I am a good communicator.",
          expectedAnswers: ["i can ask for things i can offer help i can accept politely i can refuse politely i am a good communicator"],
          hint: "Talk about what you can do.",
          image: "https://via.placeholder.com/400x200?text=I+Can+Communicate"
        },
        {
          id: "o14",
          type: "multiple_choice",
          instruction: "Choose the correct way to accept an offer.",
          content: "How do you accept an offer?",
          options: ["Yes, please", "No, thank you", "I am sorry"],
          expectedAnswers: ["yes please"],
          hint: "Accept politely.",
          image: "https://via.placeholder.com/400x200?text=Yes+Please"
        },
        {
          id: "o15",
          type: "revision",
          instruction: "Review all the key phrases.",
          content: "Can I, Can you, Could I, Could you, Would you like, Yes please, No thank you, I would love to, I am sorry I can't.",
          expectedAnswers: ["can i can you could i could you would you like yes please no thank you i would love to i am sorry i can't"],
          hint: "Say all the phrases.",
          image: "https://via.placeholder.com/400x200?text=Review+All+Phrases"
        },
        {
          id: "o16",
          type: "challenge_question",
          instruction: "Make a request, an offer, and respond to both.",
          content: "Use 'Can I have...', 'Would you like...', and 'Yes, please' in a dialogue.",
          expectedAnswers: ["can i have", "would you like", "yes please"],
          hint: "Say 'Can I have...?', 'Would you like...?', and 'Yes, please'.",
          image: "https://via.placeholder.com/400x200?text=Final+Challenge+Requests+Offers"
        },
        {
          id: "o17",
          type: "challenge_question",
          instruction: "Invite a friend and accept or refuse politely.",
          content: "Make an invitation and respond.",
          expectedAnswers: ["would you like to", "i would love to", "i am sorry"],
          hint: "Say 'Would you like to...?' and respond.",
          image: "https://via.placeholder.com/400x200?text=Final+Challenge+Invitation"
        }
      ]
    }
  ],
  challengeTest: {
    id: "ch11",
    activities: [
      {
        id: "ch1",
        type: "multiple_choice",
        instruction: "How do you ask for permission?",
        content: "Choose the correct way.",
        options: ["Can I go out?", "I go out", "Go out"],
        expectedAnswers: ["can i go out"],
        hint: "Use 'Can I'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Can+I+Go+Out"
      },
      {
        id: "ch2",
        type: "multiple_choice",
        instruction: "How do you ask for help?",
        content: "Choose the correct way.",
        options: ["Can you help me?", "I need help", "Help me"],
        expectedAnswers: ["can you help me"],
        hint: "Use 'Can you'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Can+You+Help+Me"
      },
      {
        id: "ch3",
        type: "multiple_choice",
        instruction: "Which is more polite for a request?",
        content: "Choose the more polite way.",
        options: ["Could you help me?", "Can you help me?", "Help me"],
        expectedAnswers: ["could you help me"],
        hint: "Use 'Could you'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Could+You+Help+Me"
      },
      {
        id: "ch4",
        type: "multiple_choice",
        instruction: "How do you offer something?",
        content: "Choose the correct way.",
        options: ["Would you like some tea?", "I like tea", "Drink tea"],
        expectedAnswers: ["would you like some tea"],
        hint: "Use 'Would you like'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Would+You+Like+Tea"
      },
      {
        id: "ch5",
        type: "multiple_choice",
        instruction: "How do you accept an offer?",
        content: "Choose the correct way.",
        options: ["Yes, please", "No, thank you", "I am sorry"],
        expectedAnswers: ["yes please"],
        hint: "Accept politely.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Yes+Please"
      },
      {
        id: "ch6",
        type: "sentence_completion",
        instruction: "Complete the request.",
        content: "Can I ______ a pencil, please?",
        expectedAnswers: ["have"],
        hint: "Use 'have'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Can+I+Have"
      },
      {
        id: "ch7",
        type: "sentence_completion",
        instruction: "Complete the polite request.",
        content: "Could I ______ some water?",
        expectedAnswers: ["have"],
        hint: "Use 'have'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Could+I+Have"
      },
      {
        id: "ch8",
        type: "sentence_completion",
        instruction: "Complete the offer.",
        content: "Would you ______ some juice?",
        expectedAnswers: ["like"],
        hint: "Use 'like'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Would+You+Like"
      },
      {
        id: "ch9",
        type: "sentence_completion",
        instruction: "Complete the response to accept.",
        content: "Yes, ______.",
        expectedAnswers: ["please"],
        hint: "Use 'please'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Yes+Please"
      },
      {
        id: "ch10",
        type: "sentence_completion",
        instruction: "Complete the response to refuse.",
        content: "No, ______ you.",
        expectedAnswers: ["thank"],
        hint: "Use 'thank'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+No+Thank+You"
      },
      {
        id: "ch11",
        type: "multiple_choice",
        instruction: "How do you ask for something very politely?",
        content: "Choose the most polite way.",
        options: ["Would you mind helping me?", "Can you help me?", "Could you help me?"],
        expectedAnswers: ["would you mind helping me"],
        hint: "Use 'Would you mind'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Would+You+Mind"
      },
      {
        id: "ch12",
        type: "multiple_choice",
        instruction: "How do you invite someone?",
        content: "Choose the correct way.",
        options: ["Would you like to come?", "I like to come", "Come with me"],
        expectedAnswers: ["would you like to come"],
        hint: "Use 'Would you like to'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Would+You+Like+to+Come"
      },
      {
        id: "ch13",
        type: "listen_repeat",
        instruction: "Listen and repeat this request.",
        content: "Can I have some water, please?",
        expectedAnswers: ["can i have some water please"],
        hint: "Ask for water.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Can+I+Have+Water",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch14",
        type: "listen_repeat",
        instruction: "Listen and repeat this offer.",
        content: "Would you like some tea?",
        expectedAnswers: ["would you like some tea", "would you like some tea?"],
        hint: "Offer tea.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Offer+Tea",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch15",
        type: "listen_repeat",
        instruction: "Listen and repeat this dialogue.",
        content: "Can you help me? Yes, of course.",
        expectedAnswers: ["can you help me yes of course"],
        hint: "Ask and answer.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Help+Dialogue",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch16",
        type: "multiple_choice",
        instruction: "How do you accept an invitation?",
        content: "Choose the correct way.",
        options: ["I would love to", "I am sorry", "I can't"],
        expectedAnswers: ["i would love to"],
        hint: "Accept politely.",
        image: "https://via.placeholder.com/400x200?text=Challenge+I+Would+Love+To"
      },
      {
        id: "ch17",
        type: "sentence_completion",
        instruction: "Complete the response to an invitation.",
        content: "I would ______ to.",
        expectedAnswers: ["love"],
        hint: "Use 'love'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+I+Would+Love+To"
      },
      {
        id: "ch18",
        type: "sentence_completion",
        instruction: "Complete the refusal.",
        content: "I am ______, I can't.",
        expectedAnswers: ["sorry"],
        hint: "Use 'sorry'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+I+Am+Sorry"
      },
      {
        id: "ch19",
        type: "challenge_question",
        instruction: "Make a request for a pencil.",
        content: "Ask for a pencil politely.",
        expectedAnswers: ["can i have a pencil please", "could i have a pencil please"],
        hint: "Say 'Can I have a pencil, please?'",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+Request+Pencil"
      },
      {
        id: "ch20",
        type: "challenge_question",
        instruction: "Offer help and accept it.",
        content: "Make an offer and accept it.",
        expectedAnswers: ["can i help you", "yes please"],
        hint: "Say 'Can I help you?' and 'Yes, please'.",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+Offer+and+Accept"
      }
    ]
  }
};