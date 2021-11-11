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

/*
<tr mat-header-row *matHeaderRowDef="columnsToDisplay" class="header-row"></tr>
            <tr mat-row *matRowDef="let element; columns: columnsToDisplay;" class="element-row" [class.expanded-row]="expandedElement === element"></tr>
            <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="detail-row"></tr>
*/