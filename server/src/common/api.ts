/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { _, Features, _Connection, _LanguagesImpl } from './server';
import { SemanticTokensBuilder } from './semanticTokens';
import type { WorkDoneProgressReporter, WorkDoneProgressServerReporter, ResultProgressReporter } from './progress';

export * from 'vscode-languageserver-protocol/';
export { WorkDoneProgressReporter, WorkDoneProgressServerReporter, ResultProgressReporter };
export { SemanticTokensBuilder };
export * from './server';

import { DiagnosticFeature, DiagnosticsFeatureShape } from './proposed.diagnostic';
export namespace ProposedFeatures {
	export const all: Features<_, _, _, _, _, _, DiagnosticsFeatureShape> = {
		__brand: 'features',
		languages: DiagnosticFeature
	};

	export type Connection = _Connection<_, _, _, _, _, _, DiagnosticsFeatureShape>;
}