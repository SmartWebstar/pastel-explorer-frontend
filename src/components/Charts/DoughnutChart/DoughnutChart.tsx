import React from 'react';
import { ChartData } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { CardHeader, Typography } from '@material-ui/core';

import { defaultChartOptions } from './DoughnutChart.options';
import * as Styles from './DoughnutChart.styles';

interface DoughnutChartProps {
  data: ChartData | null;
  title?: string;
  innerTitle?: string;
  innerSubtitle?: string | number;
  table?: React.ReactNode;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  title,
  table,
  innerTitle,
  innerSubtitle,
}) => {
  return (
    <Styles.Card mb={3}>
      {title && <CardHeader title={title} />}
      <Styles.CardContent>
        <Styles.ChartWrapper>
          <Styles.DoughnutInner>
            {innerTitle && <Typography variant="h4">{innerTitle}</Typography>}
            {innerSubtitle && <Typography variant="caption">{innerSubtitle}</Typography>}
          </Styles.DoughnutInner>
          {data && <Doughnut data={data} options={defaultChartOptions} type="doughnut" />}
        </Styles.ChartWrapper>
        {table}
      </Styles.CardContent>
    </Styles.Card>
  );
};

export default DoughnutChart;
