import type { ReactNode } from "react";
import { toast as sonnerToast } from "sonner";

type ToastInput = {
    title?: ReactNode;
    description?: ReactNode;
    variant?: "default" | "destructive" | "success" | "warning";
};

export function useToast() {
    const toast = ({ title, description, variant = "default" }: ToastInput) => {
        switch (variant) {
            case "success":
                return sonnerToast.success(String(title ?? ""), { description });
            case "destructive":
                return sonnerToast.error(String(title ?? ""), { description });
            case "warning":
                return sonnerToast.warning(String(title ?? ""), { description });
            default:
                return sonnerToast(String(title ?? ""), { description });
        }
    };

    return { toast };
}
