import React from 'react';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
const formatter = value => <CountUp end={value} separator="," duration={5} />;
const AnimatedStats = ({ participation, title }) => (
    <Row gutter={16}>
        <Col span={12}>
            <Statistic  value={participation} formatter={formatter} />
        </Col>
        {/* <Col span={12}>1
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
        </Col> */}
    </Row>
);
export default AnimatedStats;