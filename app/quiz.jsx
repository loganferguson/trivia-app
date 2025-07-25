import React, { useState, useEffect, useRouter } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const QuizScreen = () => {
  const [questionVisible, setQuestionVisible] = useState(false)
  const [question, setQuestion] = useState("")
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const getQuestion = async () => {
    const response = await fetch("https://the-trivia-api.com/api/questions?limit=1&difficulty=medium&categories=music&region=US");
    const data = await response.json();
    setQuestion(data[0].question);
    answers.splice(0, 4)
    for(let i = 0; i < 3; i++){
      answers.push(data[0].incorrectAnswers[i])
    }
    answers.splice(Math.floor(Math.random() * 4), 0, data[0].correctAnswer);
    setCorrectAnswer(data[0].correctAnswer)
    setQuestionVisible(true)
    console.log(data[0])
    console.log(answers);
    console.log(data[0].question);
    console.log(correctAnswer)
  }

  useEffect(() => {
    console.log(selectedAnswer)
    if(selectedAnswer == correctAnswer){
      console.log("You answered Correct!")
    }
    else{
      console.log("Sorry, you were wrong!")
    }
  }, [selectedAnswer]);
  
  
  const answerOptions = [
    {
      id: '1',
      label: answers[0],
      value: answers[0]
    },
    {
      id: '2',
      label: answers[1],
      value: answers[1]
    },
    {
      id: '3',
      label: answers[2],
      value: answers[2]
    },
    {
      id: '4',
      label: answers[3],
      value: answers[3]
    },
  ];

  return (
    <View style={styles.container}>
    {questionVisible ? (
      <View>
        <Text style={styles.textLabel}>Question:</Text>
        <Text style={styles.questionText}>{question}</Text>
        {
          answerOptions.map((item, index) => <TouchableOpacity key={index}
          onPress={() => setSelectedAnswer(item.value)}>
            <View style={styles.radioBlock}>
              <View style={selectedAnswer==item.value ? styles.radioFill:styles.radio}></View>
              <Text>{item.label}</Text>
            </View>
          </TouchableOpacity>)
        }
      </View>) : (null)
      }
      <Text>This is the question Page</Text>
      {selectedAnswer != null ?
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>:null
      }
      {!questionVisible ?
        <TouchableOpacity style={styles.playButton} onPress={getQuestion}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>:null
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  radioBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  radio: {
    width: 30,
    height: 30,
    borderColor:"black",
    borderRadius: 15,
    borderWidth: 2,
    marginRight: 8
  },
  radioFill: {
    width: 30,
    height: 30,
    borderColor:"black",
    backgroundColor: "black",
    borderRadius: 15,
    borderWidth: 2,
    marginRight: 8
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    color:'#000000'
  },
  playButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#aaaaaa',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  submitButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#aaaaaa',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight:'bold'
  }
})



export default QuizScreen;