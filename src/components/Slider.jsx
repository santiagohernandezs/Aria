import { Slider } from 'rsuite';

const SliderComp = ({ min, max, step, def }) => {
    return (
        <>
            <Slider defaultValue={def} min={min} step={step} max={max}/>
        </>
    )
}

export default SliderComp
