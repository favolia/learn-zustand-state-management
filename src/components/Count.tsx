import { FC } from 'react'
import { useAppStore } from '../stores/useAppStore'
import { Button } from './Button';
// import { shallow } from 'zustand/shallow';

export const Count: FC = () => {
    const [ count, increase, decrease ] = useAppStore(state => [state.count, state.increase, state.decrease])
    // const count = useAppStore((s) => s.count)
    // const increase = useAppStore((s) => s.increase)
    // const decrease = useAppStore((s) => s.decrease)
    console.log('render count');


    return (
        <div>
            <h1 className="text-white text-xl text-center">{count}</h1>

            <div className="button flex gap-x-4 mt-5">
                <Button variant={'danger'} size={'md'} onClick={() => decrease(1)}>-1</Button>
                <Button variant={'success'} size={'md'} onClick={() => increase(1)}>+1</Button>
            </div>
        </div>
    )
}
