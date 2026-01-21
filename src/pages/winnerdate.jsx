import React from 'react'
import { Card, Col, Row } from 'antd';

const Winnerdata = ({ first, second, third, heading }) => {
    const WinnerData = [
        { title: first.title, description: first.description, position: first.position },
        { title: second.title, description: second.description, position: second.position },
        { title: third.title, description: third.description, position: third.position },
        // { heading: heading }
    ];
    return (
        <div className="w-full flex flex-col items-center !px-4 !py-12 bg-dark-charcoal text-white">
            {/* bg-gray-100 to 900 or neutral 900 */}
            {/* 1. Heading placed at the top, outside the Row */}
            {heading && (
                <h2 className="text-2xl font-black uppercase text-white !mb-10 tracking-widest !pb-4">
                    {heading}
                </h2>
            )}
            {/* Winner Data  */}
            <Row
                gutter={[24, 24]}
                justify="center"
                align="middle"
                className="w-full max-w-7xl mx-auto"
            >
                {/* Card 1 */}
                {WinnerData.map((item, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={7} className="flex items-center !py-2">
                        <h2 className="text-md font-bold uppercase text-white !mx-1">{item.heading}</h2>
                        <Card
                            hoverable
                            bordered={true}
                            className="w-full max-w-[300px] hover:!scale-105 !shadow-lg hover:!shadow-lg transition-all ease-in-out !duration-500 rounded-xl !bg-neutral-950"
                            bodyStyle={{
                                display: 'flex',
                                // alignItems: 'center',
                                // justifyContent: 'center',
                                height: '180px'
                            }}
                        >
                            <div>
                                <div className="flex flex-col">
                                    <span className="text-md font-bold uppercase text-pink-500">
                                        {item.title}
                                    </span>

                                    <span className="text-sm text-gray-100 uppercase mt-2">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div >
    )
}

export default Winnerdata