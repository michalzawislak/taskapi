export const infoSchema = {
    "name": "info",
    "description": "User information to be processed by the AI model",
    "parameters": {
        "type": "object",
        "properties": {
            "tool": {
                "type": "string",
                "description": "Tool to be used for processing the information",
                "enum": ["Info", "Question"]
            },
            "info": {
                "type": "string",
                "description": "User input"
            },
            "answer": {
                "type": "string",
                "description": "Polite thank user for the information. Write polish. Use max 5 words.",
            },
        },
        "required": [
            "tool", "info", "answer"
        ]
    }
};

export const questionSchema = {
    "name": "question",
    "description": `User question to be answered by the AI model`,
    "parameters": {
        "type": "object",
        "properties": {
            "tool": {
                "type": "string",
                "description": "Tool to be used for processing the information",
                "enum": ["Info", "Question"]
            },
            "userQuestion": {
                "type": "string",
                "description": "Question sent by the user"
            },
        },
        "required": [
            "tool", "userQuestion"
        ]
    }
};