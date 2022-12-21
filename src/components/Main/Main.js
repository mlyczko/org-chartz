import React, { useState } from 'react';
import Depth from './components/Depth';
import User from './components/User';

const Main = () => {
    return (
        <main>
            <div className="container text-center">
                <div className="d-flex">
                    <div className="flex-grow-1 me-3 mt-5">
                        <div className="row">
                            <div className="col mb-4"></div>
                            <User />
                            <div className="col mb-4"></div>
                        </div>
                        <div className="row">
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>Jan Kowalski</div>
                                    <div>Account Executive</div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>Jan Kowalski</div>
                                    <div>Account Executive</div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>Jan Kowalski</div>
                                    <div>Account Executive</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>Jan Kowalski</div>
                                    <div>Account Executive</div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>Jan Kowalski</div>
                                    <div>Account Executive</div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>Jan Kowalski</div>
                                    <div>Account Executive</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>Jan Kowalski</div>
                                    <div>Account Executive</div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>Jan Kowalski</div>
                                    <div>Account Executive</div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>Jan Kowalski</div>
                                    <div>Account Executive</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Depth />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
