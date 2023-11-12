import { FC } from 'react'
import { useAppStore } from '../stores/useAppStore'
// import { shallow } from 'zustand/shallow';

export const Name: FC = () => {
    const [ name, updateName ] = useAppStore(state => [state.name, state.updateName])
    // const name = useAppStores((s) => s.name)
    // const updateName = useAppStores((s) => s.updateName)
    console.log('render name');
    
    return (
        <div>
            <h1 className="text-center text-white text-xl">Name: <span className="bg-gray-600">{name}</span></h1>
            <input type="text" onChange={(e) => updateName(e.target.value)} value={name} autoComplete='new' autoCorrect='off' />
        </div>
    )
}
