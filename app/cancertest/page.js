'use client';
import { useState, useEffect, useRef } from 'react';

const questions = [
  "Do you have unexplained weight loss? ⚖️",
  "Do you have any unexplained bleeding or discharge? 🩸",
  "Have you had recent unexplained fever or night sweats? 🌡️",
  "Do you have a family history of cancer? 🧬",
  "Do you smoke or use tobacco products? 🚬",
  "Have you experienced sudden and unexplained changes in your health? 🔍"
];

const typingSpeed = 10; // Speed of typing in milliseconds

const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [chat, setChat] = useState([]);
  const [typingMessage, setTypingMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showShareButton, setShowShareButton] = useState(false);
  const chatEndRef = useRef(null);

  // Effect to handle scrolling to the bottom when new messages are added
  useEffect(() => {
    if (chatEndRef.current) {
      const chatContainer = chatEndRef.current.parentElement;
      const scrollHeight = chatContainer.scrollHeight;
      const clientHeight = chatContainer.clientHeight;
      const offset = 20; // Adjust this value for margin/padding

      chatContainer.scrollTo({
        top: scrollHeight - clientHeight + offset,
        behavior: 'smooth'
      });
    }
  }, [chat]);

  // Effect to handle the typing animation
  useEffect(() => {
    if (typingMessage) {
      let index = 0;
      setIsTyping(true); // Start typing animation
      const typeMessage = () => {
        if (index < typingMessage.length) {
          setChat((prev) => {
            const lastMessage = prev[prev.length - 1];
            const newMessage = typingMessage.slice(0, index + 1);
            return [
              ...prev.slice(0, -1),
              { message: newMessage, sender: lastMessage.sender }
            ];
          });
          index += 1;
          setTimeout(typeMessage, typingSpeed);
        } else {
          setIsTyping(false); // Stop typing animation
          setTypingMessage('');
        }
      };
      typeMessage();
    }
  }, [typingMessage]);

  const addMessageToChat = (message, sender = 'bot') => {
    if (sender === 'bot') {
      setChat((prev) => [...prev, { message: '', sender }]);
      setTypingMessage(message);
    } else {
      setChat((prev) => [...prev, { message, sender }]);
    }
  };

  const handleNameAndGenderSubmit = () => {
    addMessageToChat(name, 'user');
    addMessageToChat(`Hello ${name}! You have entered as ${gender}. Let's get started with some questions.`, 'bot');
    addMessageToChat(questions[0], 'bot');
    setStep(1);
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);

    addMessageToChat(answer, 'user');

    // Scroll down to show the user's response
    setTimeout(() => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 100);

    // Proceed to the next question or show the final report after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        const nextQuestion = questions[currentQuestionIndex + 1];
        addMessageToChat(nextQuestion, 'bot');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setStep(2);
        generateFinalReport();
      }
    }, 500); // Adjust delay if needed
  };

  const generateFinalReport = () => {
    const finalMessage = `
      Analyzing........
    `;
    
    const videoMessage = `
    <p>Hey ${gender === 'Male' ? 'Mr.' : 'Miss.'} ${name}, 🩺</p>
      <p>It's important to remember that self diagnosing through online searches & tools can lead to unnecessary panic and misinformation. 🌐</p>
      <p>When you're feeling unwell or have health concerns, avoid searching for symptoms online and assuming the worst. Searching online often leads to alarming results like cancer, which is a hot topic and frequently used to engage users and drive traffic. 🚨</p>
      <p>These websites aim to get clicks and ad revenue, and they often exploit our fears. Instead of trying to diagnose yourself or finding 'hacks' online, consult with a healthcare professional. 👩‍⚕️👨‍⚕️</p>
      <p>A real doctor can provide a proper diagnosis and guidance tailored to your situation. 🏥 This is an awareness app. If you like it, please share it with your friends and family members.</p>
 
      <div style="margin-top: 20px; padding-top:20px">
        <p style="padding-top:20px">There is a video for you on what Googling your symptoms might do to your mental health.</p>
 <div className="relative pb-[56.25%] h-0 overflow-hidden ">
<iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/n1eJoJ-ua64?autoplay=1&si=XWpWwJsfzd3tihzq"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>      </div>
    `;

    // Add final report and video message to chat
    addMessageToChat(finalMessage, 'bot');
    addMessageToChat(videoMessage, 'bot');
    
    setShowShareButton(true);
  };

  const handleShare = () => {
    const url = 'https://sahilwise.com/cancertest';
    if (navigator.share) {
      navigator.share({
        title: 'Cancer Test App',
        text: 'Do you have cancer? This AI tool will tell you if you are at risk.',
        url
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard! You can share it manually.');
      }).catch(console.error);
    }
  };

  return (
    <div className='bg-gradient-to-b from-[#D6D4D6] via-white to-[#E9DBE0]'>
      <div className="p-4 text-xl sticky top-0 font-bold text-center">
        🌟 Cancer Test
      </div>
      <div className="max-w-xl mx-auto p-4 h-screen">
        <div className="flex flex-col justify-between h-full">
          {/* Chat Display */}
          <div className="overflow-y-auto mb-16 flex-1">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
                style={{ background: `url('/path_to_your_custom_bubble_background.jpg')`, backgroundSize: 'cover', padding: '10px', borderRadius: '15px' }}
              >
                <div
                  className={`p-3 px-6 rounded-3xl ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-[5px]' : 'bg-white rounded-bl-[5px] text-black'}`}
                  dangerouslySetInnerHTML={{ __html: msg.message }}
                />
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            )}
            <div ref={chatEndRef} /> {/* Empty div for scrolling */}
          </div>

          {/* Fixed Footer */}
          <div className="fixed bottom-0 left-0 right-0 p-4 px-5 sm:mx-96">
            {step === 0 && (
              <div>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 pl-6 border rounded-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <select
                    className="w-full p-2 pl-6 border rounded-full"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="" disabled>Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-blue-500 text-white px-6 font-semibold py-2 rounded-full"
                    onClick={handleNameAndGenderSubmit}
                    disabled={!name || !gender}
                  >
                    Start
                  </button>
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="flex justify-center space-x-4">
                <button
                  className="bg-[#504E3E] text-[#F0EDE6] px-8 font-semibold py-2 rounded-full"
                  onClick={() => handleAnswer('Yes')}
                >
                  Yes
                </button>
                <button
                  className="bg-[#F0EDE6] text-[#504E3E] px-8 font-semibold py-2 rounded-full"
                  onClick={() => handleAnswer('No')}
                >
                  No
                </button>
              </div>
            )}
            {step === 2 && showShareButton && (
              <div className="flex justify-center mt-4">
                <button
                  className="bg-green-500 text-white px-6 font-semibold py-2 rounded-full"
                  onClick={handleShare}
                >
                  Share This with your friends.
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
