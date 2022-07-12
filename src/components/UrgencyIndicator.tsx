
// Types:
import { FC } from 'react';

interface Props{
    urgency: 1 | 2 | 3 | 4 | 5;
}

const UrgencyIndicator: FC<Props> = ({ urgency }) => {

    let color: string;

    switch(urgency){
        case 1:
        case 2:
            color = 'text-yellow-500';
            break;
        case 3:
            color = 'text-orange-500';
            break;
        case 4:
            color = 'text-red-500';
            break;
        default:
            color = 'text-red-600';
    }

    return <>
        <div className='font-thin'>
            <span className='mr-1'>
                Urgency:
            </span>
            <span className={color}>
                {urgency}/5
            </span>
        </div>
    </>
}

export default UrgencyIndicator;


