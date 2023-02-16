# SyncedCamera
Sync multiple cameras position/quaternion/rotation in react-three/fiber

## Installation
```bash
yarn add use-synced-camera
```

## Usage
```tsx
import useSyncedCamera from 'use-synced-camera'

import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Scene() {
	const update = useSyncedCamera(useThree)
	
	return (
		<>
			<Model />
			<OrbitControls onChange={update} />
		</>
	)
}
```

## License
MIT
