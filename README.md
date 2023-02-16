# SyncedCamera
Sync multiple cameras position/quaternion/rotation in react-three/fiber



https://user-images.githubusercontent.com/8293444/219300723-9a35946a-ac05-4109-966f-a7dff88dad46.mp4



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
