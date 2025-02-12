// 定義學生資料格式
export interface StudentResult {
    student_id: string | null;
    name: string;
    count: number;
}

// 定義 API 回應格式
export interface RequestObj<T> {
    success: boolean;
    data: T;
    message: string;
}

export interface CounterStateProps {
    countValue: StudentResult[];
    countStatus: boolean
}

export interface QRCodeProps {
    text: string;
}

export interface StyledComponentProps {
    isGuest?: boolean;
    disabled?: boolean;
    active?: boolean;
}

export interface ButtonStyleProps {
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    color?: string;
}
