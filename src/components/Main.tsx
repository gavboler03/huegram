import Hue from './Hue'
import PostHue from './PostHue'

interface HueObject {
    color: string,
    username: string,
    likes: number
}
interface Props {
    hues: HueObject[],
    addHue: (color:string) => void
}

const Main = ({hues, addHue} : Props) => {
  return (
    <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto'>

        <PostHue addHue={addHue}/>


        {hues.map( (hue) => ( 
            
            <Hue hue={hue}/>
       ))}

        

    </div>
  )
}

export default Main