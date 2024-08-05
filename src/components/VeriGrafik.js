import React, { useEffect, useState } from 'react';

function VeriGrafik({ arrayA, arrayB, _kontrol }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const updateChartData = () => {
            const dataPoints = _kontrol ? arrayA : arrayB;
            setChartData(dataPoints);
        };
        updateChartData();
    }, [_kontrol, arrayA, arrayB]);

    return (
        <div className="chart-container" style={{height: Math.max(...chartData) * 2.25}}>
            <div id="chart">
                {chartData.map((dataPoint, index) => (
                    <div
                        key={index}
                        className="bar"
                        style={{
                            backgroundColor: dataPoint > chartData[index-1] ? 'green' : dataPoint < chartData[index-1] ? 'red' : 'gray',
                            height: Math.abs(dataPoint)*2 + 'px',
                            left: index * 30 + 'px'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default VeriGrafik;
