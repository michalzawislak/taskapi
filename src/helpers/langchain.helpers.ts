import { ChatOpenAI } from "langchain/chat_models/openai";
import { BaseMessageChunk, HumanMessage, SystemMessage } from "langchain/schema";
import { infoSchema, questionSchema } from "./schema/schema";

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

export async function langChainCompletionWithContext(context: string, question: string): Promise<string> {
    const chat = new ChatOpenAI();
    const { content } = await chat.invoke([
        new SystemMessage(`
            Answer questions as truthfully using the context below and nothing more. If you don't know the answer, say "don't know".
            context###${context}###
        `),
        new HumanMessage(
            "Answer the question: " + question
        ),
    ]);
    console.log(content);
    return content
}

export async function langChainCompletionWithQuestionOrInfo(questionOrInfo: string): Promise<{ name: string, args: any } | null> {
    const model = new ChatOpenAI({
        modelName: "gpt-4-0613",
    }).bind({functions: [infoSchema, questionSchema]});
    
    const result = await model.invoke([
        new HumanMessage(`${questionOrInfo}`)
    ]);
    console.log(result);
    return parseFunctionCall(result);
}

export const parseFunctionCall = (result: BaseMessageChunk): { name: string, args: any } | null => {
    if (result?.additional_kwargs?.function_call === undefined) {
        return null;
    }
    return {
        name: result.additional_kwargs.function_call.name,
        args: JSON.parse(result.additional_kwargs.function_call.arguments),
    }
}