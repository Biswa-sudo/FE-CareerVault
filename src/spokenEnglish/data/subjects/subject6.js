export default {
  id: 6,
  title: "Daily Routines",
  description: "Learn to talk about your daily activities – what you do every morning, afternoon, and evening.",
  lessons: [
    {
      id: 1,
      title: "Waking Up in the Morning",
      description: "Learn to say 'I wake up' and 'I get up' in the morning.",
      activities: [
        {
          id: "a1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I wake up in the morning.",
          expectedAnswers: ["i wake up in the morning"],
          hint: "Say what you do first.",
          image: "https://via.placeholder.com/400x200?text=I+Wake+Up+in+the+Morning",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I get up at 6 o'clock.",
          expectedAnswers: ["i get up at 6 o'clock", "i get up at 6 oclock", "i get up at six o'clock"],
          hint: "Tell the time you get up.",
          image: "https://via.placeholder.com/400x200?text=I+Get+Up+at+6+Oclock",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I wake up early.",
          expectedAnswers: ["i wake up early"],
          hint: "Say you wake up early.",
          image: "https://via.placeholder.com/400x200?text=I+Wake+Up+Early"
        },
        {
          id: "a4",
          type: "multiple_choice",
          instruction: "Choose the correct word for waking up.",
          content: "What do you do first in the morning?",
          options: ["Wake up", "Eat lunch", "Go to school"],
          expectedAnswers: ["wake up"],
          hint: "You do this when you open your eyes.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up"
        },
        {
          id: "a5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ up in the morning.",
          expectedAnswers: ["wake"],
          hint: "Use 'wake'.",
          image: "https://via.placeholder.com/400x200?text=I+Wake+Up"
        },
        {
          id: "a6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I get up ______ 7 o'clock.",
          expectedAnswers: ["at"],
          hint: "Use 'at' for time.",
          image: "https://via.placeholder.com/400x200?text=I+Get+Up+at+7"
        },
        {
          id: "a7",
          type: "spell_word",
          instruction: "Spell the word 'wake'.",
          content: "wake",
          expectedAnswers: ["wake", "w-a-k-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Wake"
        },
        {
          id: "a8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I wake up at 6:30 in the morning.",
          expectedAnswers: ["i wake up at 6 30 in the morning", "i wake up at six thirty in the morning"],
          hint: "Say your wake-up time.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+at+6+30",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My mother wakes up early too.",
          expectedAnswers: ["my mother wakes up early too"],
          hint: "Talk about your mother.",
          image: "https://via.placeholder.com/400x200?text=Mother+Wakes+Up+Early"
        },
        {
          id: "a10",
          type: "multiple_choice",
          instruction: "Choose the correct word for getting out of bed.",
          content: "What do you do after waking up?",
          options: ["Get up", "Go to bed", "Eat dinner"],
          expectedAnswers: ["get up"],
          hint: "You leave your bed.",
          image: "https://via.placeholder.com/400x200?text=Get+Up"
        },
        {
          id: "a11",
          type: "spell_word",
          instruction: "Spell the word 'get'.",
          content: "get",
          expectedAnswers: ["get", "g-e-t"],
          hint: "It has three letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Get"
        },
        {
          id: "a12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ up at 6 o'clock.",
          expectedAnswers: ["get"],
          hint: "Use 'get'.",
          image: "https://via.placeholder.com/400x200?text=I+Get+Up+at+6"
        },
        {
          id: "a13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I wake up and get up every morning.",
          expectedAnswers: ["i wake up and get up every morning"],
          hint: "Say both actions.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+and+Get+Up",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "a14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I do not like to wake up late.",
          expectedAnswers: ["i do not like to wake up late", "i don't like to wake up late"],
          hint: "Say you don't like being late.",
          image: "https://via.placeholder.com/400x200?text=Don't+Like+to+Wake+Up+Late"
        },
        {
          id: "a15",
          type: "revision",
          instruction: "Practise talking about waking up.",
          content: "I wake up in the morning. I get up at 6 o'clock.",
          expectedAnswers: ["i wake up in the morning i get up at 6 o'clock"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Waking+Up"
        },
        {
          id: "a16",
          type: "challenge_question",
          instruction: "What do you do first when you wake up?",
          content: "Say what you do first in the morning.",
          expectedAnswers: ["i wake up", "i wake up in the morning"],
          hint: "Say 'I wake up'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Wake+Up"
        }
      ]
    },
    {
      id: 2,
      title: "Getting Ready",
      description: "Learn to say 'I brush my teeth' and 'I take a shower'.",
      activities: [
        {
          id: "b1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I brush my teeth.",
          expectedAnswers: ["i brush my teeth"],
          hint: "Say what you do to clean your teeth.",
          image: "https://via.placeholder.com/400x200?text=I+Brush+My+Teeth",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I take a shower.",
          expectedAnswers: ["i take a shower"],
          hint: "Say what you do to get clean.",
          image: "https://via.placeholder.com/400x200?text=I+Take+a+Shower",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I wash my face.",
          expectedAnswers: ["i wash my face"],
          hint: "Say what you do to your face.",
          image: "https://via.placeholder.com/400x200?text=I+Wash+My+Face"
        },
        {
          id: "b4",
          type: "multiple_choice",
          instruction: "Choose the correct action for cleaning teeth.",
          content: "What do you do to clean your teeth?",
          options: ["Brush my teeth", "Wash my face", "Take a shower"],
          expectedAnswers: ["brush my teeth"],
          hint: "You use a toothbrush.",
          image: "https://via.placeholder.com/400x200?text=Brush+Teeth"
        },
        {
          id: "b5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ my teeth.",
          expectedAnswers: ["brush"],
          hint: "Use 'brush'.",
          image: "https://via.placeholder.com/400x200?text=I+Brush+My+Teeth"
        },
        {
          id: "b6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I take a ______.",
          expectedAnswers: ["shower"],
          hint: "Use 'shower'.",
          image: "https://via.placeholder.com/400x200?text=I+Take+a+Shower"
        },
        {
          id: "b7",
          type: "spell_word",
          instruction: "Spell the word 'brush'.",
          content: "brush",
          expectedAnswers: ["brush", "b-r-u-s-h"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Brush"
        },
        {
          id: "b8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I brush my teeth after I wake up.",
          expectedAnswers: ["i brush my teeth after i wake up"],
          hint: "Say when you brush.",
          image: "https://via.placeholder.com/400x200?text=Brush+After+Wake+Up",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I take a shower every morning.",
          expectedAnswers: ["i take a shower every morning"],
          hint: "Say when you shower.",
          image: "https://via.placeholder.com/400x200?text=Shower+Every+Morning"
        },
        {
          id: "b10",
          type: "multiple_choice",
          instruction: "Choose the correct action for cleaning your face.",
          content: "What do you do to clean your face?",
          options: ["Wash my face", "Brush my teeth", "Take a shower"],
          expectedAnswers: ["wash my face"],
          hint: "You use water.",
          image: "https://via.placeholder.com/400x200?text=Wash+Face"
        },
        {
          id: "b11",
          type: "spell_word",
          instruction: "Spell the word 'shower'.",
          content: "shower",
          expectedAnswers: ["shower", "s-h-o-w-e-r"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Shower"
        },
        {
          id: "b12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ my face.",
          expectedAnswers: ["wash"],
          hint: "Use 'wash'.",
          image: "https://via.placeholder.com/400x200?text=I+Wash+My+Face"
        },
        {
          id: "b13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I get ready for school.",
          expectedAnswers: ["i get ready for school"],
          hint: "Say what you do before school.",
          image: "https://via.placeholder.com/400x200?text=Get+Ready+for+School",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "b14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I brush my teeth and wash my face.",
          expectedAnswers: ["i brush my teeth and wash my face"],
          hint: "Say two actions.",
          image: "https://via.placeholder.com/400x200?text=Brush+and+Wash"
        },
        {
          id: "b15",
          type: "revision",
          instruction: "Practise talking about getting ready.",
          content: "I brush my teeth. I take a shower. I wash my face.",
          expectedAnswers: ["i brush my teeth i take a shower i wash my face"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Getting+Ready"
        },
        {
          id: "b16",
          type: "challenge_question",
          instruction: "What do you do to clean your teeth?",
          content: "Say what you do to your teeth.",
          expectedAnswers: ["i brush my teeth"],
          hint: "Say 'I brush my teeth'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Brush+Teeth"
        }
      ]
    },
    {
      id: 3,
      title: "Eating Breakfast",
      description: "Learn to say 'I eat breakfast' and talk about your morning meal.",
      activities: [
        {
          id: "c1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I eat breakfast.",
          expectedAnswers: ["i eat breakfast"],
          hint: "Say what you do in the morning.",
          image: "https://via.placeholder.com/400x200?text=I+Eat+Breakfast",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I drink milk in the morning.",
          expectedAnswers: ["i drink milk in the morning"],
          hint: "Say what you drink.",
          image: "https://via.placeholder.com/400x200?text=I+Drink+Milk",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I have a big breakfast.",
          expectedAnswers: ["i have a big breakfast"],
          hint: "Say you eat a lot.",
          image: "https://via.placeholder.com/400x200?text=Big+Breakfast"
        },
        {
          id: "c4",
          type: "multiple_choice",
          instruction: "Choose the correct meal for the morning.",
          content: "What do you eat in the morning?",
          options: ["Breakfast", "Lunch", "Dinner"],
          expectedAnswers: ["breakfast"],
          hint: "It is the first meal.",
          image: "https://via.placeholder.com/400x200?text=Breakfast"
        },
        {
          id: "c5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ breakfast.",
          expectedAnswers: ["eat", "have"],
          hint: "Use 'eat' or 'have'.",
          image: "https://via.placeholder.com/400x200?text=I+Eat+Breakfast"
        },
        {
          id: "c6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I drink ______ in the morning.",
          expectedAnswers: ["milk", "juice", "water"],
          hint: "Say what you drink.",
          image: "https://via.placeholder.com/400x200?text=I+Drink+Blank"
        },
        {
          id: "c7",
          type: "spell_word",
          instruction: "Spell the word 'breakfast'.",
          content: "breakfast",
          expectedAnswers: ["breakfast", "b-r-e-a-k-f-a-s-t"],
          hint: "It has nine letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Breakfast"
        },
        {
          id: "c8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I eat toast and eggs for breakfast.",
          expectedAnswers: ["i eat toast and eggs for breakfast"],
          hint: "Say what you eat.",
          image: "https://via.placeholder.com/400x200?text=Toast+and+Eggs",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My mother makes breakfast for me.",
          expectedAnswers: ["my mother makes breakfast for me"],
          hint: "Talk about your mother.",
          image: "https://via.placeholder.com/400x200?text=Mother+Makes+Breakfast"
        },
        {
          id: "c10",
          type: "multiple_choice",
          instruction: "Choose the correct drink for breakfast.",
          content: "What do you drink in the morning?",
          options: ["Milk", "Soup", "Cola"],
          expectedAnswers: ["milk"],
          hint: "It is a healthy drink.",
          image: "https://via.placeholder.com/400x200?text=Milk"
        },
        {
          id: "c11",
          type: "spell_word",
          instruction: "Spell the word 'milk'.",
          content: "milk",
          expectedAnswers: ["milk", "m-i-l-k"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Milk"
        },
        {
          id: "c12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I have breakfast ______ 7 o'clock.",
          expectedAnswers: ["at"],
          hint: "Use 'at' for time.",
          image: "https://via.placeholder.com/400x200?text=Breakfast+at+7"
        },
        {
          id: "c13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I eat breakfast with my family.",
          expectedAnswers: ["i eat breakfast with my family"],
          hint: "Say who you eat with.",
          image: "https://via.placeholder.com/400x200?text=Breakfast+with+Family",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "c14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I like to eat cereal for breakfast.",
          expectedAnswers: ["i like to eat cereal for breakfast"],
          hint: "Say what you like.",
          image: "https://via.placeholder.com/400x200?text=Cereal+for+Breakfast"
        },
        {
          id: "c15",
          type: "revision",
          instruction: "Practise talking about breakfast.",
          content: "I eat breakfast. I drink milk.",
          expectedAnswers: ["i eat breakfast i drink milk"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Breakfast"
        },
        {
          id: "c16",
          type: "challenge_question",
          instruction: "What do you eat for breakfast?",
          content: "Say what you eat in the morning.",
          expectedAnswers: ["i eat breakfast", "i eat"],
          hint: "Say 'I eat...'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Breakfast"
        }
      ]
    },
    {
      id: 4,
      title: "Going to School",
      description: "Learn to say 'I go to school' and talk about your journey.",
      activities: [
        {
          id: "d1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I go to school.",
          expectedAnswers: ["i go to school"],
          hint: "Say where you go in the morning.",
          image: "https://via.placeholder.com/400x200?text=I+Go+to+School",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I go to school by bus.",
          expectedAnswers: ["i go to school by bus"],
          hint: "Say how you go.",
          image: "https://via.placeholder.com/400x200?text=By+Bus",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I walk to school.",
          expectedAnswers: ["i walk to school"],
          hint: "Say you walk.",
          image: "https://via.placeholder.com/400x200?text=Walk+to+School"
        },
        {
          id: "d4",
          type: "multiple_choice",
          instruction: "Choose the correct way to say where you go.",
          content: "Where do you go in the morning?",
          options: ["Go to school", "Go to bed", "Go to the park"],
          expectedAnswers: ["go to school"],
          hint: "You go to learn.",
          image: "https://via.placeholder.com/400x200?text=Go+to+School"
        },
        {
          id: "d5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ to school.",
          expectedAnswers: ["go"],
          hint: "Use 'go'.",
          image: "https://via.placeholder.com/400x200?text=I+Go+to+School"
        },
        {
          id: "d6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I go to school ______ bus.",
          expectedAnswers: ["by"],
          hint: "Use 'by'.",
          image: "https://via.placeholder.com/400x200?text=By+Bus"
        },
        {
          id: "d7",
          type: "spell_word",
          instruction: "Spell the word 'bus'.",
          content: "bus",
          expectedAnswers: ["bus", "b-u-s"],
          hint: "It has three letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Bus"
        },
        {
          id: "d8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My father takes me to school.",
          expectedAnswers: ["my father takes me to school"],
          hint: "Say who takes you.",
          image: "https://via.placeholder.com/400x200?text=Father+Takes+Me+to+School",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I go to school with my friends.",
          expectedAnswers: ["i go to school with my friends"],
          hint: "Say who you go with.",
          image: "https://via.placeholder.com/400x200?text=With+Friends"
        },
        {
          id: "d10",
          type: "multiple_choice",
          instruction: "Choose the correct way to travel to school.",
          content: "How do you go to school?",
          options: ["By bus", "By plane", "By ship"],
          expectedAnswers: ["by bus"],
          hint: "It is a common way.",
          image: "https://via.placeholder.com/400x200?text=By+Bus"
        },
        {
          id: "d11",
          type: "spell_word",
          instruction: "Spell the word 'walk'.",
          content: "walk",
          expectedAnswers: ["walk", "w-a-l-k"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Walk"
        },
        {
          id: "d12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ to school.",
          expectedAnswers: ["walk", "go"],
          hint: "Use 'walk' or 'go'.",
          image: "https://via.placeholder.com/400x200?text=I+Walk+to+School"
        },
        {
          id: "d13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I reach school at 8 o'clock.",
          expectedAnswers: ["i reach school at 8 o'clock", "i reach school at eight o'clock"],
          hint: "Say when you arrive.",
          image: "https://via.placeholder.com/400x200?text=Reach+School+at+8",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "d14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I do not like to be late for school.",
          expectedAnswers: ["i do not like to be late for school", "i don't like to be late for school"],
          hint: "Say you don't like being late.",
          image: "https://via.placeholder.com/400x200?text=Don't+Be+Late"
        },
        {
          id: "d15",
          type: "revision",
          instruction: "Practise talking about going to school.",
          content: "I go to school. I go by bus. I reach at 8 o'clock.",
          expectedAnswers: ["i go to school i go by bus i reach at 8 o'clock"],
          hint: "Say all three.",
          image: "https://via.placeholder.com/400x200?text=Practice+Going+to+School"
        },
        {
          id: "d16",
          type: "challenge_question",
          instruction: "How do you go to school?",
          content: "Say how you travel to school.",
          expectedAnswers: ["i go to school by", "i walk to school"],
          hint: "Say 'by bus' or 'walk'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Go+to+School"
        }
      ]
    },
    {
      id: 5,
      title: "At School – Studying",
      description: "Learn to say 'I study' and 'I learn' at school.",
      activities: [
        {
          id: "e1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I study at school.",
          expectedAnswers: ["i study at school"],
          hint: "Say what you do at school.",
          image: "https://via.placeholder.com/400x200?text=I+Study+at+School",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I learn new things.",
          expectedAnswers: ["i learn new things"],
          hint: "Say what you do.",
          image: "https://via.placeholder.com/400x200?text=I+Learn+New+Things",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I write in my notebook.",
          expectedAnswers: ["i write in my notebook"],
          hint: "Say what you do.",
          image: "https://via.placeholder.com/400x200?text=Write+in+Notebook"
        },
        {
          id: "e4",
          type: "multiple_choice",
          instruction: "Choose the correct action for learning.",
          content: "What do you do at school?",
          options: ["Study", "Sleep", "Play only"],
          expectedAnswers: ["study"],
          hint: "You learn there.",
          image: "https://via.placeholder.com/400x200?text=Study"
        },
        {
          id: "e5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ at school.",
          expectedAnswers: ["study"],
          hint: "Use 'study'.",
          image: "https://via.placeholder.com/400x200?text=I+Study+at+School"
        },
        {
          id: "e6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ new things.",
          expectedAnswers: ["learn"],
          hint: "Use 'learn'.",
          image: "https://via.placeholder.com/400x200?text=I+Learn+New+Things"
        },
        {
          id: "e7",
          type: "spell_word",
          instruction: "Spell the word 'study'.",
          content: "study",
          expectedAnswers: ["study", "s-t-u-d-y"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Study"
        },
        {
          id: "e8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My teacher teaches us many things.",
          expectedAnswers: ["my teacher teaches us many things"],
          hint: "Talk about your teacher.",
          image: "https://via.placeholder.com/400x200?text=Teacher+Teaches",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I listen to my teacher.",
          expectedAnswers: ["i listen to my teacher"],
          hint: "Say what you do.",
          image: "https://via.placeholder.com/400x200?text=I+Listen+to+Teacher"
        },
        {
          id: "e10",
          type: "multiple_choice",
          instruction: "Choose the correct action for writing.",
          content: "What do you do with a pen?",
          options: ["Write", "Eat", "Play"],
          expectedAnswers: ["write"],
          hint: "You use it to make words.",
          image: "https://via.placeholder.com/400x200?text=Write"
        },
        {
          id: "e11",
          type: "spell_word",
          instruction: "Spell the word 'learn'.",
          content: "learn",
          expectedAnswers: ["learn", "l-e-a-r-n"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Learn"
        },
        {
          id: "e12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ in my notebook.",
          expectedAnswers: ["write"],
          hint: "Use 'write'.",
          image: "https://via.placeholder.com/400x200?text=I+Write+in+Notebook"
        },
        {
          id: "e13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I study English and Math at school.",
          expectedAnswers: ["i study english and math at school"],
          hint: "Say what subjects you study.",
          image: "https://via.placeholder.com/400x200?text=English+and+Math",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "e14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I like to study science.",
          expectedAnswers: ["i like to study science"],
          hint: "Say what you like.",
          image: "https://via.placeholder.com/400x200?text=Like+Science"
        },
        {
          id: "e15",
          type: "revision",
          instruction: "Practise talking about studying.",
          content: "I study at school. I learn new things.",
          expectedAnswers: ["i study at school i learn new things"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Studying"
        },
        {
          id: "e16",
          type: "challenge_question",
          instruction: "What do you do at school?",
          content: "Say what you do at school.",
          expectedAnswers: ["i study", "i learn", "i listen to teacher"],
          hint: "Say 'I study'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+At+School"
        }
      ]
    },
    {
      id: 6,
      title: "Playing with Friends at School",
      description: "Learn to say 'I play with my friends' during break time.",
      activities: [
        {
          id: "f1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I play with my friends.",
          expectedAnswers: ["i play with my friends"],
          hint: "Say what you do in break.",
          image: "https://via.placeholder.com/400x200?text=I+Play+with+Friends",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "We play cricket in the playground.",
          expectedAnswers: ["we play cricket in the playground"],
          hint: "Say what you play.",
          image: "https://via.placeholder.com/400x200?text=Play+Cricket",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I run in the school ground.",
          expectedAnswers: ["i run in the school ground"],
          hint: "Say what you do.",
          image: "https://via.placeholder.com/400x200?text=Run+in+Ground"
        },
        {
          id: "f4",
          type: "multiple_choice",
          instruction: "Choose the correct activity for break time.",
          content: "What do you do in the break?",
          options: ["Play with friends", "Study", "Sleep"],
          expectedAnswers: ["play with friends"],
          hint: "It is a fun time.",
          image: "https://via.placeholder.com/400x200?text=Play+with+Friends"
        },
        {
          id: "f5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ with my friends.",
          expectedAnswers: ["play"],
          hint: "Use 'play'.",
          image: "https://via.placeholder.com/400x200?text=I+Play+with+Friends"
        },
        {
          id: "f6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "We play ______ in the ground.",
          expectedAnswers: ["cricket", "football", "games"],
          hint: "Say a game.",
          image: "https://via.placeholder.com/400x200?text=Play+Blank"
        },
        {
          id: "f7",
          type: "spell_word",
          instruction: "Spell the word 'play'.",
          content: "play",
          expectedAnswers: ["play", "p-l-a-y"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Play"
        },
        {
          id: "f8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I like to play football with my friends.",
          expectedAnswers: ["i like to play football with my friends"],
          hint: "Say what you like.",
          image: "https://via.placeholder.com/400x200?text=Football+with+Friends",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "We run and jump in the ground.",
          expectedAnswers: ["we run and jump in the ground"],
          hint: "Say two actions.",
          image: "https://via.placeholder.com/400x200?text=Run+and+Jump"
        },
        {
          id: "f10",
          type: "multiple_choice",
          instruction: "Choose the correct place for playing.",
          content: "Where do you play at school?",
          options: ["Playground", "Classroom", "Library"],
          expectedAnswers: ["playground"],
          hint: "It is an open area.",
          image: "https://via.placeholder.com/400x200?text=Playground"
        },
        {
          id: "f11",
          type: "spell_word",
          instruction: "Spell the word 'friend'.",
          content: "friend",
          expectedAnswers: ["friend", "f-r-i-e-n-d"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Friend"
        },
        {
          id: "f12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "We ______ together.",
          expectedAnswers: ["play", "run", "jump"],
          hint: "Say an action.",
          image: "https://via.placeholder.com/400x200?text=Blank+Together"
        },
        {
          id: "f13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Break time is my favourite time.",
          expectedAnswers: ["break time is my favourite time"],
          hint: "Say you like break time.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Time",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "f14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I have fun with my friends.",
          expectedAnswers: ["i have fun with my friends"],
          hint: "Say you enjoy.",
          image: "https://via.placeholder.com/400x200?text=Have+Fun"
        },
        {
          id: "f15",
          type: "revision",
          instruction: "Practise talking about playing.",
          content: "I play with my friends. We play cricket.",
          expectedAnswers: ["i play with my friends we play cricket"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Playing"
        },
        {
          id: "f16",
          type: "challenge_question",
          instruction: "What do you do with your friends at school?",
          content: "Say what you do with friends.",
          expectedAnswers: ["i play with my friends", "we play"],
          hint: "Say 'I play with my friends'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Playing"
        }
      ]
    },
    {
      id: 7,
      title: "Lunch Time",
      description: "Learn to say 'I eat lunch' and talk about your midday meal.",
      activities: [
        {
          id: "g1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I eat lunch at school.",
          expectedAnswers: ["i eat lunch at school"],
          hint: "Say where you eat.",
          image: "https://via.placeholder.com/400x200?text=I+Eat+Lunch+at+School",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I eat lunch at 12 o'clock.",
          expectedAnswers: ["i eat lunch at 12 o'clock", "i eat lunch at twelve o'clock"],
          hint: "Say when you eat.",
          image: "https://via.placeholder.com/400x200?text=Lunch+at+12",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I have a lunch box.",
          expectedAnswers: ["i have a lunch box"],
          hint: "Say what you carry.",
          image: "https://via.placeholder.com/400x200?text=Lunch+Box"
        },
        {
          id: "g4",
          type: "multiple_choice",
          instruction: "Choose the correct meal for midday.",
          content: "What do you eat in the afternoon?",
          options: ["Lunch", "Breakfast", "Dinner"],
          expectedAnswers: ["lunch"],
          hint: "It is the second meal.",
          image: "https://via.placeholder.com/400x200?text=Lunch"
        },
        {
          id: "g5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I eat ______ at school.",
          expectedAnswers: ["lunch"],
          hint: "Use 'lunch'.",
          image: "https://via.placeholder.com/400x200?text=I+Eat+Lunch"
        },
        {
          id: "g6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I have a ______ box.",
          expectedAnswers: ["lunch"],
          hint: "Use 'lunch'.",
          image: "https://via.placeholder.com/400x200?text=Lunch+Box"
        },
        {
          id: "g7",
          type: "spell_word",
          instruction: "Spell the word 'lunch'.",
          content: "lunch",
          expectedAnswers: ["lunch", "l-u-n-c-h"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Lunch"
        },
        {
          id: "g8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My mother packs my lunch every day.",
          expectedAnswers: ["my mother packs my lunch every day"],
          hint: "Talk about your mother.",
          image: "https://via.placeholder.com/400x200?text=Mother+Packs+Lunch",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I eat lunch with my friends.",
          expectedAnswers: ["i eat lunch with my friends"],
          hint: "Say who you eat with.",
          image: "https://via.placeholder.com/400x200?text=Lunch+with+Friends"
        },
        {
          id: "g10",
          type: "multiple_choice",
          instruction: "Choose the correct time for lunch.",
          content: "When do you eat lunch?",
          options: ["At 12 o'clock", "At 6 o'clock", "At 8 o'clock"],
          expectedAnswers: ["at 12 o'clock"],
          hint: "It is midday.",
          image: "https://via.placeholder.com/400x200?text=12+Oclock"
        },
        {
          id: "g11",
          type: "spell_word",
          instruction: "Spell the word 'box'.",
          content: "box",
          expectedAnswers: ["box", "b-o-x"],
          hint: "It has three letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Box"
        },
        {
          id: "g12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ lunch at 12.",
          expectedAnswers: ["eat", "have"],
          hint: "Use 'eat' or 'have'.",
          image: "https://via.placeholder.com/400x200?text=I+Eat+Lunch+at+12"
        },
        {
          id: "g13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I like to eat rice and vegetables for lunch.",
          expectedAnswers: ["i like to eat rice and vegetables for lunch"],
          hint: "Say what you like.",
          image: "https://via.placeholder.com/400x200?text=Rice+and+Vegetables",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "g14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "Lunch time is fun. I talk with my friends.",
          expectedAnswers: ["lunch time is fun i talk with my friends"],
          hint: "Say what you do.",
          image: "https://via.placeholder.com/400x200?text=Lunch+Time+is+Fun"
        },
        {
          id: "g15",
          type: "revision",
          instruction: "Practise talking about lunch.",
          content: "I eat lunch at school. I eat at 12 o'clock.",
          expectedAnswers: ["i eat lunch at school i eat at 12 o'clock"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Lunch"
        },
        {
          id: "g16",
          type: "challenge_question",
          instruction: "What do you eat for lunch?",
          content: "Say what you eat at lunchtime.",
          expectedAnswers: ["i eat lunch", "i like to eat"],
          hint: "Say 'I eat...'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Lunch"
        }
      ]
    },
    {
      id: 8,
      title: "Coming Home from School",
      description: "Learn to say 'I come home from school' and talk about the journey back.",
      activities: [
        {
          id: "h1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I come home from school.",
          expectedAnswers: ["i come home from school"],
          hint: "Say where you go after school.",
          image: "https://via.placeholder.com/400x200?text=I+Come+Home+from+School",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I come home at 3 o'clock.",
          expectedAnswers: ["i come home at 3 o'clock", "i come home at three o'clock"],
          hint: "Say when you reach home.",
          image: "https://via.placeholder.com/400x200?text=Come+Home+at+3",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My mother waits for me at home.",
          expectedAnswers: ["my mother waits for me at home"],
          hint: "Talk about your mother.",
          image: "https://via.placeholder.com/400x200?text=Mother+Waits"
        },
        {
          id: "h4",
          type: "multiple_choice",
          instruction: "Choose the correct word for going back.",
          content: "What do you do after school?",
          options: ["Come home", "Go to bed", "Eat breakfast"],
          expectedAnswers: ["come home"],
          hint: "You return home.",
          image: "https://via.placeholder.com/400x200?text=Come+Home"
        },
        {
          id: "h5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ home from school.",
          expectedAnswers: ["come"],
          hint: "Use 'come'.",
          image: "https://via.placeholder.com/400x200?text=I+Come+Home"
        },
        {
          id: "h6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I come home ______ 3 o'clock.",
          expectedAnswers: ["at"],
          hint: "Use 'at' for time.",
          image: "https://via.placeholder.com/400x200?text=Come+Home+at+3"
        },
        {
          id: "h7",
          type: "spell_word",
          instruction: "Spell the word 'home'.",
          content: "home",
          expectedAnswers: ["home", "h-o-m-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Home"
        },
        {
          id: "h8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I come home by bus with my friends.",
          expectedAnswers: ["i come home by bus with my friends"],
          hint: "Say how you come home.",
          image: "https://via.placeholder.com/400x200?text=By+Bus+with+Friends",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I come home and eat a snack.",
          expectedAnswers: ["i come home and eat a snack"],
          hint: "Say what you do at home.",
          image: "https://via.placeholder.com/400x200?text=Eat+a+Snack"
        },
        {
          id: "h10",
          type: "multiple_choice",
          instruction: "Choose the correct action after coming home.",
          content: "What do you do at home after school?",
          options: ["Eat a snack", "Go to sleep", "Play cricket"],
          expectedAnswers: ["eat a snack"],
          hint: "You eat something small.",
          image: "https://via.placeholder.com/400x200?text=Snack"
        },
        {
          id: "h11",
          type: "spell_word",
          instruction: "Spell the word 'come'.",
          content: "come",
          expectedAnswers: ["come", "c-o-m-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Come"
        },
        {
          id: "h12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ home and rest.",
          expectedAnswers: ["come"],
          hint: "Use 'come'.",
          image: "https://via.placeholder.com/400x200?text=Come+Home+and+Rest"
        },
        {
          id: "h13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I do not like to come home late.",
          expectedAnswers: ["i do not like to come home late", "i don't like to come home late"],
          hint: "Say you don't like being late.",
          image: "https://via.placeholder.com/400x200?text=Don't+Come+Home+Late",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "h14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My father comes home from work in the evening.",
          expectedAnswers: ["my father comes home from work in the evening"],
          hint: "Talk about your father.",
          image: "https://via.placeholder.com/400x200?text=Father+Comes+Home"
        },
        {
          id: "h15",
          type: "revision",
          instruction: "Practise talking about coming home.",
          content: "I come home from school. I come at 3 o'clock.",
          expectedAnswers: ["i come home from school i come at 3 o'clock"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Coming+Home"
        },
        {
          id: "h16",
          type: "challenge_question",
          instruction: "What time do you come home from school?",
          content: "Say when you reach home.",
          expectedAnswers: ["i come home at", "i come at"],
          hint: "Say 'I come home at...'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Come+Home"
        }
      ]
    },
    {
      id: 9,
      title: "Doing Homework",
      description: "Learn to say 'I do my homework' and talk about studying at home.",
      activities: [
        {
          id: "i1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I do my homework.",
          expectedAnswers: ["i do my homework"],
          hint: "Say what you do at home.",
          image: "https://via.placeholder.com/400x200?text=I+Do+My+Homework",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I study at home in the evening.",
          expectedAnswers: ["i study at home in the evening"],
          hint: "Say when you study.",
          image: "https://via.placeholder.com/400x200?text=Study+in+Evening",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I do my homework after eating.",
          expectedAnswers: ["i do my homework after eating"],
          hint: "Say when you do homework.",
          image: "https://via.placeholder.com/400x200?text=Homework+After+Eating"
        },
        {
          id: "i4",
          type: "multiple_choice",
          instruction: "Choose the correct action for homework.",
          content: "What do you do with your homework?",
          options: ["Do it", "Eat it", "Play it"],
          expectedAnswers: ["do it"],
          hint: "You complete it.",
          image: "https://via.placeholder.com/400x200?text=Do+Homework"
        },
        {
          id: "i5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ my homework.",
          expectedAnswers: ["do"],
          hint: "Use 'do'.",
          image: "https://via.placeholder.com/400x200?text=I+Do+My+Homework"
        },
        {
          id: "i6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I study at home in the ______.",
          expectedAnswers: ["evening", "morning", "afternoon"],
          hint: "Say when you study.",
          image: "https://via.placeholder.com/400x200?text=In+the+Blank"
        },
        {
          id: "i7",
          type: "spell_word",
          instruction: "Spell the word 'homework'.",
          content: "homework",
          expectedAnswers: ["homework", "h-o-m-e-w-o-r-k"],
          hint: "It has eight letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Homework"
        },
        {
          id: "i8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My mother helps me with my homework.",
          expectedAnswers: ["my mother helps me with my homework"],
          hint: "Talk about your mother.",
          image: "https://via.placeholder.com/400x200?text=Mother+Helps+with+Homework",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I like to finish my homework early.",
          expectedAnswers: ["i like to finish my homework early"],
          hint: "Say you like to finish early.",
          image: "https://via.placeholder.com/400x200?text=Finish+Homework+Early"
        },
        {
          id: "i10",
          type: "multiple_choice",
          instruction: "Choose the correct action for studying.",
          content: "What do you do to learn at home?",
          options: ["Study", "Sleep", "Dance"],
          expectedAnswers: ["study"],
          hint: "You read and write.",
          image: "https://via.placeholder.com/400x200?text=Study"
        },
        {
          id: "i11",
          type: "spell_word",
          instruction: "Spell the word 'help'.",
          content: "help",
          expectedAnswers: ["help", "h-e-l-p"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Help"
        },
        {
          id: "i12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I do my homework ______ school.",
          expectedAnswers: ["after"],
          hint: "Use 'after'.",
          image: "https://via.placeholder.com/400x200?text=After+School"
        },
        {
          id: "i13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I do my homework every day.",
          expectedAnswers: ["i do my homework every day"],
          hint: "Say you do it daily.",
          image: "https://via.placeholder.com/400x200?text=Homework+Every+Day",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "i14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I do my homework in my room.",
          expectedAnswers: ["i do my homework in my room"],
          hint: "Say where you study.",
          image: "https://via.placeholder.com/400x200?text=Homework+in+My+Room"
        },
        {
          id: "i15",
          type: "revision",
          instruction: "Practise talking about homework.",
          content: "I do my homework. I study in the evening.",
          expectedAnswers: ["i do my homework i study in the evening"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Homework"
        },
        {
          id: "i16",
          type: "challenge_question",
          instruction: "What do you do with your homework?",
          content: "Say what you do with homework.",
          expectedAnswers: ["i do my homework"],
          hint: "Say 'I do my homework'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Homework"
        }
      ]
    },
    {
      id: 10,
      title: "Eating Dinner",
      description: "Learn to say 'I eat dinner' and talk about your evening meal.",
      activities: [
        {
          id: "j1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I eat dinner.",
          expectedAnswers: ["i eat dinner"],
          hint: "Say what you do in the evening.",
          image: "https://via.placeholder.com/400x200?text=I+Eat+Dinner",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I eat dinner at 7 o'clock.",
          expectedAnswers: ["i eat dinner at 7 o'clock", "i eat dinner at seven o'clock"],
          hint: "Say when you eat.",
          image: "https://via.placeholder.com/400x200?text=Dinner+at+7",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "My family eats dinner together.",
          expectedAnswers: ["my family eats dinner together"],
          hint: "Say you eat with family.",
          image: "https://via.placeholder.com/400x200?text=Family+Dinner"
        },
        {
          id: "j4",
          type: "multiple_choice",
          instruction: "Choose the correct meal for evening.",
          content: "What do you eat in the evening?",
          options: ["Dinner", "Breakfast", "Lunch"],
          expectedAnswers: ["dinner"],
          hint: "It is the last meal.",
          image: "https://via.placeholder.com/400x200?text=Dinner"
        },
        {
          id: "j5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ dinner.",
          expectedAnswers: ["eat", "have"],
          hint: "Use 'eat' or 'have'.",
          image: "https://via.placeholder.com/400x200?text=I+Eat+Dinner"
        },
        {
          id: "j6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I eat dinner at 7 ______.",
          expectedAnswers: ["o'clock", "pm"],
          hint: "Say the time.",
          image: "https://via.placeholder.com/400x200?text=At+7+Oclock"
        },
        {
          id: "j7",
          type: "spell_word",
          instruction: "Spell the word 'dinner'.",
          content: "dinner",
          expectedAnswers: ["dinner", "d-i-n-n-e-r"],
          hint: "It has six letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Dinner"
        },
        {
          id: "j8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My mother cooks dinner for us.",
          expectedAnswers: ["my mother cooks dinner for us"],
          hint: "Talk about your mother.",
          image: "https://via.placeholder.com/400x200?text=Mother+Cooks+Dinner",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I like to eat roti and vegetables for dinner.",
          expectedAnswers: ["i like to eat roti and vegetables for dinner"],
          hint: "Say what you like.",
          image: "https://via.placeholder.com/400x200?text=Roti+and+Vegetables"
        },
        {
          id: "j10",
          type: "multiple_choice",
          instruction: "Choose the correct time for dinner.",
          content: "When do you eat dinner?",
          options: ["In the evening", "In the morning", "In the afternoon"],
          expectedAnswers: ["in the evening"],
          hint: "It is after sunset.",
          image: "https://via.placeholder.com/400x200?text=Evening"
        },
        {
          id: "j11",
          type: "spell_word",
          instruction: "Spell the word 'cook'.",
          content: "cook",
          expectedAnswers: ["cook", "c-o-o-k"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Cook"
        },
        {
          id: "j12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "We eat dinner ______ the table.",
          expectedAnswers: ["at", "on"],
          hint: "Use 'at' or 'on'.",
          image: "https://via.placeholder.com/400x200?text=At+the+Table"
        },
        {
          id: "j13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "Dinner is my favourite meal.",
          expectedAnswers: ["dinner is my favourite meal"],
          hint: "Say you like dinner.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Meal",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "j14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "We talk about our day at dinner time.",
          expectedAnswers: ["we talk about our day at dinner time"],
          hint: "Say what you do.",
          image: "https://via.placeholder.com/400x200?text=Talk+About+Day"
        },
        {
          id: "j15",
          type: "revision",
          instruction: "Practise talking about dinner.",
          content: "I eat dinner at 7. My family eats together.",
          expectedAnswers: ["i eat dinner at 7 my family eats together"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Dinner"
        },
        {
          id: "j16",
          type: "challenge_question",
          instruction: "What do you eat for dinner?",
          content: "Say what you eat in the evening.",
          expectedAnswers: ["i eat dinner", "i have dinner"],
          hint: "Say 'I eat dinner'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Dinner"
        }
      ]
    },
    {
      id: 11,
      title: "Watching TV or Playing",
      description: "Learn to say 'I watch TV' and 'I play' in the evening.",
      activities: [
        {
          id: "k1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I watch TV in the evening.",
          expectedAnswers: ["i watch tv in the evening", "i watch television in the evening"],
          hint: "Say what you do.",
          image: "https://via.placeholder.com/400x200?text=I+Watch+TV",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I play games with my brother.",
          expectedAnswers: ["i play games with my brother"],
          hint: "Say what you play.",
          image: "https://via.placeholder.com/400x200?text=Play+Games+with+Brother",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I read story books in the evening.",
          expectedAnswers: ["i read story books in the evening"],
          hint: "Say what you read.",
          image: "https://via.placeholder.com/400x200?text=Read+Story+Books"
        },
        {
          id: "k4",
          type: "multiple_choice",
          instruction: "Choose the correct activity for evening.",
          content: "What do you do in the evening?",
          options: ["Watch TV", "Go to school", "Eat breakfast"],
          expectedAnswers: ["watch tv"],
          hint: "You do it after dinner.",
          image: "https://via.placeholder.com/400x200?text=Watch+TV"
        },
        {
          id: "k5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ TV in the evening.",
          expectedAnswers: ["watch"],
          hint: "Use 'watch'.",
          image: "https://via.placeholder.com/400x200?text=I+Watch+TV"
        },
        {
          id: "k6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ with my friends.",
          expectedAnswers: ["play", "read", "watch"],
          hint: "Say an action.",
          image: "https://via.placeholder.com/400x200?text=Blank+with+FRIENDS"
        },
        {
          id: "k7",
          type: "spell_word",
          instruction: "Spell the word 'watch'.",
          content: "watch",
          expectedAnswers: ["watch", "w-a-t-c-h"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Watch"
        },
        {
          id: "k8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My sister likes to watch cartoons.",
          expectedAnswers: ["my sister likes to watch cartoons"],
          hint: "Talk about your sister.",
          image: "https://via.placeholder.com/400x200?text=Watch+Cartoons",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I play board games with my family.",
          expectedAnswers: ["i play board games with my family"],
          hint: "Say what you play.",
          image: "https://via.placeholder.com/400x200?text=Board+Games"
        },
        {
          id: "k10",
          type: "multiple_choice",
          instruction: "Choose the correct activity for relaxing.",
          content: "What do you do to relax?",
          options: ["Watch TV", "Go to school", "Eat breakfast"],
          expectedAnswers: ["watch tv"],
          hint: "You do it for fun.",
          image: "https://via.placeholder.com/400x200?text=Relax"
        },
        {
          id: "k11",
          type: "spell_word",
          instruction: "Spell the word 'game'.",
          content: "game",
          expectedAnswers: ["game", "g-a-m-e"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Game"
        },
        {
          id: "k12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ cartoons on TV.",
          expectedAnswers: ["watch"],
          hint: "Use 'watch'.",
          image: "https://via.placeholder.com/400x200?text=I+Watch+Cartoons"
        },
        {
          id: "k13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I like to read books before bed.",
          expectedAnswers: ["i like to read books before bed"],
          hint: "Say what you like.",
          image: "https://via.placeholder.com/400x200?text=Read+Books+Before+Bed",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "k14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "Evening is my favourite time of the day.",
          expectedAnswers: ["evening is my favourite time of the day"],
          hint: "Say you like evening.",
          image: "https://via.placeholder.com/400x200?text=Favourite+Time"
        },
        {
          id: "k15",
          type: "revision",
          instruction: "Practise talking about evening activities.",
          content: "I watch TV. I play games.",
          expectedAnswers: ["i watch tv i play games"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Evening+Activities"
        },
        {
          id: "k16",
          type: "challenge_question",
          instruction: "What do you do in the evening?",
          content: "Say what you do in the evening.",
          expectedAnswers: ["i watch tv", "i play", "i read"],
          hint: "Say 'I watch TV' or 'I play'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Evening+Activities"
        }
      ]
    },
    {
      id: 12,
      title: "Going to Bed",
      description: "Learn to say 'I go to bed' and talk about bedtime routine.",
      activities: [
        {
          id: "l1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I go to bed at 9 o'clock.",
          expectedAnswers: ["i go to bed at 9 o'clock", "i go to bed at nine o'clock"],
          hint: "Say when you sleep.",
          image: "https://via.placeholder.com/400x200?text=I+Go+to+Bed+at+9",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I brush my teeth before bed.",
          expectedAnswers: ["i brush my teeth before bed"],
          hint: "Say what you do.",
          image: "https://via.placeholder.com/400x200?text=Brush+Teeth+Before+Bed",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I put on my pyjamas.",
          expectedAnswers: ["i put on my pyjamas", "i put on my pajamas"],
          hint: "Say what you wear.",
          image: "https://via.placeholder.com/400x200?text=Put+on+Pyjamas"
        },
        {
          id: "l4",
          type: "multiple_choice",
          instruction: "Choose the correct action before sleep.",
          content: "What do you do before sleeping?",
          options: ["Brush teeth", "Go to school", "Eat breakfast"],
          expectedAnswers: ["brush teeth"],
          hint: "You do this to clean.",
          image: "https://via.placeholder.com/400x200?text=Before+Sleep"
        },
        {
          id: "l5",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ to bed at 9.",
          expectedAnswers: ["go"],
          hint: "Use 'go'.",
          image: "https://via.placeholder.com/400x200?text=I+Go+to+Bed"
        },
        {
          id: "l6",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I brush my teeth ______ bed.",
          expectedAnswers: ["before"],
          hint: "Use 'before'.",
          image: "https://via.placeholder.com/400x200?text=Before+Bed"
        },
        {
          id: "l7",
          type: "spell_word",
          instruction: "Spell the word 'bed'.",
          content: "bed",
          expectedAnswers: ["bed", "b-e-d"],
          hint: "It has three letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Bed"
        },
        {
          id: "l8",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "My mother reads me a story at bedtime.",
          expectedAnswers: ["my mother reads me a story at bedtime"],
          hint: "Talk about your mother.",
          image: "https://via.placeholder.com/400x200?text=Story+at+Bedtime",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l9",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I say goodnight to my parents.",
          expectedAnswers: ["i say goodnight to my parents"],
          hint: "Say what you do.",
          image: "https://via.placeholder.com/400x200?text=Say+Goodnight"
        },
        {
          id: "l10",
          type: "multiple_choice",
          instruction: "Choose the correct time for bed.",
          content: "When do you go to bed?",
          options: ["At 9 o'clock", "At 12 o'clock", "At 6 o'clock"],
          expectedAnswers: ["at 9 o'clock"],
          hint: "It is night time.",
          image: "https://via.placeholder.com/400x200?text=9+Oclock"
        },
        {
          id: "l11",
          type: "spell_word",
          instruction: "Spell the word 'story'.",
          content: "story",
          expectedAnswers: ["story", "s-t-o-r-y"],
          hint: "It has five letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Story"
        },
        {
          id: "l12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ to sleep.",
          expectedAnswers: ["go"],
          hint: "Use 'go'.",
          image: "https://via.placeholder.com/400x200?text=I+Go+to+Sleep"
        },
        {
          id: "l13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I like to read a book in bed.",
          expectedAnswers: ["i like to read a book in bed"],
          hint: "Say what you like.",
          image: "https://via.placeholder.com/400x200?text=Read+in+Bed",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "l14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I do not like to go to bed late.",
          expectedAnswers: ["i do not like to go to bed late", "i don't like to go to bed late"],
          hint: "Say you don't like being late.",
          image: "https://via.placeholder.com/400x200?text=Don't+Go+to+Bed+Late"
        },
        {
          id: "l15",
          type: "revision",
          instruction: "Practise talking about bedtime.",
          content: "I go to bed at 9. I brush my teeth before bed.",
          expectedAnswers: ["i go to bed at 9 i brush my teeth before bed"],
          hint: "Say both sentences.",
          image: "https://via.placeholder.com/400x200?text=Practice+Bedtime"
        },
        {
          id: "l16",
          type: "challenge_question",
          instruction: "What time do you go to bed?",
          content: "Say when you go to sleep.",
          expectedAnswers: ["i go to bed at"],
          hint: "Say 'I go to bed at...'",
          image: "https://via.placeholder.com/400x200?text=Challenge+Bedtime"
        }
      ]
    },
    {
      id: 13,
      title: "Using 'I' and 'We' – Talking About Myself and My Family",
      description: "Learn to use 'I' for yourself and 'We' for you and your family.",
      activities: [
        {
          id: "m1",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I wake up at 6 o'clock.",
          expectedAnswers: ["i wake up at 6 o'clock"],
          hint: "Talk about yourself.",
          image: "https://via.placeholder.com/400x200?text=I+Wake+Up",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m2",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "We eat breakfast together.",
          expectedAnswers: ["we eat breakfast together"],
          hint: "Talk about your family.",
          image: "https://via.placeholder.com/400x200?text=We+Eat+Breakfast",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m3",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I go to school. We go to school together.",
          expectedAnswers: ["i go to school we go to school together"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=I+and+We+Go+to+School"
        },
        {
          id: "m4",
          type: "multiple_choice",
          instruction: "Choose the correct word for yourself.",
          content: "Which word do you use for yourself?",
          options: ["I", "We", "You"],
          expectedAnswers: ["i"],
          hint: "Use 'I'.",
          image: "https://via.placeholder.com/400x200?text=I"
        },
        {
          id: "m5",
          type: "multiple_choice",
          instruction: "Choose the correct word for you and your family.",
          content: "Which word do you use for you and your family?",
          options: ["We", "I", "They"],
          expectedAnswers: ["we"],
          hint: "Use 'We'.",
          image: "https://via.placeholder.com/400x200?text=We"
        },
        {
          id: "m6",
          type: "sentence_completion",
          instruction: "Complete the sentence for yourself.",
          content: "______ wake up at 6.",
          expectedAnswers: ["i"],
          hint: "Use 'I'.",
          image: "https://via.placeholder.com/400x200?text=I+Wake+Up+at+6"
        },
        {
          id: "m7",
          type: "sentence_completion",
          instruction: "Complete the sentence for your family.",
          content: "______ eat dinner at 7.",
          expectedAnswers: ["we"],
          hint: "Use 'We'.",
          image: "https://via.placeholder.com/400x200?text=We+Eat+Dinner"
        },
        {
          id: "m8",
          type: "spell_word",
          instruction: "Spell the word 'we'.",
          content: "we",
          expectedAnswers: ["we", "w-e"],
          hint: "It has two letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+We"
        },
        {
          id: "m9",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I go to school. We go to school by bus.",
          expectedAnswers: ["i go to school we go to school by bus"],
          hint: "Practise both.",
          image: "https://via.placeholder.com/400x200?text=I+and+We",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m10",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I play with my friends. We play cricket together.",
          expectedAnswers: ["i play with my friends we play cricket together"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Play+Together"
        },
        {
          id: "m11",
          type: "multiple_choice",
          instruction: "Choose the correct sentence.",
          content: "Which is correct for you and your family?",
          options: ["We eat dinner together", "I eat dinner together", "You eat dinner"],
          expectedAnswers: ["we eat dinner together"],
          hint: "Use 'We'.",
          image: "https://via.placeholder.com/400x200?text=We+Eat+Dinner"
        },
        {
          id: "m12",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "______ like to play cricket.",
          expectedAnswers: ["i", "we"],
          hint: "Use 'I' or 'We'.",
          image: "https://via.placeholder.com/400x200?text=Blank+Like+to+Play"
        },
        {
          id: "m13",
          type: "listen_repeat",
          instruction: "Listen and repeat this sentence.",
          content: "I do my homework. We study together.",
          expectedAnswers: ["i do my homework we study together"],
          hint: "Practise both.",
          image: "https://via.placeholder.com/400x200?text=Do+Homework+Together",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "m14",
          type: "read_aloud",
          instruction: "Read this sentence aloud.",
          content: "I watch TV. We watch TV after dinner.",
          expectedAnswers: ["i watch tv we watch tv after dinner"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=I+and+We+Watch+TV"
        },
        {
          id: "m15",
          type: "revision",
          instruction: "Practise using 'I' and 'We'.",
          content: "I go to school. We eat together.",
          expectedAnswers: ["i go to school we eat together"],
          hint: "Say both.",
          image: "https://via.placeholder.com/400x200?text=Practice+I+and+We"
        },
        {
          id: "m16",
          type: "challenge_question",
          instruction: "Use 'I' for yourself and 'We' for your family in two sentences.",
          content: "Say one thing about you and one about your family.",
          expectedAnswers: ["i", "we"],
          hint: "Use 'I' and 'We'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+I+and+We"
        }
      ]
    },
    {
      id: 14,
      title: "Dialogue – My Daily Routine",
      description: "Practise a full dialogue talking about your daily routine.",
      activities: [
        {
          id: "n1",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "What time do you wake up?",
          expectedAnswers: ["what time do you wake up", "what time do you wake up?"],
          hint: "Ask about waking up.",
          image: "https://via.placeholder.com/400x200?text=What+Time+Do+You+Wake+Up",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n2",
          type: "listen_repeat",
          instruction: "Listen and repeat this response.",
          content: "I wake up at 6 o'clock.",
          expectedAnswers: ["i wake up at 6 o'clock"],
          hint: "Answer the question.",
          image: "https://via.placeholder.com/400x200?text=I+Wake+Up+at+6",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n3",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "What do you eat for breakfast? I eat toast and eggs.",
          expectedAnswers: ["what do you eat for breakfast i eat toast and eggs"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Breakfast+Dialogue"
        },
        {
          id: "n4",
          type: "multiple_choice",
          instruction: "Choose the correct question about wake-up time.",
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
          content: "______ time do you wake up?",
          expectedAnswers: ["what"],
          hint: "Use 'What'.",
          image: "https://via.placeholder.com/400x200?text=What+Time+Do+You+Wake+Up"
        },
        {
          id: "n6",
          type: "sentence_completion",
          instruction: "Complete the answer.",
          content: "I wake up ______ 6 o'clock.",
          expectedAnswers: ["at"],
          hint: "Use 'at'.",
          image: "https://via.placeholder.com/400x200?text=At+6+Oclock"
        },
        {
          id: "n7",
          type: "spell_word",
          instruction: "Spell the word 'routine'.",
          content: "routine",
          expectedAnswers: ["routine", "r-o-u-t-i-n-e"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Routine"
        },
        {
          id: "n8",
          type: "listen_repeat",
          instruction: "Listen and repeat this dialogue.",
          content: "What do you do in the evening? I do my homework and watch TV.",
          expectedAnswers: ["what do you do in the evening i do my homework and watch tv"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Evening+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n9",
          type: "read_aloud",
          instruction: "Read this dialogue aloud.",
          content: "When do you go to bed? I go to bed at 9 o'clock.",
          expectedAnswers: ["when do you go to bed i go to bed at 9 o'clock", "when do you go to bed i go to bed at nine o'clock"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=Bedtime+Dialogue"
        },
        {
          id: "n10",
          type: "multiple_choice",
          instruction: "Choose the correct response to 'What time do you wake up?'",
          content: "Someone asks about your wake-up time. What do you say?",
          options: ["I wake up at 6", "I go to school", "I eat dinner"],
          expectedAnswers: ["i wake up at 6"],
          hint: "Tell your wake-up time.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+at+6"
        },
        {
          id: "n11",
          type: "spell_word",
          instruction: "Spell the word 'when'.",
          content: "when",
          expectedAnswers: ["when", "w-h-e-n"],
          hint: "It has four letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+When"
        },
        {
          id: "n12",
          type: "sentence_completion",
          instruction: "Complete the question.",
          content: "______ do you go to bed?",
          expectedAnswers: ["when"],
          hint: "Use 'When'.",
          image: "https://via.placeholder.com/400x200?text=When+Do+You+Go+to+Bed"
        },
        {
          id: "n13",
          type: "listen_repeat",
          instruction: "Listen and repeat this full dialogue.",
          content: "What time do you wake up? I wake up at 6. What do you eat for breakfast? I eat toast and eggs. When do you go to bed? I go to bed at 9.",
          expectedAnswers: ["what time do you wake up i wake up at 6 what do you eat for breakfast i eat toast and eggs when do you go to bed i go to bed at 9"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Full+Routine+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "n14",
          type: "read_aloud",
          instruction: "Read this dialogue with a partner.",
          content: "What do you do after school? I come home and do my homework.",
          expectedAnswers: ["what do you do after school i come home and do my homework"],
          hint: "Ask and answer.",
          image: "https://via.placeholder.com/400x200?text=After+School+Dialogue"
        },
        {
          id: "n15",
          type: "revision",
          instruction: "Practise a full daily routine dialogue.",
          content: "What time do you wake up? I wake up at 6. What do you do in the evening? I watch TV.",
          expectedAnswers: ["what time do you wake up i wake up at 6 what do you do in the evening i watch tv"],
          hint: "Say the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Practice+Routine+Dialogue"
        },
        {
          id: "n16",
          type: "challenge_question",
          instruction: "Ask someone about their daily routine.",
          content: "Ask two questions about someone's routine.",
          expectedAnswers: ["what time do you wake up", "what do you do in the evening"],
          hint: "Ask 'What time...' and 'What do you...'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Ask+Routine"
        }
      ]
    },
    {
      id: 15,
      title: "Review – Talking About My Daily Routine",
      description: "Consolidate everything you have learned about daily routines.",
      activities: [
        {
          id: "o1",
          type: "listen_repeat",
          instruction: "Listen and repeat all the daily routine verbs.",
          content: "Wake up, get up, brush, wash, eat, drink, go, study, play, come, do, watch, read, sleep.",
          expectedAnswers: ["wake up get up brush wash eat drink go study play come do watch read sleep"],
          hint: "Say all the verbs.",
          image: "https://via.placeholder.com/400x200?text=All+Routine+Verbs",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o2",
          type: "listen_repeat",
          instruction: "Listen and repeat this full routine.",
          content: "I wake up at 6. I brush my teeth. I eat breakfast. I go to school. I study. I come home. I do homework. I eat dinner. I watch TV. I go to bed.",
          expectedAnswers: ["i wake up at 6 i brush my teeth i eat breakfast i go to school i study i come home i do homework i eat dinner i watch tv i go to bed"],
          hint: "Say your whole routine.",
          image: "https://via.placeholder.com/400x200?text=Full+Routine",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o3",
          type: "read_aloud",
          instruction: "Read this full routine aloud.",
          content: "My name is Ravi. I am a student. I wake up at 6 o'clock. I brush my teeth. I eat breakfast. I go to school by bus. I study at school. I come home at 3. I do my homework. I eat dinner at 7. I watch TV. I go to bed at 9.",
          expectedAnswers: ["my name is ravi i am a student i wake up at 6 o'clock i brush my teeth i eat breakfast i go to school by bus i study at school i come home at 3 i do my homework i eat dinner at 7 i watch tv i go to bed at 9"],
          hint: "Say everything.",
          image: "https://via.placeholder.com/400x200?text=Full+Routine+Description"
        },
        {
          id: "o4",
          type: "multiple_choice",
          instruction: "Choose the correct word for waking up.",
          content: "What do you do first in the morning?",
          options: ["Wake up", "Eat lunch", "Go to school"],
          expectedAnswers: ["wake up"],
          hint: "You open your eyes.",
          image: "https://via.placeholder.com/400x200?text=Wake+Up+Review"
        },
        {
          id: "o5",
          type: "multiple_choice",
          instruction: "Choose the correct word for getting out of bed.",
          content: "What do you do after waking up?",
          options: ["Get up", "Go to bed", "Eat lunch"],
          expectedAnswers: ["get up"],
          hint: "You leave your bed.",
          image: "https://via.placeholder.com/400x200?text=Get+Up+Review"
        },
        {
          id: "o6",
          type: "multiple_choice",
          instruction: "Choose the correct word for cleaning teeth.",
          content: "What do you do to clean your teeth?",
          options: ["Brush", "Wash", "Take"],
          expectedAnswers: ["brush"],
          hint: "You use a toothbrush.",
          image: "https://via.placeholder.com/400x200?text=Brush+Review"
        },
        {
          id: "o7",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ up at 6 o'clock.",
          expectedAnswers: ["wake", "get"],
          hint: "Say 'wake' or 'get'.",
          image: "https://via.placeholder.com/400x200?text=Blank+Up+at+6"
        },
        {
          id: "o8",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ to school.",
          expectedAnswers: ["go"],
          hint: "Use 'go'.",
          image: "https://via.placeholder.com/400x200?text=I+Go+to+School"
        },
        {
          id: "o9",
          type: "sentence_completion",
          instruction: "Complete the sentence.",
          content: "I ______ my homework.",
          expectedAnswers: ["do"],
          hint: "Use 'do'.",
          image: "https://via.placeholder.com/400x200?text=I+Do+My+Homework"
        },
        {
          id: "o10",
          type: "spell_word",
          instruction: "Spell the word 'morning'.",
          content: "morning",
          expectedAnswers: ["morning", "m-o-r-n-i-n-g"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Morning"
        },
        {
          id: "o11",
          type: "spell_word",
          instruction: "Spell the word 'evening'.",
          content: "evening",
          expectedAnswers: ["evening", "e-v-e-n-i-n-g"],
          hint: "It has seven letters.",
          image: "https://via.placeholder.com/400x200?text=Spell+Evening"
        },
        {
          id: "o12",
          type: "listen_repeat",
          instruction: "Listen and repeat this review dialogue.",
          content: "What time do you wake up? I wake up at 6. What do you eat for breakfast? I eat toast. When do you go to bed? I go to bed at 9.",
          expectedAnswers: ["what time do you wake up i wake up at 6 what do you eat for breakfast i eat toast when do you go to bed i go to bed at 9"],
          hint: "Practice the full exchange.",
          image: "https://via.placeholder.com/400x200?text=Review+Routine+Dialogue",
          audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        },
        {
          id: "o13",
          type: "read_aloud",
          instruction: "Read this full description aloud.",
          content: "I am a student. I wake up at 6. I get ready. I eat breakfast. I go to school. I study. I come home. I do homework. I eat dinner. I watch TV. I go to bed. This is my daily routine.",
          expectedAnswers: ["i am a student i wake up at 6 i get ready i eat breakfast i go to school i study i come home i do homework i eat dinner i watch tv i go to bed this is my daily routine"],
          hint: "Say your full routine.",
          image: "https://via.placeholder.com/400x200?text=My+Daily+Routine"
        },
        {
          id: "o14",
          type: "multiple_choice",
          instruction: "Choose the correct question to ask about daily routine.",
          content: "How do you ask someone about their routine?",
          options: ["What do you do every day?", "What is your name?", "How are you?"],
          expectedAnswers: ["what do you do every day"],
          hint: "Ask about daily activities.",
          image: "https://via.placeholder.com/400x200?text=Ask+About+Routine"
        },
        {
          id: "o15",
          type: "revision",
          instruction: "Practice describing your whole daily routine.",
          content: "I wake up at 6. I go to school. I come home. I do homework. I go to bed at 9.",
          expectedAnswers: ["i wake up at 6 i go to school i come home i do homework i go to bed at 9"],
          hint: "Say your main activities.",
          image: "https://via.placeholder.com/400x200?text=Review+Routine"
        },
        {
          id: "o16",
          type: "challenge_question",
          instruction: "Tell your daily routine in three sentences.",
          content: "Describe your daily routine.",
          expectedAnswers: ["i wake up", "i go to school", "i go to bed"],
          hint: "Use 'I' and say what you do.",
          image: "https://via.placeholder.com/400x200?text=Final+Challenge+Routine"
        },
        {
          id: "o17",
          type: "challenge_question",
          instruction: "Ask someone about their morning routine.",
          content: "Ask two questions about someone's morning.",
          expectedAnswers: ["what time do you wake up", "what do you eat for breakfast"],
          hint: "Ask 'What time...' and 'What do you...'.",
          image: "https://via.placeholder.com/400x200?text=Challenge+Ask+Morning+Routine"
        }
      ]
    }
  ],
  challengeTest: {
    id: "ch6",
    activities: [
      {
        id: "ch1",
        type: "multiple_choice",
        instruction: "What do you do first in the morning?",
        content: "Which is the first action?",
        options: ["Wake up", "Eat lunch", "Go to school"],
        expectedAnswers: ["wake up"],
        hint: "You open your eyes.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Wake+Up"
      },
      {
        id: "ch2",
        type: "multiple_choice",
        instruction: "What do you do to clean your teeth?",
        content: "Which action cleans teeth?",
        options: ["Brush", "Wash", "Comb"],
        expectedAnswers: ["brush"],
        hint: "You use a toothbrush.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Brush"
      },
      {
        id: "ch3",
        type: "multiple_choice",
        instruction: "What do you eat in the morning?",
        content: "Which meal is in the morning?",
        options: ["Breakfast", "Lunch", "Dinner"],
        expectedAnswers: ["breakfast"],
        hint: "It is the first meal.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Breakfast"
      },
      {
        id: "ch4",
        type: "multiple_choice",
        instruction: "Where do you go to study?",
        content: "Where do you learn?",
        options: ["School", "Home", "Park"],
        expectedAnswers: ["school"],
        hint: "You go there to study.",
        image: "https://via.placeholder.com/400x200?text=Challenge+School"
      },
      {
        id: "ch5",
        type: "multiple_choice",
        instruction: "What do you do after school?",
        content: "Which action do you do at home?",
        options: ["Come home", "Go to school", "Wake up"],
        expectedAnswers: ["come home"],
        hint: "You return.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Come+Home"
      },
      {
        id: "ch6",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I ______ up at 6 o'clock.",
        expectedAnswers: ["wake", "get"],
        hint: "Say 'wake' or 'get'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Wake+Up"
      },
      {
        id: "ch7",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I ______ my teeth.",
        expectedAnswers: ["brush"],
        hint: "Use 'brush'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Brush+Teeth"
      },
      {
        id: "ch8",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I eat ______ in the morning.",
        expectedAnswers: ["breakfast"],
        hint: "Use 'breakfast'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Eat+Breakfast"
      },
      {
        id: "ch9",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I ______ to school.",
        expectedAnswers: ["go"],
        hint: "Use 'go'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Go+to+School"
      },
      {
        id: "ch10",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I do my ______.",
        expectedAnswers: ["homework"],
        hint: "Use 'homework'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Homework"
      },
      {
        id: "ch11",
        type: "multiple_choice",
        instruction: "What do you do before going to bed?",
        content: "Which action is before bed?",
        options: ["Brush teeth", "Eat breakfast", "Go to school"],
        expectedAnswers: ["brush teeth"],
        hint: "You clean.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Before+Bed"
      },
      {
        id: "ch12",
        type: "multiple_choice",
        instruction: "What time is for breakfast?",
        content: "When do you eat breakfast?",
        options: ["In the morning", "In the evening", "At night"],
        expectedAnswers: ["in the morning"],
        hint: "It is the first meal.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Morning"
      },
      {
        id: "ch13",
        type: "listen_repeat",
        instruction: "Listen and repeat this sentence.",
        content: "I wake up at 6 o'clock.",
        expectedAnswers: ["i wake up at 6 o'clock"],
        hint: "Say your time.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Wake+Up+Time",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch14",
        type: "listen_repeat",
        instruction: "Listen and repeat this sentence.",
        content: "I go to school by bus.",
        expectedAnswers: ["i go to school by bus"],
        hint: "Say how you go.",
        image: "https://via.placeholder.com/400x200?text=Challenge+By+Bus",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch15",
        type: "listen_repeat",
        instruction: "Listen and repeat this dialogue.",
        content: "What do you do in the evening? I watch TV.",
        expectedAnswers: ["what do you do in the evening i watch tv"],
        hint: "Ask and answer.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Evening+Dialogue",
        audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
      },
      {
        id: "ch16",
        type: "sentence_completion",
        instruction: "Complete the sentence.",
        content: "I ______ dinner at 7.",
        expectedAnswers: ["eat", "have"],
        hint: "Use 'eat' or 'have'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+Eat+Dinner"
      },
      {
        id: "ch17",
        type: "sentence_completion",
        instruction: "Complete the question.",
        content: "______ time do you wake up?",
        expectedAnswers: ["what"],
        hint: "Use 'What'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+What+Time"
      },
      {
        id: "ch18",
        type: "sentence_completion",
        instruction: "Complete the question.",
        content: "______ do you go to bed?",
        expectedAnswers: ["when"],
        hint: "Use 'When'.",
        image: "https://via.placeholder.com/400x200?text=Challenge+When"
      },
      {
        id: "ch19",
        type: "challenge_question",
        instruction: "Tell three things you do in the morning.",
        content: "Say three morning activities.",
        expectedAnswers: ["i wake up", "i brush my teeth", "i eat breakfast"],
        hint: "Say 'I wake up, I brush, I eat breakfast'.",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+Morning+Routine"
      },
      {
        id: "ch20",
        type: "challenge_question",
        instruction: "Ask someone three questions about their daily routine.",
        content: "Ask about wake-up time, breakfast, and bedtime.",
        expectedAnswers: ["what time do you wake up", "what do you eat for breakfast", "when do you go to bed"],
        hint: "Use 'What time', 'What', and 'When'.",
        image: "https://via.placeholder.com/400x200?text=Final+Challenge+Ask+Routine"
      }
    ]
  }
};