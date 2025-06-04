'use client';

import { useState } from 'react';

export default function Modal({ title, children }: { title: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)} className="btn btn-primary">
                Open Modal
            </button>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                        <h2 className="text-lg font-bold dark:text-white">{title}</h2>
                        <div className="mt-4">{children}</div>
                        <button onClick={() => setOpen(false)} className="mt-4 btn">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
