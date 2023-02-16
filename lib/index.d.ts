import EventEmitter from 'eventemitter3'
import { useThree as _useThree } from '@react-three/fiber'
export interface SyncedCameraStore {
    emitter: EventEmitter;
}
export declare const useSyncedCameraStore: import('zustand').UseBoundStore<import('zustand').StoreApi<SyncedCameraStore>>
export default function useSyncedCamera(useThree: typeof _useThree): () => void
