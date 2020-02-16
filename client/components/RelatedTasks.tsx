import React from 'react';
import { Link } from 'react-router-dom';

import TaskMetaList from '../constants/TaskMetaList';
import TaskType from '../constants/TaskType';

interface RelatedTasksProps {
    tasks: TaskType[];
}

const RelatedTasks: React.FC<RelatedTasksProps> = ({ tasks }) => {
    return (
        <div className='p-2 bg-gray-200'>
            <h3 className='px-2 font-semibold text-xl sm:text-2xl'>Might be useful</h3>
            <ul className='mt-2'>
            {
                tasks.map((task, index) => {
                    const meta = TaskMetaList.find((v) => v.taskType === task);
                    const idx = (index < 10) ? `0${index + 1}` : `${index + 1}`;
                    return (
                        <li key={meta.taskType}>
                            <Link
                                to={`/${meta.slug}`}
                                className='px-2 py-1 block'
                            >
                                # {meta.title}
                            </Link>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    );
};

export default RelatedTasks;
