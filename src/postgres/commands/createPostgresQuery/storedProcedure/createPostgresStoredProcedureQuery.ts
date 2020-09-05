/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureWizard, IActionContext } from "vscode-azureextensionui";
import { PostgresStoredProceduresTreeItem } from "../../../tree/PostgresStoredProceduresTreeItem";
import { IPostgresQueryWizardContext } from "../IPostgresQueryWizardContext";
import { runPostgresQueryWizard } from "../runPostgresQueryWizard";
import { StoredProcedureQueryCreateStep } from "./steps/StoredProcedureQueryCreateStep";
import { StoredProcedureQueryNameStep } from "./steps/StoredProcedureQueryNameStep";

export async function createPostgresStoredProcedureQuery(context: IActionContext, treeItem?: PostgresStoredProceduresTreeItem): Promise<void> {
    const wizardContext: IPostgresQueryWizardContext = context;
    const wizard = new AzureWizard(wizardContext, {
        promptSteps: [new StoredProcedureQueryNameStep()],
        executeSteps: [new StoredProcedureQueryCreateStep()],
        title: 'Create PostgreSQL Stored Procedure Query'
    });

    await runPostgresQueryWizard(wizard, wizardContext, treeItem);
}
