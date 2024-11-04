import React from 'react'
import { Routes, Route } from 'react-router-dom';


export default function Router() {
    return (
        <div>
            <>
                <Routes>
                    {/* /route/home */}
                    <Route path='home' element={< home />} />
                    {/* /route/page2 */}
                    <Route path='page2' element={<page2 />} />
                </Routes>
            </>
        </div>
    )
}
