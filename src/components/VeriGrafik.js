import React, { useEffect, useState } from 'react';

function VeriGrafik({ arrayA, arrayB, _kontrol }) {
    const [chartData, setChartData] = useState([]);

    // console.log("array A --> " + arrayA);
    // console.log("array B --> " + arrayB);
    // console.log("_kontrol --> " + _kontrol);

    useEffect(() => {
        const updateChartData = () => {
            const dataPoints = _kontrol ? arrayA : arrayB;
            setChartData(dataPoints);
        };

        updateChartData();
    }, [_kontrol, arrayA, arrayB]);

    return (
        <div className="chart-container">
            <div id="chart">
                {chartData.map((dataPoint, index) => (
                    <div
                        key={index}
                        className="bar"
                        style={{
                            height: Math.abs(dataPoint) * 2 + 'px',
                            backgroundColor: dataPoint > 0 ? 'green' : dataPoint < 0 ? 'red' : 'gray',
                            left: index * 30 + 'px'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default VeriGrafik;
