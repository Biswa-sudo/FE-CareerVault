export default {
  id: 21,
  title: "Phone Calls and Messages",
  description: "Learn to make phone calls, leave messages, ask for someone, and take messages politely.",
  lessons: [
    {
      id: 1,
      title: "Basic Phone Greetings",
      description: "Learn common phrases for answering and starting a phone call.",
      activities: [
        {
          id: "a1",
          type: "listen_repeat",
          instruction: "Listen and repeat this phone greeting.",
          content: "Hello?",
          expectedAnswers: ["hello"],
          hint: "Say this when you answer the phone.",
          image: "https://via.placeholder.com/400x200?text=Hello",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a2",
          type: "listen_repeat",
          instruction: "Listen and repeat this phone greeting.",
          content: "Hello, this is Riya speaking.",
          expectedAnswers: ["hello this is riya speaking"],
          hint: "Introduce yourself on the phone.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Riya",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a3",
          type: "read_aloud",
          instruction: "Read this phone greeting aloud.",
          content: "Hello, is that Ravi?",
          expectedAnswers: ["hello is that ravi"],
          hint: "Ask if you are speaking to the right person.",
          image: "https://via.placeholder.com/400x200?text=Is+That+Ravi"
        },
        {
          id: "a4",
          type: "multiple_choice",
          instruction: "Choose the correct way to answer the phone.",
          content: "What do you say when you answer the phone?",
          options: ["Hello?", "Goodbye", "Thank you"],
          expectedAnswers: ["hello"],
          hint: "Say 'Hello'.",
          image: "https://via.placeholder.com/400x200?text=Hello"
        },
        {
          id: "a5",
          type: "sentence_completion",
          instruction: "Complete the phone greeting.",
          content: "Hello, this ______ Riya speaking.",
          expectedAnswers: ["is"],
          hint: "Use 'is'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Riya"
        },
        {
          id: "a6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Is that ______?",
          expectedAnswers: ["ravi", "riya", "anjali", "rohan"],
          hint: "Say a name.",
          image: "https://via.placeholder.com/400x200?text=Is+That+Ravi"
        },
        {
          id: "a7",
          type: "spell_word",
          instruction: "Spell the word 'hello'.",
          content: "hello",
          expectedAnswers: ["hello", "h-e-l-l-o"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Hello"
        },
        {
          id: "a8",
          type: "listen_repeat",
          instruction: "Listen and repeat this phone dialogue.",
          content: "Hello? Hello, is that Riya? Yes, this is Riya.",
          expectedAnswers: ["hello hello is that riya yes this is riya"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Phone+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a9",
          type: "read_aloud",
          instruction: "Read this phone dialogue aloud.",
          content: "Hello? Hi! Is that Anjali? Speaking.",
          expectedAnswers: ["hello hi is that anjali speaking"],
          hint: "Answer and confirm.",
          image: "https://via.placeholder.com/400x200?text=Is+That+Anjali"
        },
        {
          id: "a10",
          type: "multiple_choice",
          instruction: "Choose the correct way to introduce yourself on the phone.",
          content: "How do you introduce yourself on the phone?",
          options: ["This is Riya speaking", "I am Riya", "Riya here"],
          expectedAnswers: ["this is riya speaking"],
          hint: "Use 'This is... speaking'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Riya+Speaking"
        },
        {
          id: "a11",
          type: "spell_word",
          instruction: "Spell the word 'speaking'.",
          content: "speaking",
          expectedAnswers: ["speaking", "s-p-e-a-k-i-n-g"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Speaking"
        },
        {
          id: "a12",
          type: "sentence_completion",
          instruction: "Complete the greeting.",
          content: "Hello, ______ is Ravi.",
          expectedAnswers: ["this"],
          hint: "Use 'this'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Ravi"
        },
        {
          id: "a13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "May I speak to Riya, please?",
          expectedAnswers: ["may i speak to riya please", "may i speak to riya please?"],
          hint: "Ask to speak to someone.",
          image: "https://via.placeholder.com/400x200?text=May+I+Speak+to+Riya",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Could I speak to the manager?",
          expectedAnswers: ["could i speak to the manager", "could i speak to the manager?"],
          hint: "Ask to speak to the manager.",
          image: "https://via.placeholder.com/400x200?text=Speak+to+Manager"
        },
        {
          id: "a15",
          type: "revision",
          instruction: "Practise phone greetings.",
          content: "Hello? This is Riya. Is that Ravi?",
          expectedAnswers: ["hello this is riya is that ravi"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Phone+Greetings"
        },
        {
          id: "a16",
          type: "challenge_question",
          instruction: "How do you answer the phone?",
          content: "Say the phone greeting.",
          expectedAnswers: ["hello", "hello?"],
          hint: "Say 'Hello?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Answer+Phone"
        }
      ]
    },
    {
      id: 2,
      title: "Asking for Someone",
      description: "Learn to ask to speak to someone on the phone.",
      activities: [
        {
          id: "b1",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "May I speak to Riya, please?",
          expectedAnswers: ["may i speak to riya please", "may i speak to riya please?"],
          hint: "Ask to speak to Riya.",
          image: "https://via.placeholder.com/400x200?text=May+I+Speak+to+Riya",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b2",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Could I speak to the manager, please?",
          expectedAnswers: ["could i speak to the manager please", "could i speak to the manager please?"],
          hint: "Ask to speak to the manager.",
          image: "https://via.placeholder.com/400x200?text=Speak+to+Manager",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b3",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Is Riya there, please?",
          expectedAnswers: ["is riya there please", "is riya there please?"],
          hint: "Ask if someone is there.",
          image: "https://via.placeholder.com/400x200?text=Is+Riya+There"
        },
        {
          id: "b4",
          type: "multiple_choice",
          instruction: "Choose the correct way to ask for someone.",
          content: "How do you ask to speak to someone?",
          options: ["May I speak to Riya?", "I want Riya", "Riya here"],
          expectedAnswers: ["may i speak to riya"],
          hint: "Use 'May I speak to'.",
          image: "https://via.placeholder.com/400x200?text=May+I+Speak+to"
        },
        {
          id: "b5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "May I ______ to Riya?",
          expectedAnswers: ["speak"],
          hint: "Use 'speak'.",
          image: "https://via.placeholder.com/400x200?text=May+I+Speak+to+Riya"
        },
        {
          id: "b6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Could I speak to the ______, please?",
          expectedAnswers: ["manager", "doctor", "teacher"],
          hint: "Say a person.",
          image: "https://via.placeholder.com/400x200?text=Speak+to+Manager"
        },
        {
          id: "b7",
          type: "spell_word",
          instruction: "Spell the word 'manager'.",
          content: "manager",
          expectedAnswers: ["manager", "m-a-n-a-g-e-r"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Manager"
        },
        {
          id: "b8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Hello, may I speak to Riya? Just a moment, please.",
          expectedAnswers: ["hello may i speak to riya just a moment please"],
          hint: "Ask and respond.",
          image: "https://via.placeholder.com/400x200?text=Just+a+Moment",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Could I speak to the doctor, please? Who's calling, please?",
          expectedAnswers: ["could i speak to the doctor please who's calling please"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Whos+Calling"
        },
        {
          id: "b10",
          type: "multiple_choice",
          instruction: "Choose the correct response when someone asks for someone.",
          content: "Someone asks to speak to Riya. What do you say?",
          options: ["Just a moment", "Goodbye", "Thank you"],
          expectedAnswers: ["just a moment"],
          hint: "Say 'Just a moment'.",
          image: "https://via.placeholder.com/400x200?text=Just+a+Moment"
        },
        {
          id: "b11",
          type: "spell_word",
          instruction: "Spell the word 'moment'.",
          content: "moment",
          expectedAnswers: ["moment", "m-o-m-e-n-t"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Moment"
        },
        {
          id: "b12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ I speak to Riya?",
          expectedAnswers: ["may", "could"],
          hint: "Use 'May' or 'Could'.",
          image: "https://via.placeholder.com/400x200?text=May+I+Speak+to+Riya"
        },
        {
          id: "b13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Is Rohan there, please?",
          expectedAnswers: ["is rohan there please", "is rohan there please?"],
          hint: "Ask if Rohan is there.",
          image: "https://via.placeholder.com/400x200?text=Is+Rohan+There",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Is this the right number for Riya?",
          expectedAnswers: ["is this the right number for riya", "is this the right number for riya?"],
          hint: "Check if you have the right number.",
          image: "https://via.placeholder.com/400x200?text=Right+Number"
        },
        {
          id: "b15",
          type: "revision",
          instruction: "Practise asking for someone.",
          content: "May I speak to Riya? Could I speak to the manager? Is Rohan there?",
          expectedAnswers: ["may i speak to riya could i speak to the manager is rohan there"],
          hint: "Ask all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Ask+for+Someone"
        },
        {
          id: "b16",
          type: "challenge_question",
          instruction: "Ask to speak to Riya on the phone.",
          content: "Say the question.",
          expectedAnswers: ["may i speak to riya", "may i speak to riya please"],
          hint: "Say 'May I speak to Riya?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Speak+to+Riya"
        }
      ]
    },
    {
      id: 3,
      title: "Saying Who Is Calling",
      description: "Learn to say who is calling and ask who is calling.",
      activities: [
        {
          id: "c1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "This is Ravi calling.",
          expectedAnswers: ["this is ravi calling"],
          hint: "Say who is calling.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Ravi+Calling",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c2",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Who's calling, please?",
          expectedAnswers: ["who's calling please", "who is calling please", "who's calling please?"],
          hint: "Ask who is calling.",
          image: "https://via.placeholder.com/400x200?text=Whos+Calling",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c3",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Hello, this is Riya. Could I speak to Ravi?",
          expectedAnswers: ["hello this is riya could i speak to ravi"],
          hint: "Introduce yourself and ask.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Riya"
        },
        {
          id: "c4",
          type: "multiple_choice",
          instruction: "Choose the correct way to say who is calling.",
          content: "How do you say who is calling?",
          options: ["This is Riya calling", "I am Riya", "Riya here"],
          expectedAnswers: ["this is riya calling"],
          hint: "Use 'This is... calling'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Riya+Calling"
        },
        {
          id: "c5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "This is Riya ______.",
          expectedAnswers: ["calling"],
          hint: "Use 'calling'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Riya+Calling"
        },
        {
          id: "c6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ calling, please?",
          expectedAnswers: ["who's", "who is"],
          hint: "Use 'Who's'.",
          image: "https://via.placeholder.com/400x200?text=Whos+Calling"
        },
        {
          id: "c7",
          type: "spell_word",
          instruction: "Spell the word 'calling'.",
          content: "calling",
          expectedAnswers: ["calling", "c-a-l-l-i-n-g"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Calling"
        },
        {
          id: "c8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Hello? Hello, this is Riya calling. Who's calling, please?",
          expectedAnswers: ["hello hello this is riya calling who's calling please"],
          hint: "Practice the exchange.",
          image: "https://via.placeholder.com/400x200?text=Whos+Calling+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "May I speak to Ravi? Who's calling? This is Anjali.",
          expectedAnswers: ["may i speak to ravi who's calling this is anjali"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Anjali"
        },
        {
          id: "c10",
          type: "multiple_choice",
          instruction: "Choose the correct response when someone asks who is calling.",
          content: "Someone asks 'Who's calling?' What do you say?",
          options: ["This is Riya", "I am fine", "Thank you"],
          expectedAnswers: ["this is riya"],
          hint: "Say who you are.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Riya"
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
          instruction: "Complete the sentence.",
          content: "This is ______ calling.",
          expectedAnswers: ["riya", "ravi", "anjali", "rohan"],
          hint: "Say a name.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Blank+Calling"
        },
        {
          id: "c13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Could I ask who is calling?",
          expectedAnswers: ["could i ask who is calling", "could i ask who is calling?"],
          hint: "Ask politely who is calling.",
          image: "https://via.placeholder.com/400x200?text=Could+I+Ask",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "May I know who's calling, please?",
          expectedAnswers: ["may i know who's calling please", "may i know who's calling please?"],
          hint: "Ask politely.",
          image: "https://via.placeholder.com/400x200?text=May+I+Know"
        },
        {
          id: "c15",
          type: "revision",
          instruction: "Practise saying who is calling.",
          content: "This is Riya calling. Who's calling? This is Ravi.",
          expectedAnswers: ["this is riya calling who's calling this is ravi"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Caller+ID"
        },
        {
          id: "c16",
          type: "challenge_question",
          instruction: "Say who is calling.",
          content: "Say 'This is [your name] calling'.",
          expectedAnswers: ["this is calling"],
          hint: "Say 'This is... calling'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+This+Is+Calling"
        }
      ]
    },
    {
      id: 4,
      title: "Asking Someone to Wait",
      description: "Learn to ask someone to wait on the phone.",
      activities: [
        {
          id: "d1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Hold on, please.",
          expectedAnswers: ["hold on please"],
          hint: "Ask someone to wait.",
          image: "https://via.placeholder.com/400x200?text=Hold+On+Please",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Just a moment, please.",
          expectedAnswers: ["just a moment please"],
          hint: "Ask someone to wait.",
          image: "https://via.placeholder.com/400x200?text=Just+a+Moment",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "Please hold, I'll get her for you.",
          expectedAnswers: ["please hold i'll get her for you"],
          hint: "Ask to wait and offer to get someone.",
          image: "https://via.placeholder.com/400x200?text=Please+Hold"
        },
        {
          id: "d4",
          type: "multiple_choice",
          instruction: "Choose the correct way to ask someone to wait.",
          content: "How do you ask someone to wait on the phone?",
          options: ["Hold on", "Go away", "Talk later"],
          expectedAnswers: ["hold on"],
          hint: "Say 'Hold on'.",
          image: "https://via.placeholder.com/400x200?text=Hold+On"
        },
        {
          id: "d5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "______ on, please.",
          expectedAnswers: ["hold"],
          hint: "Use 'Hold'.",
          image: "https://via.placeholder.com/400x200?text=Hold+On"
        },
        {
          id: "d6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Just a ______, please.",
          expectedAnswers: ["moment"],
          hint: "Use 'moment'.",
          image: "https://via.placeholder.com/400x200?text=Just+a+Moment"
        },
        {
          id: "d7",
          type: "spell_word",
          instruction: "Spell the word 'hold'.",
          content: "hold",
          expectedAnswers: ["hold", "h-o-l-d"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Hold"
        },
        {
          id: "d8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Hold on, please. I'll call her. Thank you.",
          expectedAnswers: ["hold on please i'll call her thank you"],
          hint: "Practice the exchange.",
          image: "https://via.placeholder.com/400x200?text=Hold+On+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Just a moment, please. I'll get him. Thanks.",
          expectedAnswers: ["just a moment please i'll get him thanks"],
          hint: "Ask to wait.",
          image: "https://via.placeholder.com/400x200?text=Just+a+Moment+Dialogue"
        },
        {
          id: "d10",
          type: "multiple_choice",
          instruction: "Choose the correct response when someone asks to wait.",
          content: "Someone says 'Hold on.' What do you say?",
          options: ["Okay", "Goodbye", "Thank you"],
          expectedAnswers: ["okay"],
          hint: "Agree to wait.",
          image: "https://via.placeholder.com/400x200?text=Okay"
        },
        {
          id: "d11",
          type: "spell_word",
          instruction: "Spell the word 'moment'.",
          content: "moment",
          expectedAnswers: ["moment", "m-o-m-e-n-t"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Moment"
        },
        {
          id: "d12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Please ______, I'll get her.",
          expectedAnswers: ["hold", "wait"],
          hint: "Use 'hold' or 'wait'.",
          image: "https://via.placeholder.com/400x200?text=Please+Hold"
        },
        {
          id: "d13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can you hold for a moment?",
          expectedAnswers: ["can you hold for a moment", "can you hold for a moment?"],
          hint: "Ask someone to wait.",
          image: "https://via.placeholder.com/400x200?text=Can+You+Hold",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d14",
          type: "read_aloud",
          instruction: "Read this question aloud.",
          content: "Would you mind holding?",
          expectedAnswers: ["would you mind holding", "would you mind holding?"],
          hint: "Ask very politely.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Mind+Holding"
        },
        {
          id: "d15",
          type: "revision",
          instruction: "Practise asking someone to wait.",
          content: "Hold on. Just a moment. Please hold.",
          expectedAnswers: ["hold on just a moment please hold"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Hold+On"
        },
        {
          id: "d16",
          type: "challenge_question",
          instruction: "Ask someone to wait on the phone.",
          content: "Say 'Hold on, please'.",
          expectedAnswers: ["hold on please"],
          hint: "Say 'Hold on, please'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Hold+On"
        }
      ]
    },
    {
      id: 5,
      title: "Person Not Available",
      description: "Learn to say someone is not available.",
      activities: [
        {
          id: "e1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I'm sorry, she's not here right now.",
          expectedAnswers: ["i'm sorry she's not here right now", "i am sorry she is not here right now"],
          hint: "Say she is not available.",
          image: "https://via.placeholder.com/400x200?text=She's+Not+Here",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "He's not available at the moment.",
          expectedAnswers: ["he's not available at the moment", "he is not available at the moment"],
          hint: "Say he is not available.",
          image: "https://via.placeholder.com/400x200?text=Not+Available",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "She's in a meeting right now.",
          expectedAnswers: ["she's in a meeting right now", "she is in a meeting right now"],
          hint: "Say she is busy.",
          image: "https://via.placeholder.com/400x200?text=In+a+Meeting"
        },
        {
          id: "e4",
          type: "multiple_choice",
          instruction: "Choose the correct way to say someone is not available.",
          content: "How do you say someone is not available?",
          options: ["She's not here", "She is here", "She is fine"],
          expectedAnswers: ["she's not here"],
          hint: "Use 'not here'.",
          image: "https://via.placeholder.com/400x200?text=She's+Not+Here"
        },
        {
          id: "e5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'm sorry, he's ______ right now.",
          expectedAnswers: ["not here", "busy", "not available"],
          hint: "Say he is not available.",
          image: "https://via.placeholder.com/400x200?text=He's+Not+Here"
        },
        {
          id: "e6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "She's in a ______ right now.",
          expectedAnswers: ["meeting", "call", "class"],
          hint: "Say she is busy.",
          image: "https://via.placeholder.com/400x200?text=In+a+Meeting"
        },
        {
          id: "e7",
          type: "spell_word",
          instruction: "Spell the word 'available'.",
          content: "available",
          expectedAnswers: ["available", "a-v-a-i-l-a-b-l-e"],
          hint: "It has nine letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Available"
        },
        {
          id: "e8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Could I speak to Riya? I'm sorry, she's not here right now.",
          expectedAnswers: ["could i speak to riya i'm sorry she's not here right now"],
          hint: "Ask and respond.",
          image: "https://via.placeholder.com/400x200?text=Not+Here+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "May I speak to Ravi? He's not available at the moment.",
          expectedAnswers: ["may i speak to ravi he's not available at the moment"],
          hint: "Ask and respond.",
          image: "https://via.placeholder.com/400x200?text=Not+Available+Dialogue"
        },
        {
          id: "e10",
          type: "multiple_choice",
          instruction: "Choose the correct response when someone is not available.",
          content: "Someone asks for Riya but she is not here. What do you say?",
          options: ["She's not here", "She is here", "Thank you"],
          expectedAnswers: ["she's not here"],
          hint: "Say she is not here.",
          image: "https://via.placeholder.com/400x200?text=She's+Not+Here"
        },
        {
          id: "e11",
          type: "spell_word",
          instruction: "Spell the word 'meeting'.",
          content: "meeting",
          expectedAnswers: ["meeting", "m-e-e-t-i-n-g"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Meeting"
        },
        {
          id: "e12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'm sorry, she's ______.",
          expectedAnswers: ["not here", "busy", "not available"],
          hint: "Say she is not available.",
          image: "https://via.placeholder.com/400x200?text=She's+Blank"
        },
        {
          id: "e13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "When will she be back?",
          expectedAnswers: ["when will she be back", "when will she be back?"],
          hint: "Ask when someone will return.",
          image: "https://via.placeholder.com/400x200?text=When+Will+She+Be+Back",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "When will she be back? She'll be back in an hour.",
          expectedAnswers: ["when will she be back she'll be back in an hour"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Back+in+an+Hour"
        },
        {
          id: "e15",
          type: "revision",
          instruction: "Practise saying someone is not available.",
          content: "She's not here. He's not available. She's in a meeting.",
          expectedAnswers: ["she's not here he's not available she's in a meeting"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Not+Available"
        },
        {
          id: "e16",
          type: "challenge_question",
          instruction: "Say Riya is not available.",
          content: "Say the sentence.",
          expectedAnswers: ["riya is not here", "riya is not available"],
          hint: "Say 'Riya is not here'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Riya+Not+Here"
        }
      ]
    },
    {
      id: 6,
      title: "Leaving a Message",
      description: "Learn to leave a message for someone.",
      activities: [
        {
          id: "f1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Can I leave a message?",
          expectedAnswers: ["can i leave a message", "can i leave a message?"],
          hint: "Ask to leave a message.",
          image: "https://via.placeholder.com/400x200?text=Leave+a+Message",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Could I leave a message for her?",
          expectedAnswers: ["could i leave a message for her", "could i leave a message for her?"],
          hint: "Ask to leave a message for someone.",
          image: "https://via.placeholder.com/400x200?text=Message+for+Her",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "Can I take a message for him?",
          expectedAnswers: ["can i take a message for him", "can i take a message for him?"],
          hint: "Offer to take a message.",
          image: "https://via.placeholder.com/400x200?text=Take+a+Message"
        },
        {
          id: "f4",
          type: "multiple_choice",
          instruction: "Choose the correct way to ask to leave a message.",
          content: "How do you ask to leave a message?",
          options: ["Can I leave a message?", "I want a message", "Message please"],
          expectedAnswers: ["can i leave a message"],
          hint: "Use 'Can I leave a message?'",
          image: "https://via.placeholder.com/400x200?text=Can+I+Leave+a+Message"
        },
        {
          id: "f5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Can I ______ a message?",
          expectedAnswers: ["leave"],
          hint: "Use 'leave'.",
          image: "https://via.placeholder.com/400x200?text=Leave+a+Message"
        },
        {
          id: "f6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Could I leave a message ______ her?",
          expectedAnswers: ["for"],
          hint: "Use 'for'.",
          image: "https://via.placeholder.com/400x200?text=Message+for+Her"
        },
        {
          id: "f7",
          type: "spell_word",
          instruction: "Spell the word 'message'.",
          content: "message",
          expectedAnswers: ["message", "m-e-s-s-a-g-e"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Message"
        },
        {
          id: "f8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Can I leave a message? Of course, please.",
          expectedAnswers: ["can i leave a message of course please"],
          hint: "Ask and respond.",
          image: "https://via.placeholder.com/400x200?text=Leave+Message+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Could I leave a message for Ravi? Sure, what is it?",
          expectedAnswers: ["could i leave a message for ravi sure what is it"],
          hint: "Ask and respond.",
          image: "https://via.placeholder.com/400x200?text=Message+for+Ravi"
        },
        {
          id: "f10",
          type: "multiple_choice",
          instruction: "Choose the correct response when someone asks to leave a message.",
          content: "Someone asks to leave a message. What do you say?",
          options: ["Of course", "Goodbye", "Thank you"],
          expectedAnswers: ["of course"],
          hint: "Say 'Of course'.",
          image: "https://via.placeholder.com/400x200?text=Of+Course"
        },
        {
          id: "f11",
          type: "spell_word",
          instruction: "Spell the word 'leave'.",
          content: "leave",
          expectedAnswers: ["leave", "l-e-a-v-e"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Leave"
        },
        {
          id: "f12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ I leave a message?",
          expectedAnswers: ["can", "could"],
          hint: "Use 'Can' or 'Could'.",
          image: "https://via.placeholder.com/400x200?text=Can+I+Leave+a+Message"
        },
        {
          id: "f13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Would you like to leave a message?",
          expectedAnswers: ["would you like to leave a message", "would you like to leave a message?"],
          hint: "Offer to take a message.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+to+Leave",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "Would you like to leave a message? Yes, please tell her I called.",
          expectedAnswers: ["would you like to leave a message yes please tell her i called"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Tell+Her+I+Called"
        },
        {
          id: "f15",
          type: "revision",
          instruction: "Practise leaving a message.",
          content: "Can I leave a message? Could I leave a message for her?",
          expectedAnswers: ["can i leave a message could i leave a message for her"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Leave+Message"
        },
        {
          id: "f16",
          type: "challenge_question",
          instruction: "Ask to leave a message for Riya.",
          content: "Say the question.",
          expectedAnswers: ["can i leave a message for riya", "could i leave a message for riya"],
          hint: "Say 'Can I leave a message for Riya?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Message+for+Riya"
        }
      ]
    },
    {
      id: 7,
      title: "Taking a Message",
      description: "Learn to take a message for someone.",
      activities: [
        {
          id: "g1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Can I take a message?",
          expectedAnswers: ["can i take a message", "can i take a message?"],
          hint: "Offer to take a message.",
          image: "https://via.placeholder.com/400x200?text=Take+a+Message",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "What message would you like to leave?",
          expectedAnswers: ["what message would you like to leave", "what message would you like to leave?"],
          hint: "Ask for the message.",
          image: "https://via.placeholder.com/400x200?text=What+Message",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I'll make sure she gets your message.",
          expectedAnswers: ["i'll make sure she gets your message"],
          hint: "Promise to pass the message.",
          image: "https://via.placeholder.com/400x200?text=I'll+Make+Sure"
        },
        {
          id: "g4",
          type: "multiple_choice",
          instruction: "Choose the correct way to offer to take a message.",
          content: "How do you offer to take a message?",
          options: ["Can I take a message?", "I want a message", "Message please"],
          expectedAnswers: ["can i take a message"],
          hint: "Use 'Can I take a message?'",
          image: "https://via.placeholder.com/400x200?text=Can+I+Take+a+Message"
        },
        {
          id: "g5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Can I ______ a message?",
          expectedAnswers: ["take"],
          hint: "Use 'take'.",
          image: "https://via.placeholder.com/400x200?text=Take+a+Message"
        },
        {
          id: "g6",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "What message would you ______ to leave?",
          expectedAnswers: ["like"],
          hint: "Use 'like'.",
          image: "https://via.placeholder.com/400x200?text=What+Message+Would+You+Like"
        },
        {
          id: "g7",
          type: "spell_word",
          instruction: "Spell the word 'take'.",
          content: "take",
          expectedAnswers: ["take", "t-a-k-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Take"
        },
        {
          id: "g8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Can I take a message? Yes, please. Tell him I called.",
          expectedAnswers: ["can i take a message yes please tell him i called"],
          hint: "Offer and give message.",
          image: "https://via.placeholder.com/400x200?text=Tell+Him+I+Called",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "What message would you like to leave? Please tell her to call me back.",
          expectedAnswers: ["what message would you like to leave please tell her to call me back"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Call+Me+Back"
        },
        {
          id: "g10",
          type: "multiple_choice",
          instruction: "Choose the correct response when taking a message.",
          content: "Someone wants to leave a message. What do you ask?",
          options: ["What message would you like to leave?", "How are you?", "Thank you"],
          expectedAnswers: ["what message would you like to leave"],
          hint: "Ask for the message.",
          image: "https://via.placeholder.com/400x200?text=What+Message"
        },
        {
          id: "g11",
          type: "spell_word",
          instruction: "Spell the word 'would'.",
          content: "would",
          expectedAnswers: ["would", "w-o-u-l-d"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Would"
        },
        {
          id: "g12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ message would you like to leave?",
          expectedAnswers: ["what"],
          hint: "Use 'What'.",
          image: "https://via.placeholder.com/400x200?text=What+Message"
        },
        {
          id: "g13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Would you like to leave a message?",
          expectedAnswers: ["would you like to leave a message", "would you like to leave a message?"],
          hint: "Offer to take a message.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like+to+Leave+Message",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "Would you like to leave a message? Yes, tell her I called.",
          expectedAnswers: ["would you like to leave a message yes tell her i called"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Tell+Her+I+Called"
        },
        {
          id: "g15",
          type: "revision",
          instruction: "Practise taking a message.",
          content: "Can I take a message? What message would you like to leave?",
          expectedAnswers: ["can i take a message what message would you like to leave"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Take+Message"
        },
        {
          id: "g16",
          type: "challenge_question",
          instruction: "Offer to take a message.",
          content: "Say 'Can I take a message?'",
          expectedAnswers: ["can i take a message", "can i take a message?"],
          hint: "Say 'Can I take a message?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Take+Message"
        }
      ]
    },
    {
      id: 8,
      title: "Leaving a Voicemail",
      description: "Learn to leave a message on voicemail.",
      activities: [
        {
          id: "h1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Hello, this is Riya. Please call me back.",
          expectedAnswers: ["hello this is riya please call me back"],
          hint: "Leave a voicemail message.",
          image: "https://via.placeholder.com/400x200?text=Please+Call+Me+Back",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Hi, I'm calling about the meeting.",
          expectedAnswers: ["hi i'm calling about the meeting", "hi i am calling about the meeting"],
          hint: "Say why you are calling.",
          image: "https://via.placeholder.com/400x200?text=Calling+About+Meeting",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h3",
          type: "read_aloud",
          instruction: "Read this voicemail message aloud.",
          content: "Hello, this is Ravi. I'll call again later.",
          expectedAnswers: ["hello this is ravi i'll call again later"],
          hint: "Leave a voicemail.",
          image: "https://via.placeholder.com/400x200?text=Call+Again+Later"
        },
        {
          id: "h4",
          type: "multiple_choice",
          instruction: "Choose the correct way to leave a voicemail.",
          content: "How do you leave a voicemail?",
          options: ["This is Riya. Call me back.", "I am Riya", "Hello"],
          expectedAnswers: ["this is riya call me back"],
          hint: "Say who you are and what you want.",
          image: "https://via.placeholder.com/400x200?text=Call+Me+Back"
        },
        {
          id: "h5",
          type: "sentence_completion",
          instruction: "Complete the voicemail.",
          content: "Hello, this is ______.",
          expectedAnswers: ["riya", "ravi", "anjali"],
          hint: "Say your name.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Blank"
        },
        {
          id: "h6",
          type: "sentence_completion",
          instruction: "Complete the voicemail.",
          content: "Please call me ______.",
          expectedAnswers: ["back"],
          hint: "Use 'back'.",
          image: "https://via.placeholder.com/400x200?text=Call+Me+Back"
        },
        {
          id: "h7",
          type: "spell_word",
          instruction: "Spell the word 'voicemail'.",
          content: "voicemail",
          expectedAnswers: ["voicemail", "v-o-i-c-e-m-a-i-l"],
          hint: "It has nine letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Voicemail"
        },
        {
          id: "h8",
          type: "listen_repeat",
          instruction: "Listen and repeat this voicemail.",
          content: "Hello, this is Riya. I'm calling about the project. Please call me back on my number.",
          expectedAnswers: ["hello this is riya i'm calling about the project please call me back on my number"],
          hint: "Leave a detailed voicemail.",
          image: "https://via.placeholder.com/400x200?text=Project+Call+Back",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h9",
          type: "read_aloud",
          instruction: "Read this voicemail aloud.",
          content: "Hi, this is Ravi. I'll try again later. Thanks.",
          expectedAnswers: ["hi this is ravi i'll try again later thanks"],
          hint: "Leave a short voicemail.",
          image: "https://via.placeholder.com/400x200?text=Try+Again+Later"
        },
        {
          id: "h10",
          type: "multiple_choice",
          instruction: "Choose the correct thing to include in a voicemail.",
          content: "What should you always say in a voicemail?",
          options: ["Your name", "Your age", "Your address"],
          expectedAnswers: ["your name"],
          hint: "Tell them who you are.",
          image: "https://via.placeholder.com/400x200?text=Your+Name"
        },
        {
          id: "h11",
          type: "spell_word",
          instruction: "Spell the word 'project'.",
          content: "project",
          expectedAnswers: ["project", "p-r-o-j-e-c-t"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Project"
        },
        {
          id: "h12",
          type: "sentence_completion",
          instruction: "Complete the voicemail.",
          content: "I'm calling ______ the meeting.",
          expectedAnswers: ["about"],
          hint: "Use 'about'.",
          image: "https://via.placeholder.com/400x200?text=Calling+About+Meeting"
        },
        {
          id: "h13",
          type: "listen_repeat",
          instruction: "Listen and repeat this voicemail.",
          content: "Please leave a message after the beep.",
          expectedAnswers: ["please leave a message after the beep"],
          hint: "The voicemail greeting.",
          image: "https://via.placeholder.com/400x200?text=Leave+Message+After+Beep",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h14",
          type: "read_aloud",
          instruction: "Read this voicemail greeting aloud.",
          content: "You have reached Riya's voicemail. Please leave a message.",
          expectedAnswers: ["you have reached riya's voicemail please leave a message"],
          hint: "The voicemail greeting.",
          image: "https://via.placeholder.com/400x200?text=You+Have+Reached"
        },
        {
          id: "h15",
          type: "revision",
          instruction: "Practise leaving a voicemail.",
          content: "This is Riya. Please call me back. I'm calling about the project.",
          expectedAnswers: ["this is riya please call me back i'm calling about the project"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Voicemail"
        },
        {
          id: "h16",
          type: "challenge_question",
          instruction: "Leave a voicemail message.",
          content: "Say 'This is Riya. Call me back.'",
          expectedAnswers: ["this is riya call me back"],
          hint: "Say 'This is Riya. Call me back.'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Voicemail"
        }
      ]
    },
    {
      id: 9,
      title: "Making a Call",
      description: "Learn to make a complete phone call.",
      activities: [
        {
          id: "i1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I need to make a call.",
          expectedAnswers: ["i need to make a call"],
          hint: "Say you need to call.",
          image: "https://via.placeholder.com/400x200?text=Make+a+Call",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I'm calling to confirm my appointment.",
          expectedAnswers: ["i'm calling to confirm my appointment", "i am calling to confirm my appointment"],
          hint: "Say why you are calling.",
          image: "https://via.placeholder.com/400x200?text=Confirm+Appointment",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I'm calling to ask about the homework.",
          expectedAnswers: ["i'm calling to ask about the homework", "i am calling to ask about the homework"],
          hint: "Say why you are calling.",
          image: "https://via.placeholder.com/400x200?text=Ask+About+Homework"
        },
        {
          id: "i4",
          type: "multiple_choice",
          instruction: "Choose the correct way to say why you are calling.",
          content: "How do you say why you are calling?",
          options: ["I'm calling about...", "I am here", "Thank you"],
          expectedAnswers: ["i'm calling about"],
          hint: "Use 'I'm calling about'.",
          image: "https://via.placeholder.com/400x200?text=Calling+About"
        },
        {
          id: "i5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'm ______ to confirm my appointment.",
          expectedAnswers: ["calling"],
          hint: "Use 'calling'.",
          image: "https://via.placeholder.com/400x200?text=Calling+to+Confirm"
        },
        {
          id: "i6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'm calling to ______ about the homework.",
          expectedAnswers: ["ask"],
          hint: "Use 'ask'.",
          image: "https://via.placeholder.com/400x200?text=Ask+About+Homework"
        },
        {
          id: "i7",
          type: "spell_word",
          instruction: "Spell the word 'confirm'.",
          content: "confirm",
          expectedAnswers: ["confirm", "c-o-n-f-i-r-m"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Confirm"
        },
        {
          id: "i8",
          type: "listen_repeat",
          instruction: "Listen and repeat this call dialogue.",
          content: "Hello, this is Riya. I'm calling about the meeting.",
          expectedAnswers: ["hello this is riya i'm calling about the meeting"],
          hint: "Make a call.",
          image: "https://via.placeholder.com/400x200?text=Call+About+Meeting",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i9",
          type: "read_aloud",
          instruction: "Read this call dialogue aloud.",
          content: "Hello? Hello, this is Ravi. Could I speak to Riya, please?",
          expectedAnswers: ["hello hello this is ravi could i speak to riya please"],
          hint: "Make a call and ask for someone.",
          image: "https://via.placeholder.com/400x200?text=Speak+to+Riya"
        },
        {
          id: "i10",
          type: "multiple_choice",
          instruction: "Choose the correct way to start a call.",
          content: "How do you start a phone call?",
          options: ["Hello, this is Riya", "I am Riya", "Riya here"],
          expectedAnswers: ["hello this is riya"],
          hint: "Say 'Hello, this is...'",
          image: "https://via.placeholder.com/400x200?text=Hello+This+Is+Riya"
        },
        {
          id: "i11",
          type: "spell_word",
          instruction: "Spell the word 'call'.",
          content: "call",
          expectedAnswers: ["call", "c-a-l-l"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Call"
        },
        {
          id: "i12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'm calling ______ ask about the test.",
          expectedAnswers: ["to"],
          hint: "Use 'to'.",
          image: "https://via.placeholder.com/400x200?text=Calling+to+Ask"
        },
        {
          id: "i13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What time is the meeting?",
          expectedAnswers: ["what time is the meeting", "what time is the meeting?"],
          hint: "Ask for information.",
          image: "https://via.placeholder.com/400x200?text=What+Time+Meeting",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time is the meeting? It's at 3 o'clock.",
          expectedAnswers: ["what time is the meeting it's at 3 o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Meeting+at+3"
        },
        {
          id: "i15",
          type: "revision",
          instruction: "Practise making a call.",
          content: "Hello, this is Riya. I'm calling about the meeting.",
          expectedAnswers: ["hello this is riya i'm calling about the meeting"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+Making+Call"
        },
        {
          id: "i16",
          type: "challenge_question",
          instruction: "Make a call to ask about homework.",
          content: "Say the sentence.",
          expectedAnswers: ["hello this is calling about the homework"],
          hint: "Say 'Hello, this is... I'm calling about the homework.'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Call+Homework"
        }
      ]
    },
    {
      id: 10,
      title: "Ending a Phone Call",
      description: "Learn to end a phone call politely.",
      activities: [
        {
          id: "j1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Thank you for calling.",
          expectedAnswers: ["thank you for calling"],
          hint: "End a call politely.",
          image: "https://via.placeholder.com/400x200?text=Thank+You+for+Calling",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I'll talk to you later.",
          expectedAnswers: ["i'll talk to you later"],
          hint: "Say goodbye.",
          image: "https://via.placeholder.com/400x200?text=Talk+to+You+Later",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "Have a nice day!",
          expectedAnswers: ["have a nice day"],
          hint: "End the call politely.",
          image: "https://via.placeholder.com/400x200?text=Have+a+Nice+Day"
        },
        {
          id: "j4",
          type: "multiple_choice",
          instruction: "Choose the correct way to end a call.",
          content: "How do you end a call politely?",
          options: ["Thank you for calling", "Goodbye", "Both"],
          expectedAnswers: ["both"],
          hint: "Say thank you and goodbye.",
          image: "https://via.placeholder.com/400x200?text=Goodbye"
        },
        {
          id: "j5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Thank you for ______.",
          expectedAnswers: ["calling"],
          hint: "Use 'calling'.",
          image: "https://via.placeholder.com/400x200?text=Thank+You+for+Calling"
        },
        {
          id: "j6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'll ______ to you later.",
          expectedAnswers: ["talk"],
          hint: "Use 'talk'.",
          image: "https://via.placeholder.com/400x200?text=Talk+to+You+Later"
        },
        {
          id: "j7",
          type: "spell_word",
          instruction: "Spell the word 'goodbye'.",
          content: "goodbye",
          expectedAnswers: ["goodbye", "g-o-o-d-b-y-e"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Goodbye"
        },
        {
          id: "j8",
          type: "listen_repeat",
          instruction: "Listen and repeat this end call dialogue.",
          content: "Thank you for calling. Goodbye!",
          expectedAnswers: ["thank you for calling goodbye"],
          hint: "End a call.",
          image: "https://via.placeholder.com/400x200?text=Goodbye+Call",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j9",
          type: "read_aloud",
          instruction: "Read this end call dialogue aloud.",
          content: "I'll talk to you later. Have a nice day!",
          expectedAnswers: ["i'll talk to you later have a nice day"],
          hint: "End a call.",
          image: "https://via.placeholder.com/400x200?text=Nice+Day"
        },
        {
          id: "j10",
          type: "multiple_choice",
          instruction: "Choose the correct way to say goodbye.",
          content: "How do you say goodbye on the phone?",
          options: ["Goodbye", "Hello", "Thank you"],
          expectedAnswers: ["goodbye"],
          hint: "Say 'Goodbye'.",
          image: "https://via.placeholder.com/400x200?text=Goodbye"
        },
        {
          id: "j11",
          type: "spell_word",
          instruction: "Spell the word 'later'.",
          content: "later",
          expectedAnswers: ["later", "l-a-t-e-r"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Later"
        },
        {
          id: "j12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Have a ______ day!",
          expectedAnswers: ["nice", "great", "good"],
          hint: "Say an adjective.",
          image: "https://via.placeholder.com/400x200?text=Have+a+Nice+Day"
        },
        {
          id: "j13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Can I call you later?",
          expectedAnswers: ["can i call you later", "can i call you later?"],
          hint: "Ask to call later.",
          image: "https://via.placeholder.com/400x200?text=Call+You+Later",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "Can I call you later? Sure, I'll be available.",
          expectedAnswers: ["can i call you later sure i'll be available"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Sure+Available"
        },
        {
          id: "j15",
          type: "revision",
          instruction: "Practise ending a call.",
          content: "Thank you for calling. I'll talk to you later. Have a nice day!",
          expectedAnswers: ["thank you for calling i'll talk to you later have a nice day"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+End+Call"
        },
        {
          id: "j16",
          type: "challenge_question",
          instruction: "End a call politely.",
          content: "Say 'Thank you for calling. Goodbye!'",
          expectedAnswers: ["thank you for calling goodbye"],
          hint: "Say 'Thank you for calling. Goodbye!'",
          image: "https://via.placeholder.com/400x200?text=Challenge+End+Call"
        }
      ]
    },
    {
      id: 11,
      title: "Calling Back",
      description: "Learn to talk about calling back.",
      activities: [
        {
          id: "k1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I'll call you back later.",
          expectedAnswers: ["i'll call you back later"],
          hint: "Say you will call back.",
          image: "https://via.placeholder.com/400x200?text=Call+You+Back+Later",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Could you call me back?",
          expectedAnswers: ["could you call me back", "could you call me back?"],
          hint: "Ask someone to call you back.",
          image: "https://via.placeholder.com/400x200?text=Call+Me+Back",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I'll call you when I'm free.",
          expectedAnswers: ["i'll call you when i'm free", "i will call you when i am free"],
          hint: "Say you will call later.",
          image: "https://via.placeholder.com/400x200?text=Call+When+Free"
        },
        {
          id: "k4",
          type: "multiple_choice",
          instruction: "Choose the correct way to say you will call back.",
          content: "How do you say you will call back?",
          options: ["I'll call you back", "I call you", "Call me"],
          expectedAnswers: ["i'll call you back"],
          hint: "Use 'I'll call you back'.",
          image: "https://via.placeholder.com/400x200?text=I'll+Call+You+Back"
        },
        {
          id: "k5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'll call you ______ later.",
          expectedAnswers: ["back"],
          hint: "Use 'back'.",
          image: "https://via.placeholder.com/400x200?text=Call+You+Back+Later"
        },
        {
          id: "k6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Could you ______ me back?",
          expectedAnswers: ["call"],
          hint: "Use 'call'.",
          image: "https://via.placeholder.com/400x200?text=Call+Me+Back"
        },
        {
          id: "k7",
          type: "spell_word",
          instruction: "Spell the word 'back'.",
          content: "back",
          expectedAnswers: ["back", "b-a-c-k"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Back"
        },
        {
          id: "k8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "I'll call you back later. Okay, I'll wait.",
          expectedAnswers: ["i'll call you back later okay i'll wait"],
          hint: "Say you will call back.",
          image: "https://via.placeholder.com/400x200?text=Call+Back+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Could you call me back? Sure, I'll call you in five minutes.",
          expectedAnswers: ["could you call me back sure i'll call you in five minutes"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Call+in+Five+Minutes"
        },
        {
          id: "k10",
          type: "multiple_choice",
          instruction: "Choose the correct response when someone says they will call back.",
          content: "Someone says 'I'll call you back.' What do you say?",
          options: ["Okay", "Goodbye", "Thank you"],
          expectedAnswers: ["okay"],
          hint: "Say 'Okay'.",
          image: "https://via.placeholder.com/400x200?text=Okay"
        },
        {
          id: "k11",
          type: "spell_word",
          instruction: "Spell the word 'minute'.",
          content: "minute",
          expectedAnswers: ["minute", "m-i-n-u-t-e"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Minute"
        },
        {
          id: "k12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'll call you ______ I'm free.",
          expectedAnswers: ["when"],
          hint: "Use 'when'.",
          image: "https://via.placeholder.com/400x200?text=Call+When+Free"
        },
        {
          id: "k13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "When will you call back?",
          expectedAnswers: ["when will you call back", "when will you call back?"],
          hint: "Ask about callback time.",
          image: "https://via.placeholder.com/400x200?text=When+Will+You+Call+Back",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "When will you call back? I'll call you in an hour.",
          expectedAnswers: ["when will you call back i'll call you in an hour"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Call+in+an+Hour"
        },
        {
          id: "k15",
          type: "revision",
          instruction: "Practise talking about calling back.",
          content: "I'll call you back. Could you call me back? When will you call back?",
          expectedAnswers: ["i'll call you back could you call me back when will you call back"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Call+Back"
        },
        {
          id: "k16",
          type: "challenge_question",
          instruction: "Say you will call someone back later.",
          content: "Say the sentence.",
          expectedAnswers: ["i'll call you back later"],
          hint: "Say 'I'll call you back later'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Call+Back+Later"
        }
      ]
    },
    {
      id: 12,
      title: "Wrong Number",
      description: "Learn to handle wrong number calls.",
      activities: [
        {
          id: "l1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I think you have the wrong number.",
          expectedAnswers: ["i think you have the wrong number"],
          hint: "Say someone has the wrong number.",
          image: "https://via.placeholder.com/400x200?text=Wrong+Number",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I'm sorry, there's no one here by that name.",
          expectedAnswers: ["i'm sorry there's no one here by that name", "i am sorry there is no one here by that name"],
          hint: "Say the person is not there.",
          image: "https://via.placeholder.com/400x200?text=No+One+Here",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "Sorry, I must have dialled the wrong number.",
          expectedAnswers: ["sorry i must have dialled the wrong number"],
          hint: "Apologize for calling the wrong number.",
          image: "https://via.placeholder.com/400x200?text=Dialled+Wrong+Number"
        },
        {
          id: "l4",
          type: "multiple_choice",
          instruction: "Choose the correct way to say someone has the wrong number.",
          content: "How do you say someone has the wrong number?",
          options: ["You have the wrong number", "You are wrong", "Thank you"],
          expectedAnswers: ["you have the wrong number"],
          hint: "Say 'You have the wrong number'.",
          image: "https://via.placeholder.com/400x200?text=Wrong+Number"
        },
        {
          id: "l5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I think you have the ______ number.",
          expectedAnswers: ["wrong"],
          hint: "Use 'wrong'.",
          image: "https://via.placeholder.com/400x200?text=Wrong+Number"
        },
        {
          id: "l6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'm sorry, there's ______ here by that name.",
          expectedAnswers: ["no one"],
          hint: "Use 'no one'.",
          image: "https://via.placeholder.com/400x200?text=No+One+Here"
        },
        {
          id: "l7",
          type: "spell_word",
          instruction: "Spell the word 'wrong'.",
          content: "wrong",
          expectedAnswers: ["wrong", "w-r-o-n-g"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Wrong"
        },
        {
          id: "l8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Hello, is Riya there? I'm sorry, you have the wrong number.",
          expectedAnswers: ["hello is riya there i'm sorry you have the wrong number"],
          hint: "Handle wrong number.",
          image: "https://via.placeholder.com/400x200?text=Wrong+Number+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "Is this 9876543210? No, I'm sorry. You have the wrong number.",
          expectedAnswers: ["is this 9876543210 no i'm sorry you have the wrong number"],
          hint: "Handle wrong number.",
          image: "https://via.placeholder.com/400x200?text=Wrong+Number+Phone"
        },
        {
          id: "l10",
          type: "multiple_choice",
          instruction: "Choose the correct way to apologize for a wrong number.",
          content: "You called the wrong number. What do you say?",
          options: ["Sorry, wrong number", "I am fine", "Thank you"],
          expectedAnswers: ["sorry wrong number"],
          hint: "Apologize.",
          image: "https://via.placeholder.com/400x200?text=Sorry+Wrong+Number"
        },
        {
          id: "l11",
          type: "spell_word",
          instruction: "Spell the word 'apologize'.",
          content: "apologize",
          expectedAnswers: ["apologize", "a-p-o-l-o-g-i-z-e"],
          hint: "It has nine letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Apologize"
        },
        {
          id: "l12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Sorry, I must have ______ the wrong number.",
          expectedAnswers: ["dialled", "dialed"],
          hint: "Use 'dialled'.",
          image: "https://via.placeholder.com/400x200?text=Dialled+Wrong+Number"
        },
        {
          id: "l13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Is this the right number for Riya?",
          expectedAnswers: ["is this the right number for riya", "is this the right number for riya?"],
          hint: "Check the number.",
          image: "https://via.placeholder.com/400x200?text=Right+Number+for+Riya",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "Is this the right number for Riya? No, I'm sorry. You have the wrong number.",
          expectedAnswers: ["is this the right number for riya no i'm sorry you have the wrong number"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=No+Wrong+Number"
        },
        {
          id: "l15",
          type: "revision",
          instruction: "Practise handling wrong numbers.",
          content: "You have the wrong number. Sorry, wrong number. Is this the right number?",
          expectedAnswers: ["you have the wrong number sorry wrong number is this the right number"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Wrong+Number"
        },
        {
          id: "l16",
          type: "challenge_question",
          instruction: "Tell someone they have the wrong number.",
          content: "Say the sentence.",
          expectedAnswers: ["you have the wrong number"],
          hint: "Say 'You have the wrong number'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Wrong+Number"
        }
      ]
    },
    {
      id: 13,
      title: "Phone Etiquette",
      description: "Learn polite phone manners and etiquette.",
      activities: [
        {
          id: "m1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Always say hello when you answer the phone.",
          expectedAnswers: ["always say hello when you answer the phone"],
          hint: "Give phone etiquette advice.",
          image: "https://via.placeholder.com/400x200?text=Say+Hello",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Be polite and speak clearly.",
          expectedAnswers: ["be polite and speak clearly"],
          hint: "Give phone etiquette advice.",
          image: "https://via.placeholder.com/400x200?text=Be+Polite",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "Don't talk too loudly on the phone.",
          expectedAnswers: ["don't talk too loudly on the phone", "do not talk too loudly on the phone"],
          hint: "Give phone etiquette advice.",
          image: "https://via.placeholder.com/400x200?text=Don't+Talk+Loudly"
        },
        {
          id: "m4",
          type: "multiple_choice",
          instruction: "Choose the correct phone etiquette.",
          content: "What is good phone etiquette?",
          options: ["Speak clearly", "Shout", "Talk fast"],
          expectedAnswers: ["speak clearly"],
          hint: "Speak clearly so the person can hear you.",
          image: "https://via.placeholder.com/400x200?text=Speak+Clearly"
        },
        {
          id: "m5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Always ______ hello when you answer the phone.",
          expectedAnswers: ["say"],
          hint: "Use 'say'.",
          image: "https://via.placeholder.com/400x200?text=Say+Hello"
        },
        {
          id: "m6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Be ______ and speak clearly.",
          expectedAnswers: ["polite"],
          hint: "Use 'polite'.",
          image: "https://via.placeholder.com/400x200?text=Be+Polite"
        },
        {
          id: "m7",
          type: "spell_word",
          instruction: "Spell the word 'etiquette'.",
          content: "etiquette",
          expectedAnswers: ["etiquette", "e-t-i-q-u-e-t-t-e"],
          hint: "It has nine letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Etiquette"
        },
        {
          id: "m8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Don't interrupt when someone is speaking.",
          expectedAnswers: ["don't interrupt when someone is speaking", "do not interrupt when someone is speaking"],
          hint: "Give phone etiquette advice.",
          image: "https://via.placeholder.com/400x200?text=Don't+Interrupt",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "If you have a bad connection, say so politely.",
          expectedAnswers: ["if you have a bad connection say so politely"],
          hint: "Give phone etiquette advice.",
          image: "https://via.placeholder.com/400x200?text=Bad+Connection"
        },
        {
          id: "m10",
          type: "multiple_choice",
          instruction: "Choose the correct phone etiquette.",
          content: "What should you do if you have a bad connection?",
          options: ["Say so politely", "Shout", "Hang up"],
          expectedAnswers: ["say so politely"],
          hint: "Be polite about it.",
          image: "https://via.placeholder.com/400x200?text=Bad+Connection"
        },
        {
          id: "m11",
          type: "spell_word",
          instruction: "Spell the word 'polite'.",
          content: "polite",
          expectedAnswers: ["polite", "p-o-l-i-t-e"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Polite"
        },
        {
          id: "m12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "______ talk too loudly on the phone.",
          expectedAnswers: ["don't", "do not"],
          hint: "Use 'Don't'.",
          image: "https://via.placeholder.com/400x200?text=Don't+Talk+Loudly"
        },
        {
          id: "m13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "Is it polite to interrupt someone on the phone?",
          expectedAnswers: ["is it polite to interrupt someone on the phone", "is it polite to interrupt someone on the phone?"],
          hint: "Ask about phone etiquette.",
          image: "https://via.placeholder.com/400x200?text=Is+It+Polite",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "Is it polite to interrupt someone on the phone? No, it is not polite.",
          expectedAnswers: ["is it polite to interrupt someone on the phone no it is not polite"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Not+Polite"
        },
        {
          id: "m15",
          type: "revision",
          instruction: "Practise phone etiquette.",
          content: "Say hello. Be polite. Speak clearly. Don't interrupt.",
          expectedAnswers: ["say hello be polite speak clearly don't interrupt"],
          hint: "Say all four.",
          image: "https://via.placeholder.com/400x200?text=Practice+Etiquette"
        },
        {
          id: "m16",
          type: "challenge_question",
          instruction: "What is one rule of phone etiquette?",
          content: "Say a rule.",
          expectedAnswers: ["be polite", "speak clearly", "say hello"],
          hint: "Say 'Be polite'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Etiquette"
        }
      ]
    },
    {
      id: 14,
      title: "Dialogue – Making Plans on the Phone",
      description: "Practise a full phone dialogue making plans.",
      activities: [
        {
          id: "n1",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "Hello, is that Riya?",
          expectedAnswers: ["hello is that riya", "hello is that riya?"],
          hint: "Start the call.",
          image: "https://via.placeholder.com/400x200?text=Is+That+Riya",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n2",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "Yes, this is Riya. Who's calling?",
          expectedAnswers: ["yes this is riya who's calling"],
          hint: "Answer and ask.",
          image: "https://via.placeholder.com/400x200?text=Yes+This+Is+Riya",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n3",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "This is Ravi. Would you like to go to the park tomorrow?",
          expectedAnswers: ["this is ravi would you like to go to the park tomorrow"],
          hint: "Make plans.",
          image: "https://via.placeholder.com/400x200?text=Go+to+Park+Tomorrow"
        },
        {
          id: "n4",
          type: "multiple_choice",
          instruction: "Choose the correct way to start a call.",
          content: "How do you start a call?",
          options: ["Hello, is that Riya?", "I am Riya", "Riya here"],
          expectedAnswers: ["hello is that riya"],
          hint: "Say 'Hello, is that...?'",
          image: "https://via.placeholder.com/400x200?text=Hello+Is+That+Riya"
        },
        {
          id: "n5",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Hello, is ______ Riya?",
          expectedAnswers: ["that"],
          hint: "Use 'that'.",
          image: "https://via.placeholder.com/400x200?text=Is+That+Riya"
        },
        {
          id: "n6",
          type: "sentence_completion",
          instruction: "Complete the answer.",
          content: "Yes, this ______ Riya.",
          expectedAnswers: ["is"],
          hint: "Use 'is'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Riya"
        },
        {
          id: "n7",
          type: "spell_word",
          instruction: "Spell the word 'plans'.",
          content: "plans",
          expectedAnswers: ["plans", "p-l-a-n-s"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Plans"
        },
        {
          id: "n8",
          type: "listen_repeat",
          instruction: "Listen and repeat this full phone dialogue.",
          content: "Hello, is that Riya? Yes, this is Riya. Who's calling? This is Ravi. Would you like to go to the park tomorrow? Sure, what time? At 3 o'clock. Great! I'll see you there.",
          expectedAnswers: ["hello is that riya yes this is riya who's calling this is ravi would you like to go to the park tomorrow sure what time at 3 o'clock great i'll see you there"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Full+Phone+Plans+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n9",
          type: "read_aloud",
          instruction: "Read this phone dialogue aloud.",
          content: "Hi, this is Anjali. Are you free tomorrow? Yes, I'm free. Would you like to go shopping? That sounds great!",
          expectedAnswers: ["hi this is anjali are you free tomorrow yes i'm free would you like to go shopping that sounds great"],
          hint: "Make plans.",
          image: "https://via.placeholder.com/400x200?text=Go+Shopping"
        },
        {
          id: "n10",
          type: "multiple_choice",
          instruction: "Choose the correct way to ask if someone is free.",
          content: "How do you ask if someone is free?",
          options: ["Are you free tomorrow?", "How are you?", "What is your name?"],
          expectedAnswers: ["are you free tomorrow"],
          hint: "Ask 'Are you free?'",
          image: "https://via.placeholder.com/400x200?text=Are+You+Free"
        },
        {
          id: "n11",
          type: "spell_word",
          instruction: "Spell the word 'free'.",
          content: "free",
          expectedAnswers: ["free", "f-r-e-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Free"
        },
        {
          id: "n12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "Would you ______ to go to the park?",
          expectedAnswers: ["like"],
          hint: "Use 'like'.",
          image: "https://via.placeholder.com/400x200?text=Would+You+Like"
        },
        {
          id: "n13",
          type: "listen_repeat",
          instruction: "Listen and repeat this question.",
          content: "What time shall we meet?",
          expectedAnswers: ["what time shall we meet", "what time shall we meet?"],
          hint: "Ask about meeting time.",
          image: "https://via.placeholder.com/400x200?text=What+Time+Shall+We+Meet",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n14",
          type: "read_aloud",
          instruction: "Read this question and answer aloud.",
          content: "What time shall we meet? Let's meet at 4 o'clock.",
          expectedAnswers: ["what time shall we meet let's meet at 4 o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Meet+at+4"
        },
        {
          id: "n15",
          type: "revision",
          instruction: "Practise a full phone plans dialogue.",
          content: "Hello, is that Riya? Yes, this is Riya. Would you like to go to the park? Sure, what time? At 3 o'clock.",
          expectedAnswers: ["hello is that riya yes this is riya would you like to go to the park sure what time at 3 o'clock"],
          hint: "Say the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Practice+Phone+Plans"
        },
        {
          id: "n16",
          type: "challenge_question",
          instruction: "Make a phone call to make plans.",
          content: "Ask someone to go to the cinema.",
          expectedAnswers: ["hello is that", "would you like to go to the cinema"],
          hint: "Say 'Would you like to go to the cinema?'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Phone+Plans"
        }
      ]
    },
    {
      id: 15,
      title: "Review – Phone Calls and Messages",
      description: "Consolidate everything you have learned about phone calls and messages.",
      activities: [
        {
          id: "o1",
          type: "listen_repeat",
          instruction: "Listen and repeat all the phone phrases.",
          content: "Hello, this is... Who's calling? Hold on. Can I leave a message? I'll call back. Wrong number.",
          expectedAnswers: ["hello this is who's calling hold on can i leave a message i'll call back wrong number"],
          hint: "Say all the phrases.",
          image: "https://via.placeholder.com/400x200?text=All+Phone+Phrases",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o2",
          type: "listen_repeat",
          instruction: "Listen and repeat this phone conversation.",
          content: "Hello? Hello, is that Riya? Yes, this is Riya. Who's calling? This is Ravi.",
          expectedAnswers: ["hello hello is that riya yes this is riya who's calling this is ravi"],
          hint: "Say the conversation.",
          image: "https://via.placeholder.com/400x200?text=Phone+Conversation",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o3",
          type: "read_aloud",
          instruction: "Read this full review aloud.",
          content: "My name is Ravi. I can make phone calls and leave messages. I know how to answer the phone with 'Hello' and introduce myself. I can ask to speak to someone using 'May I speak to...?' I can say who is calling. I can ask someone to wait by saying 'Hold on' or 'Just a moment'. I can say when someone is not available. I can leave and take messages. I can leave voicemails. I know about phone etiquette. I am good at making phone calls.",
          expectedAnswers: ["my name is ravi i can make phone calls and leave messages i know how to answer the phone with hello and introduce myself i can ask to speak to someone using may i speak to i can say who is calling i can ask someone to wait by saying hold on or just a moment i can say when someone is not available i can leave and take messages i can leave voicemails i know about phone etiquette i am good at making phone calls"],
          hint: "Say your full review.",
          image: "https://via.placeholder.com/400x200?text=Full+Review+Phone"
        },
        {
          id: "o4",
          type: "multiple_choice",
          instruction: "Choose the correct way to answer the phone.",
          content: "What do you say when you answer the phone?",
          options: ["Hello?", "Goodbye", "Thank you"],
          expectedAnswers: ["hello"],
          hint: "Say 'Hello'.",
          image: "https://via.placeholder.com/400x200?text=Hello+Review"
        },
        {
          id: "o5",
          type: "multiple_choice",
          instruction: "Choose the correct way to ask to speak to someone.",
          content: "How do you ask to speak to someone?",
          options: ["May I speak to Riya?", "I want Riya", "Riya here"],
          expectedAnswers: ["may i speak to riya"],
          hint: "Use 'May I speak to'.",
          image: "https://via.placeholder.com/400x200?text=May+I+Speak+to+Riya"
        },
        {
          id: "o6",
          type: "multiple_choice",
          instruction: "Choose the correct way to ask someone to wait.",
          content: "How do you ask someone to wait?",
          options: ["Hold on", "Go away", "Talk later"],
          expectedAnswers: ["hold on"],
          hint: "Say 'Hold on'.",
          image: "https://via.placeholder.com/400x200?text=Hold+On+Review"
        },
        {
          id: "o7",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "Hello, this ______ Riya speaking.",
          expectedAnswers: ["is"],
          hint: "Use 'is'.",
          image: "https://via.placeholder.com/400x200?text=This+Is+Riya"
        },
        {
          id: "o8",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "May I speak ______ Riya?",
          expectedAnswers: ["to"],
          hint: "Use 'to'.",
          image: "https://via.placeholder.com/400x200?text=Speak+to+Riya"
        },
        {
          id: "o9",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I'm sorry, she's not ______ right now.",
          expectedAnswers: ["here", "available"],
          hint: "Say she is not available.",
          image: "https://via.placeholder.com/400x200?text=Not+Here"
        },
        {
          id: "o10",
          type: "spell_word",
          instruction: "Spell the word 'message'.",
          content: "message",
          expectedAnswers: ["message", "m-e-s-s-a-g-e"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Message"
        },
        {
          id: "o11",
          type: "spell_word",
          instruction: "Spell the word 'available'.",
          content: "available",
          expectedAnswers: ["available", "a-v-a-i-l-a-b-l-e"],
          hint: "It has nine letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Available"
        },
        {
          id: "o12",
          type: "listen_repeat",
          instruction: "Listen and repeat this review dialogue.",
          content: "Hello, is that Riya? Yes, this is Riya. I'm sorry, she's not here. Can I leave a message? Sure.",
          expectedAnswers: ["hello is that riya yes this is riya i'm sorry she's not here can i leave a message sure"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Review+Phone+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o13",
          type: "read_aloud",
          instruction: "Read this full phone review.",
          content: "I know how to make calls. I say 'Hello, this is...' I ask for people politely. I can say 'Hold on' when someone needs to wait. I can take and leave messages. I know how to say 'Goodbye' politely. Phone calls are easy when you know the right words.",
          expectedAnswers: ["i know how to make calls i say hello this is i ask for people politely i can say hold on when someone needs to wait i can take and leave messages i know how to say goodbye politely phone calls are easy when you know the right words"],
          hint: "Describe phone skills.",
          image: "https://via.placeholder.com/400x200?text=Phone+Skills+Review"
        },
        {
          id: "o14",
          type: "multiple_choice",
          instruction: "Choose the correct way to leave a message.",
          content: "How do you ask to leave a message?",
          options: ["Can I leave a message?", "I want a message", "Message please"],
          expectedAnswers: ["can i leave a message"],
          hint: "Use 'Can I leave a message?'",
          image: "https://via.placeholder.com/400x200?text=Can+I+Leave+Message+Review"
        },
        {
          id: "o15",
          type: "revision",
          instruction: "Review all the phone vocabulary.",
          content: "Hello, speak, hold, message, call back, wrong number, voicemail.",
          expectedAnswers: ["hello speak hold message call back wrong number voicemail"],
          hint: "Say all the words.",
          image: "https://via.placeholder.com/400x200?text=Review+All+Phone+Words"
        },
        {
          id: "o16",
          type: "challenge_question",
          instruction: "Make a phone call to ask about homework.",
          content: "Say the full conversation.",
          expectedAnswers: ["hello this is", "i'm calling about"],
          hint: "Say 'Hello, this is... I'm calling about the homework.'",
          image: "https://via.placeholder.com/400x200?text=Final+Challenge+Homework+Call"
        },
        {
          id: "o17",
          type: "challenge_question",
          instruction: "Leave a voicemail message.",
          content: "Say 'This is Riya. Please call me back.'",
          expectedAnswers: ["this is riya please call me back"],
          hint: "Say 'This is Riya. Please call me back.'",
          image: "https://via.placeholder.com/400x200?text=Final+Challenge+Voicemail"
        }
      ]
    }
  ],
  challengeTest: {
    id: "ch21",
    activities: [
      {
        id: "ch1",
        type: "multiple_choice",
        instruction: "What do you say when you answer the phone?",
        content: "Choose the correct greeting.",
        options: ["Hello?", "Goodbye", "Thank you"],
        expectedAnswers: ["hello"],
        hint: "Say 'Hello'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Hello"
      },
      {
        id: "ch2",
        type: "multiple_choice",
        instruction: "How do you ask to speak to someone?",
        content: "Choose the correct question.",
        options: ["May I speak to Riya?", "I want Riya", "Riya here"],
        expectedAnswers: ["may i speak to riya"],
        hint: "Use 'May I speak to'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+May+I+Speak"
      },
      {
        id: "ch3",
        type: "multiple_choice",
        instruction: "How do you ask someone to wait?",
        content: "Choose the correct phrase.",
        options: ["Hold on", "Go away", "Talk later"],
        expectedAnswers: ["hold on"],
        hint: "Say 'Hold on'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Hold+On"
      },
      {
        id: "ch4",
        type: "multiple_choice",
        instruction: "How do you say someone is not available?",
        content: "Choose the correct sentence.",
        options: ["She's not here", "She is here", "She is fine"],
        expectedAnswers: ["she's not here"],
        hint: "Say 'She's not here'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Not+Here"
      },
      {
        id: "ch5",
        type: "multiple_choice",
        instruction: "How do you ask to leave a message?",
        content: "Choose the correct question.",
        options: ["Can I leave a message?", "I want a message", "Message please"],
        expectedAnswers: ["can i leave a message"],
        hint: "Use 'Can I leave a message?'",
        image: "https://via.placeholder.com/400x200?text=Challenge+Leave+Message"
      },
      {
        id: "ch6",
        type: "sentence_completion",
        instruction: "Complete the phone greeting.",
        content: "Hello, this ______ Riya speaking.",
        expectedAnswers: ["is"],
        hint: "Use 'is'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+This+Is+Riya"
      },
      {
        id: "ch7",
        type: "sentence_completion",
        instruction: "Complete the question.",
        content: "May I speak ______ Riya?",
        expectedAnswers: ["to"],
        hint: "Use 'to'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Speak+to+Riya"
      },
      {
        id: "ch8",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I'm sorry, she's not ______.",
        expectedAnswers: ["here", "available"],
        hint: "Say she is not available.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Not+Available"
      },
      {
        id: "ch9",
        type: "sentence_completion",
        instruction: "Complete the question.",
        content: "Can I ______ a message?",
        expectedAnswers: ["leave"],
        hint: "Use 'leave'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Leave+Message"
      },
      {
        id: "ch10",
        type: "sentence_completion",
        instruction: "Complete the response.",
        content: "This is Riya ______.",
        expectedAnswers: ["calling"],
        hint: "Use 'calling'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Riya+Calling"
      },
      {
        id: "ch11",
        type: "sentence_completion",
        instruction: "Complete the question.",
        content: "______ calling, please?",
        expectedAnswers: ["who's", "who is"],
        hint: "Use 'Who's'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Whos+Calling"
      },
      {
        id: "ch12",
        type: "multiple_choice",
        instruction: "How do you say you will call back?",
        content: "Choose the correct sentence.",
        options: ["I'll call you back", "I call you", "Call me"],
        expectedAnswers: ["i'll call you back"],
        hint: "Use 'I'll call you back'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Call+Back"
      },
      {
        id: "ch13",
        type: "listen_repeat",
        instruction: "Listen and repeat this phone greeting.",
        content: "Hello, this is Riya.",
        expectedAnswers: ["hello this is riya"],
        hint: "Introduce yourself on the phone.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Hello+This+Is+Riya",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch14",
        type: "listen_repeat",
        instruction: "Listen and repeat this question.",
        content: "May I speak to Riya?",
        expectedAnswers: ["may i speak to riya", "may i speak to riya?"],
        hint: "Ask to speak to someone.",
        image: "https://via.placeholder.com/400x200?text=Challenge+May+I+Speak+to+Riya",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch15",
        type: "listen_repeat",
        instruction: "Listen and repeat this dialogue.",
        content: "May I speak to Riya? She's not here. Can I leave a message?",
        expectedAnswers: ["may i speak to riya she's not here can i leave a message"],
        hint: "Ask and respond.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Phone+Dialogue",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch16",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I'll call you ______ later.",
        expectedAnswers: ["back"],
        hint: "Use 'back'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Call+Back+Later"
      },
      {
        id: "ch17",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "You have the ______ number.",
        expectedAnswers: ["wrong"],
        hint: "Use 'wrong'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Wrong+Number"
      },
      {
        id: "ch18",
        type: "multiple_choice",
        instruction: "What is good phone etiquette?",
        content: "Choose the correct advice.",
        options: ["Be polite", "Shout", "Talk fast"],
        expectedAnswers: ["be polite"],
        hint: "Be polite on the phone.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Be+Polite"
      },
      {
        id: "ch19",
        type: "challenge_question",
        instruction: "Make a phone call to invite a friend.",
        content: "Say 'Would you like to go to the park?'",
        expectedAnswers: ["would you like to go to the park"],
        hint: "Say 'Would you like to go to the park?'",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+Invite+Park"
      },
      {
        id: "ch20",
        type: "challenge_question",
        instruction: "Leave a voicemail saying who you are and what you want.",
        content: "Say 'This is Riya. Please call me back.'",
        expectedAnswers: ["this is riya please call me back"],
        hint: "Say 'This is Riya. Please call me back.'",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+Voicemail"
      }
    ]
  }
};