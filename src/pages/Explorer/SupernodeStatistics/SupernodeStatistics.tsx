import * as React from 'react';

import Table, { RowsProps } from '@components/Table/Table';
import DoughnutChart from '@components/Charts/DoughnutChart/DoughnutChart';

import { INetworkSupernodes } from '@utils/types/INetwork';

import {
  headers,
  generateSupernodeCountriesList,
  generateChartData,
  CountryList,
} from './SupernodeStatistics.helpers';

interface SupernodeStatisticsProps {
  supernodes: Array<INetworkSupernodes> | null;
}

const DISPLAY_COUNTRY_QUANTITY = 5;

const tableStyles = {
  height: '340px',
  overflow: 'auto',
};

const SupernodeStatistics: React.FC<SupernodeStatisticsProps> = ({ supernodes }) => {
  const [countries, setCountries] = React.useState<Array<RowsProps> | null>(null);
  const [countryQuantity, setCountryQuantity] = React.useState(0);
  const [countryChartData, setCountryChartData] = React.useState<CountryList['chartData'] | null>(
    null,
  );

  const generateSupernodeCountries = (nodes: Array<INetworkSupernodes>) => {
    const { tableData, chartData, totalQuantity } = generateSupernodeCountriesList(
      nodes,
      DISPLAY_COUNTRY_QUANTITY,
    );

    const countryTable = tableData.map(({ name, quantity, percentage }, index: number) => {
      return {
        id: index,
        data: [
          { value: name, id: 1 },
          { value: quantity, id: 2 },
          { value: percentage, id: 3 },
        ],
      };
    });

    setCountries(countryTable);
    setCountryQuantity(totalQuantity);
    setCountryChartData(chartData);
  };

  React.useEffect(() => {
    if (supernodes) {
      generateSupernodeCountries(supernodes);
    }
  }, [supernodes]);

  return (
    <DoughnutChart
      title="Supernode Statistics"
      innerTitle="Total"
      innerSubtitle={countryQuantity}
      data={
        countryChartData && generateChartData(countryChartData.headers, countryChartData.quantities)
      }
      table={<Table headers={headers} rows={countries} styles={tableStyles} />}
    />
  );
};

export default SupernodeStatistics;
