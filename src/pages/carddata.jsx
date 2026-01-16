import React from 'react'
import { Card, Col, Row } from 'antd';

const CardData = () => {
    const cardData = [
        { title: "Global Competition" },
        { title: "Social Impact" },
        { title: "$1M Prize" }
    ];
    return (
        <div className="w-full flex flex-col  items-center px-4 !py-10 bg-gray-100">
            <Row
                gutter={[24, 24]}
                justify="center"
                align="middle"
                className="w-full max-w-7xl mx-auto"
            >
                {/* Card 1 */}
                {cardData.map((item, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={7} className="flex justify-center !py-2">
                        <Card
                            hoverable
                            bordered={false}
                            className="w-full max-w-[320px]  !shadow-lg hover:shadow-lg transition-all duration-300 rounded-none  "
                            bodyStyle={{
                                display: 'flex',
                                // background: 'gray',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '180px'
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

export default CardData
