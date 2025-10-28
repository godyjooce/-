
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import RoadmapSection from './components/RoadmapSection';
import { roadmapData } from './data/roadmapData';

const App: React.FC = () => {
    const [completedTopics, setCompletedTopics] = useState<Set<string>>(() => {
        try {
            const saved = localStorage.getItem('completedPythonTopics');
            return saved ? new Set(JSON.parse(saved)) : new Set();
        } catch (error) {
            console.error("Failed to parse completed topics from localStorage", error);
            return new Set();
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('completedPythonTopics', JSON.stringify(Array.from(completedTopics)));
        } catch (error) {
            console.error("Failed to save completed topics to localStorage", error);
        }
    }, [completedTopics]);

    const handleToggleTopic = (id: string) => {
        setCompletedTopics(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
            <Header />
            <main className="max-w-4xl mx-auto px-4 py-8">
                {roadmapData.map(section => (
                    <RoadmapSection
                        key={section.id}
                        section={section}
                        completedTopics={completedTopics}
                        onToggleTopic={handleToggleTopic}
                    />
                ))}
            </main>
            <footer className="text-center py-6 text-slate-500 text-sm">
                <p>Создано для эффективного изучения Python.</p>
            </footer>
        </div>
    );
};

export default App;
   