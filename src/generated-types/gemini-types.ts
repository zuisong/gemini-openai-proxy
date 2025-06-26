export interface paths {
    "/v1alpha/{model}:embedContent": {
        parameters: {
            query?: {
                /** @description V1 error format. */
                "$.xgafv"?: components["parameters"]["_.xgafv"];
                /** @description OAuth access token. */
                access_token?: components["parameters"]["access_token"];
                /** @description Data format for response. */
                alt?: components["parameters"]["alt"];
                /** @description JSONP */
                callback?: components["parameters"]["callback"];
                /** @description Selector specifying which fields to include in a partial response. */
                fields?: components["parameters"]["fields"];
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description Returns response with indentations and line breaks. */
                prettyPrint?: components["parameters"]["prettyPrint"];
                /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: components["parameters"]["quotaUser"];
                /** @description Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: components["parameters"]["upload_protocol"];
                /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: components["parameters"]["uploadType"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Generates a text embedding vector from the input `Content` using the specified [Gemini Embedding model](https://ai.google.dev/gemini-api/docs/models/gemini#text-embedding). */
        post: operations["generativelanguage.models.embedContent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:streamGenerateContent": {
        parameters: {
            query?: {
                /** @description V1 error format. */
                "$.xgafv"?: components["parameters"]["_.xgafv"];
                /** @description OAuth access token. */
                access_token?: components["parameters"]["access_token"];
                /** @description Data format for response. */
                alt?: components["parameters"]["alt"];
                /** @description JSONP */
                callback?: components["parameters"]["callback"];
                /** @description Selector specifying which fields to include in a partial response. */
                fields?: components["parameters"]["fields"];
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description Returns response with indentations and line breaks. */
                prettyPrint?: components["parameters"]["prettyPrint"];
                /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: components["parameters"]["quotaUser"];
                /** @description Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: components["parameters"]["upload_protocol"];
                /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: components["parameters"]["uploadType"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Generates a [streamed response](https://ai.google.dev/gemini-api/docs/text-generation?lang=python#generate-a-text-stream) from the model given an input `GenerateContentRequest`. */
        post: operations["generativelanguage.tunedModels.streamGenerateContent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/models": {
        parameters: {
            query?: {
                /** @description V1 error format. */
                "$.xgafv"?: components["parameters"]["_.xgafv"];
                /** @description OAuth access token. */
                access_token?: components["parameters"]["access_token"];
                /** @description Data format for response. */
                alt?: components["parameters"]["alt"];
                /** @description JSONP */
                callback?: components["parameters"]["callback"];
                /** @description Selector specifying which fields to include in a partial response. */
                fields?: components["parameters"]["fields"];
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description Returns response with indentations and line breaks. */
                prettyPrint?: components["parameters"]["prettyPrint"];
                /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: components["parameters"]["quotaUser"];
                /** @description Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: components["parameters"]["upload_protocol"];
                /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: components["parameters"]["uploadType"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Lists the [`Model`s](https://ai.google.dev/gemini-api/docs/models/gemini) available through the Gemini API. */
        get: operations["generativelanguage.models.list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/tunedModels": {
        parameters: {
            query?: {
                /** @description V1 error format. */
                "$.xgafv"?: components["parameters"]["_.xgafv"];
                /** @description OAuth access token. */
                access_token?: components["parameters"]["access_token"];
                /** @description Data format for response. */
                alt?: components["parameters"]["alt"];
                /** @description JSONP */
                callback?: components["parameters"]["callback"];
                /** @description Selector specifying which fields to include in a partial response. */
                fields?: components["parameters"]["fields"];
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description Returns response with indentations and line breaks. */
                prettyPrint?: components["parameters"]["prettyPrint"];
                /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: components["parameters"]["quotaUser"];
                /** @description Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: components["parameters"]["upload_protocol"];
                /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: components["parameters"]["uploadType"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Creates a tuned model. Check intermediate tuning progress (if any) through the [google.longrunning.Operations] service. Access status and results through the Operations service. Example: GET /v1/tunedModels/az2mb0bpw6i/operations/000-111-222 */
        post: operations["generativelanguage.tunedModels.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Identifier for the source contributing to this attribution. */
        AttributionSourceId: {
            /** @description Identifier for an inline passage. */
            groundingPassage?: components["schemas"]["GroundingPassageId"];
            /** @description Identifier for a `Chunk` fetched via Semantic Retriever. */
            semanticRetrieverChunk?: components["schemas"]["SemanticRetrieverChunk"];
        } & {
            [key: string]: unknown;
        };
        /** @description Raw media bytes. Text should not be sent as raw bytes, use the 'text' field. */
        Blob: {
            /**
             * Format: byte
             * @description Raw bytes for media formats.
             */
            data?: string;
            /** @description The IANA standard MIME type of the source data. Examples: - image/png - image/jpeg If an unsupported MIME type is provided, an error will be returned. For a complete list of supported types, see [Supported file formats](https://ai.google.dev/gemini-api/docs/prompting_with_media#supported_file_formats). */
            mimeType?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description A response candidate generated from the model. */
        Candidate: {
            /**
             * Format: double
             * @description Output only. Average log probability score of the candidate.
             */
            readonly avgLogprobs?: number;
            /** @description Output only. Citation information for model-generated candidate. This field may be populated with recitation information for any text included in the `content`. These are passages that are "recited" from copyrighted material in the foundational LLM's training data. */
            readonly citationMetadata?: components["schemas"]["CitationMetadata"];
            /** @description Output only. Generated content returned from the model. */
            readonly content?: components["schemas"]["Content"];
            /**
             * @description Optional. Output only. The reason why the model stopped generating tokens. If empty, the model has not stopped generating tokens.
             * @enum {string}
             */
            readonly finishReason?: "FINISH_REASON_UNSPECIFIED" | "STOP" | "MAX_TOKENS" | "SAFETY" | "RECITATION" | "LANGUAGE" | "OTHER" | "BLOCKLIST" | "PROHIBITED_CONTENT" | "SPII" | "MALFORMED_FUNCTION_CALL" | "IMAGE_SAFETY";
            /** @description Output only. Attribution information for sources that contributed to a grounded answer. This field is populated for `GenerateAnswer` calls. */
            readonly groundingAttributions?: components["schemas"]["GroundingAttribution"][];
            /** @description Output only. Grounding metadata for the candidate. This field is populated for `GenerateContent` calls. */
            readonly groundingMetadata?: components["schemas"]["GroundingMetadata"];
            /**
             * Format: int32
             * @description Output only. Index of the candidate in the list of response candidates.
             */
            readonly index?: number;
            /** @description Output only. Log-likelihood scores for the response tokens and top tokens */
            readonly logprobsResult?: components["schemas"]["LogprobsResult"];
            /** @description List of ratings for the safety of a response candidate. There is at most one rating per category. */
            safetyRatings?: components["schemas"]["SafetyRating"][];
            /**
             * Format: int32
             * @description Output only. Token count for this candidate.
             */
            readonly tokenCount?: number;
            /** @description Output only. Metadata related to url context retrieval tool. */
            readonly urlContextMetadata?: components["schemas"]["UrlContextMetadata"];
        } & {
            [key: string]: unknown;
        };
        /** @description A collection of source attributions for a piece of content. */
        CitationMetadata: {
            /** @description Citations to sources for a specific response. */
            citationSources?: components["schemas"]["CitationSource"][];
        } & {
            [key: string]: unknown;
        };
        /** @description A citation to a source for a portion of a specific response. */
        CitationSource: {
            /**
             * Format: int32
             * @description Optional. End of the attributed segment, exclusive.
             */
            endIndex?: number;
            /** @description Optional. License for the GitHub project that is attributed as a source for segment. License info is required for code citations. */
            license?: string;
            /**
             * Format: int32
             * @description Optional. Start of segment of the response that is attributed to this source. Index indicates the start of the segment, measured in bytes.
             */
            startIndex?: number;
            /** @description Optional. URI that is attributed as a source for a portion of the text. */
            uri?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Tool that executes code generated by the model, and automatically returns the result to the model. See also `ExecutableCode` and `CodeExecutionResult` which are only generated when using this tool. */
        CodeExecution: Record<string, never>;
        /** @description Result of executing the `ExecutableCode`. Only generated when using the `CodeExecution`, and always follows a `part` containing the `ExecutableCode`. */
        CodeExecutionResult: {
            /**
             * @description Required. Outcome of the code execution.
             * @enum {string}
             */
            outcome?: "OUTCOME_UNSPECIFIED" | "OUTCOME_OK" | "OUTCOME_FAILED" | "OUTCOME_DEADLINE_EXCEEDED";
            /** @description Optional. Contains stdout when code execution is successful, stderr or other description otherwise. */
            output?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description The base structured datatype containing multi-part content of a message. A `Content` includes a `role` field designating the producer of the `Content` and a `parts` field containing multi-part data that contains the content of the message turn. */
        Content: {
            /** @description Ordered `Parts` that constitute a single message. Parts may have different MIME types. */
            parts?: components["schemas"]["Part"][];
            /** @description Optional. The producer of the content. Must be either 'user' or 'model'. Useful to set for multi-turn conversations, otherwise can be left blank or unset. */
            role?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description A list of floats representing an embedding. */
        ContentEmbedding: {
            /** @description The embedding values. */
            values?: number[];
        } & {
            [key: string]: unknown;
        };
        /** @description Dataset for training or validation. */
        Dataset: {
            /** @description Optional. Inline examples with simple input/output text. */
            examples?: components["schemas"]["TuningExamples"];
        } & {
            [key: string]: unknown;
        };
        /** @description Describes the options to customize dynamic retrieval. */
        DynamicRetrievalConfig: {
            /**
             * Format: float
             * @description The threshold to be used in dynamic retrieval. If not set, a system default value is used.
             */
            dynamicThreshold?: number;
            /**
             * @description The mode of the predictor to be used in dynamic retrieval.
             * @enum {string}
             */
            mode?: "MODE_UNSPECIFIED" | "MODE_DYNAMIC";
        } & {
            [key: string]: unknown;
        };
        /** @description Request containing the `Content` for the model to embed. */
        EmbedContentRequest: {
            /** @description Required. The content to embed. Only the `parts.text` fields will be counted. */
            content?: components["schemas"]["Content"];
            /** @description Required. The model's resource name. This serves as an ID for the Model to use. This name should match a model name returned by the `ListModels` method. Format: `models/{model}` */
            model?: string;
            /**
             * Format: int32
             * @description Optional. Optional reduced dimension for the output embedding. If set, excessive values in the output embedding are truncated from the end. Supported by newer models since 2024 only. You cannot set this value if using the earlier model (`models/embedding-001`).
             */
            outputDimensionality?: number;
            /**
             * @description Optional. Optional task type for which the embeddings will be used. Not supported on earlier models (`models/embedding-001`).
             * @enum {string}
             */
            taskType?: "TASK_TYPE_UNSPECIFIED" | "RETRIEVAL_QUERY" | "RETRIEVAL_DOCUMENT" | "SEMANTIC_SIMILARITY" | "CLASSIFICATION" | "CLUSTERING" | "QUESTION_ANSWERING" | "FACT_VERIFICATION" | "CODE_RETRIEVAL_QUERY";
            /** @description Optional. An optional title for the text. Only applicable when TaskType is `RETRIEVAL_DOCUMENT`. Note: Specifying a `title` for `RETRIEVAL_DOCUMENT` provides better quality embeddings for retrieval. */
            title?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description The response to an `EmbedContentRequest`. */
        EmbedContentResponse: {
            /** @description Output only. The embedding generated from the input content. */
            readonly embedding?: components["schemas"]["ContentEmbedding"];
        } & {
            [key: string]: unknown;
        };
        /** @description Code generated by the model that is meant to be executed, and the result returned to the model. Only generated when using the `CodeExecution` tool, in which the code will be automatically executed, and a corresponding `CodeExecutionResult` will also be generated. */
        ExecutableCode: {
            /** @description Required. The code to be executed. */
            code?: string;
            /**
             * @description Required. Programming language of the `code`.
             * @enum {string}
             */
            language?: "LANGUAGE_UNSPECIFIED" | "PYTHON";
        } & {
            [key: string]: unknown;
        };
        /** @description URI based data. */
        FileData: {
            /** @description Required. URI. */
            fileUri?: string;
            /** @description Optional. The IANA standard MIME type of the source data. */
            mimeType?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description A predicted `FunctionCall` returned from the model that contains a string representing the `FunctionDeclaration.name` with the arguments and their values. */
        FunctionCall: {
            /** @description Optional. The function parameters and values in JSON object format. */
            args?: {
                [key: string]: unknown;
            };
            /** @description Optional. The unique id of the function call. If populated, the client to execute the `function_call` and return the response with the matching `id`. */
            id?: string;
            /** @description Required. The name of the function to call. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 63. */
            name?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Configuration for specifying function calling behavior. */
        FunctionCallingConfig: {
            /** @description Optional. A set of function names that, when provided, limits the functions the model will call. This should only be set when the Mode is ANY. Function names should match [FunctionDeclaration.name]. With mode set to ANY, model will predict a function call from the set of function names provided. */
            allowedFunctionNames?: string[];
            /**
             * @description Optional. Specifies the mode in which function calling should execute. If unspecified, the default value will be set to AUTO.
             * @enum {string}
             */
            mode?: "MODE_UNSPECIFIED" | "AUTO" | "ANY" | "NONE" | "VALIDATED";
        } & {
            [key: string]: unknown;
        };
        /** @description Structured representation of a function declaration as defined by the [OpenAPI 3.03 specification](https://spec.openapis.org/oas/v3.0.3). Included in this declaration are the function name and parameters. This FunctionDeclaration is a representation of a block of code that can be used as a `Tool` by the model and executed by the client. */
        FunctionDeclaration: {
            /**
             * @description Optional. Specifies the function Behavior. Currently only supported by the BidiGenerateContent method.
             * @enum {string}
             */
            behavior?: "UNSPECIFIED" | "BLOCKING" | "NON_BLOCKING";
            /** @description Required. A brief description of the function. */
            description?: string;
            /** @description Required. The name of the function. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 63. */
            name?: string;
            /** @description Optional. Describes the parameters to this function. Reflects the Open API 3.03 Parameter Object string Key: the name of the parameter. Parameter names are case sensitive. Schema Value: the Schema defining the type used for the parameter. */
            parameters?: components["schemas"]["Schema"];
            /** @description Optional. Describes the parameters to the function in JSON Schema format. The schema must describe an object where the properties are the parameters to the function. For example: ``` { "type": "object", "properties": { "name": { "type": "string" }, "age": { "type": "integer" } }, "additionalProperties": false, "required": ["name", "age"], "propertyOrdering": ["name", "age"] } ``` This field is mutually exclusive with `parameters`. */
            parametersJsonSchema?: unknown;
            /** @description Optional. Describes the output from this function in JSON Schema format. Reflects the Open API 3.03 Response Object. The Schema defines the type used for the response value of the function. */
            response?: components["schemas"]["Schema"];
            /** @description Optional. Describes the output from this function in JSON Schema format. The value specified by the schema is the response value of the function. This field is mutually exclusive with `response`. */
            responseJsonSchema?: unknown;
        } & {
            [key: string]: unknown;
        };
        /** @description The result output from a `FunctionCall` that contains a string representing the `FunctionDeclaration.name` and a structured JSON object containing any output from the function is used as context to the model. This should contain the result of a`FunctionCall` made based on model prediction. */
        FunctionResponse: {
            /** @description Optional. The id of the function call this response is for. Populated by the client to match the corresponding function call `id`. */
            id?: string;
            /** @description Required. The name of the function to call. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 63. */
            name?: string;
            /** @description Required. The function response in JSON object format. */
            response?: {
                [key: string]: unknown;
            };
            /**
             * @description Optional. Specifies how the response should be scheduled in the conversation. Only applicable to NON_BLOCKING function calls, is ignored otherwise. Defaults to WHEN_IDLE.
             * @enum {string}
             */
            scheduling?: "SCHEDULING_UNSPECIFIED" | "SILENT" | "WHEN_IDLE" | "INTERRUPT";
            /** @description Optional. Signals that function call continues, and more responses will be returned, turning the function call into a generator. Is only applicable to NON_BLOCKING function calls, is ignored otherwise. If set to false, future responses will not be considered. It is allowed to return empty `response` with `will_continue=False` to signal that the function call is finished. This may still trigger the model generation. To avoid triggering the generation and finish the function call, additionally set `scheduling` to `SILENT`. */
            willContinue?: boolean;
        } & {
            [key: string]: unknown;
        };
        /** @description Request to generate a completion from the model. NEXT ID: 14 */
        GenerateContentRequest: {
            /** @description Optional. The name of the content [cached](https://ai.google.dev/gemini-api/docs/caching) to use as context to serve the prediction. Format: `cachedContents/{cachedContent}` */
            cachedContent?: string;
            /** @description Required. The content of the current conversation with the model. For single-turn queries, this is a single instance. For multi-turn queries like [chat](https://ai.google.dev/gemini-api/docs/text-generation#chat), this is a repeated field that contains the conversation history and the latest request. */
            contents?: components["schemas"]["Content"][];
            /** @description Optional. Configuration options for model generation and outputs. */
            generationConfig?: components["schemas"]["GenerationConfig"];
            /** @description Required. The name of the `Model` to use for generating the completion. Format: `models/{model}`. */
            model?: string;
            /** @description Optional. A list of unique `SafetySetting` instances for blocking unsafe content. This will be enforced on the `GenerateContentRequest.contents` and `GenerateContentResponse.candidates`. There should not be more than one setting for each `SafetyCategory` type. The API will block any contents and responses that fail to meet the thresholds set by these settings. This list overrides the default settings for each `SafetyCategory` specified in the safety_settings. If there is no `SafetySetting` for a given `SafetyCategory` provided in the list, the API will use the default safety setting for that category. Harm categories HARM_CATEGORY_HATE_SPEECH, HARM_CATEGORY_SEXUALLY_EXPLICIT, HARM_CATEGORY_DANGEROUS_CONTENT, HARM_CATEGORY_HARASSMENT, HARM_CATEGORY_CIVIC_INTEGRITY are supported. Refer to the [guide](https://ai.google.dev/gemini-api/docs/safety-settings) for detailed information on available safety settings. Also refer to the [Safety guidance](https://ai.google.dev/gemini-api/docs/safety-guidance) to learn how to incorporate safety considerations in your AI applications. */
            safetySettings?: components["schemas"]["SafetySetting"][];
            /** @description Optional. Developer set [system instruction(s)](https://ai.google.dev/gemini-api/docs/system-instructions). Currently, text only. */
            systemInstruction?: components["schemas"]["Content"];
            /** @description Optional. Tool configuration for any `Tool` specified in the request. Refer to the [Function calling guide](https://ai.google.dev/gemini-api/docs/function-calling#function_calling_mode) for a usage example. */
            toolConfig?: components["schemas"]["ToolConfig"];
            /** @description Optional. A list of `Tools` the `Model` may use to generate the next response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the `Model`. Supported `Tool`s are `Function` and `code_execution`. Refer to the [Function calling](https://ai.google.dev/gemini-api/docs/function-calling) and the [Code execution](https://ai.google.dev/gemini-api/docs/code-execution) guides to learn more. */
            tools?: components["schemas"]["Tool"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Response from the model supporting multiple candidate responses. Safety ratings and content filtering are reported for both prompt in `GenerateContentResponse.prompt_feedback` and for each candidate in `finish_reason` and in `safety_ratings`. The API: - Returns either all requested candidates or none of them - Returns no candidates at all only if there was something wrong with the prompt (check `prompt_feedback`) - Reports feedback on each candidate in `finish_reason` and `safety_ratings`. */
        GenerateContentResponse: {
            /** @description Candidate responses from the model. */
            candidates?: components["schemas"]["Candidate"][];
            /** @description Output only. The model version used to generate the response. */
            readonly modelVersion?: string;
            /** @description Returns the prompt's feedback related to the content filters. */
            promptFeedback?: components["schemas"]["PromptFeedback"];
            /** @description Output only. response_id is used to identify each response. */
            readonly responseId?: string;
            /** @description Output only. Metadata on the generation requests' token usage. */
            readonly usageMetadata?: components["schemas"]["UsageMetadata"];
        } & {
            [key: string]: unknown;
        };
        /** @description Configuration options for model generation and outputs. Not all parameters are configurable for every model. */
        GenerationConfig: {
            /**
             * Format: int32
             * @description Optional. Number of generated responses to return. If unset, this will default to 1. Please note that this doesn't work for previous generation models (Gemini 1.0 family)
             */
            candidateCount?: number;
            /** @description Optional. If enabled, the model will detect emotions and adapt its responses accordingly. */
            enableAffectiveDialog?: boolean;
            /** @description Optional. Enables enhanced civic answers. It may not be available for all models. */
            enableEnhancedCivicAnswers?: boolean;
            /**
             * Format: float
             * @description Optional. Frequency penalty applied to the next token's logprobs, multiplied by the number of times each token has been seen in the respponse so far. A positive penalty will discourage the use of tokens that have already been used, proportional to the number of times the token has been used: The more a token is used, the more difficult it is for the model to use that token again increasing the vocabulary of responses. Caution: A _negative_ penalty will encourage the model to reuse tokens proportional to the number of times the token has been used. Small negative values will reduce the vocabulary of a response. Larger negative values will cause the model to start repeating a common token until it hits the max_output_tokens limit.
             */
            frequencyPenalty?: number;
            /**
             * Format: int32
             * @description Optional. Only valid if response_logprobs=True. This sets the number of top logprobs to return at each decoding step in the Candidate.logprobs_result.
             */
            logprobs?: number;
            /**
             * Format: int32
             * @description Optional. The maximum number of tokens to include in a response candidate. Note: The default value varies by model, see the `Model.output_token_limit` attribute of the `Model` returned from the `getModel` function.
             */
            maxOutputTokens?: number;
            /**
             * @description Optional. If specified, the media resolution specified will be used.
             * @enum {string}
             */
            mediaResolution?: "MEDIA_RESOLUTION_UNSPECIFIED" | "MEDIA_RESOLUTION_LOW" | "MEDIA_RESOLUTION_MEDIUM" | "MEDIA_RESOLUTION_HIGH";
            /**
             * Format: float
             * @description Optional. Presence penalty applied to the next token's logprobs if the token has already been seen in the response. This penalty is binary on/off and not dependant on the number of times the token is used (after the first). Use frequency_penalty for a penalty that increases with each use. A positive penalty will discourage the use of tokens that have already been used in the response, increasing the vocabulary. A negative penalty will encourage the use of tokens that have already been used in the response, decreasing the vocabulary.
             */
            presencePenalty?: number;
            /** @description Optional. Output schema of the generated response. This is an alternative to `response_schema` that accepts [JSON Schema](https://json-schema.org/). If set, `response_schema` must be omitted, but `response_mime_type` is required. While the full JSON Schema may be sent, not all features are supported. Specifically, only the following properties are supported: - `$id` - `$defs` - `$ref` - `$anchor` - `type` - `format` - `title` - `description` - `enum` (for strings and numbers) - `items` - `prefixItems` - `minItems` - `maxItems` - `minimum` - `maximum` - `anyOf` - `oneOf` (interpreted the same as `anyOf`) - `properties` - `additionalProperties` - `required` The non-standard `propertyOrdering` property may also be set. Cyclic references are unrolled to a limited degree and, as such, may only be used within non-required properties. (Nullable properties are not sufficient.) If `$ref` is set on a sub-schema, no other properties, except for than those starting as a `$`, may be set. */
            responseJsonSchema?: unknown;
            /** @description Optional. If true, export the logprobs results in response. */
            responseLogprobs?: boolean;
            /** @description Optional. MIME type of the generated candidate text. Supported MIME types are: `text/plain`: (default) Text output. `application/json`: JSON response in the response candidates. `text/x.enum`: ENUM as a string response in the response candidates. Refer to the [docs](https://ai.google.dev/gemini-api/docs/prompting_with_media#plain_text_formats) for a list of all supported text MIME types. */
            responseMimeType?: string;
            /** @description Optional. The requested modalities of the response. Represents the set of modalities that the model can return, and should be expected in the response. This is an exact match to the modalities of the response. A model may have multiple combinations of supported modalities. If the requested modalities do not match any of the supported combinations, an error will be returned. An empty list is equivalent to requesting only text. */
            responseModalities?: ("MODALITY_UNSPECIFIED" | "TEXT" | "IMAGE" | "AUDIO")[];
            /** @description Optional. Output schema of the generated candidate text. Schemas must be a subset of the [OpenAPI schema](https://spec.openapis.org/oas/v3.0.3#schema) and can be objects, primitives or arrays. If set, a compatible `response_mime_type` must also be set. Compatible MIME types: `application/json`: Schema for JSON response. Refer to the [JSON text generation guide](https://ai.google.dev/gemini-api/docs/json-mode) for more details. */
            responseSchema?: components["schemas"]["Schema"];
            /**
             * Format: int32
             * @description Optional. Seed used in decoding. If not set, the request uses a randomly generated seed.
             */
            seed?: number;
            /** @description Optional. The speech generation config. */
            speechConfig?: components["schemas"]["SpeechConfig"];
            /** @description Optional. The set of character sequences (up to 5) that will stop output generation. If specified, the API will stop at the first appearance of a `stop_sequence`. The stop sequence will not be included as part of the response. */
            stopSequences?: string[];
            /**
             * Format: float
             * @description Optional. Controls the randomness of the output. Note: The default value varies by model, see the `Model.temperature` attribute of the `Model` returned from the `getModel` function. Values can range from [0.0, 2.0].
             */
            temperature?: number;
            /** @description Optional. Config for thinking features. An error will be returned if this field is set for models that don't support thinking. */
            thinkingConfig?: components["schemas"]["ThinkingConfig"];
            /**
             * Format: int32
             * @description Optional. The maximum number of tokens to consider when sampling. Gemini models use Top-p (nucleus) sampling or a combination of Top-k and nucleus sampling. Top-k sampling considers the set of `top_k` most probable tokens. Models running with nucleus sampling don't allow top_k setting. Note: The default value varies by `Model` and is specified by the`Model.top_p` attribute returned from the `getModel` function. An empty `top_k` attribute indicates that the model doesn't apply top-k sampling and doesn't allow setting `top_k` on requests.
             */
            topK?: number;
            /**
             * Format: float
             * @description Optional. The maximum cumulative probability of tokens to consider when sampling. The model uses combined Top-k and Top-p (nucleus) sampling. Tokens are sorted based on their assigned probabilities so that only the most likely tokens are considered. Top-k sampling directly limits the maximum number of tokens to consider, while Nucleus sampling limits the number of tokens based on the cumulative probability. Note: The default value varies by `Model` and is specified by the`Model.top_p` attribute returned from the `getModel` function. An empty `top_k` attribute indicates that the model doesn't apply top-k sampling and doesn't allow setting `top_k` on requests.
             */
            topP?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description GoogleSearch tool type. Tool to support Google Search in Model. Powered by Google. */
        GoogleSearch: {
            /** @description Optional. Filter search results to a specific time range. If customers set a start time, they must set an end time (and vice versa). */
            timeRangeFilter?: components["schemas"]["Interval"];
        } & {
            [key: string]: unknown;
        };
        /** @description Tool to retrieve public web data for grounding, powered by Google. */
        GoogleSearchRetrieval: {
            /** @description Specifies the dynamic retrieval configuration for the given source. */
            dynamicRetrievalConfig?: components["schemas"]["DynamicRetrievalConfig"];
        } & {
            [key: string]: unknown;
        };
        /** @description Attribution for a source that contributed to an answer. */
        GroundingAttribution: {
            /** @description Grounding source content that makes up this attribution. */
            content?: components["schemas"]["Content"];
            /** @description Output only. Identifier for the source contributing to this attribution. */
            readonly sourceId?: components["schemas"]["AttributionSourceId"];
        } & {
            [key: string]: unknown;
        };
        /** @description Grounding chunk. */
        GroundingChunk: {
            /** @description Grounding chunk from the web. */
            web?: components["schemas"]["Web"];
        } & {
            [key: string]: unknown;
        };
        /** @description Metadata returned to client when grounding is enabled. */
        GroundingMetadata: {
            /** @description List of supporting references retrieved from specified grounding source. */
            groundingChunks?: components["schemas"]["GroundingChunk"][];
            /** @description List of grounding support. */
            groundingSupports?: components["schemas"]["GroundingSupport"][];
            /** @description Metadata related to retrieval in the grounding flow. */
            retrievalMetadata?: components["schemas"]["RetrievalMetadata"];
            /** @description Optional. Google search entry for the following-up web searches. */
            searchEntryPoint?: components["schemas"]["SearchEntryPoint"];
            /** @description Web search queries for the following-up web search. */
            webSearchQueries?: string[];
        } & {
            [key: string]: unknown;
        };
        /** @description Identifier for a part within a `GroundingPassage`. */
        GroundingPassageId: {
            /**
             * Format: int32
             * @description Output only. Index of the part within the `GenerateAnswerRequest`'s `GroundingPassage.content`.
             */
            readonly partIndex?: number;
            /** @description Output only. ID of the passage matching the `GenerateAnswerRequest`'s `GroundingPassage.id`. */
            readonly passageId?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Grounding support. */
        GroundingSupport: {
            /** @description Confidence score of the support references. Ranges from 0 to 1. 1 is the most confident. This list must have the same size as the grounding_chunk_indices. */
            confidenceScores?: number[];
            /** @description A list of indices (into 'grounding_chunk') specifying the citations associated with the claim. For instance [1,3,4] means that grounding_chunk[1], grounding_chunk[3], grounding_chunk[4] are the retrieved content attributed to the claim. */
            groundingChunkIndices?: number[];
            /** @description Segment of the content this support belongs to. */
            segment?: components["schemas"]["Segment"];
        } & {
            [key: string]: unknown;
        };
        /** @description Hyperparameters controlling the tuning process. Read more at https://ai.google.dev/docs/model_tuning_guidance */
        Hyperparameters: {
            /**
             * Format: int32
             * @description Immutable. The batch size hyperparameter for tuning. If not set, a default of 4 or 16 will be used based on the number of training examples.
             */
            batchSize?: number;
            /**
             * Format: int32
             * @description Immutable. The number of training epochs. An epoch is one pass through the training data. If not set, a default of 5 will be used.
             */
            epochCount?: number;
            /**
             * Format: float
             * @description Optional. Immutable. The learning rate hyperparameter for tuning. If not set, a default of 0.001 or 0.0002 will be calculated based on the number of training examples.
             */
            learningRate?: number;
            /**
             * Format: float
             * @description Optional. Immutable. The learning rate multiplier is used to calculate a final learning_rate based on the default (recommended) value. Actual learning rate := learning_rate_multiplier * default learning rate Default learning rate is dependent on base model and dataset size. If not set, a default of 1.0 will be used.
             */
            learningRateMultiplier?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
        Interval: {
            /**
             * Format: google-datetime
             * @description Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
             */
            endTime?: string;
            /**
             * Format: google-datetime
             * @description Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
             */
            startTime?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `ListModel` containing a paginated list of Models. */
        ListModelsResponse: {
            /** @description The returned Models. */
            models?: components["schemas"]["Model"][];
            /** @description A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages. */
            nextPageToken?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Logprobs Result */
        LogprobsResult: {
            /** @description Length = total number of decoding steps. The chosen candidates may or may not be in top_candidates. */
            chosenCandidates?: components["schemas"]["LogprobsResultCandidate"][];
            /** @description Length = total number of decoding steps. */
            topCandidates?: components["schemas"]["TopCandidates"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Candidate for the logprobs token and score. */
        LogprobsResultCandidate: {
            /**
             * Format: float
             * @description The candidate's log probability.
             */
            logProbability?: number;
            /** @description The candidate’s token string value. */
            token?: string;
            /**
             * Format: int32
             * @description The candidate’s token id value.
             */
            tokenId?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Represents token counting info for a single modality. */
        ModalityTokenCount: {
            /**
             * @description The modality associated with this token count.
             * @enum {string}
             */
            modality?: "MODALITY_UNSPECIFIED" | "TEXT" | "IMAGE" | "VIDEO" | "AUDIO" | "DOCUMENT";
            /**
             * Format: int32
             * @description Number of tokens.
             */
            tokenCount?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Information about a Generative Language Model. */
        Model: {
            /** @description Required. The name of the base model, pass this to the generation request. Examples: * `gemini-1.5-flash` */
            baseModelId?: string;
            /** @description A short description of the model. */
            description?: string;
            /** @description The human-readable name of the model. E.g. "Gemini 1.5 Flash". The name can be up to 128 characters long and can consist of any UTF-8 characters. */
            displayName?: string;
            /**
             * Format: int32
             * @description Maximum number of input tokens allowed for this model.
             */
            inputTokenLimit?: number;
            /**
             * Format: float
             * @description The maximum temperature this model can use.
             */
            maxTemperature?: number;
            /** @description Required. The resource name of the `Model`. Refer to [Model variants](https://ai.google.dev/gemini-api/docs/models/gemini#model-variations) for all allowed values. Format: `models/{model}` with a `{model}` naming convention of: * "{base_model_id}-{version}" Examples: * `models/gemini-1.5-flash-001` */
            name?: string;
            /**
             * Format: int32
             * @description Maximum number of output tokens available for this model.
             */
            outputTokenLimit?: number;
            /** @description The model's supported generation methods. The corresponding API method names are defined as Pascal case strings, such as `generateMessage` and `generateContent`. */
            supportedGenerationMethods?: string[];
            /**
             * Format: float
             * @description Controls the randomness of the output. Values can range over `[0.0,max_temperature]`, inclusive. A higher value will produce responses that are more varied, while a value closer to `0.0` will typically result in less surprising responses from the model. This value specifies default to be used by the backend while making the call to the model.
             */
            temperature?: number;
            /**
             * Format: int32
             * @description For Top-k sampling. Top-k sampling considers the set of `top_k` most probable tokens. This value specifies default to be used by the backend while making the call to the model. If empty, indicates the model doesn't use top-k sampling, and `top_k` isn't allowed as a generation parameter.
             */
            topK?: number;
            /**
             * Format: float
             * @description For [Nucleus sampling](https://ai.google.dev/gemini-api/docs/prompting-strategies#top-p). Nucleus sampling considers the smallest set of tokens whose probability sum is at least `top_p`. This value specifies default to be used by the backend while making the call to the model.
             */
            topP?: number;
            /** @description Required. The version number of the model. This represents the major version (`1.0` or `1.5`) */
            version?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description The configuration for the multi-speaker setup. */
        MultiSpeakerVoiceConfig: {
            /** @description Required. All the enabled speaker voices. */
            speakerVoiceConfigs?: components["schemas"]["SpeakerVoiceConfig"][];
        } & {
            [key: string]: unknown;
        };
        /** @description This resource represents a long-running operation that is the result of a network API call. */
        Operation: {
            /** @description If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
            done?: boolean;
            /** @description The error result of the operation in case of failure or cancellation. */
            error?: components["schemas"]["Status"];
            /** @description Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
            metadata?: {
                [key: string]: unknown;
            };
            /** @description The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
            name?: string;
            /** @description The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
            response?: {
                [key: string]: unknown;
            };
        } & {
            [key: string]: unknown;
        };
        /** @description A datatype containing media that is part of a multi-part `Content` message. A `Part` consists of data which has an associated datatype. A `Part` can only contain one of the accepted types in `Part.data`. A `Part` must have a fixed IANA MIME type identifying the type and subtype of the media if the `inline_data` field is filled with raw bytes. */
        Part: {
            /** @description Result of executing the `ExecutableCode`. */
            codeExecutionResult?: components["schemas"]["CodeExecutionResult"];
            /** @description Code generated by the model that is meant to be executed. */
            executableCode?: components["schemas"]["ExecutableCode"];
            /** @description URI based data. */
            fileData?: components["schemas"]["FileData"];
            /** @description A predicted `FunctionCall` returned from the model that contains a string representing the `FunctionDeclaration.name` with the arguments and their values. */
            functionCall?: components["schemas"]["FunctionCall"];
            /** @description The result output of a `FunctionCall` that contains a string representing the `FunctionDeclaration.name` and a structured JSON object containing any output from the function is used as context to the model. */
            functionResponse?: components["schemas"]["FunctionResponse"];
            /** @description Inline media bytes. */
            inlineData?: components["schemas"]["Blob"];
            /** @description Inline text. */
            text?: string;
            /** @description Optional. Indicates if the part is thought from the model. */
            thought?: boolean;
            /**
             * Format: byte
             * @description Optional. An opaque signature for the thought so it can be reused in subsequent requests.
             */
            thoughtSignature?: string;
            /** @description Optional. Video metadata. The metadata should only be specified while the video data is presented in inline_data or file_data. */
            videoMetadata?: components["schemas"]["VideoMetadata"];
        } & {
            [key: string]: unknown;
        };
        /** @description The configuration for the prebuilt speaker to use. */
        PrebuiltVoiceConfig: {
            /** @description The name of the preset voice to use. */
            voiceName?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description A set of the feedback metadata the prompt specified in `GenerateContentRequest.content`. */
        PromptFeedback: {
            /**
             * @description Optional. If set, the prompt was blocked and no candidates are returned. Rephrase the prompt.
             * @enum {string}
             */
            blockReason?: "BLOCK_REASON_UNSPECIFIED" | "SAFETY" | "OTHER" | "BLOCKLIST" | "PROHIBITED_CONTENT" | "IMAGE_SAFETY";
            /** @description Ratings for safety of the prompt. There is at most one rating per category. */
            safetyRatings?: components["schemas"]["SafetyRating"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Metadata related to retrieval in the grounding flow. */
        RetrievalMetadata: {
            /**
             * Format: float
             * @description Optional. Score indicating how likely information from google search could help answer the prompt. The score is in the range [0, 1], where 0 is the least likely and 1 is the most likely. This score is only populated when google search grounding and dynamic retrieval is enabled. It will be compared to the threshold to determine whether to trigger google search.
             */
            googleSearchDynamicRetrievalScore?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Safety rating for a piece of content. The safety rating contains the category of harm and the harm probability level in that category for a piece of content. Content is classified for safety across a number of harm categories and the probability of the harm classification is included here. */
        SafetyRating: {
            /** @description Was this content blocked because of this rating? */
            blocked?: boolean;
            /**
             * @description Required. The category for this rating.
             * @enum {string}
             */
            category?: "HARM_CATEGORY_UNSPECIFIED" | "HARM_CATEGORY_DEROGATORY" | "HARM_CATEGORY_TOXICITY" | "HARM_CATEGORY_VIOLENCE" | "HARM_CATEGORY_SEXUAL" | "HARM_CATEGORY_MEDICAL" | "HARM_CATEGORY_DANGEROUS" | "HARM_CATEGORY_HARASSMENT" | "HARM_CATEGORY_HATE_SPEECH" | "HARM_CATEGORY_SEXUALLY_EXPLICIT" | "HARM_CATEGORY_DANGEROUS_CONTENT" | "HARM_CATEGORY_CIVIC_INTEGRITY";
            /**
             * @description Required. The probability of harm for this content.
             * @enum {string}
             */
            probability?: "HARM_PROBABILITY_UNSPECIFIED" | "NEGLIGIBLE" | "LOW" | "MEDIUM" | "HIGH";
        } & {
            [key: string]: unknown;
        };
        /** @description Safety setting, affecting the safety-blocking behavior. Passing a safety setting for a category changes the allowed probability that content is blocked. */
        SafetySetting: {
            /**
             * @description Required. The category for this setting.
             * @enum {string}
             */
            category?: "HARM_CATEGORY_UNSPECIFIED" | "HARM_CATEGORY_DEROGATORY" | "HARM_CATEGORY_TOXICITY" | "HARM_CATEGORY_VIOLENCE" | "HARM_CATEGORY_SEXUAL" | "HARM_CATEGORY_MEDICAL" | "HARM_CATEGORY_DANGEROUS" | "HARM_CATEGORY_HARASSMENT" | "HARM_CATEGORY_HATE_SPEECH" | "HARM_CATEGORY_SEXUALLY_EXPLICIT" | "HARM_CATEGORY_DANGEROUS_CONTENT" | "HARM_CATEGORY_CIVIC_INTEGRITY";
            /**
             * @description Required. Controls the probability threshold at which harm is blocked.
             * @enum {string}
             */
            threshold?: "HARM_BLOCK_THRESHOLD_UNSPECIFIED" | "BLOCK_LOW_AND_ABOVE" | "BLOCK_MEDIUM_AND_ABOVE" | "BLOCK_ONLY_HIGH" | "BLOCK_NONE" | "OFF";
        } & {
            [key: string]: unknown;
        };
        /** @description The `Schema` object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. Represents a select subset of an [OpenAPI 3.0 schema object](https://spec.openapis.org/oas/v3.0.3#schema). */
        Schema: {
            /** @description Optional. The value should be validated against any (one or more) of the subschemas in the list. */
            anyOf?: components["schemas"]["Schema"][];
            /** @description Optional. A brief description of the parameter. This could contain examples of use. Parameter description may be formatted as Markdown. */
            description?: string;
            /** @description Optional. Possible values of the element of Type.STRING with enum format. For example we can define an Enum Direction as : {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]} */
            enum?: string[];
            /** @description Optional. Example of the object. Will only populated when the object is the root. */
            example?: unknown;
            /** @description Optional. The format of the data. This is used only for primitive datatypes. Supported formats: for NUMBER type: float, double for INTEGER type: int32, int64 for STRING type: enum, date-time */
            format?: string;
            /** @description Optional. Schema of the elements of Type.ARRAY. */
            items?: components["schemas"]["Schema"];
            /**
             * Format: double
             * @description Optional. Maximum value of the Type.INTEGER and Type.NUMBER
             */
            maximum?: number;
            /**
             * Format: int64
             * @description Optional. Maximum number of the elements for Type.ARRAY.
             */
            maxItems?: string;
            /**
             * Format: int64
             * @description Optional. Maximum length of the Type.STRING
             */
            maxLength?: string;
            /**
             * Format: int64
             * @description Optional. Maximum number of the properties for Type.OBJECT.
             */
            maxProperties?: string;
            /**
             * Format: double
             * @description Optional. SCHEMA FIELDS FOR TYPE INTEGER and NUMBER Minimum value of the Type.INTEGER and Type.NUMBER
             */
            minimum?: number;
            /**
             * Format: int64
             * @description Optional. Minimum number of the elements for Type.ARRAY.
             */
            minItems?: string;
            /**
             * Format: int64
             * @description Optional. SCHEMA FIELDS FOR TYPE STRING Minimum length of the Type.STRING
             */
            minLength?: string;
            /**
             * Format: int64
             * @description Optional. Minimum number of the properties for Type.OBJECT.
             */
            minProperties?: string;
            /** @description Optional. Indicates if the value may be null. */
            nullable?: boolean;
            /** @description Optional. Pattern of the Type.STRING to restrict a string to a regular expression. */
            pattern?: string;
            /** @description Optional. Properties of Type.OBJECT. */
            properties?: {
                [key: string]: components["schemas"]["Schema"];
            };
            /** @description Optional. The order of the properties. Not a standard field in open api spec. Used to determine the order of the properties in the response. */
            propertyOrdering?: string[];
            /** @description Optional. Required properties of Type.OBJECT. */
            required?: string[];
            /** @description Optional. The title of the schema. */
            title?: string;
            /**
             * @description Required. Data type.
             * @enum {string}
             */
            type?: "TYPE_UNSPECIFIED" | "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY" | "OBJECT" | "NULL";
        } & {
            [key: string]: unknown;
        };
        /** @description Google search entry point. */
        SearchEntryPoint: {
            /** @description Optional. Web content snippet that can be embedded in a web page or an app webview. */
            renderedContent?: string;
            /**
             * Format: byte
             * @description Optional. Base64 encoded JSON representing array of tuple.
             */
            sdkBlob?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Segment of the content. */
        Segment: {
            /**
             * Format: int32
             * @description Output only. End index in the given Part, measured in bytes. Offset from the start of the Part, exclusive, starting at zero.
             */
            readonly endIndex?: number;
            /**
             * Format: int32
             * @description Output only. The index of a Part object within its parent Content object.
             */
            readonly partIndex?: number;
            /**
             * Format: int32
             * @description Output only. Start index in the given Part, measured in bytes. Offset from the start of the Part, inclusive, starting at zero.
             */
            readonly startIndex?: number;
            /** @description Output only. The text corresponding to the segment from the response. */
            readonly text?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Identifier for a `Chunk` retrieved via Semantic Retriever specified in the `GenerateAnswerRequest` using `SemanticRetrieverConfig`. */
        SemanticRetrieverChunk: {
            /** @description Output only. Name of the `Chunk` containing the attributed text. Example: `corpora/123/documents/abc/chunks/xyz` */
            readonly chunk?: string;
            /** @description Output only. Name of the source matching the request's `SemanticRetrieverConfig.source`. Example: `corpora/123` or `corpora/123/documents/abc` */
            readonly source?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description The configuration for a single speaker in a multi speaker setup. */
        SpeakerVoiceConfig: {
            /** @description Required. The name of the speaker to use. Should be the same as in the prompt. */
            speaker?: string;
            /** @description Required. The configuration for the voice to use. */
            voiceConfig?: components["schemas"]["VoiceConfig"];
        } & {
            [key: string]: unknown;
        };
        /** @description The speech generation config. */
        SpeechConfig: {
            /** @description Optional. Language code (in BCP 47 format, e.g. "en-US") for speech synthesis. Valid values are: de-DE, en-AU, en-GB, en-IN, en-US, es-US, fr-FR, hi-IN, pt-BR, ar-XA, es-ES, fr-CA, id-ID, it-IT, ja-JP, tr-TR, vi-VN, bn-IN, gu-IN, kn-IN, ml-IN, mr-IN, ta-IN, te-IN, nl-NL, ko-KR, cmn-CN, pl-PL, ru-RU, and th-TH. */
            languageCode?: string;
            /** @description Optional. The configuration for the multi-speaker setup. It is mutually exclusive with the voice_config field. */
            multiSpeakerVoiceConfig?: components["schemas"]["MultiSpeakerVoiceConfig"];
            /** @description The configuration in case of single-voice output. */
            voiceConfig?: components["schemas"]["VoiceConfig"];
        } & {
            [key: string]: unknown;
        };
        /** @description The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
        Status: {
            /**
             * Format: int32
             * @description The status code, which should be an enum value of google.rpc.Code.
             */
            code?: number;
            /** @description A list of messages that carry the error details. There is a common set of message types for APIs to use. */
            details?: {
                [key: string]: unknown;
            }[];
            /** @description A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
            message?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Config for thinking features. */
        ThinkingConfig: {
            /** @description Indicates whether to include thoughts in the response. If true, thoughts are returned only when available. */
            includeThoughts?: boolean;
            /**
             * Format: int32
             * @description The number of thoughts tokens that the model should generate.
             */
            thinkingBudget?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Tool details that the model may use to generate response. A `Tool` is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. */
        Tool: {
            /** @description Optional. Enables the model to execute code as part of generation. */
            codeExecution?: components["schemas"]["CodeExecution"];
            /** @description Optional. A list of `FunctionDeclarations` available to the model that can be used for function calling. The model or system does not execute the function. Instead the defined function may be returned as a FunctionCall with arguments to the client side for execution. The model may decide to call a subset of these functions by populating FunctionCall in the response. The next conversation turn may contain a FunctionResponse with the Content.role "function" generation context for the next model turn. */
            functionDeclarations?: components["schemas"]["FunctionDeclaration"][];
            /** @description Optional. GoogleSearch tool type. Tool to support Google Search in Model. Powered by Google. */
            googleSearch?: components["schemas"]["GoogleSearch"];
            /** @description Optional. Retrieval tool that is powered by Google search. */
            googleSearchRetrieval?: components["schemas"]["GoogleSearchRetrieval"];
            /** @description Optional. Tool to support URL context retrieval. */
            urlContext?: components["schemas"]["UrlContext"];
        } & {
            [key: string]: unknown;
        };
        /** @description The Tool configuration containing parameters for specifying `Tool` use in the request. */
        ToolConfig: {
            /** @description Optional. Function calling config. */
            functionCallingConfig?: components["schemas"]["FunctionCallingConfig"];
        } & {
            [key: string]: unknown;
        };
        /** @description Candidates with top log probabilities at each decoding step. */
        TopCandidates: {
            /** @description Sorted by log probability in descending order. */
            candidates?: components["schemas"]["LogprobsResultCandidate"][];
        } & {
            [key: string]: unknown;
        };
        /** @description A fine-tuned model created using ModelService.CreateTunedModel. */
        TunedModel: {
            /** @description Immutable. The name of the `Model` to tune. Example: `models/gemini-1.5-flash-001` */
            baseModel?: string;
            /**
             * Format: google-datetime
             * @description Output only. The timestamp when this model was created.
             */
            readonly createTime?: string;
            /** @description Optional. A short description of this model. */
            description?: string;
            /** @description Optional. The name to display for this model in user interfaces. The display name must be up to 40 characters including spaces. */
            displayName?: string;
            /** @description Output only. The tuned model name. A unique name will be generated on create. Example: `tunedModels/az2mb0bpw6i` If display_name is set on create, the id portion of the name will be set by concatenating the words of the display_name with hyphens and adding a random portion for uniqueness. Example: * display_name = `Sentence Translator` * name = `tunedModels/sentence-translator-u3b7m` */
            readonly name?: string;
            /** @description Optional. List of project numbers that have read access to the tuned model. */
            readerProjectNumbers?: string[];
            /**
             * @description Output only. The state of the tuned model.
             * @enum {string}
             */
            readonly state?: "STATE_UNSPECIFIED" | "CREATING" | "ACTIVE" | "FAILED";
            /**
             * Format: float
             * @description Optional. Controls the randomness of the output. Values can range over `[0.0,1.0]`, inclusive. A value closer to `1.0` will produce responses that are more varied, while a value closer to `0.0` will typically result in less surprising responses from the model. This value specifies default to be the one used by the base model while creating the model.
             */
            temperature?: number;
            /**
             * Format: int32
             * @description Optional. For Top-k sampling. Top-k sampling considers the set of `top_k` most probable tokens. This value specifies default to be used by the backend while making the call to the model. This value specifies default to be the one used by the base model while creating the model.
             */
            topK?: number;
            /**
             * Format: float
             * @description Optional. For Nucleus sampling. Nucleus sampling considers the smallest set of tokens whose probability sum is at least `top_p`. This value specifies default to be the one used by the base model while creating the model.
             */
            topP?: number;
            /** @description Optional. TunedModel to use as the starting point for training the new model. */
            tunedModelSource?: components["schemas"]["TunedModelSource"];
            /** @description Required. The tuning task that creates the tuned model. */
            tuningTask?: components["schemas"]["TuningTask"];
            /**
             * Format: google-datetime
             * @description Output only. The timestamp when this model was updated.
             */
            readonly updateTime?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Tuned model as a source for training a new model. */
        TunedModelSource: {
            /** @description Output only. The name of the base `Model` this `TunedModel` was tuned from. Example: `models/gemini-1.5-flash-001` */
            readonly baseModel?: string;
            /** @description Immutable. The name of the `TunedModel` to use as the starting point for training the new model. Example: `tunedModels/my-tuned-model` */
            tunedModel?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description The structured datatype containing multi-part content of an example message. This is a subset of the Content proto used during model inference with limited type support. A `Content` includes a `role` field designating the producer of the `Content` and a `parts` field containing multi-part data that contains the content of the message turn. */
        TuningContent: {
            /** @description Ordered `Parts` that constitute a single message. Parts may have different MIME types. */
            parts?: components["schemas"]["TuningPart"][];
            /** @description Optional. The producer of the content. Must be either 'user' or 'model'. Useful to set for multi-turn conversations, otherwise can be left blank or unset. */
            role?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description A single example for tuning. */
        TuningExample: {
            /** @description Required. The expected model output. */
            output?: string;
            /** @description Optional. Text model input. */
            textInput?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description A set of tuning examples. Can be training or validation data. */
        TuningExamples: {
            /** @description The examples. Example input can be for text or discuss, but all examples in a set must be of the same type. */
            examples?: components["schemas"]["TuningExample"][];
            /** @description Content examples. For multiturn conversations. */
            multiturnExamples?: components["schemas"]["TuningMultiturnExample"][];
        } & {
            [key: string]: unknown;
        };
        /** @description A tuning example with multiturn input. */
        TuningMultiturnExample: {
            /** @description Each Content represents a turn in the conversation. */
            contents?: components["schemas"]["TuningContent"][];
            /** @description Optional. Developer set system instructions. Currently, text only. */
            systemInstruction?: components["schemas"]["TuningContent"];
        } & {
            [key: string]: unknown;
        };
        /** @description A datatype containing data that is part of a multi-part `TuningContent` message. This is a subset of the Part used for model inference, with limited type support. A `Part` consists of data which has an associated datatype. A `Part` can only contain one of the accepted types in `Part.data`. */
        TuningPart: {
            /** @description Inline text. */
            text?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Record for a single tuning step. */
        TuningSnapshot: {
            /**
             * Format: google-datetime
             * @description Output only. The timestamp when this metric was computed.
             */
            readonly computeTime?: string;
            /**
             * Format: int32
             * @description Output only. The epoch this step was part of.
             */
            readonly epoch?: number;
            /**
             * Format: float
             * @description Output only. The mean loss of the training examples for this step.
             */
            readonly meanLoss?: number;
            /**
             * Format: int32
             * @description Output only. The tuning step.
             */
            readonly step?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Tuning tasks that create tuned models. */
        TuningTask: {
            /**
             * Format: google-datetime
             * @description Output only. The timestamp when tuning this model completed.
             */
            readonly completeTime?: string;
            /** @description Immutable. Hyperparameters controlling the tuning process. If not provided, default values will be used. */
            hyperparameters?: components["schemas"]["Hyperparameters"];
            /** @description Output only. Metrics collected during tuning. */
            readonly snapshots?: components["schemas"]["TuningSnapshot"][];
            /**
             * Format: google-datetime
             * @description Output only. The timestamp when tuning this model started.
             */
            readonly startTime?: string;
            /** @description Required. Input only. Immutable. The model training data. */
            trainingData?: components["schemas"]["Dataset"];
        } & {
            [key: string]: unknown;
        };
        /** @description Tool to support URL context retrieval. */
        UrlContext: Record<string, never>;
        /** @description Metadata related to url context retrieval tool. */
        UrlContextMetadata: {
            /** @description List of url context. */
            urlMetadata?: components["schemas"]["UrlMetadata"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Context of the a single url retrieval. */
        UrlMetadata: {
            /** @description Retrieved url by the tool. */
            retrievedUrl?: string;
            /**
             * @description Status of the url retrieval.
             * @enum {string}
             */
            urlRetrievalStatus?: "URL_RETRIEVAL_STATUS_UNSPECIFIED" | "URL_RETRIEVAL_STATUS_SUCCESS" | "URL_RETRIEVAL_STATUS_ERROR";
        } & {
            [key: string]: unknown;
        };
        /** @description Metadata on the generation request's token usage. */
        UsageMetadata: {
            /**
             * Format: int32
             * @description Number of tokens in the cached part of the prompt (the cached content)
             */
            cachedContentTokenCount?: number;
            /** @description Output only. List of modalities of the cached content in the request input. */
            readonly cacheTokensDetails?: components["schemas"]["ModalityTokenCount"][];
            /**
             * Format: int32
             * @description Total number of tokens across all the generated response candidates.
             */
            candidatesTokenCount?: number;
            /** @description Output only. List of modalities that were returned in the response. */
            readonly candidatesTokensDetails?: components["schemas"]["ModalityTokenCount"][];
            /**
             * Format: int32
             * @description Number of tokens in the prompt. When `cached_content` is set, this is still the total effective prompt size meaning this includes the number of tokens in the cached content.
             */
            promptTokenCount?: number;
            /** @description Output only. List of modalities that were processed in the request input. */
            readonly promptTokensDetails?: components["schemas"]["ModalityTokenCount"][];
            /**
             * Format: int32
             * @description Output only. Number of tokens of thoughts for thinking models.
             */
            readonly thoughtsTokenCount?: number;
            /**
             * Format: int32
             * @description Output only. Number of tokens present in tool-use prompt(s).
             */
            readonly toolUsePromptTokenCount?: number;
            /** @description Output only. List of modalities that were processed for tool-use request inputs. */
            readonly toolUsePromptTokensDetails?: components["schemas"]["ModalityTokenCount"][];
            /**
             * Format: int32
             * @description Total token count for the generation request (prompt + response candidates).
             */
            totalTokenCount?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Metadata describes the input video content. */
        VideoMetadata: {
            /**
             * Format: google-duration
             * @description Optional. The end offset of the video.
             */
            endOffset?: string;
            /**
             * Format: double
             * @description Optional. The frame rate of the video sent to the model. If not specified, the default value will be 1.0. The fps range is (0.0, 24.0].
             */
            fps?: number;
            /**
             * Format: google-duration
             * @description Optional. The start offset of the video.
             */
            startOffset?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description The configuration for the voice to use. */
        VoiceConfig: {
            /** @description The configuration for the prebuilt voice to use. */
            prebuiltVoiceConfig?: components["schemas"]["PrebuiltVoiceConfig"];
        } & {
            [key: string]: unknown;
        };
        /** @description Chunk from the web. */
        Web: {
            /** @description Title of the chunk. */
            title?: string;
            /** @description URI reference of the chunk. */
            uri?: string;
        } & {
            [key: string]: unknown;
        };
    };
    responses: never;
    parameters: {
        /** @description V1 error format. */
        "_.xgafv": "1" | "2";
        /** @description OAuth access token. */
        access_token: string;
        /** @description Data format for response. */
        alt: "json" | "media" | "proto";
        /** @description JSONP */
        callback: string;
        /** @description Selector specifying which fields to include in a partial response. */
        fields: string;
        /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
        key: string;
        /** @description OAuth 2.0 token for the current user. */
        oauth_token: string;
        /** @description Returns response with indentations and line breaks. */
        prettyPrint: boolean;
        /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
        quotaUser: string;
        /** @description Upload protocol for media (e.g. "raw", "multipart"). */
        upload_protocol: string;
        /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
        uploadType: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "generativelanguage.models.embedContent": {
        parameters: {
            query?: {
                /** @description V1 error format. */
                "$.xgafv"?: components["parameters"]["_.xgafv"];
                /** @description OAuth access token. */
                access_token?: components["parameters"]["access_token"];
                /** @description Data format for response. */
                alt?: components["parameters"]["alt"];
                /** @description JSONP */
                callback?: components["parameters"]["callback"];
                /** @description Selector specifying which fields to include in a partial response. */
                fields?: components["parameters"]["fields"];
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description Returns response with indentations and line breaks. */
                prettyPrint?: components["parameters"]["prettyPrint"];
                /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: components["parameters"]["quotaUser"];
                /** @description Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: components["parameters"]["upload_protocol"];
                /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: components["parameters"]["uploadType"];
            };
            header?: never;
            path: {
                /** @description Required. The model's resource name. This serves as an ID for the Model to use. This name should match a model name returned by the `ListModels` method. Format: `models/{model}` */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["EmbedContentRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmbedContentResponse"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.streamGenerateContent": {
        parameters: {
            query?: {
                /** @description V1 error format. */
                "$.xgafv"?: components["parameters"]["_.xgafv"];
                /** @description OAuth access token. */
                access_token?: components["parameters"]["access_token"];
                /** @description Data format for response. */
                alt?: components["parameters"]["alt"];
                /** @description JSONP */
                callback?: components["parameters"]["callback"];
                /** @description Selector specifying which fields to include in a partial response. */
                fields?: components["parameters"]["fields"];
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description Returns response with indentations and line breaks. */
                prettyPrint?: components["parameters"]["prettyPrint"];
                /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: components["parameters"]["quotaUser"];
                /** @description Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: components["parameters"]["upload_protocol"];
                /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: components["parameters"]["uploadType"];
            };
            header?: never;
            path: {
                /** @description Required. The name of the `Model` to use for generating the completion. Format: `models/{model}`. */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["GenerateContentRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GenerateContentResponse"];
                };
            };
        };
    };
    "generativelanguage.models.list": {
        parameters: {
            query?: {
                /** @description V1 error format. */
                "$.xgafv"?: components["parameters"]["_.xgafv"];
                /** @description OAuth access token. */
                access_token?: components["parameters"]["access_token"];
                /** @description Data format for response. */
                alt?: components["parameters"]["alt"];
                /** @description JSONP */
                callback?: components["parameters"]["callback"];
                /** @description Selector specifying which fields to include in a partial response. */
                fields?: components["parameters"]["fields"];
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description The maximum number of `Models` to return (per page). If unspecified, 50 models will be returned per page. This method returns at most 1000 models per page, even if you pass a larger page_size. */
                pageSize?: number;
                /** @description A page token, received from a previous `ListModels` call. Provide the `page_token` returned by one request as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListModels` must match the call that provided the page token. */
                pageToken?: string;
                /** @description Returns response with indentations and line breaks. */
                prettyPrint?: components["parameters"]["prettyPrint"];
                /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: components["parameters"]["quotaUser"];
                /** @description Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: components["parameters"]["upload_protocol"];
                /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: components["parameters"]["uploadType"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListModelsResponse"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.create": {
        parameters: {
            query?: {
                /** @description V1 error format. */
                "$.xgafv"?: components["parameters"]["_.xgafv"];
                /** @description OAuth access token. */
                access_token?: components["parameters"]["access_token"];
                /** @description Data format for response. */
                alt?: components["parameters"]["alt"];
                /** @description JSONP */
                callback?: components["parameters"]["callback"];
                /** @description Selector specifying which fields to include in a partial response. */
                fields?: components["parameters"]["fields"];
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description Returns response with indentations and line breaks. */
                prettyPrint?: components["parameters"]["prettyPrint"];
                /** @description Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: components["parameters"]["quotaUser"];
                /** @description Optional. The unique id for the tuned model if specified. This value should be up to 40 characters, the first character must be a letter, the last could be a letter or a number. The id must match the regular expression: `[a-z]([a-z0-9-]{0,38}[a-z0-9])?`. */
                tunedModelId?: string;
                /** @description Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: components["parameters"]["upload_protocol"];
                /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: components["parameters"]["uploadType"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["TunedModel"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Operation"];
                };
            };
        };
    };
}
