# LocalStorage Audit (Pre-Migration)

## Direct API usage instances found

- src/lib/localStorage.js
  - getItem: subscriptionStatus, paymentDate, registeredUser, loggedIn, currentUser, cvs, documents
  - setItem: subscriptionStatus, paymentDate, registeredUser, loggedIn, currentUser, cvs, documents
  - removeItem: loggedIn, currentUser
- src/lib/topicPracticeStore.js
  - getItem/setItem/removeItem: topicPracticeQuestions, used_topics
- src/spokenEnglish/services/progressService.js
  - getItem/setItem: benture_spoken_english_progress
- src/pages/AIInterview.jsx
  - getItem/setItem: aiInterviewChatHistoryByTopic
- src/pages/PortfolioPage.jsx
  - getItem/setItem: portfolio_data, portfolio_template

No localStorage.clear() calls were found.

## Unique keys discovered

- subscriptionStatus
- paymentDate
- registeredUser
- loggedIn
- currentUser
- cvs
- documents
- topicPracticeQuestions
- used_topics
- benture_spoken_english_progress
- aiInterviewChatHistoryByTopic
- portfolio_data
- portfolio_template

## Data shape summary

- subscriptionStatus: string enum like active/inactive
- paymentDate: ISO datetime string
- registeredUser/currentUser: object {name, email, password?}
- loggedIn: string "true"/missing
- cvs: array of {id, name, templateId, data, updatedAt}
- documents: array of {id, name, type, data, uploadedAt}
- topicPracticeQuestions: array of {id, topic, question, concept, userAnswer?, userRating?, createdAt}
- used_topics: array of topic strings
- benture_spoken_english_progress: object with course progress state
- aiInterviewChatHistoryByTopic: object map topicKey -> message[]
- portfolio_data: object containing profile fields and arrays (skills, experience, education, services, projects, testimonials, cvs, documents, certificates, hobbies)
- portfolio_template: same structure as portfolio_data
