
import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface RoadmapTopicProps {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    onToggle: (id: string) => void;
    color: string;
}

const RoadmapTopic: React.FC<RoadmapTopicProps> = ({ id, title, description, isCompleted, onToggle, color }) => {
    const borderColor = `border-${color}-500`;
    const ringColor = `ring-${color}-500/50`;
    const textColor = `text-${color}-300`;
    const checkColor = `text-${color}-400`;

    return (
        <div className="flex items-start space-x-4">
            <div className="flex flex-col items-center">
                <button 
                    onClick={() => onToggle(id)}
                    className={`w-8 h-8 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isCompleted ? `${borderColor} bg-${color}-500/20` : 'border-slate-600 hover:border-slate-400'}`}
                >
                    {isCompleted && <CheckCircleIcon className={`w-6 h-6 ${checkColor}`} />}
                </button>
                <div className="w-0.5 h-full bg-slate-700 min-h-[4rem]"></div>
            </div>
            <div className="pt-1 w-full">
                <h4 className={`font-semibold ${isCompleted ? 'line-through text-slate-500' : 'text-slate-100'}`}>{title}</h4>
                <p className="text-slate-400 text-sm mt-1">{description}</p>
            </div>
        </div>
    );
};

export default RoadmapTopic;
   