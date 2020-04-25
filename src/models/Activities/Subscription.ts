export interface UISubscription {
    group: string
    subscriber: string
    startDate: number
    endDate: number
    status: SubscriptionStatus
    year: number
}

export enum SubscriptionStatus {
    Active = 'active',
    Suspended = 'suspended',
    Cancelled = 'cancelled',
    Complete = 'complete'
}
