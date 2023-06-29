import { usePlane } from "@react-three/cannon"
import { groundTexture } from "../images/textures"
import { NearestFilter, RepeatWrapping } from "three"


export const Ground = () => {
    const [ref] = usePlane(() => ({

        rotation: [~Math.PI/ 4,0,0], position: [0,0,0]
    }))


    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100,100]} />
            <meshStandardMaterial attach='materail' color='hotpink' />
        </mesh>
    )
}