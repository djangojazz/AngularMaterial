export interface MarginDiffernce {
    fieldName: string;
    canHaveEffectiveDate: boolean;
    previousMarginValue: string;
    currentMarginValue: string;
    effectiveDate?: Date;
}