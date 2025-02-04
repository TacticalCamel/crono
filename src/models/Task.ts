import { TaskPriority } from "@/models/TaskPriority";
import { TaskStatus } from "@/models/TaskStatus";

export interface Task {
    id: string
    title: string
    description: string
    priority: TaskPriority
    status: TaskStatus
    deadline: number
}