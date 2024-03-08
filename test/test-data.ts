export const gemini_ok_resp = {
  candidates: [
    {
      content: {
        parts: [
          {
            text: "Hello there! How can I assist you today?",
          },
        ],
        role: "model",
      },
      finishReason: "STOP",
      index: 0,
      safetyRatings: [
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          probability: "NEGLIGIBLE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          probability: "NEGLIGIBLE",
        },
        {
          category: "HARM_CATEGORY_HARASSMENT",
          probability: "NEGLIGIBLE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          probability: "NEGLIGIBLE",
        },
      ],
    },
  ],
  promptFeedback: {
    safetyRatings: [
      {
        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        probability: "NEGLIGIBLE",
      },
      {
        category: "HARM_CATEGORY_HATE_SPEECH",
        probability: "NEGLIGIBLE",
      },
      {
        category: "HARM_CATEGORY_HARASSMENT",
        probability: "NEGLIGIBLE",
      },
      {
        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
        probability: "NEGLIGIBLE",
      },
    ],
  },
}

export const gemini_500_error_resp = {
  error: {
    code: 500,
    message:
      "An internal error has occurred. Please retry or report in https://developers.generativeai.google/guide/troubleshooting",
    status: "INTERNAL",
  },
}

export const gemini_400_error_resp = {
  error: {
    code: 400,
    message: "User location is not supported for the API use.",
    status: "FAILED_PRECONDITION",
  },
}

export const gemini_400_apikey_error_resp = {
  error: {
    code: 400,
    message: "API Key not found. Please pass a valid API key.",
    status: "INVALID_ARGUMENT",
    details: [
      {
        "@type": "type.googleapis.com/google.rpc.ErrorInfo",
        reason: "API_KEY_INVALID",
        domain: "googleapis.com",
        metadata: {
          service: "generativelanguage.googleapis.com",
        },
      },
    ],
  },
}
