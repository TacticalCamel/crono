import { TaskPriority } from "@/models/TaskPriority";

export function getPriorityLabel(priority: TaskPriority): string {
    switch (priority) {
        case TaskPriority.low:
            return 'Low';
        case TaskPriority.medium:
            return 'Medium';
        case TaskPriority.high:
            return 'High';
        case TaskPriority.urgent:
            return 'Urgent';
    }
}

export function getPriorityColor(priority: TaskPriority): string {
    switch (priority) {
        case TaskPriority.low:
            return 'secondary';
        case TaskPriority.medium:
            return 'medium';
        case TaskPriority.high:
            return 'warning';
        case TaskPriority.urgent:
            return 'danger';
    }
}