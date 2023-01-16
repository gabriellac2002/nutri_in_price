import React from "react";

import { 
    Container,
    QuestionArea,
    MessageQuestionArea,
    TextQuestion,
    Input
} from './styles';

export const QuestionOne = () => {
    return(
        <Container>
            <QuestionArea>
                <MessageQuestionArea>
                    <TextQuestion>1. Você é alergico a algum alimento? Se sim quais?</TextQuestion>
                    <Input/>
                </MessageQuestionArea>
            </QuestionArea>
        </Container>
    );
}

export default QuestionOne;
