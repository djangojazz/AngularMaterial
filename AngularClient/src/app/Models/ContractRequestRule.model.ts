import { ContractRequestAttachment } from "./ContractRequestAttachment.model";

export interface ContractRequestRule {
    attachments: ContractRequestAttachment[];
    approver: string;
    changeFields: string;
    contractRequestId: number;
    contractRequestRuleTypeId: number;
    dateUpdated?: Date;
    id: number;
    isApproved?: boolean | null;
    ncNote: string | null;
    ruleName: string;
    title: string;
    updatedBy?: number;
    updatedByName: string;
}