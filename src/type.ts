/**學生資料格式 */
export interface StudentResult {
    student_id: string | null;
    name: string;
    count: number;
}

/**API 回應格式 */
export interface RequestObj<T> {
    success: boolean;
    data: T;
    message: string;
}

/**Card樣式判斷參數 */
export interface CardStyleProps {
    $isGuest?: boolean;
    $active?: boolean;
}
