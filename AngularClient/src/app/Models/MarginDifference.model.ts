export interface MarginDifference {
    fieldName: string;
    shouldSendEmail: boolean;
    canHaveEffectiveDate: boolean;
    previousMarginValue?: string;
    currentMarginValue?: string;
    effectiveId?: number;
    effectiveDate?: Date;
    isDirty?: boolean;
    groupId?: number;
    groupLabel?: string;
    subFields?: MarginDifference[]
}