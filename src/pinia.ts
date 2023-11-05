import { createPinia } from 'pinia'

// Crie uma instância do Pinia
export const pinia = createPinia()

// Exporte a instância do Pinia
export const usePinia = () => pinia

