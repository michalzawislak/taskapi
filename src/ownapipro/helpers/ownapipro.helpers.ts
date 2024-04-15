import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";
import { userData } from "src/helpers/user-data/user-data";


export async function thankForInfo(): Promise<string> {
    const chat = new ChatOpenAI();
    const { content } = await chat.invoke([
        new HumanMessage(
            "Polite thank user for the information. Write polish. Use max 5 words."
        ),
    ]);
    return content
}

export async function answerQuestion(question: string): Promise<string> {
    const chat = new ChatOpenAI();
    const { content } = await chat.invoke([
        new SystemMessage(
            `Answer user question. Write polish. ###context ${userData.join(' ')}`
        ),
        new HumanMessage(
            `${question}`
        ),
    ]);
    return content
}


export async function useTools(action: any) {
    console.log(action);
    const tools: any = {
        info: async () => {
            userData.push(action.args.info);
            console.log(userData);
            const thanks = await thankForInfo();
            return {
                reply : thanks,
            };
        },
        question: async () => {
            const answer = await answerQuestion(action.args.userQuestion);
            return {
                reply: answer,
            }
        },
    };

    const toolResult = await tools[action.name](action.args.data);
    return toolResult;
}