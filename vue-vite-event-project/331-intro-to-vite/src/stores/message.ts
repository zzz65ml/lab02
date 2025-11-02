// stores/message.ts
import type { MessageState } from '@/types'; // 引入类型约束
import { defineStore } from 'pinia'; // 引入Pinia的defineStore方法

// 定义并导出Pinia存储，命名为"message"（唯一标识）
export const useMessageStore = defineStore('message', {
    state: (): MessageState => ({
        message: '' // 初始状态：空消息
    }),
    actions: {
        // 1. 更新消息内容（接收字符串参数）
        updateMessage(message: string): void {
            this.message = message; // 修改Pinia状态中的message
        },
        // 2. 重置消息（用于3秒后自动清除）
        resetMessage(): void {
            this.message = ''; // 将message置空
        }
    }
});