import React from 'react';
import ChatBot from 'react-simple-chatbot'

const Chatzot = () => {
  return (
    <div><ChatBot
    headerTitle="Scholarly Bot"
    floating={true}
    speechSynthesis={{ enable: true, lang: 'en' }}
    steps={[
      {
        id: '1',
        message: 'What are you looking for?',
        trigger: '2',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'National Scholarship', trigger: '4' },
          { value: 2, label: 'International Scholarship', trigger: '3' },
          
        ],
      },
      {
        id: '3',
        message: 'How can I help you?',
        trigger: '2',
      },
      {
        id: '4',
        message: 'On Our Platform you can find various international scholarships',
        trigger:'2'
      },
    ]}
  /></div>
  )
}

export default Chatzot