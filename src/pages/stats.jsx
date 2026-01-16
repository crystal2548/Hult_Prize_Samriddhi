import React from 'react';
import { Card, Col, Row } from 'antd';

const StatsSection = () => {
    const statsData = [
        { value: "2023- Present", label: "" },
        { value: "40+ Teams", label: "" },
        { value: "200+", label: "Participants" },
        { value: "4", label: "Themes" }
    ];

    return (
        <div className="w-full py-12 bg-gray-100 !px-10">
            <Row
                gutter={[16, 24]}
                justify="center"
                align="middle"
                className="w-full max-w-7xl mx-auto px-4 !py-4"
            >
                {statsData.map((item, index) => (
                    <Col
                        key={index}
                        xs={24}
                        sm={12}
                        md={6}
                        lg={5}
                        className="flex justify-center !py-3"
                    >
                        <Card
                            bordered={false}
                            className="w-full max-w-[320px] transition-all duration-300 bg-gray-200 h-20"
                            styles={{
                                body: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '20px',
                                    textAlign: 'center'
                                }
                            }}
                        >
                            {/* The Large Stat Values */}
                            <div className="text-2xl  font-black text-gray-800 tracking-tight">
                                {item.value}
                            </div>

                            {/* The Label (only shows if label exists) */}
                            {item.label && (
                                <div className="text-sm font-medium text-gray-500 uppercase mt-1 tracking-wider">
                                    {item.label}
                                </div>
                            )}
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default StatsSection;