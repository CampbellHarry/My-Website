import { useState } from 'react';

export default function Expander({ texttoexpand }: { texttoexpand: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(true);
    };

    return (
        <span>
            {!isExpanded ? (
                <button
                    onClick={handleExpand}
                    className="bg-zinc-800 hover:bg-zinc-400 hover:text-neutral-900 transition-all px-4 h-auto py-2 flex items-center text-xs mt-1 ml-1 mr-1 rounded-lg text-zinc-400"
                    style={{ display: 'inline', padding: 3 }}
                >
                    //
                </button>
            ) : (
                <span className="text-teal-500 animatedflashdown">
                    {texttoexpand}
                </span>
            )}
        </span>
    );
}
