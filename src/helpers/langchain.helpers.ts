import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";

export async function langChainCompletion(question: string): Promise<string> {
    const chat = new ChatOpenAI();
    const { content } = await chat.invoke([
        new HumanMessage(
            "Answer the question: " + question
        ),
    ]);
    console.log(content);
    return content
}