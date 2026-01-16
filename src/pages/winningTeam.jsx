import React from 'react'
import { Card, Col, Row } from 'antd';

const winningTeam = () => {
    const WinnerData = [
        { title: "Winner Team", image: "" },
        { title: "Winner Team", image: "" },
        { title: "Winner Team", image: "" },
    ];
    return (
        <div className="w-full flex flex-col items-center !px-4 !py-6 bg-gray-100">
            <Row
                gutter={[24, 24]}
                justify="center"
                align="middle"
                className="w-full max-w-7xl mx-auto"
            >
                {/* Card 1 */}
                {WinnerData.map((item, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={7} className="flex justify-center !py-2">
                        <Card
                            hoverable
                            bordered={true}
                            className="w-full max-w-[300px]  !shadow-lg hover:shadow-lg transition-all duration-300 rounded-xl bg-gray-100 "
                            bodyStyle={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '120px'
                            }}
                        >
                            <span className="text-lg font-bold uppercase tracking-wide text-gray-800">
                                {item.title}
                            </span>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default winningTeam