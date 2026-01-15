import React from 'react'
import { Carousel } from 'antd';
import { Card, Col, Row } from 'antd';

const contentStyle = {
  margin: 0,
  // height: '600px',
  color: '#fff',
  lineHeight: '600px',
  textAlign: 'center',

};

const Home = () => {
  return (
    <div>
      <Carousel >
        <div>
          <h3 style={contentStyle} className="bg-pink-600 h-[600px] w-full">HULT PRIZE SAMRIDDHI</h3>
        </div>
      </Carousel>
      <div className="w-full min-h-screen flex flex-col justify-center items-center !px-4 !py-10 bg-gray-50">
        <Row
          gutter={[24, 24]}
          justify="center"
          align="middle"
          className="w-full max-w-7xl mx-auto"
        >
          {/* Card 1 */}
          <Col xs={24} sm={12} md={8} className="flex justify-center">
            <Card
              bordered={false}
              className="w-full max-w-[320px] shadow-sm hover:shadow-md transition-all duration-300 rounded-none border-b-4 border-amber-500"
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '180px'
              }}
            >
              <span className="text-lg font-bold uppercase tracking-wide text-gray-800">
                Global Competition
              </span>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={24} sm={12} md={8} className="flex justify-center">
            <Card
              bordered={false}
              className="w-full max-w-[320px] shadow-sm hover:shadow-md transition-all duration-300 rounded-none border-b-4 border-amber-500"
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '180px'
              }}
            >
              <span className="text-lg font-bold uppercase tracking-wide text-gray-800">
                Social Impact
              </span>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={24} sm={12} md={8} className="flex justify-center">
            <Card
              bordered={false}
              className="w-full max-w-[320px] shadow-sm hover:shadow-md transition-all duration-300 rounded-none border-b-4 border-amber-500"
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '180px'
              }}
            >
              <span className="text-lg font-bold uppercase tracking-wide text-gray-800">
                $1M Prize
              </span>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
