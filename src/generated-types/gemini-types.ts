export interface paths {
    "/v1alpha/{model}:batchEmbedContents": {
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
        /** @description Generates multiple embedding vectors from the input `Content` which consists of a batch of strings represented as `EmbedContentRequest` objects. */
        post: operations["generativelanguage.models.batchEmbedContents"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:batchEmbedText": {
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
        /** @description Generates multiple embeddings from the model given input text in a synchronous call. */
        post: operations["generativelanguage.models.batchEmbedText"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:countMessageTokens": {
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
        /** @description Runs a model's tokenizer on a string and returns the token count. */
        post: operations["generativelanguage.models.countMessageTokens"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:countTextTokens": {
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
        /** @description Runs a model's tokenizer on a text and returns the token count. */
        post: operations["generativelanguage.models.countTextTokens"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:countTokens": {
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
        /** @description Runs a model's tokenizer on input `Content` and returns the token count. Refer to the [tokens guide](https://ai.google.dev/gemini-api/docs/tokens) to learn more about tokens. */
        post: operations["generativelanguage.models.countTokens"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
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
    "/v1alpha/{model}:embedText": {
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
        /** @description Generates an embedding from the model given an input message. */
        post: operations["generativelanguage.models.embedText"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:generateAnswer": {
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
        /** @description Generates a grounded answer from the model given an input `GenerateAnswerRequest`. */
        post: operations["generativelanguage.models.generateAnswer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:generateContent": {
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
        /** @description Generates a model response given an input `GenerateContentRequest`. Refer to the [text generation guide](https://ai.google.dev/gemini-api/docs/text-generation) for detailed usage information. Input capabilities differ between models, including tuned models. Refer to the [model guide](https://ai.google.dev/gemini-api/docs/models/gemini) and [tuning guide](https://ai.google.dev/gemini-api/docs/model-tuning) for details. */
        post: operations["generativelanguage.tunedModels.generateContent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:generateMessage": {
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
        /** @description Generates a response from the model given an input `MessagePrompt`. */
        post: operations["generativelanguage.models.generateMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:generateText": {
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
        /** @description Generates a response from the model given an input message. */
        post: operations["generativelanguage.tunedModels.generateText"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:predict": {
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
        /** @description Performs a prediction request. */
        post: operations["generativelanguage.models.predict"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{model}:predictLongRunning": {
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
        /** @description Same as Predict but returns an LRO. */
        post: operations["generativelanguage.models.predictLongRunning"];
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
    "/v1alpha/{name}": {
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
        /** @description Gets information about a specific Permission. */
        get: operations["generativelanguage.tunedModels.permissions.get"];
        put?: never;
        post?: never;
        /** @description Deletes the permission. */
        delete: operations["generativelanguage.tunedModels.permissions.delete"];
        options?: never;
        head?: never;
        /** @description Updates the permission. */
        patch: operations["generativelanguage.tunedModels.permissions.patch"];
        trace?: never;
    };
    "/v1alpha/{name}:query": {
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
        /** @description Performs semantic search over a `Document`. */
        post: operations["generativelanguage.corpora.documents.query"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{name}:transferOwnership": {
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
        /** @description Transfers ownership of the tuned model. This is the only way to change ownership of the tuned model. The current owner will be downgraded to writer role. */
        post: operations["generativelanguage.tunedModels.transferOwnership"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{name}/operations": {
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
        /** @description Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
        get: operations["generativelanguage.tunedModels.operations.list"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{parent}/chunks": {
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
        /** @description Lists all `Chunk`s in a `Document`. */
        get: operations["generativelanguage.corpora.documents.chunks.list"];
        put?: never;
        /** @description Creates a `Chunk`. */
        post: operations["generativelanguage.corpora.documents.chunks.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{parent}/chunks:batchCreate": {
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
        /** @description Batch create `Chunk`s. */
        post: operations["generativelanguage.corpora.documents.chunks.batchCreate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{parent}/chunks:batchDelete": {
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
        /** @description Batch delete `Chunk`s. */
        post: operations["generativelanguage.corpora.documents.chunks.batchDelete"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{parent}/chunks:batchUpdate": {
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
        /** @description Batch update `Chunk`s. */
        post: operations["generativelanguage.corpora.documents.chunks.batchUpdate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{parent}/documents": {
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
        /** @description Lists all `Document`s in a `Corpus`. */
        get: operations["generativelanguage.corpora.documents.list"];
        put?: never;
        /** @description Creates an empty `Document`. */
        post: operations["generativelanguage.corpora.documents.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/{parent}/permissions": {
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
        /** @description Lists permissions for the specific resource. */
        get: operations["generativelanguage.tunedModels.permissions.list"];
        put?: never;
        /** @description Create a permission to a specific resource. */
        post: operations["generativelanguage.tunedModels.permissions.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/cachedContents": {
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
        /** @description Lists CachedContents. */
        get: operations["generativelanguage.cachedContents.list"];
        put?: never;
        /** @description Creates CachedContent resource. */
        post: operations["generativelanguage.cachedContents.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/corpora": {
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
        /** @description Lists all `Corpora` owned by the user. */
        get: operations["generativelanguage.corpora.list"];
        put?: never;
        /** @description Creates an empty `Corpus`. */
        post: operations["generativelanguage.corpora.create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/files": {
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
        /** @description Lists the metadata for `File`s owned by the requesting project. */
        get: operations["generativelanguage.files.list"];
        put?: never;
        /** @description Creates a `File`. */
        post: operations["generativelanguage.media.upload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1alpha/generatedFiles": {
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
        /** @description Lists the generated files owned by the requesting project. */
        get: operations["generativelanguage.generatedFiles.list"];
        put?: never;
        post?: never;
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
        /** @description Lists created tuned models. */
        get: operations["generativelanguage.tunedModels.list"];
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
        /** @description Request to batch create `Chunk`s. */
        BatchCreateChunksRequest: {
            /** @description Required. The request messages specifying the `Chunk`s to create. A maximum of 100 `Chunk`s can be created in a batch. */
            requests?: components["schemas"]["CreateChunkRequest"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `BatchCreateChunks` containing a list of created `Chunk`s. */
        BatchCreateChunksResponse: {
            /** @description `Chunk`s created. */
            chunks?: components["schemas"]["Chunk"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Request to batch delete `Chunk`s. */
        BatchDeleteChunksRequest: {
            /** @description Required. The request messages specifying the `Chunk`s to delete. */
            requests?: components["schemas"]["DeleteChunkRequest"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Batch request to get embeddings from the model for a list of prompts. */
        BatchEmbedContentsRequest: {
            /** @description Required. Embed requests for the batch. The model in each of these requests must match the model specified `BatchEmbedContentsRequest.model`. */
            requests?: components["schemas"]["EmbedContentRequest"][];
        } & {
            [key: string]: unknown;
        };
        /** @description The response to a `BatchEmbedContentsRequest`. */
        BatchEmbedContentsResponse: {
            /** @description Output only. The embeddings for each request, in the same order as provided in the batch request. */
            readonly embeddings?: components["schemas"]["ContentEmbedding"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Batch request to get a text embedding from the model. */
        BatchEmbedTextRequest: {
            /** @description Optional. Embed requests for the batch. Only one of `texts` or `requests` can be set. */
            requests?: components["schemas"]["EmbedTextRequest"][];
            /** @description Optional. The free-form input texts that the model will turn into an embedding. The current limit is 100 texts, over which an error will be thrown. */
            texts?: string[];
        } & {
            [key: string]: unknown;
        };
        /** @description The response to a EmbedTextRequest. */
        BatchEmbedTextResponse: {
            /** @description Output only. The embeddings generated from the input text. */
            readonly embeddings?: components["schemas"]["Embedding"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Request to batch update `Chunk`s. */
        BatchUpdateChunksRequest: {
            /** @description Required. The request messages specifying the `Chunk`s to update. A maximum of 100 `Chunk`s can be updated in a batch. */
            requests?: components["schemas"]["UpdateChunkRequest"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `BatchUpdateChunks` containing a list of updated `Chunk`s. */
        BatchUpdateChunksResponse: {
            /** @description `Chunk`s updated. */
            chunks?: components["schemas"]["Chunk"][];
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
        /** @description Content that has been preprocessed and can be used in subsequent request to GenerativeService. Cached content can be only used with model it was created for. */
        CachedContent: {
            /** @description Optional. Input only. Immutable. The content to cache. */
            contents?: components["schemas"]["Content"][];
            /**
             * Format: google-datetime
             * @description Output only. Creation time of the cache entry.
             */
            readonly createTime?: string;
            /** @description Optional. Immutable. The user-generated meaningful display name of the cached content. Maximum 128 Unicode characters. */
            displayName?: string;
            /**
             * Format: google-datetime
             * @description Timestamp in UTC of when this resource is considered expired. This is *always* provided on output, regardless of what was sent on input.
             */
            expireTime?: string;
            /** @description Required. Immutable. The name of the `Model` to use for cached content Format: `models/{model}` */
            model?: string;
            /** @description Optional. Identifier. The resource name referring to the cached content. Format: `cachedContents/{id}` */
            name?: string;
            /** @description Optional. Input only. Immutable. Developer set system instruction. Currently text only. */
            systemInstruction?: components["schemas"]["Content"];
            /** @description Optional. Input only. Immutable. Tool config. This config is shared for all tools. */
            toolConfig?: components["schemas"]["ToolConfig"];
            /** @description Optional. Input only. Immutable. A list of `Tools` the model may use to generate the next response */
            tools?: components["schemas"]["Tool"][];
            /**
             * Format: google-duration
             * @description Input only. New TTL for this resource, input only.
             */
            ttl?: string;
            /**
             * Format: google-datetime
             * @description Output only. When the cache entry was last updated in UTC time.
             */
            readonly updateTime?: string;
            /** @description Output only. Metadata on the usage of the cached content. */
            readonly usageMetadata?: components["schemas"]["CachedContentUsageMetadata"];
        } & {
            [key: string]: unknown;
        };
        /** @description Metadata on the usage of the cached content. */
        CachedContentUsageMetadata: {
            /**
             * Format: int32
             * @description Total number of tokens that the cached content consumes.
             */
            totalTokenCount?: number;
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
        } & {
            [key: string]: unknown;
        };
        /** @description A `Chunk` is a subpart of a `Document` that is treated as an independent unit for the purposes of vector representation and storage. A `Corpus` can have a maximum of 1 million `Chunk`s. */
        Chunk: {
            /**
             * Format: google-datetime
             * @description Output only. The Timestamp of when the `Chunk` was created.
             */
            readonly createTime?: string;
            /** @description Optional. User provided custom metadata stored as key-value pairs. The maximum number of `CustomMetadata` per chunk is 20. */
            customMetadata?: components["schemas"]["CustomMetadata"][];
            /** @description Required. The content for the `Chunk`, such as the text string. The maximum number of tokens per chunk is 2043. */
            data?: components["schemas"]["ChunkData"];
            /** @description Immutable. Identifier. The `Chunk` resource name. The ID (name excluding the "corpora/*\/documents/*\/chunks/" prefix) can contain up to 40 characters that are lowercase alphanumeric or dashes (-). The ID cannot start or end with a dash. If the name is empty on create, a random 12-character unique ID will be generated. Example: `corpora/{corpus_id}/documents/{document_id}/chunks/123a456b789c` */
            name?: string;
            /**
             * @description Output only. Current state of the `Chunk`.
             * @enum {string}
             */
            readonly state?: "STATE_UNSPECIFIED" | "STATE_PENDING_PROCESSING" | "STATE_ACTIVE" | "STATE_FAILED";
            /**
             * Format: google-datetime
             * @description Output only. The Timestamp of when the `Chunk` was last updated.
             */
            readonly updateTime?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Extracted data that represents the `Chunk` content. */
        ChunkData: {
            /** @description The `Chunk` content as a string. The maximum number of tokens per chunk is 2043. */
            stringValue?: string;
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
        /** @description Filter condition applicable to a single key. */
        Condition: {
            /**
             * Format: float
             * @description The numeric value to filter the metadata on.
             */
            numericValue?: number;
            /**
             * @description Required. Operator applied to the given key-value pair to trigger the condition.
             * @enum {string}
             */
            operation?: "OPERATOR_UNSPECIFIED" | "LESS" | "LESS_EQUAL" | "EQUAL" | "GREATER_EQUAL" | "GREATER" | "NOT_EQUAL" | "INCLUDES" | "EXCLUDES";
            /** @description The string value to filter the metadata on. */
            stringValue?: string;
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
        /** @description Content filtering metadata associated with processing a single request. ContentFilter contains a reason and an optional supporting string. The reason may be unspecified. */
        ContentFilter: {
            /** @description A string that describes the filtering behavior in more detail. */
            message?: string;
            /**
             * @description The reason content was blocked during request processing.
             * @enum {string}
             */
            reason?: "BLOCKED_REASON_UNSPECIFIED" | "SAFETY" | "OTHER";
        } & {
            [key: string]: unknown;
        };
        /** @description A `Corpus` is a collection of `Document`s. A project can create up to 5 corpora. */
        Corpus: {
            /**
             * Format: google-datetime
             * @description Output only. The Timestamp of when the `Corpus` was created.
             */
            readonly createTime?: string;
            /** @description Optional. The human-readable display name for the `Corpus`. The display name must be no more than 512 characters in length, including spaces. Example: "Docs on Semantic Retriever" */
            displayName?: string;
            /** @description Immutable. Identifier. The `Corpus` resource name. The ID (name excluding the "corpora/" prefix) can contain up to 40 characters that are lowercase alphanumeric or dashes (-). The ID cannot start or end with a dash. If the name is empty on create, a unique name will be derived from `display_name` along with a 12 character random suffix. Example: `corpora/my-awesome-corpora-123a456b789c` */
            name?: string;
            /**
             * Format: google-datetime
             * @description Output only. The Timestamp of when the `Corpus` was last updated.
             */
            readonly updateTime?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Counts the number of tokens in the `prompt` sent to a model. Models may tokenize text differently, so each model may return a different `token_count`. */
        CountMessageTokensRequest: {
            /** @description Required. The prompt, whose token count is to be returned. */
            prompt?: components["schemas"]["MessagePrompt"];
        } & {
            [key: string]: unknown;
        };
        /** @description A response from `CountMessageTokens`. It returns the model's `token_count` for the `prompt`. */
        CountMessageTokensResponse: {
            /**
             * Format: int32
             * @description The number of tokens that the `model` tokenizes the `prompt` into. Always non-negative.
             */
            tokenCount?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Counts the number of tokens in the `prompt` sent to a model. Models may tokenize text differently, so each model may return a different `token_count`. */
        CountTextTokensRequest: {
            /** @description Required. The free-form input text given to the model as a prompt. */
            prompt?: components["schemas"]["TextPrompt"];
        } & {
            [key: string]: unknown;
        };
        /** @description A response from `CountTextTokens`. It returns the model's `token_count` for the `prompt`. */
        CountTextTokensResponse: {
            /**
             * Format: int32
             * @description The number of tokens that the `model` tokenizes the `prompt` into. Always non-negative.
             */
            tokenCount?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Counts the number of tokens in the `prompt` sent to a model. Models may tokenize text differently, so each model may return a different `token_count`. */
        CountTokensRequest: {
            /** @description Optional. The input given to the model as a prompt. This field is ignored when `generate_content_request` is set. */
            contents?: components["schemas"]["Content"][];
            /** @description Optional. The overall input given to the `Model`. This includes the prompt as well as other model steering information like [system instructions](https://ai.google.dev/gemini-api/docs/system-instructions), and/or function declarations for [function calling](https://ai.google.dev/gemini-api/docs/function-calling). `Model`s/`Content`s and `generate_content_request`s are mutually exclusive. You can either send `Model` + `Content`s or a `generate_content_request`, but never both. */
            generateContentRequest?: components["schemas"]["GenerateContentRequest"];
        } & {
            [key: string]: unknown;
        };
        /** @description A response from `CountTokens`. It returns the model's `token_count` for the `prompt`. */
        CountTokensResponse: {
            /**
             * Format: int32
             * @description Number of tokens in the cached part of the prompt (the cached content).
             */
            cachedContentTokenCount?: number;
            /** @description Output only. List of modalities that were processed in the request input. */
            readonly promptTokensDetails?: components["schemas"]["ModalityTokenCount"][];
            /**
             * Format: int32
             * @description The number of tokens that the `Model` tokenizes the `prompt` into. Always non-negative.
             */
            totalTokens?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Request to create a `Chunk`. */
        CreateChunkRequest: {
            /** @description Required. The `Chunk` to create. */
            chunk?: components["schemas"]["Chunk"];
            /** @description Required. The name of the `Document` where this `Chunk` will be created. Example: `corpora/my-corpus-123/documents/the-doc-abc` */
            parent?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Request for `CreateFile`. */
        CreateFileRequest: {
            /** @description Optional. Metadata for the file to create. */
            file?: components["schemas"]["File"];
        } & {
            [key: string]: unknown;
        };
        /** @description Response for `CreateFile`. */
        CreateFileResponse: {
            /** @description Metadata for the created file. */
            file?: components["schemas"]["File"];
        } & {
            [key: string]: unknown;
        };
        /** @description User provided metadata stored as key-value pairs. */
        CustomMetadata: {
            /** @description Required. The key of the metadata to store. */
            key?: string;
            /**
             * Format: float
             * @description The numeric value of the metadata to store.
             */
            numericValue?: number;
            /** @description The StringList value of the metadata to store. */
            stringListValue?: components["schemas"]["StringList"];
            /** @description The string value of the metadata to store. */
            stringValue?: string;
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
        /** @description Request to delete a `Chunk`. */
        DeleteChunkRequest: {
            /** @description Required. The resource name of the `Chunk` to delete. Example: `corpora/my-corpus-123/documents/the-doc-abc/chunks/some-chunk` */
            name?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description A `Document` is a collection of `Chunk`s. A `Corpus` can have a maximum of 10,000 `Document`s. */
        Document: {
            /**
             * Format: google-datetime
             * @description Output only. The Timestamp of when the `Document` was created.
             */
            readonly createTime?: string;
            /** @description Optional. User provided custom metadata stored as key-value pairs used for querying. A `Document` can have a maximum of 20 `CustomMetadata`. */
            customMetadata?: components["schemas"]["CustomMetadata"][];
            /** @description Optional. The human-readable display name for the `Document`. The display name must be no more than 512 characters in length, including spaces. Example: "Semantic Retriever Documentation" */
            displayName?: string;
            /** @description Immutable. Identifier. The `Document` resource name. The ID (name excluding the "corpora/*\/documents/" prefix) can contain up to 40 characters that are lowercase alphanumeric or dashes (-). The ID cannot start or end with a dash. If the name is empty on create, a unique name will be derived from `display_name` along with a 12 character random suffix. Example: `corpora/{corpus_id}/documents/my-awesome-doc-123a456b789c` */
            name?: string;
            /**
             * Format: google-datetime
             * @description Output only. The Timestamp of when the `Document` was last updated.
             */
            readonly updateTime?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Response for `DownloadFile`. */
        DownloadFileResponse: Record<string, never>;
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
             * @description Optional. Optional task type for which the embeddings will be used. Can only be set for `models/embedding-001`.
             * @enum {string}
             */
            taskType?: "TASK_TYPE_UNSPECIFIED" | "RETRIEVAL_QUERY" | "RETRIEVAL_DOCUMENT" | "SEMANTIC_SIMILARITY" | "CLASSIFICATION" | "CLUSTERING" | "QUESTION_ANSWERING" | "FACT_VERIFICATION";
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
        /** @description A list of floats representing the embedding. */
        Embedding: {
            /** @description The embedding values. */
            value?: number[];
        } & {
            [key: string]: unknown;
        };
        /** @description Request to get a text embedding from the model. */
        EmbedTextRequest: {
            /** @description Required. The model name to use with the format model=models/{model}. */
            model?: string;
            /** @description Optional. The free-form input text that the model will turn into an embedding. */
            text?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description The response to a EmbedTextRequest. */
        EmbedTextResponse: {
            /** @description Output only. The embedding generated from the input text. */
            readonly embedding?: components["schemas"]["Embedding"];
        } & {
            [key: string]: unknown;
        };
        /** @description A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
        Empty: Record<string, never>;
        /** @description An input/output example used to instruct the Model. It demonstrates how the model should respond or format its response. */
        Example: {
            /** @description Required. An example of an input `Message` from the user. */
            input?: components["schemas"]["Message"];
            /** @description Required. An example of what the model should output given the input. */
            output?: components["schemas"]["Message"];
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
        /** @description A file uploaded to the API. Next ID: 15 */
        File: {
            /**
             * Format: google-datetime
             * @description Output only. The timestamp of when the `File` was created.
             */
            readonly createTime?: string;
            /** @description Optional. The human-readable display name for the `File`. The display name must be no more than 512 characters in length, including spaces. Example: "Welcome Image" */
            displayName?: string;
            /** @description Output only. The download uri of the `File`. */
            readonly downloadUri?: string;
            /** @description Output only. Error status if File processing failed. */
            readonly error?: components["schemas"]["Status"];
            /**
             * Format: google-datetime
             * @description Output only. The timestamp of when the `File` will be deleted. Only set if the `File` is scheduled to expire.
             */
            readonly expirationTime?: string;
            /** @description Output only. MIME type of the file. */
            readonly mimeType?: string;
            /** @description Immutable. Identifier. The `File` resource name. The ID (name excluding the "files/" prefix) can contain up to 40 characters that are lowercase alphanumeric or dashes (-). The ID cannot start or end with a dash. If the name is empty on create, a unique name will be generated. Example: `files/123-456` */
            name?: string;
            /**
             * Format: byte
             * @description Output only. SHA-256 hash of the uploaded bytes.
             */
            readonly sha256Hash?: string;
            /**
             * Format: int64
             * @description Output only. Size of the file in bytes.
             */
            readonly sizeBytes?: string;
            /**
             * @description Source of the File.
             * @enum {string}
             */
            source?: "SOURCE_UNSPECIFIED" | "UPLOADED" | "GENERATED";
            /**
             * @description Output only. Processing state of the File.
             * @enum {string}
             */
            readonly state?: "STATE_UNSPECIFIED" | "PROCESSING" | "ACTIVE" | "FAILED";
            /**
             * Format: google-datetime
             * @description Output only. The timestamp of when the `File` was last updated.
             */
            readonly updateTime?: string;
            /** @description Output only. The uri of the `File`. */
            readonly uri?: string;
            /** @description Output only. Metadata for a video. */
            readonly videoMetadata?: components["schemas"]["VideoMetadata"];
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
            mode?: "MODE_UNSPECIFIED" | "AUTO" | "ANY" | "NONE";
        } & {
            [key: string]: unknown;
        };
        /** @description Structured representation of a function declaration as defined by the [OpenAPI 3.03 specification](https://spec.openapis.org/oas/v3.0.3). Included in this declaration are the function name and parameters. This FunctionDeclaration is a representation of a block of code that can be used as a `Tool` by the model and executed by the client. */
        FunctionDeclaration: {
            /** @description Required. A brief description of the function. */
            description?: string;
            /** @description Required. The name of the function. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 63. */
            name?: string;
            /** @description Optional. Describes the parameters to this function. Reflects the Open API 3.03 Parameter Object string Key: the name of the parameter. Parameter names are case sensitive. Schema Value: the Schema defining the type used for the parameter. */
            parameters?: components["schemas"]["Schema"];
            /** @description Optional. Describes the output from this function in JSON Schema format. Reflects the Open API 3.03 Response Object. The Schema defines the type used for the response value of the function. */
            response?: components["schemas"]["Schema"];
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
        } & {
            [key: string]: unknown;
        };
        /** @description Request to generate a grounded answer from the `Model`. */
        GenerateAnswerRequest: {
            /**
             * @description Required. Style in which answers should be returned.
             * @enum {string}
             */
            answerStyle?: "ANSWER_STYLE_UNSPECIFIED" | "ABSTRACTIVE" | "EXTRACTIVE" | "VERBOSE";
            /** @description Required. The content of the current conversation with the `Model`. For single-turn queries, this is a single question to answer. For multi-turn queries, this is a repeated field that contains conversation history and the last `Content` in the list containing the question. Note: `GenerateAnswer` only supports queries in English. */
            contents?: components["schemas"]["Content"][];
            /** @description Passages provided inline with the request. */
            inlinePassages?: components["schemas"]["GroundingPassages"];
            /** @description Optional. A list of unique `SafetySetting` instances for blocking unsafe content. This will be enforced on the `GenerateAnswerRequest.contents` and `GenerateAnswerResponse.candidate`. There should not be more than one setting for each `SafetyCategory` type. The API will block any contents and responses that fail to meet the thresholds set by these settings. This list overrides the default settings for each `SafetyCategory` specified in the safety_settings. If there is no `SafetySetting` for a given `SafetyCategory` provided in the list, the API will use the default safety setting for that category. Harm categories HARM_CATEGORY_HATE_SPEECH, HARM_CATEGORY_SEXUALLY_EXPLICIT, HARM_CATEGORY_DANGEROUS_CONTENT, HARM_CATEGORY_HARASSMENT are supported. Refer to the [guide](https://ai.google.dev/gemini-api/docs/safety-settings) for detailed information on available safety settings. Also refer to the [Safety guidance](https://ai.google.dev/gemini-api/docs/safety-guidance) to learn how to incorporate safety considerations in your AI applications. */
            safetySettings?: components["schemas"]["SafetySetting"][];
            /** @description Content retrieved from resources created via the Semantic Retriever API. */
            semanticRetriever?: components["schemas"]["SemanticRetrieverConfig"];
            /**
             * Format: float
             * @description Optional. Controls the randomness of the output. Values can range from [0.0,1.0], inclusive. A value closer to 1.0 will produce responses that are more varied and creative, while a value closer to 0.0 will typically result in more straightforward responses from the model. A low temperature (~0.2) is usually recommended for Attributed-Question-Answering use cases.
             */
            temperature?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Response from the model for a grounded answer. */
        GenerateAnswerResponse: {
            /** @description Candidate answer from the model. Note: The model *always* attempts to provide a grounded answer, even when the answer is unlikely to be answerable from the given passages. In that case, a low-quality or ungrounded answer may be provided, along with a low `answerable_probability`. */
            answer?: components["schemas"]["Candidate"];
            /**
             * Format: float
             * @description Output only. The model's estimate of the probability that its answer is correct and grounded in the input passages. A low `answerable_probability` indicates that the answer might not be grounded in the sources. When `answerable_probability` is low, you may want to: * Display a message to the effect of "We couldn’t answer that question" to the user. * Fall back to a general-purpose LLM that answers the question from world knowledge. The threshold and nature of such fallbacks will depend on individual use cases. `0.5` is a good starting threshold.
             */
            readonly answerableProbability?: number;
            /** @description Output only. Feedback related to the input data used to answer the question, as opposed to the model-generated response to the question. The input data can be one or more of the following: - Question specified by the last entry in `GenerateAnswerRequest.content` - Conversation history specified by the other entries in `GenerateAnswerRequest.content` - Grounding sources (`GenerateAnswerRequest.semantic_retriever` or `GenerateAnswerRequest.inline_passages`) */
            readonly inputFeedback?: components["schemas"]["InputFeedback"];
        } & {
            [key: string]: unknown;
        };
        /** @description Request to generate a completion from the model. */
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
            /** @description Output only. Metadata on the generation requests' token usage. */
            readonly usageMetadata?: components["schemas"]["UsageMetadata"];
        } & {
            [key: string]: unknown;
        };
        /** @description A file generated on behalf of a user. */
        GeneratedFile: {
            /** @description Error details if the GeneratedFile ends up in the STATE_FAILED state. */
            error?: components["schemas"]["Status"];
            /** @description MIME type of the generatedFile. */
            mimeType?: string;
            /** @description Identifier. The name of the generated file. Example: `generatedFiles/abc-123` */
            name?: string;
            /**
             * @description Output only. The state of the GeneratedFile.
             * @enum {string}
             */
            readonly state?: "STATE_UNSPECIFIED" | "GENERATING" | "GENERATED" | "FAILED";
        } & {
            [key: string]: unknown;
        };
        /** @description Request to generate a message response from the model. */
        GenerateMessageRequest: {
            /**
             * Format: int32
             * @description Optional. The number of generated response messages to return. This value must be between `[1, 8]`, inclusive. If unset, this will default to `1`.
             */
            candidateCount?: number;
            /** @description Required. The structured textual input given to the model as a prompt. Given a prompt, the model will return what it predicts is the next message in the discussion. */
            prompt?: components["schemas"]["MessagePrompt"];
            /**
             * Format: float
             * @description Optional. Controls the randomness of the output. Values can range over `[0.0,1.0]`, inclusive. A value closer to `1.0` will produce responses that are more varied, while a value closer to `0.0` will typically result in less surprising responses from the model.
             */
            temperature?: number;
            /**
             * Format: int32
             * @description Optional. The maximum number of tokens to consider when sampling. The model uses combined Top-k and nucleus sampling. Top-k sampling considers the set of `top_k` most probable tokens.
             */
            topK?: number;
            /**
             * Format: float
             * @description Optional. The maximum cumulative probability of tokens to consider when sampling. The model uses combined Top-k and nucleus sampling. Nucleus sampling considers the smallest set of tokens whose probability sum is at least `top_p`.
             */
            topP?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description The response from the model. This includes candidate messages and conversation history in the form of chronologically-ordered messages. */
        GenerateMessageResponse: {
            /** @description Candidate response messages from the model. */
            candidates?: components["schemas"]["Message"][];
            /** @description A set of content filtering metadata for the prompt and response text. This indicates which `SafetyCategory`(s) blocked a candidate from this response, the lowest `HarmProbability` that triggered a block, and the HarmThreshold setting for that category. */
            filters?: components["schemas"]["ContentFilter"][];
            /** @description The conversation history used by the model. */
            messages?: components["schemas"]["Message"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Request to generate a text completion response from the model. */
        GenerateTextRequest: {
            /**
             * Format: int32
             * @description Optional. Number of generated responses to return. This value must be between [1, 8], inclusive. If unset, this will default to 1.
             */
            candidateCount?: number;
            /**
             * Format: int32
             * @description Optional. The maximum number of tokens to include in a candidate. If unset, this will default to output_token_limit specified in the `Model` specification.
             */
            maxOutputTokens?: number;
            /** @description Required. The free-form input text given to the model as a prompt. Given a prompt, the model will generate a TextCompletion response it predicts as the completion of the input text. */
            prompt?: components["schemas"]["TextPrompt"];
            /** @description Optional. A list of unique `SafetySetting` instances for blocking unsafe content. that will be enforced on the `GenerateTextRequest.prompt` and `GenerateTextResponse.candidates`. There should not be more than one setting for each `SafetyCategory` type. The API will block any prompts and responses that fail to meet the thresholds set by these settings. This list overrides the default settings for each `SafetyCategory` specified in the safety_settings. If there is no `SafetySetting` for a given `SafetyCategory` provided in the list, the API will use the default safety setting for that category. Harm categories HARM_CATEGORY_DEROGATORY, HARM_CATEGORY_TOXICITY, HARM_CATEGORY_VIOLENCE, HARM_CATEGORY_SEXUAL, HARM_CATEGORY_MEDICAL, HARM_CATEGORY_DANGEROUS are supported in text service. */
            safetySettings?: components["schemas"]["SafetySetting"][];
            /** @description The set of character sequences (up to 5) that will stop output generation. If specified, the API will stop at the first appearance of a stop sequence. The stop sequence will not be included as part of the response. */
            stopSequences?: string[];
            /**
             * Format: float
             * @description Optional. Controls the randomness of the output. Note: The default value varies by model, see the `Model.temperature` attribute of the `Model` returned the `getModel` function. Values can range from [0.0,1.0], inclusive. A value closer to 1.0 will produce responses that are more varied and creative, while a value closer to 0.0 will typically result in more straightforward responses from the model.
             */
            temperature?: number;
            /**
             * Format: int32
             * @description Optional. The maximum number of tokens to consider when sampling. The model uses combined Top-k and nucleus sampling. Top-k sampling considers the set of `top_k` most probable tokens. Defaults to 40. Note: The default value varies by model, see the `Model.top_k` attribute of the `Model` returned the `getModel` function.
             */
            topK?: number;
            /**
             * Format: float
             * @description Optional. The maximum cumulative probability of tokens to consider when sampling. The model uses combined Top-k and nucleus sampling. Tokens are sorted based on their assigned probabilities so that only the most likely tokens are considered. Top-k sampling directly limits the maximum number of tokens to consider, while Nucleus sampling limits number of tokens based on the cumulative probability. Note: The default value varies by model, see the `Model.top_p` attribute of the `Model` returned the `getModel` function.
             */
            topP?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description The response from the model, including candidate completions. */
        GenerateTextResponse: {
            /** @description Candidate responses from the model. */
            candidates?: components["schemas"]["TextCompletion"][];
            /** @description A set of content filtering metadata for the prompt and response text. This indicates which `SafetyCategory`(s) blocked a candidate from this response, the lowest `HarmProbability` that triggered a block, and the HarmThreshold setting for that category. This indicates the smallest change to the `SafetySettings` that would be necessary to unblock at least 1 response. The blocking is configured by the `SafetySettings` in the request (or the default `SafetySettings` of the API). */
            filters?: components["schemas"]["ContentFilter"][];
            /** @description Returns any safety feedback related to content filtering. */
            safetyFeedback?: components["schemas"]["SafetyFeedback"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Configuration options for model generation and outputs. Not all parameters are configurable for every model. */
        GenerationConfig: {
            /**
             * Format: int32
             * @description Optional. Number of generated responses to return. Currently, this value can only be set to 1. If unset, this will default to 1.
             */
            candidateCount?: number;
            /** @description Optional. Enables enhanced civic answers. It may not be available for all models. */
            enableEnhancedCivicAnswers?: boolean;
            /**
             * Format: float
             * @description Optional. Frequency penalty applied to the next token's logprobs, multiplied by the number of times each token has been seen in the respponse so far. A positive penalty will discourage the use of tokens that have already been used, proportional to the number of times the token has been used: The more a token is used, the more dificult it is for the model to use that token again increasing the vocabulary of responses. Caution: A _negative_ penalty will encourage the model to reuse tokens proportional to the number of times the token has been used. Small negative values will reduce the vocabulary of a response. Larger negative values will cause the model to start repeating a common token until it hits the max_output_tokens limit.
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
        GoogleSearch: Record<string, never>;
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
        /** @description Passage included inline with a grounding configuration. */
        GroundingPassage: {
            /** @description Content of the passage. */
            content?: components["schemas"]["Content"];
            /** @description Identifier for the passage for attributing this passage in grounded answers. */
            id?: string;
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
        /** @description A repeated list of passages. */
        GroundingPassages: {
            /** @description List of passages. */
            passages?: components["schemas"]["GroundingPassage"][];
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
        /** @description Feedback related to the input data used to answer the question, as opposed to the model-generated response to the question. */
        InputFeedback: {
            /**
             * @description Optional. If set, the input was blocked and no candidates are returned. Rephrase the input.
             * @enum {string}
             */
            blockReason?: "BLOCK_REASON_UNSPECIFIED" | "SAFETY" | "OTHER";
            /** @description Ratings for safety of the input. There is at most one rating per category. */
            safetyRatings?: components["schemas"]["SafetyRating"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Response with CachedContents list. */
        ListCachedContentsResponse: {
            /** @description List of cached contents. */
            cachedContents?: components["schemas"]["CachedContent"][];
            /** @description A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
            nextPageToken?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `ListChunks` containing a paginated list of `Chunk`s. The `Chunk`s are sorted by ascending `chunk.create_time`. */
        ListChunksResponse: {
            /** @description The returned `Chunk`s. */
            chunks?: components["schemas"]["Chunk"][];
            /** @description A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages. */
            nextPageToken?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `ListCorpora` containing a paginated list of `Corpora`. The results are sorted by ascending `corpus.create_time`. */
        ListCorporaResponse: {
            /** @description The returned corpora. */
            corpora?: components["schemas"]["Corpus"][];
            /** @description A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages. */
            nextPageToken?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `ListDocuments` containing a paginated list of `Document`s. The `Document`s are sorted by ascending `document.create_time`. */
        ListDocumentsResponse: {
            /** @description The returned `Document`s. */
            documents?: components["schemas"]["Document"][];
            /** @description A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages. */
            nextPageToken?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Response for `ListFiles`. */
        ListFilesResponse: {
            /** @description The list of `File`s. */
            files?: components["schemas"]["File"][];
            /** @description A token that can be sent as a `page_token` into a subsequent `ListFiles` call. */
            nextPageToken?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Response for `ListGeneratedFiles`. */
        ListGeneratedFilesResponse: {
            /** @description The list of `GeneratedFile`s. */
            generatedFiles?: components["schemas"]["GeneratedFile"][];
            /** @description A token that can be sent as a `page_token` into a subsequent `ListGeneratedFiles` call. */
            nextPageToken?: string;
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
        /** @description The response message for Operations.ListOperations. */
        ListOperationsResponse: {
            /** @description The standard List next-page token. */
            nextPageToken?: string;
            /** @description A list of operations that matches the specified filter in the request. */
            operations?: components["schemas"]["Operation"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `ListPermissions` containing a paginated list of permissions. */
        ListPermissionsResponse: {
            /** @description A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages. */
            nextPageToken?: string;
            /** @description Returned permissions. */
            permissions?: components["schemas"]["Permission"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `ListTunedModels` containing a paginated list of Models. */
        ListTunedModelsResponse: {
            /** @description A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no more pages. */
            nextPageToken?: string;
            /** @description The returned Models. */
            tunedModels?: components["schemas"]["TunedModel"][];
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
        /** @description The base unit of structured text. A `Message` includes an `author` and the `content` of the `Message`. The `author` is used to tag messages when they are fed to the model as text. */
        Message: {
            /** @description Optional. The author of this Message. This serves as a key for tagging the content of this Message when it is fed to the model as text. The author can be any alphanumeric string. */
            author?: string;
            /** @description Output only. Citation information for model-generated `content` in this `Message`. If this `Message` was generated as output from the model, this field may be populated with attribution information for any text included in the `content`. This field is used only on output. */
            readonly citationMetadata?: components["schemas"]["CitationMetadata"];
            /** @description Required. The text content of the structured `Message`. */
            content?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description All of the structured input text passed to the model as a prompt. A `MessagePrompt` contains a structured set of fields that provide context for the conversation, examples of user input/model output message pairs that prime the model to respond in different ways, and the conversation history or list of messages representing the alternating turns of the conversation between the user and the model. */
        MessagePrompt: {
            /** @description Optional. Text that should be provided to the model first to ground the response. If not empty, this `context` will be given to the model first before the `examples` and `messages`. When using a `context` be sure to provide it with every request to maintain continuity. This field can be a description of your prompt to the model to help provide context and guide the responses. Examples: "Translate the phrase from English to French." or "Given a statement, classify the sentiment as happy, sad or neutral." Anything included in this field will take precedence over message history if the total input size exceeds the model's `input_token_limit` and the input request is truncated. */
            context?: string;
            /** @description Optional. Examples of what the model should generate. This includes both user input and the response that the model should emulate. These `examples` are treated identically to conversation messages except that they take precedence over the history in `messages`: If the total input size exceeds the model's `input_token_limit` the input will be truncated. Items will be dropped from `messages` before `examples`. */
            examples?: components["schemas"]["Example"][];
            /** @description Required. A snapshot of the recent conversation history sorted chronologically. Turns alternate between two authors. If the total input size exceeds the model's `input_token_limit` the input will be truncated: The oldest items will be dropped from `messages`. */
            messages?: components["schemas"]["Message"][];
        } & {
            [key: string]: unknown;
        };
        /** @description User provided filter to limit retrieval based on `Chunk` or `Document` level metadata values. Example (genre = drama OR genre = action): key = "document.custom_metadata.genre" conditions = [{string_value = "drama", operation = EQUAL}, {string_value = "action", operation = EQUAL}] */
        MetadataFilter: {
            /** @description Required. The `Condition`s for the given key that will trigger this filter. Multiple `Condition`s are joined by logical ORs. */
            conditions?: components["schemas"]["Condition"][];
            /** @description Required. The key of the metadata to filter on. */
            key?: string;
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
        } & {
            [key: string]: unknown;
        };
        /** @description Permission resource grants user, group or the rest of the world access to the PaLM API resource (e.g. a tuned model, corpus). A role is a collection of permitted operations that allows users to perform specific actions on PaLM API resources. To make them available to users, groups, or service accounts, you assign roles. When you assign a role, you grant permissions that the role contains. There are three concentric roles. Each role is a superset of the previous role's permitted operations: - reader can use the resource (e.g. tuned model, corpus) for inference - writer has reader's permissions and additionally can edit and share - owner has writer's permissions and additionally can delete */
        Permission: {
            /** @description Optional. Immutable. The email address of the user of group which this permission refers. Field is not set when permission's grantee type is EVERYONE. */
            emailAddress?: string;
            /**
             * @description Optional. Immutable. The type of the grantee.
             * @enum {string}
             */
            granteeType?: "GRANTEE_TYPE_UNSPECIFIED" | "USER" | "GROUP" | "EVERYONE";
            /** @description Output only. Identifier. The permission name. A unique name will be generated on create. Examples: tunedModels/{tuned_model}/permissions/{permission} corpora/{corpus}/permissions/{permission} Output only. */
            readonly name?: string;
            /**
             * @description Required. The role granted by this permission.
             * @enum {string}
             */
            role?: "ROLE_UNSPECIFIED" | "OWNER" | "WRITER" | "READER";
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
        /** @description Request message for [PredictionService.PredictLongRunning]. */
        PredictLongRunningRequest: {
            /** @description Required. The instances that are the input to the prediction call. */
            instances?: unknown[];
            /** @description Optional. The parameters that govern the prediction call. */
            parameters?: unknown;
        } & {
            [key: string]: unknown;
        };
        /** @description Request message for PredictionService.Predict. */
        PredictRequest: {
            /** @description Required. The instances that are the input to the prediction call. */
            instances?: unknown[];
            /** @description Optional. The parameters that govern the prediction call. */
            parameters?: unknown;
        } & {
            [key: string]: unknown;
        };
        /** @description Response message for [PredictionService.Predict]. */
        PredictResponse: {
            /** @description The outputs of the prediction call. */
            predictions?: unknown[];
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
        /** @description Request for querying a `Corpus`. */
        QueryCorpusRequest: {
            /** @description Optional. Filter for `Chunk` and `Document` metadata. Each `MetadataFilter` object should correspond to a unique key. Multiple `MetadataFilter` objects are joined by logical "AND"s. Example query at document level: (year >= 2020 OR year < 2010) AND (genre = drama OR genre = action) `MetadataFilter` object list: metadata_filters = [ {key = "document.custom_metadata.year" conditions = [{int_value = 2020, operation = GREATER_EQUAL}, {int_value = 2010, operation = LESS}]}, {key = "document.custom_metadata.year" conditions = [{int_value = 2020, operation = GREATER_EQUAL}, {int_value = 2010, operation = LESS}]}, {key = "document.custom_metadata.genre" conditions = [{string_value = "drama", operation = EQUAL}, {string_value = "action", operation = EQUAL}]}] Example query at chunk level for a numeric range of values: (year > 2015 AND year <= 2020) `MetadataFilter` object list: metadata_filters = [ {key = "chunk.custom_metadata.year" conditions = [{int_value = 2015, operation = GREATER}]}, {key = "chunk.custom_metadata.year" conditions = [{int_value = 2020, operation = LESS_EQUAL}]}] Note: "AND"s for the same key are only supported for numeric values. String values only support "OR"s for the same key. */
            metadataFilters?: components["schemas"]["MetadataFilter"][];
            /** @description Required. Query string to perform semantic search. */
            query?: string;
            /**
             * Format: int32
             * @description Optional. The maximum number of `Chunk`s to return. The service may return fewer `Chunk`s. If unspecified, at most 10 `Chunk`s will be returned. The maximum specified result count is 100.
             */
            resultsCount?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `QueryCorpus` containing a list of relevant chunks. */
        QueryCorpusResponse: {
            /** @description The relevant chunks. */
            relevantChunks?: components["schemas"]["RelevantChunk"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Request for querying a `Document`. */
        QueryDocumentRequest: {
            /** @description Optional. Filter for `Chunk` metadata. Each `MetadataFilter` object should correspond to a unique key. Multiple `MetadataFilter` objects are joined by logical "AND"s. Note: `Document`-level filtering is not supported for this request because a `Document` name is already specified. Example query: (year >= 2020 OR year < 2010) AND (genre = drama OR genre = action) `MetadataFilter` object list: metadata_filters = [ {key = "chunk.custom_metadata.year" conditions = [{int_value = 2020, operation = GREATER_EQUAL}, {int_value = 2010, operation = LESS}}, {key = "chunk.custom_metadata.genre" conditions = [{string_value = "drama", operation = EQUAL}, {string_value = "action", operation = EQUAL}}] Example query for a numeric range of values: (year > 2015 AND year <= 2020) `MetadataFilter` object list: metadata_filters = [ {key = "chunk.custom_metadata.year" conditions = [{int_value = 2015, operation = GREATER}]}, {key = "chunk.custom_metadata.year" conditions = [{int_value = 2020, operation = LESS_EQUAL}]}] Note: "AND"s for the same key are only supported for numeric values. String values only support "OR"s for the same key. */
            metadataFilters?: components["schemas"]["MetadataFilter"][];
            /** @description Required. Query string to perform semantic search. */
            query?: string;
            /**
             * Format: int32
             * @description Optional. The maximum number of `Chunk`s to return. The service may return fewer `Chunk`s. If unspecified, at most 10 `Chunk`s will be returned. The maximum specified result count is 100.
             */
            resultsCount?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `QueryDocument` containing a list of relevant chunks. */
        QueryDocumentResponse: {
            /** @description The returned relevant chunks. */
            relevantChunks?: components["schemas"]["RelevantChunk"][];
        } & {
            [key: string]: unknown;
        };
        /** @description The information for a chunk relevant to a query. */
        RelevantChunk: {
            /** @description `Chunk` associated with the query. */
            chunk?: components["schemas"]["Chunk"];
            /**
             * Format: float
             * @description `Chunk` relevance to the query.
             */
            chunkRelevanceScore?: number;
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
        /** @description Safety feedback for an entire request. This field is populated if content in the input and/or response is blocked due to safety settings. SafetyFeedback may not exist for every HarmCategory. Each SafetyFeedback will return the safety settings used by the request as well as the lowest HarmProbability that should be allowed in order to return a result. */
        SafetyFeedback: {
            /** @description Safety rating evaluated from content. */
            rating?: components["schemas"]["SafetyRating"];
            /** @description Safety settings applied to the request. */
            setting?: components["schemas"]["SafetySetting"];
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
            /** @description Optional. A brief description of the parameter. This could contain examples of use. Parameter description may be formatted as Markdown. */
            description?: string;
            /** @description Optional. Possible values of the element of Type.STRING with enum format. For example we can define an Enum Direction as : {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]} */
            enum?: string[];
            /** @description Optional. The format of the data. This is used only for primitive datatypes. Supported formats: for NUMBER type: float, double for INTEGER type: int32, int64 for STRING type: enum */
            format?: string;
            /** @description Optional. Schema of the elements of Type.ARRAY. */
            items?: components["schemas"]["Schema"];
            /**
             * Format: int64
             * @description Optional. Maximum number of the elements for Type.ARRAY.
             */
            maxItems?: string;
            /**
             * Format: int64
             * @description Optional. Minimum number of the elements for Type.ARRAY.
             */
            minItems?: string;
            /** @description Optional. Indicates if the value may be null. */
            nullable?: boolean;
            /** @description Optional. Properties of Type.OBJECT. */
            properties?: {
                [key: string]: components["schemas"]["Schema"];
            };
            /** @description Optional. The order of the properties. Not a standard field in open api spec. Used to determine the order of the properties in the response. */
            propertyOrdering?: string[];
            /** @description Optional. Required properties of Type.OBJECT. */
            required?: string[];
            /**
             * @description Required. Data type.
             * @enum {string}
             */
            type?: "TYPE_UNSPECIFIED" | "STRING" | "NUMBER" | "INTEGER" | "BOOLEAN" | "ARRAY" | "OBJECT";
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
        /** @description Configuration for retrieving grounding content from a `Corpus` or `Document` created using the Semantic Retriever API. */
        SemanticRetrieverConfig: {
            /**
             * Format: int32
             * @description Optional. Maximum number of relevant `Chunk`s to retrieve.
             */
            maxChunksCount?: number;
            /** @description Optional. Filters for selecting `Document`s and/or `Chunk`s from the resource. */
            metadataFilters?: components["schemas"]["MetadataFilter"][];
            /**
             * Format: float
             * @description Optional. Minimum relevance score for retrieved relevant `Chunk`s.
             */
            minimumRelevanceScore?: number;
            /** @description Required. Query to use for matching `Chunk`s in the given resource by similarity. */
            query?: components["schemas"]["Content"];
            /** @description Required. Name of the resource for retrieval. Example: `corpora/123` or `corpora/123/documents/abc`. */
            source?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description The speech generation config. */
        SpeechConfig: {
            /** @description The configuration for the speaker to use. */
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
        /** @description User provided string values assigned to a single metadata key. */
        StringList: {
            /** @description The string values of the metadata to store. */
            values?: string[];
        } & {
            [key: string]: unknown;
        };
        /** @description Output text returned from a model. */
        TextCompletion: {
            /** @description Output only. Citation information for model-generated `output` in this `TextCompletion`. This field may be populated with attribution information for any text included in the `output`. */
            readonly citationMetadata?: components["schemas"]["CitationMetadata"];
            /** @description Output only. The generated text returned from the model. */
            readonly output?: string;
            /** @description Ratings for the safety of a response. There is at most one rating per category. */
            safetyRatings?: components["schemas"]["SafetyRating"][];
        } & {
            [key: string]: unknown;
        };
        /** @description Text given to the model as a prompt. The Model will use this TextPrompt to Generate a text completion. */
        TextPrompt: {
            /** @description Required. The prompt text. */
            text?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Config for thinking features. */
        ThinkingConfig: {
            /** @description Indicates whether to include thoughts in the response. If true, thoughts are returned only when available. */
            includeThoughts?: boolean;
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
        /** @description Request to transfer the ownership of the tuned model. */
        TransferOwnershipRequest: {
            /** @description Required. The email address of the user to whom the tuned model is being transferred to. */
            emailAddress?: string;
        } & {
            [key: string]: unknown;
        };
        /** @description Response from `TransferOwnership`. */
        TransferOwnershipResponse: Record<string, never>;
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
        /** @description Request to update a `Chunk`. */
        UpdateChunkRequest: {
            /** @description Required. The `Chunk` to update. */
            chunk?: components["schemas"]["Chunk"];
            /**
             * Format: google-fieldmask
             * @description Required. The list of fields to update. Currently, this only supports updating `custom_metadata` and `data`.
             */
            updateMask?: string;
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
             * @description Total token count for the generation request (prompt + response candidates).
             */
            totalTokenCount?: number;
        } & {
            [key: string]: unknown;
        };
        /** @description Metadata for a video `File`. */
        VideoMetadata: {
            /**
             * Format: google-duration
             * @description Duration of the video.
             */
            videoDuration?: string;
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
    "generativelanguage.models.batchEmbedContents": {
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
                "application/json": components["schemas"]["BatchEmbedContentsRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BatchEmbedContentsResponse"];
                };
            };
        };
    };
    "generativelanguage.models.batchEmbedText": {
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
                /** @description Required. The name of the `Model` to use for generating the embedding. Examples: models/embedding-gecko-001 */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BatchEmbedTextRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BatchEmbedTextResponse"];
                };
            };
        };
    };
    "generativelanguage.models.countMessageTokens": {
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
                "application/json": components["schemas"]["CountMessageTokensRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CountMessageTokensResponse"];
                };
            };
        };
    };
    "generativelanguage.models.countTextTokens": {
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
                "application/json": components["schemas"]["CountTextTokensRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CountTextTokensResponse"];
                };
            };
        };
    };
    "generativelanguage.models.countTokens": {
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
                "application/json": components["schemas"]["CountTokensRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CountTokensResponse"];
                };
            };
        };
    };
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
    "generativelanguage.models.embedText": {
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
                /** @description Required. The model name to use with the format model=models/{model}. */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["EmbedTextRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmbedTextResponse"];
                };
            };
        };
    };
    "generativelanguage.models.generateAnswer": {
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
                /** @description Required. The name of the `Model` to use for generating the grounded response. Format: `model=models/{model}`. */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["GenerateAnswerRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GenerateAnswerResponse"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.generateContent": {
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
    "generativelanguage.models.generateMessage": {
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
                /** @description Required. The name of the model to use. Format: `name=models/{model}`. */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["GenerateMessageRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GenerateMessageResponse"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.generateText": {
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
                /** @description Required. The name of the `Model` or `TunedModel` to use for generating the completion. Examples: models/text-bison-001 tunedModels/sentence-translator-u3b7m */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["GenerateTextRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GenerateTextResponse"];
                };
            };
        };
    };
    "generativelanguage.models.predict": {
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
                /** @description Required. The name of the model for prediction. Format: `name=models/{model}`. */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PredictRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PredictResponse"];
                };
            };
        };
    };
    "generativelanguage.models.predictLongRunning": {
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
                /** @description Required. The name of the model for prediction. Format: `name=models/{model}`. */
                model: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PredictLongRunningRequest"];
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
    "generativelanguage.tunedModels.permissions.get": {
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
                /** @description Required. The resource name of the permission. Formats: `tunedModels/{tuned_model}/permissions/{permission}` `corpora/{corpus}/permissions/{permission}` */
                name: string;
            };
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
                    "application/json": components["schemas"]["Permission"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.permissions.delete": {
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
                /** @description Optional. If set to true, any `Chunk`s and objects related to this `Document` will also be deleted. If false (the default), a `FAILED_PRECONDITION` error will be returned if `Document` contains any `Chunk`s. */
                force?: boolean;
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
                /** @description Required. The resource name of the permission. Formats: `tunedModels/{tuned_model}/permissions/{permission}` `corpora/{corpus}/permissions/{permission}` */
                name: string;
            };
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
                    "application/json": components["schemas"]["Empty"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.permissions.patch": {
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
                /** @description Required. The list of fields to update. Accepted ones: - role (`Permission.role` field) */
                updateMask?: string;
                /** @description Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: components["parameters"]["upload_protocol"];
                /** @description Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: components["parameters"]["uploadType"];
            };
            header?: never;
            path: {
                /** @description Output only. Identifier. The permission name. A unique name will be generated on create. Examples: tunedModels/{tuned_model}/permissions/{permission} corpora/{corpus}/permissions/{permission} Output only. */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Permission"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Permission"];
                };
            };
        };
    };
    "generativelanguage.corpora.documents.query": {
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
                /** @description Required. The name of the `Document` to query. Example: `corpora/my-corpus-123/documents/the-doc-abc` */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["QueryDocumentRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["QueryDocumentResponse"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.transferOwnership": {
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
                /** @description Required. The resource name of the tuned model to transfer ownership. Format: `tunedModels/my-model-id` */
                name: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["TransferOwnershipRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TransferOwnershipResponse"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.operations.list": {
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
                /** @description The standard list filter. */
                filter?: string;
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description The standard list page size. */
                pageSize?: number;
                /** @description The standard list page token. */
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
            path: {
                /** @description The name of the operation's parent resource. */
                name: string;
            };
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
                    "application/json": components["schemas"]["ListOperationsResponse"];
                };
            };
        };
    };
    "generativelanguage.corpora.documents.chunks.list": {
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
                /** @description Optional. The maximum number of `Chunk`s to return (per page). The service may return fewer `Chunk`s. If unspecified, at most 10 `Chunk`s will be returned. The maximum size limit is 100 `Chunk`s per page. */
                pageSize?: number;
                /** @description Optional. A page token, received from a previous `ListChunks` call. Provide the `next_page_token` returned in the response as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListChunks` must match the call that provided the page token. */
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
            path: {
                /** @description Required. The name of the `Document` containing `Chunk`s. Example: `corpora/my-corpus-123/documents/the-doc-abc` */
                parent: string;
            };
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
                    "application/json": components["schemas"]["ListChunksResponse"];
                };
            };
        };
    };
    "generativelanguage.corpora.documents.chunks.create": {
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
                /** @description Required. The name of the `Document` where this `Chunk` will be created. Example: `corpora/my-corpus-123/documents/the-doc-abc` */
                parent: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Chunk"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Chunk"];
                };
            };
        };
    };
    "generativelanguage.corpora.documents.chunks.batchCreate": {
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
                /** @description Optional. The name of the `Document` where this batch of `Chunk`s will be created. The parent field in every `CreateChunkRequest` must match this value. Example: `corpora/my-corpus-123/documents/the-doc-abc` */
                parent: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BatchCreateChunksRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BatchCreateChunksResponse"];
                };
            };
        };
    };
    "generativelanguage.corpora.documents.chunks.batchDelete": {
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
                /** @description Optional. The name of the `Document` containing the `Chunk`s to delete. The parent field in every `DeleteChunkRequest` must match this value. Example: `corpora/my-corpus-123/documents/the-doc-abc` */
                parent: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BatchDeleteChunksRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Empty"];
                };
            };
        };
    };
    "generativelanguage.corpora.documents.chunks.batchUpdate": {
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
                /** @description Optional. The name of the `Document` containing the `Chunk`s to update. The parent field in every `UpdateChunkRequest` must match this value. Example: `corpora/my-corpus-123/documents/the-doc-abc` */
                parent: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["BatchUpdateChunksRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BatchUpdateChunksResponse"];
                };
            };
        };
    };
    "generativelanguage.corpora.documents.list": {
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
                /** @description Optional. The maximum number of `Document`s to return (per page). The service may return fewer `Document`s. If unspecified, at most 10 `Document`s will be returned. The maximum size limit is 20 `Document`s per page. */
                pageSize?: number;
                /** @description Optional. A page token, received from a previous `ListDocuments` call. Provide the `next_page_token` returned in the response as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListDocuments` must match the call that provided the page token. */
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
            path: {
                /** @description Required. The name of the `Corpus` containing `Document`s. Example: `corpora/my-corpus-123` */
                parent: string;
            };
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
                    "application/json": components["schemas"]["ListDocumentsResponse"];
                };
            };
        };
    };
    "generativelanguage.corpora.documents.create": {
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
                /** @description Required. The name of the `Corpus` where this `Document` will be created. Example: `corpora/my-corpus-123` */
                parent: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Document"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Document"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.permissions.list": {
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
                /** @description Optional. The maximum number of `Permission`s to return (per page). The service may return fewer permissions. If unspecified, at most 10 permissions will be returned. This method returns at most 1000 permissions per page, even if you pass larger page_size. */
                pageSize?: number;
                /** @description Optional. A page token, received from a previous `ListPermissions` call. Provide the `page_token` returned by one request as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListPermissions` must match the call that provided the page token. */
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
            path: {
                /** @description Required. The parent resource of the permissions. Formats: `tunedModels/{tuned_model}` `corpora/{corpus}` */
                parent: string;
            };
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
                    "application/json": components["schemas"]["ListPermissionsResponse"];
                };
            };
        };
    };
    "generativelanguage.tunedModels.permissions.create": {
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
                /** @description Required. The parent resource of the `Permission`. Formats: `tunedModels/{tuned_model}` `corpora/{corpus}` */
                parent: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Permission"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Permission"];
                };
            };
        };
    };
    "generativelanguage.cachedContents.list": {
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
                /** @description Optional. The maximum number of cached contents to return. The service may return fewer than this value. If unspecified, some default (under maximum) number of items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. */
                pageSize?: number;
                /** @description Optional. A page token, received from a previous `ListCachedContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCachedContents` must match the call that provided the page token. */
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
                    "application/json": components["schemas"]["ListCachedContentsResponse"];
                };
            };
        };
    };
    "generativelanguage.cachedContents.create": {
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
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CachedContent"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CachedContent"];
                };
            };
        };
    };
    "generativelanguage.corpora.list": {
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
                /** @description Optional. The maximum number of `Corpora` to return (per page). The service may return fewer `Corpora`. If unspecified, at most 10 `Corpora` will be returned. The maximum size limit is 20 `Corpora` per page. */
                pageSize?: number;
                /** @description Optional. A page token, received from a previous `ListCorpora` call. Provide the `next_page_token` returned in the response as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListCorpora` must match the call that provided the page token. */
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
                    "application/json": components["schemas"]["ListCorporaResponse"];
                };
            };
        };
    };
    "generativelanguage.corpora.create": {
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
        requestBody?: {
            content: {
                "application/json": components["schemas"]["Corpus"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Corpus"];
                };
            };
        };
    };
    "generativelanguage.files.list": {
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
                /** @description Optional. Maximum number of `File`s to return per page. If unspecified, defaults to 10. Maximum `page_size` is 100. */
                pageSize?: number;
                /** @description Optional. A page token from a previous `ListFiles` call. */
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
                    "application/json": components["schemas"]["ListFilesResponse"];
                };
            };
        };
    };
    "generativelanguage.media.upload": {
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
        requestBody?: {
            content: {
                "application/octet-stream": components["schemas"]["CreateFileRequest"];
            };
        };
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreateFileResponse"];
                };
            };
        };
    };
    "generativelanguage.generatedFiles.list": {
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
                /** @description Optional. Maximum number of `GeneratedFile`s to return per page. If unspecified, defaults to 10. Maximum `page_size` is 50. */
                pageSize?: number;
                /** @description Optional. A page token from a previous `ListGeneratedFiles` call. */
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
                    "application/json": components["schemas"]["ListGeneratedFilesResponse"];
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
    "generativelanguage.tunedModels.list": {
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
                /** @description Optional. A filter is a full text search over the tuned model's description and display name. By default, results will not include tuned models shared with everyone. Additional operators: - owner:me - writers:me - readers:me - readers:everyone Examples: "owner:me" returns all tuned models to which caller has owner role "readers:me" returns all tuned models to which caller has reader role "readers:everyone" returns all tuned models that are shared with everyone */
                filter?: string;
                /** @description API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: components["parameters"]["key"];
                /** @description OAuth 2.0 token for the current user. */
                oauth_token?: components["parameters"]["oauth_token"];
                /** @description Optional. The maximum number of `TunedModels` to return (per page). The service may return fewer tuned models. If unspecified, at most 10 tuned models will be returned. This method returns at most 1000 models per page, even if you pass a larger page_size. */
                pageSize?: number;
                /** @description Optional. A page token, received from a previous `ListTunedModels` call. Provide the `page_token` returned by one request as an argument to the next request to retrieve the next page. When paginating, all other parameters provided to `ListTunedModels` must match the call that provided the page token. */
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
                    "application/json": components["schemas"]["ListTunedModelsResponse"];
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
