export interface paths {
    "/assistants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of assistants. */
        get: operations["listAssistants"];
        put?: never;
        /** Create an assistant with a model and instructions. */
        post: operations["createAssistant"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/assistants/{assistant_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves an assistant. */
        get: operations["getAssistant"];
        put?: never;
        /** Modifies an assistant. */
        post: operations["modifyAssistant"];
        /** Delete an assistant. */
        delete: operations["deleteAssistant"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audio/speech": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generates audio from the input text. */
        post: operations["createSpeech"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audio/transcriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Transcribes audio into the input language. */
        post: operations["createTranscription"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audio/translations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Translates audio into English. */
        post: operations["createTranslation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/batches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List your organization's batches. */
        get: operations["listBatches"];
        put?: never;
        /** Creates and executes a batch from an uploaded file of requests */
        post: operations["createBatch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/batches/{batch_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a batch. */
        get: operations["retrieveBatch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/batches/{batch_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file. */
        post: operations["cancelBatch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates a model response for the given chat conversation. */
        post: operations["createChatCompletion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates a completion for the provided prompt and parameters. */
        post: operations["createCompletion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/embeddings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates an embedding vector representing the input text. */
        post: operations["createEmbedding"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of files that belong to the user's organization. */
        get: operations["listFiles"];
        put?: never;
        /** Upload a file that can be used across various endpoints. Individual files can be up to 512 MB, and the size of all files uploaded by one organization can be up to 100 GB.
         *
         *     The Assistants API supports files up to 2 million tokens and of specific file types. See the [Assistants Tools guide](/docs/assistants/tools) for details.
         *
         *     The Fine-tuning API only supports `.jsonl` files. The input also has certain required formats for fine-tuning [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) models.
         *
         *     The Batch API only supports `.jsonl` files up to 100 MB in size. The input also has a specific required [format](/docs/api-reference/batch/request-input).
         *
         *     Please [contact us](https://help.openai.com/) if you need to increase these storage limits.
         *      */
        post: operations["createFile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files/{file_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns information about a specific file. */
        get: operations["retrieveFile"];
        put?: never;
        post?: never;
        /** Delete a file. */
        delete: operations["deleteFile"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/files/{file_id}/content": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns the contents of the specified file. */
        get: operations["downloadFile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fine_tuning/jobs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List your organization's fine-tuning jobs
         *      */
        get: operations["listPaginatedFineTuningJobs"];
        put?: never;
        /** Creates a fine-tuning job which begins the process of creating a new model from a given dataset.
         *
         *     Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.
         *
         *     [Learn more about fine-tuning](/docs/guides/fine-tuning)
         *      */
        post: operations["createFineTuningJob"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fine_tuning/jobs/{fine_tuning_job_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get info about a fine-tuning job.
         *
         *     [Learn more about fine-tuning](/docs/guides/fine-tuning)
         *      */
        get: operations["retrieveFineTuningJob"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fine_tuning/jobs/{fine_tuning_job_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Immediately cancel a fine-tune job.
         *      */
        post: operations["cancelFineTuningJob"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fine_tuning/jobs/{fine_tuning_job_id}/checkpoints": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List checkpoints for a fine-tuning job.
         *      */
        get: operations["listFineTuningJobCheckpoints"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/fine_tuning/jobs/{fine_tuning_job_id}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get status updates for a fine-tuning job.
         *      */
        get: operations["listFineTuningEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/edits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates an edited or extended image given an original image and a prompt. */
        post: operations["createImageEdit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/generations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates an image given a prompt. */
        post: operations["createImage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/images/variations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates a variation of a given image. */
        post: operations["createImageVariation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Lists the currently available models, and provides basic information about each one such as the owner and availability. */
        get: operations["listModels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/models/{model}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a model instance, providing basic information about the model such as the owner and permissioning. */
        get: operations["retrieveModel"];
        put?: never;
        post?: never;
        /** Delete a fine-tuned model. You must have the Owner role in your organization to delete a model. */
        delete: operations["deleteModel"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/moderations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Classifies if text is potentially harmful. */
        post: operations["createModeration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a thread. */
        post: operations["createThread"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a thread. */
        get: operations["getThread"];
        put?: never;
        /** Modifies a thread. */
        post: operations["modifyThread"];
        /** Delete a thread. */
        delete: operations["deleteThread"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of messages for a given thread. */
        get: operations["listMessages"];
        put?: never;
        /** Create a message. */
        post: operations["createMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/messages/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieve a message. */
        get: operations["getMessage"];
        put?: never;
        /** Modifies a message. */
        post: operations["modifyMessage"];
        /** Deletes a message. */
        delete: operations["deleteMessage"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of runs belonging to a thread. */
        get: operations["listRuns"];
        put?: never;
        /** Create a run. */
        post: operations["createRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/runs/{run_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a run. */
        get: operations["getRun"];
        put?: never;
        /** Modifies a run. */
        post: operations["modifyRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/runs/{run_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancels a run that is `in_progress`. */
        post: operations["cancelRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/runs/{run_id}/steps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of run steps belonging to a run. */
        get: operations["listRunSteps"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/runs/{run_id}/steps/{step_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a run step. */
        get: operations["getRunStep"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/{thread_id}/runs/{run_id}/submit_tool_outputs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.
         *      */
        post: operations["submitToolOuputsToRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/threads/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a thread and run it in one request. */
        post: operations["createThreadAndRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uploads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates an intermediate [Upload](/docs/api-reference/uploads/object) object that you can add [Parts](/docs/api-reference/uploads/part-object) to. Currently, an Upload can accept at most 8 GB in total and expires after an hour after you create it.
         *
         *     Once you complete the Upload, we will create a [File](/docs/api-reference/files/object) object that contains all the parts you uploaded. This File is usable in the rest of our platform as a regular File object.
         *
         *     For certain `purpose`s, the correct `mime_type` must be specified. Please refer to documentation for the supported MIME types for your use case:
         *     - [Assistants](/docs/assistants/tools/file-search/supported-files)
         *
         *     For guidance on the proper filename extensions for each purpose, please follow the documentation on [creating a File](/docs/api-reference/files/create).
         *      */
        post: operations["createUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uploads/{upload_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancels the Upload. No Parts may be added after an Upload is cancelled.
         *      */
        post: operations["cancelUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uploads/{upload_id}/complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Completes the [Upload](/docs/api-reference/uploads/object).
         *
         *     Within the returned Upload object, there is a nested [File](/docs/api-reference/files/object) object that is ready to use in the rest of the platform.
         *
         *     You can specify the order of the Parts by passing in an ordered list of the Part IDs.
         *
         *     The number of bytes uploaded upon completion must match the number of bytes initially specified when creating the Upload object. No Parts may be added after an Upload is completed.
         *      */
        post: operations["completeUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uploads/{upload_id}/parts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Adds a [Part](/docs/api-reference/uploads/part-object) to an [Upload](/docs/api-reference/uploads/object) object. A Part represents a chunk of bytes from the file you are trying to upload.
         *
         *     Each Part can be at most 64 MB, and you can add Parts until you hit the Upload maximum of 8 GB.
         *
         *     It is possible to add multiple Parts in parallel. You can decide the intended order of the Parts when you [complete the Upload](/docs/api-reference/uploads/complete).
         *      */
        post: operations["addUploadPart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vector_stores": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of vector stores. */
        get: operations["listVectorStores"];
        put?: never;
        /** Create a vector store. */
        post: operations["createVectorStore"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vector_stores/{vector_store_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a vector store. */
        get: operations["getVectorStore"];
        put?: never;
        /** Modifies a vector store. */
        post: operations["modifyVectorStore"];
        /** Delete a vector store. */
        delete: operations["deleteVectorStore"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vector_stores/{vector_store_id}/file_batches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a vector store file batch. */
        post: operations["createVectorStoreFileBatch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vector_stores/{vector_store_id}/file_batches/{batch_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a vector store file batch. */
        get: operations["getVectorStoreFileBatch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel a vector store file batch. This attempts to cancel the processing of files in this batch as soon as possible. */
        post: operations["cancelVectorStoreFileBatch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vector_stores/{vector_store_id}/file_batches/{batch_id}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of vector store files in a batch. */
        get: operations["listFilesInVectorStoreBatch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vector_stores/{vector_store_id}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Returns a list of vector store files. */
        get: operations["listVectorStoreFiles"];
        put?: never;
        /** Create a vector store file by attaching a [File](/docs/api-reference/files) to a [vector store](/docs/api-reference/vector-stores/object). */
        post: operations["createVectorStoreFile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/vector_stores/{vector_store_id}/files/{file_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a vector store file. */
        get: operations["getVectorStoreFile"];
        put?: never;
        post?: never;
        /** Delete a vector store file. This will remove the file from the vector store but the file itself will not be deleted. To delete the file, use the [delete file](/docs/api-reference/files/delete) endpoint. */
        delete: operations["deleteVectorStoreFile"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AddUploadPartRequest: {
            /**
             * Format: binary
             * @description The chunk of bytes for this Part.
             *
             */
            data: string;
            [key: string]: unknown;
        };
        /**
         * Assistant
         * @description Represents an `assistant` that can call the model and use tools.
         */
        AssistantObject: {
            /** @description The Unix timestamp (in seconds) for when the assistant was created. */
            created_at: number;
            /** @description The description of the assistant. The maximum length is 512 characters.
             *      */
            description: string | null;
            /** @description The identifier, which can be referenced in API endpoints. */
            id: string;
            /** @description The system instructions that the assistant uses. The maximum length is 256,000 characters.
             *      */
            instructions: string | null;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata: Record<string, never>;
            /** @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
             *      */
            model: string;
            /** @description The name of the assistant. The maximum length is 256 characters.
             *      */
            name: string | null;
            /**
             * @description The object type, which is always `assistant`.
             * @enum {string}
             */
            object: "assistant";
            response_format?: components["schemas"]["AssistantsApiResponseFormatOption"];
            /**
             * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
             *
             * @default 1
             * @example 1
             */
            temperature: number;
            /** @description A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
             *      */
            tool_resources?: {
                code_interpreter?: {
                    /**
                     * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter`` tool. There can be a maximum of 20 files associated with the tool.
                     *
                     * @default []
                     */
                    file_ids: string[];
                    [key: string]: unknown;
                };
                file_search?: {
                    /** @description The ID of the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
                     *      */
                    vector_store_ids?: string[];
                    [key: string]: unknown;
                };
                [key: string]: unknown;
            } | null;
            /**
             * @description A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
             *
             * @default []
             */
            tools: (components["schemas"]["AssistantToolsCode"] | components["schemas"]["AssistantToolsFileSearch"] | components["schemas"]["AssistantToolsFunction"])[];
            /**
             * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
             *
             *     We generally recommend altering this or temperature but not both.
             *
             * @default 1
             * @example 1
             */
            top_p: number;
            [key: string]: unknown;
        };
        /** @description An object describing the expected output of the model. If `json_object` only `function` type `tools` are allowed to be passed to the Run. If `text` the model can return text or any value needed.
         *      */
        AssistantsApiResponseFormat: {
            /**
             * @description Must be one of `text` or `json_object`.
             * @default text
             * @example json_object
             * @enum {string}
             */
            type: "text" | "json_object";
            [key: string]: unknown;
        };
        /** @description Specifies the format that the model must output. Compatible with [GPT-4o](/docs/models/gpt-4o), [GPT-4 Turbo](/docs/models/gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models since `gpt-3.5-turbo-1106`.
         *
         *     Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is valid JSON.
         *
         *     **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
         *      */
        AssistantsApiResponseFormatOption: ("none" | "auto") | components["schemas"]["AssistantsApiResponseFormat"];
        /** @description Controls which (if any) tool is called by the model.
         *     `none` means the model will not call any tools and instead generates a message.
         *     `auto` is the default value and means the model can pick between generating a message or calling one or more tools.
         *     `required` means the model must call one or more tools before responding to the user.
         *     Specifying a particular tool like `{"type": "file_search"}` or `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
         *      */
        AssistantsApiToolChoiceOption: ("none" | "auto" | "required") | components["schemas"]["AssistantsNamedToolChoice"];
        /** @description Specifies a tool the model should use. Use to force the model to call a specific tool. */
        AssistantsNamedToolChoice: {
            function?: {
                /** @description The name of the function to call. */
                name: string;
                [key: string]: unknown;
            };
            /**
             * @description The type of the tool. If type is `function`, the function name must be set
             * @enum {string}
             */
            type: "function" | "code_interpreter" | "file_search";
            [key: string]: unknown;
        };
        /** @description Represents an event emitted when streaming a Run.
         *
         *     Each event in a server-sent events stream has an `event` and `data` property:
         *
         *     ```
         *     event: thread.created
         *     data: {"id": "thread_123", "object": "thread", ...}
         *     ```
         *
         *     We emit events whenever a new object is created, transitions to a new state, or is being
         *     streamed in parts (deltas). For example, we emit `thread.run.created` when a new run
         *     is created, `thread.run.completed` when a run completes, and so on. When an Assistant chooses
         *     to create a message during a run, we emit a `thread.message.created event`, a
         *     `thread.message.in_progress` event, many `thread.message.delta` events, and finally a
         *     `thread.message.completed` event.
         *
         *     We may add additional events over time, so we recommend handling unknown events gracefully
         *     in your code. See the [Assistants API quickstart](/docs/assistants/overview) to learn how to
         *     integrate the Assistants API with streaming.
         *      */
        AssistantStreamEvent: components["schemas"]["ThreadStreamEvent"] | components["schemas"]["RunStreamEvent"] | components["schemas"]["RunStepStreamEvent"] | components["schemas"]["MessageStreamEvent"] | components["schemas"]["ErrorEvent"] | components["schemas"]["DoneEvent"];
        /** Code interpreter tool */
        AssistantToolsCode: {
            /**
             * @description The type of tool being defined: `code_interpreter`
             * @enum {string}
             */
            type: "code_interpreter";
            [key: string]: unknown;
        };
        /** FileSearch tool */
        AssistantToolsFileSearch: {
            /** @description Overrides for the file search tool. */
            file_search?: {
                /** @description The maximum number of results the file search tool should output. The default is 20 for gpt-4* models and 5 for gpt-3.5-turbo. This number should be between 1 and 50 inclusive.
                 *
                 *     Note that the file search tool may output fewer than `max_num_results` results. See the [file search tool documentation](/docs/assistants/tools/file-search/number-of-chunks-returned) for more information.
                 *      */
                max_num_results?: number;
                [key: string]: unknown;
            };
            /**
             * @description The type of tool being defined: `file_search`
             * @enum {string}
             */
            type: "file_search";
            [key: string]: unknown;
        };
        /** FileSearch tool */
        AssistantToolsFileSearchTypeOnly: {
            /**
             * @description The type of tool being defined: `file_search`
             * @enum {string}
             */
            type: "file_search";
            [key: string]: unknown;
        };
        /** Function tool */
        AssistantToolsFunction: {
            function: components["schemas"]["FunctionObject"];
            /**
             * @description The type of tool being defined: `function`
             * @enum {string}
             */
            type: "function";
            [key: string]: unknown;
        };
        /**
         * Auto Chunking Strategy
         * @description The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.
         */
        AutoChunkingStrategyRequestParam: {
            /**
             * @description Always `auto`.
             * @enum {string}
             */
            type: "auto";
            [key: string]: unknown;
        };
        Batch: {
            /** @description The Unix timestamp (in seconds) for when the batch was cancelled. */
            cancelled_at?: number;
            /** @description The Unix timestamp (in seconds) for when the batch started cancelling. */
            cancelling_at?: number;
            /** @description The Unix timestamp (in seconds) for when the batch was completed. */
            completed_at?: number;
            /** @description The time frame within which the batch should be processed. */
            completion_window: string;
            /** @description The Unix timestamp (in seconds) for when the batch was created. */
            created_at: number;
            /** @description The OpenAI API endpoint used by the batch. */
            endpoint: string;
            /** @description The ID of the file containing the outputs of requests with errors. */
            error_file_id?: string;
            errors?: {
                data?: {
                    /** @description An error code identifying the error type. */
                    code?: string;
                    /** @description The line number of the input file where the error occurred, if applicable. */
                    line?: number | null;
                    /** @description A human-readable message providing more details about the error. */
                    message?: string;
                    /** @description The name of the parameter that caused the error, if applicable. */
                    param?: string | null;
                    [key: string]: unknown;
                }[];
                /** @description The object type, which is always `list`. */
                object?: string;
                [key: string]: unknown;
            };
            /** @description The Unix timestamp (in seconds) for when the batch expired. */
            expired_at?: number;
            /** @description The Unix timestamp (in seconds) for when the batch will expire. */
            expires_at?: number;
            /** @description The Unix timestamp (in seconds) for when the batch failed. */
            failed_at?: number;
            /** @description The Unix timestamp (in seconds) for when the batch started finalizing. */
            finalizing_at?: number;
            id: string;
            /** @description The Unix timestamp (in seconds) for when the batch started processing. */
            in_progress_at?: number;
            /** @description The ID of the input file for the batch. */
            input_file_id: string;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /**
             * @description The object type, which is always `batch`.
             * @enum {string}
             */
            object: "batch";
            /** @description The ID of the file containing the outputs of successfully executed requests. */
            output_file_id?: string;
            /** @description The request counts for different statuses within the batch. */
            request_counts?: {
                /** @description Number of requests that have been completed successfully. */
                completed: number;
                /** @description Number of requests that have failed. */
                failed: number;
                /** @description Total number of requests in the batch. */
                total: number;
                [key: string]: unknown;
            };
            /**
             * @description The current status of the batch.
             * @enum {string}
             */
            status: "validating" | "failed" | "in_progress" | "finalizing" | "completed" | "expired" | "cancelling" | "cancelled";
            [key: string]: unknown;
        };
        /** @description The per-line object of the batch input file */
        BatchRequestInput: {
            /** @description A developer-provided per-request id that will be used to match outputs to inputs. Must be unique for each request in a batch. */
            custom_id?: string;
            /**
             * @description The HTTP method to be used for the request. Currently only `POST` is supported.
             * @enum {string}
             */
            method?: "POST";
            /** @description The OpenAI API relative URL to be used for the request. Currently `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. */
            url?: string;
            [key: string]: unknown;
        };
        /** @description The per-line object of the batch output and error files */
        BatchRequestOutput: {
            /** @description A developer-provided per-request id that will be used to match outputs to inputs. */
            custom_id?: string;
            /** @description For requests that failed with a non-HTTP error, this will contain more information on the cause of the failure. */
            error?: {
                /** @description A machine-readable error code. */
                code?: string;
                /** @description A human-readable error message. */
                message?: string;
                [key: string]: unknown;
            } | null;
            id?: string;
            response?: {
                /** @description The JSON body of the response */
                body?: Record<string, never>;
                /** @description An unique identifier for the OpenAI API request. Please include this request ID when contacting support. */
                request_id?: string;
                /** @description The HTTP status code of the response */
                status_code?: number;
                [key: string]: unknown;
            } | null;
            [key: string]: unknown;
        };
        CancelUploadRequest: Record<string, never>;
        /** @description Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
         *      */
        ChatCompletionFunctionCallOption: {
            /** @description The name of the function to call. */
            name: string;
            [key: string]: unknown;
        };
        /** @deprecated */
        ChatCompletionFunctions: {
            /** @description A description of what the function does, used by the model to choose when and how to call the function. */
            description?: string;
            /** @description The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
            name: string;
            parameters?: components["schemas"]["FunctionParameters"];
            [key: string]: unknown;
        };
        ChatCompletionMessageToolCall: {
            /** @description The function that the model called. */
            function: {
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments: string;
                /** @description The name of the function to call. */
                name: string;
                [key: string]: unknown;
            };
            /** @description The ID of the tool call. */
            id: string;
            /**
             * @description The type of the tool. Currently, only `function` is supported.
             * @enum {string}
             */
            type: "function";
            [key: string]: unknown;
        };
        ChatCompletionMessageToolCallChunk: {
            function?: {
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments?: string;
                /** @description The name of the function to call. */
                name?: string;
                [key: string]: unknown;
            };
            /** @description The ID of the tool call. */
            id?: string;
            index: number;
            /**
             * @description The type of the tool. Currently, only `function` is supported.
             * @enum {string}
             */
            type?: "function";
            [key: string]: unknown;
        };
        /** @description The tool calls generated by the model, such as function calls. */
        ChatCompletionMessageToolCalls: components["schemas"]["ChatCompletionMessageToolCall"][];
        /** @description Specifies a tool the model should use. Use to force the model to call a specific function. */
        ChatCompletionNamedToolChoice: {
            function: {
                /** @description The name of the function to call. */
                name: string;
                [key: string]: unknown;
            };
            /**
             * @description The type of the tool. Currently, only `function` is supported.
             * @enum {string}
             */
            type: "function";
            [key: string]: unknown;
        };
        /** Assistant message */
        ChatCompletionRequestAssistantMessage: {
            /** @description The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.
             *      */
            content?: string | null;
            /**
             * @deprecated
             * @description Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
             */
            function_call?: {
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments: string;
                /** @description The name of the function to call. */
                name: string;
                [key: string]: unknown;
            } | null;
            /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
            name?: string;
            /**
             * @description The role of the messages author, in this case `assistant`.
             * @enum {string}
             */
            role: "assistant";
            tool_calls?: components["schemas"]["ChatCompletionMessageToolCalls"];
            [key: string]: unknown;
        };
        /**
         * Function message
         * @deprecated
         */
        ChatCompletionRequestFunctionMessage: {
            /** @description The contents of the function message. */
            content: string | null;
            /** @description The name of the function to call. */
            name: string;
            /**
             * @description The role of the messages author, in this case `function`.
             * @enum {string}
             */
            role: "function";
            [key: string]: unknown;
        };
        ChatCompletionRequestMessage: components["schemas"]["ChatCompletionRequestSystemMessage"] | components["schemas"]["ChatCompletionRequestUserMessage"] | components["schemas"]["ChatCompletionRequestAssistantMessage"] | components["schemas"]["ChatCompletionRequestToolMessage"] | components["schemas"]["ChatCompletionRequestFunctionMessage"];
        ChatCompletionRequestMessageContentPart: components["schemas"]["ChatCompletionRequestMessageContentPartText"] | components["schemas"]["ChatCompletionRequestMessageContentPartImage"];
        /** Image content part */
        ChatCompletionRequestMessageContentPartImage: {
            image_url: {
                /**
                 * @description Specifies the detail level of the image. Learn more in the [Vision guide](/docs/guides/vision/low-or-high-fidelity-image-understanding).
                 * @default auto
                 * @enum {string}
                 */
                detail: "auto" | "low" | "high";
                /**
                 * Format: uri
                 * @description Either a URL of the image or the base64 encoded image data.
                 */
                url: string;
                [key: string]: unknown;
            };
            /**
             * @description The type of the content part.
             * @enum {string}
             */
            type: "image_url";
            [key: string]: unknown;
        };
        /** Text content part */
        ChatCompletionRequestMessageContentPartText: {
            /** @description The text content. */
            text: string;
            /**
             * @description The type of the content part.
             * @enum {string}
             */
            type: "text";
            [key: string]: unknown;
        };
        /** System message */
        ChatCompletionRequestSystemMessage: {
            /** @description The contents of the system message. */
            content: string;
            /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
            name?: string;
            /**
             * @description The role of the messages author, in this case `system`.
             * @enum {string}
             */
            role: "system";
            [key: string]: unknown;
        };
        /** Tool message */
        ChatCompletionRequestToolMessage: {
            /** @description The contents of the tool message. */
            content: string;
            /**
             * @description The role of the messages author, in this case `tool`.
             * @enum {string}
             */
            role: "tool";
            /** @description Tool call that this message is responding to. */
            tool_call_id: string;
            [key: string]: unknown;
        };
        /** User message */
        ChatCompletionRequestUserMessage: {
            /** @description The contents of the user message.
             *      */
            content: string | components["schemas"]["ChatCompletionRequestMessageContentPart"][];
            /** @description An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
            name?: string;
            /**
             * @description The role of the messages author, in this case `user`.
             * @enum {string}
             */
            role: "user";
            [key: string]: unknown;
        };
        /** @description A chat completion message generated by the model. */
        ChatCompletionResponseMessage: {
            /** @description The contents of the message. */
            content: string | null;
            /**
             * @deprecated
             * @description Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
             */
            function_call?: {
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments: string;
                /** @description The name of the function to call. */
                name: string;
                [key: string]: unknown;
            };
            /**
             * @description The role of the author of this message.
             * @enum {string}
             */
            role: "assistant";
            tool_calls?: components["schemas"]["ChatCompletionMessageToolCalls"];
            [key: string]: unknown;
        };
        /**
         * @description The role of the author of a message
         * @enum {string}
         */
        ChatCompletionRole: "system" | "user" | "assistant" | "tool" | "function";
        /**
         * @description Options for streaming response. Only set this when you set `stream: true`.
         *
         * @default null
         */
        ChatCompletionStreamOptions: {
            /** @description If set, an additional chunk will be streamed before the `data: [DONE]` message. The `usage` field on this chunk shows the token usage statistics for the entire request, and the `choices` field will always be an empty array. All other chunks will also include a `usage` field, but with a null value.
             *      */
            include_usage?: boolean;
            [key: string]: unknown;
        } | null;
        /** @description A chat completion delta generated by streamed model responses. */
        ChatCompletionStreamResponseDelta: {
            /** @description The contents of the chunk message. */
            content?: string | null;
            /**
             * @deprecated
             * @description Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
             */
            function_call?: {
                /** @description The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function. */
                arguments?: string;
                /** @description The name of the function to call. */
                name?: string;
                [key: string]: unknown;
            };
            /**
             * @description The role of the author of this message.
             * @enum {string}
             */
            role?: "system" | "user" | "assistant" | "tool";
            tool_calls?: components["schemas"]["ChatCompletionMessageToolCallChunk"][];
            [key: string]: unknown;
        };
        ChatCompletionTokenLogprob: {
            /** @description A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. */
            bytes: number[] | null;
            /** @description The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely. */
            logprob: number;
            /** @description The token. */
            token: string;
            /** @description List of the most likely tokens and their log probability, at this token position. In rare cases, there may be fewer than the number of requested `top_logprobs` returned. */
            top_logprobs: {
                /** @description A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be `null` if there is no bytes representation for the token. */
                bytes: number[] | null;
                /** @description The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value `-9999.0` is used to signify that the token is very unlikely. */
                logprob: number;
                /** @description The token. */
                token: string;
                [key: string]: unknown;
            }[];
            [key: string]: unknown;
        };
        ChatCompletionTool: {
            function: components["schemas"]["FunctionObject"];
            /**
             * @description The type of the tool. Currently, only `function` is supported.
             * @enum {string}
             */
            type: "function";
            [key: string]: unknown;
        };
        /** @description Controls which (if any) tool is called by the model.
         *     `none` means the model will not call any tool and instead generates a message.
         *     `auto` means the model can pick between generating a message or calling one or more tools.
         *     `required` means the model must call one or more tools.
         *     Specifying a particular tool via `{"type": "function", "function": {"name": "my_function"}}` forces the model to call that tool.
         *
         *     `none` is the default when no tools are present. `auto` is the default if tools are present.
         *      */
        ChatCompletionToolChoiceOption: ("none" | "auto" | "required") | components["schemas"]["ChatCompletionNamedToolChoice"];
        /** @description The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
        ChunkingStrategyRequestParam: components["schemas"]["AutoChunkingStrategyRequestParam"] | components["schemas"]["StaticChunkingStrategyRequestParam"];
        CompleteUploadRequest: {
            /** @description The optional md5 checksum for the file contents to verify if the bytes uploaded matches what you expect.
             *      */
            md5?: string;
            /** @description The ordered list of Part IDs.
             *      */
            part_ids: string[];
            [key: string]: unknown;
        };
        /** @description Usage statistics for the completion request. */
        CompletionUsage: {
            /** @description Number of tokens in the generated completion. */
            completion_tokens: number;
            /** @description Number of tokens in the prompt. */
            prompt_tokens: number;
            /** @description Total number of tokens used in the request (prompt + completion). */
            total_tokens: number;
            [key: string]: unknown;
        };
        CreateAssistantRequest: {
            /** @description The description of the assistant. The maximum length is 512 characters.
             *      */
            description?: string | null;
            /** @description The system instructions that the assistant uses. The maximum length is 256,000 characters.
             *      */
            instructions?: string | null;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /**
             * @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
             *
             * @example gpt-4-turbo
             */
            model: string | ("gpt-4o" | "gpt-4o-2024-05-13" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613");
            /** @description The name of the assistant. The maximum length is 256 characters.
             *      */
            name?: string | null;
            response_format?: components["schemas"]["AssistantsApiResponseFormatOption"];
            /**
             * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
             *
             * @default 1
             * @example 1
             */
            temperature: number;
            /** @description A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
             *      */
            tool_resources?: {
                code_interpreter?: {
                    /**
                     * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
                     *
                     * @default []
                     */
                    file_ids: string[];
                    [key: string]: unknown;
                };
                file_search?: {
                    /** @description The [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
                     *      */
                    vector_store_ids?: string[];
                    /** @description A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this assistant. There can be a maximum of 1 vector store attached to the assistant.
                     *      */
                    vector_stores?: {
                        /** @description The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
                        chunking_strategy?: {
                            /**
                             * @description Always `auto`.
                             * @enum {string}
                             */
                            type: "auto";
                            [key: string]: unknown;
                        } | {
                            static: {
                                /** @description The number of tokens that overlap between chunks. The default value is `400`.
                                 *
                                 *     Note that the overlap must not exceed half of `max_chunk_size_tokens`.
                                 *      */
                                chunk_overlap_tokens: number;
                                /** @description The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
                                max_chunk_size_tokens: number;
                                [key: string]: unknown;
                            };
                            /**
                             * @description Always `static`.
                             * @enum {string}
                             */
                            type: "static";
                            [key: string]: unknown;
                        };
                        /** @description A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
                         *      */
                        file_ids?: string[];
                        /** @description Set of 16 key-value pairs that can be attached to a vector store. This can be useful for storing additional information about the vector store in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
                         *      */
                        metadata?: Record<string, never>;
                        [key: string]: unknown;
                    }[];
                    [key: string]: unknown;
                } & (unknown | unknown);
                [key: string]: unknown;
            } | null;
            /**
             * @description A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
             *
             * @default []
             */
            tools: (components["schemas"]["AssistantToolsCode"] | components["schemas"]["AssistantToolsFileSearch"] | components["schemas"]["AssistantToolsFunction"])[];
            /**
             * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
             *
             *     We generally recommend altering this or temperature but not both.
             *
             * @default 1
             * @example 1
             */
            top_p: number;
            [key: string]: unknown;
        };
        /** @description Represents a chat completion response returned by model, based on the provided input. */
        CreateChatCompletionFunctionResponse: {
            /** @description A list of chat completion choices. Can be more than one if `n` is greater than 1. */
            choices: {
                /**
                 * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, `content_filter` if content was omitted due to a flag from our content filters, or `function_call` if the model called a function.
                 *
                 * @enum {string}
                 */
                finish_reason: "stop" | "length" | "function_call" | "content_filter";
                /** @description The index of the choice in the list of choices. */
                index: number;
                message: components["schemas"]["ChatCompletionResponseMessage"];
                [key: string]: unknown;
            }[];
            /** @description The Unix timestamp (in seconds) of when the chat completion was created. */
            created: number;
            /** @description A unique identifier for the chat completion. */
            id: string;
            /** @description The model used for the chat completion. */
            model: string;
            /**
             * @description The object type, which is always `chat.completion`.
             * @enum {string}
             */
            object: "chat.completion";
            /** @description This fingerprint represents the backend configuration that the model runs with.
             *
             *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
             *      */
            system_fingerprint?: string;
            usage?: components["schemas"]["CompletionUsage"];
            [key: string]: unknown;
        };
        /** @description Represents a streamed chunk of a chat completion response returned by model, based on the provided input. */
        CreateChatCompletionImageResponse: Record<string, never>;
        CreateChatCompletionRequest: {
            /**
             * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
             *
             *     [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
             *
             * @default 0
             */
            frequency_penalty: number | null;
            /**
             * @deprecated
             * @description Deprecated in favor of `tool_choice`.
             *
             *     Controls which (if any) function is called by the model.
             *     `none` means the model will not call a function and instead generates a message.
             *     `auto` means the model can pick between generating a message or calling a function.
             *     Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
             *
             *     `none` is the default when no functions are present. `auto` is the default if functions are present.
             *
             */
            function_call?: ("none" | "auto") | components["schemas"]["ChatCompletionFunctionCallOption"];
            /**
             * @deprecated
             * @description Deprecated in favor of `tools`.
             *
             *     A list of functions the model may generate JSON inputs for.
             *
             */
            functions?: components["schemas"]["ChatCompletionFunctions"][];
            /**
             * @description Modify the likelihood of specified tokens appearing in the completion.
             *
             *     Accepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
             *
             * @default null
             */
            logit_bias: {
                [key: string]: number | undefined;
            } | null;
            /**
             * @description Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the `content` of `message`.
             * @default false
             */
            logprobs: boolean | null;
            /** @description The maximum number of [tokens](/tokenizer) that can be generated in the chat completion.
             *
             *     The total length of input tokens and generated tokens is limited by the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.
             *      */
            max_tokens?: number | null;
            /** @description A list of messages comprising the conversation so far. [Example Python code](https://cookbook.openai.com/examples/how_to_format_inputs_to_chatgpt_models). */
            messages: components["schemas"]["ChatCompletionRequestMessage"][];
            /**
             * @description ID of the model to use. See the [model endpoint compatibility](/docs/models/model-endpoint-compatibility) table for details on which models work with the Chat API.
             * @example gpt-4-turbo
             */
            model: string | ("gpt-4o" | "gpt-4o-2024-05-13" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0301" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613");
            /**
             * @description How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs.
             * @default 1
             * @example 1
             */
            n: number;
            parallel_tool_calls?: components["schemas"]["ParallelToolCalls"];
            /**
             * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
             *
             *     [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
             *
             * @default 0
             */
            presence_penalty: number | null;
            /** @description An object specifying the format that the model must output. Compatible with [GPT-4 Turbo](/docs/models/gpt-4-and-gpt-4-turbo) and all GPT-3.5 Turbo models newer than `gpt-3.5-turbo-1106`.
             *
             *     Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is valid JSON.
             *
             *     **Important:** when using JSON mode, you **must** also instruct the model to produce JSON yourself via a system or user message. Without this, the model may generate an unending stream of whitespace until the generation reaches the token limit, resulting in a long-running and seemingly "stuck" request. Also note that the message content may be partially cut off if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length.
             *      */
            response_format?: {
                /**
                 * @description Must be one of `text` or `json_object`.
                 * @default text
                 * @example json_object
                 * @enum {string}
                 */
                type: "text" | "json_object";
                [key: string]: unknown;
            };
            /** @description This feature is in Beta.
             *     If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
             *     Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
             *      */
            seed?: number | null;
            /**
             * @description Specifies the latency tier to use for processing the request. This parameter is relevant for customers subscribed to the scale tier service:
             *       - If set to 'auto', the system will utilize scale tier credits until they are exhausted.
             *       - If set to 'default', the request will be processed using the default service tier with a lower uptime SLA and no latency guarentee.
             *       - When not set, the default behavior is 'auto'.
             *
             *       When this parameter is set, the response body will include the `service_tier` utilized.
             *
             * @default null
             * @enum {string|null}
             */
            service_tier: "auto" | "default" | null;
            /**
             * @description Up to 4 sequences where the API will stop generating further tokens.
             *
             * @default null
             */
            stop: (string | null) | string[];
            /**
             * @description If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).
             *
             * @default false
             */
            stream: boolean | null;
            stream_options?: components["schemas"]["ChatCompletionStreamOptions"];
            /**
             * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
             *
             *     We generally recommend altering this or `top_p` but not both.
             *
             * @default 1
             * @example 1
             */
            temperature: number;
            tool_choice?: components["schemas"]["ChatCompletionToolChoiceOption"];
            /** @description A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. A max of 128 functions are supported.
             *      */
            tools?: components["schemas"]["ChatCompletionTool"][];
            /** @description An integer between 0 and 20 specifying the number of most likely tokens to return at each token position, each with an associated log probability. `logprobs` must be set to `true` if this parameter is used. */
            top_logprobs?: number | null;
            /**
             * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
             *
             *     We generally recommend altering this or `temperature` but not both.
             *
             * @default 1
             * @example 1
             */
            top_p: number;
            /**
             * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
             *
             * @example user-1234
             */
            user?: string;
            [key: string]: unknown;
        };
        /** @description Represents a chat completion response returned by model, based on the provided input. */
        CreateChatCompletionResponse: {
            /** @description A list of chat completion choices. Can be more than one if `n` is greater than 1. */
            choices: {
                /**
                 * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
                 *     `length` if the maximum number of tokens specified in the request was reached,
                 *     `content_filter` if content was omitted due to a flag from our content filters,
                 *     `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
                 *
                 * @enum {string}
                 */
                finish_reason: "stop" | "length" | "tool_calls" | "content_filter" | "function_call";
                /** @description The index of the choice in the list of choices. */
                index: number;
                /** @description Log probability information for the choice. */
                logprobs: {
                    /** @description A list of message content tokens with log probability information. */
                    content: components["schemas"]["ChatCompletionTokenLogprob"][] | null;
                    [key: string]: unknown;
                } | null;
                message: components["schemas"]["ChatCompletionResponseMessage"];
                [key: string]: unknown;
            }[];
            /** @description The Unix timestamp (in seconds) of when the chat completion was created. */
            created: number;
            /** @description A unique identifier for the chat completion. */
            id: string;
            /** @description The model used for the chat completion. */
            model: string;
            /**
             * @description The object type, which is always `chat.completion`.
             * @enum {string}
             */
            object: "chat.completion";
            /**
             * @description The service tier used for processing the request. This field is only included if the `service_tier` parameter is specified in the request.
             * @example scale
             * @enum {string|null}
             */
            service_tier?: "scale" | "default" | null;
            /** @description This fingerprint represents the backend configuration that the model runs with.
             *
             *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
             *      */
            system_fingerprint?: string;
            usage?: components["schemas"]["CompletionUsage"];
            [key: string]: unknown;
        };
        /** @description Represents a streamed chunk of a chat completion response returned by model, based on the provided input. */
        CreateChatCompletionStreamResponse: {
            /** @description A list of chat completion choices. Can contain more than one elements if `n` is greater than 1. Can also be empty for the
             *     last chunk if you set `stream_options: {"include_usage": true}`.
             *      */
            choices: {
                delta: components["schemas"]["ChatCompletionStreamResponseDelta"];
                /**
                 * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
                 *     `length` if the maximum number of tokens specified in the request was reached,
                 *     `content_filter` if content was omitted due to a flag from our content filters,
                 *     `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
                 *
                 * @enum {string|null}
                 */
                finish_reason: "stop" | "length" | "tool_calls" | "content_filter" | "function_call" | null;
                /** @description The index of the choice in the list of choices. */
                index: number;
                /** @description Log probability information for the choice. */
                logprobs?: {
                    /** @description A list of message content tokens with log probability information. */
                    content: components["schemas"]["ChatCompletionTokenLogprob"][] | null;
                    [key: string]: unknown;
                } | null;
                [key: string]: unknown;
            }[];
            /** @description The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp. */
            created: number;
            /** @description A unique identifier for the chat completion. Each chunk has the same ID. */
            id: string;
            /** @description The model to generate the completion. */
            model: string;
            /**
             * @description The object type, which is always `chat.completion.chunk`.
             * @enum {string}
             */
            object: "chat.completion.chunk";
            /**
             * @description The service tier used for processing the request. This field is only included if the `service_tier` parameter is specified in the request.
             * @example scale
             * @enum {string|null}
             */
            service_tier?: "scale" | "default" | null;
            /** @description This fingerprint represents the backend configuration that the model runs with.
             *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
             *      */
            system_fingerprint?: string;
            /** @description An optional field that will only be present when you set `stream_options: {"include_usage": true}` in your request.
             *     When present, it contains a null value except for the last chunk which contains the token usage statistics for the entire request.
             *      */
            usage?: {
                /** @description Number of tokens in the generated completion. */
                completion_tokens: number;
                /** @description Number of tokens in the prompt. */
                prompt_tokens: number;
                /** @description Total number of tokens used in the request (prompt + completion). */
                total_tokens: number;
                [key: string]: unknown;
            };
            [key: string]: unknown;
        };
        CreateCompletionRequest: {
            /**
             * @description Generates `best_of` completions server-side and returns the "best" (the one with the highest log probability per token). Results cannot be streamed.
             *
             *     When used with `n`, `best_of` controls the number of candidate completions and `n` specifies how many to return – `best_of` must be greater than `n`.
             *
             *     **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
             *
             * @default 1
             */
            best_of: number;
            /**
             * @description Echo back the prompt in addition to the completion
             *
             * @default false
             */
            echo: boolean | null;
            /**
             * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
             *
             *     [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
             *
             * @default 0
             */
            frequency_penalty: number | null;
            /**
             * @description Modify the likelihood of specified tokens appearing in the completion.
             *
             *     Accepts a JSON object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
             *
             *     As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|> token from being generated.
             *
             * @default null
             */
            logit_bias: {
                [key: string]: number | undefined;
            } | null;
            /**
             * @description Include the log probabilities on the `logprobs` most likely output tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.
             *
             *     The maximum value for `logprobs` is 5.
             *
             * @default null
             */
            logprobs: number | null;
            /**
             * @description The maximum number of [tokens](/tokenizer) that can be generated in the completion.
             *
             *     The token count of your prompt plus `max_tokens` cannot exceed the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.
             *
             * @default 16
             * @example 16
             */
            max_tokens: number;
            /** @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
             *      */
            model: string | ("gpt-3.5-turbo-instruct" | "davinci-002" | "babbage-002");
            /**
             * @description How many completions to generate for each prompt.
             *
             *     **Note:** Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
             *
             * @default 1
             * @example 1
             */
            n: number;
            /**
             * @description Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
             *
             *     [See more information about frequency and presence penalties.](/docs/guides/text-generation/parameter-details)
             *
             * @default 0
             */
            presence_penalty: number | null;
            /**
             * @description The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.
             *
             *     Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.
             *
             * @default <|endoftext|>
             */
            prompt: string | string[] | number[] | number[][];
            /** @description If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
             *
             *     Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.
             *      */
            seed?: number | null;
            /**
             * @description Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.
             *
             * @default null
             */
            stop: (string | string[]) | null;
            /**
             * @description Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).
             *
             * @default false
             */
            stream: boolean | null;
            stream_options?: components["schemas"]["ChatCompletionStreamOptions"];
            /**
             * @description The suffix that comes after a completion of inserted text.
             *
             *     This parameter is only supported for `gpt-3.5-turbo-instruct`.
             *
             * @default null
             * @example test.
             */
            suffix: string | null;
            /**
             * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
             *
             *     We generally recommend altering this or `top_p` but not both.
             *
             * @default 1
             * @example 1
             */
            temperature: number;
            /**
             * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
             *
             *     We generally recommend altering this or `temperature` but not both.
             *
             * @default 1
             * @example 1
             */
            top_p: number;
            /**
             * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
             *
             * @example user-1234
             */
            user?: string;
            [key: string]: unknown;
        };
        /** @description Represents a completion response from the API. Note: both the streamed and non-streamed response objects share the same shape (unlike the chat endpoint).
         *      */
        CreateCompletionResponse: {
            /** @description The list of completion choices the model generated for the input prompt. */
            choices: {
                /**
                 * @description The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
                 *     `length` if the maximum number of tokens specified in the request was reached,
                 *     or `content_filter` if content was omitted due to a flag from our content filters.
                 *
                 * @enum {string}
                 */
                finish_reason: "stop" | "length" | "content_filter";
                index: number;
                logprobs: {
                    text_offset?: number[];
                    token_logprobs?: number[];
                    tokens?: string[];
                    top_logprobs?: {
                        [key: string]: number | undefined;
                    }[];
                    [key: string]: unknown;
                } | null;
                text: string;
                [key: string]: unknown;
            }[];
            /** @description The Unix timestamp (in seconds) of when the completion was created. */
            created: number;
            /** @description A unique identifier for the completion. */
            id: string;
            /** @description The model used for completion. */
            model: string;
            /**
             * @description The object type, which is always "text_completion"
             * @enum {string}
             */
            object: "text_completion";
            /** @description This fingerprint represents the backend configuration that the model runs with.
             *
             *     Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
             *      */
            system_fingerprint?: string;
            usage?: components["schemas"]["CompletionUsage"];
            [key: string]: unknown;
        };
        CreateEmbeddingRequest: {
            /** @description The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.
             *      */
            dimensions?: number;
            /**
             * @description The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/).
             * @default float
             * @example float
             * @enum {string}
             */
            encoding_format: "float" | "base64";
            /**
             * @description Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.
             *
             * @example The quick brown fox jumped over the lazy dog
             */
            input: string | string[] | number[] | number[][];
            /**
             * @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
             *
             * @example text-embedding-3-small
             */
            model: string | ("text-embedding-ada-002" | "text-embedding-3-small" | "text-embedding-3-large");
            /**
             * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
             *
             * @example user-1234
             */
            user?: string;
            [key: string]: unknown;
        };
        CreateEmbeddingResponse: {
            /** @description The list of embeddings generated by the model. */
            data: components["schemas"]["Embedding"][];
            /** @description The name of the model used to generate the embedding. */
            model: string;
            /**
             * @description The object type, which is always "list".
             * @enum {string}
             */
            object: "list";
            /** @description The usage information for the request. */
            usage: {
                /** @description The number of tokens used by the prompt. */
                prompt_tokens: number;
                /** @description The total number of tokens used by the request. */
                total_tokens: number;
                [key: string]: unknown;
            };
            [key: string]: unknown;
        };
        CreateFileRequest: {
            /**
             * Format: binary
             * @description The File object (not file name) to be uploaded.
             *
             */
            file: string;
            /**
             * @description The intended purpose of the uploaded file.
             *
             *     Use "assistants" for [Assistants](/docs/api-reference/assistants) and [Message](/docs/api-reference/messages) files, "vision" for Assistants image file inputs, "batch" for [Batch API](/docs/guides/batch), and "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning).
             *
             * @enum {string}
             */
            purpose: "assistants" | "batch" | "fine-tune" | "vision";
            [key: string]: unknown;
        };
        CreateFineTuningJobRequest: {
            /** @description The hyperparameters used for the fine-tuning job. */
            hyperparameters?: {
                /**
                 * @description Number of examples in each batch. A larger batch size means that model parameters
                 *     are updated less frequently, but with lower variance.
                 *
                 * @default auto
                 */
                batch_size?: "auto" | number;
                /**
                 * @description Scaling factor for the learning rate. A smaller learning rate may be useful to avoid
                 *     overfitting.
                 *
                 * @default auto
                 */
                learning_rate_multiplier?: "auto" | number;
                /**
                 * @description The number of epochs to train the model for. An epoch refers to one full cycle
                 *     through the training dataset.
                 *
                 * @default auto
                 */
                n_epochs?: "auto" | number;
                [key: string]: unknown;
            };
            /** @description A list of integrations to enable for your fine-tuning job. */
            integrations?: {
                /** @description The type of integration to enable. Currently, only "wandb" (Weights and Biases) is supported.
                 *      */
                type: "wandb";
                /** @description The settings for your integration with Weights and Biases. This payload specifies the project that
                 *     metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags
                 *     to your run, and set a default entity (team, username, etc) to be associated with your run.
                 *      */
                wandb: {
                    /** @description The entity to use for the run. This allows you to set the team or username of the WandB user that you would
                     *     like associated with the run. If not set, the default entity for the registered WandB API key is used.
                     *      */
                    entity?: string | null;
                    /** @description A display name to set for the run. If not set, we will use the Job ID as the name.
                     *      */
                    name?: string | null;
                    /**
                     * @description The name of the project that the new run will be created under.
                     *
                     * @example my-wandb-project
                     */
                    project: string;
                    /** @description A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some
                     *     default tags are generated by OpenAI: "openai/finetune", "openai/{base-model}", "openai/{ftjob-abcdef}".
                     *      */
                    tags?: string[];
                    [key: string]: unknown;
                };
                [key: string]: unknown;
            }[] | null;
            /**
             * @description The name of the model to fine-tune. You can select one of the
             *     [supported models](/docs/guides/fine-tuning/what-models-can-be-fine-tuned).
             *
             * @example gpt-3.5-turbo
             */
            model: string | ("babbage-002" | "davinci-002" | "gpt-3.5-turbo");
            /**
             * @description The seed controls the reproducibility of the job. Passing in the same seed and job parameters should produce the same results, but may differ in rare cases.
             *     If a seed is not specified, one will be generated for you.
             *
             * @example 42
             */
            seed?: number | null;
            /**
             * @description A string of up to 18 characters that will be added to your fine-tuned model name.
             *
             *     For example, a `suffix` of "custom-model-name" would produce a model name like `ft:gpt-3.5-turbo:openai:custom-model-name:7p4lURel`.
             *
             * @default null
             */
            suffix: string | null;
            /**
             * @description The ID of an uploaded file that contains training data.
             *
             *     See [upload file](/docs/api-reference/files/create) for how to upload a file.
             *
             *     Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.
             *
             *     The contents of the file should differ depending on if the model uses the [chat](/docs/api-reference/fine-tuning/chat-input) or [completions](/docs/api-reference/fine-tuning/completions-input) format.
             *
             *     See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
             *
             * @example file-abc123
             */
            training_file: string;
            /**
             * @description The ID of an uploaded file that contains validation data.
             *
             *     If you provide this file, the data is used to generate validation
             *     metrics periodically during fine-tuning. These metrics can be viewed in
             *     the fine-tuning results file.
             *     The same data should not be present in both train and validation files.
             *
             *     Your dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.
             *
             *     See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
             *
             * @example file-abc123
             */
            validation_file?: string | null;
            [key: string]: unknown;
        };
        CreateImageEditRequest: {
            /**
             * Format: binary
             * @description The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
             */
            image: string;
            /**
             * Format: binary
             * @description An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`.
             */
            mask?: string;
            /**
             * @description The model to use for image generation. Only `dall-e-2` is supported at this time.
             * @default dall-e-2
             * @example dall-e-2
             */
            model: string | "dall-e-2";
            /**
             * @description The number of images to generate. Must be between 1 and 10.
             * @default 1
             * @example 1
             */
            n: number;
            /**
             * @description A text description of the desired image(s). The maximum length is 1000 characters.
             * @example A cute baby sea otter wearing a beret
             */
            prompt: string;
            /**
             * @description The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
             * @default url
             * @example url
             * @enum {string|null}
             */
            response_format: "url" | "b64_json";
            /**
             * @description The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
             * @default 1024x1024
             * @example 1024x1024
             * @enum {string|null}
             */
            size: "256x256" | "512x512" | "1024x1024";
            /**
             * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
             *
             * @example user-1234
             */
            user?: string;
            [key: string]: unknown;
        };
        CreateImageRequest: {
            /**
             * @description The model to use for image generation.
             * @default dall-e-2
             * @example dall-e-3
             */
            model: string | ("dall-e-2" | "dall-e-3");
            /**
             * @description The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.
             * @default 1
             * @example 1
             */
            n: number;
            /**
             * @description A text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`.
             * @example A cute baby sea otter
             */
            prompt: string;
            /**
             * @description The quality of the image that will be generated. `hd` creates images with finer details and greater consistency across the image. This param is only supported for `dall-e-3`.
             * @default standard
             * @example standard
             * @enum {string}
             */
            quality: "standard" | "hd";
            /**
             * @description The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
             * @default url
             * @example url
             * @enum {string|null}
             */
            response_format: "url" | "b64_json";
            /**
             * @description The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3` models.
             * @default 1024x1024
             * @example 1024x1024
             * @enum {string|null}
             */
            size: "256x256" | "512x512" | "1024x1024" | "1792x1024" | "1024x1792";
            /**
             * @description The style of the generated images. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for `dall-e-3`.
             * @default vivid
             * @example vivid
             * @enum {string|null}
             */
            style: "vivid" | "natural";
            /**
             * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
             *
             * @example user-1234
             */
            user?: string;
            [key: string]: unknown;
        };
        CreateImageVariationRequest: {
            /**
             * Format: binary
             * @description The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
             */
            image: string;
            /**
             * @description The model to use for image generation. Only `dall-e-2` is supported at this time.
             * @default dall-e-2
             * @example dall-e-2
             */
            model: string | "dall-e-2";
            /**
             * @description The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.
             * @default 1
             * @example 1
             */
            n: number;
            /**
             * @description The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
             * @default url
             * @example url
             * @enum {string|null}
             */
            response_format: "url" | "b64_json";
            /**
             * @description The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
             * @default 1024x1024
             * @example 1024x1024
             * @enum {string|null}
             */
            size: "256x256" | "512x512" | "1024x1024";
            /**
             * @description A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
             *
             * @example user-1234
             */
            user?: string;
            [key: string]: unknown;
        };
        CreateMessageRequest: {
            /** @description A list of files attached to the message, and the tools they should be added to. */
            attachments?: {
                /** @description The ID of the file to attach to the message. */
                file_id?: string;
                /** @description The tools to add this file to. */
                tools?: (components["schemas"]["AssistantToolsCode"] | components["schemas"]["AssistantToolsFileSearchTypeOnly"])[];
                [key: string]: unknown;
            }[] | null;
            content: string | (components["schemas"]["MessageContentImageFileObject"] | components["schemas"]["MessageContentImageUrlObject"] | components["schemas"]["MessageRequestContentTextObject"])[];
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /**
             * @description The role of the entity that is creating the message. Allowed values include:
             *     - `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.
             *     - `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.
             *
             * @enum {string}
             */
            role: "user" | "assistant";
            [key: string]: unknown;
        };
        CreateModerationRequest: {
            /** @description The input text to classify */
            input: string | string[];
            /**
             * @description Two content moderations models are available: `text-moderation-stable` and `text-moderation-latest`.
             *
             *     The default is `text-moderation-latest` which will be automatically upgraded over time. This ensures you are always using our most accurate model. If you use `text-moderation-stable`, we will provide advanced notice before updating the model. Accuracy of `text-moderation-stable` may be slightly lower than for `text-moderation-latest`.
             *
             * @default text-moderation-latest
             * @example text-moderation-stable
             */
            model: string | ("text-moderation-latest" | "text-moderation-stable");
            [key: string]: unknown;
        };
        /** @description Represents if a given text input is potentially harmful. */
        CreateModerationResponse: {
            /** @description The unique identifier for the moderation request. */
            id: string;
            /** @description The model used to generate the moderation results. */
            model: string;
            /** @description A list of moderation objects. */
            results: {
                /** @description A list of the categories, and whether they are flagged or not. */
                categories: {
                    /** @description Content that expresses, incites, or promotes harassing language towards any target. */
                    harassment: boolean;
                    /** @description Harassment content that also includes violence or serious harm towards any target. */
                    "harassment/threatening": boolean;
                    /** @description Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harassment. */
                    hate: boolean;
                    /** @description Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. */
                    "hate/threatening": boolean;
                    /** @description Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders. */
                    "self-harm": boolean;
                    /** @description Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts. */
                    "self-harm/instructions": boolean;
                    /** @description Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders. */
                    "self-harm/intent": boolean;
                    /** @description Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness). */
                    sexual: boolean;
                    /** @description Sexual content that includes an individual who is under 18 years old. */
                    "sexual/minors": boolean;
                    /** @description Content that depicts death, violence, or physical injury. */
                    violence: boolean;
                    /** @description Content that depicts death, violence, or physical injury in graphic detail. */
                    "violence/graphic": boolean;
                    [key: string]: unknown;
                };
                /** @description A list of the categories along with their scores as predicted by model. */
                category_scores: {
                    /** @description The score for the category 'harassment'. */
                    harassment: number;
                    /** @description The score for the category 'harassment/threatening'. */
                    "harassment/threatening": number;
                    /** @description The score for the category 'hate'. */
                    hate: number;
                    /** @description The score for the category 'hate/threatening'. */
                    "hate/threatening": number;
                    /** @description The score for the category 'self-harm'. */
                    "self-harm": number;
                    /** @description The score for the category 'self-harm/instructions'. */
                    "self-harm/instructions": number;
                    /** @description The score for the category 'self-harm/intent'. */
                    "self-harm/intent": number;
                    /** @description The score for the category 'sexual'. */
                    sexual: number;
                    /** @description The score for the category 'sexual/minors'. */
                    "sexual/minors": number;
                    /** @description The score for the category 'violence'. */
                    violence: number;
                    /** @description The score for the category 'violence/graphic'. */
                    "violence/graphic": number;
                    [key: string]: unknown;
                };
                /** @description Whether any of the below categories are flagged. */
                flagged: boolean;
                [key: string]: unknown;
            }[];
            [key: string]: unknown;
        };
        CreateRunRequest: {
            /** @description Appends additional instructions at the end of the instructions for the run. This is useful for modifying the behavior on a per-run basis without overriding other instructions. */
            additional_instructions?: string | null;
            /** @description Adds additional messages to the thread before creating the run. */
            additional_messages?: components["schemas"]["CreateMessageRequest"][] | null;
            /** @description The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run. */
            assistant_id: string;
            /** @description Overrides the [instructions](/docs/api-reference/assistants/createAssistant) of the assistant. This is useful for modifying the behavior on a per-run basis. */
            instructions?: string | null;
            /** @description The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
             *      */
            max_completion_tokens?: number | null;
            /** @description The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
             *      */
            max_prompt_tokens?: number | null;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /**
             * @description The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used.
             * @example gpt-4-turbo
             */
            model?: (string | ("gpt-4o" | "gpt-4o-2024-05-13" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613")) | null;
            parallel_tool_calls?: components["schemas"]["ParallelToolCalls"];
            response_format?: components["schemas"]["AssistantsApiResponseFormatOption"];
            /** @description If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
             *      */
            stream?: boolean | null;
            /**
             * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
             *
             * @default 1
             * @example 1
             */
            temperature: number;
            tool_choice?: components["schemas"]["AssistantsApiToolChoiceOption"];
            /** @description Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
            tools?: (components["schemas"]["AssistantToolsCode"] | components["schemas"]["AssistantToolsFileSearch"] | components["schemas"]["AssistantToolsFunction"])[] | null;
            /**
             * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
             *
             *     We generally recommend altering this or temperature but not both.
             *
             * @default 1
             * @example 1
             */
            top_p: number;
            truncation_strategy?: components["schemas"]["TruncationObject"];
            [key: string]: unknown;
        };
        CreateSpeechRequest: {
            /** @description The text to generate audio for. The maximum length is 4096 characters. */
            input: string;
            /** @description One of the available [TTS models](/docs/models/tts): `tts-1` or `tts-1-hd`
             *      */
            model: string | ("tts-1" | "tts-1-hd");
            /**
             * @description The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`.
             * @default mp3
             * @enum {string}
             */
            response_format: "mp3" | "opus" | "aac" | "flac" | "wav" | "pcm";
            /**
             * @description The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default.
             * @default 1
             */
            speed: number;
            /**
             * @description The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech/voice-options).
             * @enum {string}
             */
            voice: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
            [key: string]: unknown;
        };
        CreateThreadAndRunRequest: {
            /** @description The ID of the [assistant](/docs/api-reference/assistants) to use to execute this run. */
            assistant_id: string;
            /** @description Override the default system message of the assistant. This is useful for modifying the behavior on a per-run basis. */
            instructions?: string | null;
            /** @description The maximum number of completion tokens that may be used over the course of the run. The run will make a best effort to use only the number of completion tokens specified, across multiple turns of the run. If the run exceeds the number of completion tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
             *      */
            max_completion_tokens?: number | null;
            /** @description The maximum number of prompt tokens that may be used over the course of the run. The run will make a best effort to use only the number of prompt tokens specified, across multiple turns of the run. If the run exceeds the number of prompt tokens specified, the run will end with status `incomplete`. See `incomplete_details` for more info.
             *      */
            max_prompt_tokens?: number | null;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /**
             * @description The ID of the [Model](/docs/api-reference/models) to be used to execute this run. If a value is provided here, it will override the model associated with the assistant. If not, the model associated with the assistant will be used.
             * @example gpt-4-turbo
             */
            model?: (string | ("gpt-4o" | "gpt-4o-2024-05-13" | "gpt-4o-mini" | "gpt-4o-mini-2024-07-18" | "gpt-4-turbo" | "gpt-4-turbo-2024-04-09" | "gpt-4-0125-preview" | "gpt-4-turbo-preview" | "gpt-4-1106-preview" | "gpt-4-vision-preview" | "gpt-4" | "gpt-4-0314" | "gpt-4-0613" | "gpt-4-32k" | "gpt-4-32k-0314" | "gpt-4-32k-0613" | "gpt-3.5-turbo" | "gpt-3.5-turbo-16k" | "gpt-3.5-turbo-0613" | "gpt-3.5-turbo-1106" | "gpt-3.5-turbo-0125" | "gpt-3.5-turbo-16k-0613")) | null;
            parallel_tool_calls?: components["schemas"]["ParallelToolCalls"];
            response_format?: components["schemas"]["AssistantsApiResponseFormatOption"];
            /** @description If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
             *      */
            stream?: boolean | null;
            /**
             * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
             *
             * @default 1
             * @example 1
             */
            temperature: number;
            /** @description If no thread is provided, an empty thread will be created. */
            thread?: components["schemas"]["CreateThreadRequest"];
            tool_choice?: components["schemas"]["AssistantsApiToolChoiceOption"];
            /** @description A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
             *      */
            tool_resources?: {
                code_interpreter?: {
                    /**
                     * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
                     *
                     * @default []
                     */
                    file_ids: string[];
                    [key: string]: unknown;
                };
                file_search?: {
                    /** @description The ID of the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
                     *      */
                    vector_store_ids?: string[];
                    [key: string]: unknown;
                };
                [key: string]: unknown;
            } | null;
            /** @description Override the tools the assistant can use for this run. This is useful for modifying the behavior on a per-run basis. */
            tools?: (components["schemas"]["AssistantToolsCode"] | components["schemas"]["AssistantToolsFileSearch"] | components["schemas"]["AssistantToolsFunction"])[] | null;
            /**
             * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
             *
             *     We generally recommend altering this or temperature but not both.
             *
             * @default 1
             * @example 1
             */
            top_p: number;
            truncation_strategy?: components["schemas"]["TruncationObject"];
            [key: string]: unknown;
        };
        CreateThreadRequest: {
            /** @description A list of [messages](/docs/api-reference/messages) to start the thread with. */
            messages?: components["schemas"]["CreateMessageRequest"][];
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /** @description A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
             *      */
            tool_resources?: {
                code_interpreter?: {
                    /**
                     * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
                     *
                     * @default []
                     */
                    file_ids: string[];
                    [key: string]: unknown;
                };
                file_search?: {
                    /** @description The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
                     *      */
                    vector_store_ids?: string[];
                    /** @description A helper to create a [vector store](/docs/api-reference/vector-stores/object) with file_ids and attach it to this thread. There can be a maximum of 1 vector store attached to the thread.
                     *      */
                    vector_stores?: {
                        /** @description The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. */
                        chunking_strategy?: {
                            /**
                             * @description Always `auto`.
                             * @enum {string}
                             */
                            type: "auto";
                            [key: string]: unknown;
                        } | {
                            static: {
                                /** @description The number of tokens that overlap between chunks. The default value is `400`.
                                 *
                                 *     Note that the overlap must not exceed half of `max_chunk_size_tokens`.
                                 *      */
                                chunk_overlap_tokens: number;
                                /** @description The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
                                max_chunk_size_tokens: number;
                                [key: string]: unknown;
                            };
                            /**
                             * @description Always `static`.
                             * @enum {string}
                             */
                            type: "static";
                            [key: string]: unknown;
                        };
                        /** @description A list of [file](/docs/api-reference/files) IDs to add to the vector store. There can be a maximum of 10000 files in a vector store.
                         *      */
                        file_ids?: string[];
                        /** @description Set of 16 key-value pairs that can be attached to a vector store. This can be useful for storing additional information about the vector store in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
                         *      */
                        metadata?: Record<string, never>;
                        [key: string]: unknown;
                    }[];
                    [key: string]: unknown;
                } & (unknown | unknown);
                [key: string]: unknown;
            } | null;
            [key: string]: unknown;
        };
        CreateTranscriptionRequest: {
            /**
             * Format: binary
             * @description The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
             *
             */
            file: string;
            /** @description The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.
             *      */
            language?: string;
            /**
             * @description ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
             *
             * @example whisper-1
             */
            model: string | "whisper-1";
            /** @description An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
             *      */
            prompt?: string;
            /**
             * @description The format of the transcript output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
             *
             * @default json
             * @enum {string}
             */
            response_format: "json" | "text" | "srt" | "verbose_json" | "vtt";
            /**
             * @description The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
             *
             * @default 0
             */
            temperature: number;
            /**
             * @description The timestamp granularities to populate for this transcription. `response_format` must be set `verbose_json` to use timestamp granularities. Either or both of these options are supported: `word`, or `segment`. Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.
             *
             * @default [
             *       "segment"
             *     ]
             */
            "timestamp_granularities[]": ("word" | "segment")[];
            [key: string]: unknown;
        };
        /** @description Represents a transcription response returned by model, based on the provided input. */
        CreateTranscriptionResponseJson: {
            /** @description The transcribed text. */
            text: string;
            [key: string]: unknown;
        };
        /** @description Represents a verbose json transcription response returned by model, based on the provided input. */
        CreateTranscriptionResponseVerboseJson: {
            /** @description The duration of the input audio. */
            duration: string;
            /** @description The language of the input audio. */
            language: string;
            /** @description Segments of the transcribed text and their corresponding details. */
            segments?: components["schemas"]["TranscriptionSegment"][];
            /** @description The transcribed text. */
            text: string;
            /** @description Extracted words and their corresponding timestamps. */
            words?: components["schemas"]["TranscriptionWord"][];
            [key: string]: unknown;
        };
        CreateTranslationRequest: {
            /**
             * Format: binary
             * @description The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
             *
             */
            file: string;
            /**
             * @description ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
             *
             * @example whisper-1
             */
            model: string | "whisper-1";
            /** @description An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.
             *      */
            prompt?: string;
            /**
             * @description The format of the transcript output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
             *
             * @default json
             */
            response_format: string;
            /**
             * @description The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
             *
             * @default 0
             */
            temperature: number;
            [key: string]: unknown;
        };
        CreateTranslationResponseJson: {
            text: string;
            [key: string]: unknown;
        };
        CreateTranslationResponseVerboseJson: {
            /** @description The duration of the input audio. */
            duration: string;
            /** @description The language of the output translation (always `english`). */
            language: string;
            /** @description Segments of the translated text and their corresponding details. */
            segments?: components["schemas"]["TranscriptionSegment"][];
            /** @description The translated text. */
            text: string;
            [key: string]: unknown;
        };
        CreateUploadRequest: {
            /** @description The number of bytes in the file you are uploading.
             *      */
            bytes: number;
            /** @description The name of the file to upload.
             *      */
            filename: string;
            /** @description The MIME type of the file.
             *
             *     This must fall within the supported MIME types for your file purpose. See the supported MIME types for assistants and vision.
             *      */
            mime_type: string;
            /**
             * @description The intended purpose of the uploaded file.
             *
             *     See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).
             *
             * @enum {string}
             */
            purpose: "assistants" | "batch" | "fine-tune" | "vision";
            [key: string]: unknown;
        };
        CreateVectorStoreFileBatchRequest: {
            chunking_strategy?: components["schemas"]["ChunkingStrategyRequestParam"];
            /** @description A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
            file_ids: string[];
            [key: string]: unknown;
        };
        CreateVectorStoreFileRequest: {
            chunking_strategy?: components["schemas"]["ChunkingStrategyRequestParam"];
            /** @description A [File](/docs/api-reference/files) ID that the vector store should use. Useful for tools like `file_search` that can access files. */
            file_id: string;
            [key: string]: unknown;
        };
        CreateVectorStoreRequest: {
            /** @description The chunking strategy used to chunk the file(s). If not set, will use the `auto` strategy. Only applicable if `file_ids` is non-empty. */
            chunking_strategy?: components["schemas"]["AutoChunkingStrategyRequestParam"] | components["schemas"]["StaticChunkingStrategyRequestParam"];
            expires_after?: components["schemas"]["VectorStoreExpirationAfter"];
            /** @description A list of [File](/docs/api-reference/files) IDs that the vector store should use. Useful for tools like `file_search` that can access files. */
            file_ids?: string[];
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /** @description The name of the vector store. */
            name?: string;
            [key: string]: unknown;
        };
        DeleteAssistantResponse: {
            deleted: boolean;
            id: string;
            /** @enum {string} */
            object: "assistant.deleted";
            [key: string]: unknown;
        };
        DeleteFileResponse: {
            deleted: boolean;
            id: string;
            /** @enum {string} */
            object: "file";
            [key: string]: unknown;
        };
        DeleteMessageResponse: {
            deleted: boolean;
            id: string;
            /** @enum {string} */
            object: "thread.message.deleted";
            [key: string]: unknown;
        };
        DeleteModelResponse: {
            deleted: boolean;
            id: string;
            object: string;
            [key: string]: unknown;
        };
        DeleteThreadResponse: {
            deleted: boolean;
            id: string;
            /** @enum {string} */
            object: "thread.deleted";
            [key: string]: unknown;
        };
        DeleteVectorStoreFileResponse: {
            deleted: boolean;
            id: string;
            /** @enum {string} */
            object: "vector_store.file.deleted";
            [key: string]: unknown;
        };
        DeleteVectorStoreResponse: {
            deleted: boolean;
            id: string;
            /** @enum {string} */
            object: "vector_store.deleted";
            [key: string]: unknown;
        };
        /** @description Occurs when a stream ends. */
        DoneEvent: {
            /** @enum {string} */
            data: "[DONE]";
            /** @enum {string} */
            event: "done";
            [key: string]: unknown;
        };
        /** @description Represents an embedding vector returned by embedding endpoint.
         *      */
        Embedding: {
            /** @description The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the [embedding guide](/docs/guides/embeddings).
             *      */
            embedding: number[];
            /** @description The index of the embedding in the list of embeddings. */
            index: number;
            /**
             * @description The object type, which is always "embedding".
             * @enum {string}
             */
            object: "embedding";
            [key: string]: unknown;
        };
        Error: {
            code: string | null;
            message: string;
            param: string | null;
            type: string;
            [key: string]: unknown;
        };
        /** @description Occurs when an [error](/docs/guides/error-codes/api-errors) occurs. This can happen due to an internal server error or a timeout. */
        ErrorEvent: {
            data: components["schemas"]["Error"];
            /** @enum {string} */
            event: "error";
            [key: string]: unknown;
        };
        ErrorResponse: {
            error: components["schemas"]["Error"];
            [key: string]: unknown;
        };
        FineTuneChatCompletionRequestAssistantMessage: {
            /**
             * @description Controls whether the assistant message is trained against (0 or 1)
             * @enum {integer}
             */
            weight?: 0 | 1;
            [key: string]: unknown;
        } & WithRequired<components["schemas"]["ChatCompletionRequestAssistantMessage"], "role">;
        /** @description The per-line training example of a fine-tuning input file for chat models */
        FinetuneChatRequestInput: {
            /**
             * @deprecated
             * @description A list of functions the model may generate JSON inputs for.
             */
            functions?: components["schemas"]["ChatCompletionFunctions"][];
            messages?: (components["schemas"]["ChatCompletionRequestSystemMessage"] | components["schemas"]["ChatCompletionRequestUserMessage"] | components["schemas"]["FineTuneChatCompletionRequestAssistantMessage"] | components["schemas"]["ChatCompletionRequestToolMessage"] | components["schemas"]["ChatCompletionRequestFunctionMessage"])[];
            parallel_tool_calls?: components["schemas"]["ParallelToolCalls"];
            /** @description A list of tools the model may generate JSON inputs for. */
            tools?: components["schemas"]["ChatCompletionTool"][];
            [key: string]: unknown;
        };
        /** @description The per-line training example of a fine-tuning input file for completions models */
        FinetuneCompletionRequestInput: {
            /** @description The desired completion for this training example. */
            completion?: string;
            /** @description The input prompt for this training example. */
            prompt?: string;
            [key: string]: unknown;
        };
        /** Fine-Tuning Job Integration */
        FineTuningIntegration: {
            /**
             * @description The type of the integration being enabled for the fine-tuning job
             * @enum {string}
             */
            type: "wandb";
            /** @description The settings for your integration with Weights and Biases. This payload specifies the project that
             *     metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags
             *     to your run, and set a default entity (team, username, etc) to be associated with your run.
             *      */
            wandb: {
                /** @description The entity to use for the run. This allows you to set the team or username of the WandB user that you would
                 *     like associated with the run. If not set, the default entity for the registered WandB API key is used.
                 *      */
                entity?: string | null;
                /** @description A display name to set for the run. If not set, we will use the Job ID as the name.
                 *      */
                name?: string | null;
                /**
                 * @description The name of the project that the new run will be created under.
                 *
                 * @example my-wandb-project
                 */
                project: string;
                /** @description A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some
                 *     default tags are generated by OpenAI: "openai/finetune", "openai/{base-model}", "openai/{ftjob-abcdef}".
                 *      */
                tags?: string[];
                [key: string]: unknown;
            };
            [key: string]: unknown;
        };
        /**
         * FineTuningJob
         * @description The `fine_tuning.job` object represents a fine-tuning job that has been created through the API.
         *
         */
        FineTuningJob: {
            /** @description The Unix timestamp (in seconds) for when the fine-tuning job was created. */
            created_at: number;
            /** @description For fine-tuning jobs that have `failed`, this will contain more information on the cause of the failure. */
            error: {
                /** @description A machine-readable error code. */
                code: string;
                /** @description A human-readable error message. */
                message: string;
                /** @description The parameter that was invalid, usually `training_file` or `validation_file`. This field will be null if the failure was not parameter-specific. */
                param: string | null;
                [key: string]: unknown;
            } | null;
            /** @description The Unix timestamp (in seconds) for when the fine-tuning job is estimated to finish. The value will be null if the fine-tuning job is not running. */
            estimated_finish?: number | null;
            /** @description The name of the fine-tuned model that is being created. The value will be null if the fine-tuning job is still running. */
            fine_tuned_model: string | null;
            /** @description The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be null if the fine-tuning job is still running. */
            finished_at: number | null;
            /** @description The hyperparameters used for the fine-tuning job. See the [fine-tuning guide](/docs/guides/fine-tuning) for more details. */
            hyperparameters: {
                /**
                 * @description The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
                 *     "auto" decides the optimal number of epochs based on the size of the dataset. If setting the number manually, we support any number between 1 and 50 epochs.
                 * @default auto
                 */
                n_epochs: "auto" | number;
                [key: string]: unknown;
            };
            /** @description The object identifier, which can be referenced in the API endpoints. */
            id: string;
            /** @description A list of integrations to enable for this fine-tuning job. */
            integrations?: components["schemas"]["FineTuningIntegration"][] | null;
            /** @description The base model that is being fine-tuned. */
            model: string;
            /**
             * @description The object type, which is always "fine_tuning.job".
             * @enum {string}
             */
            object: "fine_tuning.job";
            /** @description The organization that owns the fine-tuning job. */
            organization_id: string;
            /** @description The compiled results file ID(s) for the fine-tuning job. You can retrieve the results with the [Files API](/docs/api-reference/files/retrieve-contents). */
            result_files: string[];
            /** @description The seed used for the fine-tuning job. */
            seed: number;
            /**
             * @description The current status of the fine-tuning job, which can be either `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`.
             * @enum {string}
             */
            status: "validating_files" | "queued" | "running" | "succeeded" | "failed" | "cancelled";
            /** @description The total number of billable tokens processed by this fine-tuning job. The value will be null if the fine-tuning job is still running. */
            trained_tokens: number | null;
            /** @description The file ID used for training. You can retrieve the training data with the [Files API](/docs/api-reference/files/retrieve-contents). */
            training_file: string;
            /** @description The file ID used for validation. You can retrieve the validation results with the [Files API](/docs/api-reference/files/retrieve-contents). */
            validation_file: string | null;
            [key: string]: unknown;
        };
        /**
         * FineTuningJobCheckpoint
         * @description The `fine_tuning.job.checkpoint` object represents a model checkpoint for a fine-tuning job that is ready to use.
         *
         */
        FineTuningJobCheckpoint: {
            /** @description The Unix timestamp (in seconds) for when the checkpoint was created. */
            created_at: number;
            /** @description The name of the fine-tuned checkpoint model that is created. */
            fine_tuned_model_checkpoint: string;
            /** @description The name of the fine-tuning job that this checkpoint was created from. */
            fine_tuning_job_id: string;
            /** @description The checkpoint identifier, which can be referenced in the API endpoints. */
            id: string;
            /** @description Metrics at the step number during the fine-tuning job. */
            metrics: {
                full_valid_loss?: number;
                full_valid_mean_token_accuracy?: number;
                step?: number;
                train_loss?: number;
                train_mean_token_accuracy?: number;
                valid_loss?: number;
                valid_mean_token_accuracy?: number;
                [key: string]: unknown;
            };
            /**
             * @description The object type, which is always "fine_tuning.job.checkpoint".
             * @enum {string}
             */
            object: "fine_tuning.job.checkpoint";
            /** @description The step number that the checkpoint was created at. */
            step_number: number;
            [key: string]: unknown;
        };
        /** @description Fine-tuning job event object */
        FineTuningJobEvent: {
            created_at: number;
            id: string;
            /** @enum {string} */
            level: "info" | "warn" | "error";
            message: string;
            /** @enum {string} */
            object: "fine_tuning.job.event";
            [key: string]: unknown;
        };
        FunctionObject: {
            /** @description A description of what the function does, used by the model to choose when and how to call the function. */
            description?: string;
            /** @description The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. */
            name: string;
            parameters?: components["schemas"]["FunctionParameters"];
            [key: string]: unknown;
        };
        /** @description The parameters the functions accepts, described as a JSON Schema object. See the [guide](/docs/guides/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
         *
         *     Omitting `parameters` defines a function with an empty parameter list. */
        FunctionParameters: {
            [key: string]: unknown;
        };
        /** @description Represents the url or the content of an image generated by the OpenAI API. */
        Image: {
            /** @description The base64-encoded JSON of the generated image, if `response_format` is `b64_json`. */
            b64_json?: string;
            /** @description The prompt that was used to generate the image, if there was any revision to the prompt. */
            revised_prompt?: string;
            /** @description The URL of the generated image, if `response_format` is `url` (default). */
            url?: string;
            [key: string]: unknown;
        };
        ImagesResponse: {
            created: number;
            data: components["schemas"]["Image"][];
            [key: string]: unknown;
        };
        ListAssistantsResponse: {
            data: components["schemas"]["AssistantObject"][];
            /** @example asst_abc123 */
            first_id: string;
            /** @example false */
            has_more: boolean;
            /** @example asst_abc456 */
            last_id: string;
            /** @example list */
            object: string;
            [key: string]: unknown;
        };
        ListBatchesResponse: {
            data: components["schemas"]["Batch"][];
            /** @example batch_abc123 */
            first_id?: string;
            has_more: boolean;
            /** @example batch_abc456 */
            last_id?: string;
            /** @enum {string} */
            object: "list";
            [key: string]: unknown;
        };
        ListFilesResponse: {
            data: components["schemas"]["OpenAIFile"][];
            /** @enum {string} */
            object: "list";
            [key: string]: unknown;
        };
        ListFineTuningJobCheckpointsResponse: {
            data: components["schemas"]["FineTuningJobCheckpoint"][];
            first_id?: string | null;
            has_more: boolean;
            last_id?: string | null;
            /** @enum {string} */
            object: "list";
            [key: string]: unknown;
        };
        ListFineTuningJobEventsResponse: {
            data: components["schemas"]["FineTuningJobEvent"][];
            /** @enum {string} */
            object: "list";
            [key: string]: unknown;
        };
        ListMessagesResponse: {
            data: components["schemas"]["MessageObject"][];
            /** @example msg_abc123 */
            first_id: string;
            /** @example false */
            has_more: boolean;
            /** @example msg_abc123 */
            last_id: string;
            /** @example list */
            object: string;
            [key: string]: unknown;
        };
        ListModelsResponse: {
            data: components["schemas"]["Model"][];
            /** @enum {string} */
            object: "list";
            [key: string]: unknown;
        };
        ListPaginatedFineTuningJobsResponse: {
            data: components["schemas"]["FineTuningJob"][];
            has_more: boolean;
            /** @enum {string} */
            object: "list";
            [key: string]: unknown;
        };
        ListRunsResponse: {
            data: components["schemas"]["RunObject"][];
            /** @example run_abc123 */
            first_id: string;
            /** @example false */
            has_more: boolean;
            /** @example run_abc456 */
            last_id: string;
            /** @example list */
            object: string;
            [key: string]: unknown;
        };
        ListRunStepsResponse: {
            data: components["schemas"]["RunStepObject"][];
            /** @example step_abc123 */
            first_id: string;
            /** @example false */
            has_more: boolean;
            /** @example step_abc456 */
            last_id: string;
            /** @example list */
            object: string;
            [key: string]: unknown;
        };
        ListThreadsResponse: {
            data: components["schemas"]["ThreadObject"][];
            /** @example asst_abc123 */
            first_id: string;
            /** @example false */
            has_more: boolean;
            /** @example asst_abc456 */
            last_id: string;
            /** @example list */
            object: string;
            [key: string]: unknown;
        };
        ListVectorStoreFilesResponse: {
            data: components["schemas"]["VectorStoreFileObject"][];
            /** @example file-abc123 */
            first_id: string;
            /** @example false */
            has_more: boolean;
            /** @example file-abc456 */
            last_id: string;
            /** @example list */
            object: string;
            [key: string]: unknown;
        };
        ListVectorStoresResponse: {
            data: components["schemas"]["VectorStoreObject"][];
            /** @example vs_abc123 */
            first_id: string;
            /** @example false */
            has_more: boolean;
            /** @example vs_abc456 */
            last_id: string;
            /** @example list */
            object: string;
            [key: string]: unknown;
        };
        /**
         * Image file
         * @description References an image [File](/docs/api-reference/files) in the content of a message.
         */
        MessageContentImageFileObject: {
            image_file: {
                /**
                 * @description Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`.
                 * @default auto
                 * @enum {string}
                 */
                detail: "auto" | "low" | "high";
                /** @description The [File](/docs/api-reference/files) ID of the image in the message content. Set `purpose="vision"` when uploading the File if you need to later display the file content. */
                file_id: string;
                [key: string]: unknown;
            };
            /**
             * @description Always `image_file`.
             * @enum {string}
             */
            type: "image_file";
            [key: string]: unknown;
        };
        /**
         * Image URL
         * @description References an image URL in the content of a message.
         */
        MessageContentImageUrlObject: {
            image_url: {
                /**
                 * @description Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`. Default value is `auto`
                 * @default auto
                 * @enum {string}
                 */
                detail: "auto" | "low" | "high";
                /**
                 * Format: uri
                 * @description The external URL of the image, must be a supported image types: jpeg, jpg, png, gif, webp.
                 */
                url: string;
                [key: string]: unknown;
            };
            /**
             * @description The type of the content part.
             * @enum {string}
             */
            type: "image_url";
            [key: string]: unknown;
        };
        /**
         * File citation
         * @description A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files.
         */
        MessageContentTextAnnotationsFileCitationObject: {
            end_index: number;
            file_citation: {
                /** @description The ID of the specific File the citation is from. */
                file_id: string;
                [key: string]: unknown;
            };
            start_index: number;
            /** @description The text in the message content that needs to be replaced. */
            text: string;
            /**
             * @description Always `file_citation`.
             * @enum {string}
             */
            type: "file_citation";
            [key: string]: unknown;
        };
        /**
         * File path
         * @description A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file.
         */
        MessageContentTextAnnotationsFilePathObject: {
            end_index: number;
            file_path: {
                /** @description The ID of the file that was generated. */
                file_id: string;
                [key: string]: unknown;
            };
            start_index: number;
            /** @description The text in the message content that needs to be replaced. */
            text: string;
            /**
             * @description Always `file_path`.
             * @enum {string}
             */
            type: "file_path";
            [key: string]: unknown;
        };
        /**
         * Text
         * @description The text content that is part of a message.
         */
        MessageContentTextObject: {
            text: {
                annotations: (components["schemas"]["MessageContentTextAnnotationsFileCitationObject"] | components["schemas"]["MessageContentTextAnnotationsFilePathObject"])[];
                /** @description The data that makes up the text. */
                value: string;
                [key: string]: unknown;
            };
            /**
             * @description Always `text`.
             * @enum {string}
             */
            type: "text";
            [key: string]: unknown;
        };
        /**
         * Image file
         * @description References an image [File](/docs/api-reference/files) in the content of a message.
         */
        MessageDeltaContentImageFileObject: {
            image_file?: {
                /**
                 * @description Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`.
                 * @default auto
                 * @enum {string}
                 */
                detail: "auto" | "low" | "high";
                /** @description The [File](/docs/api-reference/files) ID of the image in the message content. Set `purpose="vision"` when uploading the File if you need to later display the file content. */
                file_id?: string;
                [key: string]: unknown;
            };
            /** @description The index of the content part in the message. */
            index: number;
            /**
             * @description Always `image_file`.
             * @enum {string}
             */
            type: "image_file";
            [key: string]: unknown;
        };
        /**
         * Image URL
         * @description References an image URL in the content of a message.
         */
        MessageDeltaContentImageUrlObject: {
            image_url?: {
                /**
                 * @description Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`.
                 * @default auto
                 * @enum {string}
                 */
                detail: "auto" | "low" | "high";
                /** @description The URL of the image, must be a supported image types: jpeg, jpg, png, gif, webp. */
                url?: string;
                [key: string]: unknown;
            };
            /** @description The index of the content part in the message. */
            index: number;
            /**
             * @description Always `image_url`.
             * @enum {string}
             */
            type: "image_url";
            [key: string]: unknown;
        };
        /**
         * File citation
         * @description A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files.
         */
        MessageDeltaContentTextAnnotationsFileCitationObject: {
            end_index?: number;
            file_citation?: {
                /** @description The ID of the specific File the citation is from. */
                file_id?: string;
                /** @description The specific quote in the file. */
                quote?: string;
                [key: string]: unknown;
            };
            /** @description The index of the annotation in the text content part. */
            index: number;
            start_index?: number;
            /** @description The text in the message content that needs to be replaced. */
            text?: string;
            /**
             * @description Always `file_citation`.
             * @enum {string}
             */
            type: "file_citation";
            [key: string]: unknown;
        };
        /**
         * File path
         * @description A URL for the file that's generated when the assistant used the `code_interpreter` tool to generate a file.
         */
        MessageDeltaContentTextAnnotationsFilePathObject: {
            end_index?: number;
            file_path?: {
                /** @description The ID of the file that was generated. */
                file_id?: string;
                [key: string]: unknown;
            };
            /** @description The index of the annotation in the text content part. */
            index: number;
            start_index?: number;
            /** @description The text in the message content that needs to be replaced. */
            text?: string;
            /**
             * @description Always `file_path`.
             * @enum {string}
             */
            type: "file_path";
            [key: string]: unknown;
        };
        /**
         * Text
         * @description The text content that is part of a message.
         */
        MessageDeltaContentTextObject: {
            /** @description The index of the content part in the message. */
            index: number;
            text?: {
                annotations?: (components["schemas"]["MessageDeltaContentTextAnnotationsFileCitationObject"] | components["schemas"]["MessageDeltaContentTextAnnotationsFilePathObject"])[];
                /** @description The data that makes up the text. */
                value?: string;
                [key: string]: unknown;
            };
            /**
             * @description Always `text`.
             * @enum {string}
             */
            type: "text";
            [key: string]: unknown;
        };
        /**
         * Message delta object
         * @description Represents a message delta i.e. any changed fields on a message during streaming.
         *
         */
        MessageDeltaObject: {
            /** @description The delta containing the fields that have changed on the Message. */
            delta: {
                /** @description The content of the message in array of text and/or images. */
                content?: (components["schemas"]["MessageDeltaContentImageFileObject"] | components["schemas"]["MessageDeltaContentTextObject"] | components["schemas"]["MessageDeltaContentImageUrlObject"])[];
                /**
                 * @description The entity that produced the message. One of `user` or `assistant`.
                 * @enum {string}
                 */
                role?: "user" | "assistant";
                [key: string]: unknown;
            };
            /** @description The identifier of the message, which can be referenced in API endpoints. */
            id: string;
            /**
             * @description The object type, which is always `thread.message.delta`.
             * @enum {string}
             */
            object: "thread.message.delta";
            [key: string]: unknown;
        };
        /**
         * The message object
         * @description Represents a message within a [thread](/docs/api-reference/threads).
         */
        MessageObject: {
            /** @description If applicable, the ID of the [assistant](/docs/api-reference/assistants) that authored this message. */
            assistant_id: string | null;
            /** @description A list of files attached to the message, and the tools they were added to. */
            attachments: {
                /** @description The ID of the file to attach to the message. */
                file_id?: string;
                /** @description The tools to add this file to. */
                tools?: (components["schemas"]["AssistantToolsCode"] | components["schemas"]["AssistantToolsFileSearchTypeOnly"])[];
                [key: string]: unknown;
            }[] | null;
            /** @description The Unix timestamp (in seconds) for when the message was completed. */
            completed_at: number | null;
            /** @description The content of the message in array of text and/or images. */
            content: (components["schemas"]["MessageContentImageFileObject"] | components["schemas"]["MessageContentImageUrlObject"] | components["schemas"]["MessageContentTextObject"])[];
            /** @description The Unix timestamp (in seconds) for when the message was created. */
            created_at: number;
            /** @description The identifier, which can be referenced in API endpoints. */
            id: string;
            /** @description The Unix timestamp (in seconds) for when the message was marked as incomplete. */
            incomplete_at: number | null;
            /** @description On an incomplete message, details about why the message is incomplete. */
            incomplete_details: {
                /**
                 * @description The reason the message is incomplete.
                 * @enum {string}
                 */
                reason: "content_filter" | "max_tokens" | "run_cancelled" | "run_expired" | "run_failed";
                [key: string]: unknown;
            } | null;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata: Record<string, never>;
            /**
             * @description The object type, which is always `thread.message`.
             * @enum {string}
             */
            object: "thread.message";
            /**
             * @description The entity that produced the message. One of `user` or `assistant`.
             * @enum {string}
             */
            role: "user" | "assistant";
            /** @description The ID of the [run](/docs/api-reference/runs) associated with the creation of this message. Value is `null` when messages are created manually using the create message or create thread endpoints. */
            run_id: string | null;
            /**
             * @description The status of the message, which can be either `in_progress`, `incomplete`, or `completed`.
             * @enum {string}
             */
            status: "in_progress" | "incomplete" | "completed";
            /** @description The [thread](/docs/api-reference/threads) ID that this message belongs to. */
            thread_id: string;
            [key: string]: unknown;
        };
        /**
         * Text
         * @description The text content that is part of a message.
         */
        MessageRequestContentTextObject: {
            /** @description Text content to be sent to the model */
            text: string;
            /**
             * @description Always `text`.
             * @enum {string}
             */
            type: "text";
            [key: string]: unknown;
        };
        MessageStreamEvent: {
            data: components["schemas"]["MessageObject"];
            /** @enum {string} */
            event: "thread.message.created";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["MessageObject"];
            /** @enum {string} */
            event: "thread.message.in_progress";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["MessageDeltaObject"];
            /** @enum {string} */
            event: "thread.message.delta";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["MessageObject"];
            /** @enum {string} */
            event: "thread.message.completed";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["MessageObject"];
            /** @enum {string} */
            event: "thread.message.incomplete";
            [key: string]: unknown;
        };
        /**
         * Model
         * @description Describes an OpenAI model offering that can be used with the API.
         */
        Model: {
            /** @description The Unix timestamp (in seconds) when the model was created. */
            created: number;
            /** @description The model identifier, which can be referenced in the API endpoints. */
            id: string;
            /**
             * @description The object type, which is always "model".
             * @enum {string}
             */
            object: "model";
            /** @description The organization that owns the model. */
            owned_by: string;
            [key: string]: unknown;
        };
        ModifyAssistantRequest: {
            /** @description The description of the assistant. The maximum length is 512 characters.
             *      */
            description?: string | null;
            /** @description The system instructions that the assistant uses. The maximum length is 256,000 characters.
             *      */
            instructions?: string | null;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /** @description ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.
             *      */
            model?: string;
            /** @description The name of the assistant. The maximum length is 256 characters.
             *      */
            name?: string | null;
            response_format?: components["schemas"]["AssistantsApiResponseFormatOption"];
            /**
             * @description What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
             *
             * @default 1
             * @example 1
             */
            temperature: number;
            /** @description A set of resources that are used by the assistant's tools. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
             *      */
            tool_resources?: {
                code_interpreter?: {
                    /**
                     * @description Overrides the list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
                     *
                     * @default []
                     */
                    file_ids: string[];
                    [key: string]: unknown;
                };
                file_search?: {
                    /** @description Overrides the [vector store](/docs/api-reference/vector-stores/object) attached to this assistant. There can be a maximum of 1 vector store attached to the assistant.
                     *      */
                    vector_store_ids?: string[];
                    [key: string]: unknown;
                };
                [key: string]: unknown;
            } | null;
            /**
             * @description A list of tool enabled on the assistant. There can be a maximum of 128 tools per assistant. Tools can be of types `code_interpreter`, `file_search`, or `function`.
             *
             * @default []
             */
            tools: (components["schemas"]["AssistantToolsCode"] | components["schemas"]["AssistantToolsFileSearch"] | components["schemas"]["AssistantToolsFunction"])[];
            /**
             * @description An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.
             *
             *     We generally recommend altering this or temperature but not both.
             *
             * @default 1
             * @example 1
             */
            top_p: number;
            [key: string]: unknown;
        };
        ModifyMessageRequest: {
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            [key: string]: unknown;
        };
        ModifyRunRequest: {
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            [key: string]: unknown;
        };
        ModifyThreadRequest: {
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /** @description A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
             *      */
            tool_resources?: {
                code_interpreter?: {
                    /**
                     * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
                     *
                     * @default []
                     */
                    file_ids: string[];
                    [key: string]: unknown;
                };
                file_search?: {
                    /** @description The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
                     *      */
                    vector_store_ids?: string[];
                    [key: string]: unknown;
                };
                [key: string]: unknown;
            } | null;
            [key: string]: unknown;
        };
        /**
         * OpenAIFile
         * @description The `File` object represents a document that has been uploaded to OpenAI.
         */
        OpenAIFile: {
            /** @description The size of the file, in bytes. */
            bytes: number;
            /** @description The Unix timestamp (in seconds) for when the file was created. */
            created_at: number;
            /** @description The name of the file. */
            filename: string;
            /** @description The file identifier, which can be referenced in the API endpoints. */
            id: string;
            /**
             * @description The object type, which is always `file`.
             * @enum {string}
             */
            object: "file";
            /**
             * @description The intended purpose of the file. Supported values are `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results` and `vision`.
             * @enum {string}
             */
            purpose: "assistants" | "assistants_output" | "batch" | "batch_output" | "fine-tune" | "fine-tune-results" | "vision";
            /**
             * @deprecated
             * @description Deprecated. The current status of the file, which can be either `uploaded`, `processed`, or `error`.
             * @enum {string}
             */
            status: "uploaded" | "processed" | "error";
            /**
             * @deprecated
             * @description Deprecated. For details on why a fine-tuning training file failed validation, see the `error` field on `fine_tuning.job`.
             */
            status_details?: string;
            [key: string]: unknown;
        };
        /**
         * Other Chunking Strategy
         * @description This is returned when the chunking strategy is unknown. Typically, this is because the file was indexed before the `chunking_strategy` concept was introduced in the API.
         */
        OtherChunkingStrategyResponseParam: {
            /**
             * @description Always `other`.
             * @enum {string}
             */
            type: "other";
            [key: string]: unknown;
        };
        /**
         * @description Whether to enable [parallel function calling](/docs/guides/function-calling/parallel-function-calling) during tool use.
         * @default true
         */
        ParallelToolCalls: boolean;
        /** @description Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.). */
        RunCompletionUsage: {
            /** @description Number of completion tokens used over the course of the run. */
            completion_tokens: number;
            /** @description Number of prompt tokens used over the course of the run. */
            prompt_tokens: number;
            /** @description Total number of tokens used (prompt + completion). */
            total_tokens: number;
            [key: string]: unknown;
        } | null;
        /**
         * A run on a thread
         * @description Represents an execution run on a [thread](/docs/api-reference/threads).
         */
        RunObject: {
            /** @description The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run. */
            assistant_id: string;
            /** @description The Unix timestamp (in seconds) for when the run was cancelled. */
            cancelled_at: number | null;
            /** @description The Unix timestamp (in seconds) for when the run was completed. */
            completed_at: number | null;
            /** @description The Unix timestamp (in seconds) for when the run was created. */
            created_at: number;
            /** @description The Unix timestamp (in seconds) for when the run will expire. */
            expires_at: number | null;
            /** @description The Unix timestamp (in seconds) for when the run failed. */
            failed_at: number | null;
            /** @description The identifier, which can be referenced in API endpoints. */
            id: string;
            /** @description Details on why the run is incomplete. Will be `null` if the run is not incomplete. */
            incomplete_details: {
                /**
                 * @description The reason why the run is incomplete. This will point to which specific token limit was reached over the course of the run.
                 * @enum {string}
                 */
                reason?: "max_completion_tokens" | "max_prompt_tokens";
                [key: string]: unknown;
            } | null;
            /** @description The instructions that the [assistant](/docs/api-reference/assistants) used for this run. */
            instructions: string;
            /** @description The last error associated with this run. Will be `null` if there are no errors. */
            last_error: {
                /**
                 * @description One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
                 * @enum {string}
                 */
                code: "server_error" | "rate_limit_exceeded" | "invalid_prompt";
                /** @description A human-readable description of the error. */
                message: string;
                [key: string]: unknown;
            } | null;
            /** @description The maximum number of completion tokens specified to have been used over the course of the run.
             *      */
            max_completion_tokens: number | null;
            /** @description The maximum number of prompt tokens specified to have been used over the course of the run.
             *      */
            max_prompt_tokens: number | null;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata: Record<string, never>;
            /** @description The model that the [assistant](/docs/api-reference/assistants) used for this run. */
            model: string;
            /**
             * @description The object type, which is always `thread.run`.
             * @enum {string}
             */
            object: "thread.run";
            parallel_tool_calls: components["schemas"]["ParallelToolCalls"];
            /** @description Details on the action required to continue the run. Will be `null` if no action is required. */
            required_action: {
                /** @description Details on the tool outputs needed for this run to continue. */
                submit_tool_outputs: {
                    /** @description A list of the relevant tool calls. */
                    tool_calls: components["schemas"]["RunToolCallObject"][];
                    [key: string]: unknown;
                };
                /**
                 * @description For now, this is always `submit_tool_outputs`.
                 * @enum {string}
                 */
                type: "submit_tool_outputs";
                [key: string]: unknown;
            } | null;
            response_format: components["schemas"]["AssistantsApiResponseFormatOption"];
            /** @description The Unix timestamp (in seconds) for when the run was started. */
            started_at: number | null;
            /**
             * @description The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`.
             * @enum {string}
             */
            status: "queued" | "in_progress" | "requires_action" | "cancelling" | "cancelled" | "failed" | "completed" | "incomplete" | "expired";
            /** @description The sampling temperature used for this run. If not set, defaults to 1. */
            temperature?: number | null;
            /** @description The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run. */
            thread_id: string;
            tool_choice: components["schemas"]["AssistantsApiToolChoiceOption"];
            /**
             * @description The list of tools that the [assistant](/docs/api-reference/assistants) used for this run.
             * @default []
             */
            tools: (components["schemas"]["AssistantToolsCode"] | components["schemas"]["AssistantToolsFileSearch"] | components["schemas"]["AssistantToolsFunction"])[];
            /** @description The nucleus sampling value used for this run. If not set, defaults to 1. */
            top_p?: number | null;
            truncation_strategy: components["schemas"]["TruncationObject"];
            usage: components["schemas"]["RunCompletionUsage"];
            [key: string]: unknown;
        };
        /** @description Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`. */
        RunStepCompletionUsage: {
            /** @description Number of completion tokens used over the course of the run step. */
            completion_tokens: number;
            /** @description Number of prompt tokens used over the course of the run step. */
            prompt_tokens: number;
            /** @description Total number of tokens used (prompt + completion). */
            total_tokens: number;
            [key: string]: unknown;
        } | null;
        /**
         * Run step delta object
         * @description Represents a run step delta i.e. any changed fields on a run step during streaming.
         *
         */
        RunStepDeltaObject: {
            /** @description The delta containing the fields that have changed on the run step. */
            delta: {
                /** @description The details of the run step. */
                step_details?: components["schemas"]["RunStepDeltaStepDetailsMessageCreationObject"] | components["schemas"]["RunStepDeltaStepDetailsToolCallsObject"];
                [key: string]: unknown;
            };
            /** @description The identifier of the run step, which can be referenced in API endpoints. */
            id: string;
            /**
             * @description The object type, which is always `thread.run.step.delta`.
             * @enum {string}
             */
            object: "thread.run.step.delta";
            [key: string]: unknown;
        };
        /**
         * Message creation
         * @description Details of the message creation by the run step.
         */
        RunStepDeltaStepDetailsMessageCreationObject: {
            message_creation?: {
                /** @description The ID of the message that was created by this run step. */
                message_id?: string;
                [key: string]: unknown;
            };
            /**
             * @description Always `message_creation`.
             * @enum {string}
             */
            type: "message_creation";
            [key: string]: unknown;
        };
        /**
         * Code interpreter tool call
         * @description Details of the Code Interpreter tool call the run step was involved in.
         */
        RunStepDeltaStepDetailsToolCallsCodeObject: {
            /** @description The Code Interpreter tool call definition. */
            code_interpreter?: {
                /** @description The input to the Code Interpreter tool call. */
                input?: string;
                /** @description The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type. */
                outputs?: (components["schemas"]["RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject"] | components["schemas"]["RunStepDeltaStepDetailsToolCallsCodeOutputImageObject"])[];
                [key: string]: unknown;
            };
            /** @description The ID of the tool call. */
            id?: string;
            /** @description The index of the tool call in the tool calls array. */
            index: number;
            /**
             * @description The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
             * @enum {string}
             */
            type: "code_interpreter";
            [key: string]: unknown;
        };
        /** Code interpreter image output */
        RunStepDeltaStepDetailsToolCallsCodeOutputImageObject: {
            image?: {
                /** @description The [file](/docs/api-reference/files) ID of the image. */
                file_id?: string;
                [key: string]: unknown;
            };
            /** @description The index of the output in the outputs array. */
            index: number;
            /**
             * @description Always `image`.
             * @enum {string}
             */
            type: "image";
            [key: string]: unknown;
        };
        /**
         * Code interpreter log output
         * @description Text output from the Code Interpreter tool call as part of a run step.
         */
        RunStepDeltaStepDetailsToolCallsCodeOutputLogsObject: {
            /** @description The index of the output in the outputs array. */
            index: number;
            /** @description The text output from the Code Interpreter tool call. */
            logs?: string;
            /**
             * @description Always `logs`.
             * @enum {string}
             */
            type: "logs";
            [key: string]: unknown;
        };
        /** File search tool call */
        RunStepDeltaStepDetailsToolCallsFileSearchObject: {
            /** @description For now, this is always going to be an empty object. */
            file_search: Record<string, never>;
            /** @description The ID of the tool call object. */
            id?: string;
            /** @description The index of the tool call in the tool calls array. */
            index: number;
            /**
             * @description The type of tool call. This is always going to be `file_search` for this type of tool call.
             * @enum {string}
             */
            type: "file_search";
            [key: string]: unknown;
        };
        /** Function tool call */
        RunStepDeltaStepDetailsToolCallsFunctionObject: {
            /** @description The definition of the function that was called. */
            function?: {
                /** @description The arguments passed to the function. */
                arguments?: string;
                /** @description The name of the function. */
                name?: string;
                /** @description The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet. */
                output?: string | null;
                [key: string]: unknown;
            };
            /** @description The ID of the tool call object. */
            id?: string;
            /** @description The index of the tool call in the tool calls array. */
            index: number;
            /**
             * @description The type of tool call. This is always going to be `function` for this type of tool call.
             * @enum {string}
             */
            type: "function";
            [key: string]: unknown;
        };
        /**
         * Tool calls
         * @description Details of the tool call.
         */
        RunStepDeltaStepDetailsToolCallsObject: {
            /** @description An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.
             *      */
            tool_calls?: (components["schemas"]["RunStepDeltaStepDetailsToolCallsCodeObject"] | components["schemas"]["RunStepDeltaStepDetailsToolCallsFileSearchObject"] | components["schemas"]["RunStepDeltaStepDetailsToolCallsFunctionObject"])[];
            /**
             * @description Always `tool_calls`.
             * @enum {string}
             */
            type: "tool_calls";
            [key: string]: unknown;
        };
        /**
         * Message creation
         * @description Details of the message creation by the run step.
         */
        RunStepDetailsMessageCreationObject: {
            message_creation: {
                /** @description The ID of the message that was created by this run step. */
                message_id: string;
                [key: string]: unknown;
            };
            /**
             * @description Always `message_creation`.
             * @enum {string}
             */
            type: "message_creation";
            [key: string]: unknown;
        };
        /**
         * Code Interpreter tool call
         * @description Details of the Code Interpreter tool call the run step was involved in.
         */
        RunStepDetailsToolCallsCodeObject: {
            /** @description The Code Interpreter tool call definition. */
            code_interpreter: {
                /** @description The input to the Code Interpreter tool call. */
                input: string;
                /** @description The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type. */
                outputs: (components["schemas"]["RunStepDetailsToolCallsCodeOutputLogsObject"] | components["schemas"]["RunStepDetailsToolCallsCodeOutputImageObject"])[];
                [key: string]: unknown;
            };
            /** @description The ID of the tool call. */
            id: string;
            /**
             * @description The type of tool call. This is always going to be `code_interpreter` for this type of tool call.
             * @enum {string}
             */
            type: "code_interpreter";
            [key: string]: unknown;
        };
        /** Code Interpreter image output */
        RunStepDetailsToolCallsCodeOutputImageObject: {
            image: {
                /** @description The [file](/docs/api-reference/files) ID of the image. */
                file_id: string;
                [key: string]: unknown;
            };
            /**
             * @description Always `image`.
             * @enum {string}
             */
            type: "image";
            [key: string]: unknown;
        };
        /**
         * Code Interpreter log output
         * @description Text output from the Code Interpreter tool call as part of a run step.
         */
        RunStepDetailsToolCallsCodeOutputLogsObject: {
            /** @description The text output from the Code Interpreter tool call. */
            logs: string;
            /**
             * @description Always `logs`.
             * @enum {string}
             */
            type: "logs";
            [key: string]: unknown;
        };
        /** File search tool call */
        RunStepDetailsToolCallsFileSearchObject: {
            /** @description For now, this is always going to be an empty object. */
            file_search: Record<string, never>;
            /** @description The ID of the tool call object. */
            id: string;
            /**
             * @description The type of tool call. This is always going to be `file_search` for this type of tool call.
             * @enum {string}
             */
            type: "file_search";
            [key: string]: unknown;
        };
        /** Function tool call */
        RunStepDetailsToolCallsFunctionObject: {
            /** @description The definition of the function that was called. */
            function: {
                /** @description The arguments passed to the function. */
                arguments: string;
                /** @description The name of the function. */
                name: string;
                /** @description The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet. */
                output: string | null;
                [key: string]: unknown;
            };
            /** @description The ID of the tool call object. */
            id: string;
            /**
             * @description The type of tool call. This is always going to be `function` for this type of tool call.
             * @enum {string}
             */
            type: "function";
            [key: string]: unknown;
        };
        /**
         * Tool calls
         * @description Details of the tool call.
         */
        RunStepDetailsToolCallsObject: {
            /** @description An array of tool calls the run step was involved in. These can be associated with one of three types of tools: `code_interpreter`, `file_search`, or `function`.
             *      */
            tool_calls: (components["schemas"]["RunStepDetailsToolCallsCodeObject"] | components["schemas"]["RunStepDetailsToolCallsFileSearchObject"] | components["schemas"]["RunStepDetailsToolCallsFunctionObject"])[];
            /**
             * @description Always `tool_calls`.
             * @enum {string}
             */
            type: "tool_calls";
            [key: string]: unknown;
        };
        /**
         * Run steps
         * @description Represents a step in execution of a run.
         *
         */
        RunStepObject: {
            /** @description The ID of the [assistant](/docs/api-reference/assistants) associated with the run step. */
            assistant_id: string;
            /** @description The Unix timestamp (in seconds) for when the run step was cancelled. */
            cancelled_at: number | null;
            /** @description The Unix timestamp (in seconds) for when the run step completed. */
            completed_at: number | null;
            /** @description The Unix timestamp (in seconds) for when the run step was created. */
            created_at: number;
            /** @description The Unix timestamp (in seconds) for when the run step expired. A step is considered expired if the parent run is expired. */
            expired_at: number | null;
            /** @description The Unix timestamp (in seconds) for when the run step failed. */
            failed_at: number | null;
            /** @description The identifier of the run step, which can be referenced in API endpoints. */
            id: string;
            /** @description The last error associated with this run step. Will be `null` if there are no errors. */
            last_error: {
                /**
                 * @description One of `server_error` or `rate_limit_exceeded`.
                 * @enum {string}
                 */
                code: "server_error" | "rate_limit_exceeded";
                /** @description A human-readable description of the error. */
                message: string;
                [key: string]: unknown;
            } | null;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata: Record<string, never>;
            /**
             * @description The object type, which is always `thread.run.step`.
             * @enum {string}
             */
            object: "thread.run.step";
            /** @description The ID of the [run](/docs/api-reference/runs) that this run step is a part of. */
            run_id: string;
            /**
             * @description The status of the run step, which can be either `in_progress`, `cancelled`, `failed`, `completed`, or `expired`.
             * @enum {string}
             */
            status: "in_progress" | "cancelled" | "failed" | "completed" | "expired";
            /** @description The details of the run step. */
            step_details: components["schemas"]["RunStepDetailsMessageCreationObject"] | components["schemas"]["RunStepDetailsToolCallsObject"];
            /** @description The ID of the [thread](/docs/api-reference/threads) that was run. */
            thread_id: string;
            /**
             * @description The type of run step, which can be either `message_creation` or `tool_calls`.
             * @enum {string}
             */
            type: "message_creation" | "tool_calls";
            usage: components["schemas"]["RunStepCompletionUsage"];
            [key: string]: unknown;
        };
        RunStepStreamEvent: {
            data: components["schemas"]["RunStepObject"];
            /** @enum {string} */
            event: "thread.run.step.created";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunStepObject"];
            /** @enum {string} */
            event: "thread.run.step.in_progress";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunStepDeltaObject"];
            /** @enum {string} */
            event: "thread.run.step.delta";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunStepObject"];
            /** @enum {string} */
            event: "thread.run.step.completed";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunStepObject"];
            /** @enum {string} */
            event: "thread.run.step.failed";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunStepObject"];
            /** @enum {string} */
            event: "thread.run.step.cancelled";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunStepObject"];
            /** @enum {string} */
            event: "thread.run.step.expired";
            [key: string]: unknown;
        };
        RunStreamEvent: {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.created";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.queued";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.in_progress";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.requires_action";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.completed";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.incomplete";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.failed";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.cancelling";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.cancelled";
            [key: string]: unknown;
        } | {
            data: components["schemas"]["RunObject"];
            /** @enum {string} */
            event: "thread.run.expired";
            [key: string]: unknown;
        };
        /** @description Tool call objects */
        RunToolCallObject: {
            /** @description The function definition. */
            function: {
                /** @description The arguments that the model expects you to pass to the function. */
                arguments: string;
                /** @description The name of the function. */
                name: string;
                [key: string]: unknown;
            };
            /** @description The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint. */
            id: string;
            /**
             * @description The type of tool call the output is required for. For now, this is always `function`.
             * @enum {string}
             */
            type: "function";
            [key: string]: unknown;
        };
        StaticChunkingStrategy: {
            /** @description The number of tokens that overlap between chunks. The default value is `400`.
             *
             *     Note that the overlap must not exceed half of `max_chunk_size_tokens`.
             *      */
            chunk_overlap_tokens: number;
            /** @description The maximum number of tokens in each chunk. The default value is `800`. The minimum value is `100` and the maximum value is `4096`. */
            max_chunk_size_tokens: number;
            [key: string]: unknown;
        };
        /** Static Chunking Strategy */
        StaticChunkingStrategyRequestParam: {
            static: components["schemas"]["StaticChunkingStrategy"];
            /**
             * @description Always `static`.
             * @enum {string}
             */
            type: "static";
            [key: string]: unknown;
        };
        /** Static Chunking Strategy */
        StaticChunkingStrategyResponseParam: {
            static: components["schemas"]["StaticChunkingStrategy"];
            /**
             * @description Always `static`.
             * @enum {string}
             */
            type: "static";
            [key: string]: unknown;
        };
        SubmitToolOutputsRunRequest: {
            /** @description If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.
             *      */
            stream?: boolean | null;
            /** @description A list of tools for which the outputs are being submitted. */
            tool_outputs: {
                /** @description The output of the tool call to be submitted to continue the run. */
                output?: string;
                /** @description The ID of the tool call in the `required_action` object within the run object the output is being submitted for. */
                tool_call_id?: string;
                [key: string]: unknown;
            }[];
            [key: string]: unknown;
        };
        /**
         * Thread
         * @description Represents a thread that contains [messages](/docs/api-reference/messages).
         */
        ThreadObject: {
            /** @description The Unix timestamp (in seconds) for when the thread was created. */
            created_at: number;
            /** @description The identifier, which can be referenced in API endpoints. */
            id: string;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata: Record<string, never>;
            /**
             * @description The object type, which is always `thread`.
             * @enum {string}
             */
            object: "thread";
            /** @description A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.
             *      */
            tool_resources: {
                code_interpreter?: {
                    /**
                     * @description A list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.
                     *
                     * @default []
                     */
                    file_ids: string[];
                    [key: string]: unknown;
                };
                file_search?: {
                    /** @description The [vector store](/docs/api-reference/vector-stores/object) attached to this thread. There can be a maximum of 1 vector store attached to the thread.
                     *      */
                    vector_store_ids?: string[];
                    [key: string]: unknown;
                };
                [key: string]: unknown;
            } | null;
            [key: string]: unknown;
        };
        ThreadStreamEvent: {
            data: components["schemas"]["ThreadObject"];
            /** @enum {string} */
            event: "thread.created";
            [key: string]: unknown;
        };
        TranscriptionSegment: {
            /**
             * Format: float
             * @description Average logprob of the segment. If the value is lower than -1, consider the logprobs failed.
             */
            avg_logprob: number;
            /**
             * Format: float
             * @description Compression ratio of the segment. If the value is greater than 2.4, consider the compression failed.
             */
            compression_ratio: number;
            /**
             * Format: float
             * @description End time of the segment in seconds.
             */
            end: number;
            /** @description Unique identifier of the segment. */
            id: number;
            /**
             * Format: float
             * @description Probability of no speech in the segment. If the value is higher than 1.0 and the `avg_logprob` is below -1, consider this segment silent.
             */
            no_speech_prob: number;
            /** @description Seek offset of the segment. */
            seek: number;
            /**
             * Format: float
             * @description Start time of the segment in seconds.
             */
            start: number;
            /**
             * Format: float
             * @description Temperature parameter used for generating the segment.
             */
            temperature: number;
            /** @description Text content of the segment. */
            text: string;
            /** @description Array of token IDs for the text content. */
            tokens: number[];
            [key: string]: unknown;
        };
        TranscriptionWord: {
            /**
             * Format: float
             * @description End time of the word in seconds.
             */
            end: number;
            /**
             * Format: float
             * @description Start time of the word in seconds.
             */
            start: number;
            /** @description The text content of the word. */
            word: string;
            [key: string]: unknown;
        };
        /**
         * Thread Truncation Controls
         * @description Controls for how a thread will be truncated prior to the run. Use this to control the intial context window of the run.
         */
        TruncationObject: {
            /** @description The number of most recent messages from the thread when constructing the context for the run. */
            last_messages?: number | null;
            /**
             * @description The truncation strategy to use for the thread. The default is `auto`. If set to `last_messages`, the thread will be truncated to the n most recent messages in the thread. When set to `auto`, messages in the middle of the thread will be dropped to fit the context length of the model, `max_prompt_tokens`.
             * @enum {string}
             */
            type: "auto" | "last_messages";
            [key: string]: unknown;
        };
        UpdateVectorStoreRequest: {
            expires_after?: components["schemas"]["VectorStoreExpirationAfter"];
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata?: Record<string, never>;
            /** @description The name of the vector store. */
            name?: string | null;
            [key: string]: unknown;
        };
        /**
         * Upload
         * @description The Upload object can accept byte chunks in the form of Parts.
         *
         */
        Upload: {
            /** @description The intended number of bytes to be uploaded. */
            bytes: number;
            /** @description The Unix timestamp (in seconds) for when the Upload was created. */
            created_at: number;
            /** @description The Unix timestamp (in seconds) for when the Upload was created. */
            expires_at: number;
            /** @description The ready File object after the Upload is completed. */
            file?: components["schemas"]["OpenAIFile"];
            /** @description The name of the file to be uploaded. */
            filename: string;
            /** @description The Upload unique identifier, which can be referenced in API endpoints. */
            id: string;
            /**
             * @description The object type, which is always "upload".
             * @enum {string}
             */
            object?: "upload";
            /** @description The intended purpose of the file. [Please refer here](/docs/api-reference/files/object#files/object-purpose) for acceptable values. */
            purpose: string;
            /**
             * @description The status of the Upload.
             * @enum {string}
             */
            status: "pending" | "completed" | "cancelled" | "expired";
            [key: string]: unknown;
        };
        /**
         * UploadPart
         * @description The upload Part represents a chunk of bytes we can add to an Upload object.
         *
         */
        UploadPart: {
            /** @description The Unix timestamp (in seconds) for when the Part was created. */
            created_at: number;
            /** @description The upload Part unique identifier, which can be referenced in API endpoints. */
            id: string;
            /**
             * @description The object type, which is always `upload.part`.
             * @enum {string}
             */
            object: "upload.part";
            /** @description The ID of the Upload object that this Part was added to. */
            upload_id: string;
            [key: string]: unknown;
        };
        /**
         * Vector store expiration policy
         * @description The expiration policy for a vector store.
         */
        VectorStoreExpirationAfter: {
            /**
             * @description Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`.
             * @enum {string}
             */
            anchor: "last_active_at";
            /** @description The number of days after the anchor time that the vector store will expire. */
            days: number;
            [key: string]: unknown;
        };
        /**
         * Vector store file batch
         * @description A batch of files attached to a vector store.
         */
        VectorStoreFileBatchObject: {
            /** @description The Unix timestamp (in seconds) for when the vector store files batch was created. */
            created_at: number;
            file_counts: {
                /** @description The number of files that where cancelled. */
                cancelled: number;
                /** @description The number of files that have been processed. */
                completed: number;
                /** @description The number of files that have failed to process. */
                failed: number;
                /** @description The number of files that are currently being processed. */
                in_progress: number;
                /** @description The total number of files. */
                total: number;
                [key: string]: unknown;
            };
            /** @description The identifier, which can be referenced in API endpoints. */
            id: string;
            /**
             * @description The object type, which is always `vector_store.file_batch`.
             * @enum {string}
             */
            object: "vector_store.files_batch";
            /**
             * @description The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`.
             * @enum {string}
             */
            status: "in_progress" | "completed" | "cancelled" | "failed";
            /** @description The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. */
            vector_store_id: string;
            [key: string]: unknown;
        };
        /**
         * Vector store files
         * @description A list of files attached to a vector store.
         */
        VectorStoreFileObject: {
            /** @description The strategy used to chunk the file. */
            chunking_strategy?: components["schemas"]["StaticChunkingStrategyResponseParam"] | components["schemas"]["OtherChunkingStrategyResponseParam"];
            /** @description The Unix timestamp (in seconds) for when the vector store file was created. */
            created_at: number;
            /** @description The identifier, which can be referenced in API endpoints. */
            id: string;
            /** @description The last error associated with this vector store file. Will be `null` if there are no errors. */
            last_error: {
                /**
                 * @description One of `server_error` or `rate_limit_exceeded`.
                 * @enum {string}
                 */
                code: "internal_error" | "file_not_found" | "parsing_error" | "unhandled_mime_type";
                /** @description A human-readable description of the error. */
                message: string;
                [key: string]: unknown;
            } | null;
            /**
             * @description The object type, which is always `vector_store.file`.
             * @enum {string}
             */
            object: "vector_store.file";
            /**
             * @description The status of the vector store file, which can be either `in_progress`, `completed`, `cancelled`, or `failed`. The status `completed` indicates that the vector store file is ready for use.
             * @enum {string}
             */
            status: "in_progress" | "completed" | "cancelled" | "failed";
            /** @description The total vector store usage in bytes. Note that this may be different from the original file size. */
            usage_bytes: number;
            /** @description The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. */
            vector_store_id: string;
            [key: string]: unknown;
        };
        /**
         * Vector store
         * @description A vector store is a collection of processed files can be used by the `file_search` tool.
         */
        VectorStoreObject: {
            /** @description The Unix timestamp (in seconds) for when the vector store was created. */
            created_at: number;
            expires_after?: components["schemas"]["VectorStoreExpirationAfter"];
            /** @description The Unix timestamp (in seconds) for when the vector store will expire. */
            expires_at?: number | null;
            file_counts: {
                /** @description The number of files that were cancelled. */
                cancelled: number;
                /** @description The number of files that have been successfully processed. */
                completed: number;
                /** @description The number of files that have failed to process. */
                failed: number;
                /** @description The number of files that are currently being processed. */
                in_progress: number;
                /** @description The total number of files. */
                total: number;
                [key: string]: unknown;
            };
            /** @description The identifier, which can be referenced in API endpoints. */
            id: string;
            /** @description The Unix timestamp (in seconds) for when the vector store was last active. */
            last_active_at: number | null;
            /** @description Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.
             *      */
            metadata: Record<string, never>;
            /** @description The name of the vector store. */
            name: string;
            /**
             * @description The object type, which is always `vector_store`.
             * @enum {string}
             */
            object: "vector_store";
            /**
             * @description The status of the vector store, which can be either `expired`, `in_progress`, or `completed`. A status of `completed` indicates that the vector store is ready for use.
             * @enum {string}
             */
            status: "expired" | "in_progress" | "completed";
            /** @description The total number of bytes used by the files in the vector store. */
            usage_bytes: number;
            [key: string]: unknown;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    listAssistants: {
        parameters: {
            query?: {
                /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
                 *      */
                after?: string;
                /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
                 *      */
                before?: string;
                /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
                 *      */
                limit?: number;
                /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
                 *      */
                order?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListAssistantsResponse"];
                };
            };
        };
    };
    createAssistant: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAssistantRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AssistantObject"];
                };
            };
        };
    };
    getAssistant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the assistant to retrieve. */
                assistant_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AssistantObject"];
                };
            };
        };
    };
    modifyAssistant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the assistant to modify. */
                assistant_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModifyAssistantRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AssistantObject"];
                };
            };
        };
    };
    deleteAssistant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the assistant to delete. */
                assistant_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteAssistantResponse"];
                };
            };
        };
    };
    createSpeech: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateSpeechRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    /** @description chunked */
                    "Transfer-Encoding"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
        };
    };
    createTranscription: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["CreateTranscriptionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateTranscriptionResponseJson"] | components["schemas"]["CreateTranscriptionResponseVerboseJson"];
                };
            };
        };
    };
    createTranslation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["CreateTranslationRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateTranslationResponseJson"] | components["schemas"]["CreateTranslationResponseVerboseJson"];
                };
            };
        };
    };
    listBatches: {
        parameters: {
            query?: {
                /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
                 *      */
                after?: string;
                /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
                 *      */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Batch listed successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListBatchesResponse"];
                };
            };
        };
    };
    createBatch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description The time frame within which the batch should be processed. Currently only `24h` is supported.
                     * @enum {string}
                     */
                    completion_window: "24h";
                    /**
                     * @description The endpoint to be used for all requests in the batch. Currently `/v1/chat/completions`, `/v1/embeddings`, and `/v1/completions` are supported. Note that `/v1/embeddings` batches are also restricted to a maximum of 50,000 embedding inputs across all requests in the batch.
                     * @enum {string}
                     */
                    endpoint: "/v1/chat/completions" | "/v1/embeddings" | "/v1/completions";
                    /** @description The ID of an uploaded file that contains requests for the new batch.
                     *
                     *     See [upload file](/docs/api-reference/files/create) for how to upload a file.
                     *
                     *     Your input file must be formatted as a [JSONL file](/docs/api-reference/batch/request-input), and must be uploaded with the purpose `batch`. The file can contain up to 50,000 requests, and can be up to 100 MB in size.
                     *      */
                    input_file_id: string;
                    /** @description Optional custom metadata for the batch. */
                    metadata?: {
                        [key: string]: string | undefined;
                    } | null;
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Batch created successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Batch"];
                };
            };
        };
    };
    retrieveBatch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the batch to retrieve. */
                batch_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Batch retrieved successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Batch"];
                };
            };
        };
    };
    cancelBatch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the batch to cancel. */
                batch_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Batch is cancelling. Returns the cancelling batch's details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Batch"];
                };
            };
        };
    };
    createChatCompletion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateChatCompletionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateChatCompletionResponse"];
                };
            };
        };
    };
    createCompletion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateCompletionRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateCompletionResponse"];
                };
            };
        };
    };
    createEmbedding: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateEmbeddingRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateEmbeddingResponse"];
                };
            };
        };
    };
    listFiles: {
        parameters: {
            query?: {
                /** @description Only return files with the given purpose. */
                purpose?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListFilesResponse"];
                };
            };
        };
    };
    createFile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["CreateFileRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OpenAIFile"];
                };
            };
        };
    };
    retrieveFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the file to use for this request. */
                file_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OpenAIFile"];
                };
            };
        };
    };
    deleteFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the file to use for this request. */
                file_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteFileResponse"];
                };
            };
        };
    };
    downloadFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the file to use for this request. */
                file_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string;
                };
            };
        };
    };
    listPaginatedFineTuningJobs: {
        parameters: {
            query?: {
                /** @description Identifier for the last job from the previous pagination request. */
                after?: string;
                /** @description Number of fine-tuning jobs to retrieve. */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListPaginatedFineTuningJobsResponse"];
                };
            };
        };
    };
    createFineTuningJob: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFineTuningJobRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FineTuningJob"];
                };
            };
        };
    };
    retrieveFineTuningJob: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the fine-tuning job.
                 *      */
                fine_tuning_job_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FineTuningJob"];
                };
            };
        };
    };
    cancelFineTuningJob: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the fine-tuning job to cancel.
                 *      */
                fine_tuning_job_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FineTuningJob"];
                };
            };
        };
    };
    listFineTuningJobCheckpoints: {
        parameters: {
            query?: {
                /** @description Identifier for the last checkpoint ID from the previous pagination request. */
                after?: string;
                /** @description Number of checkpoints to retrieve. */
                limit?: number;
            };
            header?: never;
            path: {
                /** @description The ID of the fine-tuning job to get checkpoints for.
                 *      */
                fine_tuning_job_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListFineTuningJobCheckpointsResponse"];
                };
            };
        };
    };
    listFineTuningEvents: {
        parameters: {
            query?: {
                /** @description Identifier for the last event from the previous pagination request. */
                after?: string;
                /** @description Number of events to retrieve. */
                limit?: number;
            };
            header?: never;
            path: {
                /** @description The ID of the fine-tuning job to get events for.
                 *      */
                fine_tuning_job_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListFineTuningJobEventsResponse"];
                };
            };
        };
    };
    createImageEdit: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["CreateImageEditRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImagesResponse"];
                };
            };
        };
    };
    createImage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateImageRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImagesResponse"];
                };
            };
        };
    };
    createImageVariation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["CreateImageVariationRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImagesResponse"];
                };
            };
        };
    };
    listModels: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
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
    retrieveModel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the model to use for this request */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Model"];
                };
            };
        };
    };
    deleteModel: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The model to delete */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteModelResponse"];
                };
            };
        };
    };
    createModeration: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateModerationRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateModerationResponse"];
                };
            };
        };
    };
    createThread: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateThreadRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadObject"];
                };
            };
        };
    };
    getThread: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the thread to retrieve. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadObject"];
                };
            };
        };
    };
    modifyThread: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the thread to modify. Only the `metadata` can be modified. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModifyThreadRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ThreadObject"];
                };
            };
        };
    };
    deleteThread: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the thread to delete. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteThreadResponse"];
                };
            };
        };
    };
    listMessages: {
        parameters: {
            query?: {
                /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
                 *      */
                after?: string;
                /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
                 *      */
                before?: string;
                /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
                 *      */
                limit?: number;
                /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
                 *      */
                order?: "asc" | "desc";
                /** @description Filter messages by the run ID that generated them.
                 *      */
                run_id?: string;
            };
            header?: never;
            path: {
                /** @description The ID of the [thread](/docs/api-reference/threads) the messages belong to. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListMessagesResponse"];
                };
            };
        };
    };
    createMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the [thread](/docs/api-reference/threads) to create a message for. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateMessageRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageObject"];
                };
            };
        };
    };
    getMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the message to retrieve. */
                message_id: string;
                /** @description The ID of the [thread](/docs/api-reference/threads) to which this message belongs. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageObject"];
                };
            };
        };
    };
    modifyMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the message to modify. */
                message_id: string;
                /** @description The ID of the thread to which this message belongs. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModifyMessageRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageObject"];
                };
            };
        };
    };
    deleteMessage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the message to delete. */
                message_id: string;
                /** @description The ID of the thread to which this message belongs. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteMessageResponse"];
                };
            };
        };
    };
    listRuns: {
        parameters: {
            query?: {
                /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
                 *      */
                after?: string;
                /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
                 *      */
                before?: string;
                /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
                 *      */
                limit?: number;
                /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
                 *      */
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                /** @description The ID of the thread the run belongs to. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListRunsResponse"];
                };
            };
        };
    };
    createRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the thread to run. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateRunRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RunObject"];
                };
            };
        };
    };
    getRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the run to retrieve. */
                run_id: string;
                /** @description The ID of the [thread](/docs/api-reference/threads) that was run. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RunObject"];
                };
            };
        };
    };
    modifyRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the run to modify. */
                run_id: string;
                /** @description The ID of the [thread](/docs/api-reference/threads) that was run. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModifyRunRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RunObject"];
                };
            };
        };
    };
    cancelRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the run to cancel. */
                run_id: string;
                /** @description The ID of the thread to which this run belongs. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RunObject"];
                };
            };
        };
    };
    listRunSteps: {
        parameters: {
            query?: {
                /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
                 *      */
                after?: string;
                /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
                 *      */
                before?: string;
                /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
                 *      */
                limit?: number;
                /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
                 *      */
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                /** @description The ID of the run the run steps belong to. */
                run_id: string;
                /** @description The ID of the thread the run and run steps belong to. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListRunStepsResponse"];
                };
            };
        };
    };
    getRunStep: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the run to which the run step belongs. */
                run_id: string;
                /** @description The ID of the run step to retrieve. */
                step_id: string;
                /** @description The ID of the thread to which the run and run step belongs. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RunStepObject"];
                };
            };
        };
    };
    submitToolOuputsToRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the run that requires the tool output submission. */
                run_id: string;
                /** @description The ID of the [thread](/docs/api-reference/threads) to which this run belongs. */
                thread_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubmitToolOutputsRunRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RunObject"];
                };
            };
        };
    };
    createThreadAndRun: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateThreadAndRunRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RunObject"];
                };
            };
        };
    };
    createUpload: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateUploadRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Upload"];
                };
            };
        };
    };
    cancelUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the Upload.
                 *      */
                upload_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Upload"];
                };
            };
        };
    };
    completeUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the Upload.
                 *      */
                upload_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CompleteUploadRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Upload"];
                };
            };
        };
    };
    addUploadPart: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the Upload.
                 *      */
                upload_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["AddUploadPartRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UploadPart"];
                };
            };
        };
    };
    listVectorStores: {
        parameters: {
            query?: {
                /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
                 *      */
                after?: string;
                /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
                 *      */
                before?: string;
                /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
                 *      */
                limit?: number;
                /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
                 *      */
                order?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListVectorStoresResponse"];
                };
            };
        };
    };
    createVectorStore: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateVectorStoreRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreObject"];
                };
            };
        };
    };
    getVectorStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the vector store to retrieve. */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreObject"];
                };
            };
        };
    };
    modifyVectorStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the vector store to modify. */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateVectorStoreRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreObject"];
                };
            };
        };
    };
    deleteVectorStore: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the vector store to delete. */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteVectorStoreResponse"];
                };
            };
        };
    };
    createVectorStoreFileBatch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the vector store for which to create a File Batch.
                 *      */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateVectorStoreFileBatchRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFileBatchObject"];
                };
            };
        };
    };
    getVectorStoreFileBatch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the file batch being retrieved. */
                batch_id: string;
                /** @description The ID of the vector store that the file batch belongs to. */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFileBatchObject"];
                };
            };
        };
    };
    cancelVectorStoreFileBatch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the file batch to cancel. */
                batch_id: string;
                /** @description The ID of the vector store that the file batch belongs to. */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFileBatchObject"];
                };
            };
        };
    };
    listFilesInVectorStoreBatch: {
        parameters: {
            query?: {
                /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
                 *      */
                after?: string;
                /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
                 *      */
                before?: string;
                /** @description Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
                filter?: "in_progress" | "completed" | "failed" | "cancelled";
                /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
                 *      */
                limit?: number;
                /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
                 *      */
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                /** @description The ID of the file batch that the files belong to. */
                batch_id: string;
                /** @description The ID of the vector store that the files belong to. */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListVectorStoreFilesResponse"];
                };
            };
        };
    };
    listVectorStoreFiles: {
        parameters: {
            query?: {
                /** @description A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
                 *      */
                after?: string;
                /** @description A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
                 *      */
                before?: string;
                /** @description Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`. */
                filter?: "in_progress" | "completed" | "failed" | "cancelled";
                /** @description A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
                 *      */
                limit?: number;
                /** @description Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
                 *      */
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                /** @description The ID of the vector store that the files belong to. */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ListVectorStoreFilesResponse"];
                };
            };
        };
    };
    createVectorStoreFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the vector store for which to create a File.
                 *      */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateVectorStoreFileRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFileObject"];
                };
            };
        };
    };
    getVectorStoreFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the file being retrieved. */
                file_id: string;
                /** @description The ID of the vector store that the file belongs to. */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VectorStoreFileObject"];
                };
            };
        };
    };
    deleteVectorStoreFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the file to delete. */
                file_id: string;
                /** @description The ID of the vector store that the file belongs to. */
                vector_store_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteVectorStoreFileResponse"];
                };
            };
        };
    };
}
type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
