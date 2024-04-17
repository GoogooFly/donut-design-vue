export type ColumnsType = {
    type?: "seq" | "checkbox" | "radio",
    title?: string;
    field?: string;
    align?: "left" | "center" | "right";
    fixed?: "left" | "right";
    width?: string | number;
    showOverflow?: boolean;
    slots?: {
        default?: string;
    }
}[]

