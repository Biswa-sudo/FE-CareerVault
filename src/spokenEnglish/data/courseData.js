export const courseData = {
  subjects: [
    // ---- FOUNDATION ----
    {
      id: 1,
      title: "Greetings & Daily Expressions",
      description: "Learn common greetings and everyday phrases.",
      lessons: [
        {
          id: 1,
          title: "Morning Greetings",
          description: "Practice saying 'Good morning', 'Hello', etc.",
          activities: [
            {
              id: "a1",
              type: "listen_repeat",
              instruction: "Listen to the phrase and repeat it aloud.",
              content: "Good morning!",
              expectedAnswers: ["good morning", "good morning!"],
              hint: "Say it clearly.",
              image: "https://via.placeholder.com/400x200?text=Good+Morning"
            },
            {
              id: "a2",
              type: "read_aloud",
              instruction: "Read the sentence aloud.",
              content: "How are you today?",
              expectedAnswers: ["how are you today", "how are you today?"],
              hint: "Use a friendly tone."
            },
            {
              id: "a3",
              type: "multiple_choice",
              instruction: "Choose the correct morning greeting.",
              content: "Which is a morning greeting?",
              options: ["Good night", "Good morning", "Goodbye"],
              expectedAnswers: ["good morning"],
              hint: ""
            }
          ]
        },
        {
          id: 2,
          title: "Evening & Night Greetings",
          description: "Practice 'Good evening', 'Good night', etc.",
          activities: [
            {
              id: "b1",
              type: "listen_repeat",
              instruction: "Repeat after the audio.",
              content: "Good evening!",
              expectedAnswers: ["good evening", "good evening!"],
              hint: "",
              image: "https://via.placeholder.com/400x200?text=Good+Evening"
            },
            {
              id: "b2",
              type: "sentence_completion",
              instruction: "Complete the sentence.",
              content: "___ night! (say good night)",
              expectedAnswers: ["good night", "good night!"],
              hint: "Start with 'Good'"
            },
            {
              id: "b3",
              type: "multiple_choice",
              instruction: "What do you say when you go to bed?",
              content: "Choose the correct phrase.",
              options: ["Good morning", "Good night", "Goodbye"],
              expectedAnswers: ["good night"],
              hint: ""
            }
          ]
        },
        {
          id: 3,
          title: "Polite Expressions",
          description: "Learn 'Please', 'Thank you', 'Sorry', etc.",
          activities: [
            {
              id: "c1",
              type: "listen_repeat",
              instruction: "Repeat after the audio.",
              content: "Thank you!",
              expectedAnswers: ["thank you", "thank you!"],
              hint: ""
            },
            {
              id: "c2",
              type: "read_aloud",
              instruction: "Read this sentence aloud.",
              content: "Please sit down.",
              expectedAnswers: ["please sit down", "please sit down."],
              hint: "Speak politely."
            },
            {
              id: "c3",
              type: "spell_word",
              instruction: "Spell the word 'PLEASE'.",
              content: "PLEASE",
              expectedAnswers: ["please", "p l e a s e"],
              hint: "It has 6 letters."
            }
          ]
        }
      ],
      challengeTest: {
        id: "ch1",
        activities: [
          {
            id: "c1",
            type: "multiple_choice",
            instruction: "Choose the correct greeting.",
            content: "What do you say in the morning?",
            options: ["Good morning", "Good night", "Goodbye"],
            expectedAnswers: ["good morning"],
            hint: ""
          },
          {
            id: "c2",
            type: "listen_repeat",
            instruction: "Say 'Hello' clearly.",
            content: "Hello",
            expectedAnswers: ["hello"],
            hint: ""
          },
          {
            id: "c3",
            type: "sentence_completion",
            instruction: "Complete: '___ you.' (thank)",
            content: "Thank you.",
            expectedAnswers: ["thank you", "thank you."],
            hint: ""
          }
        ]
      }
    },
    {
      id: 2,
      title: "Self Introduction",
      description: "Introduce yourself confidently.",
      lessons: [
        {
          id: 1,
          title: "Name & Age",
          description: "Practice saying your name and age.",
          activities: [
            {
              id: "d1",
              type: "read_aloud",
              instruction: "Read this introduction.",
              content: "My name is John. I am 10 years old.",
              expectedAnswers: [
                "my name is john i am 10 years old",
                "my name is john. i am 10 years old."
              ],
              hint: "Speak clearly.",
              image: "https://via.placeholder.com/400x200?text=Introduce+Yourself",
              audio: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
            }
          ]
        }
        // more lessons...
      ],
      challengeTest: { activities: [] }
    },
    // ... remaining subjects 3–25 (same as before, no images/audio)
    { id: 3, title: "Family & Friends", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 4, title: "Everyday Conversations", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 5, title: "Home & Daily Routine", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 6, title: "School & Classroom", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 7, title: "Shopping", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 8, title: "Food & Restaurant", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 9, title: "Time & Schedule", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 10, title: "Travelling", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 11, title: "Health & Doctor", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 12, title: "Asking Directions", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 13, title: "Telephone Conversations", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 14, title: "Office & Workplace", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 15, title: "Banking", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 16, title: "Hotel & Tourism", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 17, title: "Asking Questions", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 18, title: "Giving Opinions", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 19, title: "Expressing Feelings", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 20, title: "Story Speaking", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 21, title: "Interviews", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 22, title: "Group Discussions", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 23, title: "Public Speaking", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 24, title: "Real Life Conversations", description: "", lessons: [], challengeTest: { activities: [] } },
    { id: 25, title: "Fluent Speaker Challenge", description: "", lessons: [], challengeTest: { activities: [] } }
  ]
};