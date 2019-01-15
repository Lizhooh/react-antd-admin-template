import React from 'react';
import styled from 'styled-components';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

// 数据源
const data = [
    { genre: '苹果', sold: 275, income: 2300 },
    { genre: '沙发', sold: 115, income: 667 },
    { genre: '行动', sold: 120, income: 982 },
    { genre: '未来', sold: 350, income: 5271 },
    { genre: '其他', sold: 150, income: 3710 },
];

// 定义度量
const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' },
};

export default () => (
    <Root>
        <div>
            <Chart width={600} height={400} data={data} scale={cols}>
                <Axis name="genre" />
                <Axis name="sold" />
                <Legend position="top" dy={-20} />
                <Tooltip />
                <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
        </div>

    </Root>
);

const Root = styled.div`
    background-color: #fff;
    margin: 20px;
    padding: 24px;
    text-align: center;
`;