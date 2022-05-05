import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import { Link } from "react-router-dom";

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#eb3449',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#eb3449',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
}

export default class Contenido extends Component {
    render() {
        return (
          <div>
                <ThemeProvider theme={theme}>
                <ChatBot 
                    steps={[
                        {
                            id: "1",
                            message: "Hello world. I am a chatbot. What's your name?",
                            trigger: "2"
                        },
                        {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'Please enter a valid name.';
                                }
                            },
                            trigger: "3"
                        },
                        {
                            id: "3",
                            message: "Hi {previousValue}, nice to meet you!",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            message: "Do you need anything from me?",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                {value: "y", label: "Yes", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ]
                        },
                        {
                            id: "6A",
                            message: "Great! Tell me what are you looking for...",
                            trigger: "seleccion"
                        },
                        {
                            id: "6B",
                            message: "Im sorry if I cannot be of help to you. See you later",
                            end: true
                        },
                        {
                            id: "seleccion",
                            options: [
                                {value: "f", label: "Access options", trigger: "7A"},
                                {value: "b", label: "Other information", trigger: "7B"},
                            ]
                        },
                        {
                            id: "7A",
                            message: "I see, which of these options are you interested in?",
                            trigger: "Access options"
                        },
                        {
                            id: "7B",
                            message: "I see, which of these options are you interested in?",
                            trigger: "Other information"
                        },
                        {
                            id: "Access options",
                            options: [
                                {value: "Login as user", label: "login as user", trigger: "9"},
                                {value: "Registration Options", label: "Registration Options", trigger: "9"},
                                {value: "Login as seller", label: "Login as seller", trigger: "9"},
                            ]
                        },
                        {
                            id: "Other information",
                            options: [
                                {value:"Terms", label: "Terms", trigger: "9"},
                                {value: "Contact options", label: "Contact options", trigger: "9"},
                            ]
                        },
                        {
                            id: "9",
                            // component: <WikipediaSearch />,
                            // asMessage: true,
                            component: (<div > Hola que hay</div>),
                            message: "Good choice",
                            message: `Sigue el siguiente enlae`,
                            
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "Do you need to know anything else?",
                            trigger: "respuestaVuelta",
                        }, 
                        {
                            id: "respuestaVuelta",
                            options: [
                                {value: "y", label: "Yes", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
          </div>
        )
    }
}
