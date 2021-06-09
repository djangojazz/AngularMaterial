export interface ContractRequestAttachment {
    containerId?: number;
    content: string | null;
    contractRequestId?: number;
    contractRequestRuleId?: number;
    description: string | null;
    fileName: string;
    id: number;
    isComplete?: boolean;
    path: string;
    uploadDate?: Date;
    uploadedByName: string;
    uploadedByUserInfoId?: number;   
}