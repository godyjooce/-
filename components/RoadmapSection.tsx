
import React, { useState } from 'react';
import { Section, Topic } from '../types';
import RoadmapTopic from './RoadmapTopic';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface RoadmapSectionProps {
    section: Section;
    completedTopics: Set<string>;
    onToggleTopic: (id: string) => void;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ section, completedTopics, onToggleTopic }) => {
    const [isOpen, setIsOpen] = useState(true);

    const completedCount = section.topics.filter(topic => completedTopics.has(topic.id)).length;
    const totalCount = section.topics.length;
    const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
    
    const headerBgColor = `bg-${section.color}-500/10`;
    const headerTextColor = `text-${section.color}-300`;
    const progressBgColor = `bg-${section.color}-500`;

    return (
        <div className="mb-8">
            <div
                className={`rounded-lg shadow-lg overflow-hidden border border-slate-700/50 transition-all duration-300 ${headerBgColor}`}
            >
                <header
                    className="flex justify-between items-center p-4 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div>
                        <p className={`text-sm font-medium ${headerTextColor}`}>{section.level}</p>
                        <h3 className="text-2xl font-bold text-slate-100">{section.title}</h3>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-slate-400 font-mono">{`${completedCount}/${totalCount}`}</span>
                        <ChevronDownIcon className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                </header>

                <div className="w-full bg-slate-700/50 h-1">
                    <div className={`${progressBgColor} h-1 transition-all duration-500`} style={{ width: `${progress}%` }}></div>
                </div>

                {isOpen && (
                    <div className="p-6 relative">
                        <div className="absolute top-0 left-9 w-0.5 h-full bg-slate-700"></div>
                        <div className="space-y-4 relative">
                            {section.topics.map((topic, index) => (
                                <RoadmapTopic
                                    key={topic.id}
                                    id={topic.id}
                                    title={topic.title}
                                    description={topic.description}
                                    isCompleted={completedTopics.has(topic.id)}
                                    onToggle={onToggleTopic}
                                    color={section.color}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoadmapSection;
   