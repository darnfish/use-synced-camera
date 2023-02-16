import { useEffect, useCallback } from 'react';
import { create } from 'zustand';
import EventEmitter from 'eventemitter3';
export var useSyncedCameraStore = create(function () { return ({
    emitter: new EventEmitter()
}); });
export default function useSyncedCamera(useThree) {
    var camera = useThree(function (_a) {
        var camera = _a.camera;
        return camera;
    });
    var emitter = useSyncedCameraStore(function (state) { return state.emitter; });
    var update = useCallback(function () {
        emitter.emit('CAMERA_UPDATE', {
            position: camera.position.clone(),
            quaternion: camera.quaternion.clone(),
            rotation: camera.rotation.clone()
        });
    }, [emitter]);
    var onCameraUpdate = useCallback(function (_a) {
        var position = _a.position, quaternion = _a.quaternion, rotation = _a.rotation;
        camera.position.set(position.x, position.y, position.z);
        camera.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
        camera.rotation.set(rotation.x, rotation.y, rotation.z);
    }, [camera]);
    useEffect(function () {
        emitter.addListener('CAMERA_UPDATE', onCameraUpdate);
        return function () {
            emitter.removeListener('CAMERA_UPDATE', onCameraUpdate);
        };
    }, [emitter]);
    return update;
}
