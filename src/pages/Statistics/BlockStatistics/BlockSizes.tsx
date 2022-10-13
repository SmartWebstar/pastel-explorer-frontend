import { useState, ChangeEvent, useContext, useEffect } from 'react';
import { Skeleton } from '@material-ui/lab';
import { format, fromUnixTime } from 'date-fns';

import { PeriodTypes, generatePeriodToDropdownOptions } from '@utils/helpers/statisticsLib';
import { periods } from '@utils/constants/statistics';
import { LineChart } from '@components/Summary/LineChart';
import { Dropdown } from '@components/Dropdown/Dropdown';
import { useFetch, useDeferredData } from '@utils/helpers/useFetch/useFetch';
import { IBlock } from '@utils/types/IBlocks';
import * as URLS from '@utils/constants/urls';
import { BlockUnconfirmed } from '@utils/types/ITransactions';
import { SocketContext } from '@context/socket';

import * as SummaryStyles from '@components/Summary/Summary.styles';
import * as Styles from '@pages/CascadeAndSenseStatistics/CascadeAndSenseStatistics.styles';

import { transformBlocksData, ITransformBlocksData } from './BlockStatistics.helpers';

interface ChartProps {
  labels: Array<string>;
  data: Array<number>;
}

const BLOCK_ELEMENTS_COUNT = 8;

const BlockSizes: React.FC = () => {
  const socket = useContext(SocketContext);
  const [period, setPeriod] = useState<PeriodTypes>(periods[5][0]);
  const [blockElements, setBlockElements] = useState<Array<ITransformBlocksData>>([]);

  const fetchUnconfirmedTxs = useFetch<{ data: BlockUnconfirmed[] }>({
    method: 'get',
    url: URLS.GET_UNCONFIRMED_TRANSACTIONS,
  });

  const fetchBlocksData = useFetch<{ data: Array<IBlock>; timestamp: number }>({
    method: 'get',
    url: URLS.BLOCK_URL,
  });

  const handleBlocksData = () => {
    Promise.all([
      fetchBlocksData.fetchData({ params: { limit: BLOCK_ELEMENTS_COUNT } }),
      fetchUnconfirmedTxs.fetchData(),
    ]).then(([blocksData]) => {
      if (blocksData) {
        setBlockElements(transformBlocksData(blocksData.data, blocksData.timestamp));
      }
    });
  };

  useEffect(() => {
    handleBlocksData();

    socket.on('getUpdateBlock', () => {
      handleBlocksData();
    });

    return () => {
      socket.off('getUpdateBlock');
    };
  }, []);

  const generateChartData = (blocks: Array<IBlock>) => {
    const groupedBlocks = blocks.reduce(
      (acc: ChartProps, { size, timestamp }) => {
        const time = format(fromUnixTime(timestamp), 'HH:mm');

        acc.labels.push(time);
        acc.data.push(size / 1024);

        return acc;
      },
      { labels: [], data: [] },
    );

    return groupedBlocks;
  };

  const { isLoading, data: chartData } = useDeferredData<{ data: Array<IBlock> }, ChartProps>(
    { method: 'get', url: `${URLS.BLOCK_URL}?period=${period}` },
    ({ data }) => generateChartData(data),
    undefined,
    undefined,
    [period, blockElements],
  );

  const handleDropdownChange = (
    event: ChangeEvent<{
      value: unknown;
    }>,
  ) => {
    if (event.target.value) {
      setPeriod(event.target.value as PeriodTypes);
    }
  };

  return (
    <SummaryStyles.Card className="cascade-sense-card">
      <SummaryStyles.CardContent>
        <SummaryStyles.ValueWrapper>
          <SummaryStyles.Typography variant="h6">Block sizes (kB)</SummaryStyles.Typography>
        </SummaryStyles.ValueWrapper>
        <SummaryStyles.PercentageWrapper>
          <Styles.Percentage>
            <Dropdown
              value={period}
              onChange={handleDropdownChange}
              options={generatePeriodToDropdownOptions(periods[5])}
              classNameWrapper="cascade-sense-statistics"
            />
          </Styles.Percentage>
        </SummaryStyles.PercentageWrapper>
      </SummaryStyles.CardContent>
      <div>
        {!chartData || isLoading ? (
          <Skeleton animation="wave" variant="rect" height={170} />
        ) : (
          <LineChart
            chartName="blockSizesStatistics"
            dataX={chartData?.labels}
            dataY={chartData?.data}
            offset={1}
            disableClick
          />
        )}
      </div>
    </SummaryStyles.Card>
  );
};

export default BlockSizes;